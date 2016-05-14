const request = require('request');

const apiKey = 'AIzaSyBnJUoAHb19S6NNU4B-7-HpgKcmT-3Vo34';
const searchEngineId = '004685617409176921201:dxzqrto4kfu';
const baseUrl = 'https://www.googleapis.com/customsearch/v1';

const google = module.exports;

google.search = (query, callback) => {
  request({
    url: baseUrl,
    json: true,
    qs: {
      key: apiKey,
      cx: searchEngineId,
      q: `email*${query}`,
    },
  }, (err, res, body) => {
    callback(err, err ? [] : body.items);
  });
};
