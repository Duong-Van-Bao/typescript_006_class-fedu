class hero {
    private _ten: string;

    constructor(_ten: string) {
        this._ten = _ten;
    }

    public get ten(): string {
        // xu ly bao mat ...

        // nếu ok thì mới trả về return 
        return this._ten;
    }

    public set ten(v: string) {
        this._ten = v;
    }

}

var zeus = new hero('Zeus');
console.log('ten tuong la : ' + zeus.ten);

zeus.ten = "than Zeus"; //tu goi ham set de lay du lieu
console.log('ten tuong sau khi doi la : ' + zeus.ten);
