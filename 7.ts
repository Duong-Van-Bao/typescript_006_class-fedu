// giống như bản vẽ nháp,mô tả tính năng của class
abstract class DienThoai {
    ten: string;

    abstract guitinnhan(): void;
    abstract goidienthoai(): string;
}
// chính xác hóa nó bằng tạo class sử dụng lại bản thiết kế abstract
class Adroid extends DienThoai {
    guitinnhan() {
        console.log('Gui tin nhan trong Adroid');
    }
    goidienthoai() {
        return 'goi dien thoai bang adroid '
    }
}

var samsum = new Adroid();
samsum.guitinnhan();
console.log(samsum.goidienthoai());
