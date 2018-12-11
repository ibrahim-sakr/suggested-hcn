
import { config } from 'dotenv';
import Loader from './loader';
import MongoComponent from '../app/http/components/mongo.component';
import RedisComponent from '../app/http/components/redis.component';
import ExpressComponent from '../app/http/components/express.component';
import Settings from './loader/Settings';

/**
 * Load Config fromo dotenv
 */
config();

// Error Handling
// Logs

/**
 * create new Loader to manage and load all various components of the application
 */
const loader = new Loader({});
/**
 * load the components in sequence
 */
const app = loader.load([
    // create new connection with MongoDB
    new MongoComponent(),

    // connect with redis
    new RedisComponent(),

    // create Express app with it's routes
    new ExpressComponent()
]);

app.then((settings: Settings) => console.log("Application is up and running."));
app.catch(error => console.log("Application is crashed: " + error));
