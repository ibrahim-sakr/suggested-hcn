import { ExpressMiddlewareInterface } from "routing-controllers";

export class ConfigMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: (err?: any) => any): any {
        console.log("do config...");
        next();
    }

}