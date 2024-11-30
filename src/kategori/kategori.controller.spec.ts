import { Test, TestingModule } from '@nestjs/testing';
import { KategoriController } from './kategori.controller';

describe('KategoriController', () => {
  let controller: KategoriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KategoriController],
    }).compile();

    controller = module.get<KategoriController>(KategoriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
