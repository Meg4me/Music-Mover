/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ArtistService } from "../artist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ArtistCreateInput } from "./ArtistCreateInput";
import { ArtistWhereInput } from "./ArtistWhereInput";
import { ArtistWhereUniqueInput } from "./ArtistWhereUniqueInput";
import { ArtistFindManyArgs } from "./ArtistFindManyArgs";
import { ArtistUpdateInput } from "./ArtistUpdateInput";
import { Artist } from "./Artist";
import { AlbumFindManyArgs } from "../../album/base/AlbumFindManyArgs";
import { Album } from "../../album/base/Album";
import { AlbumWhereUniqueInput } from "../../album/base/AlbumWhereUniqueInput";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ArtistControllerBase {
  constructor(
    protected readonly service: ArtistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Artist })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ArtistCreateInput): Promise<Artist> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        imagePath: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Artist] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ArtistFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Artist[]> {
    const args = plainToClass(ArtistFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        imagePath: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        imagePath: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() data: ArtistUpdateInput
  ): Promise<Artist | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          imagePath: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          imagePath: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Album",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/albums")
  @ApiNestedQuery(AlbumFindManyArgs)
  async findManyAlbums(
    @common.Req() request: Request,
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Album[]> {
    const query = plainToClass(AlbumFindManyArgs, request.query);
    const results = await this.service.findAlbums(params.id, {
      ...query,
      select: {
        artist: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        imagePath: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/albums")
  async connectAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/albums")
  async updateAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/albums")
  async disconnectAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Song",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/songs")
  @ApiNestedQuery(SongFindManyArgs)
  async findManySongs(
    @common.Req() request: Request,
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Song[]> {
    const query = plainToClass(SongFindManyArgs, request.query);
    const results = await this.service.findSongs(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        origin: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/songs")
  async connectSongs(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/songs")
  async updateSongs(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Artist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/songs")
  async disconnectSongs(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: SongWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      songs: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
