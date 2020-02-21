const Parser = require('rss-parser');

const parser = new Parser();

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export default class weatherService {
  static async getAllNews() {
    return parser.parseURL(`${CORS_PROXY}http://feeds.bbci.co.uk/news/rss.xml`);
  }
}
