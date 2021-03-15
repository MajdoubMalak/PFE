import { OrganisatorService } from './organisateur.service';
export declare class OrganisatorController {
    private readonly organisateurService;
    constructor(organisateurService: OrganisatorService);
    addOrganisateur(username: string, useremail: string, userpassword: string, usercompany: string, userregion: string, usercategory: string, userphonenumber: string, userage: number): Promise<" user name exist !" | " user email exist !" | " user phone number exist !" | import("./organisateur.model").Organisator>;
}
