'use strict';

/**
 * dish-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dish-note.dish-note');
