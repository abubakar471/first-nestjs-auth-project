import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    /* 
    check if user has permission for performing certain task, eg: manager, author, accountant
    check the logic for role
     */

    
    return true;
  }
}
