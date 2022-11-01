(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-landing-page-landing-page-module"], {
    /***/
    "WpdQ":
    /*!**************************************************************!*\
      !*** ./src/app/features/landing-page/landing-page.module.ts ***!
      \**************************************************************/

    /*! exports provided: LandingPageModule */

    /***/
    function WpdQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
        return LandingPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page-routing.module */
      "paPR");
      /* harmony import */


      var _pages_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/landing-page.component */
      "ivXA");

      var LandingPageModule = function LandingPageModule() {
        _classCallCheck(this, LandingPageModule);
      };

      LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingPageModule
      });
      LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingPageModule_Factory(t) {
          return new (t || LandingPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageModule, {
          declarations: [_pages_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pages_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingPageRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ivXA":
    /*!***********************************************************************!*\
      !*** ./src/app/features/landing-page/pages/landing-page.component.ts ***!
      \***********************************************************************/

    /*! exports provided: LandingPageComponent */

    /***/
    function ivXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
        return LandingPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LandingPageComponent = /*#__PURE__*/function () {
        function LandingPageComponent() {
          _classCallCheck(this, LandingPageComponent);
        }

        _createClass(LandingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingPageComponent;
      }();

      LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
        return new (t || LandingPageComponent)();
      };

      LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingPageComponent,
        selectors: [["app-landing-page"]],
        decls: 2,
        vars: 0,
        template: function LandingPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "landing-page works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xhbmRpbmctcGFnZS9wYWdlcy9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing-page',
            templateUrl: './landing-page.component.html',
            styleUrls: ['./landing-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "paPR":
    /*!**********************************************************************!*\
      !*** ./src/app/features/landing-page/landing-page-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: LandingPageRoutingModule */

    /***/
    function paPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
        return LandingPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/landing-page.component */
      "ivXA");

      var routes = [{
        path: '',
        component: _pages_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]
      }];

      var LandingPageRoutingModule = function LandingPageRoutingModule() {
        _classCallCheck(this, LandingPageRoutingModule);
      };

      LandingPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: LandingPageRoutingModule
      });
      LandingPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function LandingPageRoutingModule_Factory(t) {
          return new (t || LandingPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=features-landing-page-landing-page-module-es5.js.map