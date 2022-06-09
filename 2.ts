// kiểu enum này thường dùng cho trạng thái còn lại rất ít dùng

enum state {
    Create = 10,
    Processing,
    Finish
}

class congViec {
    static id: number = 1;
    static ten: string = "viet so 1";
    trangthai: state

    constructor(id: number, ten: string, trangthai: state) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai
    }

    thongTin() {
        return `ID: ${this.id} - ten : ${this.ten} - Trang thai : ${this.trangthai}`;
    }

    static teststatic() {
        return 'thu xem dung ham nay ma khong can phai tao moi mot instance khong ?'
    }
}

// tạo một đối tượng từ class đó (instance)
let cv1 = new congViec(1, "Hoc HTML", state.Processing)
console.log(cv1.thongTin());

// static giúp ta không cần phải tạo instance mà vẫn có thể sử dụng được các thuộc tính và phương thức

console.log(congViec.ten);
console.log(congViec.id);
console.log(congViec.teststatic());