import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comentario } from "./Comentario";
import { Publicacao } from "./Publicacao";

@Index("login", ["login"], { unique: true })
@Entity("usuario", { schema: "rede_social" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "login", unique: true, length: 50 })
  login: string;

  @Column("varchar", { name: "senha", length: 20 })
  senha: string;

  @Column("varchar", { name: "nome_completo", length: 150 })
  nomeCompleto: string;

  @OneToMany(() => Comentario, (comentario) => comentario.usuario)
  comentarios: Comentario[];

  @OneToMany(() => Publicacao, (publicacao) => publicacao.usuario)
  publicacaos: Publicacao[];
}
