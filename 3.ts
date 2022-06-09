class Tuong {
    ten: string;
    motatuong: string;
    kinang: string[];

    constructor(ten: string, motatuong: string, kinang: string[]) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kinang = kinang;
    }

    showThongTin(): string {
        var kn: string = '';
        for (let i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i];
            kn += " | ";
        }
        var thongsotuong = `
        Tên tướng : ${this.ten},
        Mô tả :  ${this.motatuong},
        Kĩ Năng: ${kn}`
        console.log(thongsotuong);
    }
}
// extends là kế thừa tất cả những gì trong class tướng có 
class SatThu extends Tuong {
    donsatthu: string;

    constructor(ten: string, motatuong: string, kinang: string[], donsatthu: string) {
        super(ten, motatuong, kinang);
        this.donsatthu = donsatthu
    }

    showThongTin(): void {
        super.showThongTin(); // su dung lai super class bố 
        // nhưng định nghĩa thêm cái của con 
        console.log('Đòn sát thủ của tướng này là' + this.donsatthu);
    }
}

var ashe = new Tuong('Ashe', 'Cung Bang', ['Chú Tâm Tiễn', 'tán xạ tiễn', 'Ưng tiễn', 'Đại Băng Tiễn'])

var Ahri = new Tuong('Ahri', 'Hồ Ly 9 đuôi', ['Hút Hồn', 'Quả Cầu Ma Thuật', 'Lửa Hồ Ly', 'Hôn gió'])
ashe.showThongTin();
Ahri.showThongTin();

// sử dụng cái class satthu xem khac gi so voi binh thuong
var Talon = new SatThu("Talon", "sát thu bóng đêm", ['Ngoại Giao Kiểu Noxus', 'am khi'], 'Sát Thủ Vô Hình');

Talon.showThongTin();

var Jayce = new SatThu('Jayce', 'nguoi bao ho', ['tu dien', ' chỉ thiên', 'tích tụ'], 'búa thủy ngân')
Jayce.showThongTin();
