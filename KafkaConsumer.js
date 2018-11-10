const createProcessExecutor = require('./ProcessExecutor')
class KafkaConsumer {
    constructor() {
        this.pe = createProcessExecutor('kafka-console-consumer.sh')
    }

    addOption(key, value) {
        this.pe.addOption(key, value)
    }

    start(cb) {
        this.pe.execute()
        this.pe.consumeOutput((message) => {
            cb(message)
        }, (errMessage) => {
            console.log(errMessage)
        })
    }
}

module.exports = KafkaConsumer
