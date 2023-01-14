const data = require('./data')

class Controller {
    async getTodos() {
        return new Promise((resolve, _) => resolve(data))
    }
}

module.exports = Controller