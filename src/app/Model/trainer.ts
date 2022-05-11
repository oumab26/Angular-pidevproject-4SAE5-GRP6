export class Trainer {
    id : number;
    userName : string;
    email : string;
    password : string;
    country: string;
    adresse : string;
    fonenumber : number;
    DateOfBirth : Date;
    educationlevel:  string;    
    job : string;
    domain: string;

    //to initialize in constructor default values 
    active : number;
    isEnabled : number; 
     
    // @Temporal(TemporalType.DATE)
    // private Boolean active;
    //private boolean isEnabled;
}