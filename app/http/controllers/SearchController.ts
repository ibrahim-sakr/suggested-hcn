import { JsonController, UseBefore, Post, Body } from "routing-controllers";
import Search from '../../modules/tajawal/services/Search';
import Results from '../../modules/tajawal/services/Results';

@JsonController("/search")
export class SearchController {

    @Post("/run")
    run(@Body() searchBody: any) {

        const search = new Search();

        search.validate(searchBody);

        return search.run();

    }

    @Post("/pull")
    pull(@Body() searchBody: any) {

        const results = new Results({
            type: 'search'
        });

        results.validate(searchBody);

        return results.run();

    }

}
