export interface Driver {
    database: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {

    constructor(
        public database: string,
        public password: string,
        public port: number
    ) {}
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }

    connect(): void {        
    };
    disconnect(): void {
    }
}