import { Test, TestingModule } from '@nestjs/testing';
import { GesetzeController } from './gesetze.controller';

describe('GesetzeController', () => {
  let controller: GesetzeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GesetzeController],
    }).compile();

    controller = module.get<GesetzeController>(GesetzeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
