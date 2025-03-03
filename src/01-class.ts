export class MyDate {
    year: number; 
    month: number;
    day: number;    

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    };
};

const date = new MyDate(2020, 1, 1);
console.log(date); // MyDate { year: 2020, month: 1, day: 1 }