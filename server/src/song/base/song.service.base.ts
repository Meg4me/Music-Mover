/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Song,
  Album,
  Artist,
  Playlist,
  User,
  Origin,
} from "@prisma/client";

export class SongServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SongFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongFindManyArgs>
  ): Promise<number> {
    return this.prisma.song.count(args);
  }

  async findMany<T extends Prisma.SongFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongFindManyArgs>
  ): Promise<Song[]> {
    return this.prisma.song.findMany(args);
  }
  async findOne<T extends Prisma.SongFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongFindUniqueArgs>
  ): Promise<Song | null> {
    return this.prisma.song.findUnique(args);
  }
  async create<T extends Prisma.SongCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongCreateArgs>
  ): Promise<Song> {
    return this.prisma.song.create<T>(args);
  }
  async update<T extends Prisma.SongUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongUpdateArgs>
  ): Promise<Song> {
    return this.prisma.song.update<T>(args);
  }
  async delete<T extends Prisma.SongDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SongDeleteArgs>
  ): Promise<Song> {
    return this.prisma.song.delete(args);
  }

  async findAlbum(
    parentId: string,
    args: Prisma.AlbumFindManyArgs
  ): Promise<Album[]> {
    return this.prisma.song
      .findUnique({
        where: { id: parentId },
      })
      .album(args);
  }

  async findArtist(
    parentId: string,
    args: Prisma.ArtistFindManyArgs
  ): Promise<Artist[]> {
    return this.prisma.song
      .findUnique({
        where: { id: parentId },
      })
      .artist(args);
  }

  async findInPlaylist(
    parentId: string,
    args: Prisma.PlaylistFindManyArgs
  ): Promise<Playlist[]> {
    return this.prisma.song
      .findUnique({
        where: { id: parentId },
      })
      .inPlaylist(args);
  }

  async findLikedBy(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.song
      .findUnique({
        where: { id: parentId },
      })
      .likedBy(args);
  }

  async getOrigin(parentId: string): Promise<Origin | null> {
    return this.prisma.song
      .findUnique({
        where: { id: parentId },
      })
      .origin();
  }
}
