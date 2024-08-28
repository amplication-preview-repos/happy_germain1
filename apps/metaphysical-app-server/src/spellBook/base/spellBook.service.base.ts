/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SpellBook as PrismaSpellBook } from "@prisma/client";

export class SpellBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SpellBookCountArgs, "select">
  ): Promise<number> {
    return this.prisma.spellBook.count(args);
  }

  async spellBooks(
    args: Prisma.SpellBookFindManyArgs
  ): Promise<PrismaSpellBook[]> {
    return this.prisma.spellBook.findMany(args);
  }
  async spellBook(
    args: Prisma.SpellBookFindUniqueArgs
  ): Promise<PrismaSpellBook | null> {
    return this.prisma.spellBook.findUnique(args);
  }
  async createSpellBook(
    args: Prisma.SpellBookCreateArgs
  ): Promise<PrismaSpellBook> {
    return this.prisma.spellBook.create(args);
  }
  async updateSpellBook(
    args: Prisma.SpellBookUpdateArgs
  ): Promise<PrismaSpellBook> {
    return this.prisma.spellBook.update(args);
  }
  async deleteSpellBook(
    args: Prisma.SpellBookDeleteArgs
  ): Promise<PrismaSpellBook> {
    return this.prisma.spellBook.delete(args);
  }
}
