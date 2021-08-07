import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { InventoryController } from "./inventory/inventory.controller";
import { CsvModule } from "nest-csv-parser";
import { InventoryService } from "./inventory/inventory.service";

@Module({
  imports: [CsvModule],
  controllers: [AppController, InventoryController],
  providers: [InventoryService]
})
export class AppModule {}
