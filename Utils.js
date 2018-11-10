class Utils {
    static createCommandOptions(optionsMap) {
        var optionsStr = optionsMap.map(optionMap =>  `--${optionMap.key} ${optionMap.value}`).join(" ")
        console.log(optionsStr)
        return optionsStr.split(" ")
    }

    static addOptions(pe, options) {
        Object.keys(options).forEach((key) => {
            pe.addOption(key, options[key])
        })
    }

    static consume(pe, cb) {
        pe.consumeOutput((message) => {
            cb(message)
        }, (errMessage) => {
            console.log(errMessage)
        })
    }
}
module.exports = Utils
