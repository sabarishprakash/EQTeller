export class actions {
    public key: number;
    public mnemonic: string;
    public description: string;
    public link: string;

    constructor(key: number,mnemonic: string,description: string,link: string) {
        this.key = key;
        this.mnemonic = mnemonic;
        this.description = description;
        this.link = link;
    }
}