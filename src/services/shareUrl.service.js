// const httpStatus = require('http-status');
const { SharedUrl } = require('../models');
// const ApiError = require('../utils/ApiError');

/**
 * Create a shared url
 * @param {Object} body
 * @returns {Promise<SharedUrl>}
 */
const createSharedUrl = async (body) => {
  return SharedUrl.create(body);
};

/**
 * Query for shared url
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryShareUrls = async (filter, options) => {
  const sharedUrls = await SharedUrl.paginate(filter, options);
  return sharedUrls;
};

module.exports = {
  createSharedUrl,
  queryShareUrls,
};
