const KafkaProducer = require('./KafkaProducer')
const kafkaProducer = new KafkaProducer()

kafkaProducer.addProperty('broker-list', 'localhost:9092')
kafkaProducer.addProperty('topic', 'nodetest')
kafkaProducer.start()
kafkaProducer.write('hello world 1')
kafkaProducer.write('hello world 2')
kafkaProducer.write('hellow world 3')
kafkaProducer.end()