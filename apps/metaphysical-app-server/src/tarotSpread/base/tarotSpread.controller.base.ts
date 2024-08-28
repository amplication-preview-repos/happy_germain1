/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TarotSpreadService } from "../tarotSpread.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TarotSpreadCreateInput } from "./TarotSpreadCreateInput";
import { TarotSpread } from "./TarotSpread";
import { TarotSpreadFindManyArgs } from "./TarotSpreadFindManyArgs";
import { TarotSpreadWhereUniqueInput } from "./TarotSpreadWhereUniqueInput";
import { TarotSpreadUpdateInput } from "./TarotSpreadUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TarotSpreadControllerBase {
  constructor(
    protected readonly service: TarotSpreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TarotSpread })
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTarotSpread(
    @common.Body() data: TarotSpreadCreateInput
  ): Promise<TarotSpread> {
    return await this.service.createTarotSpread({
      data: data,
      select: {
        createdAt: true,
        id: true,
        positions: true,
        spreadName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TarotSpread] })
  @ApiNestedQuery(TarotSpreadFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tarotSpreads(@common.Req() request: Request): Promise<TarotSpread[]> {
    const args = plainToClass(TarotSpreadFindManyArgs, request.query);
    return this.service.tarotSpreads({
      ...args,
      select: {
        createdAt: true,
        id: true,
        positions: true,
        spreadName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TarotSpread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tarotSpread(
    @common.Param() params: TarotSpreadWhereUniqueInput
  ): Promise<TarotSpread | null> {
    const result = await this.service.tarotSpread({
      where: params,
      select: {
        createdAt: true,
        id: true,
        positions: true,
        spreadName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TarotSpread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTarotSpread(
    @common.Param() params: TarotSpreadWhereUniqueInput,
    @common.Body() data: TarotSpreadUpdateInput
  ): Promise<TarotSpread | null> {
    try {
      return await this.service.updateTarotSpread({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          positions: true,
          spreadName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TarotSpread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TarotSpread",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTarotSpread(
    @common.Param() params: TarotSpreadWhereUniqueInput
  ): Promise<TarotSpread | null> {
    try {
      return await this.service.deleteTarotSpread({
        where: params,
        select: {
          createdAt: true,
          id: true,
          positions: true,
          spreadName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
