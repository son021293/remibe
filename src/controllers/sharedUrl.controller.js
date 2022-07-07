const httpStatus = require('http-status');
const pick = require('../utils/pick');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sharedUrlService } = require('../services');

const createSharedUrl = catchAsync(async (req, res) => {
  const user = await sharedUrlService.createSharedUrl(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getSharedUrls = catchAsync(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await sharedUrlService.queryShareUrls(filter, options);



  res.send(result);
});

module.exports = {
  createSharedUrl,
  getSharedUrls,
};
