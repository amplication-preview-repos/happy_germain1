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
import { SpellBook } from "./SpellBook";
import { SpellBookCountArgs } from "./SpellBookCountArgs";
import { SpellBookFindManyArgs } from "./SpellBookFindManyArgs";
import { SpellBookFindUniqueArgs } from "./SpellBookFindUniqueArgs";
import { CreateSpellBookArgs } from "./CreateSpellBookArgs";
import { UpdateSpellBookArgs } from "./UpdateSpellBookArgs";
import { DeleteSpellBookArgs } from "./DeleteSpellBookArgs";
import { SpellBookService } from "../spellBook.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SpellBook)
export class SpellBookResolverBase {
  constructor(
    protected readonly service: SpellBookService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SpellBook",
    action: "read",
    possession: "any",
  })
  async _spellBooksMeta(
    @graphql.Args() args: SpellBookCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SpellBook])
  @nestAccessControl.UseRoles({
    resource: "SpellBook",
    action: "read",
    possession: "any",
  })
  async spellBooks(
    @graphql.Args() args: SpellBookFindManyArgs
  ): Promise<SpellBook[]> {
    return this.service.spellBooks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SpellBook, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SpellBook",
    action: "read",
    possession: "own",
  })
  async spellBook(
    @graphql.Args() args: SpellBookFindUniqueArgs
  ): Promise<SpellBook | null> {
    const result = await this.service.spellBook(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SpellBook)
  @nestAccessControl.UseRoles({
    resource: "SpellBook",
    action: "create",
    possession: "any",
  })
  async createSpellBook(
    @graphql.Args() args: CreateSpellBookArgs
  ): Promise<SpellBook> {
    return await this.service.createSpellBook({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SpellBook)
  @nestAccessControl.UseRoles({
    resource: "SpellBook",
    action: "update",
    possession: "any",
  })
  async updateSpellBook(
    @graphql.Args() args: UpdateSpellBookArgs
  ): Promise<SpellBook | null> {
    try {
      return await this.service.updateSpellBook({
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

  @graphql.Mutation(() => SpellBook)
  @nestAccessControl.UseRoles({
    resource: "SpellBook",
    action: "delete",
    possession: "any",
  })
  async deleteSpellBook(
    @graphql.Args() args: DeleteSpellBookArgs
  ): Promise<SpellBook | null> {
    try {
      return await this.service.deleteSpellBook(args);
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