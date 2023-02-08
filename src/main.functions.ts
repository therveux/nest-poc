import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';

const server: express.Express = express();

const localBasePath = '/practice-web-et-mobile/europe-west1/nestjsPoc';
const prodBasePath = '/nestjsPoc';

async function createNestServer(expressInstance: express.Express) {
    const app: INestApplication = await NestFactory.create(AppModule, new ExpressAdapter(expressInstance));

    const config = new DocumentBuilder()
        .setTitle('Celine POC API')
        .setDescription('')
        .setVersion('0.1')
        .addTag('Auth')
        .addTag('Users')
        .addServer(prodBasePath)
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    return await app.init();
}

createNestServer(server)
    .then(() => console.log('Nest Ready'))
    .catch(err => console.error('Nest broken', err));

export const nestjsPoc: functions.HttpsFunction = functions.region('europe-west1').https.onRequest(server);
