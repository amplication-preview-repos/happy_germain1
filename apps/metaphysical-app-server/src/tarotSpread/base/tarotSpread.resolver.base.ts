/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TarotSpread } from "./TarotSpread";
import { TarotSpreadCountArgs } from "./TarotSpreadCountArgs";
import { TarotSpreadFindManyArgs } from "./TarotSpreadFindManyArgs";
import { TarotSpreadFindUniqueArgs } from "./TarotSpreadFindUniqueArgs";
import { CreateTarotSpreadArgs } from "./CreateTarotSpreadArgs";
import { UpdateTarotSpreadArgs } from "./UpdateTarotSpreadArgs";
import { DeleteTarotSpreadArgs } from "./DeleteTarotSpreadArgs";
import { TarotSpreadService } from "../tarotSpread.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TarotSpread)
export class TarotSpreadResolverBase {
  constructor(
    protected readonly service: TarotSpreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "read",
    possession: "any",
  })
  async _tarotSpreadsMeta(
    @graphql.Args() args: TarotSpreadCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TarotSpread])
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "read",
    possession: "any",
  })
  async tarotSpreads(
    @graphql.Args() args: TarotSpreadFindManyArgs
  ): Promise<TarotSpread[]> {
    return this.service.tarotSpreads(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TarotSpread, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "read",
    possession: "own",
  })
  async tarotSpread(
    @graphql.Args() args: TarotSpreadFindUniqueArgs
  ): Promise<TarotSpread | null> {
    const result = await this.service.tarotSpread(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TarotSpread)
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "create",
    possession: "any",
  })
  async createTarotSpread(
    @graphql.Args() args: CreateTarotSpreadArgs
  ): Promise<TarotSpread> {
    return await this.service.createTarotSpread({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TarotSpread)
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "update",
    possession: "any",
  })
  async updateTarotSpread(
    @graphql.Args() args: UpdateTarotSpreadArgs
  ): Promise<TarotSpread | null> {
    try {
      return await this.service.updateTarotSpread({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TarotSpread)
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "delete",
    possession: "any",
  })
  async deleteTarotSpread(
    @graphql.Args() args: DeleteTarotSpreadArgs
  ): Promise<TarotSpread | null> {
    try {
      return await this.service.deleteTarotSpread(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}