import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Comentario } from "./Comentario";
import { Usuario } from "./Usuario";

@Index("fk_publicacao_usuario", ["usuarioId"], {})
@Entity("publicacao", { schema: "rede_social" })
export class Publicacao {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "usuario_id" })
  usuarioId: number;

  @Column("varchar", { name: "titulo", nullable: true, length: 150 })
  titulo: string | null;

  @Column("text", { name: "descricao" })
  descricao: string;

  @OneToMany(() => Comentario, (comentario) => comentario.publicacao)
  comentarios: Comentario[];

  @ManyToOne(() => Usuario, (usuario) => usuario.publicacaos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: Usuario;
}
