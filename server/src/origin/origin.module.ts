import { Module } from "@nestjs/common";
import { OriginModuleBase } from "./base/origin.module.base";
import { OriginService } from "./origin.service";
import { OriginController } from "./origin.controller";
import { OriginResolver } from "./origin.resolver";

@Module({
  imports: [OriginModuleBase],
  controllers: [OriginController],
  providers: [OriginService, OriginResolver],
  exports: [OriginService],
})
export class OriginModule {}
