import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TarotReadingModuleBase } from "./base/tarotReading.module.base";
import { TarotReadingService } from "./tarotReading.service";
import { TarotReadingController } from "./tarotReading.controller";
import { TarotReadingResolver } from "./tarotReading.resolver";

@Module({
  imports: [TarotReadingModuleBase, forwardRef(() => AuthModule)],
  controllers: [TarotReadingController],
  providers: [TarotReadingService, TarotReadingResolver],
  exports: [TarotReadingService],
})
export class TarotReadingModule {}
