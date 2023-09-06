import { Module } from '@nestjs/common';
import { LibrosModule } from './libros/libros.module';
import {   TypeOrmModule} from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQLHOST,
      port: parseInt(process.env.MYSQLPORT),
      username: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }), 
    LibrosModule, CategoriasModule, UsersModule, AuthModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
