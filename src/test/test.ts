class MyClass {

}

const hd: HttpDsl<MyClass | Error> = {
    execute: function (reqContext: RequestContext): ResponseContext<MyClass | Error> {
        throw new Error("Function not implemented.");
    }
}

