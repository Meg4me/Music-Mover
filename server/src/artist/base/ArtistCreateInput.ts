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
import { AlbumCreateNestedManyWithoutArtistsInput } from "./AlbumCreateNestedManyWithoutArtistsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SongCreateNestedManyWithoutArtistsInput } from "./SongCreateNestedManyWithoutArtistsInput";
@InputType()
class ArtistCreateInput {
  @ApiProperty({
    required: false,
    type: () => AlbumCreateNestedManyWithoutArtistsInput,
  })
  @ValidateNested()
  @Type(() => AlbumCreateNestedManyWithoutArtistsInput)
  @IsOptional()
  @Field(() => AlbumCreateNestedManyWithoutArtistsInput, {
    nullable: true,
  })
  albums?: AlbumCreateNestedManyWithoutArtistsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imagePath?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SongCreateNestedManyWithoutArtistsInput,
  })
  @ValidateNested()
  @Type(() => SongCreateNestedManyWithoutArtistsInput)
  @IsOptional()
  @Field(() => SongCreateNestedManyWithoutArtistsInput, {
    nullable: true,
  })
  songs?: SongCreateNestedManyWithoutArtistsInput;
}
export { ArtistCreateInput };
