import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";
import { FindOperator } from "typeorm";

export class CreateLibroDto {

    @IsString()
    title: string;
    
    @IsString()
    genero: string;

    @IsString()
    description: string;
  
    @IsString()
    author: string;
   
    @IsString()
    publisher: string;
    
    @IsInt()
    @IsPositive()
    @IsOptional()
    pages?:number;
    
    @IsString()
    image_url: string;
    
    @IsInt()
    @IsPositive()
    cantidad: number;    
   

}
