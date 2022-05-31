const path = require('path')
const docgen = require("react-docgen-typescript");

module.exports = function() {
    const filePath = this.request.split('!').pop() || '';
    const tsConfigPath = path.resolve(__dirname, "../../tsconfig.json")

    const options = {
        shouldExtractLiteralValuesFromEnum: true,
        // shouldExtractValuesFromUnion: true,
        shouldRemoveUndefinedFromOptional: true,
    }

    // Create a parser with using your typescript config
    const tsConfigParser = docgen.withCustomConfig(tsConfigPath, options);
    const res = tsConfigParser.parse(filePath)

    return `
if (module.hot) {
	module.hot.accept([])
}
module.exports = ${JSON.stringify(res[0].props)}
	`;
}
