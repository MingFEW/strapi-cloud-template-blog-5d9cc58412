'use strict';

/**
 * food-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-level.food-level');
