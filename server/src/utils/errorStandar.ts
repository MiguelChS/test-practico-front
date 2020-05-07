export class ErrorStandar extends Error {
    httpStatus: number;
    message: string;
    details: any;
    constructor(message: string, status: number, details: any = null) {
        super(message);
        this.httpStatus = status;
        this.message = message;
        this.details = details;
    }
}