'use strict';
/* jshint ignore:start */
var corsTestWithoutCrossoriginAtrr = (function() {

    function sampleCorsFunction(a) {
      return a.b();
    }

    return {
        createCORSError: sampleCorsFunction
    };
}());
