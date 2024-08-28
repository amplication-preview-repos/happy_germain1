import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TarotSpreadServiceBase } from "./base/tarotSpread.service.base";

@Injectable()
export class TarotSpreadService extends TarotSpreadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
