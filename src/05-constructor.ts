export class MyDate {
   
    constructor(
        public year: number = 1991,
        public month: number = 4,
        private day: number = 8
    ) {
    };

    printFormat(): string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${this.day}/${this.month}/${this.year}`;
    };

    addPadding (value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    };

    add(amount: number, type: 'year' | 'month' | 'day') {
        if (type === 'year') {
            this.year += amount;
        } else if (type === 'month') {
            this.month += amount;
        } else if (type === 'day') {
            this.day += amount;
        }
    }

    getDay() {
        return this.day;
    }   
};

const myDate = new MyDate();
console.log(myDate.printFormat()); // 08/04/1991

const myDate2 = new MyDate(2000);
console.log(myDate2.printFormat()); // 08/04/2000

const myDate3 = new MyDate(2010, 1);
console.log(myDate3.printFormat()); // 08/01/2010

const myDate4 = new MyDate(1989, 9, 27);
console.log(myDate4.printFormat()); // 27/09/1989
