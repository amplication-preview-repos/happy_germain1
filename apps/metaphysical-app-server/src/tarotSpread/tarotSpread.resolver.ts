import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TarotSpreadResolverBase } from "./base/tarotSpread.resolver.base";
import { TarotSpread } from "./base/TarotSpread";
import { TarotSpreadService } from "./tarotSpread.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TarotSpread)
export class TarotSpreadResolver extends TarotSpreadResolverBase {
  constructor(
    protected readonly service: TarotSpreadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
