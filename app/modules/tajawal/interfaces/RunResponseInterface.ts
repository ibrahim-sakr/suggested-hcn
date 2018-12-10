
export default interface RunResponseInterface {

    body: any;

    validate(obj: any): boolean;

    run(): {
        pId: string;
        next: any;
    }

}