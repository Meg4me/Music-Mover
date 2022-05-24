import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OriginResolverBase } from "./base/origin.resolver.base";
import { Origin } from "./base/Origin";
import { OriginService } from "./origin.service";

@graphql.Resolver(() => Origin)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OriginResolver extends OriginResolverBase {
  constructor(
    protected readonly service: OriginService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
