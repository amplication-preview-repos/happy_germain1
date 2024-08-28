import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RitualService } from "./ritual.service";
import { RitualControllerBase } from "./base/ritual.controller.base";

@swagger.ApiTags("rituals")
@common.Controller("rituals")
export class RitualController extends RitualControllerBase {
  constructor(
    protected readonly service: RitualService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
