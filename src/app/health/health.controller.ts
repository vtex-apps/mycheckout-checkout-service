import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get(`/`)
  health(): string {
    return 'ok ci/cd';
  }
}
