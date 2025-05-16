import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [MongooseModule.forRoot('mongodb+srv://abdurjoy2001:BYgRw9enDtSoyFoN@cluster0.k5i4rdu.mongodb.net/first-nest-js-auth-db?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser: true, useUnifiedTopology : true}), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
