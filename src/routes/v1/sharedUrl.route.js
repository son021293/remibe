const express = require('express');
const auth = require('../../middlewares/auth');
const { sharedUrlController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .get(sharedUrlController.getSharedUrls)
  .post(auth(), sharedUrlController.createSharedUrl);

module.exports = router;
