/**
 * Load Config
 * it doesn't have @types so we require it
 */
require('dotenv').config()

/**
 * Import main Modules
 */
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { connect } from 'mongoose';
import { ConfigMiddleware } from '../app/http/middlewares/ConfigMiddleware';

(async () => {
    try {
        /**
         * init DB connection
         */
        const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

        await connect(uri, {
            dbName: process.env.DB_NAME,
            useFindAndModify: true,
            useNewUrlParser: true
        });

        console.log('Database Connected');
    } catch (e) {
        throw Error('Failed to connect with DB');
    }

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
            `${__dirname}/../app/http/controllers/*`
        ]
    });

    // run express application on port process.env.APP_PORT
    app.listen(process.env.APP_PORT, (err: any) => {
        if (err) {
            return console.log(err)
        }

        return console.log(`server is running on http://127.0.0.1:${process.env.APP_PORT}`)
    });

    // Error Handling
    // Logs
})();
