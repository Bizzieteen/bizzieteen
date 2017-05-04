/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=465c5e1c3ceccfeb9eb6f8da7a5b4110)
 * Config saved to config.json and https://gist.github.com/465c5e1c3ceccfeb9eb6f8da7a5b4110
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(o).remove(),t(s).each(function(){var n=t(this),o=e(n),s={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.6",a.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var s=e(o),a=s.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=e(n),a=o.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&o.find(s).trigger("focus"),n.trigger("click");var r=" li:not(.disabled):visible a",d=o.find(".dropdown-menu"+r);if(d.length){var l=d.index(i.target);38==i.which&&l>0&&l--,40==i.which&&l<d.length-1&&l++,~l||(l=0),d.eq(l).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,n){return this.each(function(){var o=t(this),s=o.data("bs.modal"),a=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](n):a.show&&s.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.6",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var n=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){n.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(n.$element)&&(n.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=t.support.transition&&n.$element.hasClass("fade");n.$element.parent().length||n.$element.appendTo(n.$body),n.$element.show().scrollTop(0),n.adjustDialog(),o&&n.$element[0].offsetWidth,n.$element.addClass("in"),n.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});o?n.$dialog.one("bsTransitionEnd",function(){n.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(i.TRANSITION_DURATION):n.$element.trigger("focus").trigger(s)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var n=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&o;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){n.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),o=n.attr("href"),s=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),n.data());n.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),o=i.data("bs.collapse"),s=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!o&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),o||i.data("bs.collapse",o=new n(this,s)),"string"==typeof e&&o[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.6",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(e=o.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){o&&o.length&&(i.call(o,"hide"),e||o.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var d=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][d])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(o,this)).emulateTransitionEnd(n.TRANSITION_DURATION):o.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var o=t(n);this.addAriaAndCollapsedClass(e(o),o)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=o,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var o=t(this);o.attr("data-target")||n.preventDefault();var s=e(o),a=s.data("bs.collapse"),r=a?"toggle":o.data();i.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var o=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var mapLocation = new google.maps.LatLng(40.6700, -73.9400); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 11, //change zoom here
        center: mapLocation,
        scrollwheel: false,
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]

    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


    //change address details here
    var contentString = '<div class="map-info-box">'
    + '<div class="map-head">'
    + '<h3>Launch</h3></div>'
    + '<p class="map-address"><i class="fa fa-map-marker"></i> Lorem ipsum dolor sit amet <br><i class="fa fa-phone"></i> 604-788-1832<br><span class="map-email"><i class="fa fa-envelope"></i> info@sitename.com</span></p>'
    + '<p><a href="https://www.google.com/maps/place/851+6th+Ave,+New+York,+NY+10001,+USA/data=!4m2!3m1!1s0x89c259af44f80211:0xbd87d30d3c7da9d2?sa=X&amp;ei=KqAdVazxJMTkuQS9sIGIBQ&amp;aved=0CB0Q8gEwAA" target="_blank">Open on Google Maps</a></p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    var image = 'assets/img/flag.svg';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Site Name', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(36)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function($){"use strict";$.ajaxChimp={responses:{"We have sent you a confirmation email":0,"Please enter a value":1,"An email address must contain a single @":2,"The domain portion of the email address is invalid (the portion after the @: )":3,"The username portion of the email address is invalid (the portion before the @: )":4,"This email address looks fake or invalid. Please enter a real email address":5},translations:{en:null},init:function(selector,options){$(selector).ajaxChimp(options)}};$.fn.ajaxChimp=function(options){$(this).each(function(i,elem){var form=$(elem);var email=form.find("input[type=email]");var label=form.find("label[for="+email.attr("id")+"]");var settings=$.extend({url:form.attr("action"),language:"en"},options);var url=settings.url.replace("/post?","/post-json?").concat("&c=?");form.attr("novalidate","true");email.attr("name","EMAIL");form.submit(function(){var msg;function successCallback(resp){if(resp.result==="success"){msg="We have sent you a confirmation email";label.removeClass("error").addClass("valid");email.removeClass("error").addClass("valid")}else{email.removeClass("valid").addClass("error");label.removeClass("valid").addClass("error");var index=-1;try{var parts=resp.msg.split(" - ",2);if(parts[1]===undefined){msg=resp.msg}else{var i=parseInt(parts[0],10);if(i.toString()===parts[0]){index=parts[0];msg=parts[1]}else{index=-1;msg=resp.msg}}}catch(e){index=-1;msg=resp.msg}}if(settings.language!=="en"&&$.ajaxChimp.responses[msg]!==undefined&&$.ajaxChimp.translations&&$.ajaxChimp.translations[settings.language]&&$.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]){msg=$.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]}label.html(msg);label.show(2e3);if(settings.callback){settings.callback(resp)}}var data={};var dataArray=form.serializeArray();$.each(dataArray,function(index,item){data[item.name]=item.value});$.ajax({url:url,data:data,success:successCallback,dataType:"jsonp",error:function(resp,text){console.log("mailchimp ajax submit error: "+text)}});var submitMsg="Submitting...";if(settings.language!=="en"&&$.ajaxChimp.translations&&$.ajaxChimp.translations[settings.language]&&$.ajaxChimp.translations[settings.language]["submit"]){submitMsg=$.ajaxChimp.translations[settings.language]["submit"]}label.html(submitMsg).show(2e3);return false})});return this}})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 jQuery animateNumber plugin v0.0.10
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(d){var p=function(b){return b.split("").reverse().join("")},l={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=l.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var k=Math.floor(a);d(e.elem).prop("number",a).text(k+b)}},separator:function(b,a){b=b||" ";a=
a||3;return function(e,k){var c=Math.floor(e).toString(),s=d(k.elem);if(c.length>a){for(var f=c,g=a,l=f.split("").reverse(),c=[],m,q,n,r=0,h=Math.ceil(f.length/g);r<h;r++){m="";for(n=0;n<g;n++){q=r*g+n;if(q===f.length)break;m+=l[q]}c.push(m)}f=c.length-1;g=p(c[f]);c[f]=p(parseInt(g,10).toString());c=c.join(b);c=p(c)}s.prop("number",e).text(c)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},l,b),e=d(this),k=[a],c=1,h=arguments.length;c<h;c++)k.push(arguments[c]);if(b.numberStep){var f=
this.each(function(){this._animateNumberSetter=b.numberStep}),g=a.complete;a.complete=function(){f.each(function(){delete this._animateNumberSetter});g&&g.apply(this,arguments)}}return e.animate.apply(e,k)}})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! Magnific Popup - v1.0.0 - 2015-01-03
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!__webpack_provided_window_dot_jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.wrap.css(b.fixedContentPos?{overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}:{top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),b.currTemplate[d]=f?a(f):!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||2!==c.which&&!c.ctrlKey&&!c.metaKey){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function() {
    "use strict";

    /* ==========================================================================
   Sub Form   
   ========================================================================== */



    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };


    /* ==========================================================================
   Tweet
   ========================================================================== */


    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');

        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });


    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });

    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.litebox-hero, .litebox-tour').magnificPopup({
        type: 'iframe'
    });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    $('.welcome-message').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 50, //change value here
            numberStep: comma_separator_number_step
        }, 6000);

    }, {
        offset: '80%'

    });




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




/* ==========================================================================
   Smooth scroll
   ========================================================================== */
$('a[href*=#]:not([href=#])').on('click', function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({

                scrollTop: (target.offset().top - 40)
            }, 1000);
            return false;
        }
    }
});


/* ==========================================================================
   Collapse nav bar
   ========================================================================== */

$(".navbar-nav li a").on('click', function() {
    $(".navbar-collapse").collapse('hide');
});



/* ==========================================================================
   Contact form
   ========================================================================== */


var formFields = $('.contact-form form input, .contact-form form textarea');



$(formFields).on('focus', function() {
    $(this).removeClass('input-error');
});
$('.contact-form form').submit(function(e) {
    e.preventDefault();
    $(formFields).removeClass('input-error');
    var postdata = $('.contact-form form').serialize();
    $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {

            if (json.nameMessage !== '') {
                $('.contact-form form .contact-name').addClass('input-error');
            }
            if (json.emailMessage !== '') {
                $('.contact-form form .contact-email').addClass('input-error');
            }
            if (json.messageMessage !== '') {
                $('.contact-form form textarea').addClass('input-error');
            }
            if (json.antispamMessage !== '') {
                $('.contact-form form .contact-antispam').addClass('input-error');
            }
            if (json.nameMessage === '' && json.emailMessage === '' && json.messageMessage === '' && json.antispamMessage === '') {
                $('.contact-form').fadeOut('3000', "linear", function() {
                    $('.contact-form-success').slideToggle();

                });
            }
        }
    });
});




/* ==========================================================================
   Chat button
   ========================================================================== */


