import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WhishlistModuleBase } from "./base/whishlist.module.base";
import { WhishlistService } from "./whishlist.service";
import { WhishlistController } from "./whishlist.controller";
import { WhishlistResolver } from "./whishlist.resolver";

@Module({
  imports: [WhishlistModuleBase, forwardRef(() => AuthModule)],
  controllers: [WhishlistController],
  providers: [WhishlistService, WhishlistResolver],
  exports: [WhishlistService],
})
export class WhishlistModule {}
