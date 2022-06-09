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
// giống như bản vẽ nháp,mô tả tính năng của class
var DienThoai = /** @class */ (function () {
    function DienThoai() {
    }
    return DienThoai;
}());
// chính xác hóa nó bằng tạo class sử dụng lại bản thiết kế abstract
var Adroid = /** @class */ (function (_super) {
    __extends(Adroid, _super);
    function Adroid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adroid.prototype.guitinnhan = function () {
        console.log('Gui tin nhan trong Adroid');
    };
    Adroid.prototype.goidienthoai = function () {
        return 'goi dien thoai bang adroid ';
    };
    return Adroid;
}(DienThoai));
var samsum = new Adroid();
samsum.guitinnhan();
console.log(samsum.goidienthoai());
