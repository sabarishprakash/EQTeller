export class actions {
    public key: number;
    public mnemonic: string;
    public description: string;

    constructor(key: number,mnemonic: string,description: string) {
        this.key = key;
        this.mnemonic = mnemonic;
        this.description = description;
    }
}