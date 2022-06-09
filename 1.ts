class nhan_vat_game {
    ten_nhan_vat: string;
    slogan: string;
    mau: number;

    // de tao ra instance
    // constructor là hàm xậy dựng,là hàm bắt buộc mà mỗi class phải có nếu bạn muốn tạo 1 instance
    // trong class tất cả khai báo nều có dấu chấm phẩy hết     
    constructor(ten_nhan_vat: string, slogan: string, mau: number) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau
    }

    chay() {

    }
    chem() {

    }
    hienthiten() {
        return `Nhân vật : ${this.ten_nhan_vat}, slogan: ${this.slogan}, và chỉ số máu là: ${this.mau} `
    }
}
var nhanvat1 = new nhan_vat_game('irelia', 'Ý chí của lưỡi kiếm', 697.2);
var nhanvat2 = new nhan_vat_game('Azir', 'Hoàng Đế Xa Mạc', 604.4);

console.log(nhanvat1.hienthiten());
console.log(nhanvat2.hienthiten());

// để định nghĩa một class là định nghĩa các thuộc tính và các phương thức 
// sử dụng bản thiết kế bằng từ khỏa new
class dienthoai {
    ten: string;
    gia: number;
    sao: number;
    mausac: string[];

    constructor(ten: string, gia: number, sao: number, mausac: string[]) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;

    }

    showNoiDung() {
        return `San Pham : ${this.ten} co gia là ${this.gia}, 
         danh gia : ${this.sao} 
         co ${this.mausac.length} mau la : ${this.mausac[0]},${this.mausac[1]},${this.mausac[2]}`;
    }
}

var sp1 = new dienthoai("samsum s8", 19000, 4, ['xanh', 'vang', 'ghi'])
var sp2 = new dienthoai("Apple Ip 7", 25000000, 5, ['do', 'den', 'ghi'])

console.log(sp1.showNoiDung());
console.log(sp2.showNoiDung());
