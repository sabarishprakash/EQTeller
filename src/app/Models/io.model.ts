export class input {
    public NAME: string;
    public VALUE: string;

    constructor(name: string,value: string) {
        this.NAME = name;
        this.VALUE = value;
    }
}

export class APIoutput {
    public RETURNSTATUS: string;
    public ERRORMESSAGE: string;

    constructor(returnstatus: string,errormessage: string) {
        this.RETURNSTATUS = returnstatus;
        this.ERRORMESSAGE = errormessage;
    }
}

export class NAMEinput {
    public INPUTS: input;

    constructor(INPUTS: input) {
        this.INPUTS = INPUTS;
    }
}

export class NAMEoutput {
    public FULLNAME: string;
    public SHORTNAME: string;

    constructor(fullname: string,shortname: string) {
        this.FULLNAME = fullname;
        this.SHORTNAME = shortname;
    }
}

export class ENQoutput {
    public RESULT: string;
    public OUTPUT: string;

    constructor(result: string,output: string) {
        this.RESULT = result;
        this.OUTPUT = output;
    }
}