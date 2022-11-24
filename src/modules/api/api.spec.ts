import { Test } from '@nestjs/testing';
import { ApiController } from '../api/api.controller';
import { ApiService } from '../api/api.service';

describe('Api Endpoint', () => {
  let controller: ApiController;
  let service: ApiService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    controller = moduleRef.get<ApiController>(ApiController);
    service = moduleRef.get<ApiService>(ApiService);
  });

  describe('Controller', () => {
    it('create', async () => {
      const result = { data: 'test' };
      expect(await controller.create({ data: 'test' })).toStrictEqual(result);
    });

    it('get', async () => {
      const result = { data: 'Hello World!' };
      expect(await controller.get()).toStrictEqual(result);
    });
  });

  describe('Service', () => {
    it('create', async () => {
      const result = { data: 'test' };
      expect(await controller.create({ data: 'test' })).toStrictEqual(result);
    });

    it('get', async () => {
      const result = { data: 'Hello World!' };
      expect(await controller.get()).toStrictEqual(result);
    });
  });
});
