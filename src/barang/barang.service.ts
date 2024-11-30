import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Barang } from '@prisma/client';

@Injectable()
export class BarangService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Barang[]> {
    return this.prisma.barang.findMany({ include: { kategori: true } });
  }

  async getById(id: number): Promise<Barang | null> {
    return this.prisma.barang.findUnique({ where: { id }, include: { kategori: true } });
  }

  async create(data: Omit<Barang, 'id'>): Promise<Barang> {
    return this.prisma.barang.create({ data });
  }

  async update(id: number, data: Partial<Barang>): Promise<Barang> {
    return this.prisma.barang.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.barang.delete({ where: { id } });
  }
}
