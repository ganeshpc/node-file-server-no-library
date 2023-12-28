function Router() {
    this.getListeners = [];
    this.postListeners = [];
    this.deleteListeners = [];
}

Router.prototype.get = function (url, handler) {
    this.getListeners.push({
        url,
        handler,
    });
};

Router.prototype.post = function (url, handler) {
    this.postListeners.push({
        url,
        handler,
    });
};

Router.prototype.delete = function (url, handler) {
    this.deleteListeners.push({
        url,
        handler,
    });
};

Router.prototype.handle = function (req, res) {
    const url = req.url;
    const method = req.method;
    let listener;
    
    switch (method) {
        case 'GET':
            listener = this.getListeners.find(listener => listener.url === url);
            if (listener) {
                listener.handler(req, res);
            } else {
                this.errorListener(req, res);
            }
            break;
    
        case 'POST':
            listener = this.postListeners.find(listener => listener.url === url);
            if (listener) {
                listener.handler(req, res);
            } else {
                this.errorListener(req, res);
            }
            break;

        case 'DELETE':
            listener = this.deleteListeners.find(listener => listener.url === url);
            if (listener) {
                listener.handler(req, res);
            } else {
                this.errorListener(req, res);
            }
            break;

        default:
            this.errorListener(req, res);
            break;
    }
}

Router.prototype.errorListener = function (req, res) {
    res.writeHead(200);
    res.end(`<h1> Not found </h1>`);
}

module.exports = Router;
