/**
 * 2018-07-01
 * @LinWei
 *
 * longest:
 * Find the length of longest substrings without repeating
 * characters.
 *
 * Syntax:
 * longest(string)
 *
 * Arguments:
 * string(string): The string to query.
 *
 * Return:
 * The array includes some length of longest substrings
 * without repeating characters.
 *
 * For example:
 * 
 * longest('abcabcbb')
 * // => ['abc', 'bca', 'cab', 'abc'] 
 *
 * longest('bbbbb')
 * // => ['b', 'b', 'b', 'b', 'b']
 *
 * longest('pwwkew')
 * // => ['wke', 'kew']
 *
 */

if (!window.longest) {
    var longest = (function () {
        "use strict";

        var typeOf = function (x) {
            return typeof x;
        };

        // check if it is string.
        var isString = function (value) {
            return typeOf(value) === 'string';
        };

        var length = function (x) {
            return x.length;
        };

        // check if it has repeating characters.
        var isRepeat = function (string) {
            for (var i = 0, j; i < length(string) - 1; i += 1) {
                for (j = i + 1; j < length(string); j += 1) {
                    if (string[i] === string[j]) {
                        return true;
                    }
                }
            }
            return false;
        };

        // longest length.
        var longest = function (array) {
            var max = length(array[0]);
            for (var i = 1; i < length(array); i += 1) {
                if (length(array[i]) > max) {
                    max = length(array[i]);
                }
            }
            return max;
        };

        var substr = function (string, start, end) {
            return string.substring(start, end);
        };

        // find substrings without repeating characters.
        var find = function (string, filter) {
            for (var i = 0, j; i < length(string); i += 1) {
                for (j = i + 1; j <= length(string); j += 1) {
                    if (!isRepeat(substr(string, i, j))) {
                        filter.push(substr(string, i, j));
                    }
                }
            }
        };

        var push = function (filter, result) {
            for (var i = 0; i < length(filter); i += 1) {
                if (length(filter[i]) === longest(filter)) {
                    result.push(filter[i]);
                }
            }
        };

        var error = function (type, message) {
            throw {
                type: type,
                message: message
            };
        };

        return function (string) {
            if (isString(string)) {
                var filter = [];
                var result = [];
                find(string, filter);
                push(filter, result);
                return result;
            }
            error('ArgsError', 'Not string.');
        };
    })();
}
