const createProcessExecutor = require('./ProcessExecutor')
const Utils = require('./Utils')
class KafkaTopic {

    static create(options, cb) {
        KafkaTopic.executeTopicCommand(options, {'create':''}, cb)
    }

    static list(options, cb) {
        KafkaTopic.executeTopicCommand(options, {'list':''}, cb)
    }

    static executeTopicCommand(options, commandOptions, cb) {
        const pe = createProcessExecutor('kafka-topics.sh')
        var newOptions = Object.assign({}, options, commandOptions)
        Utils.addOptions(pe, newOptions)
        pe.execute()
        Utils.consume(pe, cb)
    }
}

module.exports = KafkaTopic
