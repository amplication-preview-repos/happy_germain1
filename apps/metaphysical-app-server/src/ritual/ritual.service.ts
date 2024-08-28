import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RitualServiceBase } from "./base/ritual.service.base";

@Injectable()
export class RitualService extends RitualServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
