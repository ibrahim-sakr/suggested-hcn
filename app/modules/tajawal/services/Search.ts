import RunResponseInterface from '../interfaces/RunResponseInterface';
import suppliers from '../@suppliers/suppliers';
import SupplierInterface from '../interfaces/SupplierInterface';

export default class Search implements RunResponseInterface {

    body = {};

    validate(obj: any): boolean {
        // validate
        // if passed
        this.body = obj;
        return true;
    }

    run() {
        // load all suppliers and run search
        // prepare the result and return it
        for (const name in suppliers) {
            const supplier: SupplierInterface = suppliers[name];
            supplier.search();
        }

        return {
            pId: '',
            next: {}
        };
    }

}