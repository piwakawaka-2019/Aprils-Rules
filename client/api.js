import request from "superagent";

const randomQuote = 'https://api.tronalddump.io/random/quote';
const nuckChorris = 'https://geek-jokes.sameerkumar.website/api'
const dadJoke = 'https://icanhazdadjoke.com/search'

export function getQuotes(callback) {
  request
  .get(randomQuote)
  .end((err, res) => {
    callback(err, res.body);
  });
}

export function getNuck(callback) {
  request
  .get(nuckChorris)
  .end((err, res) => {
    callback(err, res.body);
  });
}

export function getJoke(callback) {
  request
  .get(dadJoke)
  .end((err, res) => {
    callback(err, res.body);
  });
}

export function getPictures(callback) {
  request
  .get(randomQuote)
  .end((err, res) => {
    callback(err, res.body);
  });
} 