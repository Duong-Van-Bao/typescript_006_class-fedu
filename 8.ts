// generic trong function thông thường 
// function xem4<T>(x: T): T {
//     return x;
// }

// console.log(xem4<string>("day la ham generic"));
// là một hàm bình thường nhưng nó nhận về kiểu dữ liệu 

//generic trong class 
class mayTinh {
    static xemThongTin<T>(x: T): void {
        console.log(x);
    }
}
// mayTinh.xemThongTin<string>(['Dell', 'HP', 'MacBook']);
// mayTinh.xemThongTin<any>(['Dell', 5000, 'MacBook']);

class opDienThoai<X, Y, Z> {
    id: X;
    ten: Y;
    gia: Z;

    constructor(id: X, ten: Y, gia: Z) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    xem(): void {
        console.log(`
        id : ${this.id}
        tên : ${this.ten}
        giá : ${this.gia}
        `);
    }
}

// var op1 = new opDienThoai<number, string, number>(1, "Ốp con thỏ cho ip 7", 30000);
// op1.xem();
// var op2 = new opDienThoai<number, string, string>(1, "Ốp xiaomi ", '10 usd');
// op2.xem();

// interface co ban
interface nguoi {
    tuoi?: number;
    ten: string;
}

function xemtt(motnguoi: nguoi): void {
    console.log(`
   Xin Chao, ${motnguoi.ten},năm nay bạn ${motnguoi.tuoi} tuổi phải không ? 
 `);
}

// xemtt({ ten: 'viet' });

// interface class -> qui định khi có một class tạo từ interface này thì class đó phải có tối thiểu đủ các thuộc tính và các hàm này
interface tuongInterface {
    ten: string;
    mau: number;
    satthuong: number;
    mota: string;

    xemtuong(): void;
    donkinang(mau: number): any;
    bienve(): void;
}

class tuong implements tuongInterface {
    ten: string;
    mau: number;
    satthuong: number;
    mota: string;
    mana: number;

    xemtuong(): void {
        console.log('xem');
    }

    donkinang(mau: number): any {
        return "don ki nang"
    }

    bienve(): void {
        console.log('bien ve');
    }
}

//name space và export 
//name space là không gian cho bộ nhớ 
module Adroid {
    export class String {

    }
    export class Number {

    }
}
var coca = new Adroid.String();
var pepsi = new Adroid.Number();
