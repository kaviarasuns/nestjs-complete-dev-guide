import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable
 } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
        intercept(context: ExecutionContext, handler : CallHandler) : Observable<any> {
            
        }
}