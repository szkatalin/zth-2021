import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InventoryController } from './inventory/inventory.controller';

@Module({
  imports: [],
  controllers: [AppController, InventoryController],
  providers: [],
})
export class AppModule {}
