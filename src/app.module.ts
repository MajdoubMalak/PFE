import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ProductsModule,
    UserModule,
    MongooseModule.forRoot('mongodb://localhost/nestProduct'),
    AuthModule,
  
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
