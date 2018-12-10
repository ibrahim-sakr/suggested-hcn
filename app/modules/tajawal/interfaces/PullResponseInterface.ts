export default interface PullResponseInterface {

    body: any;

    validate(obj: any): boolean;

    run(): {
        pId: string;
        next: any;
    }

}