import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserDocument, UserSchema } from '@app/common';
import { DatabaseModule } from '@app/common';
import { UserRepository } from './users.repository';

@Module({
   imports: [
     DatabaseModule,
     DatabaseModule.forFeature([{name: UserDocument.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService]
})
export class UsersModule {}
