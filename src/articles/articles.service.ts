import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateArticleDto } from '@app/articles/articles.dto';
import { PrismaService } from '@app/prisma/prisma.service';

@Injectable()
export class ArticlesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: UpdateArticleDto) {
        return await this.prisma.article.create({ data });
    }
}
