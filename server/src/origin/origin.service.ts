import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OriginServiceBase } from "./base/origin.service.base";

@Injectable()
export class OriginService extends OriginServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
