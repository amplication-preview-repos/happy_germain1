/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TarotSpreadWhereInput } from "./TarotSpreadWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TarotSpreadCountArgs {
  @ApiProperty({
    required: false,
    type: () => TarotSpreadWhereInput,
  })
  @Field(() => TarotSpreadWhereInput, { nullable: true })
  @Type(() => TarotSpreadWhereInput)
  where?: TarotSpreadWhereInput;
}

export { TarotSpreadCountArgs as TarotSpreadCountArgs };
