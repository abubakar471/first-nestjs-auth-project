import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // define the options or config settings for swagger document
  const options = new DocumentBuilder()
    .setTitle("Nest JS Authentication - with MongoDB and Passport JWT")
    .setDescription(
      "A complete step-by-step authentication project implmented with Nest JS, MongoDB and Passport JS (JWT)"
    )
    .setVersion("1.0")
    .addTag("users")
    .addBearerAuth('authorization','header')
    .build();

    const document = SwaggerModule.createDocument(app, options);

  // setup swagger
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(3000);
}
bootstrap();
