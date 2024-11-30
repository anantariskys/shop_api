import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BarangModule } from './barang/barang.module';
import { KategoriModule } from './kategori/kategori.module';
import { KategoriService } from './kategori/kategori.service';
import { KategoriController } from './kategori/kategori.controller';


@Module({
  imports: [PrismaModule, BarangModule, KategoriModule],
  controllers: [AppController, KategoriController],
  providers: [AppService, KategoriService],
})
export class AppModule {}
