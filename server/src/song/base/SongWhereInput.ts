/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AlbumListRelationFilter } from "../../album/base/AlbumListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ArtistListRelationFilter } from "../../artist/base/ArtistListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OriginListRelationFilter } from "../../origin/base/OriginListRelationFilter";
import { PlaylistWhereUniqueInput } from "../../playlist/base/PlaylistWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class SongWhereInput {
  @ApiProperty({
    required: false,
    type: () => AlbumListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AlbumListRelationFilter)
  @IsOptional()
  @Field(() => AlbumListRelationFilter, {
    nullable: true,
  })
  album?: AlbumListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ArtistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ArtistListRelationFilter)
  @IsOptional()
  @Field(() => ArtistListRelationFilter, {
    nullable: true,
  })
  artist?: ArtistListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OriginListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OriginListRelationFilter)
  @IsOptional()
  @Field(() => OriginListRelationFilter, {
    nullable: true,
  })
  origin?: OriginListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => PlaylistWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PlaylistWhereUniqueInput)
  @IsOptional()
  @Field(() => PlaylistWhereUniqueInput, {
    nullable: true,
  })
  playlist?: PlaylistWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;
}
export { SongWhereInput };