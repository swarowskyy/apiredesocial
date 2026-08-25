import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/Usuario';
import { Publicacao } from './entities/Publicacao';
import { Comentario } from './entities/Comentario';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rede_social',
      entities: [Usuario, Publicacao, Comentario],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Publicacao]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
