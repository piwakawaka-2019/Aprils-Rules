import request from "superagent";

const randomQuote = 'https://api.tronalddump.io/random/quote';

export function getPictures(callback) {
  request
  .get(randomQuote)
  .end((err, res) => {
    callback(err, res.body);
  });
}