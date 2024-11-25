class Controller {
    getAction(method, successCode = 200) {
        function controller(req, res, next) {
            const params = this.parseRequest(req);
            return method(params)
                .then(this.prepareOutput())
                .then(this.handleResponse(req, res, next))
                .catch((e) => {
                    console.error(e);
                    const status = e.status || 500;
                    res.status(status).json({
                        error: {
                            details: e.message,
                            status: status,
                            info: e.info
                        },
                    });
                })
        }
        return controller.bind(this);
    }

    parseRequest(req) {
        const { body, params } = req;
        return {
            body,
            params
        }
    }

    prepareOutput(statusCode) {
        return data => ({
            statusCode,
            data
        })
    }

    handleResponse(req, res, next) {
        return (data) => {
            res.json(data);
            next();
        }
    }
}

module.exports = {
    Controller
};