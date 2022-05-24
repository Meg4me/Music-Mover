/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Album } from "../../album/base/Album";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Artist } from "../../artist/base/Artist";
import { Origin } from "../../origin/base/Origin";
import { Playlist } from "../../playlist/base/Playlist";
@ObjectType()
class Song {
  @ApiProperty({
    required: false,
    type: () => [Album],
  })
  @ValidateNested()
  @Type(() => Album)
  @IsOptional()
  album?: Array<Album>;

  @ApiProperty({
    required: false,
    type: () => [Artist],
  })
  @ValidateNested()
  @Type(() => Artist)
  @IsOptional()
  artist?: Array<Artist>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Origin],
  })
  @ValidateNested()
  @Type(() => Origin)
  @IsOptional()
  origin?: Array<Origin>;

  @ApiProperty({
    required: false,
    type: () => Playlist,
  })
  @ValidateNested()
  @Type(() => Playlist)
  @IsOptional()
  playlist?: Playlist | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Song };
