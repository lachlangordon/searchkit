/// <reference types="axios" />
import { ESTransport } from "./ESTransport";
export interface ESTransportOptions {
    headers?: Object;
    basicAuth?: string;
    searchUrlPath?: string;
}
export declare class AxiosESTransport extends ESTransport {
    host: string;
    static timeout: number;
    axios: Axios.AxiosInstance;
    options: ESTransportOptions;
    constructor(host: string, options?: ESTransportOptions);
    search(query: Object): Axios.IPromise<any>;
    getData(response: any): any;
}
