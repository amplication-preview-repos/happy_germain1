/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TarotReading as PrismaTarotReading } from "@prisma/client";

export class TarotReadingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TarotReadingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tarotReading.count(args);
  }

  async tarotReadings(
    args: Prisma.TarotReadingFindManyArgs
  ): Promise<PrismaTarotReading[]> {
    return this.prisma.tarotReading.findMany(args);
  }
  async tarotReading(
    args: Prisma.TarotReadingFindUniqueArgs
  ): Promise<PrismaTarotReading | null> {
    return this.prisma.tarotReading.findUnique(args);
  }
  async createTarotReading(
    args: Prisma.TarotReadingCreateArgs
  ): Promise<PrismaTarotReading> {
    return this.prisma.tarotReading.create(args);
  }
  async updateTarotReading(
    args: Prisma.TarotReadingUpdateArgs
  ): Promise<PrismaTarotReading> {
    return this.prisma.tarotReading.update(args);
  }
  async deleteTarotReading(
    args: Prisma.TarotReadingDeleteArgs
  ): Promise<PrismaTarotReading> {
    return this.prisma.tarotReading.delete(args);
  }
}