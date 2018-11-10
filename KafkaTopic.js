const createProcessExecutor = require('./ProcessExecutor')
const Utils = require('./Utils')
class KafkaTopic {

    static create(options, cb) {
        const pe = createProcessExecutor('kafka-topics.sh')
        var newOptions = Object.assign({}, options, {'create', ''})
        Utils.addOptions(newOptions, cb)
        Utils.consume(pe, cb)
    }

    static list(options, cb) {
        const pe = createProcessExecutor('kafka-topics.sh')
        var newOptions = Object.assign({}, options, {'list', ''})
        Utils.addOptions(newOptions, cb)
        Utils.consume(pe, cb)
    }
}

module.exports = KafkaTopic
