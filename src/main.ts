import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from '@app/prisma/prisma.service';
import { PrismaModule } from '@app/prisma/prisma.module';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const prismaService = app.get(PrismaService);
    await prismaService.enableShutdownHooks(app);
    useContainer(app.select(PrismaModule), { fallbackOnErrors: true });

    app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

    await app.listen(3000);
}

bootstrap();
