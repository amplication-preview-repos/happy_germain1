import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TarotReadingServiceBase } from "./base/tarotReading.service.base";

@Injectable()
export class TarotReadingService extends TarotReadingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
