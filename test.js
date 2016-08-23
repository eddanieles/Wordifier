var test = require('tape');
var wordifier = require('./wordifier.js');

test('convert one digit to a word', function (t) {
  t.equal(wordifier(1), "one");
  t.equal(wordifier(2), "two");
  t.equal(wordifier(3), "three");
  t.end();
});

test('convert two digit to words', function (t) {
  t.equal(wordifier(10), "ten");
  t.equal(wordifier(80), "eighty");
  t.equal(wordifier(22), "twenty two");
  t.equal(wordifier(99), "ninety nine");
  t.end();
});

test('convert three digit to words', function (t) {
  t.equal(wordifier(200), "two hundred");
  t.equal(wordifier(101), "one hundred one");
  t.equal(wordifier(469), "four hundred sixty nine");
  t.equal(wordifier(999), "nine hundred ninety nine");
  t.end();
});

test('convert four digit to words', function (t) {
  t.equal(wordifier(6000), "six thousand");
  t.equal(wordifier(1001), "one thousand one");
  t.equal(wordifier(7893), "seven thousand eight hundred ninety three");
  t.end();
});

test('convert five digit to words', function (t) {
  t.equal(wordifier(40000), "forty thousand");
  t.equal(wordifier(10001), "ten thousand one");
  t.equal(wordifier(83959), "eighty three thousand nine hundred fifty nine");
  t.end();
});

test('convert six digit to words', function (t) {
  t.equal(wordifier(201106), "two hundred one thousand one hundred six");
  t.equal(wordifier(900000), "nine hundred thousand");
  t.equal(wordifier(999999), "nine hundred ninety nine thousand nine hundred ninety nine");
  t.end();
});
