import { Test, TestingModule } from '@nestjs/testing';
import { BarangController } from './barang.controller';

describe('BarangController', () => {
  let controller: BarangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarangController],
    }).compile();

    controller = module.get<BarangController>(BarangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
