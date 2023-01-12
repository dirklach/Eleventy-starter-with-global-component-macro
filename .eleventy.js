module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/_sass/")
  eleventyConfig.addPassthroughCopy("./src/css")

  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  return {

    dir: {
      input: "src",
      output: "dist",
    },

  }

}