module.exports = function(eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Liquid shortcode to render a small item card
  eleventyConfig.addLiquidShortcode("itemCard", function(title, img, shortDesc, why, url) {
    return `<article class="card">
      <img class="item-image" src="${img}" alt="${title}" />
      <h2>${title}</h2>
      <p class="short-desc">${shortDesc}</p>
      <p class="why">${why}</p>
      <a class="more" href="${url}">Read more →</a>
    </article>`;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};

// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};