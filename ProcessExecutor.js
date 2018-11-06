const childProcess = require('child_process')
const Utils = require('./Utils')
class ProcessExecutor {
    constructor(command) {
        this.options = []
        this.command = command
    }
    addOption(key, value) {
        this.options.push({key, value})
    }

    execute() {
        this.process = childProcess.spawn(this.command, Utils.createCommandOptions(this.options))
        console.log(`process id is ${this.process.pid}`)
    }

    writeData(msg) {
        this.process.stdin.write(Buffer.from(`${msg} \n`))
    }

    consumeOutput(cb, endcb) {
        this.process.stdout.on('data', (data) => {
            cb(data.toString())
        })
        this.process.stderr.on('data', (data) => {
            endcb(data.toString())
        })
    }

    startWriting() {
        this.process.stdin.resume()
    }

    end() {
        this.process.stdin.end()
    }

    static create(command) {
        const pe = new ProcessExecutor(command)
        return pe
    }
}

module.exports = ProcessExecutor.create
