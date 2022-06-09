// kiểu enum này thường dùng cho trạng thái còn lại rất ít dùng
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var congViec = /** @class */ (function () {
    function congViec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    congViec.prototype.thongTin = function () {
        return "ID: " + this.id + " - ten : " + this.ten + " - Trang thai : " + this.trangthai;
    };
    congViec.teststatic = function () {
        return 'thu xem dung ham nay ma khong can phai tao moi mot instance khong ?';
    };
    congViec.id = 1;
    congViec.ten = "viet so 1";
    return congViec;
}());
// tạo một đối tượng từ class đó (instance)
var cv1 = new congViec(1, "Hoc HTML", state.Processing);
console.log(cv1.thongTin());
// static giúp ta không cần phải tạo instance mà vẫn có thể sử dụng được các thuộc tính và phương thức
console.log(congViec.ten);
console.log(congViec.id);
console.log(congViec.teststatic());
