import { Controller, Get } from '@nestjs/common';

@Controller('aboutus')
export class AboutUsController {
  @Get()
  showAboutUs(): string {
    return 'This action returns description of about us';
  }
}