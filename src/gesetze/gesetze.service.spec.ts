import { Test, TestingModule } from '@nestjs/testing';
import { GesetzeService } from './gesetze.service';

describe('GesetzeService', () => {
  let service: GesetzeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GesetzeService],
    }).compile();

    service = module.get<GesetzeService>(GesetzeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
