import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OriginService } from "./origin.service";
import { OriginControllerBase } from "./base/origin.controller.base";

@swagger.ApiTags("origins")
@common.Controller("origins")
export class OriginController extends OriginControllerBase {
  constructor(
    protected readonly service: OriginService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
