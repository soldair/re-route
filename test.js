/*global describe:true, it:true, before:true, after:true, afterEach: true */
'use strict';
var test = require('tape')
var re = require('./')

test('trailing / is optional', function(t){
  var matches = "/hi/".match(re('/hi'));
  t.ok(matches,'should have matches with trailing slash and none in the input');

  matches = "/hi".match(re('/hi'));
  t.ok(matches,'should have matches with no trailing slash and none in the input');


  matches = "/hi".match(re('/hi/'));
  t.ok(matches,'should have matches without trailing slash and one in the input');

  matches = "/hi/".match(re('/hi/'));
  t.ok(matches,'should have matches with trailing slash and one in the input');

  t.end();
});
