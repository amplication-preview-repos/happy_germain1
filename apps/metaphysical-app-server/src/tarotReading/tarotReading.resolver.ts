import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TarotReadingResolverBase } from "./base/tarotReading.resolver.base";
import { TarotReading } from "./base/TarotReading";
import { TarotReadingService } from "./tarotReading.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TarotReading)
export class TarotReadingResolver extends TarotReadingResolverBase {
  constructor(
    protected readonly service: TarotReadingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
