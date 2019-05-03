export interface RequestObj{
    url: string;
    httpHeaders: HttpHeader[];
    body: any;
}

export interface HttpHeader{
    key: string;
    value: string | string[];
}
