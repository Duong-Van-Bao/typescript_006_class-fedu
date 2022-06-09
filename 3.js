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
var Tuong = /** @class */ (function () {
    function Tuong(ten, motatuong, kinang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kinang = kinang;
    }
    Tuong.prototype.showThongTin = function () {
        var kn = '';
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i];
            kn += " | ";
        }
        var thongsotuong = "\n        T\u00EAn t\u01B0\u1EDBng : " + this.ten + ",\n        M\u00F4 t\u1EA3 :  " + this.motatuong + ",\n        K\u0129 N\u0103ng: " + kn;
        console.log(thongsotuong);
    };
    return Tuong;
}());
// extends là kế thừa tất cả những gì trong class tướng có 
var SatThu = /** @class */ (function (_super) {
    __extends(SatThu, _super);
    function SatThu(ten, motatuong, kinang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    SatThu.prototype.showThongTin = function () {
        _super.prototype.showThongTin.call(this); // su dung lai super class bố 
        // nhưng định nghĩa thêm cái của con 
        console.log('Đòn sát thủ của tướng này là' + this.donsatthu);
    };
    return SatThu;
}(Tuong));
var ashe = new Tuong('Ashe', 'Cung Bang', ['Chú Tâm Tiễn', 'tán xạ tiễn', 'Ưng tiễn', 'Đại Băng Tiễn']);
var Ahri = new Tuong('Ahri', 'Hồ Ly 9 đuôi', ['Hút Hồn', 'Quả Cầu Ma Thuật', 'Lửa Hồ Ly', 'Hôn gió']);
ashe.showThongTin();
Ahri.showThongTin();
// sử dụng cái class satthu xem khac gi so voi binh thuong
var Talon = new SatThu("Talon", "sát thu bóng đêm", ['Ngoại Giao Kiểu Noxus', 'am khi'], 'Sát Thủ Vô Hình');
Talon.showThongTin();
var Jayce = new SatThu('Jayce', 'nguoi bao ho', ['tu dien', ' chỉ thiên', 'tích tụ'], 'búa thủy ngân');
Jayce.showThongTin();
