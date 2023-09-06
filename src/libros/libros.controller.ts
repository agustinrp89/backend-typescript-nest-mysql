import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { ActiveUserInterface } from '../common/interfaces/active-user.interface';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('libros')
@ApiBearerAuth()
@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}
  @Auth(Role.ADMIN)
  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }

  @Auth(Role.USER)
  @Get()
  findAll(
   @ActiveUser()
    user: ActiveUserInterface,
  ) {
    console.log(user)
    return this.librosService.findAll();
  }

  @Auth(Role.USER)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.librosService.findOne(id);
  }

  @Auth(Role.USER)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateLibroDto: UpdateLibroDto) {
    return this.librosService.update(id, updateLibroDto);
  }
  
  @Auth(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.librosService.remove(id);
  }
}



