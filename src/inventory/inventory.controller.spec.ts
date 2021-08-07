import { Test, TestingModule } from "@nestjs/testing";
import { InventoryController } from "./inventory.controller";

describe("inventory Controller", () => {
  let controller: InventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryController]
    }).compile();

    controller = module.get<InventoryController>(InventoryController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
