import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { KategoriService } from './kategori.service';
import { KategoriController } from './kategori.controller';

@Module({
    imports: [PrismaModule], 
      providers: [KategoriService],
    controllers: [KategoriController]
  })
export class KategoriModule {}
