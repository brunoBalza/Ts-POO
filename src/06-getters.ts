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
};

const myDate = new MyDate();
const myDate2 = new MyDate(1989);
const myDate3 = new MyDate(2024);

// myDate.day = 10; // Error: Cannot assign to 'day' because it is a read-only property.

myDate.day; // 8

console.log(myDate.day);
console.log(myDate.isLeapYear); // false
console.log(myDate2.isLeapYear); // false
console.log(myDate3.isLeapYear); // false


