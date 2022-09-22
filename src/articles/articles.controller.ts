import { Body, Controller, Post } from '@nestjs/common';
import { ArticlesService } from '@app/articles/articles.service';
import { UpdateArticleDto } from '@app/articles/articles.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly service: ArticlesService) {}

    @Post()
    async create(@Body() data: UpdateArticleDto) {
        return await this.service.create(data);
    }
}
