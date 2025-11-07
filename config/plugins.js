module.exports = () => ({
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
        "api::about.about",
        "api::about-lazy-content.about-lazy-content",
        "api::about-lazy-content.about-lazy-content",
        "api::contact-section.contact-section",
        "api::dishes.dishes",
        "api::dish-note.dish-note",
        "api::food-categories.food-categories",
        "api::food-levels.food-levels",
        "api::food-sizes.food-sizes",
        "api::food-types.food-types",
        "api::global.global",
        "api::home-lazy-content.home-lazy-content",
        "api::home-page.home-page",
        "api::note-for-special.note-for-special",
        "api::reviews.reviews",
      ],
      authorizedImports: [
        "api::about.about",
        "api::about-lazy-content.about-lazy-content",
        "api::about-lazy-content.about-lazy-content",
        "api::contact-section.contact-section",
        "api::dishes.dishes",
        "api::dish-note.dish-note",
        "api::food-categories.food-categories",
        "api::food-levels.food-levels",
        "api::food-sizes.food-sizes",
        "api::food-types.food-types",
        "api::global.global",
        "api::home-lazy-content.home-lazy-content",
        "api::home-page.home-page",
        "api::note-for-special.note-for-special",
        "api::reviews.reviews",
      ],
    }
  }
});
