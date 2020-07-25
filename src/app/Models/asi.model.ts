import { input } from './io.model';

export class asi {
    public INPUTS: input[];
    public LENGTH: number;

    constructor(branch: string,account: string, suffix: string, trancode: string, currency: string, amount: string, comments: string) {
        this.INPUTS = [
            new input("BRANCH", branch),
            new input("ACCOUNT", account),
            new input("SUFFIX", suffix),
            new input("TRANSACTION_CODE", trancode),
            new input("TRANSACTION_CURRENCY", currency),
            new input("TRANSACTION_AMOUNT", amount),
            new input("NARRATIVE", comments)
        ]
        this.LENGTH = this.INPUTS.length;
    }
}