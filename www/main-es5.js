function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var node_mind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! node-mind */
    "./node_modules/node-mind/index.js");
    /* harmony import */


    var node_mind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_mind__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //import { recurrent } from 'brain.js/src';


    function AppComponent_div_93_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Is this Pink?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_93_Template_img_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.isDogFun(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_93_Template_img_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.isDogFun(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.dogImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.targetImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("AI: I am ", ctx_r0.trainResult, "% sure this is the dog.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.yesImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.noImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_div_96_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_96_Template_img_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.continueLoop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_96_Template_img_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.stopLoop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_96_Template_img_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.trainButton();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_96_Template_img_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.finishTest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.dogImageTest, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("AI said it is ", ctx_r1.testResult, " Pink.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Output is ", ctx_r1.testPercent, " %.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.continueTestImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.stopImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.continueImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.finishImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'AI Game';
        this.array = [{
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog5.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog38.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog11.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog39.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog24t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog4.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog12t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog6.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog53t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog7.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog3.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog16.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog17.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog2.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog13t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog25t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog15.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog29.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog28.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog14.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog1.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog73.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog66.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog59t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog58.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog70.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog64.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog65.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog75t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog35t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog62t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog23t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog61.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog48.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog60.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog74.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog19t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog76.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog63.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog54t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog8t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog46.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog52.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog47.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog36t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog77t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog51.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog45.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog44.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog78.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog40.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog68.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog69.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog41.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog55.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog21t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog56t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog43.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog57.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog42.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog67t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog71t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog31.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog30.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog32.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog26.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog27.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog33.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog10t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog50t.png',
          "isDog": true
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog37.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog22.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog9.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog20.png',
          "isDog": false
        }, {
          "img": 'https://static.readyai.org/dev/test/assets/dog/dog34.png',
          "isDog": false
        }];
        this.dogImage = 'https://static.readyai.org/dev/test/assets/dog/dog1.png';
        this.targetImage = 'https://static.readyai.org/dev/test/assets/dog/dog77t.png';
        this.dogImageTest = 'https://static.readyai.org/dev/test/assets/dog/dog1.png';
        this.backgroundImage = 'https://static.readyai.org/dev/test/assets/background/background1.png';
        this.girlDogImage = 'https://static.readyai.org/dev/test/assets/background/girldog.png';
        this.robot1Image = 'https://static.readyai.org/dev/test/assets/background/robot1.png';
        this.grassImage = './assets/background/grass.png';
        this.leftImage = 'https://static.readyai.org/dev/test/assets/background/left.png';
        this.rightImage = 'https://static.readyai.org/dev/test/assets/background/right.png';
        this.bar = 'https://static.readyai.org/dev/test/assets/background/bar.png';
        this.robotImage0 = 'assets/background/littlerobot.png';
        this.robotImage1 = 'assets/background/littlerobot2.png';
        this.littlerobotImage = this.robotImage1;
        this.trainImage = 'https://static.readyai.org/dev/test/assets/background/train1.png';
        this.bubbleImage = 'https://static.readyai.org/dev/test/assets/background/bubble.png';
        this.yesImage = 'https://static.readyai.org/dev/test/assets/background/yes.png';
        this.noImage = 'https://static.readyai.org/dev/test/assets/background/no.png';
        this.askImage = 'assets/background/ask.png';
        this.nextImage = 'assets/background/next.png';
        this.wordsImage = 'https://static.readyai.org/dev/test/assets/background/words.png';
        this.testImage = 'https://static.readyai.org/dev/test/assets/background/test1.png';
        this.test2Image = 'https://static.readyai.org/dev/test/assets/background/test2.png';
        this.continueImage = 'https://static.readyai.org/dev/test/assets/background/continue.png';
        this.stopImage = 'https://static.readyai.org/dev/test/assets/background/stoporange.png';
        this.continueTestImage = 'https://static.readyai.org/dev/test/assets/background/continueblue.png';
        this.finishImage = 'https://static.readyai.org/dev/test/assets/background/finish.png';
        this.testIndex = 0;
        this.index = 0;
        this.total = 0;
        this.correct = 0;
        this.result = false;
        this.trainAi = false;
        this.girldogShow = false;
        this.testResult = '';
        this.trainResult = '???';
        this.testPercent = 0;
        this.testAiContinue = false;
        this.testAiLoop = null;
        this.sceneNumber = 0;
        this.testTime = 0; //   modal = document.getElementById("myModal");
        //   modalSpan = document.getElementsByClassName("close")[0];

        this.b = 0;
        this.c = 0;
        this.isTyping = true;
        this.isLoop = true;
        this.isPlaceholder = false;
        this.i = 0;
        this.typingSpeed = 10;
        this.waitTime = 600;
        this.targetLength = 0;
        this.isTraining = true;
        this.isTesting = false;
        this.mind = new node_mind__WEBPACK_IMPORTED_MODULE_1___default.a({
          activator: 'relu',
          learningRate: 0.1,
          iterations: 40
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line: indent
          document.getElementById("background").addEventListener("click", this.scene.bind(this), true);
        }
      }, {
        key: "scene",
        value: function scene() {
          var _this = this;

          switch (this.sceneNumber) {
            case 0:
              document.getElementById("girlDog").style.display = "inline-block";
              document.getElementById("robot1").style.display = "inline-block";
              document.getElementById("grass").style.display = "inline-block";
              break;

            case 1:
              document.getElementById("left").style.display = "inline-block";
              document.getElementById("right").style.display = "inline-block";
              setTimeout(function () {
                _this.typing("words", "Please take care of my dog Pink while I’m not here.");
              }, this.waitTime);
              break;

            case 2:
              this.b = this.targetLength;
              setTimeout(function () {
                _this.reset();
              }, this.waitTime);
              setTimeout(function () {
                _this.typing("words2", "No problem, but teach me first.");
              }, this.waitTime);
              break;

            case 3:
              this.b = this.targetLength;
              setTimeout(function () {
                _this.reset();
              }, this.waitTime);
              document.getElementById("explainBar").style.display = "inline-block";
              setTimeout(function () {
                _this.typing("explain", "Let’s help AI learn how to recognize Pink from other dogs.");
              }, this.waitTime); // setTimeout(() => {this.typing("explain", "The girl needs AI’s help to take care of her dog while she is going to work.\nLet’s help AI learn how to recognize Pink from other dogs."+"\n"+"In this activity, you will train AI(Artificial Intelligence) to identify Pink from other dogs. \nAI does not know if a dog is “Pink” or “Not Pink”. It can process images and identify patterns to help it decide.")}, this.waitTime)

              break;

            case 4:
              this.b = this.targetLength;
              break;
            // case 5:
            // 	setTimeout(() => {this.reset()}, this.waitTime);
            // 	setTimeout(() => {this.typing("explain", "To help AI, use the two buttons below to label an image as “Pink” or “Not Pink”. This is called supervised learning. Supervised learning is one kind of machine learning. Machine learning is how computers recognize patterns and make decisions without being explicitly programmed. Supervised learning is a type of machine learning where algorithms learn from labeled data.")}, this.waitTime)
            // 	break;
            // case 6:
            // 	this.b = this.targetLength;
            // 	break;
            // case 7:
            // 	setTimeout(() => {this.reset()}, this.waitTime);
            // 	setTimeout(() => {this.typing("explain", "AI learns from data is like you learn from experiences. You are training AI with each click, the more data you provide AI, the more AI learns.")}, this.waitTime)
            // 	break;
            // case 8:
            // 	this.b = this.targetLength;
            // 	break;

            case 5:
              setTimeout(function () {
                _this.reset();
              }, this.waitTime);
              document.getElementById("girlDog").style.display = "none";
              document.getElementById("robot1").style.display = "none";
              document.getElementById("grass").style.display = "none";
              document.getElementById("left").style.display = "none";
              document.getElementById("right").style.display = "none";
              document.getElementById("typing1").style.display = "none";
              document.getElementById("typing2").style.display = "none";
              document.getElementById("explainWords").style.display = "none";
              document.getElementById("explainBar").style.display = "none";
              document.getElementById("littlerobot").style.display = "inline-block";
              document.getElementById("trainButton").style.display = "inline-block";
              document.getElementById("bubble").style.display = "inline-block";
              document.getElementById("testButton").style.display = "inline-block";
              this.trainAi = true;
          }

          this.sceneNumber++;
        }
      }, {
        key: "trainButton",
        value: function trainButton() {
          if (this.isTraining) return;
          this.trainImage = 'https://static.readyai.org/dev/test/assets/background/train1.png';
          this.testImage = 'https://static.readyai.org/dev/test/assets/background/test1.png';
          this.trainAi = !this.trainAi;
          this.result = false;
          this.littlerobotImage = this.robotImage1;
          this.stopLoop();
        }
      }, {
        key: "loop",
        value: function loop() {
          if (this.isTesting) return;
          this.testAiLoop = setInterval(function () {
            document.getElementById("test").click();
          }, 1000);
          this.isTesting = true;
        }
      }, {
        key: "stopLoop",
        value: function stopLoop() {
          this.isTesting = false;
          clearInterval(this.testAiLoop);
        }
      }, {
        key: "showAi",
        value: function showAi() {
          this.isTraining = false;
          this.trainImage = 'https://static.readyai.org/dev/test/assets/background/train2.png';
          this.testImage = 'https://static.readyai.org/dev/test/assets/background/test2.png';
          this.testAi();
          this.loop();
        }
      }, {
        key: "testAi",
        value: function testAi() {
          this.littlerobotImage = this.robotImage0;

          if (this.testTime == 1) {
            this.modalShow2();
            this.stopLoop();
          }

          this.trainAi = false;
          this.randomTestDog();

          if (this.total > 0) {
            var percent = this.mind.predict([this.testIndex / this.array.length, this.array[this.testIndex].isDog ? 1 : 0]) * 100; // let percent = this.correct / this.total *100 * (this.total/this.array.length)

            this.testResult = percent >= 50 ? '' : 'NOT';
            this.testPercent = percent; //this.testPercent = Math.pow(Math.pow((percent-50),2),0.25)*100/7
          } else {
            this.testResult = '';
            this.testPercent = 0;
          }

          this.result = true; // document.getElementById("continue").click();

          this.testTime++;
        }
      }, {
        key: "train",
        value: function train() {
          this.mind.learn([{
            input: [this.index / this.array.length, this.array[this.index].isDog ? 1 : 0],
            output: [this.array[this.index].isDog ? 1 : 0]
          }]);
        }
      }, {
        key: "isDogFun",
        value: function isDogFun(a) {
          this.total++;

          if (this.total == 3) {
            this.modalShow();
          }

          if (this.array[this.index].isDog == a) {
            this.train();
          } else {//this.train(false);
          }

          this.randomDog();
          this.littlerobotImage = this.robotImage1;
          this.trainResult = (this.mind.predict([this.index / this.array.length, this.array[this.index].isDog ? 1 : 0]) * 100).toString();
        }
      }, {
        key: "modalShow",
        value: function modalShow() {
          var _this2 = this;

          document.getElementById("myModal").style.display = "block";
          setTimeout(function () {
            _this2.reset();
          }, this.waitTime);
          setTimeout(function () {
            _this2.typing("modalWords", "AI learns from data is like you learn from experiences. You are training AI with each click, the more data you provide AI, the more AI learns.");
          }, this.waitTime);
        }
      }, {
        key: "next",
        value: function next() {
          var _this3 = this;

          document.getElementById("myModal").style.display = "none";
          document.getElementById("modal2").style.display = "block";
          setTimeout(function () {
            _this3.reset();
          }, this.waitTime);
          setTimeout(function () {
            _this3.typing("modalWords2", 'These are always called “inputs”.');
          }, this.waitTime);
          document.getElementById("inputbox").style.display = "inline-block";
        }
      }, {
        key: "modalShow2",
        value: function modalShow2() {
          var _this4 = this;

          document.getElementById("modal3").style.display = "block";
          setTimeout(function () {
            _this4.reset();
          }, this.waitTime);
          setTimeout(function () {
            _this4.typing("modalWords3", 'These are always called “outputs”.');
          }, this.waitTime);
          document.getElementById("outputbox").style.display = "inline-block";
        }
      }, {
        key: "next2",
        value: function next2() {
          var _this5 = this;

          document.getElementById("outputbox").style.display = "none";
          document.getElementById("modal3").style.display = "none";
          document.getElementById("modal32").style.display = "block";
          setTimeout(function () {
            _this5.reset();
          }, this.waitTime);
          setTimeout(function () {
            _this5.typing("modalWords32", 'These are the confidence ratings of the AI algorithm. It ranges from 0%-100%. It tells you how accurate the AI is when identifying Pink from other dogs.');
          }, this.waitTime);
          document.getElementById("accuracybox").style.display = "inline-block";
        }
      }, {
        key: "modalClose",
        value: function modalClose() {
          document.getElementById("myModal0").style.display = "none";
          document.getElementById("myModal").style.display = "none";
          document.getElementById("modal2").style.display = "none";
          document.getElementById("modal3").style.display = "none";
          document.getElementById("modal4").style.display = "none";
          document.getElementById("inputbox").style.display = "none";
          document.getElementById("outputbox").style.display = "none";
          document.getElementById("accuracybox").style.display = "none";
        }
      }, {
        key: "modalClose2",
        value: function modalClose2() {
          document.getElementById("modal32").style.display = "none";
          document.getElementById("accuracybox").style.display = "none";
          this.showAi();
          this.isTesting = true;
        }
      }, {
        key: "finishTest",
        value: function finishTest() {
          var _this6 = this;

          document.getElementById("modal4").style.display = "block";
          setTimeout(function () {
            _this6.reset();
          }, this.waitTime);
          setTimeout(function () {
            _this6.typing("modalWords4", 'You just trained AI(Artificial Intelligence) to identify Pink from other dogs using supervised learning. Supervised learning is one kind of machine learning. Machine learning is how computers recognize patterns and make decisions without being explicitly programmed. Supervised learning is a type of machine learning where algorithms learn from labeled data. AI did not know if a dog is “Pink” or “Not Pink”. It can process images and identify patterns to help it decide.');
          }, this.waitTime);
          this.stopLoop();
        }
      }, {
        key: "continueLoop",
        value: function continueLoop() {
          this.showAi();
        }
      }, {
        key: "randomDog",
        value: function randomDog() {
          var index0 = this.index;
          this.index = Math.floor(Math.random() * this.array.length);

          while (this.index == index0 || this.array[this.index].isDog && this.array[index0].isDog) {
            console.log(this.index);
            this.index = Math.floor(Math.random() * this.array.length);
          }

          this.dogImage = this.array[this.index].img;
        }
      }, {
        key: "randomTestDog",
        value: function randomTestDog() {
          this.testIndex = Math.floor(Math.random() * this.array.length);
          this.dogImageTest = this.array[this.testIndex].img;
        }
      }, {
        key: "gObj",
        value: function gObj(Obj) {
          var obj;
          obj = document.getElementById(Obj);
          return obj;
        }
        /*---------------------tying----------------------------*/

      }, {
        key: "typing",
        value: function typing(typingID, strings) {
          var _this7 = this;

          document.getElementById(typingID).innerHTML = strings.substring(this.c, this.b);
          this.targetLength = strings.length;

          if (this.b < strings.length) {
            this.b++;
          } else {
            this.isTyping = false;
          }

          if (this.isTyping) {
            setTimeout(function () {
              _this7.typing(typingID, strings);
            }, this.typingSpeed);
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.b = 0;
          this.c = 0;
          this.isTyping = true;
        }
      }, {
        key: "softmax",
        value: function softmax(arr) {
          var C = Math.max.apply(Math, _toConsumableArray(arr));
          var d = arr.map(function (y) {
            return Math.exp(y - C);
          }).reduce(function (a, b) {
            return a + b;
          });
          return arr.map(function (value, index) {
            return Math.exp(value - C) / d;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 97,
      vars: 12,
      consts: [["id", "background"], ["id", "girlDog", 2, "display", "none"], ["alt", "image", 2, "width", "241px", "height", "353px", 3, "src"], ["id", "robot1", 2, "display", "none"], ["alt", "image", 2, "width", "278px", "height", "305px", 3, "src"], ["id", "grass", 2, "display", "none"], ["alt", "image", 2, "width", "300px", "height", "160px", 3, "src"], ["id", "left", 2, "display", "none"], ["alt", "image", 2, "width", "165px", "height", "139px", 3, "src"], ["id", "typing1"], ["id", "words"], ["id", "right", 2, "display", "none"], ["id", "typing2"], ["id", "words2"], ["id", "explainBar", 2, "display", "none"], ["alt", "image", 2, "width", "855px", "height", "135px", 3, "src"], ["id", "explainWords"], ["id", "explain"], ["id", "myModal0", 1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], ["id", "modalWords0"], [1, "next", 3, "click"], ["id", "myModal", 1, "modal"], ["id", "modalWords"], ["id", "modal2", 1, "modal"], ["id", "modalContent2", 1, "modal-content"], ["id", "modalWords2"], ["id", "modal3", 1, "modal"], ["id", "modalContent3", 1, "modal-content"], ["id", "modalWords3"], ["id", "modal32", 1, "modal"], ["id", "modalContent32", 1, "modal-content"], ["id", "modalWords32"], ["id", "modal4", 1, "modal"], ["id", "modalContent4", 1, "modal-content"], ["id", "modalWords4"], ["id", "littlerobot", 2, "display", "none"], ["id", "robot", "alt", "image", 2, "width", "297px", "height", "280px", 3, "src"], [1, "modelButtons"], ["id", "trainButton", 2, "display", "none"], ["alt", "image", 2, "width", "167px", "height", "81px", 3, "src", "click"], ["id", "testButton", 2, "display", "none"], ["id", "bubble", 2, "display", "none"], ["alt", "image", 2, "width", "556px", "height", "431px", 3, "src"], ["class", "training", 4, "ngIf"], ["hidden", "", "id", "test", 3, "click"], ["class", "showResult", 4, "ngIf"], [1, "training"], ["id", "inputbox", 2, "display", "none"], [1, "words"], [1, "dog"], ["alt", "image", 3, "src"], [1, "target"], [1, "buttons"], [1, "trainMsg"], [1, "yesButton"], ["alt", "image", 2, "width", "127px", "height", "70px", 3, "src", "click"], [1, "noButton"], [1, "showResult"], ["id", "outputbox", 2, "display", "none"], [1, "testmsg"], ["id", "accuracybox", 2, "display", "none"], [1, "accuracy"], [1, "continueTestButton"], ["alt", "image", 2, "width", "206px", "height", "81px", 3, "src", "click"], [1, "stopButton"], [1, "continueButton"], [1, "finishButton"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_32_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_37_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_41_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_46_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_50_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_55_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_59_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_64_listener() {
            return ctx.next2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_68_listener() {
            return ctx.modalClose2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_73_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_77_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_82_listener() {
            return ctx.modalClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_88_listener() {
            return ctx.trainButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_img_click_90_listener() {
            return ctx.showAi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AppComponent_div_93_Template, 16, 5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_94_listener() {
            return ctx.testAi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, AppComponent_div_96_Template, 17, 7, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.girlDogImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.robot1Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.grassImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.leftImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.rightImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.bar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.littlerobotImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.trainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.testImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.bubbleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trainAi);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["#background[_ngcontent-%COMP%] {\n    width: 960px;\n    height: 540px;\n    background-repeat: no-repeat;\n    background-image: url(\"https://static.readyai.org/dev/test/assets/background/background1.png\");\n    background-size: 960px 540px;\n    margin: auto;\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n\n\n#girlDog[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n\n  top: 151px;\n  left: 156px;\n    -webkit-animation: myfirst 3s 1;\n            animation: myfirst 3s 1;\n\n}\n\n@-webkit-keyframes myfirst {\n\n\n\n  0%   {left: 0px; top:151px; transform: translate(1px, 1px) rotate(0deg);}\n\n  10% { transform: translate(-1px, -2px) rotate(-5deg); }\n\n  20% { transform: translate(-3px, 0px) rotate(5deg); }\n\n  30% { transform: translate(3px, 2px) rotate(-5deg); }\n\n  40% { transform: translate(1px, -1px) rotate(5deg); }\n\n  50% { transform: translate(-1px, 2px) rotate(-5deg); }\n\n  60% { transform: translate(-3px, 1px) rotate(5deg); }\n\n  70% { transform: translate(3px, 1px) rotate(-5deg); }\n\n  80% { transform: translate(-1px, -1px) rotate(5deg); }\n\n  90% { transform: translate(1px, 2px) rotate(-5deg); }\n\n  100% {left: 156px; top:151px; transform: translate(1px, -2px) rotate(0deg); }\n}\n\n@keyframes myfirst {\n\n\n\n  0%   {left: 0px; top:151px; transform: translate(1px, 1px) rotate(0deg);}\n\n  10% { transform: translate(-1px, -2px) rotate(-5deg); }\n\n  20% { transform: translate(-3px, 0px) rotate(5deg); }\n\n  30% { transform: translate(3px, 2px) rotate(-5deg); }\n\n  40% { transform: translate(1px, -1px) rotate(5deg); }\n\n  50% { transform: translate(-1px, 2px) rotate(-5deg); }\n\n  60% { transform: translate(-3px, 1px) rotate(5deg); }\n\n  70% { transform: translate(3px, 1px) rotate(-5deg); }\n\n  80% { transform: translate(-1px, -1px) rotate(5deg); }\n\n  90% { transform: translate(1px, 2px) rotate(-5deg); }\n\n  100% {left: 156px; top:151px; transform: translate(1px, -2px) rotate(0deg); }\n}\n\n#robot1[_ngcontent-%COMP%] {\n    z-index: 2;\n    position: absolute;\n    top: 197px;\n    left: 596px;\n}\n\n#grass[_ngcontent-%COMP%] {\n  z-index: 4;\n  position: absolute;\n  top: 380px;\n  left: 0px;\n}\n\n#left[_ngcontent-%COMP%] {\n    z-index: 2;\n    position: absolute;\n    top: 44px;\n    left: 321px;\n}\n\n#right[_ngcontent-%COMP%] {\n    z-index: 2;\n    position: absolute;\n    right: 363px;\n    bottom: 88px;\n}\n\n#typing1[_ngcontent-%COMP%] {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 17px;\n  color: #333;\n  line-height: 1.75;\n    z-index: 3;\n    position: relative; \n    bottom: 133px;\n    left: 9px;\n    width: 155px; \n    height: 139px;\n}\n\n#typing2[_ngcontent-%COMP%] {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  color: #333;\n  line-height: 1.75;\n    z-index: 3;\n    position: relative;\n    left: 10px;\n    bottom: 135px;\n    width: 155px;\n    height: 139px;\n}\n\n#explainBar[_ngcontent-%COMP%] {\n    z-index: 4;\n    position: relative;\n    left: 54px;\n    top: 407px;\n}\n\n#explain[_ngcontent-%COMP%] {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.75;\n  \n    z-index: 3;\n    position: relative;\n    left: 20px;\n    bottom: 126px;\n    width: 855px;\n    height: 135px;\n    color: whitesmoke;\n}\n\n#littlerobot[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  left: 19px;\n  top: 260px;\n}\n\n.modelButtons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 110px;\n  top: 82px;\n}\n\n#trainButton[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  \n  \n}\n\n#testButton[_ngcontent-%COMP%] {\n    position: absolute;\n    \n    z-index: 2;\n    top: 102px;\n}\n\n#outputbox[_ngcontent-%COMP%] {\n\n\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  border: solid 3px #ffd700;\n  right: 147px;\n\n}\n\n#inputbox[_ngcontent-%COMP%] {\n  \n  width: 210px;\n  height: 210px;\n  position: absolute;\n\n  top: 56px;\n\n  right: 144px;\n  border: solid 3px #ffd700;\n}\n\n#accuracybox[_ngcontent-%COMP%] {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  position: absolute;\n  border: solid 3px #ffd700;\n  width: 200px;\n  height: 40px;\n  top: 193px;\n  right: 147px;\n}\n\n#modalWords[_ngcontent-%COMP%]{\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n\n}\n\n#modalWords2[_ngcontent-%COMP%]{\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n\n}\n\n#modalWords3[_ngcontent-%COMP%]{\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n\n}\n\n#modalWords32[_ngcontent-%COMP%]{\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n\n}\n\n.training[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: absolute;\n  right: 110px;\n  top: 22px;\n  width: 500px;\n  height: 500px;\n}\n\n#bubble[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  right: 125px;\n  top: 9px;\n    animation:vibrate-1 2s alternate infinite;\n    -webkit-animation:vibrate-1 2s alternate infinite;\n}\n\n\n\n@-webkit-keyframes vibrate-1 {\n    0% {\n      transform: translate(0);\n    }\n    20% {\n      transform: translate(-2px, 2px);\n    }\n    40% {\n      transform: translate(-2px, -2px);\n    }\n    60% {\n      transform: translate(2px, 2px);\n    }\n    80% {\n      transform: translate(2px, -2px);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n\n@keyframes vibrate-1 {\n    0% {\n      transform: translate(0);\n    }\n    20% {\n      transform: translate(-2px, 2px);\n    }\n    40% {\n      transform: translate(-2px, -2px);\n    }\n    60% {\n      transform: translate(2px, 2px);\n    }\n    80% {\n      transform: translate(2px, -2px);\n    }\n    100% {\n      transform: translate(0);\n    }\n  }\n\n.words[_ngcontent-%COMP%]{\n  top: 69px;\n  width: 500px;\n  text-align: center;\n  position: relative;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n\n}\n\n.trainMsg[_ngcontent-%COMP%]{\n  top: 0px;\n  width: 500px;\n  text-align: left;\n  left:75px;\n  position: relative;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n\n}\n\n.dog[_ngcontent-%COMP%]{\n  width: 500px;\n  text-align: center;\n    top: 69px;\n\n    position: relative;\n}\n\n.buttons[_ngcontent-%COMP%] {\n    position: relative;\n    \n    bottom: 67px;\n    width: 500px;\n    text-align: center;\n}\n\n.yesButton[_ngcontent-%COMP%] {\n  left: 93px;\n  width: 180px;\n  position: relative;\n}\n\n.noButton[_ngcontent-%COMP%] {\n  bottom: 74px;\n  left: 271px;\n  width: 127px;\n  position: relative;\n}\n\n.target[_ngcontent-%COMP%] {\n  top: -170px;\n  right: -135px;\n  position: relative;\n}\n\n.showResult[_ngcontent-%COMP%] {\n  width: 500px;\n    height: 500px;\n    text-align: center;\n    z-index: 3;\n    position: absolute;\n        right: 110px;\n    top: 63px;\n}\n\n.accuracy[_ngcontent-%COMP%] {\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n    color: #F15A24;\n}\n\n.testmsg[_ngcontent-%COMP%] {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n\n.continueTestButton[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 3;\n    top: 2px;\n    left: 45px;\n    width: 206px;\n}\n\n.stopButton[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 3;\n    top: -83px;\n    left: 244px;\n    width: 206px;\n\n}\n\n.continueButton[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 26px;\n  \n  width: 206px;\n  left: 41px;\n}\n\n.finishButton[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: 111px;\n    left: 246px;\n    width: 206px;\n\n}\n\n\n\n\n\n.modal[_ngcontent-%COMP%] {\n    \n    display: none; \n    position: fixed; \n    z-index: 4; \n    padding-top: 100px; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: rgb(0,0,0); \n    background-color: rgba(0,0,0,0.4); \n  }\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n    \n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n    \n  }\n\n#modalContent2[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: 0 19%;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 20%;\n  }\n\n#modalContent3[_ngcontent-%COMP%] { \n    background-color: #fefefe;\n    margin: 0 19%;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 25%;\n    \n  }\n\n#modalContent32[_ngcontent-%COMP%] {\n    background-color: #fefefe;\n    margin: 0 19%;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 25%;\n  }\n\n#modalContent4[_ngcontent-%COMP%] {\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    color: #333;\n    line-height: 1.75;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 60%;\n    height: 50%\n  }\n\n\n\n.close[_ngcontent-%COMP%] {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw4RkFBOEY7SUFDOUYsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTs7Ozs7Ozs7R0FRRzs7QUFHSDtFQUNFLFVBQVU7RUFDVixrQkFBa0I7O0VBRWxCLFVBQVU7RUFDVixXQUFXO0lBQ1QsK0JBQXVCO1lBQXZCLHVCQUF1Qjs7QUFFM0I7O0FBQ0E7Ozs7RUFJRSxNQUFNLFNBQVMsRUFBRSxTQUFTLEVBQUUsMkNBQTJDLENBQUM7O0VBRXhFLE1BQU0sOENBQThDLEVBQUU7O0VBRXRELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNkNBQTZDLEVBQUU7O0VBRXJELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNkNBQTZDLEVBQUU7O0VBRXJELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sV0FBVyxFQUFFLFNBQVMsRUFBRSw0Q0FBNEMsRUFBRTtBQUM5RTs7QUF6QkE7Ozs7RUFJRSxNQUFNLFNBQVMsRUFBRSxTQUFTLEVBQUUsMkNBQTJDLENBQUM7O0VBRXhFLE1BQU0sOENBQThDLEVBQUU7O0VBRXRELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNkNBQTZDLEVBQUU7O0VBRXJELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sNkNBQTZDLEVBQUU7O0VBRXJELE1BQU0sNENBQTRDLEVBQUU7O0VBRXBELE1BQU0sV0FBVyxFQUFFLFNBQVMsRUFBRSw0Q0FBNEMsRUFBRTtBQUM5RTs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFHQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFJQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsZUFBZTtFQUNmLGlCQUFpQjs7SUFFZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtrQkFDYztJQUNkLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZOztBQUVkOztBQUVBOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCOztFQUVsQixTQUFTOztFQUVULFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5REFBeUQ7O0FBRTNEOztBQUVBO0VBQ0UseURBQXlEOztBQUUzRDs7QUFFQTtFQUNFLHlEQUF5RDs7QUFFM0Q7O0FBR0E7RUFDRSx5REFBeUQ7O0FBRTNEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0lBQ04seUNBQXlDO0lBQ3pDLGlEQUFpRCxDQUFDLCtCQUErQjtBQUNyRjs7QUFFQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0k7TUFFVSx1QkFBdUI7SUFDakM7SUFDQTtNQUVVLCtCQUErQjtJQUN6QztJQUNBO01BRVUsZ0NBQWdDO0lBQzFDO0lBQ0E7TUFFVSw4QkFBOEI7SUFDeEM7SUFDQTtNQUVVLCtCQUErQjtJQUN6QztJQUNBO01BRVUsdUJBQXVCO0lBQ2pDO0VBQ0Y7O0FBQ0E7SUFDRTtNQUVVLHVCQUF1QjtJQUNqQztJQUNBO01BRVUsK0JBQStCO0lBQ3pDO0lBQ0E7TUFFVSxnQ0FBZ0M7SUFDMUM7SUFDQTtNQUVVLDhCQUE4QjtJQUN4QztJQUNBO01BRVUsK0JBQStCO0lBQ3pDO0lBQ0E7TUFFVSx1QkFBdUI7SUFDakM7RUFDRjs7QUFFRjtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5REFBeUQ7RUFDekQsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHlEQUF5RDtFQUN6RCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7SUFDaEIsU0FBUzs7SUFFVCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7UUFDZCxZQUFZO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlEQUF5RDtJQUN6RCxjQUFjO0FBQ2xCOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTs7RUFFWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7O0FBRUE7Ozs7OztHQU1HOztBQUVILDJCQUEyQjs7QUFDM0I7O0lBRUksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztBQUVBLGtCQUFrQjs7QUFDbEI7O0lBRUUseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7O0VBRVo7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7O0VBRVo7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaOztBQUlBO0lBQ0UseURBQXlEO0lBQ3pELGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Y7RUFDRjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztBQUVBOztJQUVFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIGhlaWdodDogNTQwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0YXRpYy5yZWFkeWFpLm9yZy9kZXYvdGVzdC9hc3NldHMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kMS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5NjBweCA1NDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4vKiAuc2NlbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogODBweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDk2MHB4O1xuICBoZWlnaHQ6IDU0MHB4O1xufSAqL1xuXG5cbiNnaXJsRG9nIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMTUxcHg7XG4gIGxlZnQ6IDE1NnB4O1xuICAgIGFuaW1hdGlvbjogbXlmaXJzdCAzcyAxO1xuXG59XG5Aa2V5ZnJhbWVzIG15Zmlyc3Qge1xuXG5cblxuICAwJSAgIHtsZWZ0OiAwcHg7IHRvcDoxNTFweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTt9XG5cbiAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC01ZGVnKTsgfVxuXG4gIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDVkZWcpOyB9XG5cbiAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgtNWRlZyk7IH1cblxuICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSg1ZGVnKTsgfVxuXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC01ZGVnKTsgfVxuXG4gIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDVkZWcpOyB9XG5cbiAgNzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtNWRlZyk7IH1cblxuICA4MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoNWRlZyk7IH1cblxuICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKC01ZGVnKTsgfVxuXG4gIDEwMCUge2xlZnQ6IDE1NnB4OyB0b3A6MTUxcHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKDBkZWcpOyB9XG59XG5cbiNyb2JvdDEge1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTk3cHg7XG4gICAgbGVmdDogNTk2cHg7XG59XG5cblxuI2dyYXNzIHtcbiAgei1pbmRleDogNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4MHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cblxuXG4jbGVmdCB7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0NHB4O1xuICAgIGxlZnQ6IDMyMXB4O1xufVxuI3JpZ2h0IHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzYzcHg7XG4gICAgYm90dG9tOiA4OHB4O1xufVxuXG4jdHlwaW5nMSB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgei1pbmRleDogMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIGJvdHRvbTogMTMzcHg7XG4gICAgbGVmdDogOXB4O1xuICAgIHdpZHRoOiAxNTVweDsgXG4gICAgaGVpZ2h0OiAxMzlweDtcbn1cblxuI3R5cGluZzIge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIHotaW5kZXg6IDM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMzVweDtcbiAgICB3aWR0aDogMTU1cHg7XG4gICAgaGVpZ2h0OiAxMzlweDtcbn1cblxuI2V4cGxhaW5CYXIge1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDU0cHg7XG4gICAgdG9wOiA0MDdweDtcbn1cblxuI2V4cGxhaW4ge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIFxuICAgIHotaW5kZXg6IDM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYm90dG9tOiAxMjZweDtcbiAgICB3aWR0aDogODU1cHg7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuI2xpdHRsZXJvYm90IHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOXB4O1xuICB0b3A6IDI2MHB4O1xufVxuXG4ubW9kZWxCdXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMTBweDtcbiAgdG9wOiA4MnB4O1xufVxuXG4jdHJhaW5CdXR0b24ge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIGxlZnQ6IDI0N3B4OyAqL1xuICBcbn1cblxuI3Rlc3RCdXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiB0b3A6IDE3NHB4O1xuICAgIGxlZnQ6IDI0N3B4OyAqL1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiAxMDJweDtcbn1cblxuI291dHB1dGJveCB7XG5cblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2ZmZDcwMDtcbiAgcmlnaHQ6IDE0N3B4O1xuXG59XG5cbiNpbnB1dGJveCB7XG4gIFxuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDU2cHg7XG5cbiAgcmlnaHQ6IDE0NHB4O1xuICBib3JkZXI6IHNvbGlkIDNweCAjZmZkNzAwO1xufVxuXG4jYWNjdXJhY3lib3gge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2ZmZDcwMDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRvcDogMTkzcHg7XG4gIHJpZ2h0OiAxNDdweDtcbn1cblxuI21vZGFsV29yZHN7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxufVxuXG4jbW9kYWxXb3JkczJ7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxufVxuXG4jbW9kYWxXb3JkczN7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxufVxuXG5cbiNtb2RhbFdvcmRzMzJ7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxufVxuXG4udHJhaW5pbmcge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMTBweDtcbiAgdG9wOiAyMnB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbiNidWJibGUge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMjVweDtcbiAgdG9wOiA5cHg7XG4gICAgYW5pbWF0aW9uOnZpYnJhdGUtMSAycyBhbHRlcm5hdGUgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246dmlicmF0ZS0xIDJzIGFsdGVybmF0ZSBpbmZpbml0ZTsvKmluZmluaXRl5peg6ZmQ5pKt5pS+77yMYWx0ZXJuYXRl6L2u5rWB5Y+N5ZCR5pKt5pS+Ki9cbn1cbiAgICAgXG4vKiBAa2V5ZnJhbWVzIFVwZG93bntcbiAgICBmcm9te21hcmdpbi10b3A6MTBweDt9XG4gICAgdG97bWFyZ2luLXRvcDowcHg7fVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIFVwZG93bntcbiAgICBmcm9te21hcmdpbi10b3A6MzBweDt9XG4gICAgdG97bWFyZ2luLXRvcDoxMHB4O31cbn0gKi9cblxuQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGUtMSB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gICAgfVxuICAgIDgwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICB9XG4gIH1cblxuLndvcmRze1xuICB0b3A6IDY5cHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi50cmFpbk1zZ3tcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGVmdDo3NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi5kb2d7XG4gIHdpZHRoOiA1MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogNjlweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICBib3R0b206IDY3cHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnllc0J1dHRvbiB7XG4gIGxlZnQ6IDkzcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm9CdXR0b24ge1xuICBib3R0b206IDc0cHg7XG4gIGxlZnQ6IDI3MXB4O1xuICB3aWR0aDogMTI3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhcmdldCB7XG4gIHRvcDogLTE3MHB4O1xuICByaWdodDogLTEzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaG93UmVzdWx0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTEwcHg7XG4gICAgdG9wOiA2M3B4O1xufVxuXG4uYWNjdXJhY3kge1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI0YxNUEyNDtcbn1cblxuLnRlc3Rtc2cge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250aW51ZVRlc3RCdXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAzO1xuICAgIHRvcDogMnB4O1xuICAgIGxlZnQ6IDQ1cHg7XG4gICAgd2lkdGg6IDIwNnB4O1xufVxuXG4uc3RvcEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgdG9wOiAtODNweDtcbiAgICBsZWZ0OiAyNDRweDtcbiAgICB3aWR0aDogMjA2cHg7XG5cbn1cblxuLmNvbnRpbnVlQnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDI2cHg7XG4gIFxuICB3aWR0aDogMjA2cHg7XG4gIGxlZnQ6IDQxcHg7XG59XG5cbi5maW5pc2hCdXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDExMXB4O1xuICAgIGxlZnQ6IDI0NnB4O1xuICAgIHdpZHRoOiAyMDZweDtcblxufVxuXG4vKiAjbXlNb2RhbCB7XG4gICAgei1pbmRleDogNDtcbn1cblxuI21vZGFsMiB7XG4gICAgei1pbmRleDogNDtcbn0gKi9cblxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuLm1vZGFsIHtcbiAgICBcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDQ7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICB9XG4gIFxuICAvKiBNb2RhbCBDb250ZW50ICovXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBcbiAgfVxuXG4gICNtb2RhbENvbnRlbnQyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogMCAxOSU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxuICAjbW9kYWxDb250ZW50MyB7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiAwIDE5JTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBcbiAgfVxuXG4gICNtb2RhbENvbnRlbnQzMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDAgMTklO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogMjUlO1xuICB9XG5cblxuXG4gICNtb2RhbENvbnRlbnQ0IHtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNTAlXG4gIH1cbiAgXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbiAgLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2xvc2U6aG92ZXIsXG4gIC5jbG9zZTpmb2N1cyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cbiAgLyogLm5leHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtc2hhZG93OiAwIDAuMDRlbSAwLjA0ZW0gcmdiYSgwLDAsMCwwLjM1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxYmI0ZTtcbn1cbmEuYnV0dG9uNDpob3ZlcntcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuXG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjMwZW0pe1xu4oCDYS5idXR0b240e1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwLjJlbSBhdXRvO1xuICB9XG59ICovXG5cblxuXG4gICAgXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
        useValue: "dev/test"
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
            useValue: "dev/test"
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\ProjectZFC\AIGame\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map