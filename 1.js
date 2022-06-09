var nhan_vat_game = /** @class */ (function () {
    // de tao ra instance
    // constructor là hàm xậy dựng,là hàm bắt buộc mà mỗi class phải có nếu bạn muốn tạo 1 instance
    // trong class tất cả khai báo nều có dấu chấm phẩy hết     
    function nhan_vat_game(ten_nhan_vat, slogan, mau) {
        this.ten_nhan_vat = ten_nhan_vat;
        this.slogan = slogan;
        this.mau = mau;
    }
    nhan_vat_game.prototype.chay = function () {
    };
    nhan_vat_game.prototype.chem = function () {
    };
    nhan_vat_game.prototype.hienthiten = function () {
        return "Nh\u00E2n v\u1EADt : " + this.ten_nhan_vat + ", slogan: " + this.slogan + ", v\u00E0 ch\u1EC9 s\u1ED1 m\u00E1u l\u00E0: " + this.mau + " ";
    };
    return nhan_vat_game;
}());
var nhanvat1 = new nhan_vat_game('irelia', 'Ý chí của lưỡi kiếm', 697.2);
var nhanvat2 = new nhan_vat_game('Azir', 'Hoàng Đế Xa Mạc', 604.4);
console.log(nhanvat1.hienthiten());
console.log(nhanvat2.hienthiten());
// để định nghĩa một class là định nghĩa các thuộc tính và các phương thức 
// sử dụng bản thiết kế bằng từ khỏa new
var dienthoai = /** @class */ (function () {
    function dienthoai(ten, gia, sao, mausac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;
    }
    dienthoai.prototype.showNoiDung = function () {
        return "San Pham : " + this.ten + " co gia l\u00E0 " + this.gia + ", \n         danh gia : " + this.sao + " \n         co " + this.mausac.length + " mau la : " + this.mausac[0] + "," + this.mausac[1] + "," + this.mausac[2];
    };
    return dienthoai;
}());
var sp1 = new dienthoai("samsum s8", 19000, 4, ['xanh', 'vang', 'ghi']);
var sp2 = new dienthoai("Apple Ip 7", 25000000, 5, ['do', 'den', 'ghi']);
console.log(sp1.showNoiDung());
console.log(sp2.showNoiDung());
