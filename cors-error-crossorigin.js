'use strict';
/* jshint ignore:start */
var corsTestWithCrossoriginAtrr = (function() {
    
    /**
     * To create reference error
     *
     * no @return
     */
    function refErrorFunc() {
        var tmp = x; //no x variable declared!
    }
    
    /**
     * To create custom error
     *
     * no @return
     */
    function sampleFunction() {
        new Function('throw new Error("Custom Error Message")')();
    }
    
    /**
     * To create range error
     *
     * no @return
     */
    function rangeErrorFunc() {
        var b = new Array(-1); //range error
    }
    
    /**
     * To create stack error
     *
     * @param  {Boolean} corsError
     * @param  {Boolean} crossOriginAttr
     * no @return
     */
    function stackErrorFunc(corsError, crossOriginAttr) {
        file1.stackErrorFunc(corsError, crossOriginAttr);
    }
    
    /**
     * To create type error
     *
     * no @return
     */
    function typeErrorFunc() {
        document.body.filters[0].apply();
    }
    
    /**
     * To create URI error
     *
     * no @return
     */
    function URIErrorfunc() {
        decodeURIComponent('%');
    }
    
    /**
     * To create eval error
     *
     * no @return
     */
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

