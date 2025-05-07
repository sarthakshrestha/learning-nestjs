import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { HttpStatus } from '@nestjs/common';
@Controller('episodes')
export class EpisodesController {
  constructor(private episodeService: EpisodesService) {}
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'All episodes';
  }

  @Get('featured')
  findFeatured() {
    return this.episodeService.findFeatured;
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    console.log(id);
    const episode = await this.episodeService.findOne(id);
    if (!episode) {
      // throw new HttpException('Episode not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Episode not found');
    }
    return episode;
  }

  @Post()
  create(@Body() input: any) {
    console.log(input);
    return this.episodeService.create(input);
  }
}
