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
import { JournalWhereUniqueInput } from "./JournalWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JournalUpdateInput } from "./JournalUpdateInput";

@ArgsType()
class UpdateJournalArgs {
  @ApiProperty({
    required: true,
    type: () => JournalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JournalWhereUniqueInput)
  @Field(() => JournalWhereUniqueInput, { nullable: false })
  where!: JournalWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JournalUpdateInput,
  })
  @ValidateNested()
  @Type(() => JournalUpdateInput)
  @Field(() => JournalUpdateInput, { nullable: false })
  data!: JournalUpdateInput;
}

export { UpdateJournalArgs as UpdateJournalArgs };