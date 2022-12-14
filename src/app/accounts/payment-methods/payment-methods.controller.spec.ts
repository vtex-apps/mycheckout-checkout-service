import { Provider } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodsController } from './payment-methods.controller';
import { PaymentMethodsService } from './payment-methods.service';

describe('PaymentMethodsController', () => {
  let controller: PaymentMethodsController;

  beforeEach(async () => {
    const service: Provider = {
      provide: PaymentMethodsService,
      useValue: {},
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMethodsController],
      providers: [service],
    }).compile();

    controller = module.get<PaymentMethodsController>(PaymentMethodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
