module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    return {
        PassthroughFileCopy : true
    }
}