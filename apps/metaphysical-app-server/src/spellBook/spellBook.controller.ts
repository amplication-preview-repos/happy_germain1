import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpellBookService } from "./spellBook.service";
import { SpellBookControllerBase } from "./base/spellBook.controller.base";

@swagger.ApiTags("spellBooks")
@common.Controller("spellBooks")
export class SpellBookController extends SpellBookControllerBase {
  constructor(
    protected readonly service: SpellBookService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
