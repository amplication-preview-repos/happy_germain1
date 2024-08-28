import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TarotSpreadModuleBase } from "./base/tarotSpread.module.base";
import { TarotSpreadService } from "./tarotSpread.service";
import { TarotSpreadController } from "./tarotSpread.controller";
import { TarotSpreadResolver } from "./tarotSpread.resolver";

@Module({
  imports: [TarotSpreadModuleBase, forwardRef(() => AuthModule)],
  controllers: [TarotSpreadController],
  providers: [TarotSpreadService, TarotSpreadResolver],
  exports: [TarotSpreadService],
})
export class TarotSpreadModule {}
