// Reference: https://docs.netlify.com/functions/build-with-javascript/#synchronous-function-format
exports.handler = async function (event, context) {

    // console.log(event)

    if (event.httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({value: "Now you see me ;)"}),
        };
    }
    else {
        return {
            statue: 405,
            body: "Method not supported"
        }
    }
    
};
