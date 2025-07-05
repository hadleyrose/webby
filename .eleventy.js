// eleventy config
const shortcodes = require('./src/js/shortcodes');

module.exports = function(eleventyConfig) {
    // include js, css
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addWatchTarget("./src/styles");

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