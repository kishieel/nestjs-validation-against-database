import { Module } from '@nestjs/common';
import { ArticlesController } from '@app/articles/articles.controller';
import { ArticlesService } from '@app/articles/articles.service';

@Module({
    controllers: [ArticlesController],
    providers: [ArticlesService],
})
export class ArticlesModule {}
