import Settings from '../../../bootstrap/loader/Settings';
import ComponentInterface from '../../../bootstrap/loader/ComponentInterface';
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { ConfigMiddleware } from '../middlewares/ConfigMiddleware';

export default class ExpressComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Express Routes
     * @param settings 
     */
    load(settings: Settings) {
        return new Promise((resolve, reject) => {
            /**
            * create app
            */
            // creates express app, registers all controller routes and returns you express app instance
            const app = createExpressServer({
                routePrefix: "/api",
                middlewares: [
                    ConfigMiddleware
                ],
                controllers: [
                    `${__dirname}/../controllers/*`
                ]
            });

            // run express application on port process.env.APP_PORT
            app.listen(process.env.APP_PORT, (err: any) => {
                if (err) {
                    console.log(err);
                    return reject();
                }

                console.log(`server is running on http://127.0.0.1:${process.env.APP_PORT}`);
                return resolve();
            });
        });
    }

}
