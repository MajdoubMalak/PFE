import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors, Request, UploadedFiles, Res } from '@nestjs/common';
 import {FilesInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { of } from 'rxjs';
// import path from 'path';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { multerOptions } from 'src/config';
import { User, UserRole } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}  
    @Post()
    async addUser(
    @Body('username') username: string, 
    @Body('email') useremail: string,
    @Body('password') userpassword: string,
    @Body('gender') usergender: string,
    @Body('profilePicture') userprofilepic: string,
    @Body('phoneNumber') userphonenumber: string,
    @Body('age') userage: number,
    ){   
    const user = await this.userService.AddUser(username,  useremail, userpassword, usergender,userprofilepic,userphonenumber, userage);
        return user;
    }
    @Post('/login')
    async Login(@Body('username') username: string,
     @Body('password') password: string ){
      return this.userService.Login(username, password);
    }
    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    async getAllUsers()
     {
        const result = await this.userService.getAllUsers(); 
       return result.map (user => ({
           id: user.id,
           username: user.username,
           email: user.email,
           password: user.password,
           gender:user.gender,
           profilepicture:user.profilePicture,
           phoneNumber: user.phoneNumber,
           age: user.age,
       }))
     }
  
     @Get(':id')
     getUser(@Param('id') userId: string,){
         return this.userService.getSingleUser(userId);
     }
     @Patch(':id')
     async updateUser(@Param('id') userId: string,
     @Body('username') username: string, 
     @Body('email') useremail: string,
     @Body('gender') usergender: string,
     @Body('profilePicture') userprofilepic: string,
     @Body('phoneNumber') userphonenumber: string,
     @Body('age') userage: number,
      ){
         await this.userService.updateUser(userId, username, useremail,usergender,userprofilepic, userphonenumber, userage);
          return null;
      }
      //userRole id ne doit pas etre introduit; juste un exemple pour le cas de plusieurs roles
      @hasRoles(UserRole.ADMIN, UserRole.PARTI)
      @UseGuards(JwtAuthGuard, RolesGuard)
      @Delete(':id')
      async deleteUser(@Param('id') userId: string){
          await this.userService.deleteUser(userId);
          return null;
      }

      @UseGuards(JwtAuthGuard)
      @Post('upload')
      @UseInterceptors(FilesInterceptor('file',null,multerOptions))
      async uploadFile(@UploadedFiles() file, @Request() req){
          const user: User = req.user.user;
          const updateduser= this.userService.updateprofilepic(user._id,file[0].filename) ;
         console.log(updateduser);
         return updateduser;
      }
      @Get('getprofilepicture/:picturename')
      async getProfilePicture(@Param('picturename') picturename: string, @Res() res){
        return of(res.sendFile(join(process.cwd(), 'uploads/'+picturename)));

      }
 
}
