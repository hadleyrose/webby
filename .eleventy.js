// eleventy config
const shortcodes = require('./src/js/shortcodes');

module.exports = function(eleventyConfig) {
    // include js
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");

    // custom shortcodes
    eleventyConfig.addPairedShortcode('centerWindow', shortcodes.centerWindowShortcode);

    // define input and output dirs
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};