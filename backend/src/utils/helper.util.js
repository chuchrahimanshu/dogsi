export const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((error) => {
            console.log(`ERROR: Async handler utility, ${error}`);
            next(error);
        })
    }
}

export class APIError extends Error{
    constructor(statusCode, message = "Internal server error!", data){
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.error = true;
        this.data = data;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class APIResponse {
    constructor(statusCode, message, data){
        this.statusCode = statusCode;
        this.message = message;
        this.success = true;
        this.error = false;
        this.data = data;
    }
}