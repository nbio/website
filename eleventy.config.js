module.exports = function (eleventyConfig) {
  // Copy specific dirs to _site
  eleventyConfig.addPassthroughCopy("./source/css/");
  eleventyConfig.addPassthroughCopy("./source/assets/");

  // Local dev: watch CSS dir for changes
  eleventyConfig.addWatchTarget("./source/css/");

  // Shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Config
  return {
    dir: {
      input: "source", // Source files
      includes: "_includes", // Template files, etc.
      output: "_site", // Generated site, gitignored
    },
  };
};
