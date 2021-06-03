import { input } from './io.model';

export class asi {
    // public INPUTS: input[];
    // public LENGTH: number;
    branch: string;
    account: string;
    suffix: string;
    transaction_code: string;
    transaction_amount: string;
    narrative: string;
    currency: string;


    constructor(branch: string,account: string, suffix: string, trancode: string, currency: string, amount: string, comments: string) {
        this.branch = branch;
        this.account = account;
        this.suffix = suffix;
        this.transaction_code = trancode;
        this.transaction_amount = amount;
        this.narrative = comments;
        this.currency = currency;
        // this.INPUTS = [
        //     new input("BRANCH", branch),
        //     new input("ACCOUNT", account),
        //     new input("SUFFIX", suffix),
        //     new input("TRANSACTION_CODE", trancode),
        //     new input("TRANSACTION_CURRENCY", currency),
        //     new input("TRANSACTION_AMOUNT", amount),
        //     new input("NARRATIVE", comments)
        // ]
        // this.LENGTH = this.INPUTS.length;
    }
}