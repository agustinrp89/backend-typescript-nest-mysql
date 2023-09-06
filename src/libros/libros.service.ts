import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { Genero } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class LibrosService {

constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,

    @InjectRepository(Genero)
    private generosRepository: Repository<Genero>,

){}

  async create(createLibroDto: CreateLibroDto) {
    const genero = await this.generosRepository.findOneBy({name: createLibroDto.genero});
  
  if(!genero){
    throw new BadRequestException('genero no encontrado');
  }  

  return await this.libroRepository.save({
    ...createLibroDto,
    genero
  })

  }

  async findAll() {
    return await this.libroRepository.find();
  }

  async findOne(id: number) {
    const libro = await this.libroRepository.findOneBy({ id });

    if(!libro){
      throw new BadRequestException('libro no esta');
    }
    return libro;
  }

  async update(id: number, updateLibroDto: UpdateLibroDto) {
   const libro = await this.libroRepository.update(id,{...updateLibroDto,genero:updateLibroDto.genero ? await this.validateBreed(updateLibroDto.genero): undefined});

   if(!libro){
    throw new BadRequestException('libro no encontrado');
   }

  }


  async remove(id: number) {
    return await this.libroRepository.softDelete(id);
  }

  private async validateBreed(genero:string){
    const generoEntity = await this.generosRepository.findOneBy({name:genero});
  
    if (!generoEntity){
      throw new BadRequestException('genero no found');
    }
    return  generoEntity;
  }
}
