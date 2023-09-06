
import { Libro } from "src/libros/entities/libro.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Libro, (libro) => libro.genero)
  libros: Libro[];

  @DeleteDateColumn()
  deletedAt: Date;
}