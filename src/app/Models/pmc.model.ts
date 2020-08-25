import { input } from './io.model';

export class pmc {
    public INPUTS: input[];
    public LENGTH: number;

    constructor(branch: string, account: string,suffix: string,charge_code: string,charge_amount: string) {
        this.INPUTS = [
            new input("BRANCH", branch),
            new input("ACCOUNT", account),
            new input("SUFFIX", suffix),
            new input("CHARGE_CODE", charge_code),
            new input("CHARGE_AMOUNT", charge_amount)
        ]
        this.LENGTH = this.INPUTS.length;      
    }
}