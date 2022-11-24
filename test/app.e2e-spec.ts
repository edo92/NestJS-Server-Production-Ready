import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../src/modules/app/app.module';
import { ApiService } from '../src/modules/api/api.service';
import { ApiController } from '../src/modules/api/api.controller';

describe('Api Module', () => {
  let moduleRef: TestingModule;
  let app: INestApplication;
  let apiService: ApiService;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    apiService = moduleRef.get<ApiService>(ApiService);

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET api`, async () => {
    const result = await apiService.getData();
    return request(app.getHttpServer())
      .get('/endpoint/get')
      .expect(200)
      .expect(result);
  });

  it('/POST api', async () => {
    const result = await apiService.createData({ data: 'test' });
    return request(app.getHttpServer())
      .post('/endpoint/create')
      .send({ data: 'test' })
      .expect(201)
      .expect(result);
  });
});
