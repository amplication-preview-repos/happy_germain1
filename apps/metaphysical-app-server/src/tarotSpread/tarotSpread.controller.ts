import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TarotSpreadService } from "./tarotSpread.service";
import { TarotSpreadControllerBase } from "./base/tarotSpread.controller.base";

@swagger.ApiTags("tarotSpreads")
@common.Controller("tarotSpreads")
export class TarotSpreadController extends TarotSpreadControllerBase {
  constructor(
    protected readonly service: TarotSpreadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
