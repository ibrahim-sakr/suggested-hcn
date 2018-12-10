import { API as htpAPI } from "./htp";
import SupplierInterface from '../interfaces/SupplierInterface';

const suppliersMapping: { [index: string]: SupplierInterface; } = {
    htp: new htpAPI()
};

export default suppliersMapping;
