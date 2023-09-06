import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Genero } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Genero)
    private readonly generosRepository: Repository<Genero>,
  ) {}
  
  
  
  async create(createCategoriaDto: CreateCategoriaDto) {
    const genero = this.generosRepository.create(createCategoriaDto);
    return await this.generosRepository.save(genero);
  }

  async findAll() {
    return await this.generosRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
