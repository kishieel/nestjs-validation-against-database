import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateArticleDto {
    @IsString()
    @Length(3, 30)
    slug: string;

    @IsString()
    @Length(3, 180)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}
