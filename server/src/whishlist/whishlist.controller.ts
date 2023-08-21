import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WhishlistService } from "./whishlist.service";
import { WhishlistControllerBase } from "./base/whishlist.controller.base";

@swagger.ApiTags("whishlists")
@common.Controller("whishlists")
export class WhishlistController extends WhishlistControllerBase {
  constructor(
    protected readonly service: WhishlistService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
