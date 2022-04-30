import {Recuiter} from "../Model/Recuiter";
import { Condidacy } from "./Condidacy";
import { Interview } from "./Interview";

export class JobOffer {
    idOffer: number;
    titleOffer: string;
    description: string;
    email: string;
    domaine:Domaine;
    startDateoffer:Date;
    endDateoffer:Date;
    addressOffer:string;
    company:string;
    favorite:boolean;
    Status:string;

    recruiter:Recuiter;
     interview:Interview;
     condidacies:Condidacy[];
 
}
export enum  Domaine {
    Agriculture, ENSEIGNEMENT, Hôtellerie, Alimentaire, Banque, Chimie, Santé, Télécommunications, Textile, Ingénieurie, Batiment, Art, Artisanat,
    Transport, Industrie, Restauration, Commerce, Tourisme, Sport, Environement

}



 








