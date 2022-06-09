var matkhau = "Anh Viet cho so";
var Nguoi = /** @class */ (function () {
    function Nguoi() {
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau == "Anh Viet cho so") {
                return this._ten;
            }
            else {
                return "Sai mk roi cung oi";
            }
        },
        set: function (v) {
            if (matkhau == "Anh Viet cho so") {
                this._ten = v;
            }
            else {
                this._ten = "Sai mat khau";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
matkhau = "Anh Viet abc";
var nguoiso1 = new Nguoi();
nguoiso1.ten = "Jame bond";
console.log(nguoiso1.ten);
// //set
// nguoiso1.ten = 'viet nd';
// //su dung getter
// console.log(nguoiso1.ten);
