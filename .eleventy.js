// eleventy config
import { windowShortcode } from './src/js/shortcodes/index.js';

export default (eleventyConfig) => {
    // include js, css, assets
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addWatchTarget("./src/styles");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/public");
    eleventyConfig.addWatchTarget("./src/public");

    // custom shortcodes
    eleventyConfig.addPairedShortcode('window', windowShortcode);

    // define input and output dirs
    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};