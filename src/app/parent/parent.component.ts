import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ICharacter } from '../model/Character';
import { ChildComponent } from '../child/child.component';
import { CharacterDataService } from '../services/character-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit, OnDestroy {
  parentSubs: Subscription;
  @ViewChild(ChildComponent, { static: true }) child;

  charTagLine: string;
  characterInfo: ICharacter;
  characterData: string;

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit() {

    setTimeout(() =>
        {
          this.characterInfo = {
        heroName: 'Monkey D. Luffy',
        heroDescription: `
        Monkey D. "Straw Hat" Luffy A young boy who acquires the properties of rubber
        after accidentally eating the supernatural Gum-Gum Fruit.
      `,
        heroPower: 'Gear 2,3,4 / Armament, Observation and Conqueror\'s Haki',
        imageUrl: `../../assets/luffy-gear-2.jpg`
      } as ICharacter;
    }, 3000);

    this.parentSubs = this.characterDataService.currentMessage.subscribe(charData => {
      this.characterData = charData;
    });
  }

  ngAfterViewInit() {
    // adding setTimeOut to delay view initialization to fix ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.charTagLine = this.child.famousTagline, 0);
    // this.charTagLine = this.child.famousTagline; // This will cause ExpressionChangedAfterItHasBeenCheckedError
  }

  getShoutMessage($event) {
    this.charTagLine = $event;
  }

  changeMessage() {
    return this.characterDataService.changeMessage('Pirate King huh! scumbag');
  }

  ngOnDestroy() {
    this.parentSubs.unsubscribe();
  }

}
