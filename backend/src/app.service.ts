import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicacao } from './entities/Publicacao';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Publicacao)
    private readonly publicacaoRepo: Repository<Publicacao>,
  ) {}

  listarPublicacoes() {
    return this.publicacaoRepo.find({
      relations: {
        usuario: true,
        comentarios: {
          usuario: true,
        },
      },
    });
  }
}