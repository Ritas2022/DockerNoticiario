import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Boletim {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    data: string;

    @Column()
    descricao: string;

}