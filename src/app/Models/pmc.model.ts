export class pmc {
    public BRANCH: string;
    public ACCOUNT: string;
    public SUFFIX: string;
    public CHARGE_CODE: string;
    public CHARGE_AMOUNT: string;

    constructor(BRANCH: string, ACCOUNT: string,SUFFIX: string,CHARGE_CODE: string,CHARGE_AMOUNT: string) {
        this.BRANCH = BRANCH;
        this.ACCOUNT =  ACCOUNT;
        this.SUFFIX = SUFFIX;
        this.CHARGE_CODE = CHARGE_CODE;
        this.CHARGE_AMOUNT = CHARGE_AMOUNT;        
    }
}