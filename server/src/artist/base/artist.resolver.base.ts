/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateArtistArgs } from "./CreateArtistArgs";
import { UpdateArtistArgs } from "./UpdateArtistArgs";
import { DeleteArtistArgs } from "./DeleteArtistArgs";
import { ArtistFindManyArgs } from "./ArtistFindManyArgs";
import { ArtistFindUniqueArgs } from "./ArtistFindUniqueArgs";
import { Artist } from "./Artist";
import { AlbumFindManyArgs } from "../../album/base/AlbumFindManyArgs";
import { Album } from "../../album/base/Album";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { ArtistService } from "../artist.service";

@graphql.Resolver(() => Artist)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ArtistResolverBase {
  constructor(
    protected readonly service: ArtistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "any",
  })
  async _artistsMeta(
    @graphql.Args() args: ArtistFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Artist])
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "any",
  })
  async artists(@graphql.Args() args: ArtistFindManyArgs): Promise<Artist[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Artist, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "own",
  })
  async artist(
    @graphql.Args() args: ArtistFindUniqueArgs
  ): Promise<Artist | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Artist)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "create",
    possession: "any",
  })
  async createArtist(@graphql.Args() args: CreateArtistArgs): Promise<Artist> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Artist)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  async updateArtist(
    @graphql.Args() args: UpdateArtistArgs
  ): Promise<Artist | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Artist)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "delete",
    possession: "any",
  })
  async deleteArtist(
    @graphql.Args() args: DeleteArtistArgs
  ): Promise<Artist | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Album])
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "read",
    possession: "any",
  })
  async albums(
    @graphql.Parent() parent: Artist,
    @graphql.Args() args: AlbumFindManyArgs
  ): Promise<Album[]> {
    const results = await this.service.findAlbums(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Song])
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "read",
    possession: "any",
  })
  async songs(
    @graphql.Parent() parent: Artist,
    @graphql.Args() args: SongFindManyArgs
  ): Promise<Song[]> {
    const results = await this.service.findSongs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
