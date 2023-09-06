
import { Genero } from "src/categorias/entities/categoria.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";


@Entity()
export class Libro {

    @Column({ primary: true, generated: true})
    id: number;

    @Column()
    title: string;
  
    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    publisher: string;

    @Column()
    pages:number;

    @Column()
    image_url: string;
    

    @Column()
    cantidad: number;

    @ManyToOne(() => Genero, (genero) => genero.id)
    genero: Genero;

    @DeleteDateColumn()
    deletedAt: Date;

}

