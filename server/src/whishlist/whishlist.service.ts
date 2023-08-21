import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhishlistServiceBase } from "./base/whishlist.service.base";

@Injectable()
export class WhishlistService extends WhishlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
