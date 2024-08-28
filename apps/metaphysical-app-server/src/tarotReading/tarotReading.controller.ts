import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TarotReadingService } from "./tarotReading.service";
import { TarotReadingControllerBase } from "./base/tarotReading.controller.base";

@swagger.ApiTags("tarotReadings")
@common.Controller("tarotReadings")
export class TarotReadingController extends TarotReadingControllerBase {
  constructor(
    protected readonly service: TarotReadingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
