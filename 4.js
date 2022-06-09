var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var khoahoc = /** @class */ (function () {
    // constructor tạo đối tượng và tạo vùng nhớ riêng 
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xemkhoahoc = function () {
        console.log(this.ten);
        console.log("\n            ID kh\u00F3a h\u1ECDc l\u00E0 : " + this.id + "\n            T\u00EAn kh\u00F3a h\u1ECDc l\u00E0 : " + this.ten + "\n            \u0110\u1ED9 d\u00E0i : " + this.dodai + " ti\u1EBFng \n            ");
    };
    khoahoc.prototype.test2 = function () {
        console.log(this.ten);
        console.log(' có nghĩa là private thí access được ở trong class bố');
    };
    return khoahoc;
}());
var khoalaptrinh = /** @class */ (function (_super) {
    __extends(khoalaptrinh, _super);
    function khoalaptrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoalaptrinh.prototype.xemkhoahoc = function () {
        _super.prototype.xemkhoahoc.call(this);
        console.log('FILE đính kèm: ' + this.filedinhkem);
    };
    khoalaptrinh.prototype.test1 = function () {
        console.log(this.ten);
    };
    return khoalaptrinh;
}(khoahoc));
// test public 
//test trong class 
var khoa08 = new khoahoc(8, 'học làm banner với bộ công cụ adobe', 6);
var khoa09 = new khoalaptrinh(9, 'frontend dev cơ bản với bs4', 13, 'a.zip');
console.log(khoa08.ten);
console.log(khoa08.dodai);
