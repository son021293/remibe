const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const sharedUrlSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sharedUrlSchema.plugin(toJSON);
sharedUrlSchema.plugin(paginate);

/**
 * @typedef SharedUrl
 */
const SharedUrl = mongoose.model('ShareUrl', sharedUrlSchema);

module.exports = SharedUrl;
