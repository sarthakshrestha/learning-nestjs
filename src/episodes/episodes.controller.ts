import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  HttpException,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { HttpStatus } from '@nestjs/common';
import { DefaultValuePipe } from '@nestjs/common';
import { IsPositivePipe } from 'src/is-positive/is-positive.pipe';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodeService: EpisodesService) {}
  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe)
    limit: number,
  ) {
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
