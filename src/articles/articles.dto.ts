import { IsNotEmpty, IsString, Length, Validate } from 'class-validator';
import { ArticleSlugUnique } from '@app/articles/articles.validator';

export class UpdateArticleDto {
    @IsString()
    @Length(3, 30)
    @Validate(ArticleSlugUnique)
    slug: string;

    @IsString()
    @Length(3, 180)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
