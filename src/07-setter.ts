export class MyDate {
   
    constructor(
        public year: number = 1991,
        public _month: number = 4,
        private _day: number = 8
    ) {
    };

    printFormat(): string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
        return `${this._day}/${this._month}/${this.year}`;
    };

    addPadding (value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    };

    add(amount: number, type: 'year' | 'month' | 'day') {
        if (type === 'year') {
            this.year += amount;
        } else if (type === 'month') {
            this._month += amount;
        } else if (type === 'day') {
            this._day += amount;
        }
    }

    get day() {
        return this._day;
    };

    get isLeapYear() {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }   

    get month () {
        return this._month;
    };

    set month (value: number) {
        if (value < 1 || value > 12) {
            throw new Error('Invalid month');
        };
        this._month = value;
    };
};

const myDate = new MyDate();

myDate.month = 12;
// myDate.month = 13; // Error: Invalid month

console.log(myDate.month);
