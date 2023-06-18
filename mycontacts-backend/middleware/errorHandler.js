import { constant } from "../constants";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({Title: "validation Failed", message: err.message, stackTrace: err.stack}); 
            break;
        case constant.NOT_FOUND:
            res.json({
                Title: "not found",
                message: err.message,
                stackTrace: err.stack,
            });  
        case constant.FORBIDDEN:
            res.json({
                Title: "forbidden",
                message: err.message,
                stackTrace: err.stack,
            });  
        case constant.UNAUTHORIZED:
            res.json({
                Title: "unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });  
        case constant.SERVER_ERROR:
            res.json({
                Title: "Server error",
                message: err.message,
                stackTrace: err.stack,
            });  
                        
        default:
            console.log("no error");
            break;
    }
     
};

module.exports = errorHandler;