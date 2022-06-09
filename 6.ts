var matkhau: string = "Anh Viet cho so"
class Nguoi {
    private _ten: string;

    public get ten(): string {
        if (matkhau == "Anh Viet cho so") {
            return this._ten;
        } else {
            return "Sai mk roi cung oi"
        }
    }


    public set ten(v: string) {
        if (matkhau == "Anh Viet cho so") {
            this._ten = v;
        } else {
            this._ten = "Sai mat khau";
        }
    }
}
matkhau = "Anh Viet abc"

var nguoiso1 = new Nguoi();
nguoiso1.ten = "Jame bond"
console.log(nguoiso1.ten);

// //set
// nguoiso1.ten = 'viet nd';

// //su dung getter
// console.log(nguoiso1.ten);
