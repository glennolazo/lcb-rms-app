import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ICharacter } from '../model/Character';
import { CharacterDataService } from '../services/character-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  childSubs: Subscription;

  @Input() charInfo: ICharacter;
  @Output() characterTagLine = new EventEmitter<string>();

  famousTagline = 'Testing Via Child';
  characterData: string;

  constructor(private characterDataService: CharacterDataService) { }

  ngOnInit() {
    this.childSubs = this.characterDataService.currentMessage.subscribe(
      charData => this.characterData = charData
    );
  }

  // characterShout() {
  //   this.characterTagLine.emit("Testing");
  // }

  changeTaglineViaVC() {
    this.famousTagline = 'Yamete!';
  }

  changeTaglineViaService() {
    return this.characterDataService.changeMessage('I will kick Kaido\'s ass');
  }

  ngOnDestroy() {
    this.childSubs.unsubscribe();
  }
}
