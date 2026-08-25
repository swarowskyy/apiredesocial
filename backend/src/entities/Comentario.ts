import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Publicacao } from "./Publicacao";
import { Usuario } from "./Usuario";

@Index("fk_comentario_usuario", ["usuarioId"], {})
@Index("fk_comentario_publicacao", ["publicacaoId"], {})
@Entity("comentario", { schema: "rede_social" })
export class Comentario {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "usuario_id" })
  usuarioId: number;

  @Column("int", { name: "publicacao_id" })
  publicacaoId: number;

  @Column("text", { name: "texto" })
  texto: string;

  @ManyToOne(() => Publicacao, (publicacao) => publicacao.comentarios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "publicacao_id", referencedColumnName: "id" }])
  publicacao: Publicacao;

  @ManyToOne(() => Usuario, (usuario) => usuario.comentarios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: Usuario;
}
