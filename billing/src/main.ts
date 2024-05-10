/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

const port = process.env.PORT || 3003;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'billing-consumer',
      },
      port: 3003,
    },
  });

  await app.startAllMicroservices();
  app.listen(port, () => {
    console.log(`Billing microservice is running on port:${port}`);
  });
}
bootstrap();
