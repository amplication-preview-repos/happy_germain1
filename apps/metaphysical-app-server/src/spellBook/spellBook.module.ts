import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpellBookModuleBase } from "./base/spellBook.module.base";
import { SpellBookService } from "./spellBook.service";
import { SpellBookController } from "./spellBook.controller";
import { SpellBookResolver } from "./spellBook.resolver";

@Module({
  imports: [SpellBookModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpellBookController],
  providers: [SpellBookService, SpellBookResolver],
  exports: [SpellBookService],
})
export class SpellBookModule {}
