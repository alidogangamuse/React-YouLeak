var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/videos';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Comment expected key, received undefined');
  }
  if (!options.videoId) {
    throw new Error('Youtube Comment expected id, received undefined');
  }

  var params = {
    part: 'snippet,contentDetails,statistics',
    key: options.key,
    id: options.videoId,
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
