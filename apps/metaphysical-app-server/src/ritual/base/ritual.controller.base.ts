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
import { RitualService } from "../ritual.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RitualCreateInput } from "./RitualCreateInput";
import { Ritual } from "./Ritual";
import { RitualFindManyArgs } from "./RitualFindManyArgs";
import { RitualWhereUniqueInput } from "./RitualWhereUniqueInput";
import { RitualUpdateInput } from "./RitualUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RitualControllerBase {
  constructor(
    protected readonly service: RitualService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Ritual })
  @nestAccessControl.UseRoles({
    resource: "Ritual",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRitual(@common.Body() data: RitualCreateInput): Promise<Ritual> {
    return await this.service.createRitual({
      data: data,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,
        ritualName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Ritual] })
  @ApiNestedQuery(RitualFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ritual",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rituals(@common.Req() request: Request): Promise<Ritual[]> {
    const args = plainToClass(RitualFindManyArgs, request.query);
    return this.service.rituals({
      ...args,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,
        ritualName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Ritual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ritual",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ritual(
    @common.Param() params: RitualWhereUniqueInput
  ): Promise<Ritual | null> {
    const result = await this.service.ritual({
      where: params,
      select: {
        createdAt: true,
        date: true,
        description: true,
        id: true,
        ritualName: true,
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
  @swagger.ApiOkResponse({ type: Ritual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ritual",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRitual(
    @common.Param() params: RitualWhereUniqueInput,
    @common.Body() data: RitualUpdateInput
  ): Promise<Ritual | null> {
    try {
      return await this.service.updateRitual({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          description: true,
          id: true,
          ritualName: true,
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
  @swagger.ApiOkResponse({ type: Ritual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Ritual",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRitual(
    @common.Param() params: RitualWhereUniqueInput
  ): Promise<Ritual | null> {
    try {
      return await this.service.deleteRitual({
        where: params,
        select: {
          createdAt: true,
          date: true,
          description: true,
          id: true,
          ritualName: true,
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
