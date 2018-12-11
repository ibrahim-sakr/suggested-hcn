import Settings from '../../../bootstrap/loader/Settings';
import ComponentInterface from '../../../bootstrap/loader/ComponentInterface';
import { RedisClient, ClientOpts } from 'redis';

export default class RedisComponent implements ComponentInterface {

    constructor() { }

    /**
     * init Redis Connection
     * @param settings 
     */
    async load(settings: Settings) {
        try {
            const RedisOptions: ClientOpts = {
                host: '127.0.0.1',
                port: 6379
            };

            const redis = new RedisClient(RedisOptions);

            console.log('Redis Connected');
        } catch (e) {
            throw Error('Failed to connect with Redis');
        }
    }

}
