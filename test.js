const { describe, it } = require('mocha');
const assume = require('assume');
const matey = require('./');

describe('argh-matey', function () {
  const commands = ['run', 'help', 'publish', 'register', 'test', 'status'];

  it('is exported as a function', function () {
    assume(matey).is.a('function');
  });

  it('returns null when there is no match', function () {
    const res = matey(commands, 'wut');

    assume(res).is.a('null');
  });

  [
    { word: 'ran', match: 'run' },
    { word: 'RUN', match: 'run' },
    { word: 'rum', match: 'run' },
    { word: 'tst', match: 'test' },
    { word: 'publsh', match: 'publish' },
    { word: 'statusg', match: 'status' },
  ].forEach(function ({ word, match }) {
    it(`matches ${word} with ${match}`, function () {
      const res = matey(commands, word);

      assume(res).equals(match);
    });
  });
});
