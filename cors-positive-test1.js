'use strict';
/* jshint ignore:start */
var corsTestWithCrossoriginAtrr = (function() {

    function sampleCorsFunction(a) {
      return a.b();
    }

    return {
        createCORSError: sampleCorsFunction
    };
}());
