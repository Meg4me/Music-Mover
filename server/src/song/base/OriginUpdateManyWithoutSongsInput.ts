/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OriginWhereUniqueInput } from "../../origin/base/OriginWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class OriginUpdateManyWithoutSongsInput {
  @Field(() => [OriginWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OriginWhereUniqueInput],
  })
  connect?: Array<OriginWhereUniqueInput>;

  @Field(() => [OriginWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OriginWhereUniqueInput],
  })
  disconnect?: Array<OriginWhereUniqueInput>;

  @Field(() => [OriginWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OriginWhereUniqueInput],
  })
  set?: Array<OriginWhereUniqueInput>;
}
export { OriginUpdateManyWithoutSongsInput };
