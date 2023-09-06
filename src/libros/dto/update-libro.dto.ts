import { PartialType } from '@nestjs/mapped-types';
import { CreateLibroDto } from './create-libro.dto';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateLibroDto  {

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    genero?  : string;

    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsOptional()
    author?: string;
   
    @IsString()
    @IsOptional()
    publisher?: string;
    
    @IsInt()    
    @IsPositive()
    @IsOptional()
    pages?:number;
    
    @IsString()
    @IsOptional()
    image_url?: string;
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    cantidad?: number;

}
