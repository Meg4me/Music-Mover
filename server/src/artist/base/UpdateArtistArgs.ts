/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ArtistWhereUniqueInput } from "./ArtistWhereUniqueInput";
import { ArtistUpdateInput } from "./ArtistUpdateInput";

@ArgsType()
class UpdateArtistArgs {
  @Field(() => ArtistWhereUniqueInput, { nullable: false })
  where!: ArtistWhereUniqueInput;
  @Field(() => ArtistUpdateInput, { nullable: false })
  data!: ArtistUpdateInput;
}

export { UpdateArtistArgs };
