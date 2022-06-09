var hero = /** @class */ (function () {
    function hero(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(hero.prototype, "ten", {
        get: function () {
            // xu ly bao mat ...
            // nếu ok thì mới trả về return 
            return this._ten;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: false,
        configurable: true
    });
    return hero;
}());
var zeus = new hero('Zeus');
console.log('ten tuong la : ' + zeus.ten);
zeus.ten = "than Zeus"; //tu goi ham set de lay du lieu
console.log('ten tuong sau khi doi la : ' + zeus.ten);
