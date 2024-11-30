import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BarangService } from './barang.service';
import { Barang } from '@prisma/client';

@Controller('barang')
export class BarangController {
  constructor(private readonly barangService: BarangService) {}

  @Get()
  async getAll(): Promise<Barang[]> {
    return this.barangService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Barang | null> {
    return this.barangService.getById(Number(id));
  }

  @Post()
  async create(@Body() data: Omit<Barang, 'id'>): Promise<Barang> {
    return this.barangService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Barang>): Promise<Barang> {
    return this.barangService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.barangService.delete(Number(id));
  }
}
