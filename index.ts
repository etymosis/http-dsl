interface HttpDsl<T> {
    execute(reqContext: RequestContext): ResponseContext<T>
}

interface RequestContext {
    [key: string]: any;
}

interface ResponseContext<T> {
    rawResponse: {
        status: string;
        headers: {
            [key: string]: string
        }
        body: unknown;
    }
    parsedContext: T; 
}

class HttpDslError extends Error {

}

