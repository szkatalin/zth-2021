import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { InventoryService } from "./inventory.service";
import PostUrlDto from "./dto/postUrlDto";

@Controller("inventory")
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Post("url")
  @HttpCode(204)
  postUrl(@Body() json: PostUrlDto) {
    return this.inventoryService.test(json);
  }
}
