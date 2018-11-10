const KafkaConsumer = require('./KafkaConsumer')
const consumer = new KafkaConsumer()
consumer.addOption('bootstrap-server','localhost:9092')
consumer.addOption('topic', 'nodetest')
consumer.addOption('zookeeper', 'localhost:2181')
consumer.addOption('from-beginning','')
consumer.start((message) => {
    console.log(message)
})
