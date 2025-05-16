import { Test, TestingModule } from '@nestjs/testing';
import { PasswordHashserService } from './password-hashser.service';

describe('PasswordHashserService', () => {
  let service: PasswordHashserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordHashserService],
    }).compile();

    service = module.get<PasswordHashserService>(PasswordHashserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
