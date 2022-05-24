/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Origin, Song } from "@prisma/client";

export class OriginServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OriginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OriginFindManyArgs>
  ): Promise<number> {
    return this.prisma.origin.count(args);
  }

  async findMany<T extends Prisma.OriginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OriginFindManyArgs>
  ): Promise<Origin[]> {
    return this.prisma.origin.findMany(args);
  }
  async findOne<T extends Prisma.OriginFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OriginFindUniqueArgs>
  ): Promise<Origin | null> {
    return this.prisma.origin.findUnique(args);
  }
  async create<T extends Prisma.OriginCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OriginCreateArgs>
  ): Promise<Origin> {
    return this.prisma.origin.create<T>(args);
  }
  async update<T extends Prisma.OriginUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OriginUpdateArgs>
  ): Promise<Origin> {
    return this.prisma.origin.update<T>(args);
  }
  async delete<T extends Prisma.OriginDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OriginDeleteArgs>
  ): Promise<Origin> {
    return this.prisma.origin.delete(args);
  }

  async findSongs(
    parentId: string,
    args: Prisma.SongFindManyArgs
  ): Promise<Song[]> {
    return this.prisma.origin
      .findUnique({
        where: { id: parentId },
      })
      .songs(args);
  }
}