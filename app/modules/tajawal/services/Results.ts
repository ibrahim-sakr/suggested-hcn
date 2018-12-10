import PullResponseInterface from '../interfaces/PullResponseInterface';
import ResultOptionInterface from '../interfaces/ResultOptionInterface';

export default class Results implements PullResponseInterface {

    body: any;
    type: string;

    constructor(options: ResultOptionInterface) {
        this.type = options.type;
    }

    validate(obj: any): boolean {
        // validate
        // if passed
        this.body = obj;
        return true;
    }

    run() {

        return {
            pId: '',
            next: {}
        };
    }

}