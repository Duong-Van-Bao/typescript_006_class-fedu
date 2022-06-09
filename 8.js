// generic trong function thông thường 
// function xem4<T>(x: T): T {
//     return x;
// }
// console.log(xem4<string>("day la ham generic"));
// là một hàm bình thường nhưng nó nhận về kiểu dữ liệu 
//generic trong class 
var mayTinh = /** @class */ (function () {
    function mayTinh() {
    }
    mayTinh.xemThongTin = function (x) {
        console.log(x);
    };
    return mayTinh;
}());
// mayTinh.xemThongTin<string>(['Dell', 'HP', 'MacBook']);
// mayTinh.xemThongTin<any>(['Dell', 5000, 'MacBook']);
var opDienThoai = /** @class */ (function () {
    function opDienThoai(id, ten, gia) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    opDienThoai.prototype.xem = function () {
        console.log("\n        id : " + this.id + "\n        t\u00EAn : " + this.ten + "\n        gi\u00E1 : " + this.gia + "\n        ");
    };
    return opDienThoai;
}());
function xemtt(motnguoi) {
    console.log("\n   Xin Chao, " + motnguoi.ten + ",n\u0103m nay b\u1EA1n " + motnguoi.tuoi + " tu\u1ED5i ph\u1EA3i kh\u00F4ng ? \n ");
}
var tuong = /** @class */ (function () {
    function tuong() {
    }
    tuong.prototype.xemtuong = function () {
        console.log('xem');
    };
    tuong.prototype.donkinang = function (mau) {
        return "don ki nang";
    };
    tuong.prototype.bienve = function () {
        console.log('bien ve');
    };
    return tuong;
}());
//name space và export 
//name space là không gian cho bộ nhớ 
var Adroid;
(function (Adroid) {
    var String = /** @class */ (function () {
        function String() {
        }
        return String;
    }());
    Adroid.String = String;
    var Number = /** @class */ (function () {
        function Number() {
        }
        return Number;
    }());
    Adroid.Number = Number;
})(Adroid || (Adroid = {}));
var coca = new Adroid.String();
var pepsi = new Adroid.Number();
