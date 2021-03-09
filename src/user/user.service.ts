import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>,
    private authService: AuthService,){}
    async  AddUser(username: string, email: string, password: string, gender: string, profilepicture: string, phoneNumber: string, age: number){
        const usernameexist = await this.userModel.findOne({username : username}).exec();
        const useremailexist = await  this.userModel.findOne({email: email}).exec();
        const userphoneexist =  await this.userModel.findOne({phoneNumber : phoneNumber}).exec();
        if(usernameexist){
         
            return await " user name exist !"
        }
           else if(useremailexist){
             
              return await " user email exist !"
           }
          else if(userphoneexist){
              return await " user phone number exist !"
         }
        else{

        const newUser= new this.userModel({
            username: username,
            email: email.toLowerCase(), 
            password: password, 
            gender: gender, 
            profilePicture: profilepicture,
            phoneNumber: phoneNumber,
            age: age })
           
            const hashed = await this.authService.hashPassword(newUser.password);
            newUser.password = hashed;
            const saved_user = await newUser.save();
            const token = await this.authService.generateJWT(saved_user);
            console.log(token);
            return await token;
    //    const result= await  newUser.save();
    //        console.log(userphoneexist)
    //           console.log(result);
    //           return result.id as string;
        }     
     }
     async getAllUsers() {
        const result= await  this.userModel.find().exec(); 
        console.log(result);
  
       return result as User[]; 
     }
     async getSingleUser(id: string){
        const user= await this.findUser(id);
        if(!user){
         
            throw new NotFoundException('could not find the user');
            
        }
        return user;
    }

   async  updateUser(id: string, username: string, email: string, profilepicture: string, phoneNumber: string,  gender: string, age: number,){
        const updateduser = await this.findUser(id);
      if (username){
         updateduser.username= username;
      }
      if (email){
        updateduser.email=email;
      }
      if (profilepicture){
        updateduser.profilePicture=profilepicture;
      }
      if (phoneNumber){
        updateduser.phoneNumber=phoneNumber;
      }
      if (age){
        updateduser.age=age;
      }
      if (gender){
        updateduser.gender=gender;
      }

      updateduser.save();
    }
    async updateprofilepic(id: string, profilepicture: string){
        const updateduser = await this.findUser(id);
        updateduser.profilePicture=profilepicture;
        updateduser.save()
    }
    async deleteUser(id: string){
        const result = await this.userModel.deleteOne({_id: id}).exec();
        console.log(result);
        if (result.n===0){
            throw new NotFoundException('Could not be deleted');
        }
       }
    async findUser(id: string): Promise<User> {
        let user;
        try{
         user = await this.userModel.findById(id);
        } catch (error){
            throw new NotFoundException('Could not find user');
        }
     return user;
    
    }
    async Login(username: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({username : username} ).exec();
        
        if(!user){
            return 'wrong username taped';
        }else{
            if(await this.authService.comparePasswords(password, user.password)){
                return  this.authService.generateJWT(user);
            }else{
                return 'wrong password inserted taped';
            }
            
            
        }
       
        
    }
}
