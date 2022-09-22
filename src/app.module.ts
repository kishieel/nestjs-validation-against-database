import { Module } from '@nestjs/common';
import { ArticlesModule } from '@app/articles/articles.module';
import { PrismaModule } from '@app/prisma/prisma.module';

@Module({
    imports: [PrismaModule, ArticlesModule],
})
export class AppModule {}
