// eleventy config
const shortcodes = require('./src/js/shortcodes');

module.exports = function(eleventyConfig) {
    // include js
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");

    // custom shortcodes
    eleventyConfig.addPairedShortcode('window', shortcodes.windowShortcode);

    // define input and output dirs
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};