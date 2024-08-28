import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpellBookServiceBase } from "./base/spellBook.service.base";

@Injectable()
export class SpellBookService extends SpellBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
