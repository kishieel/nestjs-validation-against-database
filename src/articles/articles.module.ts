import { Module } from '@nestjs/common';
import { ArticlesController } from '@app/articles/articles.controller';
import { ArticlesService } from '@app/articles/articles.service';
import { ArticleSlugUnique } from '@app/articles/articles.validator';

@Module({
    controllers: [ArticlesController],
    providers: [ArticlesService, ArticleSlugUnique],
})
export class ArticlesModule {}
