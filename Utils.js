class Utils {
    static createCommandOptions(optionsMap) {
        var optionsStr = optionsMap.map(optionMap =>  `--${optionMap.key} ${optionMap.value}`).join(" ")
        console.log(optionsStr)
        return optionsStr.split(" ")
    }
}
module.exports = Utils
