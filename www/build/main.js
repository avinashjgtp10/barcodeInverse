webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(626);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ListsFactory provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ListsFactory = (function () {
    function ListsFactory(http) {
        var _this = this;
        this.http = http;
        this.storage = new __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */]();
        this.lists = [];
        console.log('Hello ListsFactory Provider');
        this.storage.get('lists').then(function (lists) {
            _this.lists = lists;
        }).catch(function (error) {
            console.log(error);
        });
    }
    ListsFactory.prototype.setItem = function (id, list) {
        if (Array.isArray(this.lists))
            this.lists[id] = list;
        else {
            this.lists = [];
        }
        return this.saveLists();
    };
    ListsFactory.prototype.removeItem = function (id) {
        this.lists.splice(id, 1);
        return this.saveLists();
    };
    ListsFactory.prototype.saveLists = function () {
        var _this = this;
        return this.storage.set("lists", this.lists).then(function (result) {
            console.log('response result' + result);
            return _this.lists;
        });
    };
    ListsFactory.prototype.getItem = function (id) {
        var _this = this;
        return this.storage.get("lists").then(function (lists) {
            if (!Array.isArray(lists))
                lists = [];
            _this.list = lists[id];
            return _this.list;
        });
    };
    ListsFactory.prototype.getAll = function () {
        var _this = this;
        return this.storage.get('lists').then(function (lists) {
            if (!Array.isArray(lists))
                lists = [];
            _this.lists = lists;
            return _this.lists;
        });
    };
    ListsFactory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ListsFactory);
    return ListsFactory;
}());
//# sourceMappingURL=lists-factory.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManateeScanner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ManateeScanner provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ManateeScanner = (function () {
    function ManateeScanner(http) {
        this.http = http;
    }
    ManateeScanner.prototype.config = function (setFunc) {
        if (typeof mwbScanner != 'undefined' && typeof mwbScanner.startScanning != 'undefined') {
            console.log("mwbScanner initialized");
            this.scanner = mwbScanner;
        }
        else {
            this.scanner = {};
        }
        setFunc.call();
        this.mwInit = true;
    };
    ManateeScanner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ManateeScanner);
    return ManateeScanner;
}());
//# sourceMappingURL=manatee-scanner.js.map

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_list_history_list__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lists_factory__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listmodify__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, zone, listsFactory) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.listsFactory = listsFactory;
        this.historyListPage = __WEBPACK_IMPORTED_MODULE_2__history_list_history_list__["a" /* HistoryListPage */];
        this.listsFactory.getAll().then(function (lists) {
            _this.lists = lists;
        });
    }
    HomePage.prototype.navSomewhere = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__history_list_history_list__["a" /* HistoryListPage */], {
            listId: id
        });
    };
    HomePage.prototype.showNewListModal = function () {
        var _this = this;
        var newListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__listmodify__["a" /* ListModify */], {});
        newListModal.present();
        newListModal.onDidDismiss(function (data) {
            if (data)
                _this.lists = data.lists;
        });
    };
    HomePage.prototype.editListModal = function (id, list, slidingList) {
        var _this = this;
        var editListModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__listmodify__["a" /* ListModify */], { id: id, list: list });
        editListModal.present();
        editListModal.onDidDismiss(function (data) {
            if (data)
                _this.lists = data.lists;
            slidingList.close();
        });
    };
    HomePage.prototype.removeItem = function (id) {
        var _this = this;
        console.log(id);
        this.listsFactory.removeItem(id).then(function (result) {
            _this.lists = result;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      MWB Scanner \n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list> \n	  <ion-item-sliding *ngFor="let item of lists; let i = index" #slidingList>\n	    <ion-item (click)="navSomewhere(i)"> {{item.name}} </ion-item>\n	    <ion-item-options>\n	      <button icon-only color="danger" (click)="removeItem(i)" side="right"><ion-icon name="trash"></ion-icon></button>\n	      <button icon-only color="danger" (click)="editListModal(i,item,slidingList)"><ion-icon name="create"></ion-icon></button>\n	    </ion-item-options>\n	  </ion-item-sliding>\n  </ion-list>\n\n\n<ion-fab bottom right>\n	<button ion-fab (click)="showNewListModal()">\n		<ion-icon name="add"></ion-icon></button> \n</ion-fab>		  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_lists_factory__["a" /* ListsFactory */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lists_factory__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_manatee_scanner__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_code_view_code__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryListPage = (function () {
    function HistoryListPage(navCtrl, navParams, listsFactory, zone, manateeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listsFactory = listsFactory;
        this.zone = zone;
        this.manateeScanner = manateeScanner;
        this.scannerActive = "barcode";
    }
    HistoryListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.id = this.navParams.data.listId;
        this.listsFactory.getItem(this.navParams.data.listId).then(function (list) {
            _this.list = list;
            _this.list_name = _this.list.name;
            if (_this.list.data)
                _this.list_data = _this.list.data;
            else
                _this.list_data = [];
        });
    };
    HistoryListPage.prototype.viewData = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_code_view_code__["a" /* ViewCodePage */], {
            item: item
        });
    };
    HistoryListPage.prototype.removeItem = function (item_id) {
        this.list_data.splice(item_id, 1);
        this.list.data = this.list_data;
        this.listsFactory.setItem(this.id, this.list).then(function (response) {
        });
    };
    HistoryListPage.prototype.startScanner = function (event) {
        var _this = this;
        if (typeof this.manateeScanner.scanner != 'undefined' && typeof this.manateeScanner.scanner.startScanning != 'undefined') {
            if (this.scannerActive == "barcode") {
                this.scannerActive = "power";
                this.manateeScanner.scanner.startScanning(0, 0, 100, 50).then(function (response) {
                    if (response && response.code) {
                        _this.zone.run(function () {
                            _this.list_data.push(response);
                            _this.list.data = _this.list_data;
                            _this.scannerActive = "barcode";
                            _this.listsFactory.setItem(_this.id, _this.list).then(function (response) { });
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            _this.scannerActive = "barcode";
                        });
                    }
                });
            }
            else {
                this.manateeScanner.scanner.closeScanner();
                this.scannerActive = "barcode";
            }
        }
        else {
            this.startDummy();
        }
    };
    HistoryListPage.prototype.startDummy = function () {
        var _this = this;
        var timestamp = function () { return Number(new Date); };
        this.scannerActive = "power";
        var response = {
            "code": "mwbScanner not available @ " + timestamp(),
            "location": {},
            "type": "dummy"
        };
        this.list_data.push(response);
        this.list.data = this.list_data;
        this.listsFactory.setItem(this.id, this.list).then(function (response) {
            _this.scannerActive = "barcode";
        });
    };
    HistoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-history-list',template:/*ion-inline-start:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/history-list/history-list.html"*/'<!--\n  Generated template for the HistoryList page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{list_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list> \n	  <ion-item-sliding *ngFor="let item of list_data; let i = index"> \n	    <ion-item (click)="viewData(item)"> {{item.code}} </ion-item>\n	    <ion-item-options>\n	      <button icon-only color="danger" (click)="removeItem(i)"><ion-icon name="trash"></ion-icon></button>\n	    </ion-item-options>\n	  </ion-item-sliding>\n\n  </ion-list>\n\n\n<ion-fab bottom right>\n	<button ion-fab (click)="startScanner($event)" >\n	<ion-icon [name]="scannerActive"></ion-icon> </button>\n</ion-fab>\n</ion-content>\n\n'/*ion-inline-end:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/history-list/history-list.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_lists_factory__["a" /* ListsFactory */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_manatee_scanner__["a" /* ManateeScanner */]])
    ], HistoryListPage);
    return HistoryListPage;
}());
//# sourceMappingURL=history-list.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ViewCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ViewCodePage = (function () {
    function ViewCodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewCodePage');
        this.item = this.navParams.data.item;
        this.arrayOfKeys = Object.keys(this.item);
    };
    ViewCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-view-code',template:/*ion-inline-start:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/view-code/view-code.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>viewCode</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-list> \n	  <ion-item-sliding *ngFor="let key of arrayOfKeys"> \n	    <ion-item> {{key}} : {{item[key] | json}}  </ion-item>\n	  </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/view-code/view-code.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewCodePage);
    return ViewCodePage;
}());
//# sourceMappingURL=view-code.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListModify; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lists_factory__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListModify = (function () {
    function ListModify(viewCtrl, params, formBuilder, listsFactory) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.listsFactory = listsFactory;
        this.mode = 'add';
        this.listsFactory.getAll().then(function (lists) {
            _this.lists = lists;
        });
        if (params.data.list) {
            this.mode = 'edit';
            this.id = params.data.id;
            this.list = params.data.list;
        }
        this.editListName = formBuilder.group({
            listName: [(this.mode == 'add') ? '' : params.data.list.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])]
        });
    }
    ListModify.prototype.dismiss = function () {
        this.viewCtrl.dismiss(false);
    };
    ListModify.prototype.save = function () {
        var _this = this;
        if (this.mode == 'add') {
            if (this.editListName.valid) {
                var id = this.lists.length;
                this.listsFactory.setItem(id, { "name": this.editListName.value.listName }).then(function (lists) {
                    _this.lists = lists;
                    _this.viewCtrl.dismiss({ "lists": _this.lists });
                });
            }
        }
        else {
            if (this.editListName.valid) {
                var list = this.list;
                list.name = this.editListName.value.listName;
                this.listsFactory.setItem(this.id, list).then(function (lists) {
                    _this.lists = lists;
                    _this.viewCtrl.dismiss({ "lists": _this.lists });
                });
            }
        }
    };
    ListModify = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'list-modify',template:/*ion-inline-start:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/home/listmodify.html"*/'<ion-header>\n<ion-navbar>\n  <ion-buttons start>\n    <button (click)="dismiss()" ion-button>\n      Cancel\n    </button>\n  </ion-buttons>\n  <ion-title>Sample Modal</ion-title>\n</ion-navbar>\n</ion-header>\n<ion-content padding class="sample-modal-page">\n	<ion-list no-lines>\n	    <form [formGroup]="editListName">\n	        <ion-item>\n	            <ion-label floating>List Name</ion-label>\n	            <ion-input formControlName="listName" type="text" [class.invalid]="!editListName.controls.listName.valid"></ion-input>\n	        </ion-item>\n\n            <ion-item *ngIf="!editListName.controls.listName.valid && !editListName.controls.listName.pending && (editListName.controls.listName.dirty)">\n                <p>Sorry, that name can not be used!</p>\n            </ion-item>	        \n			<button ion-button full color="primary" (click)="save()"> Save </button>\n	    </form>\n	 </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/pages/home/listmodify.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_lists_factory__["a" /* ListsFactory */]])
    ], ListModify);
    return ListModify;
}());
//# sourceMappingURL=listmodify.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(579);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_listmodify__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_history_list_history_list__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_lists_factory__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_manatee_scanner__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_view_code_view_code__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_history_list_history_list__["a" /* HistoryListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_listmodify__["a" /* ListModify */],
                __WEBPACK_IMPORTED_MODULE_8__pages_view_code_view_code__["a" /* ViewCodePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_history_list_history_list__["a" /* HistoryListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_listmodify__["a" /* ListModify */],
                __WEBPACK_IMPORTED_MODULE_8__pages_view_code_view_code__["a" /* ViewCodePage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_6__providers_lists_factory__["a" /* ListsFactory */], __WEBPACK_IMPORTED_MODULE_7__providers_manatee_scanner__["a" /* ManateeScanner */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_manatee_scanner__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, manateeScanner) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]; //root page
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            manateeScanner.config(function () {
                manateeScanner.scanner.setCallback(function (result) { });
                var mw_c = manateeScanner.scanner.getConstants();
                var settings = [
                    { "method": 'MWBenableZoom', "value": [true] },
                    { "method": 'MWBsetZoomLevels', "value": [200, 400, 1] },
                    { "method": 'MWBsetInterfaceOrientation', "value": [mw_c.OrientationLandscapeLeft] }
                ];
                var keys = {
                    'Android': "plzkpn/7bC1RX2MuPW+JrlhBpCWPUA2jdrk7lldCTUQ=",
                    'iOS': "svahh/U1hGTMuEP4aqR6Nt948IoTfaboJRieaGCdDts= ",
                    'Win32NT': "VALID_WIN_WP8_KEY",
                    'windows': "VALID_WIN_10_UWP_KEY"
                };
                var key = (keys[device.platform]) ? keys[device.platform] : '';
                return manateeScanner.scanner.setKey(key).then(function (response) {
                    return manateeScanner.scanner.loadSettings(settings).then(function (response) { }).catch(function (reason) {
                        console.log(reason);
                    });
                });
            });
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/avinash/ionic/test/Manatee/myCoolMwApp/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_manatee_scanner__["a" /* ManateeScanner */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_manatee_scanner__["a" /* ManateeScanner */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ })

},[480]);
//# sourceMappingURL=main.js.map