const createProcessExecutor = require('./ProcessExecutor')
class KafkaProducer {

    constructor() {

        this.executor = createProcessExecutor('kafka-console-producer.sh')
    }

    addProperty(key, value) {
        this.executor.addOption(key, value)
    }

    start() {
        this.executor.execute()
        this.executor.startWriting()
        this.executor.consumeOutput((data) => {console.log(data)}, (data) => console.log(data))
    }

    write(data) {
        this.executor.writeData(data)
    }

    end() {
        this.executor.end()
    }
}
module.exports = KafkaProducer
