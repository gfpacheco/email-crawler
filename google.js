const async = require('async');
const request = require('request');

const apiKey = 'AIzaSyBnJUoAHb19S6NNU4B-7-HpgKcmT-3Vo34';
const searchEngineId = '004685617409176921201:dxzqrto4kfu';
const baseUrl = 'https://www.googleapis.com/customsearch/v1';

const google = module.exports;

google.search = (query, numberOfPages, callback) => {
  async.times(numberOfPages, (i, callback) => {
    request({
      url: baseUrl,
      json: true,
      qs: {
        key: apiKey,
        cx: searchEngineId,
        q: `email*${query}`,
        start: i * 10 + 1,
      },
    }, (err, res, body) => {
      callback(err, err ? [] : body.items);
    });
  }, (err, resultsList) => {
    const results = (resultsList || []).reduce((results, result) => results.concat(result), []);
    callback(err, results);
  });
};