$('.sub-form').waypoint(function() {
$('.chat-btn').addClass('fixed');

}, {
offset: '60%'

});




});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Retina.js v1.4.0
 *
 * Copyright 2016 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function(){function a(){}function b(a){return f.retinaImageSuffix+a}function c(a,c){if(this.path=a||"","undefined"!=typeof c&&null!==c)this.at_2x_path=c,this.perform_check=!1;else{if(void 0!==document.createElement){var d=document.createElement("a");d.href=this.path,d.pathname=d.pathname.replace(g,b),this.at_2x_path=d.href}else{var e=this.path.split("?");e[0]=e[0].replace(g,b),this.at_2x_path=e.join("?")}this.perform_check=!0}}function d(a){this.el=a,this.path=new c(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var b=this;this.path.check_2x_variant(function(a){a&&b.swap()})}var e= false?window:exports,f={retinaImageSuffix:"@2x",check_mime_type:!0,retinaImgTagSelector:"body img",force_original_dimensions:!0};e.Retina=a,a.configure=function(a){null===a&&(a={});for(var b in a)a.hasOwnProperty(b)&&(f[b]=a[b])},a.init=function(a){null===a&&(a=e),a.addEventListener("load",function(){var a,b,c=document.querySelectorAll(f.retinaImgTagSelector),e=[];for(a=0;a<c.length;a+=1)b=c[a],b.getAttributeNode("data-no-retina")||b.src&&e.push(new d(b))})},a.isRetina=function(){var a="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return e.devicePixelRatio>1?!0:!(!e.matchMedia||!e.matchMedia(a).matches)};var g=/\.[\w\?=]+$/;e.RetinaImagePath=c,c.confirmed_paths=[],c.prototype.is_external=function(){return!(!this.path.match(/^(https?\:|\/\/)/i)||this.path.match("//"+document.domain))},c.prototype.check_2x_variant=function(a){var b,d=this;return this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in c.confirmed_paths?a(!0):this.is_external()?a(!1):(b=new XMLHttpRequest,b.open("HEAD",this.at_2x_path),b.onreadystatechange=function(){if(4!==b.readyState)return a(!1);if(b.status>=200&&b.status<=399){if(f.check_mime_type){var e=b.getResponseHeader("Content-Type");if(null===e||!e.match(/^image/i))return a(!1)}return c.confirmed_paths.push(d.at_2x_path),a(!0)}return a(!1)},b.send(),void 0):a(!0)},e.RetinaImage=d,d.prototype.swap=function(a){function b(){c.el.complete?(f.force_original_dimensions&&(0===c.el.offsetWidth&&0===c.el.offsetHeight?(c.el.setAttribute("width",c.el.naturalWidth),c.el.setAttribute("height",c.el.naturalHeight)):(c.el.setAttribute("width",c.el.offsetWidth),c.el.setAttribute("height",c.el.offsetHeight))),c.el.setAttribute("src",a)):setTimeout(b,5)}"undefined"==typeof a&&(a=this.path.at_2x_path);var c=this;b()},a.isRetina()&&a.init(e)}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function(f){f.fn.twittie=function(e,l){var p="function"===typeof e?e:l,c=f.extend({username:null,list:null,hashtag:null,count:10,hideReplies:!1,dateFormat:"%b/%d/%Y",template:"{{date}} - {{tweet}}",apiPath:"api/tweet.php"},e instanceof Object?e:{});c.list&&!c.username&&f.error("If you want to fetch tweets from a list, you must define the username of the list owner.");var m=function(c){return c.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,'<a href="$1" target="_blank" title="Visit this link">$1</a>').replace(/#([a-zA-Z0-9_]+)/g,
'<a href="http://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>')},q=function(g){for(var d=c.template,a="date tweet avatar url retweeted screen_name user_name".split(" "),h=0,b=a.length;h<b;h++)d=d.replace(new RegExp("{{"+a[h]+"}}","gi"),g[a[h]]);return d};this.html("<span>Loading...</span>");var n=this;f.getJSON(c.apiPath,{username:c.username,list:c.list,
hashtag:c.hashtag,count:c.count,exclude_replies:c.hideReplies},function(g){n.find("span").fadeOut("fast",function(){n.html("<ul></ul>");for(var d=0;d<c.count;d++){var a=!1;if(g[d])a=g[d];else if(void 0!==g.statuses&&g.statuses[d])a=g.statuses[d];else break;for(var h=a.user.name,b=a.created_at,b=b.split(" "),b=new Date(Date.parse(b[1]+" "+b[2]+", "+b[5]+" "+b[3]+" UTC")),k="January February March April May June July August September October November December".split(" "),b={"%d":b.getDate(),"%m":b.getMonth()+
1,"%b":k[b.getMonth()].substr(0,3),"%B":k[b.getMonth()],"%y":String(b.getFullYear()).slice(-2),"%Y":b.getFullYear()},k=c.dateFormat,f=c.dateFormat.match(/%[dmbByY]/g),e=0,l=f.length;e<l;e++)k=k.replace(f[e],b[f[e]]);a={user_name:h,date:k,tweet:a.retweeted?m("RT @"+a.user.screen_name+": "+a.retweeted_status.text):m(a.text),avatar:'<img src="'+a.user.profile_image_url+'" />',url:"http://twitter.com/"+a.user.screen_name+"/status/"+a.id_str,retweeted:a.retweeted,screen_name:m("@"+a.user.screen_name)};
n.find("ul").append("<li>"+q(a)+"</li>")}"function"===typeof p&&p()})})}})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){(function(t,n){if(true){return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0),__webpack_require__(35)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{return n(t.jQuery)}})(window,function(t){var n,i;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"};i=function(t,n){var i;t.wrap(n.wrapper);i=t.parent();return i.data("isWaypointStickyWrapper",true)};t.waypoints("extendFn","sticky",function(r){var e,a,s;a=t.extend({},t.fn.waypoint.defaults,n,r);e=i(this,a);s=a.handler;a.handler=function(n){var i,r;i=t(this).children(":first");r=a.direction.indexOf(n)!==-1;i.toggleClass(a.stuckClass,r);e.height(r?i.outerHeight():"");if(s!=null){return s.call(this,n)}};e.waypoint(a);return this.data("stuckClass",a.stuckClass)});return t.waypoints("extendFn","unsticky",function(){var t;t=this.parent();if(!t.data("isWaypointStickyWrapper")){return this}t.waypoint("destroy");this.unwrap();return this.removeClass(this.data("stuckClass"))})})}).call(this);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(true){return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function(n){return e(n,t)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./bootstrap.min.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./bootstrap.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./font-awesome.min.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./font-awesome.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./magnific-popup.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./magnific-popup.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_bootstrap_min_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_font_awesome_min_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_magnific_popup_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__css_magnific_popup_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__css_magnific_popup_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_main_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__css_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__css_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fonts_fontawesome_webfont_eot__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fonts_fontawesome_webfont_eot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fonts_fontawesome_webfont_eot__);







__webpack_require__(6);
__webpack_require__(4);
__webpack_require__(8);
__webpack_require__(11);
__webpack_require__(9);
__webpack_require__(7);
__webpack_require__(12);
__webpack_require__(14);
__webpack_require__(13);
__webpack_require__(10);
__webpack_require__(5);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v3.3.5 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n/*!\n * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=465c5e1c3ceccfeb9eb6f8da7a5b4110)\n * Config saved to config.json and https://gist.github.com/465c5e1c3ceccfeb9eb6f8da7a5b4110\n *//*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}input,button,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:hover,a:focus{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=\"button\"]{cursor:pointer}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small,.h1 small,.h2 small,.h3 small,.h4 small,.h5 small,.h6 small,h1 .small,h2 .small,h3 .small,h4 .small,h5 .small,h6 .small,.h1 .small,.h2 .small,.h3 .small,.h4 .small,.h5 .small,.h6 .small{font-weight:normal;line-height:1;color:#777}h1,.h1,h2,.h2,h3,.h3{margin-top:20px;margin-bottom:10px}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h1 .small,.h1 .small,h2 .small,.h2 .small,h3 .small,.h3 .small{font-size:65%}h4,.h4,h5,.h5,h6,.h6{margin-top:10px;margin-bottom:10px}h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small,h4 .small,.h4 .small,h5 .small,.h5 .small,h6 .small,.h6 .small{font-size:75%}h1,.h1{font-size:36px}h2,.h2{font-size:30px}h3,.h3{font-size:24px}h4,.h4{font-size:18px}h5,.h5{font-size:14px}h6,.h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}small,.small{font-size:85%}mark,.mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:hover,a.text-primary:focus{color:#286090}.text-success{color:#3c763d}a.text-success:hover,a.text-success:focus{color:#2b542c}.text-info{color:#31708f}a.text-info:hover,a.text-info:focus{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:hover,a.text-warning:focus{color:#66512c}.text-danger{color:#a94442}a.text-danger:hover,a.text-danger:focus{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:hover,a.bg-primary:focus{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:hover,a.bg-success:focus{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:hover,a.bg-info:focus{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover,a.bg-warning:focus{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:hover,a.bg-danger:focus{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ul,ol{margin-top:0;margin-bottom:10px}ul ul,ol ul,ul ol,ol ol{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none;margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dt,dd{line-height:1.42857143}dt{font-weight:bold}dd{margin-left:0}@media (min-width:992px){.dl-horizontal dt{float:left;width:160px;clear:left;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote p:last-child,blockquote ul:last-child,blockquote ol:last-child{margin-bottom:0}blockquote footer,blockquote small,blockquote .small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote footer:before,blockquote small:before,blockquote .small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}.blockquote-reverse footer:before,blockquote.pull-right footer:before,.blockquote-reverse small:before,blockquote.pull-right small:before,.blockquote-reverse .small:before,blockquote.pull-right .small:before{content:''}.blockquote-reverse footer:after,blockquote.pull-right footer:after,.blockquote-reverse small:after,blockquote.pull-right small:after,.blockquote-reverse .small:after,blockquote.pull-right .small:after{content:'\\A0   \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.25)}kbd kbd{padding:0;font-size:100%;font-weight:bold;-webkit-box-shadow:none;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.row{margin-left:-15px;margin-right:-15px}.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12{position:relative;min-height:1px;padding-left:15px;padding-right:15px}.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:bold}input[type=\"search\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=\"radio\"],input[type=\"checkbox\"]{margin:4px 0 0;margin-top:1px \\9;line-height:normal}input[type=\"file\"]{display:block}input[type=\"range\"]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=\"file\"]:focus,input[type=\"radio\"]:focus,input[type=\"checkbox\"]:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s, box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{border:0;background-color:transparent}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=\"search\"]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=\"date\"].form-control,input[type=\"time\"].form-control,input[type=\"datetime-local\"].form-control,input[type=\"month\"].form-control{line-height:34px}input[type=\"date\"].input-sm,input[type=\"time\"].input-sm,input[type=\"datetime-local\"].input-sm,input[type=\"month\"].input-sm,.input-group-sm input[type=\"date\"],.input-group-sm input[type=\"time\"],.input-group-sm input[type=\"datetime-local\"],.input-group-sm input[type=\"month\"]{line-height:30px}input[type=\"date\"].input-lg,input[type=\"time\"].input-lg,input[type=\"datetime-local\"].input-lg,input[type=\"month\"].input-lg,.input-group-lg input[type=\"date\"],.input-group-lg input[type=\"time\"],.input-group-lg input[type=\"datetime-local\"],.input-group-lg input[type=\"month\"]{line-height:46px}}.form-group{margin-bottom:15px}.radio,.checkbox{position:relative;display:block;margin-top:10px;margin-bottom:10px}.radio label,.checkbox label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:normal;cursor:pointer}.radio input[type=\"radio\"],.radio-inline input[type=\"radio\"],.checkbox input[type=\"checkbox\"],.checkbox-inline input[type=\"checkbox\"]{position:absolute;margin-left:-20px;margin-top:4px \\9}.radio+.radio,.checkbox+.checkbox{margin-top:-5px}.radio-inline,.checkbox-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:normal;cursor:pointer}.radio-inline+.radio-inline,.checkbox-inline+.checkbox-inline{margin-top:0;margin-left:10px}input[type=\"radio\"][disabled],input[type=\"checkbox\"][disabled],input[type=\"radio\"].disabled,input[type=\"checkbox\"].disabled,fieldset[disabled] input[type=\"radio\"],fieldset[disabled] input[type=\"checkbox\"]{cursor:not-allowed}.radio-inline.disabled,.checkbox-inline.disabled,fieldset[disabled] .radio-inline,fieldset[disabled] .checkbox-inline{cursor:not-allowed}.radio.disabled label,.checkbox.disabled label,fieldset[disabled] .radio label,fieldset[disabled] .checkbox label{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0;min-height:34px}.form-control-static.input-lg,.form-control-static.input-sm{padding-left:0;padding-right:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}textarea.input-sm,select[multiple].input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm textarea.form-control,.form-group-sm select[multiple].form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}textarea.input-lg,select[multiple].input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg textarea.form-control,.form-group-lg select[multiple].form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.input-lg+.form-control-feedback,.input-group-lg+.form-control-feedback,.form-group-lg .form-control+.form-control-feedback{width:46px;height:46px;line-height:46px}.input-sm+.form-control-feedback,.input-group-sm+.form-control-feedback,.form-group-sm .form-control+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .help-block,.has-success .control-label,.has-success .radio,.has-success .checkbox,.has-success .radio-inline,.has-success .checkbox-inline,.has-success.radio label,.has-success.checkbox label,.has-success.radio-inline label,.has-success.checkbox-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-success .form-control:focus{border-color:#2b542c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .help-block,.has-warning .control-label,.has-warning .radio,.has-warning .checkbox,.has-warning .radio-inline,.has-warning .checkbox-inline,.has-warning.radio label,.has-warning.checkbox label,.has-warning.radio-inline label,.has-warning.checkbox-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-warning .form-control:focus{border-color:#66512c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .help-block,.has-error .control-label,.has-error .radio,.has-error .checkbox,.has-error .radio-inline,.has-error .checkbox-inline,.has-error.radio label,.has-error.checkbox label,.has-error.radio-inline label,.has-error.checkbox-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.has-error .form-control:focus{border-color:#843534;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.form-inline .input-group .form-control{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .radio,.form-inline .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .radio label,.form-inline .checkbox label{padding-left:0}.form-inline .radio input[type=\"radio\"],.form-inline .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .radio,.form-horizontal .checkbox,.form-horizontal .radio-inline,.form-horizontal .checkbox-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .radio,.form-horizontal .checkbox{min-height:27px}.form-horizontal .form-group{margin-left:-15px;margin-right:-15px}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;margin-bottom:0;font-weight:normal;text-align:center;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:focus,.btn:active:focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn.active.focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:hover,.btn:focus,.btn.focus{color:#333;text-decoration:none}.btn:active,.btn.active{outline:0;background-image:none;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default:focus,.btn-default.focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default:active:hover,.btn-default.active:hover,.open>.dropdown-toggle.btn-default:hover,.btn-default:active:focus,.btn-default.active:focus,.open>.dropdown-toggle.btn-default:focus,.btn-default:active.focus,.btn-default.active.focus,.open>.dropdown-toggle.btn-default.focus{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default:active,.btn-default.active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled:hover,.btn-default[disabled]:hover,fieldset[disabled] .btn-default:hover,.btn-default.disabled:focus,.btn-default[disabled]:focus,fieldset[disabled] .btn-default:focus,.btn-default.disabled.focus,.btn-default[disabled].focus,fieldset[disabled] .btn-default.focus{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary:focus,.btn-primary.focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary:active:hover,.btn-primary.active:hover,.open>.dropdown-toggle.btn-primary:hover,.btn-primary:active:focus,.btn-primary.active:focus,.open>.dropdown-toggle.btn-primary:focus,.btn-primary:active.focus,.btn-primary.active.focus,.open>.dropdown-toggle.btn-primary.focus{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary:active,.btn-primary.active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled:hover,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary:hover,.btn-primary.disabled:focus,.btn-primary[disabled]:focus,fieldset[disabled] .btn-primary:focus,.btn-primary.disabled.focus,.btn-primary[disabled].focus,fieldset[disabled] .btn-primary.focus{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success:focus,.btn-success.focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success:active:hover,.btn-success.active:hover,.open>.dropdown-toggle.btn-success:hover,.btn-success:active:focus,.btn-success.active:focus,.open>.dropdown-toggle.btn-success:focus,.btn-success:active.focus,.btn-success.active.focus,.open>.dropdown-toggle.btn-success.focus{color:#fff;background-color:#398439;border-color:#255625}.btn-success:active,.btn-success.active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled:hover,.btn-success[disabled]:hover,fieldset[disabled] .btn-success:hover,.btn-success.disabled:focus,.btn-success[disabled]:focus,fieldset[disabled] .btn-success:focus,.btn-success.disabled.focus,.btn-success[disabled].focus,fieldset[disabled] .btn-success.focus{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info:focus,.btn-info.focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info:active:hover,.btn-info.active:hover,.open>.dropdown-toggle.btn-info:hover,.btn-info:active:focus,.btn-info.active:focus,.open>.dropdown-toggle.btn-info:focus,.btn-info:active.focus,.btn-info.active.focus,.open>.dropdown-toggle.btn-info.focus{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info:active,.btn-info.active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled:hover,.btn-info[disabled]:hover,fieldset[disabled] .btn-info:hover,.btn-info.disabled:focus,.btn-info[disabled]:focus,fieldset[disabled] .btn-info:focus,.btn-info.disabled.focus,.btn-info[disabled].focus,fieldset[disabled] .btn-info.focus{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning:focus,.btn-warning.focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning:active:hover,.btn-warning.active:hover,.open>.dropdown-toggle.btn-warning:hover,.btn-warning:active:focus,.btn-warning.active:focus,.open>.dropdown-toggle.btn-warning:focus,.btn-warning:active.focus,.btn-warning.active.focus,.open>.dropdown-toggle.btn-warning.focus{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning:active,.btn-warning.active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled:hover,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning:hover,.btn-warning.disabled:focus,.btn-warning[disabled]:focus,fieldset[disabled] .btn-warning:focus,.btn-warning.disabled.focus,.btn-warning[disabled].focus,fieldset[disabled] .btn-warning.focus{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger:focus,.btn-danger.focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger:active:hover,.btn-danger.active:hover,.open>.dropdown-toggle.btn-danger:hover,.btn-danger:active:focus,.btn-danger.active:focus,.open>.dropdown-toggle.btn-danger:focus,.btn-danger:active.focus,.btn-danger.active.focus,.open>.dropdown-toggle.btn-danger.focus{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger:active,.btn-danger.active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled:hover,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger:hover,.btn-danger.disabled:focus,.btn-danger[disabled]:focus,fieldset[disabled] .btn-danger:focus,.btn-danger.disabled.focus,.btn-danger[disabled].focus,fieldset[disabled] .btn-danger.focus{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{color:#337ab7;font-weight:normal;border-radius:0}.btn-link,.btn-link:active,.btn-link.active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active{border-color:transparent}.btn-link:hover,.btn-link:focus{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,fieldset[disabled] .btn-link:hover,.btn-link[disabled]:focus,fieldset[disabled] .btn-link:focus{color:#777;text-decoration:none}.btn-lg,.btn-group-lg>.btn{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-sm,.btn-group-sm>.btn{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-xs,.btn-group-xs>.btn{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-property:height, visibility;-o-transition-property:height, visibility;transition-property:height, visibility;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid \\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropup,.dropdown{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,0.175);box-shadow:0 6px 12px rgba(0,0,0,0.175);-webkit-background-clip:padding-box;background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus{text-decoration:none;color:#262626;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;outline:0;background-color:#337ab7}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#777}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false);cursor:not-allowed}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{left:auto;right:0}.dropdown-menu-left{left:0;right:auto}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px dashed;border-bottom:4px solid \\9;content:\"\"}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:992px){.navbar-right .dropdown-menu{left:auto;right:0}.navbar-right .dropdown-menu-left{left:0;right:auto}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;float:left}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover,.btn-group>.btn:focus,.btn-group-vertical>.btn:focus,.btn-group>.btn:active,.btn-group-vertical>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn.active{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.125);box-shadow:inset 0 3px 5px rgba(0,0,0,0.125)}.btn-group.open .dropdown-toggle.btn-link{-webkit-box-shadow:none;box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=\"buttons\"]>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"radio\"],[data-toggle=\"buttons\"]>.btn input[type=\"checkbox\"],[data-toggle=\"buttons\"]>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=\"col-\"]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn,select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn,select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:normal;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=\"radio\"],.input-group-addon input[type=\"checkbox\"]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:last-child>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:first-child>.btn-group:not(:first-child)>.btn{border-bottom-left-radius:0;border-top-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:hover,.input-group-btn>.btn:focus,.input-group-btn>.btn:active{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:hover,.nav>li.disabled>a:focus{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:hover,.nav .open>a:focus{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:hover,.nav-tabs>li.active>a:focus{color:#555;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:hover,.nav-tabs.nav-justified>.active>a:focus{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:hover,.nav-pills>li.active>a:focus{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{text-align:center;margin-bottom:5px}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:hover,.nav-tabs-justified>.active>a:focus{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:992px){.navbar{border-radius:4px}}@media (min-width:992px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:15px;padding-left:15px;border-top:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1);-webkit-overflow-scrolling:touch}.navbar-collapse.in{overflow-y:auto}@media (min-width:992px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block !important;height:auto !important;padding-bottom:0;overflow:visible !important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{padding-left:0;padding-right:0}}.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-fixed-bottom .navbar-collapse{max-height:200px}}.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:-15px;margin-left:-15px}@media (min-width:992px){.container>.navbar-header,.container-fluid>.navbar-header,.container>.navbar-collapse,.container-fluid>.navbar-collapse{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:992px){.navbar-static-top{border-radius:0}}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030}@media (min-width:992px){.navbar-fixed-top,.navbar-fixed-bottom{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px 15px;font-size:18px;line-height:20px;height:50px}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:992px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;margin-right:15px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:992px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:991px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu>li>a,.navbar-nav .open .dropdown-menu .dropdown-header{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:hover,.navbar-nav .open .dropdown-menu>li>a:focus{background-image:none}}@media (min-width:992px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{margin-left:-15px;margin-right:-15px;padding:10px 15px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.1);margin-top:8px;margin-bottom:8px}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn,.navbar-form .input-group .form-control{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .radio,.navbar-form .checkbox{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .radio label,.navbar-form .checkbox label{padding-left:0}.navbar-form .radio input[type=\"radio\"],.navbar-form .checkbox input[type=\"checkbox\"]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:991px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:992px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-right-radius:0;border-top-left-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:992px){.navbar-text{float:left;margin-left:15px;margin-right:15px}}@media (min-width:992px){.navbar-left{float:left !important}.navbar-right{float:right !important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:hover,.navbar-default .navbar-brand:focus{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:hover,.navbar-default .navbar-nav>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:hover,.navbar-default .navbar-nav>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:hover,.navbar-default .navbar-nav>.disabled>a:focus{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:hover,.navbar-default .navbar-toggle:focus{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:hover,.navbar-default .navbar-nav>.open>a:focus{background-color:#e7e7e7;color:#555}@media (max-width:991px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:hover,.navbar-default .btn-link:focus{color:#333}.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:hover,.navbar-default .btn-link[disabled]:focus,fieldset[disabled] .navbar-default .btn-link:focus{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-brand:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:hover,.navbar-inverse .navbar-nav>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:hover,.navbar-inverse .navbar-nav>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:hover,.navbar-inverse .navbar-nav>.disabled>a:focus{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:hover,.navbar-inverse .navbar-toggle:focus{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:hover,.navbar-inverse .navbar-nav>.open>a:focus{background-color:#080808;color:#fff}@media (max-width:991px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:hover,.navbar-inverse .btn-link:focus{color:#fff}.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:hover,.navbar-inverse .btn-link[disabled]:focus,fieldset[disabled] .navbar-inverse .btn-link:focus{color:#444}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.close{float:right;font-size:21px;font-weight:bold;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.5;filter:alpha(opacity=50)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{display:none;overflow:hidden;position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transform:translate(0, -25%);-ms-transform:translate(0, -25%);-o-transform:translate(0, -25%);transform:translate(0, -25%);-webkit-transition:-webkit-transform 0.3s ease-out;-o-transition:-o-transform 0.3s ease-out;transition:transform 0.3s ease-out}.modal.in .modal-dialog{-webkit-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0);transform:translate(0, 0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;border:1px solid #999;border:1px solid rgba(0,0,0,0.2);border-radius:6px;-webkit-box-shadow:0 3px 9px rgba(0,0,0,0.5);box-shadow:0 3px 9px rgba(0,0,0,0.5);-webkit-background-clip:padding-box;background-clip:padding-box;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0;filter:alpha(opacity=0)}.modal-backdrop.in{opacity:.5;filter:alpha(opacity=50)}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-left:5px;margin-bottom:0}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{-webkit-box-shadow:0 5px 15px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(0,0,0,0.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.clearfix:before,.clearfix:after,.dl-horizontal dd:before,.dl-horizontal dd:after,.container:before,.container:after,.container-fluid:before,.container-fluid:after,.row:before,.row:after,.form-horizontal .form-group:before,.form-horizontal .form-group:after,.btn-toolbar:before,.btn-toolbar:after,.btn-group-vertical>.btn-group:before,.btn-group-vertical>.btn-group:after,.nav:before,.nav:after,.navbar:before,.navbar:after,.navbar-header:before,.navbar-header:after,.navbar-collapse:before,.navbar-collapse:after,.modal-header:before,.modal-header:after,.modal-footer:before,.modal-footer:after{content:\" \";display:table}.clearfix:after,.dl-horizontal dd:after,.container:after,.container-fluid:after,.row:after,.form-horizontal .form-group:after,.btn-toolbar:after,.btn-group-vertical>.btn-group:after,.nav:after,.navbar:after,.navbar-header:after,.navbar-collapse:after,.modal-header:after,.modal-footer:after{clear:both}.center-block{display:block;margin-left:auto;margin-right:auto}.pull-right{float:right !important}.pull-left{float:left !important}.hide{display:none !important}.show{display:block !important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none !important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-xs,.visible-sm,.visible-md,.visible-lg{display:none !important}.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block{display:none !important}@media (max-width:767px){.visible-xs{display:block !important}table.visible-xs{display:table !important}tr.visible-xs{display:table-row !important}th.visible-xs,td.visible-xs{display:table-cell !important}}@media (max-width:767px){.visible-xs-block{display:block !important}}@media (max-width:767px){.visible-xs-inline{display:inline !important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block !important}table.visible-sm{display:table !important}tr.visible-sm{display:table-row !important}th.visible-sm,td.visible-sm{display:table-cell !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline !important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block !important}table.visible-md{display:table !important}tr.visible-md{display:table-row !important}th.visible-md,td.visible-md{display:table-cell !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline !important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block !important}}@media (min-width:1200px){.visible-lg{display:block !important}table.visible-lg{display:table !important}tr.visible-lg{display:table-row !important}th.visible-lg,td.visible-lg{display:table-cell !important}}@media (min-width:1200px){.visible-lg-block{display:block !important}}@media (min-width:1200px){.visible-lg-inline{display:inline !important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block !important}}@media (max-width:767px){.hidden-xs{display:none !important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none !important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none !important}}@media (min-width:1200px){.hidden-lg{display:none !important}}.visible-print{display:none !important}@media print{.visible-print{display:block !important}table.visible-print{display:table !important}tr.visible-print{display:table-row !important}th.visible-print,td.visible-print{display:table-cell !important}}.visible-print-block{display:none !important}@media print{.visible-print-block{display:block !important}}.visible-print-inline{display:none !important}@media print{.visible-print-inline{display:inline !important}}.visible-print-inline-block{display:none !important}@media print{.visible-print-inline-block{display:inline-block !important}}@media print{.hidden-print{display:none !important}}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.4.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n\n@font-face {\n    font-family: 'FontAwesome';\n    src: url(" + __webpack_require__(3) + ");\n    src: url(" + __webpack_require__(3) + ") format('embedded-opentype'), url(" + __webpack_require__(28) + ") format('woff2'), url(" + __webpack_require__(27) + ") format('woff'), url(" + __webpack_require__(26) + ") format('truetype'), url(" + __webpack_require__(25) + ") format('svg');\n    font-weight: normal;\n    font-style: normal\n}\n\n.fa {\n    display: inline-block;\n    font: normal normal normal 14px/1 FontAwesome;\n    font-size: inherit;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale\n}\n\n.fa-lg {\n    font-size: 1.33333333em;\n    line-height: .75em;\n    vertical-align: -15%\n}\n\n.fa-2x {\n    font-size: 2em\n}\n\n.fa-3x {\n    font-size: 3em\n}\n\n.fa-4x {\n    font-size: 4em\n}\n\n.fa-5x {\n    font-size: 5em\n}\n\n.fa-fw {\n    width: 1.28571429em;\n    text-align: center\n}\n\n.fa-ul {\n    padding-left: 0;\n    margin-left: 2.14285714em;\n    list-style-type: none\n}\n\n.fa-ul>li {\n    position: relative\n}\n\n.fa-li {\n    position: absolute;\n    left: -2.14285714em;\n    width: 2.14285714em;\n    top: .14285714em;\n    text-align: center\n}\n\n.fa-li.fa-lg {\n    left: -1.85714286em\n}\n\n.fa-border {\n    padding: .2em .25em .15em;\n    border: solid .08em #eee;\n    border-radius: .1em\n}\n\n.fa-pull-left {\n    float: left\n}\n\n.fa-pull-right {\n    float: right\n}\n\n.fa.fa-pull-left {\n    margin-right: .3em\n}\n\n.fa.fa-pull-right {\n    margin-left: .3em\n}\n\n.pull-right {\n    float: right\n}\n\n.pull-left {\n    float: left\n}\n\n.fa.pull-left {\n    margin-right: .3em\n}\n\n.fa.pull-right {\n    margin-left: .3em\n}\n\n.fa-spin {\n    -webkit-animation: fa-spin 2s infinite linear;\n    animation: fa-spin 2s infinite linear\n}\n\n.fa-pulse {\n    -webkit-animation: fa-spin 1s infinite steps(8);\n    animation: fa-spin 1s infinite steps(8)\n}\n\n@-webkit-keyframes fa-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg)\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg)\n    }\n}\n\n@keyframes fa-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg)\n    }\n    100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg)\n    }\n}\n\n.fa-rotate-90 {\n    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=1);\n    -webkit-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    transform: rotate(90deg)\n}\n\n.fa-rotate-180 {\n    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=2);\n    -webkit-transform: rotate(180deg);\n    -ms-transform: rotate(180deg);\n    transform: rotate(180deg)\n}\n\n.fa-rotate-270 {\n    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=3);\n    -webkit-transform: rotate(270deg);\n    -ms-transform: rotate(270deg);\n    transform: rotate(270deg)\n}\n\n.fa-flip-horizontal {\n    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n    -webkit-transform: scale(-1, 1);\n    -ms-transform: scale(-1, 1);\n    transform: scale(-1, 1)\n}\n\n.fa-flip-vertical {\n    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n    -webkit-transform: scale(1, -1);\n    -ms-transform: scale(1, -1);\n    transform: scale(1, -1)\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n    filter: none\n}\n\n.fa-stack {\n    position: relative;\n    display: inline-block;\n    width: 2em;\n    height: 2em;\n    line-height: 2em;\n    vertical-align: middle\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    text-align: center\n}\n\n.fa-stack-1x {\n    line-height: inherit\n}\n\n.fa-stack-2x {\n    font-size: 2em\n}\n\n.fa-inverse {\n    color: #fff\n}\n\n.fa-glass:before {\n    content: \"\\F000\"\n}\n\n.fa-music:before {\n    content: \"\\F001\"\n}\n\n.fa-search:before {\n    content: \"\\F002\"\n}\n\n.fa-envelope-o:before {\n    content: \"\\F003\"\n}\n\n.fa-heart:before {\n    content: \"\\F004\"\n}\n\n.fa-star:before {\n    content: \"\\F005\"\n}\n\n.fa-star-o:before {\n    content: \"\\F006\"\n}\n\n.fa-user:before {\n    content: \"\\F007\"\n}\n\n.fa-film:before {\n    content: \"\\F008\"\n}\n\n.fa-th-large:before {\n    content: \"\\F009\"\n}\n\n.fa-th:before {\n    content: \"\\F00A\"\n}\n\n.fa-th-list:before {\n    content: \"\\F00B\"\n}\n\n.fa-check:before {\n    content: \"\\F00C\"\n}\n\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n    content: \"\\F00D\"\n}\n\n.fa-search-plus:before {\n    content: \"\\F00E\"\n}\n\n.fa-search-minus:before {\n    content: \"\\F010\"\n}\n\n.fa-power-off:before {\n    content: \"\\F011\"\n}\n\n.fa-signal:before {\n    content: \"\\F012\"\n}\n\n.fa-gear:before,\n.fa-cog:before {\n    content: \"\\F013\"\n}\n\n.fa-trash-o:before {\n    content: \"\\F014\"\n}\n\n.fa-home:before {\n    content: \"\\F015\"\n}\n\n.fa-file-o:before {\n    content: \"\\F016\"\n}\n\n.fa-clock-o:before {\n    content: \"\\F017\"\n}\n\n.fa-road:before {\n    content: \"\\F018\"\n}\n\n.fa-download:before {\n    content: \"\\F019\"\n}\n\n.fa-arrow-circle-o-down:before {\n    content: \"\\F01A\"\n}\n\n.fa-arrow-circle-o-up:before {\n    content: \"\\F01B\"\n}\n\n.fa-inbox:before {\n    content: \"\\F01C\"\n}\n\n.fa-play-circle-o:before {\n    content: \"\\F01D\"\n}\n\n.fa-rotate-right:before,\n.fa-repeat:before {\n    content: \"\\F01E\"\n}\n\n.fa-refresh:before {\n    content: \"\\F021\"\n}\n\n.fa-list-alt:before {\n    content: \"\\F022\"\n}\n\n.fa-lock:before {\n    content: \"\\F023\"\n}\n\n.fa-flag:before {\n    content: \"\\F024\"\n}\n\n.fa-headphones:before {\n    content: \"\\F025\"\n}\n\n.fa-volume-off:before {\n    content: \"\\F026\"\n}\n\n.fa-volume-down:before {\n    content: \"\\F027\"\n}\n\n.fa-volume-up:before {\n    content: \"\\F028\"\n}\n\n.fa-qrcode:before {\n    content: \"\\F029\"\n}\n\n.fa-barcode:before {\n    content: \"\\F02A\"\n}\n\n.fa-tag:before {\n    content: \"\\F02B\"\n}\n\n.fa-tags:before {\n    content: \"\\F02C\"\n}\n\n.fa-book:before {\n    content: \"\\F02D\"\n}\n\n.fa-bookmark:before {\n    content: \"\\F02E\"\n}\n\n.fa-print:before {\n    content: \"\\F02F\"\n}\n\n.fa-camera:before {\n    content: \"\\F030\"\n}\n\n.fa-font:before {\n    content: \"\\F031\"\n}\n\n.fa-bold:before {\n    content: \"\\F032\"\n}\n\n.fa-italic:before {\n    content: \"\\F033\"\n}\n\n.fa-text-height:before {\n    content: \"\\F034\"\n}\n\n.fa-text-width:before {\n    content: \"\\F035\"\n}\n\n.fa-align-left:before {\n    content: \"\\F036\"\n}\n\n.fa-align-center:before {\n    content: \"\\F037\"\n}\n\n.fa-align-right:before {\n    content: \"\\F038\"\n}\n\n.fa-align-justify:before {\n    content: \"\\F039\"\n}\n\n.fa-list:before {\n    content: \"\\F03A\"\n}\n\n.fa-dedent:before,\n.fa-outdent:before {\n    content: \"\\F03B\"\n}\n\n.fa-indent:before {\n    content: \"\\F03C\"\n}\n\n.fa-video-camera:before {\n    content: \"\\F03D\"\n}\n\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n    content: \"\\F03E\"\n}\n\n.fa-pencil:before {\n    content: \"\\F040\"\n}\n\n.fa-map-marker:before {\n    content: \"\\F041\"\n}\n\n.fa-adjust:before {\n    content: \"\\F042\"\n}\n\n.fa-tint:before {\n    content: \"\\F043\"\n}\n\n.fa-edit:before,\n.fa-pencil-square-o:before {\n    content: \"\\F044\"\n}\n\n.fa-share-square-o:before {\n    content: \"\\F045\"\n}\n\n.fa-check-square-o:before {\n    content: \"\\F046\"\n}\n\n.fa-arrows:before {\n    content: \"\\F047\"\n}\n\n.fa-step-backward:before {\n    content: \"\\F048\"\n}\n\n.fa-fast-backward:before {\n    content: \"\\F049\"\n}\n\n.fa-backward:before {\n    content: \"\\F04A\"\n}\n\n.fa-play:before {\n    content: \"\\F04B\"\n}\n\n.fa-pause:before {\n    content: \"\\F04C\"\n}\n\n.fa-stop:before {\n    content: \"\\F04D\"\n}\n\n.fa-forward:before {\n    content: \"\\F04E\"\n}\n\n.fa-fast-forward:before {\n    content: \"\\F050\"\n}\n\n.fa-step-forward:before {\n    content: \"\\F051\"\n}\n\n.fa-eject:before {\n    content: \"\\F052\"\n}\n\n.fa-chevron-left:before {\n    content: \"\\F053\"\n}\n\n.fa-chevron-right:before {\n    content: \"\\F054\"\n}\n\n.fa-plus-circle:before {\n    content: \"\\F055\"\n}\n\n.fa-minus-circle:before {\n    content: \"\\F056\"\n}\n\n.fa-times-circle:before {\n    content: \"\\F057\"\n}\n\n.fa-check-circle:before {\n    content: \"\\F058\"\n}\n\n.fa-question-circle:before {\n    content: \"\\F059\"\n}\n\n.fa-info-circle:before {\n    content: \"\\F05A\"\n}\n\n.fa-crosshairs:before {\n    content: \"\\F05B\"\n}\n\n.fa-times-circle-o:before {\n    content: \"\\F05C\"\n}\n\n.fa-check-circle-o:before {\n    content: \"\\F05D\"\n}\n\n.fa-ban:before {\n    content: \"\\F05E\"\n}\n\n.fa-arrow-left:before {\n    content: \"\\F060\"\n}\n\n.fa-arrow-right:before {\n    content: \"\\F061\"\n}\n\n.fa-arrow-up:before {\n    content: \"\\F062\"\n}\n\n.fa-arrow-down:before {\n    content: \"\\F063\"\n}\n\n.fa-mail-forward:before,\n.fa-share:before {\n    content: \"\\F064\"\n}\n\n.fa-expand:before {\n    content: \"\\F065\"\n}\n\n.fa-compress:before {\n    content: \"\\F066\"\n}\n\n.fa-plus:before {\n    content: \"\\F067\"\n}\n\n.fa-minus:before {\n    content: \"\\F068\"\n}\n\n.fa-asterisk:before {\n    content: \"\\F069\"\n}\n\n.fa-exclamation-circle:before {\n    content: \"\\F06A\"\n}\n\n.fa-gift:before {\n    content: \"\\F06B\"\n}\n\n.fa-leaf:before {\n    content: \"\\F06C\"\n}\n\n.fa-fire:before {\n    content: \"\\F06D\"\n}\n\n.fa-eye:before {\n    content: \"\\F06E\"\n}\n\n.fa-eye-slash:before {\n    content: \"\\F070\"\n}\n\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n    content: \"\\F071\"\n}\n\n.fa-plane:before {\n    content: \"\\F072\"\n}\n\n.fa-calendar:before {\n    content: \"\\F073\"\n}\n\n.fa-random:before {\n    content: \"\\F074\"\n}\n\n.fa-comment:before {\n    content: \"\\F075\"\n}\n\n.fa-magnet:before {\n    content: \"\\F076\"\n}\n\n.fa-chevron-up:before {\n    content: \"\\F077\"\n}\n\n.fa-chevron-down:before {\n    content: \"\\F078\"\n}\n\n.fa-retweet:before {\n    content: \"\\F079\"\n}\n\n.fa-shopping-cart:before {\n    content: \"\\F07A\"\n}\n\n.fa-folder:before {\n    content: \"\\F07B\"\n}\n\n.fa-folder-open:before {\n    content: \"\\F07C\"\n}\n\n.fa-arrows-v:before {\n    content: \"\\F07D\"\n}\n\n.fa-arrows-h:before {\n    content: \"\\F07E\"\n}\n\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n    content: \"\\F080\"\n}\n\n.fa-twitter-square:before {\n    content: \"\\F081\"\n}\n\n.fa-facebook-square:before {\n    content: \"\\F082\"\n}\n\n.fa-camera-retro:before {\n    content: \"\\F083\"\n}\n\n.fa-key:before {\n    content: \"\\F084\"\n}\n\n.fa-gears:before,\n.fa-cogs:before {\n    content: \"\\F085\"\n}\n\n.fa-comments:before {\n    content: \"\\F086\"\n}\n\n.fa-thumbs-o-up:before {\n    content: \"\\F087\"\n}\n\n.fa-thumbs-o-down:before {\n    content: \"\\F088\"\n}\n\n.fa-star-half:before {\n    content: \"\\F089\"\n}\n\n.fa-heart-o:before {\n    content: \"\\F08A\"\n}\n\n.fa-sign-out:before {\n    content: \"\\F08B\"\n}\n\n.fa-linkedin-square:before {\n    content: \"\\F08C\"\n}\n\n.fa-thumb-tack:before {\n    content: \"\\F08D\"\n}\n\n.fa-external-link:before {\n    content: \"\\F08E\"\n}\n\n.fa-sign-in:before {\n    content: \"\\F090\"\n}\n\n.fa-trophy:before {\n    content: \"\\F091\"\n}\n\n.fa-github-square:before {\n    content: \"\\F092\"\n}\n\n.fa-upload:before {\n    content: \"\\F093\"\n}\n\n.fa-lemon-o:before {\n    content: \"\\F094\"\n}\n\n.fa-phone:before {\n    content: \"\\F095\"\n}\n\n.fa-square-o:before {\n    content: \"\\F096\"\n}\n\n.fa-bookmark-o:before {\n    content: \"\\F097\"\n}\n\n.fa-phone-square:before {\n    content: \"\\F098\"\n}\n\n.fa-twitter:before {\n    content: \"\\F099\"\n}\n\n.fa-facebook-f:before,\n.fa-facebook:before {\n    content: \"\\F09A\"\n}\n\n.fa-github:before {\n    content: \"\\F09B\"\n}\n\n.fa-unlock:before {\n    content: \"\\F09C\"\n}\n\n.fa-credit-card:before {\n    content: \"\\F09D\"\n}\n\n.fa-feed:before,\n.fa-rss:before {\n    content: \"\\F09E\"\n}\n\n.fa-hdd-o:before {\n    content: \"\\F0A0\"\n}\n\n.fa-bullhorn:before {\n    content: \"\\F0A1\"\n}\n\n.fa-bell:before {\n    content: \"\\F0F3\"\n}\n\n.fa-certificate:before {\n    content: \"\\F0A3\"\n}\n\n.fa-hand-o-right:before {\n    content: \"\\F0A4\"\n}\n\n.fa-hand-o-left:before {\n    content: \"\\F0A5\"\n}\n\n.fa-hand-o-up:before {\n    content: \"\\F0A6\"\n}\n\n.fa-hand-o-down:before {\n    content: \"\\F0A7\"\n}\n\n.fa-arrow-circle-left:before {\n    content: \"\\F0A8\"\n}\n\n.fa-arrow-circle-right:before {\n    content: \"\\F0A9\"\n}\n\n.fa-arrow-circle-up:before {\n    content: \"\\F0AA\"\n}\n\n.fa-arrow-circle-down:before {\n    content: \"\\F0AB\"\n}\n\n.fa-globe:before {\n    content: \"\\F0AC\"\n}\n\n.fa-wrench:before {\n    content: \"\\F0AD\"\n}\n\n.fa-tasks:before {\n    content: \"\\F0AE\"\n}\n\n.fa-filter:before {\n    content: \"\\F0B0\"\n}\n\n.fa-briefcase:before {\n    content: \"\\F0B1\"\n}\n\n.fa-arrows-alt:before {\n    content: \"\\F0B2\"\n}\n\n.fa-group:before,\n.fa-users:before {\n    content: \"\\F0C0\"\n}\n\n.fa-chain:before,\n.fa-link:before {\n    content: \"\\F0C1\"\n}\n\n.fa-cloud:before {\n    content: \"\\F0C2\"\n}\n\n.fa-flask:before {\n    content: \"\\F0C3\"\n}\n\n.fa-cut:before,\n.fa-scissors:before {\n    content: \"\\F0C4\"\n}\n\n.fa-copy:before,\n.fa-files-o:before {\n    content: \"\\F0C5\"\n}\n\n.fa-paperclip:before {\n    content: \"\\F0C6\"\n}\n\n.fa-save:before,\n.fa-floppy-o:before {\n    content: \"\\F0C7\"\n}\n\n.fa-square:before {\n    content: \"\\F0C8\"\n}\n\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n    content: \"\\F0C9\"\n}\n\n.fa-list-ul:before {\n    content: \"\\F0CA\"\n}\n\n.fa-list-ol:before {\n    content: \"\\F0CB\"\n}\n\n.fa-strikethrough:before {\n    content: \"\\F0CC\"\n}\n\n.fa-underline:before {\n    content: \"\\F0CD\"\n}\n\n.fa-table:before {\n    content: \"\\F0CE\"\n}\n\n.fa-magic:before {\n    content: \"\\F0D0\"\n}\n\n.fa-truck:before {\n    content: \"\\F0D1\"\n}\n\n.fa-pinterest:before {\n    content: \"\\F0D2\"\n}\n\n.fa-pinterest-square:before {\n    content: \"\\F0D3\"\n}\n\n.fa-google-plus-square:before {\n    content: \"\\F0D4\"\n}\n\n.fa-google-plus:before {\n    content: \"\\F0D5\"\n}\n\n.fa-money:before {\n    content: \"\\F0D6\"\n}\n\n.fa-caret-down:before {\n    content: \"\\F0D7\"\n}\n\n.fa-caret-up:before {\n    content: \"\\F0D8\"\n}\n\n.fa-caret-left:before {\n    content: \"\\F0D9\"\n}\n\n.fa-caret-right:before {\n    content: \"\\F0DA\"\n}\n\n.fa-columns:before {\n    content: \"\\F0DB\"\n}\n\n.fa-unsorted:before,\n.fa-sort:before {\n    content: \"\\F0DC\"\n}\n\n.fa-sort-down:before,\n.fa-sort-desc:before {\n    content: \"\\F0DD\"\n}\n\n.fa-sort-up:before,\n.fa-sort-asc:before {\n    content: \"\\F0DE\"\n}\n\n.fa-envelope:before {\n    content: \"\\F0E0\"\n}\n\n.fa-linkedin:before {\n    content: \"\\F0E1\"\n}\n\n.fa-rotate-left:before,\n.fa-undo:before {\n    content: \"\\F0E2\"\n}\n\n.fa-legal:before,\n.fa-gavel:before {\n    content: \"\\F0E3\"\n}\n\n.fa-dashboard:before,\n.fa-tachometer:before {\n    content: \"\\F0E4\"\n}\n\n.fa-comment-o:before {\n    content: \"\\F0E5\"\n}\n\n.fa-comments-o:before {\n    content: \"\\F0E6\"\n}\n\n.fa-flash:before,\n.fa-bolt:before {\n    content: \"\\F0E7\"\n}\n\n.fa-sitemap:before {\n    content: \"\\F0E8\"\n}\n\n.fa-umbrella:before {\n    content: \"\\F0E9\"\n}\n\n.fa-paste:before,\n.fa-clipboard:before {\n    content: \"\\F0EA\"\n}\n\n.fa-lightbulb-o:before {\n    content: \"\\F0EB\"\n}\n\n.fa-exchange:before {\n    content: \"\\F0EC\"\n}\n\n.fa-cloud-download:before {\n    content: \"\\F0ED\"\n}\n\n.fa-cloud-upload:before {\n    content: \"\\F0EE\"\n}\n\n.fa-user-md:before {\n    content: \"\\F0F0\"\n}\n\n.fa-stethoscope:before {\n    content: \"\\F0F1\"\n}\n\n.fa-suitcase:before {\n    content: \"\\F0F2\"\n}\n\n.fa-bell-o:before {\n    content: \"\\F0A2\"\n}\n\n.fa-coffee:before {\n    content: \"\\F0F4\"\n}\n\n.fa-cutlery:before {\n    content: \"\\F0F5\"\n}\n\n.fa-file-text-o:before {\n    content: \"\\F0F6\"\n}\n\n.fa-building-o:before {\n    content: \"\\F0F7\"\n}\n\n.fa-hospital-o:before {\n    content: \"\\F0F8\"\n}\n\n.fa-ambulance:before {\n    content: \"\\F0F9\"\n}\n\n.fa-medkit:before {\n    content: \"\\F0FA\"\n}\n\n.fa-fighter-jet:before {\n    content: \"\\F0FB\"\n}\n\n.fa-beer:before {\n    content: \"\\F0FC\"\n}\n\n.fa-h-square:before {\n    content: \"\\F0FD\"\n}\n\n.fa-plus-square:before {\n    content: \"\\F0FE\"\n}\n\n.fa-angle-double-left:before {\n    content: \"\\F100\"\n}\n\n.fa-angle-double-right:before {\n    content: \"\\F101\"\n}\n\n.fa-angle-double-up:before {\n    content: \"\\F102\"\n}\n\n.fa-angle-double-down:before {\n    content: \"\\F103\"\n}\n\n.fa-angle-left:before {\n    content: \"\\F104\"\n}\n\n.fa-angle-right:before {\n    content: \"\\F105\"\n}\n\n.fa-angle-up:before {\n    content: \"\\F106\"\n}\n\n.fa-angle-down:before {\n    content: \"\\F107\"\n}\n\n.fa-desktop:before {\n    content: \"\\F108\"\n}\n\n.fa-laptop:before {\n    content: \"\\F109\"\n}\n\n.fa-tablet:before {\n    content: \"\\F10A\"\n}\n\n.fa-mobile-phone:before,\n.fa-mobile:before {\n    content: \"\\F10B\"\n}\n\n.fa-circle-o:before {\n    content: \"\\F10C\"\n}\n\n.fa-quote-left:before {\n    content: \"\\F10D\"\n}\n\n.fa-quote-right:before {\n    content: \"\\F10E\"\n}\n\n.fa-spinner:before {\n    content: \"\\F110\"\n}\n\n.fa-circle:before {\n    content: \"\\F111\"\n}\n\n.fa-mail-reply:before,\n.fa-reply:before {\n    content: \"\\F112\"\n}\n\n.fa-github-alt:before {\n    content: \"\\F113\"\n}\n\n.fa-folder-o:before {\n    content: \"\\F114\"\n}\n\n.fa-folder-open-o:before {\n    content: \"\\F115\"\n}\n\n.fa-smile-o:before {\n    content: \"\\F118\"\n}\n\n.fa-frown-o:before {\n    content: \"\\F119\"\n}\n\n.fa-meh-o:before {\n    content: \"\\F11A\"\n}\n\n.fa-gamepad:before {\n    content: \"\\F11B\"\n}\n\n.fa-keyboard-o:before {\n    content: \"\\F11C\"\n}\n\n.fa-flag-o:before {\n    content: \"\\F11D\"\n}\n\n.fa-flag-checkered:before {\n    content: \"\\F11E\"\n}\n\n.fa-terminal:before {\n    content: \"\\F120\"\n}\n\n.fa-code:before {\n    content: \"\\F121\"\n}\n\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n    content: \"\\F122\"\n}\n\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n    content: \"\\F123\"\n}\n\n.fa-location-arrow:before {\n    content: \"\\F124\"\n}\n\n.fa-crop:before {\n    content: \"\\F125\"\n}\n\n.fa-code-fork:before {\n    content: \"\\F126\"\n}\n\n.fa-unlink:before,\n.fa-chain-broken:before {\n    content: \"\\F127\"\n}\n\n.fa-question:before {\n    content: \"\\F128\"\n}\n\n.fa-info:before {\n    content: \"\\F129\"\n}\n\n.fa-exclamation:before {\n    content: \"\\F12A\"\n}\n\n.fa-superscript:before {\n    content: \"\\F12B\"\n}\n\n.fa-subscript:before {\n    content: \"\\F12C\"\n}\n\n.fa-eraser:before {\n    content: \"\\F12D\"\n}\n\n.fa-puzzle-piece:before {\n    content: \"\\F12E\"\n}\n\n.fa-microphone:before {\n    content: \"\\F130\"\n}\n\n.fa-microphone-slash:before {\n    content: \"\\F131\"\n}\n\n.fa-shield:before {\n    content: \"\\F132\"\n}\n\n.fa-calendar-o:before {\n    content: \"\\F133\"\n}\n\n.fa-fire-extinguisher:before {\n    content: \"\\F134\"\n}\n\n.fa-rocket:before {\n    content: \"\\F135\"\n}\n\n.fa-maxcdn:before {\n    content: \"\\F136\"\n}\n\n.fa-chevron-circle-left:before {\n    content: \"\\F137\"\n}\n\n.fa-chevron-circle-right:before {\n    content: \"\\F138\"\n}\n\n.fa-chevron-circle-up:before {\n    content: \"\\F139\"\n}\n\n.fa-chevron-circle-down:before {\n    content: \"\\F13A\"\n}\n\n.fa-html5:before {\n    content: \"\\F13B\"\n}\n\n.fa-css3:before {\n    content: \"\\F13C\"\n}\n\n.fa-anchor:before {\n    content: \"\\F13D\"\n}\n\n.fa-unlock-alt:before {\n    content: \"\\F13E\"\n}\n\n.fa-bullseye:before {\n    content: \"\\F140\"\n}\n\n.fa-ellipsis-h:before {\n    content: \"\\F141\"\n}\n\n.fa-ellipsis-v:before {\n    content: \"\\F142\"\n}\n\n.fa-rss-square:before {\n    content: \"\\F143\"\n}\n\n.fa-play-circle:before {\n    content: \"\\F144\"\n}\n\n.fa-ticket:before {\n    content: \"\\F145\"\n}\n\n.fa-minus-square:before {\n    content: \"\\F146\"\n}\n\n.fa-minus-square-o:before {\n    content: \"\\F147\"\n}\n\n.fa-level-up:before {\n    content: \"\\F148\"\n}\n\n.fa-level-down:before {\n    content: \"\\F149\"\n}\n\n.fa-check-square:before {\n    content: \"\\F14A\"\n}\n\n.fa-pencil-square:before {\n    content: \"\\F14B\"\n}\n\n.fa-external-link-square:before {\n    content: \"\\F14C\"\n}\n\n.fa-share-square:before {\n    content: \"\\F14D\"\n}\n\n.fa-compass:before {\n    content: \"\\F14E\"\n}\n\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n    content: \"\\F150\"\n}\n\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n    content: \"\\F151\"\n}\n\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n    content: \"\\F152\"\n}\n\n.fa-euro:before,\n.fa-eur:before {\n    content: \"\\F153\"\n}\n\n.fa-gbp:before {\n    content: \"\\F154\"\n}\n\n.fa-dollar:before,\n.fa-usd:before {\n    content: \"\\F155\"\n}\n\n.fa-rupee:before,\n.fa-inr:before {\n    content: \"\\F156\"\n}\n\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n    content: \"\\F157\"\n}\n\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n    content: \"\\F158\"\n}\n\n.fa-won:before,\n.fa-krw:before {\n    content: \"\\F159\"\n}\n\n.fa-bitcoin:before,\n.fa-btc:before {\n    content: \"\\F15A\"\n}\n\n.fa-file:before {\n    content: \"\\F15B\"\n}\n\n.fa-file-text:before {\n    content: \"\\F15C\"\n}\n\n.fa-sort-alpha-asc:before {\n    content: \"\\F15D\"\n}\n\n.fa-sort-alpha-desc:before {\n    content: \"\\F15E\"\n}\n\n.fa-sort-amount-asc:before {\n    content: \"\\F160\"\n}\n\n.fa-sort-amount-desc:before {\n    content: \"\\F161\"\n}\n\n.fa-sort-numeric-asc:before {\n    content: \"\\F162\"\n}\n\n.fa-sort-numeric-desc:before {\n    content: \"\\F163\"\n}\n\n.fa-thumbs-up:before {\n    content: \"\\F164\"\n}\n\n.fa-thumbs-down:before {\n    content: \"\\F165\"\n}\n\n.fa-youtube-square:before {\n    content: \"\\F166\"\n}\n\n.fa-youtube:before {\n    content: \"\\F167\"\n}\n\n.fa-xing:before {\n    content: \"\\F168\"\n}\n\n.fa-xing-square:before {\n    content: \"\\F169\"\n}\n\n.fa-youtube-play:before {\n    content: \"\\F16A\"\n}\n\n.fa-dropbox:before {\n    content: \"\\F16B\"\n}\n\n.fa-stack-overflow:before {\n    content: \"\\F16C\"\n}\n\n.fa-instagram:before {\n    content: \"\\F16D\"\n}\n\n.fa-flickr:before {\n    content: \"\\F16E\"\n}\n\n.fa-adn:before {\n    content: \"\\F170\"\n}\n\n.fa-bitbucket:before {\n    content: \"\\F171\"\n}\n\n.fa-bitbucket-square:before {\n    content: \"\\F172\"\n}\n\n.fa-tumblr:before {\n    content: \"\\F173\"\n}\n\n.fa-tumblr-square:before {\n    content: \"\\F174\"\n}\n\n.fa-long-arrow-down:before {\n    content: \"\\F175\"\n}\n\n.fa-long-arrow-up:before {\n    content: \"\\F176\"\n}\n\n.fa-long-arrow-left:before {\n    content: \"\\F177\"\n}\n\n.fa-long-arrow-right:before {\n    content: \"\\F178\"\n}\n\n.fa-apple:before {\n    content: \"\\F179\"\n}\n\n.fa-windows:before {\n    content: \"\\F17A\"\n}\n\n.fa-android:before {\n    content: \"\\F17B\"\n}\n\n.fa-linux:before {\n    content: \"\\F17C\"\n}\n\n.fa-dribbble:before {\n    content: \"\\F17D\"\n}\n\n.fa-skype:before {\n    content: \"\\F17E\"\n}\n\n.fa-foursquare:before {\n    content: \"\\F180\"\n}\n\n.fa-trello:before {\n    content: \"\\F181\"\n}\n\n.fa-female:before {\n    content: \"\\F182\"\n}\n\n.fa-male:before {\n    content: \"\\F183\"\n}\n\n.fa-gittip:before,\n.fa-gratipay:before {\n    content: \"\\F184\"\n}\n\n.fa-sun-o:before {\n    content: \"\\F185\"\n}\n\n.fa-moon-o:before {\n    content: \"\\F186\"\n}\n\n.fa-archive:before {\n    content: \"\\F187\"\n}\n\n.fa-bug:before {\n    content: \"\\F188\"\n}\n\n.fa-vk:before {\n    content: \"\\F189\"\n}\n\n.fa-weibo:before {\n    content: \"\\F18A\"\n}\n\n.fa-renren:before {\n    content: \"\\F18B\"\n}\n\n.fa-pagelines:before {\n    content: \"\\F18C\"\n}\n\n.fa-stack-exchange:before {\n    content: \"\\F18D\"\n}\n\n.fa-arrow-circle-o-right:before {\n    content: \"\\F18E\"\n}\n\n.fa-arrow-circle-o-left:before {\n    content: \"\\F190\"\n}\n\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n    content: \"\\F191\"\n}\n\n.fa-dot-circle-o:before {\n    content: \"\\F192\"\n}\n\n.fa-wheelchair:before {\n    content: \"\\F193\"\n}\n\n.fa-vimeo-square:before {\n    content: \"\\F194\"\n}\n\n.fa-turkish-lira:before,\n.fa-try:before {\n    content: \"\\F195\"\n}\n\n.fa-plus-square-o:before {\n    content: \"\\F196\"\n}\n\n.fa-space-shuttle:before {\n    content: \"\\F197\"\n}\n\n.fa-slack:before {\n    content: \"\\F198\"\n}\n\n.fa-envelope-square:before {\n    content: \"\\F199\"\n}\n\n.fa-wordpress:before {\n    content: \"\\F19A\"\n}\n\n.fa-openid:before {\n    content: \"\\F19B\"\n}\n\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n    content: \"\\F19C\"\n}\n\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n    content: \"\\F19D\"\n}\n\n.fa-yahoo:before {\n    content: \"\\F19E\"\n}\n\n.fa-google:before {\n    content: \"\\F1A0\"\n}\n\n.fa-reddit:before {\n    content: \"\\F1A1\"\n}\n\n.fa-reddit-square:before {\n    content: \"\\F1A2\"\n}\n\n.fa-stumbleupon-circle:before {\n    content: \"\\F1A3\"\n}\n\n.fa-stumbleupon:before {\n    content: \"\\F1A4\"\n}\n\n.fa-delicious:before {\n    content: \"\\F1A5\"\n}\n\n.fa-digg:before {\n    content: \"\\F1A6\"\n}\n\n.fa-pied-piper:before {\n    content: \"\\F1A7\"\n}\n\n.fa-pied-piper-alt:before {\n    content: \"\\F1A8\"\n}\n\n.fa-drupal:before {\n    content: \"\\F1A9\"\n}\n\n.fa-joomla:before {\n    content: \"\\F1AA\"\n}\n\n.fa-language:before {\n    content: \"\\F1AB\"\n}\n\n.fa-fax:before {\n    content: \"\\F1AC\"\n}\n\n.fa-building:before {\n    content: \"\\F1AD\"\n}\n\n.fa-child:before {\n    content: \"\\F1AE\"\n}\n\n.fa-paw:before {\n    content: \"\\F1B0\"\n}\n\n.fa-spoon:before {\n    content: \"\\F1B1\"\n}\n\n.fa-cube:before {\n    content: \"\\F1B2\"\n}\n\n.fa-cubes:before {\n    content: \"\\F1B3\"\n}\n\n.fa-behance:before {\n    content: \"\\F1B4\"\n}\n\n.fa-behance-square:before {\n    content: \"\\F1B5\"\n}\n\n.fa-steam:before {\n    content: \"\\F1B6\"\n}\n\n.fa-steam-square:before {\n    content: \"\\F1B7\"\n}\n\n.fa-recycle:before {\n    content: \"\\F1B8\"\n}\n\n.fa-automobile:before,\n.fa-car:before {\n    content: \"\\F1B9\"\n}\n\n.fa-cab:before,\n.fa-taxi:before {\n    content: \"\\F1BA\"\n}\n\n.fa-tree:before {\n    content: \"\\F1BB\"\n}\n\n.fa-spotify:before {\n    content: \"\\F1BC\"\n}\n\n.fa-deviantart:before {\n    content: \"\\F1BD\"\n}\n\n.fa-soundcloud:before {\n    content: \"\\F1BE\"\n}\n\n.fa-database:before {\n    content: \"\\F1C0\"\n}\n\n.fa-file-pdf-o:before {\n    content: \"\\F1C1\"\n}\n\n.fa-file-word-o:before {\n    content: \"\\F1C2\"\n}\n\n.fa-file-excel-o:before {\n    content: \"\\F1C3\"\n}\n\n.fa-file-powerpoint-o:before {\n    content: \"\\F1C4\"\n}\n\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n    content: \"\\F1C5\"\n}\n\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n    content: \"\\F1C6\"\n}\n\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n    content: \"\\F1C7\"\n}\n\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n    content: \"\\F1C8\"\n}\n\n.fa-file-code-o:before {\n    content: \"\\F1C9\"\n}\n\n.fa-vine:before {\n    content: \"\\F1CA\"\n}\n\n.fa-codepen:before {\n    content: \"\\F1CB\"\n}\n\n.fa-jsfiddle:before {\n    content: \"\\F1CC\"\n}\n\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n    content: \"\\F1CD\"\n}\n\n.fa-circle-o-notch:before {\n    content: \"\\F1CE\"\n}\n\n.fa-ra:before,\n.fa-rebel:before {\n    content: \"\\F1D0\"\n}\n\n.fa-ge:before,\n.fa-empire:before {\n    content: \"\\F1D1\"\n}\n\n.fa-git-square:before {\n    content: \"\\F1D2\"\n}\n\n.fa-git:before {\n    content: \"\\F1D3\"\n}\n\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n    content: \"\\F1D4\"\n}\n\n.fa-tencent-weibo:before {\n    content: \"\\F1D5\"\n}\n\n.fa-qq:before {\n    content: \"\\F1D6\"\n}\n\n.fa-wechat:before,\n.fa-weixin:before {\n    content: \"\\F1D7\"\n}\n\n.fa-send:before,\n.fa-paper-plane:before {\n    content: \"\\F1D8\"\n}\n\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n    content: \"\\F1D9\"\n}\n\n.fa-history:before {\n    content: \"\\F1DA\"\n}\n\n.fa-circle-thin:before {\n    content: \"\\F1DB\"\n}\n\n.fa-header:before {\n    content: \"\\F1DC\"\n}\n\n.fa-paragraph:before {\n    content: \"\\F1DD\"\n}\n\n.fa-sliders:before {\n    content: \"\\F1DE\"\n}\n\n.fa-share-alt:before {\n    content: \"\\F1E0\"\n}\n\n.fa-share-alt-square:before {\n    content: \"\\F1E1\"\n}\n\n.fa-bomb:before {\n    content: \"\\F1E2\"\n}\n\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n    content: \"\\F1E3\"\n}\n\n.fa-tty:before {\n    content: \"\\F1E4\"\n}\n\n.fa-binoculars:before {\n    content: \"\\F1E5\"\n}\n\n.fa-plug:before {\n    content: \"\\F1E6\"\n}\n\n.fa-slideshare:before {\n    content: \"\\F1E7\"\n}\n\n.fa-twitch:before {\n    content: \"\\F1E8\"\n}\n\n.fa-yelp:before {\n    content: \"\\F1E9\"\n}\n\n.fa-newspaper-o:before {\n    content: \"\\F1EA\"\n}\n\n.fa-wifi:before {\n    content: \"\\F1EB\"\n}\n\n.fa-calculator:before {\n    content: \"\\F1EC\"\n}\n\n.fa-paypal:before {\n    content: \"\\F1ED\"\n}\n\n.fa-google-wallet:before {\n    content: \"\\F1EE\"\n}\n\n.fa-cc-visa:before {\n    content: \"\\F1F0\"\n}\n\n.fa-cc-mastercard:before {\n    content: \"\\F1F1\"\n}\n\n.fa-cc-discover:before {\n    content: \"\\F1F2\"\n}\n\n.fa-cc-amex:before {\n    content: \"\\F1F3\"\n}\n\n.fa-cc-paypal:before {\n    content: \"\\F1F4\"\n}\n\n.fa-cc-stripe:before {\n    content: \"\\F1F5\"\n}\n\n.fa-bell-slash:before {\n    content: \"\\F1F6\"\n}\n\n.fa-bell-slash-o:before {\n    content: \"\\F1F7\"\n}\n\n.fa-trash:before {\n    content: \"\\F1F8\"\n}\n\n.fa-copyright:before {\n    content: \"\\F1F9\"\n}\n\n.fa-at:before {\n    content: \"\\F1FA\"\n}\n\n.fa-eyedropper:before {\n    content: \"\\F1FB\"\n}\n\n.fa-paint-brush:before {\n    content: \"\\F1FC\"\n}\n\n.fa-birthday-cake:before {\n    content: \"\\F1FD\"\n}\n\n.fa-area-chart:before {\n    content: \"\\F1FE\"\n}\n\n.fa-pie-chart:before {\n    content: \"\\F200\"\n}\n\n.fa-line-chart:before {\n    content: \"\\F201\"\n}\n\n.fa-lastfm:before {\n    content: \"\\F202\"\n}\n\n.fa-lastfm-square:before {\n    content: \"\\F203\"\n}\n\n.fa-toggle-off:before {\n    content: \"\\F204\"\n}\n\n.fa-toggle-on:before {\n    content: \"\\F205\"\n}\n\n.fa-bicycle:before {\n    content: \"\\F206\"\n}\n\n.fa-bus:before {\n    content: \"\\F207\"\n}\n\n.fa-ioxhost:before {\n    content: \"\\F208\"\n}\n\n.fa-angellist:before {\n    content: \"\\F209\"\n}\n\n.fa-cc:before {\n    content: \"\\F20A\"\n}\n\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n    content: \"\\F20B\"\n}\n\n.fa-meanpath:before {\n    content: \"\\F20C\"\n}\n\n.fa-buysellads:before {\n    content: \"\\F20D\"\n}\n\n.fa-connectdevelop:before {\n    content: \"\\F20E\"\n}\n\n.fa-dashcube:before {\n    content: \"\\F210\"\n}\n\n.fa-forumbee:before {\n    content: \"\\F211\"\n}\n\n.fa-leanpub:before {\n    content: \"\\F212\"\n}\n\n.fa-sellsy:before {\n    content: \"\\F213\"\n}\n\n.fa-shirtsinbulk:before {\n    content: \"\\F214\"\n}\n\n.fa-simplybuilt:before {\n    content: \"\\F215\"\n}\n\n.fa-skyatlas:before {\n    content: \"\\F216\"\n}\n\n.fa-cart-plus:before {\n    content: \"\\F217\"\n}\n\n.fa-cart-arrow-down:before {\n    content: \"\\F218\"\n}\n\n.fa-diamond:before {\n    content: \"\\F219\"\n}\n\n.fa-ship:before {\n    content: \"\\F21A\"\n}\n\n.fa-user-secret:before {\n    content: \"\\F21B\"\n}\n\n.fa-motorcycle:before {\n    content: \"\\F21C\"\n}\n\n.fa-street-view:before {\n    content: \"\\F21D\"\n}\n\n.fa-heartbeat:before {\n    content: \"\\F21E\"\n}\n\n.fa-venus:before {\n    content: \"\\F221\"\n}\n\n.fa-mars:before {\n    content: \"\\F222\"\n}\n\n.fa-mercury:before {\n    content: \"\\F223\"\n}\n\n.fa-intersex:before,\n.fa-transgender:before {\n    content: \"\\F224\"\n}\n\n.fa-transgender-alt:before {\n    content: \"\\F225\"\n}\n\n.fa-venus-double:before {\n    content: \"\\F226\"\n}\n\n.fa-mars-double:before {\n    content: \"\\F227\"\n}\n\n.fa-venus-mars:before {\n    content: \"\\F228\"\n}\n\n.fa-mars-stroke:before {\n    content: \"\\F229\"\n}\n\n.fa-mars-stroke-v:before {\n    content: \"\\F22A\"\n}\n\n.fa-mars-stroke-h:before {\n    content: \"\\F22B\"\n}\n\n.fa-neuter:before {\n    content: \"\\F22C\"\n}\n\n.fa-genderless:before {\n    content: \"\\F22D\"\n}\n\n.fa-facebook-official:before {\n    content: \"\\F230\"\n}\n\n.fa-pinterest-p:before {\n    content: \"\\F231\"\n}\n\n.fa-whatsapp:before {\n    content: \"\\F232\"\n}\n\n.fa-server:before {\n    content: \"\\F233\"\n}\n\n.fa-user-plus:before {\n    content: \"\\F234\"\n}\n\n.fa-user-times:before {\n    content: \"\\F235\"\n}\n\n.fa-hotel:before,\n.fa-bed:before {\n    content: \"\\F236\"\n}\n\n.fa-viacoin:before {\n    content: \"\\F237\"\n}\n\n.fa-train:before {\n    content: \"\\F238\"\n}\n\n.fa-subway:before {\n    content: \"\\F239\"\n}\n\n.fa-medium:before {\n    content: \"\\F23A\"\n}\n\n.fa-yc:before,\n.fa-y-combinator:before {\n    content: \"\\F23B\"\n}\n\n.fa-optin-monster:before {\n    content: \"\\F23C\"\n}\n\n.fa-opencart:before {\n    content: \"\\F23D\"\n}\n\n.fa-expeditedssl:before {\n    content: \"\\F23E\"\n}\n\n.fa-battery-4:before,\n.fa-battery-full:before {\n    content: \"\\F240\"\n}\n\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n    content: \"\\F241\"\n}\n\n.fa-battery-2:before,\n.fa-battery-half:before {\n    content: \"\\F242\"\n}\n\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n    content: \"\\F243\"\n}\n\n.fa-battery-0:before,\n.fa-battery-empty:before {\n    content: \"\\F244\"\n}\n\n.fa-mouse-pointer:before {\n    content: \"\\F245\"\n}\n\n.fa-i-cursor:before {\n    content: \"\\F246\"\n}\n\n.fa-object-group:before {\n    content: \"\\F247\"\n}\n\n.fa-object-ungroup:before {\n    content: \"\\F248\"\n}\n\n.fa-sticky-note:before {\n    content: \"\\F249\"\n}\n\n.fa-sticky-note-o:before {\n    content: \"\\F24A\"\n}\n\n.fa-cc-jcb:before {\n    content: \"\\F24B\"\n}\n\n.fa-cc-diners-club:before {\n    content: \"\\F24C\"\n}\n\n.fa-clone:before {\n    content: \"\\F24D\"\n}\n\n.fa-balance-scale:before {\n    content: \"\\F24E\"\n}\n\n.fa-hourglass-o:before {\n    content: \"\\F250\"\n}\n\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n    content: \"\\F251\"\n}\n\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n    content: \"\\F252\"\n}\n\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n    content: \"\\F253\"\n}\n\n.fa-hourglass:before {\n    content: \"\\F254\"\n}\n\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n    content: \"\\F255\"\n}\n\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n    content: \"\\F256\"\n}\n\n.fa-hand-scissors-o:before {\n    content: \"\\F257\"\n}\n\n.fa-hand-lizard-o:before {\n    content: \"\\F258\"\n}\n\n.fa-hand-spock-o:before {\n    content: \"\\F259\"\n}\n\n.fa-hand-pointer-o:before {\n    content: \"\\F25A\"\n}\n\n.fa-hand-peace-o:before {\n    content: \"\\F25B\"\n}\n\n.fa-trademark:before {\n    content: \"\\F25C\"\n}\n\n.fa-registered:before {\n    content: \"\\F25D\"\n}\n\n.fa-creative-commons:before {\n    content: \"\\F25E\"\n}\n\n.fa-gg:before {\n    content: \"\\F260\"\n}\n\n.fa-gg-circle:before {\n    content: \"\\F261\"\n}\n\n.fa-tripadvisor:before {\n    content: \"\\F262\"\n}\n\n.fa-odnoklassniki:before {\n    content: \"\\F263\"\n}\n\n.fa-odnoklassniki-square:before {\n    content: \"\\F264\"\n}\n\n.fa-get-pocket:before {\n    content: \"\\F265\"\n}\n\n.fa-wikipedia-w:before {\n    content: \"\\F266\"\n}\n\n.fa-safari:before {\n    content: \"\\F267\"\n}\n\n.fa-chrome:before {\n    content: \"\\F268\"\n}\n\n.fa-firefox:before {\n    content: \"\\F269\"\n}\n\n.fa-opera:before {\n    content: \"\\F26A\"\n}\n\n.fa-internet-explorer:before {\n    content: \"\\F26B\"\n}\n\n.fa-tv:before,\n.fa-television:before {\n    content: \"\\F26C\"\n}\n\n.fa-contao:before {\n    content: \"\\F26D\"\n}\n\n.fa-500px:before {\n    content: \"\\F26E\"\n}\n\n.fa-amazon:before {\n    content: \"\\F270\"\n}\n\n.fa-calendar-plus-o:before {\n    content: \"\\F271\"\n}\n\n.fa-calendar-minus-o:before {\n    content: \"\\F272\"\n}\n\n.fa-calendar-times-o:before {\n    content: \"\\F273\"\n}\n\n.fa-calendar-check-o:before {\n    content: \"\\F274\"\n}\n\n.fa-industry:before {\n    content: \"\\F275\"\n}\n\n.fa-map-pin:before {\n    content: \"\\F276\"\n}\n\n.fa-map-signs:before {\n    content: \"\\F277\"\n}\n\n.fa-map-o:before {\n    content: \"\\F278\"\n}\n\n.fa-map:before {\n    content: \"\\F279\"\n}\n\n.fa-commenting:before {\n    content: \"\\F27A\"\n}\n\n.fa-commenting-o:before {\n    content: \"\\F27B\"\n}\n\n.fa-houzz:before {\n    content: \"\\F27C\"\n}\n\n.fa-vimeo:before {\n    content: \"\\F27D\"\n}\n\n.fa-black-tie:before {\n    content: \"\\F27E\"\n}\n\n.fa-fonticons:before {\n    content: \"\\F280\"\n}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/* Magnific Popup CSS */\n.mfp-bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1042;\n  overflow: hidden;\n  position: fixed;\n  background: #0b0b0b;\n  opacity: 0.8;\n  filter: alpha(opacity=80); }\n\n.mfp-wrap {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1043;\n  position: fixed;\n  outline: none !important;\n  -webkit-backface-visibility: hidden; }\n\n.mfp-container {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 8px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.mfp-container:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n.mfp-align-top .mfp-container:before {\n  display: none; }\n\n.mfp-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  text-align: left;\n  z-index: 1045; }\n\n.mfp-inline-holder .mfp-content, .mfp-ajax-holder .mfp-content {\n  width: 100%;\n  cursor: auto; }\n\n.mfp-ajax-cur {\n  cursor: progress; }\n\n.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {\n  cursor: -moz-zoom-out;\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out; }\n\n.mfp-zoom {\n  cursor: pointer;\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.mfp-auto-cursor .mfp-content {\n  cursor: auto; }\n\n.mfp-close, .mfp-arrow, .mfp-preloader, .mfp-counter {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.mfp-loading.mfp-figure {\n  display: none; }\n\n.mfp-hide {\n  display: none !important; }\n\n.mfp-preloader {\n  color: #CCC;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  text-align: center;\n  margin-top: -0.8em;\n  left: 8px;\n  right: 8px;\n  z-index: 1044; }\n  .mfp-preloader a {\n    color: #CCC; }\n    .mfp-preloader a:hover {\n      color: #FFF; }\n\n.mfp-s-ready .mfp-preloader {\n  display: none; }\n\n.mfp-s-error .mfp-content {\n  display: none; }\n\nbutton.mfp-close, button.mfp-arrow {\n  overflow: visible;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  display: block;\n  outline: none;\n  padding: 0;\n  z-index: 1046;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n.mfp-close {\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-decoration: none;\n  text-align: center;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  padding: 0 0 18px 10px;\n  color: #FFF;\n  font-style: normal;\n  font-size: 28px;\n  font-family: Arial, Baskerville, monospace; }\n  .mfp-close:hover, .mfp-close:focus {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .mfp-close:active {\n    top: 1px; }\n\n.mfp-close-btn-in .mfp-close {\n  color: #333; }\n\n.mfp-image-holder .mfp-close, .mfp-iframe-holder .mfp-close {\n  color: #FFF;\n  right: -6px;\n  text-align: right;\n  padding-right: 6px;\n  width: 100%; }\n\n.mfp-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #CCC;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap; }\n\n.mfp-arrow {\n  position: absolute;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  margin: 0;\n  top: 50%;\n  margin-top: -55px;\n  padding: 0;\n  width: 90px;\n  height: 110px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n  .mfp-arrow:active {\n    margin-top: -54px; }\n  .mfp-arrow:hover, .mfp-arrow:focus {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .mfp-arrow:before, .mfp-arrow:after, .mfp-arrow .mfp-b, .mfp-arrow .mfp-a {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-top: 35px;\n    margin-left: 35px;\n    border: medium inset transparent; }\n  .mfp-arrow:after, .mfp-arrow .mfp-a {\n    border-top-width: 13px;\n    border-bottom-width: 13px;\n    top: 8px; }\n  .mfp-arrow:before, .mfp-arrow .mfp-b {\n    border-top-width: 21px;\n    border-bottom-width: 21px;\n    opacity: 0.7; }\n\n.mfp-arrow-left {\n  left: 0; }\n  .mfp-arrow-left:after, .mfp-arrow-left .mfp-a {\n    border-right: 17px solid #FFF;\n    margin-left: 31px; }\n  .mfp-arrow-left:before, .mfp-arrow-left .mfp-b {\n    margin-left: 25px;\n    border-right: 27px solid #3F3F3F; }\n\n.mfp-arrow-right {\n  right: 0; }\n  .mfp-arrow-right:after, .mfp-arrow-right .mfp-a {\n    border-left: 17px solid #FFF;\n    margin-left: 39px; }\n  .mfp-arrow-right:before, .mfp-arrow-right .mfp-b {\n    border-left: 27px solid #3F3F3F; }\n\n.mfp-iframe-holder {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n  .mfp-iframe-holder .mfp-content {\n    line-height: 0;\n    width: 100%;\n    max-width: 900px; }\n  .mfp-iframe-holder .mfp-close {\n    top: -40px; }\n\n.mfp-iframe-scaler {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%; }\n  .mfp-iframe-scaler iframe {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #000; }\n\n/* Main image in popup */\nimg.mfp-img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 40px 0 40px;\n  margin: 0 auto; }\n\n/* The shadow behind the image */\n.mfp-figure {\n  line-height: 0; }\n  .mfp-figure:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 40px;\n    bottom: 40px;\n    display: block;\n    right: 0;\n    width: auto;\n    height: auto;\n    z-index: -1;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #444; }\n  .mfp-figure small {\n    color: #BDBDBD;\n    display: block;\n    font-size: 12px;\n    line-height: 14px; }\n  .mfp-figure figure {\n    margin: 0; }\n\n.mfp-bottom-bar {\n  margin-top: -36px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  cursor: auto; }\n\n.mfp-title {\n  text-align: left;\n  line-height: 18px;\n  color: #F3F3F3;\n  word-wrap: break-word;\n  padding-right: 36px; }\n\n.mfp-image-holder .mfp-content {\n  max-width: 100%; }\n\n.mfp-gallery .mfp-image-holder .mfp-figure {\n  cursor: pointer; }\n\n@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {\n  /**\n       * Remove all paddings around the image on small screen\n       */\n  .mfp-img-mobile .mfp-image-holder {\n    padding-left: 0;\n    padding-right: 0; }\n  .mfp-img-mobile img.mfp-img {\n    padding: 0; }\n  .mfp-img-mobile .mfp-figure:after {\n    top: 0;\n    bottom: 0; }\n  .mfp-img-mobile .mfp-figure small {\n    display: inline;\n    margin-left: 5px; }\n  .mfp-img-mobile .mfp-bottom-bar {\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    margin: 0;\n    top: auto;\n    padding: 3px 5px;\n    position: fixed;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box; }\n    .mfp-img-mobile .mfp-bottom-bar:empty {\n      padding: 0; }\n  .mfp-img-mobile .mfp-counter {\n    right: 5px;\n    top: 3px; }\n  .mfp-img-mobile .mfp-close {\n    top: 0;\n    right: 0;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    text-align: center;\n    padding: 0; }\n }\n\n@media all and (max-width: 900px) {\n  .mfp-arrow {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75); }\n\n  .mfp-arrow-left {\n    -webkit-transform-origin: 0;\n    transform-origin: 0; }\n\n  .mfp-arrow-right {\n    -webkit-transform-origin: 100%;\n    transform-origin: 100%; }\n\n  .mfp-container {\n    padding-left: 6px;\n    padding-right: 6px; }\n }\n\n.mfp-ie7 .mfp-img {\n  padding: 0; }\n.mfp-ie7 .mfp-bottom-bar {\n  width: 600px;\n  left: 50%;\n  margin-left: -300px;\n  margin-top: 5px;\n  padding-bottom: 5px; }\n.mfp-ie7 .mfp-container {\n  padding: 0; }\n.mfp-ie7 .mfp-content {\n  padding-top: 44px; }\n.mfp-ie7 .mfp-close {\n  top: 0;\n  right: 0;\n  padding-top: 0; }\n", ""]);

// exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\r\n/* ==========================================================================\r\n   Table Of Content\r\n   ==========================================================================\r\n\r\n\r\n   1.General\r\n   2.Hero section\r\n   3.Navbar\r\n   4.Play button\r\n   5.Featured on\r\n   6.Benefits\r\n   7.Features\r\n   8.video tour\r\n   9.tour\r\n   10.Pricing\r\n   11.reviews\r\n   12.cta section\r\n   13.Team\r\n   14.Twitter feed\r\n   15.Contact us\r\n   16.Subscription form styles\r\n   17.site footer\r\n   18.Social\r\n   19.Small devices (tablets, 768px and up)\r\n   20.Medium devices (desktops, 992px and up)\r\n\r\n*/\r\n\r\n\r\n/* ==========================================================================\r\n   1.General\r\n   ========================================================================== */\r\n\r\nbody {\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  line-height: 1.5;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  overflow-x: hidden;\r\n}\r\n\r\np {\r\n  font-weight: 400;\r\n  color: #4c4c4c;\r\n  font-size: 17px;\r\n  text-align: center;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-weight: 600;\r\n  color: #4c4c4c;\r\n}\r\n\r\nh4 {\r\n  font-size: 20px;\r\n  margin: 12px 0;\r\n}\r\n\r\na {\r\n  color: #1A8B8A;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n  color: #136665;\r\n  text-decoration: none;\r\n}\r\n\r\na:focus { outline: none; }\r\n\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nb,\r\nstrong { font-weight: 600; }\r\n\r\n/* ==========================================================================\r\n   2.Hero section\r\n   ========================================================================== */\r\n\r\n.hero-section {\r\n  background: url(" + __webpack_require__(32) + ") center center no-repeat scroll;\r\n  background-size: cover;\r\n  padding: 0 0 4.5em;\r\n  position: relative;\r\n  color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n.hero-section::before,\r\n.video-tour::before,\r\n.pricing::before,\r\n.twitter-feed::before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.hero-section::before { background: rgba(0, 0, 0, 0.3); }\r\n\r\n.welcome-message { margin-top: 4.5em; }\r\n\r\n.welcome-message h1 {\r\n  font-size: 36px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  margin: 0 0 24px;\r\n}\r\n\r\n.welcome-message h2 {\r\n  font-size: 22px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}\r\n\r\n.btn {\r\n  padding: 1em 3em;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  background-color: #1A8B8A;\r\n  line-height: 1.5;\r\n  border: none;\r\n  border-radius: 3px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  color: #fff;\r\n  background-color: #136665;\r\n}\r\n\r\n.btn:active,\r\n.btn:focus,\r\n.btn:active:hover,\r\n.btn:active:focus {\r\n  color: #fff;\r\n  outline: none;\r\n  background-color: #136665;\r\n}\r\n\r\n.cta-btn p {\r\n  color: #fff;\r\n  margin: .75em 0 0;\r\n  font-size: 18px;\r\n}\r\n\r\n/* ==========================================================================\r\n   3.Navbar\r\n   ========================================================================== */\r\n\r\n.navbar-default {\r\n  background-color: rgba(255, 255, 255, 0.97);\r\n  border: none;\r\n  margin-bottom: 0;\r\n  border-radius: 0;\r\n  padding: .75em 0;\r\n}\r\n\r\n.nav > li { text-align: center; }\r\n\r\n.nav > li > a > i { padding-right: .2em; }\r\n\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #1A8B8A;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.navbar-default .navbar-toggle:hover .icon-bar,\r\n.navbar-default .navbar-toggle:focus .icon-bar { background-color: #fff; }\r\n\r\n.navbar-brand { padding: 0 0 0 1em; }\r\n\r\n.navbar-brand .logo-nav,\r\n.nav-left { display: none; }\r\n\r\n.navbar-default.stuck .logo-head { display: none; }\r\n\r\n.navbar-default.stuck .logo-nav,\r\n.navbar-default.stuck .nav-left { display: block; }\r\n\r\n.navbar-default .navbar-nav>li>a,\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus { color: #fff; }\r\n\r\n.navbar-default.stuck .navbar-nav>li>a { color: #4c4c4c; }\r\n\r\n.navbar-default.stuck .navbar-nav > li > a:hover,\r\n.navbar-default.stuck .navbar-nav > li > a:focus { color: #136665; }\r\n\r\n.navbar-default .btn { font-size: 16px; }\r\n\r\n.navbar-default.stuck .navbar-nav .btn {\r\n  display: inline-block;\r\n  background: #1A8B8A;\r\n  color: #fff;\r\n  border: 1px solid #1A8B8A;\r\n}\r\n\r\n.navbar-default.stuck .navbar-nav .btn:hover,\r\n.navbar-default.stuck .navbar-nav .btn:focus {\r\n  background: #136665!important;\r\n  color: #fff;\r\n}\r\n\r\n.navbar-default.stuck {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  background-color: rgba(255, 255, 255, 0.97);\r\n  box-shadow: 0 1px 12px 0px rgba(51, 51, 51, 0.23);\r\n  -webkit-animation: fadeInDown 1s both;\r\n  animation: fadeInDown 1s both;\r\n}\r\n @-webkit-keyframes fadeInDown {\r\n0% {\r\nopacity:0;\r\n-webkit-transform:translateY(-20px);\r\ntransform:translateY(-20px);\r\n}\r\n100% {\r\nopacity:1;\r\n-webkit-transform:translateY(0);\r\ntransform:translateY(0);\r\n}\r\n}\r\n@keyframes fadeInDown {\r\n0% {\r\nopacity:0;\r\n-webkit-transform:translateY(-20px);\r\n-ms-transform:translateY(-20px);\r\ntransform:translateY(-20px);\r\n}\r\n100% {\r\nopacity:1;\r\n-webkit-transform:translateY(0);\r\n-ms-transform:translateY(0);\r\ntransform:translateY(0);\r\n}\r\n}\r\n\r\n/* ==========================================================================\r\n   4.Play button\r\n   ========================================================================== */\r\n\r\n\r\n.play-btn { margin: 2.25em 0; }\r\n\r\n.hero-section .play-btn img { transition: opacity 0.3s linear; }\r\n\r\n.play-btn img:hover { opacity: .8; }\r\n\r\n/* ==========================================================================\r\n   5.Featured on\r\n   ========================================================================== */\r\n\r\n\r\n\r\n.section-header { margin-bottom: 3em; }\r\n\r\n.section-header h2 {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  margin-top: 0;\r\n}\r\n\r\n.section-header h3 {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  margin: 0;\r\n}\r\n\r\n.featured-on,\r\n.features,\r\n.tour,\r\n.site-footer { background-color: rgba(0, 0, 0, 0.03); }\r\n\r\n.section-spacing,\r\n.section-spacing.featured-on,\r\n.section-spacing.tour,\r\n.section-spacing.site-footer { padding: 3.75em 0; }\r\n\r\n.featured-on .section-header { margin-bottom: 1.5em; }\r\n\r\n.featured-sites li { padding: 0 3em 1.5em; }\r\n\r\n.featured-sites li:last-child { padding-bottom: 0; }\r\n\r\n.featured-sites img {\r\n  opacity: .15;\r\n  transition: all 0.5s linear;\r\n}\r\n\r\n.featured-sites img:hover { opacity: .2; }\r\n\r\n/* ==========================================================================\r\n   6.Benefits\r\n   ========================================================================== */\r\n\r\n\r\n\r\n.benefits img { margin-bottom: .75em; }\r\n\r\n.benefits p { color: #8A8A8A; }\r\n\r\n.benefits div[class^=\"col-\"]:nth-child(1),\r\n.benefits div[class^=\"col-\"]:nth-child(2),\r\n.reviews div[class^=\"col-\"]:nth-child(1),\r\n.reviews div[class^=\"col-\"]:nth-child(2),\r\n.team div[class^=\"col-\"]:nth-child(1),\r\n.team div[class^=\"col-\"]:nth-child(2) { padding-bottom: 1.5em; }\r\n\r\n.benefits div[class^=\"col-\"] > p:last-child { margin-bottom: 0; }\r\n\r\n/* ==========================================================================\r\n   7.Features\r\n   ========================================================================== */\r\n\r\n.features { overflow-x: hidden; }\r\n\r\n.features div[class=\"row\"]:nth-child(1),\r\n.features div[class=\"row\"]:nth-child(2) { margin-bottom: 3em; }\r\n.features div[class=\"row\"]:nth-child(4) .col-md-7 img { padding-top: 2.25em; }\r\n\r\n.features article { margin-top: 1.5em; }\r\n\r\n.features article h2 {\r\n  font-size: 24px;\r\n  margin: 24px 0 12px;\r\n  text-align: center;\r\n}\r\n\r\n.features article li {\r\n  font-size: 17px;\r\n  color: #8A8A8A;\r\n  padding-left: 1em;\r\n  text-indent: -.7em;\r\n  padding-bottom: .2em;\r\n}\r\n\r\n.features article li:last-child { padding-bottom: 0; }\r\n\r\n.features article li:before {\r\n  content: \"\\2022   \";\r\n  color: #1A8B8A;\r\n  padding-right: .5em;\r\n}\r\n\r\n.features div[class=\"row\"]:nth-child(3) .col-md-4 article { margin-bottom: 1.5em; }\r\n\r\n/* ==========================================================================\r\n   8.video tour\r\n   ========================================================================== */\r\n\r\n.video-tour {\r\n  position: relative;\r\n  height: 400px;\r\n  overflow: hidden;\r\n  background: #333 url(" + __webpack_require__(31) + ") center center no-repeat scroll;\r\n  background-size: cover;\r\n  -webkit-perspective: 1000;\r\n  perspective: 1000;\r\n}\r\n\r\n.video-tour::before {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n}\r\n\r\n.video-tour h2 {\r\n  font-size: 24px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#bgvid-hero,\r\n#bgvid {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: auto;\r\n  height: auto;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  z-index: -1;\r\n  display: none;\r\n  object-fit: cover;\r\n}\r\n\r\n.video-tour .play-btn {\r\n  position: absolute;\r\n  z-index: 3;\r\n  left: 50%;\r\n  top: 50%;\r\n  bottom: auto;\r\n  right: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  -ms-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n  margin: 0;\r\n}\r\n\r\n/* ==========================================================================\r\n   9.tour\r\n   ========================================================================== */\r\n\r\n.center-block { float: none; }\r\n\r\n.tour h2 {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  margin: 0;\r\n}\r\n\r\n.tour .btn {\r\n  margin-top: 1em;\r\n  vertical-align: initial;\r\n}\r\n\r\n.tour .btn i,\r\n.sub-form .btn i { padding-left: .5em; }\r\n\r\n/* ==========================================================================\r\n   10.Pricing\r\n   ========================================================================== */\r\n\r\n.pricing {\r\n  background: url(" + __webpack_require__(29) + ") center center no-repeat scroll;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.pricing::before { background: rgba(0, 0, 0, 0.30); }\r\n\r\n.pricing .section-header h2,\r\n.pricing .section-header h3 {\r\n  position: relative;\r\n  color: #fff;\r\n}\r\n\r\n.plan {\r\n  background-color: #fff;\r\n  width: 350px;\r\n  display: inline-block;\r\n  margin: 0 0 1.5em;\r\n  max-width: 100%;\r\n}\r\n\r\n.plan:last-child { margin-bottom: 0; }\r\n\r\n.plan .header,\r\n.price,\r\n.plan-features { padding: 1.5em 1em; }\r\n\r\n.plan .header h4 {\r\n  font-size: 21px;\r\n  margin: 0;\r\n}\r\n\r\n.price {\r\n  background-color: #43c5b8;\r\n  color: #fff;\r\n}\r\n\r\n.price-amount {\r\n  font-size: 110px;\r\n  line-height: 1;\r\n}\r\n\r\n.period { font-size: 30px; }\r\n\r\n.currency {\r\n  font-size: 30px;\r\n  vertical-align: top;\r\n  top: 30px;\r\n}\r\n\r\n.plan-features li {\r\n  padding-bottom: .75em;\r\n  font-size: 17px;\r\n}\r\n\r\n.plan-features li:last-child { padding-bottom: 0; }\r\n\r\n.plan-features li span { font-weight: 700; }\r\n\r\n.plan-features li i {\r\n  padding-left: .5em;\r\n  color: #1A8B8A;\r\n}\r\n\r\n.buy-button { padding-bottom: 1.5em; }\r\n\r\n.buy-button p {\r\n  margin: 12px 0 0;\r\n  font-weight: 300;\r\n}\r\n\r\n/* ==========================================================================\r\n  11.reviews\r\n   ========================================================================== */\r\n\r\n.reviews figure { margin-bottom: 1.5em; }\r\n\r\nblockquote {\r\n  padding: 0 0 0 3em;\r\n  margin: 0;\r\n  border-left: none;\r\n  position: relative;\r\n}\r\n\r\nblockquote::before {\r\n  content: \"\\201C\";\r\n  color: #e9e9e9;\r\n  position: absolute;\r\n  left: -12px;\r\n  top: -50px;\r\n  font-size: 128px;\r\n}\r\n\r\nblockquote p {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\nblockquote cite {\r\n  font-size: 17.5px;\r\n  font-weight: 400;\r\n  color: #AEAFAF;\r\n  font-style: normal;\r\n}\r\n\r\n/* ==========================================================================\r\n  12.cta section\r\n   ========================================================================== */\r\n\r\n.cta-section { background-color: #1A8B8A; }\r\n\r\n.cta-section .section-header { margin-bottom: 2.25em; }\r\n\r\n.cta-section h2 {\r\n  font-size: 40px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n}\r\n\r\n.cta-section .section-header h3 {\r\n  font-size: 24px;\r\n  font-weight: 300;\r\n  color: #fff;\r\n}\r\n\r\n.cta-section .btn {\r\n  background-color: #fff;\r\n  color: #1A8B8A;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.cta-section .btn:hover {\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.cta-section p {\r\n  color: #fff;\r\n  margin: .75em 0 0;\r\n}\r\n\r\n.cta-section a[href^=\"tel\"] { color: #fff; }\r\n\r\n.cta-section a[href^=\"tel\"]:hover {\r\n  color: #fff;\r\n  text-decoration: underline;\r\n}\r\n\r\n/* ==========================================================================\r\n   13.Team\r\n   ========================================================================== */\r\n\r\n\r\n\r\n.team h4 {\r\n  font-size: 21px;\r\n  margin: 24px 0 6px;\r\n}\r\n\r\n.team h5 {\r\n  font-size: 19px;\r\n  font-weight: 400;\r\n  margin-top: 0;\r\n}\r\n\r\n.team div[class^=\"col-\"]:nth-child(3) .team-info h5 { margin: 0; }\r\n\r\n.team p { color: #fff; }\r\n\r\n.team-details figure {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 360px;\r\n  max-width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.team-details figcaption {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(245, 99, 99, 0.95);\r\n  transition: -webkit-transform 0.35s;\r\n  transition: transform 0.35s;\r\n  -webkit-transform: translate3d(0, 100%, 0);\r\n  -ms-transform: translate3d(0, 100%, 0);\r\n  transform: translate3d(0, 100%, 0);\r\n  padding: 1.5em 1em;\r\n  display: block;\r\n}\r\n\r\n.team-details figure figcaption div p,\r\n.team-details figure figcaption div li a {\r\n  transition: -webkit-transform 0.35s;\r\n  transition: transform 0.35s;\r\n  -webkit-transform: translate3d(0, 200%, 0);\r\n  -ms-transform: translate3d(0, 200%, 0);\r\n  transform: translate3d(0, 200%, 0);\r\n}\r\n\r\n.team-details figure:hover figcaption,\r\n.team-details figure:hover figcaption div p,\r\n.team-details figure:hover figcaption div li a {\r\n  -webkit-transform: translate3d(0, 0, 0);\r\n  -ms-transform: translate3d(0, 0, 0);\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n\r\n.team-details figure figcaption div p { transition-delay: 0.05s; }\r\n\r\n.team-details figure figcaption div li:nth-child(1) a { transition-delay: 0.1s; }\r\n\r\n.team-details figure figcaption div li:nth-child(2) a { transition-delay: 0.15s; }\r\n\r\n.team-details .social { margin-top: .75em; }\r\n\r\n.team-details .social li a {\r\n  color: #1A8B8A;\r\n  background-color: #fff;\r\n  border: 1px solid #1A8B8A;\r\n  width: 55px;\r\n  height: 55px;\r\n  line-height: 55px;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.team-details .social li a:hover {\r\n  color: #fff;\r\n  background-color: #1A8B8A;\r\n  border: 1px solid #fff;\r\n}\r\n\r\n.team-details figcaption div {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: auto;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  padding: 1.5em;\r\n}\r\n\r\n/* ==========================================================================\r\n   14.Twitter feed\r\n   ========================================================================== */\r\n\r\n.twitter-feed {\r\n  background: url(" + __webpack_require__(30) + ") center center no-repeat scroll;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.twitter-feed::before { background: rgba(0, 0, 0, 0.38); }\r\n\r\n.twitter-icon .fa-twitter {\r\n  color: #fff;\r\n  font-size: 4em;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.tweet {\r\n  font-size: 20px;\r\n  font-weight: 300;\r\n  color: #fff;\r\n}\r\n\r\n.tweet a { color: #fff; }\r\n\r\n.tweet a:hover { color: rgba(255, 255, 255, 0.92); }\r\n\r\n/* ==========================================================================\r\n   15.Contact us\r\n   ========================================================================== */\r\n\r\n.contact.section-spacing { padding: 3.75em 0 0; }\r\n\r\n#map-canvas {\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  height: 35em;\r\n}\r\n\r\n#map-canvas img { max-width: none; }\r\n\r\n.map-info-box { text-align: left; }\r\n\r\n.map-info-box p { margin: 0 0 8px; }\r\n\r\n.map-info-box i {\r\n  padding-right: .5em;\r\n  color: #CEC9C9;\r\n}\r\n\r\n.map-head h3 {\r\n  height: 30px;\r\n  background: url(" + __webpack_require__(34) + ") 47px center no-repeat;\r\n  background-size: 110px auto;\r\n  text-indent: -999em;\r\n  margin: 12px 0 14px;\r\n}\r\n\r\n.map-address { font-weight: 300; }\r\n\r\n.map-email { font-weight: 400; }\r\n\r\n/* ==========================================================================\r\n   16.Subscription form styles\r\n   ========================================================================== */\r\n\r\n\r\n .form-control::-webkit-input-placeholder {\r\n color: #8A8A8A;\r\n}\r\n .form-control:-moz-placeholder {\r\n color: #8A8A8A;\r\n}\r\n .form-control::-moz-placeholder {\r\n color: #8A8A8A;\r\n}\r\n .form-control:-ms-input-placeholder {\r\n color: #8A8A8A;\r\n}\r\n\r\n.form-control {\r\n  background-color: #fff;\r\n  border: 1px solid #1A8B8A;\r\n  color: #4c4c4c;\r\n  box-shadow: none;\r\n  height: 60px;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  padding: 0 1.5em;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #136665;\r\n  outline: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n.sub-form .btn { padding: 1em; }\r\n\r\n#mc-form .btn-default { height: 60px; }\r\n\r\n#mc-notification {\r\n  margin: 0.75em 0 0;\r\n  font-weight: 400;\r\n  color: #8A8A8A;\r\n  font-size: 17px;\r\n}\r\n\r\n.error { color: #FF4C4C !important; }\r\n\r\n.valid { color: #4CAF50 !important; }\r\n\r\n.error i,\r\n.valid i { padding-right: .5em; }\r\n\r\n/* ==========================================================================\r\n   17.site footer\r\n   ========================================================================== */\r\n\r\n\r\n\r\n.site-footer small { display: inline-block; }\r\n\r\n.footer-links,\r\n.site-footer small { margin: 0 0 .75em; }\r\n\r\n.site-footer small,\r\n.footer-links a {\r\n  color: #8A8A8A;\r\n  font-weight: 300;\r\n  font-size: 18px;\r\n}\r\n\r\n.footer-links a:hover { color: #136665; }\r\n\r\n.footer-links a:first-child { padding-right: .4em; }\r\n\r\n.chat-btn.fixed {\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  background: #1A8B8A url(" + __webpack_require__(33) + ") center 58% no-repeat;\r\n  position: fixed;\r\n  bottom: 117px;\r\n  right: 30px;\r\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 2;\r\n}\r\n\r\n.chat-btn.fixed { display: none; }\r\n\r\n.chat-btn:hover {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.chat-btn.fixed { display: block; }\r\n\r\n#modal-contact-form .modal-body { padding: 3em 1em; }\r\n\r\n.contact-form .section-header h2 { margin: 24px 0 12px; }\r\n\r\n.contact-form .form-control {\r\n  border-radius: 4px;\r\n  height: 49px;\r\n  padding: 10px 16px;\r\n  border-color: #dadddf;\r\n}\r\n\r\n.contact-form .form-control:focus { border-color: #fab1b1; }\r\n\r\n.contact-form textarea.input-lg { height: auto; }\r\n\r\n.cta-form .form-group { margin-bottom: 24px; }\r\n\r\n.contact-form .form-control.input-error { border-color: #f44336; }\r\n\r\n.contact-form-success {\r\n  text-align: center;\r\n  padding: 12px;\r\n  margin: 0;\r\n  font-size: 20px;\r\n  display: none;\r\n}\r\n\r\n.contact-form-success i {\r\n  display: block;\r\n  width: 80px;\r\n  height: 80px;\r\n  margin: 0 auto 12px;\r\n  border: 3px solid #2dbf5b;\r\n  line-height: 74px;\r\n  border-radius: 50%;\r\n  font-size: 38px;\r\n  text-align: center;\r\n  color: #2dbf5b;\r\n  background: transparent;\r\n}\r\n\r\n.contact-form-success { color: #949494; }\r\n\r\n.contact-form-success span {\r\n  display: block;\r\n  margin-bottom: 6px;\r\n  color: #4c4c4c;\r\n  font-size: 30px;\r\n}\r\n\r\n.modal-backdrop.in { opacity: .8; }\r\n\r\n.modal { padding-right: 0 !important; }\r\n\r\n.modal button.close {\r\n  position: absolute;\r\n  top: -33px;\r\n  right: 15px;\r\n  font-size: 30px;\r\n  color: #fff;\r\n  opacity: .9;\r\n  text-shadow: none;\r\n  transition: all 0.3s ease-in-out;\r\n  font-weight: 800;\r\n}\r\n\r\n.modal .close:hover,\r\n.modal .close:focus {\r\n  opacity: 1;\r\n  outline: none;\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n.modal .modal-dialog { margin: 70px auto; }\r\n\r\n.modal .modal-content { border-radius: 3px; }\r\n\r\n/* ==========================================================================\r\n   18.Social\r\n   ========================================================================== */\r\n\r\n\r\n.social li {\r\n  display: inline-block;\r\n  padding-right: .5em;\r\n  text-align: center;\r\n}\r\n\r\n.social li:last-child { padding-right: 0; }\r\n\r\n.social li a {\r\n  display: block;\r\n  width: 45px;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  transition: all .8s ease;\r\n  font-size: 1.3em;\r\n  background: #D6D6D6;\r\n}\r\n\r\n.social li a:hover {\r\n  color: #fff;\r\n  background: #1A8B8A;\r\n}\r\n\r\n/* ==========================================================================\r\n   19.Small devices (tablets, 768px and up)\r\n   ========================================================================== */\r\n\r\n@media (min-width: 768px) {\r\n\r\n.hero-section { padding: 0 0 7.5em; }\r\n\r\n.welcome-message { margin-top: 8.25em; }\r\n\r\n.welcome-message h1 { font-size: 44px; }\r\n\r\n.welcome-message h2 { font-size: 23px; }\r\n\r\n.play-btn { margin: 3em 0; }\r\n\r\n.featured-sites li {\r\n  padding: 0 1em;\r\n  display: inline-block;\r\n}\r\n\r\n.section-spacing { padding: 4.5em 0; }\r\n\r\n.contact.section-spacing { padding: 4.5em 0 0; }\r\n\r\n.section-header h3 { font-size: 26px; }\r\n\r\n.benefits div[class^=\"col-\"]:nth-child(1),\r\n.benefits div[class^=\"col-\"]:nth-child(2),\r\n.reviews div[class^=\"col-\"]:nth-child(1),\r\n.reviews div[class^=\"col-\"]:nth-child(2),\r\n.team div[class^=\"col-\"]:nth-child(1),\r\n.team div[class^=\"col-\"]:nth-child(2) { padding-bottom: 0; }\r\n\r\n.tour .btn { margin: 0 0 0 1em; }\r\n\r\n.video-tour { height: 450px; }\r\n\r\n.plan {\r\n  width: 325px;\r\n  margin: 0 1em 0;\r\n}\r\n\r\nblockquote { padding: 0 0 0 1em; }\r\n\r\nblockquote::before {\r\n  left: -18px;\r\n  top: -30px;\r\n  font-size: 80px;\r\n}\r\n\r\n.cta-section h2 { font-size: 46px; }\r\n\r\n.team h5 { margin: 0 !important; }\r\n\r\n.tweet { font-size: 23px; }\r\n\r\n.sub-form .btn { padding: 1em 2em; }\r\n\r\n#modal-contact-form .modal-body { padding: 3em; }\r\n\r\n.modal button.close { right: 0; }\r\n}\r\n\r\n/* ==========================================================================\r\n   20.Medium devices (desktops, 992px and up)\r\n   ========================================================================== */\r\n\r\n@media (min-width: 992px) {\r\n\r\n.hero-section {\r\n  padding: 5em 0 13.5em;\r\n  background: none;\r\n}\r\n\r\n.hero-section::before { display: none; }\r\n\r\n.overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  background: rgba(0, 0, 0, 0.3);\r\n  top: 0;\r\n}\r\n\r\n.navbar-default { background-color: transparent; }\r\n\r\n.navbar-default .btn {\r\n  border: 1px solid #fff;\r\n  background-color: transparent;\r\n  padding: .75em 1.5em;\r\n}\r\n\r\n.navbar-default .btn:hover { background-color: #136665 !important; }\r\n\r\n.navbar-brand { padding: 0; }\r\n\r\n.nav-left { padding-left: 3em; }\r\n\r\n.welcome-message { margin-top: 7.5em; }\r\n\r\n.welcome-message h1 { font-size: 56px; }\r\n\r\n.welcome-message h2 { font-size: 24px; }\r\n\r\n.play-btn { margin: 4.5em 0; }\r\n\r\n.section-spacing { padding: 6em 0; }\r\n\r\n.contact.section-spacing { padding: 6em 0 0; }\r\n\r\n.features div[class=\"row\"]:nth-child(1),\r\n.features div[class=\"row\"]:nth-child(2) { margin-bottom: 7.5em; }\r\n\r\n.features article { margin-top: 6em; }\r\n\r\n.features img {\r\n  max-width: none;\r\n  position: absolute;\r\n  width: 900px;\r\n  top: 0;\r\n  left: 22px;\r\n}\r\n\r\n.features div[class=\"row\"]:nth-child(even) .col-md-7 img { left: -175px; }\r\n\r\n.featured-sites li { padding: 0 3em; }\r\n\r\n.video-tour {\r\n  height: 600px;\r\n  background: none;\r\n}\r\n\r\n.video-tour::before { background: rgba(0, 0, 0, 0.1); }\r\n\r\n#bgvid-hero,\r\n#bgvid { display: block; }\r\n\r\n.plan {\r\n  margin: 0 1.5em 0;\r\n  width: 350px;\r\n}\r\n\r\nblockquote { padding: 0 0 0 3em; }\r\n\r\nblockquote::before {\r\n  left: -5px;\r\n  top: -50px;\r\n  font-size: 128px;\r\n}\r\n\r\n.footer-links,\r\n.site-footer small { margin: 0; }\r\n\r\n.section-spacing.site-footer { padding: 3em 0; }\r\n}\r\n\r\n@media (max-width: 460px) {\r\n\r\n.video-tour .play-btn img { width: 45%; }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1200px ) {\r\n\r\n.features img { width: 820px; }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76a4f23c6be74fd309e0d0fd2c27a5de.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a3de2170e4e9df77161ea5d3f31b2668.ttf";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff2;base64,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"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "782d958dea8a8a900061d0fb158a4732.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4f9cf61a7a5190d2d25a18a166435ff1.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6e4b8e4a0a7a06b3a9f37e51c2d557d0.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "06228814b7ea8076946481994702d023.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMy45MSIgdmlld0JveD0iMCAwIDI0IDIzLjkxIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZn08L3N0eWxlPjwvZGVmcz48dGl0bGU+Y2hhdC1pY29uPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MDQuNzMgMjg5LjI3aC0xNmE0IDQgMCAwIDAtNCA0djEwLjVhNCA0IDAgMCAwIDQgNGgzLjd2NS4zOWw2LjY4LTUuMzloNS42MWE0IDQgMCAwIDAgNC00di0xMC41YTQgNCAwIDAgMC0zLjk5LTR6bTEuNSAxNC41MWExLjUyIDEuNTIgMCAwIDEtMS41IDEuNWgtNi40OWwtLjY5LjU2LTIuNiAyLjF2LTIuNjZoLTYuMjFhMS41MiAxLjUyIDAgMCAxLTEuNS0xLjV2LTEwLjVhMS41MiAxLjUyIDAgMCAxIDEuNS0xLjVoMTZhMS41MiAxLjUyIDAgMCAxIDEuNSAxLjV2MTAuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02ODQuNzQgLTI4OS4yNykiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjYuODYiIGN5PSI5LjI2IiByPSIxLjQ2Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIxMiIgY3k9IjkuMjYiIHI9IjEuNDYiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE3LjE0IiBjeT0iOS4yNiIgcj0iMS40NiIvPjwvc3ZnPg=="

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDkuNzciIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAxNDkuNzcgNDEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZjU2MzYzfTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sYXVuY2gtbG9nbzwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDA1LjE4IDQwNS42N2EzMy40OSAzMy40OSAwIDAgMC00LjQyLjggMjQuNTEgMjQuNTEgMCAwIDAtMTAuMzMgNS40MSAxNDcuMjMgMTQ3LjIzIDAgMCAwLTkuNzYgMTFjLS43MS44Ny0xLjMzIDEuNi0xLjM4IDEuNjFzLTEuNjEgMC0zLjQ4IDBoLTMuNjJhNDcuMDkgNDcuMDkgMCAwIDAtNC4wNyA1LjE5YzAgLjEyLjA2LjEyIDMuNi44OGwyLjM4LjUxLjA5LjRjLjA5LjQuMDguNDItLjQ3IDEuNjhzLS41NCAxLjMtLjQ3IDEuNTljLjM5IDEuNDQgMy45MyA1IDUuMzcgNS4zNy4yOS4wNy40IDAgMS41OS0uNDdzMS4yOS0uNTUgMS42OS0uNDhsLjQxLjA3LjY0IDNjLjUzIDIuNDguNjYgMyAuNzggM3M0Ljc4LTMuNTIgNS4xMi0zLjljLjE1LS4xNy4xNS0uMzIuMS0zLjc4di0zLjYxbDEuNjItMS4zM2ExNDUuMjYgMTQ1LjI2IDAgMCAwIDExLjA1LTkuOCAyMy45MyAyMy45MyAwIDAgMCA0LjgxLTguNDggMzAgMzAgMCAwIDAgMS40NS03Ljcydi0xLjE1SDQwN2MtLjQzLjA5LTEuMjYuMTQtMS44Mi4yMXptLTguNzEgOS4yNWEzLjI4IDMuMjggMCAwIDEgMS44NyAxLjY5IDMuMjQgMy4yNCAwIDEgMS0xLjg3LTEuN3pNMzcwLjMyIDQzNmE4LjM1IDguMzUgMCAwIDAtMS44NCAyLjQzIDE1LjE3IDE1LjE3IDAgMCAwLTEuNTkgNi42Yy0uMDkgMS42MS0uMTYgMS41MyAxLjMzIDEuNDYgNC4yMS0uMTkgNy0xLjI0IDkuMTEtMy4zOWE2IDYgMCAwIDAgLjc5LS45MS44OS44OSAwIDAgMC0uMzYtLjI5bC0uMzYtLjE5LS4yOC4yYTExLjY1IDExLjY1IDAgMCAxLTYuMzkgMS44aC0xLjA5di0xLjA1YTEyLjA5IDEyLjA5IDAgMCAxIDEuNjMtNi4xNmwuMzYtLjU2LS4xOS0uMzVhLjc5Ljc5IDAgMCAwLS4yOC0uMzUgNS42NCA1LjY0IDAgMCAwLS44NC43NnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNjYuODUgLTQwNS41NCkiLz48Zz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MTguMjQgNDM1LjQ4bC43Ni0uNDggMS4yMS0uOCAxLjUtMSAxLjU5LTEuMTIuMTMtMS4xM2EzOC44NSAzOC44NSAwIDAgMSAxLjE4LTYuNCAzMy42IDMzLjYgMCAwIDEgMS45Mi01LjI2IDI0LjEyIDI0LjEyIDAgMCAxIDIuNDEtNC4xMSAxOC43NSAxOC43NSAwIDAgMSAyLjY2LTIuOTUgMTAuNzkgMTAuNzkgMCAwIDEgMi42Ny0xLjc4IDYuMDggNi4wOCAwIDAgMSAyLjQ3LS41OSAzLjY3IDMuNjcgMCAwIDEgMS41My4zMiAzLjE3IDMuMTcgMCAwIDEgMS4yLjk1IDQuNjggNC42OCAwIDAgMSAuNzggMS41OCA3Ljc2IDcuNzYgMCAwIDEgLjI4IDIuMjEgMTIuMjQgMTIuMjQgMCAwIDEtLjQ2IDMuMjQgMTkuMTUgMTkuMTUgMCAwIDEtMS4zMiAzLjQyIDI3LjEyIDI3LjEyIDAgMCAxLTIuMDUgMy40NCAzMi4zMSAzMi4zMSAwIDAgMS0yLjY1IDMuMzEgMzMuMTEgMzMuMTEgMCAwIDEtMy4xNCAzIDI5IDI5IDAgMCAxLTMuNDkgMi41M3EwIDEtLjA2IDEuNnQwIC45di42YS42My42MyAwIDAgMCAuMDYuMjcuNDIuNDIgMCAwIDAgLjIzLjIgMS44OCAxLjg4IDAgMCAwIC40Ny4xMiA1LjkzIDUuOTMgMCAwIDAgLjggMCA3LjcgNy43IDAgMCAwIDItLjM3bDUuNTYtMS41OWguNTJhMS41MiAxLjUyIDAgMCAxIC43MS4xNiAxLjQ4IDEuNDggMCAwIDEgLjUuNDIgMS44NiAxLjg2IDAgMCAxIC4zLjYxIDIuNTkgMi41OSAwIDAgMSAuMS43MSAyLjEzIDIuMTMgMCAwIDEtLjEuNjUgMiAyIDAgMCAxLS4zLjU5IDEuOTQgMS45NCAwIDAgMS0uNS40NyAxLjc2IDEuNzYgMCAwIDEtLjcuMjdxLTEuNjMuNjUtMy4zMiAxLjE2LS43My4yMi0xLjU0LjQydC0xLjY0LjM3cS0uODQuMTYtMS42OS4yNmExNC4yOCAxNC4yOCAwIDAgMS0xLjY1LjEgNC4yMyA0LjIzIDAgMCAxLTItLjQyIDMuMjYgMy4yNiAwIDAgMS0xLjI1LTEuMTUgNC43OCA0Ljc4IDAgMCAxLS42NC0xLjY3IDEwLjU3IDEwLjU3IDAgMCAxLS4xOC0ycS0xLjQzIDEtMi40MiAxLjY2YTMuNzMgMy43MyAwIDAgMS0xLjI4LjYxLjg5Ljg5IDAgMCAxLS41NC0uMTkgMi4xIDIuMSAwIDAgMS0uNDctLjUxIDIuNjkgMi42OSAwIDAgMS0uMzQtLjcxIDIuNTIgMi41MiAwIDAgMS0uMTItLjc3IDIuNjMgMi42MyAwIDAgMSAuMDctLjYyLjgxLjgxIDAgMCAxIC4yNC0uNTN6bTkuNDMtNS44M3EuODUtLjg4IDEuNzctMS45MnQxLjgzLTIuMTdxLjktMS4xNCAxLjc0LTIuMzJ0MS41MS0yLjM3YTIwIDIwIDAgMCAwIDEuMTMtMi4yOSA4LjU4IDguNTggMCAwIDAgLjU5LTIuMTFxMC0uMzMuMDctLjY0di0uNTdhMi44IDIuOCAwIDAgMC0uMjYtMS4zOC43OS43OSAwIDAgMC0uNzEtLjQzIDIuMTYgMi4xNiAwIDAgMC0xLjI1LjU2IDguNTUgOC41NSAwIDAgMC0xLjQ5IDEuNTkgMjAgMjAgMCAwIDAtMS41OCAyLjQ5IDI2LjIyIDI2LjIyIDAgMCAwLTEuNDggMy4yNSAzMi4wOSAzMi4wOSAwIDAgMC0xLjE5IDMuOSAyOS44NyAyOS44NyAwIDAgMC0uNjggNC40MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNjYuODUgLTQwNS41NCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NTYuNzkgNDM2Ljg0YTE1LjQ4IDE1LjQ4IDAgMCAxLTEgMS4yNSAxMi41NSAxMi41NSAwIDAgMS0xLjQ0IDEuMzYgOSA5IDAgMCAxLTEuNzEgMS4xIDQuMTEgNC4xMSAwIDAgMS0xLjgzLjQ1IDIuNTIgMi41MiAwIDAgMS0xLjgzLS43MSA1Ljc0IDUuNzQgMCAwIDEtMS4yNi0yIDguMTIgOC4xMiAwIDAgMS0xIC45NSA4LjcgOC43IDAgMCAxLTEuMjcuODcgOC4wOCA4LjA4IDAgMCAxLTEuNDQuNjQgNC43IDQuNyAwIDAgMS0xLjQ5LjI1IDMuOSAzLjkgMCAwIDEtMS41NS0uMzIgNCA0IDAgMCAxLTEuMzQtLjkzIDQuNTMgNC41MyAwIDAgMS0uOTMtMS40OCA1LjI2IDUuMjYgMCAwIDEtLjM1LTIgOS45MyA5LjkzIDAgMCAxIC4zNS0yLjU2IDE0IDE0IDAgMCAxIDEtMi41NyAxNC41NiAxNC41NiAwIDAgMSAxLjQ1LTIuMzcgMTEuNjIgMTEuNjIgMCAwIDEgMS44My0xLjk0IDkgOSAwIDAgMSAyLjEtMS4zMiA1LjUgNS41IDAgMCAxIDIuMjUtLjQ5IDEgMSAwIDAgMSAuNi4xNSAxLjUxIDEuNTEgMCAwIDEgLjM2LjM0bC4yNy4zN2EuNzcuNzcgMCAwIDAgLjMzLjI3IDEuNTEgMS41MSAwIDAgMCAuNDEuMTFoMS4xN2EyLjA3IDIuMDcgMCAwIDEgLjQ2IDAgLjc5Ljc5IDAgMCAxIC4zOC4yMiAxLjEgMS4xIDAgMCAxIC4yNi40NiAyLjkgMi45IDAgMCAxIC4wOS44MSAxMC42IDEwLjYgMCAwIDEtLjE3IDEuNzdxLS4xNyAxLS4zNyAydC0uMzcgMmExMi4wNiAxMi4wNiAwIDAgMC0uMTcgMS45MyA0LjE1IDQuMTUgMCAwIDAgLjE0IDEuMjIuNTguNTggMCAwIDAgLjYxLjQ0IDEuNzYgMS43NiAwIDAgMCAuNzMtLjE3IDQuNTMgNC41MyAwIDAgMCAuNzctLjQ2IDguODggOC44OCAwIDAgMCAuNzgtLjY0cS4zOS0uMzYuNzQtLjc0YTI1LjU0IDI1LjU0IDAgMCAwIDEuNjQtMnptLTE0LjE4LTEuMzFhNS40MSA1LjQxIDAgMCAwIC4wNi44IDIuMzcgMi4zNyAwIDAgMCAuMjEuNyAxLjM3IDEuMzcgMCAwIDAgLjQuNSAxIDEgMCAwIDAgLjYzLjE5IDEuNSAxLjUgMCAwIDAgMS4xMS0uNTMgNS4xOSA1LjE5IDAgMCAwIC44Ni0xLjI4IDkuMTcgOS4xNyAwIDAgMCAuNTktMS41NCA5LjQxIDkuNDEgMCAwIDAgLjI5LTEuMzNsMS00Ljg4YTIuODIgMi44MiAwIDAgMC0xLjMzLjM0IDUgNSAwIDAgMC0xLjIyLjkyIDguMjUgOC4yNSAwIDAgMC0xLjA1IDEuMzMgMTAuMzMgMTAuMzMgMCAwIDAtLjgzIDEuNTcgOS44OCA5Ljg4IDAgMCAwLS41NCAxLjY1IDcgNyAwIDAgMC0uMTggMS41NnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNjYuODUgLTQwNS41NCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NjcuMjUgNDI2YTEwLjA5IDEwLjA5IDAgMCAxLS4xIDEuMjJxLS4xLjc3LS4yNiAxLjY5dC0uMzQgMS45bC0uMzQgMS44M3EtLjE2Ljg1LS4yNiAxLjQ5YTYuODYgNi44NiAwIDAgMC0uMS44OXYuODVhMi45MSAyLjkxIDAgMCAwIC4xLjY4LjkzLjkzIDAgMCAwIC4yNi40NS43My43MyAwIDAgMCAuNTEuMTYgMi43OCAyLjc4IDAgMCAwIC44OS0uMTggOC41MSA4LjUxIDAgMCAwIDEuMTEtLjQ5cS41OS0uMzEgMS4yLS43dDEuMTctLjgycS41Ni0uNDMgMS0uODZhNi43NSA2Ljc1IDAgMCAwIC43NC0uNzl2My42OWE5LjMzIDkuMzMgMCAwIDEtLjkuNzhxLS41NC40MS0xLjIuODN0LTEuMzkuOGExNS4yOCAxNS4yOCAwIDAgMS0xLjQ5LjY3IDExLjI1IDExLjI1IDAgMCAxLTEuNDguNDYgNS44OSA1Ljg5IDAgMCAxLTEuMzYuMTcgMi4xOSAyLjE5IDAgMCAxLTEuMDgtLjI1IDIuMzcgMi4zNyAwIDAgMS0uNzctLjcgNC4zMiA0LjMyIDAgMCAxLS41NS0xLjA3IDExIDExIDAgMCAxLS4zOS0xLjM5IDEzLjc4IDEzLjc4IDAgMCAxLTEuMjYgMS40NCAxMC41IDEwLjUgMCAwIDEtMS4zNSAxLjE0IDYuNjIgNi42MiAwIDAgMS0xLjM5Ljc1IDMuNzggMy43OCAwIDAgMS0xLjM3LjI3IDIuODcgMi44NyAwIDAgMS0xLS4xOCAyLjEyIDIuMTIgMCAwIDEtLjg1LS42MSAzLjEgMy4xIDAgMCAxLS41OS0xLjE0IDYuMDYgNi4wNiAwIDAgMS0uMjItMS43NSAyMiAyMiAwIDAgMSAuMzEtMy4yNXEuMzEtMiAuNzYtNC41MiAwLS4yNS4xMi0uNjd0LjI1LS45MmE5LjEyIDkuMTIgMCAwIDEgLjM5LTEgNC43NyA0Ljc3IDAgMCAxIC41NS0uOTMgMi43NyAyLjc3IDAgMCAxIC43NC0uNjggMS44NyAxLjg3IDAgMCAxIDEtLjI4IDMuMzMgMy4zMyAwIDAgMSAxLjI2LjIyLjU2LjU2IDAgMCAxIC4zOC40N3EtLjE1Ljg4LS4zMiAydC0uMzYgMi4xN2wtLjM1IDIuMTMtLjMgMS44NS0uMjEgMS4zMXEtLjA4LjUtLjA3LjUxYTIuNzMgMi43MyAwIDAgMCAuMDYuNTcgMS44MiAxLjgyIDAgMCAwIC4xNy40OSAxIDEgMCAwIDAgLjMuMzUuNzEuNzEgMCAwIDAgLjQzLjEzIDEuNjYgMS42NiAwIDAgMCAuNy0uMTggMi42MiAyLjYyIDAgMCAwIC43Mi0uNTUgMy42OCAzLjY4IDAgMCAwIC42MS0uODggNC42MyA0LjYzIDAgMCAwIC40LTEuMTlsMS42NC04LjQzYTEuMDUgMS4wNSAwIDAgMSAuNjctLjY3IDMuMTMgMy4xMyAwIDAgMSAxLjM0LS4yNyAyLjYgMi42IDAgMCAxIDEuMzQuMy44OC44OCAwIDAgMSAuNTMuNjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzY2Ljg1IC00MDUuNTQpIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcwLjggNDM3LjQ0cTAtMS4xLjEzLTIuNTN0LjMzLTIuOTJxLjItMS40OS40NS0yLjg2dC40OC0yLjM2YTIuNjEgMi42MSAwIDAgMSAuNzEtMS4yOCAxLjk0IDEuOTQgMCAwIDEgMS40Mi0uNTEgMS4zNiAxLjM2IDAgMCAxIDEuMjUuNTUgMi42OSAyLjY5IDAgMCAxIC4zNSAxLjQ2IDYuMDcgNi4wNyAwIDAgMSAwIC42N2MwIC4yOC0uMDguNTktLjEyLjkzbC0uMTYgMWMtLjA2LjM2LS4xMS42OS0uMTYgMXMtLjA5LjU3LS4xMi44YTQgNCAwIDAgMCAwIC40NmguMzNsLjMyLS41OS41LS45NC42MS0xLjEyLjYxLTEuMTNxLjI4LS41NC41MS0xbC4zNS0uNjFhMyAzIDAgMCAxIDEuMjEtMS4yMyAzLjQgMy40IDAgMCAxIDEuNTEtLjMzIDEuNTMgMS41MyAwIDAgMSAxLjMyLjcgMy4zMSAzLjMxIDAgMCAxIC40OSAxLjkzIDQgNCAwIDAgMS0uMDguNjFjMCAuMjktLjExLjYzLS4xOSAxbC0uMjYgMS4zMXEtLjE0LjcxLS4yNiAxLjQ2dC0uMzMgMS41OHEtLjA3LjczLS4wNyAxLjM0YTQuNzMgNC43MyAwIDAgMCAuMjYgMS42OS44Ni44NiAwIDAgMCAuOC42NiAxLjM5IDEuMzkgMCAwIDAgLjU3LS4xNSA1LjU0IDUuNTQgMCAwIDAgLjctLjM5IDguNjEgOC42MSAwIDAgMCAuNzYtLjU2bC43Ny0uNjVxLjg4LS43OCAxLjg0LTEuNzZsLjM3IDMuNzMtLjgzLjYzLTEuMzkgMWExMi4zMiAxMi4zMiAwIDAgMS0xLjQ3LjkyIDkgOSAwIDAgMS0xLjU5LjY2IDUuODUgNS44NSAwIDAgMS0xLjc0LjI2IDEuODMgMS44MyAwIDAgMS0xLjU0LTEuMzIgOS4zNCA5LjM0IDAgMCAxLS42Mi0zLjg2IDE4LjgxIDE4LjgxIDAgMCAxIC4xMy0yLjE1cS4xMy0xLjE1LjMzLTIuNDhINDc5bC00LjM1IDguNjNhMi4xNCAyLjE0IDAgMCAxLS43NS45MyAxLjgzIDEuODMgMCAwIDEtMSAuMjUgMS44NyAxLjg3IDAgMCAxLTEuMS0uMjkgMS45IDEuOSAwIDAgMS0uNjQtLjc4IDMuNzggMy43OCAwIDAgMS0uMy0xLjExIDExIDExIDAgMCAxLS4wNi0xLjI1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM2Ni44NSAtNDA1LjU0KSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5MS4zMiA0NDAuOTFhNiA2IDAgMCAxLTIuNjgtLjU2IDUuNzQgNS43NCAwIDAgMS0xLjkzLTEuNTEgNi41MyA2LjUzIDAgMCAxLTEuMTgtMi4xOSA4LjQ1IDguNDUgMCAwIDEtLjQtMi41OSAxMC43NCAxMC43NCAwIDAgMSAuMi0yIDExLjY2IDExLjY2IDAgMCAxIC41OS0yLjA1IDExLjIxIDExLjIxIDAgMCAxIDEtMS45MiA3LjY2IDcuNjYgMCAwIDEgMS4zMy0xLjYgNi4xMyA2LjEzIDAgMCAxIDEuNjgtMS4xIDUuMDUgNS4wNSAwIDAgMSAyLS40MSA1LjE0IDUuMTQgMCAwIDEgMS43NS4yOSA0LjE0IDQuMTQgMCAwIDEgMS4zOC44MSAzLjY3IDMuNjcgMCAwIDEgLjkgMS4yMiAzLjU5IDMuNTkgMCAwIDEgLjMyIDEuNTIgNC4yMSA0LjIxIDAgMCAxLS4xNSAxLjExIDMuMzggMy4zOCAwIDAgMS0uNDQgMSAyLjM3IDIuMzcgMCAwIDEtLjcxLjcxIDEuNjkgMS42OSAwIDAgMS0uOTMuMjcgMS4wOSAxLjA5IDAgMCAxLTEtLjQyIDIuMjkgMi4yOSAwIDAgMS0uMjQtMS4xNXYtLjYzLS42YTIuMjUgMi4yNSAwIDAgMC0uMDgtLjY2LjM1LjM1IDAgMCAwLS4zNy0uMjcgMiAyIDAgMCAwLTEuMTYuMzIgMi45MyAyLjkzIDAgMCAwLS44Mi44NSA0LjYyIDQuNjIgMCAwIDAtLjU0IDEuMTggMTEuMzggMTEuMzggMCAwIDAtLjMyIDEuMyAxMC40MiAxMC40MiAwIDAgMC0uMTUgMS4yNHYxYTcuNjUgNy42NSAwIDAgMCAuMTEgMS4yNSAzLjY4IDMuNjggMCAwIDAgLjQxIDEuMTkgMi42MiAyLjYyIDAgMCAwIC44MS45IDIuMjggMi4yOCAwIDAgMCAxLjMzLjM2IDMuOTMgMy45MyAwIDAgMCAxLjc2LS40OSAxMi4zNiAxMi4zNiAwIDAgMCAxLjkzLTEuMjQgMTcuNzQgMTcuNzQgMCAwIDAgMS44NS0xLjY0IDIxLjUgMjEuNSAwIDAgMCAxLjUxLTEuNjlsMS4xNSAxLjkzYTIxLjY5IDIxLjY5IDAgMCAxLTIuNjkgMy4xNyAxNi40IDE2LjQgMCAwIDEtMS4zNCAxLjE2IDExLjc2IDExLjc2IDAgMCAxLTEuNTEgMSA5IDkgMCAwIDEtMS42NC43MSA1LjY2IDUuNjYgMCAwIDEtMS43My4yM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNjYuODUgLTQwNS41NCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MDQuMTQgNDMwLjU4cS42OC0uOSAxLjUzLTEuOTNhMjMuNiAyMy42IDAgMCAxIDEuNzYtMS45MiAxMi4xOSAxMi4xOSAwIDAgMSAxLjgyLTEuNDggMy4xNiAzLjE2IDAgMCAxIDEuNy0uNTkgMS41OCAxLjU4IDAgMCAxIC40NS4wNyAxLjI1IDEuMjUgMCAwIDEgLjQ3LjI3IDEuNSAxLjUgMCAwIDEgLjM3LjU2IDIuNDIgMi40MiAwIDAgMSAuMTUuOTIgNy43NSA3Ljc1IDAgMCAxLS4zMiAyLjJxLS4zMSAxLjA3LS42OSAyLjE0dC0uNjggMi4xOGE4LjcyIDguNzIgMCAwIDAtLjMxIDIuMzIgMi4zOSAyLjM5IDAgMCAwIC4yIDEuMDYuNTkuNTkgMCAwIDAgLjUxLjQgMi40NSAyLjQ1IDAgMCAwIC44NS0uMTcgNS41MiA1LjUyIDAgMCAwIC45LS40MyA4IDggMCAwIDAgLjg4LS42MXEuNDMtLjM0LjgxLS43MWExOSAxOSAwIDAgMCAxLjc5LTEuOTNsLjI4IDQuNDItLjc1LjU4cS0uNDYuMzUtMSAuNzR0LTEuMi43OWExMyAxMyAwIDAgMS0xLjMuNzEgOS44IDkuOCAwIDAgMS0xLjMxLjUxIDQuMyA0LjMgMCAwIDEtMS4yNS4yIDIuNjEgMi42MSAwIDAgMS0xLjU4LS40OSAzLjkyIDMuOTIgMCAwIDEtMS4xLTEuMjUgNi4yMyA2LjIzIDAgMCAxLS42NS0xLjY1IDcuMjYgNy4yNiAwIDAgMS0uMjItMS42OSA1LjY2IDUuNjYgMCAwIDEgLjE0LTEuMTlxLjE0LS42NS4zNS0xLjMydC40Ni0xLjI5cS4yNi0uNjMuNDgtMS4xM2MuMTUtLjMzLjI4LS42LjM5LS44MWEyLjI3IDIuMjcgMCAwIDEgLjIyLS4zN2gtLjM1YTYuMjcgNi4yNyAwIDAgMC0xIC45M3EtLjY3Ljc1LTEuNTIgMS44OHQtMS43MiAyLjVhMjguODcgMjguODcgMCAwIDAtMS42MyAyLjkzcS0uMzYuNzUtLjYgMS4zYTYuMjIgNi4yMiAwIDAgMS0uNDYuOTEgMS44IDEuOCAwIDAgMS0uNDkuNTQgMS4zNSAxLjM1IDAgMCAxLTEuNTQtLjEzIDIgMiAwIDAgMS0uNDgtLjg0IDUuMjQgNS4yNCAwIDAgMS0uMjItMS4xOXYtMS4zNi0yLjkxcTAtMS44LjE2LTQgLjEzLTIuMTkuMzgtNC42MnQuNzEtNC43OWEzOSAzOSAwIDAgMSAxLjE0LTQuNTIgMTcuODUgMTcuODUgMCAwIDEgMS42OC0zLjc5IDguNyA4LjcgMCAwIDEgMi4zMi0yLjYgNS4wNyA1LjA3IDAgMCAxIDMuMDUtMSAzLjUyIDMuNTIgMCAwIDEgMS40Ny4yNyAyLjI1IDIuMjUgMCAwIDEgLjkxLjc1IDMgMyAwIDAgMSAuNDcgMS4xNSA3Ljc2IDcuNzYgMCAwIDEgLjEzIDEuNSAxMi4wNyAxMi4wNyAwIDAgMS0uMzUgMi43MiAyOC42MSAyOC42MSAwIDAgMS0uOTIgMy4xcS0uNTcgMS42MS0xLjMgMy4yNnQtMS40OSAzLjJxLS43NiAxLjU1LTEuNSAyLjkzbC0xLjMgMi40MnptMS40OC0xMC4yNkEzOC42NCAzOC42NCAwIDAgMCA1MDcgNDE2YTExLjggMTEuOCAwIDAgMCAuNDQtMi41N3EwLTEuMjYtLjMzLTEuMjZ0LTEuMjggMS40MWEzNS4xNiAzNS4xNiAwIDAgMC0yIDQuMXEtLjI4LjkxLS41MiAxLjg5dC0uNDMgMnEtLjE5IDEtLjM1IDEuOTF0LS4yNyAxLjc5cS0uMjggMi0uNDMgMy44N2wxLTIuMjcgMS0yLjQzIDEtMi4yN3EuNDktMS4xLjc5LTEuODV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzY2Ljg1IC00MDUuNTQpIi8+PC9nPjwvc3ZnPg=="

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }


  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = __webpack_provided_window_dot_jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (__webpack_provided_window_dot_jQuery) {
    __webpack_provided_window_dot_jQuery.fn.waypoint = createExtension(__webpack_provided_window_dot_jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);