export class MyDate {
    public year: number; 
    public month: number;
    public day: number;    

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    };

    printFormat(): string {
        return `${this.year}-${this.month}-${this.day}`;
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
};

const date = new MyDate(2020, 1, 1);
console.log(date.printFormat()); // 2020-1-1
console.log(date);

date.add(1, 'year');
console.log(date.printFormat()); // 2021-1-1

console.log(date.year); // 2021
console.log(date.month); // 1       
console.log(date.day); // 1
