import { JsonController, UseBefore, Post, Body } from "routing-controllers";
import Availability from '../../modules/tajawal/services/Availability';
import Results from '../../modules/tajawal/services/Results';

@JsonController("/availabilty")
export class AvailabiltyController {

    @Post("/run")
    run(@Body() availabiltyBody: any) {

        const avail = new Availability();

        avail.validate(availabiltyBody);

        return avail.run();

    }

    @Post("/pull")
    pull(@Body() searchBody: any) {

        const results = new Results({
            type: 'availability'
        });

        results.validate(searchBody);

        return results.run();

    }

}
