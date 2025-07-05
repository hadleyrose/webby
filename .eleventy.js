// eleventy config
import { windowShortcode } from './src/js/shortcodes/index.js';

export default (eleventyConfig) => {
    // include js, css
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addWatchTarget("./src/styles");

    // custom shortcodes
    eleventyConfig.addPairedShortcode('window', windowShortcode);

    // define input and output dirs
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};