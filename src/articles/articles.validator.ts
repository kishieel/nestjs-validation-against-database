import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';

@Injectable()
@ValidatorConstraint({ name: 'articleSlugUnique', async: true })
export class ArticleSlugUnique implements ValidatorConstraintInterface {
    constructor(private readonly prisma: PrismaService) {}

    async validate(value: any, args?: ValidationArguments): Promise<boolean> {
        return 0 === (await this.prisma.article.count({ where: { slug: { equals: value } } }));
    }

    defaultMessage(args?: ValidationArguments): string {
        return '$property must be unique';
    }
}
