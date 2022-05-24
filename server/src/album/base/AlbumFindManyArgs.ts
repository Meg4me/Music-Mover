/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AlbumWhereInput } from "./AlbumWhereInput";
import { Type } from "class-transformer";
import { AlbumOrderByInput } from "./AlbumOrderByInput";

@ArgsType()
class AlbumFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AlbumWhereInput,
  })
  @Field(() => AlbumWhereInput, { nullable: true })
  @Type(() => AlbumWhereInput)
  where?: AlbumWhereInput;

  @ApiProperty({
    required: false,
    type: [AlbumOrderByInput],
  })
  @Field(() => [AlbumOrderByInput], { nullable: true })
  @Type(() => AlbumOrderByInput)
  orderBy?: Array<AlbumOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AlbumFindManyArgs };