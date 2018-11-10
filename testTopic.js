const KafkaTopic = require('./KafkaTopic')
KafkaTopic.create({'partitions':1, 'replication-factor':1, 'zookeeper':'localhost:2181'}, (message) => {
    console.log(message)
})


KafkaTopic.list({'zookeeper':'localhost:2181'}, (message) => {
    console.log(message)
})
