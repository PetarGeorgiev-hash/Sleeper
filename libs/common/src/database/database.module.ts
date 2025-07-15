import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forRootAsync({
        useFactory: (configService : ConfigService) => {
          return {
          uri: configService.getOrThrow('MONGODB_URI'),
        }},
        inject: [ConfigService]
    })]
})
export class DatabaseModule {
    static forFeature(models: ModelDefinition[]){
        return MongooseModule.forFeature(models)
    };
}
