// ## generates a regex from a url string. for \/\/\/\/\ sanity
//
//```js
// var re = require('./')
// var matches = '/a/123/---'.match(compile('/a/:b/:c'))
// console.log(matches)
//```
// would log this.
//
// ```js
// [ '/a/123/---', '123', '---', index: 0, input: '/a/123/---' ]
// ```
module.exports = compile;

function compile(str)
{
    var chunks = str.split('/');
    var re = '^';

    chunks.forEach(function(c, i)
    {
        if (i === 0 && c === '') return;
        if (i === chunks.length - 1 && c === '') return;
        re += '\/';
        if (c.charAt(0) === ':') re += '([^\/]+)';
        else re += c;
    });

    // suppport optional trailing / on all routes
    re += '\/?';
    re += '$';

    return new RegExp(re);
}
