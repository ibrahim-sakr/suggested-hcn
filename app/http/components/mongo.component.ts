import Settings from '../../../bootstrap/loader/Settings';
import ComponentInterface from '../../../bootstrap/loader/ComponentInterface';
import { connect } from 'mongoose';

export default class MongoComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Mongo Database
     * @param settings 
     */
    async load(settings: Settings) {
        try {
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
    }

}
