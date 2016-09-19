'use strict';
/* jshint ignore:start */
var corsTestWithCrossoriginAtrr = (function() {
    function refErrorFunc() {
        var tmp = x; //no x variable declared!
    }

    function sampleFunction() {
        new Function('throw new Error("Custom Error Message")')();
    }

    function rangeErrorFunc() {
        var b = new Array(-1); //range error
    }

    function stackErrorFunc(corsError, crossOriginAttr) {
        file1.stackErrorFunc(corsError, crossOriginAttr);
    }

    function typeErrorFunc() {
        document.body.filters[0].apply();
    }

    function URIErrorfunc() {
        decodeURIComponent('%');
    }

    function evalErrorFunc() {
        eval('eval("FAIL ")');
    }

    return {
        evalErrorFunc: evalErrorFunc,
        URIErrorfunc: URIErrorfunc,
        typeErrorFunc: typeErrorFunc,
        rangeErrorFunc: rangeErrorFunc,
        sampleFunction: sampleFunction,
        stackErrorFunc: stackErrorFunc,
        refErrorFunc: refErrorFunc
    };
}());

