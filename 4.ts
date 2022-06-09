class khoahoc {
    public id: number;
    private ten: string;
    public dodai: number;

    // constructor tạo đối tượng và tạo vùng nhớ riêng 
    constructor(id: number, ten: string, dodai: number) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }

    xemkhoahoc() {
        console.log(this.ten);

        console.log(
            `
            ID khóa học là : ${this.id}
            Tên khóa học là : ${this.ten}
            Độ dài : ${this.dodai} tiếng 
            `
        )
    }
    test2() {
        console.log(this.ten);
        console.log(' có nghĩa là private thí access được ở trong class bố');
    }
}

class khoalaptrinh extends khoahoc {
    filedinhkem: string;

    constructor(id: number, ten: string, dodai: number, filedinhkem: string) {
        super(id, ten, dodai);
        this.filedinhkem = filedinhkem
    }
    xemkhoahoc() {
        super.xemkhoahoc();
        console.log('FILE đính kèm: ' + this.filedinhkem);
    }
    test1() {
        console.log(this.ten);
    }
}

// test public 

//test trong class 
let khoa08 = new khoahoc(8, 'học làm banner với bộ công cụ adobe', 6);

let khoa09 = new khoalaptrinh(9, 'frontend dev cơ bản với bs4', 13, 'a.zip')

console.log(khoa08.ten);
console.log(khoa08.dodai);
