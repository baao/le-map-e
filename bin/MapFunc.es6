'use strict';
module.exports = (() => {
    Map.prototype.setOrPush = function (key, value) {
        if (this.has(key)) {
            return this.set(this.get(key), this.get(key).push(value));
        }
        return this.set(key, value)
    };

    Map.prototype.setOrCombine = function (key, value) {
        if (this.has(key)) {
            return this.set(key, this.get(key).concat(value));
        }
        return this.set(key, value)
    }
})();