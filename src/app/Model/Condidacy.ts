
import { CondidacyPK } from "./CondidacyPK";
import { JobOffer } from "./JobOffer";
import { Women } from "./Women";

export class Condidacy {
    idOffer: number;
    titleOffer: string;
    condidacyPK: CondidacyPK;
    Status:Status;
    favorite:boolean;
    dateCondidacy:Date;
    womenCondidacy:Women;
    jobOfferCon:JobOffer;
}
export enum Status {
    Accept,Refuse,OnHold
}


 