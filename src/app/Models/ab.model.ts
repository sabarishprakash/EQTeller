import { input } from '../Models/io.model';

export class ab {
    public INPUTS: input[];
    public LENGTH: number;

    constructor(branch: string,account: string, suffix: string) {
        this.INPUTS = [
            new input("BRANCH", branch),
            new input("ACCOUNT", account),
            new input("SUFFIX", suffix)
        ]
        this.LENGTH = this.INPUTS.length;
    }
}