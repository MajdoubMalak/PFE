import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { Organisator } from './organisateur.model';
export declare class OrganisatorService {
    private readonly organisatorModel;
    private authService;
    constructor(organisatorModel: Model<Organisator>, authService: AuthService);
    AddOrganisator(username: string, email: string, password: string, company: string, region: string, category: string, phoneNumber: string, age: number): Promise<Organisator | " user name exist !" | " user email exist !" | " user phone number exist !">;
}
