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
import { PlaylistService } from "../playlist.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlaylistCreateInput } from "./PlaylistCreateInput";
import { PlaylistWhereInput } from "./PlaylistWhereInput";
import { PlaylistWhereUniqueInput } from "./PlaylistWhereUniqueInput";
import { PlaylistFindManyArgs } from "./PlaylistFindManyArgs";
import { PlaylistUpdateInput } from "./PlaylistUpdateInput";
import { Playlist } from "./Playlist";
import { SongFindManyArgs } from "../../song/base/SongFindManyArgs";
import { Song } from "../../song/base/Song";
import { SongWhereUniqueInput } from "../../song/base/SongWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlaylistControllerBase {
  constructor(
    protected readonly service: PlaylistService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Playlist })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: PlaylistCreateInput): Promise<Playlist> {
    return await this.service.create({
      data: {
        ...data,

        createdBy: data.createdBy
          ? {
              connect: data.createdBy,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Playlist] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(PlaylistFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Playlist[]> {
    const args = plainToClass(PlaylistFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Playlist",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Playlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PlaylistWhereUniqueInput
  ): Promise<Playlist | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        title: true,
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
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Playlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PlaylistWhereUniqueInput,
    @common.Body() data: PlaylistUpdateInput
  ): Promise<Playlist | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdBy: data.createdBy
            ? {
                connect: data.createdBy,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          title: true,
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
    resource: "Playlist",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Playlist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PlaylistWhereUniqueInput
  ): Promise<Playlist | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
          title: true,
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
    resource: "Song",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/songs")
  @ApiNestedQuery(SongFindManyArgs)
  async findManySongs(
    @common.Req() request: Request,
    @common.Param() params: PlaylistWhereUniqueInput
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
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/songs")
  async connectSongs(
    @common.Param() params: PlaylistWhereUniqueInput,
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
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/songs")
  async updateSongs(
    @common.Param() params: PlaylistWhereUniqueInput,
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
    resource: "Playlist",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/songs")
  async disconnectSongs(
    @common.Param() params: PlaylistWhereUniqueInput,
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
