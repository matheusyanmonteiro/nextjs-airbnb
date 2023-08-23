import { ArgsType, Field } from "@nestjs/graphql";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CheckUserValues, Credentials, SignUpCredentials } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  @Type(() => Credentials)
  @ValidateNested()
  credentials!: Credentials;
}

@ArgsType()
export class SignUpArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: SignUpCredentials;
}

@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  @Type(() => CheckUserValues)
  @ValidateNested()
  credentials!: CheckUserValues;
}