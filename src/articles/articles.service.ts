import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateArticleDto } from '@app/articles/articles.dto';
import { PrismaService } from '@app/prisma/prisma.service';

@Injectable()
export class ArticlesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: UpdateArticleDto) {
        const isSlugUnique = 0 === (await this.prisma.article.count({ where: { slug: { equals: data.slug } } }));

        if (!isSlugUnique) {
            throw new NotFoundException('slug must be unique');
        }

        return await this.prisma.article.create({ data });
    }
}
