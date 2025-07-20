import { Test, TestingModule } from '@nestjs/testing';
import { NotoficationsController } from './notifications.controller';
import { NotoficationsService } from './notifications.service';

describe('NotoficationsController', () => {
  let notoficationsController: NotoficationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotoficationsController],
      providers: [NotoficationsService],
    }).compile();

    notoficationsController = app.get<NotoficationsController>(NotoficationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(notoficationsController.getHello()).toBe('Hello World!');
    });
  });
});
