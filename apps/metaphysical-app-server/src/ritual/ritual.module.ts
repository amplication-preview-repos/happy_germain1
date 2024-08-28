import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RitualModuleBase } from "./base/ritual.module.base";
import { RitualService } from "./ritual.service";
import { RitualController } from "./ritual.controller";
import { RitualResolver } from "./ritual.resolver";

@Module({
  imports: [RitualModuleBase, forwardRef(() => AuthModule)],
  controllers: [RitualController],
  providers: [RitualService, RitualResolver],
  exports: [RitualService],
})
export class RitualModule {}
