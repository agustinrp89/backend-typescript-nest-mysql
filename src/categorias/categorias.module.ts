import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './entities/categoria.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Genero]), AuthModule],
  controllers: [CategoriasController],
  providers: [CategoriasService],
  exports:[TypeOrmModule],
})
export class CategoriasModule {}
