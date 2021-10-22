// import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

// const logger = new Logger('Main');
const MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    url: 'localhost:4565',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    MicroserviceOptions,
  );
  app.listen();
}
bootstrap();
