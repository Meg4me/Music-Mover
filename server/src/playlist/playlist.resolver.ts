import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PlaylistResolverBase } from "./base/playlist.resolver.base";
import { Playlist } from "./base/Playlist";
import { PlaylistService } from "./playlist.service";

@graphql.Resolver(() => Playlist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PlaylistResolver extends PlaylistResolverBase {
  constructor(
    protected readonly service: PlaylistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
