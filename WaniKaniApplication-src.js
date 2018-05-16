//=== jQuery Core v1.12.5-pre ===
/*!
 * jQuery JavaScript Library v1.12.5-pre e09907ce152fb6ef7537a3733b1d65ead8ee6303
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-06-22T11:32Z
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
  //"use strict";
  var deletedIds = [];

  var document = window.document;

  var slice = deletedIds.slice;

  var concat = deletedIds.concat;

  var push = deletedIds.push;

  var indexOf = deletedIds.indexOf;

  var class2type = {};

  var toString = class2type.toString;

  var hasOwn = class2type.hasOwnProperty;

  var support = {};



  var
  	version = "1.12.5-pre e09907ce152fb6ef7537a3733b1d65ead8ee6303",

  	// Define a local copy of jQuery
  	jQuery = function( selector, context ) {

  		// The jQuery object is actually just the init constructor 'enhanced'
  		// Need init if jQuery is called (just allow error to be thrown if not included)
  		return new jQuery.fn.init( selector, context );
  	},

  	// Support: Android<4.1, IE<9
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
  	each: function( callback ) {
  		return jQuery.each( this, callback );
  	},

  	map: function( callback ) {
  		return this.pushStack( jQuery.map( this, function( elem, i ) {
  			return callback.call( elem, i, elem );
  		} ) );
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
  		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
  	},

  	end: function() {
  		return this.prevObject || this.constructor();
  	},

  	// For internal use only.
  	// Behaves like an Array's method, not like a jQuery method.
  	push: push,
  	sort: deletedIds.sort,
  	splice: deletedIds.splice
  };

  jQuery.extend = jQuery.fn.extend = function() {
  	var src, copyIsArray, copy, name, options, clone,
  		target = arguments[ 0 ] || {},
  		i = 1,
  		length = arguments.length,
  		deep = false;

  	// Handle a deep copy situation
  	if ( typeof target === "boolean" ) {
  		deep = target;

  		// skip the boolean and the target
  		target = arguments[ i ] || {};
  		i++;
  	}

  	// Handle case when target is a string or something (possible in deep copy)
  	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
  		target = {};
  	}

  	// extend jQuery itself if only one argument is passed
  	if ( i === length ) {
  		target = this;
  		i--;
  	}

  	for ( ; i < length; i++ ) {

  		// Only deal with non-null/undefined values
  		if ( ( options = arguments[ i ] ) != null ) {

  			// Extend the base object
  			for ( name in options ) {
  				src = target[ name ];
  				copy = options[ name ];

  				// Prevent never-ending loop
  				if ( target === copy ) {
  					continue;
  				}

  				// Recurse if we're merging plain objects or arrays
  				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
  					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

  					if ( copyIsArray ) {
  						copyIsArray = false;
  						clone = src && jQuery.isArray( src ) ? src : [];

  					} else {
  						clone = src && jQuery.isPlainObject( src ) ? src : {};
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

  jQuery.extend( {

  	// Unique for each copy of jQuery on the page
  	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

  	// Assume jQuery is ready without the ready module
  	isReady: true,

  	error: function( msg ) {
  		throw new Error( msg );
  	},

  	noop: function() {},

  	// See test/unit/core.js for details concerning isFunction.
  	// Since version 1.3, DOM methods and functions like alert
  	// aren't supported. They return false on IE (#2968).
  	isFunction: function( obj ) {
  		return jQuery.type( obj ) === "function";
  	},

  	isArray: Array.isArray || function( obj ) {
  		return jQuery.type( obj ) === "array";
  	},

  	isWindow: function( obj ) {
  		/* jshint eqeqeq: false */
  		return obj != null && obj == obj.window;
  	},

  	isNumeric: function( obj ) {

  		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
  		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
  		// subtraction forces infinities to NaN
  		// adding 1 corrects loss of precision from parseFloat (#15100)
  		var realStringObj = obj && obj.toString();
  		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
  	},

  	isEmptyObject: function( obj ) {
  		var name;
  		for ( name in obj ) {
  			return false;
  		}
  		return true;
  	},

  	isPlainObject: function( obj ) {
  		var key;

  		// Must be an Object.
  		// Because of IE, we also have to check the presence of the constructor property.
  		// Make sure that DOM nodes and window objects don't pass through, as well
  		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
  			return false;
  		}

  		try {

  			// Not own constructor property must be Object
  			if ( obj.constructor &&
  				!hasOwn.call( obj, "constructor" ) &&
  				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
  				return false;
  			}
  		} catch ( e ) {

  			// IE8,9 Will throw exceptions on certain host objects #9897
  			return false;
  		}

  		// Support: IE<9
  		// Handle iteration over inherited properties before own properties.
  		if ( !support.ownFirst ) {
  			for ( key in obj ) {
  				return hasOwn.call( obj, key );
  			}
  		}

  		// Own properties are enumerated firstly, so to speed up,
  		// if last one is own, then all properties are own.
  		for ( key in obj ) {}

  		return key === undefined || hasOwn.call( obj, key );
  	},

  	type: function( obj ) {
  		if ( obj == null ) {
  			return obj + "";
  		}
  		return typeof obj === "object" || typeof obj === "function" ?
  			class2type[ toString.call( obj ) ] || "object" :
  			typeof obj;
  	},

  	// Workarounds based on findings by Jim Driscoll
  	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  	globalEval: function( data ) {
  		if ( data && jQuery.trim( data ) ) {

  			// We use execScript on Internet Explorer
  			// We use an anonymous function so that context is window
  			// rather than jQuery in Firefox
  			( window.execScript || function( data ) {
  				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
  			} )( data );
  		}
  	},

  	// Convert dashed to camelCase; used by the css and data modules
  	// Microsoft forgot to hump their vendor prefix (#9572)
  	camelCase: function( string ) {
  		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  	},

  	nodeName: function( elem, name ) {
  		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  	},

  	each: function( obj, callback ) {
  		var length, i = 0;

  		if ( isArrayLike( obj ) ) {
  			length = obj.length;
  			for ( ; i < length; i++ ) {
  				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
  					break;
  				}
  			}
  		} else {
  			for ( i in obj ) {
  				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
  					break;
  				}
  			}
  		}

  		return obj;
  	},

  	// Support: Android<4.1, IE<9
  	trim: function( text ) {
  		return text == null ?
  			"" :
  			( text + "" ).replace( rtrim, "" );
  	},

  	// results is for internal usage only
  	makeArray: function( arr, results ) {
  		var ret = results || [];

  		if ( arr != null ) {
  			if ( isArrayLike( Object( arr ) ) ) {
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
  		var len;

  		if ( arr ) {
  			if ( indexOf ) {
  				return indexOf.call( arr, elem, i );
  			}

  			len = arr.length;
  			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

  			for ( ; i < len; i++ ) {

  				// Skip accessing in sparse arrays
  				if ( i in arr && arr[ i ] === elem ) {
  					return i;
  				}
  			}
  		}

  		return -1;
  	},

  	merge: function( first, second ) {
  		var len = +second.length,
  			j = 0,
  			i = first.length;

  		while ( j < len ) {
  			first[ i++ ] = second[ j++ ];
  		}

  		// Support: IE<9
  		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
  		if ( len !== len ) {
  			while ( second[ j ] !== undefined ) {
  				first[ i++ ] = second[ j++ ];
  			}
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
  		var length, value,
  			i = 0,
  			ret = [];

  		// Go through the array, translating each of the items to their new values
  		if ( isArrayLike( elems ) ) {
  			length = elems.length;
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
  		var args, proxy, tmp;

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

  	now: function() {
  		return +( new Date() );
  	},

  	// jQuery.support is not used in Core but other projects attach their
  	// properties to it so it needs to exist.
  	support: support
  } );

  // JSHint would error on this code due to the Symbol not being defined in ES5.
  // Defining this global in .jshintrc would create a danger of using the global
  // unguarded in another place, it seems safer to just disable JSHint for these
  // three lines.
  /* jshint ignore: start */
  if ( typeof Symbol === "function" ) {
  	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
  }
  /* jshint ignore: end */

  // Populate the class2type map
  jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
  function( i, name ) {
  	class2type[ "[object " + name + "]" ] = name.toLowerCase();
  } );

  function isArrayLike( obj ) {

  	// Support: iOS 8.2 (not reproducible in simulator)
  	// `in` check used to prevent JIT error (gh-2145)
  	// hasOwn isn't used here due to false negatives
  	// regarding Nodelist length in IE
  	var length = !!obj && "length" in obj && obj.length,
  		type = jQuery.type( obj );

  	if ( type === "function" || jQuery.isWindow( obj ) ) {
  		return false;
  	}

  	return type === "array" || length === 0 ||
  		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
  }
  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.2.1
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-10-17
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

  	// http://www.w3.org/TR/css3-selectors/#whitespace
  	whitespace = "[\\x20\\t\\r\\n\\f]",

  	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

  	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
  		// Operator (capture 2)
  		"*([*^$|!~]?=)" + whitespace +
  		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
  		"*\\]",

  	pseudos = ":(" + identifier + ")(?:\\((" +
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
  		"ID": new RegExp( "^#(" + identifier + ")" ),
  		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
  		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
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
  	var m, i, elem, nid, nidselect, match, groups, newSelector,
  		newContext = context && context.ownerDocument,

  		// nodeType defaults to 9, since context defaults to document
  		nodeType = context ? context.nodeType : 9;

  	results = results || [];

  	// Return early from calls with invalid selector or context
  	if ( typeof selector !== "string" || !selector ||
  		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

  		return results;
  	}

  	// Try to shortcut find operations (as opposed to filters) in HTML documents
  	if ( !seed ) {

  		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
  			setDocument( context );
  		}
  		context = context || document;

  		if ( documentIsHTML ) {

  			// If the selector is sufficiently simple, try using a "get*By*" DOM method
  			// (excepting DocumentFragment context, where the methods don't exist)
  			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

  				// ID selector
  				if ( (m = match[1]) ) {

  					// Document context
  					if ( nodeType === 9 ) {
  						if ( (elem = context.getElementById( m )) ) {

  							// Support: IE, Opera, Webkit
  							// TODO: identify versions
  							// getElementById can match elements by name instead of ID
  							if ( elem.id === m ) {
  								results.push( elem );
  								return results;
  							}
  						} else {
  							return results;
  						}

  					// Element context
  					} else {

  						// Support: IE, Opera, Webkit
  						// TODO: identify versions
  						// getElementById can match elements by name instead of ID
  						if ( newContext && (elem = newContext.getElementById( m )) &&
  							contains( context, elem ) &&
  							elem.id === m ) {

  							results.push( elem );
  							return results;
  						}
  					}

  				// Type selector
  				} else if ( match[2] ) {
  					push.apply( results, context.getElementsByTagName( selector ) );
  					return results;

  				// Class selector
  				} else if ( (m = match[3]) && support.getElementsByClassName &&
  					context.getElementsByClassName ) {

  					push.apply( results, context.getElementsByClassName( m ) );
  					return results;
  				}
  			}

  			// Take advantage of querySelectorAll
  			if ( support.qsa &&
  				!compilerCache[ selector + " " ] &&
  				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

  				if ( nodeType !== 1 ) {
  					newContext = context;
  					newSelector = selector;

  				// qSA looks outside Element context, which is not what we want
  				// Thanks to Andrew Dupont for this workaround technique
  				// Support: IE <=8
  				// Exclude object elements
  				} else if ( context.nodeName.toLowerCase() !== "object" ) {

  					// Capture the context ID, setting it first if necessary
  					if ( (nid = context.getAttribute( "id" )) ) {
  						nid = nid.replace( rescape, "\\$&" );
  					} else {
  						context.setAttribute( "id", (nid = expando) );
  					}

  					// Prefix every selector in the list
  					groups = tokenize( selector );
  					i = groups.length;
  					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
  					while ( i-- ) {
  						groups[i] = nidselect + " " + toSelector( groups[i] );
  					}
  					newSelector = groups.join( "," );

  					// Expand context for sibling selectors
  					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
  						context;
  				}

  				if ( newSelector ) {
  					try {
  						push.apply( results,
  							newContext.querySelectorAll( newSelector )
  						);
  						return results;
  					} catch ( qsaError ) {
  					} finally {
  						if ( nid === expando ) {
  							context.removeAttribute( "id" );
  						}
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
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
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
  		i = arr.length;

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

  	// Return early if doc is invalid or already selected
  	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
  		return document;
  	}

  	// Update global variables
  	document = doc;
  	docElem = document.documentElement;
  	documentIsHTML = !isXML( document );

  	// Support: IE 9-11, Edge
  	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
  	if ( (parent = document.defaultView) && parent.top !== parent ) {
  		// Support: IE 11
  		if ( parent.addEventListener ) {
  			parent.addEventListener( "unload", unloadHandler, false );

  		// Support: IE 9 - 10 only
  		} else if ( parent.attachEvent ) {
  			parent.attachEvent( "onunload", unloadHandler );
  		}
  	}

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
  		div.appendChild( document.createComment("") );
  		return !div.getElementsByTagName("*").length;
  	});

  	// Support: IE<9
  	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

  	// Support: IE<10
  	// Check if getElementById returns elements by name
  	// The broken getElementById methods don't pick up programatically-set names,
  	// so use a roundabout getElementsByName test
  	support.getById = assert(function( div ) {
  		docElem.appendChild( div ).id = expando;
  		return !document.getElementsByName || !document.getElementsByName( expando ).length;
  	});

  	// ID find and filter
  	if ( support.getById ) {
  		Expr.find["ID"] = function( id, context ) {
  			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
  				var m = context.getElementById( id );
  				return m ? [ m ] : [];
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
  				var node = typeof elem.getAttributeNode !== "undefined" &&
  					elem.getAttributeNode("id");
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
  		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
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

  	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
  		// Build QSA regex
  		// Regex strategy adopted from Diego Perini
  		assert(function( div ) {
  			// Select is set to empty string on purpose
  			// This is to test IE's treatment of not explicitly
  			// setting a boolean content attribute,
  			// since its presence should be enough
  			// http://bugs.jquery.com/ticket/12359
  			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
  				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
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

  			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
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
  			var input = document.createElement("input");
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
  	// Purposefully self-exclusive
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
  			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
  				return -1;
  			}
  			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
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
  			return a === document ? -1 :
  				b === document ? 1 :
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

  	return document;
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
  		!compilerCache[ expr + " " ] &&
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
  					var cache, uniqueCache, outerCache, node, nodeIndex, start,
  						dir = simple !== forward ? "nextSibling" : "previousSibling",
  						parent = elem.parentNode,
  						name = ofType && elem.nodeName.toLowerCase(),
  						useCache = !xml && !ofType,
  						diff = false;

  					if ( parent ) {

  						// :(first|last|only)-(child|of-type)
  						if ( simple ) {
  							while ( dir ) {
  								node = elem;
  								while ( (node = node[ dir ]) ) {
  									if ( ofType ?
  										node.nodeName.toLowerCase() === name :
  										node.nodeType === 1 ) {

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

  							// ...in a gzip-friendly way
  							node = parent;
  							outerCache = node[ expando ] || (node[ expando ] = {});

  							// Support: IE <9 only
  							// Defend against cloned attroperties (jQuery gh-1709)
  							uniqueCache = outerCache[ node.uniqueID ] ||
  								(outerCache[ node.uniqueID ] = {});

  							cache = uniqueCache[ type ] || [];
  							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
  							diff = nodeIndex && cache[ 2 ];
  							node = nodeIndex && parent.childNodes[ nodeIndex ];

  							while ( (node = ++nodeIndex && node && node[ dir ] ||

  								// Fallback to seeking `elem` from the start
  								(diff = nodeIndex = 0) || start.pop()) ) {

  								// When found, cache indexes on `parent` and break
  								if ( node.nodeType === 1 && ++diff && node === elem ) {
  									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
  									break;
  								}
  							}

  						} else {
  							// Use previously-cached element index if available
  							if ( useCache ) {
  								// ...in a gzip-friendly way
  								node = elem;
  								outerCache = node[ expando ] || (node[ expando ] = {});

  								// Support: IE <9 only
  								// Defend against cloned attroperties (jQuery gh-1709)
  								uniqueCache = outerCache[ node.uniqueID ] ||
  									(outerCache[ node.uniqueID ] = {});

  								cache = uniqueCache[ type ] || [];
  								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
  								diff = nodeIndex;
  							}

  							// xml :nth-child(...)
  							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
  							if ( diff === false ) {
  								// Use the same loop as above to seek `elem` from the start
  								while ( (node = ++nodeIndex && node && node[ dir ] ||
  									(diff = nodeIndex = 0) || start.pop()) ) {

  									if ( ( ofType ?
  										node.nodeName.toLowerCase() === name :
  										node.nodeType === 1 ) &&
  										++diff ) {

  										// Cache the index of each encountered element
  										if ( useCache ) {
  											outerCache = node[ expando ] || (node[ expando ] = {});

  											// Support: IE <9 only
  											// Defend against cloned attroperties (jQuery gh-1709)
  											uniqueCache = outerCache[ node.uniqueID ] ||
  												(outerCache[ node.uniqueID ] = {});

  											uniqueCache[ type ] = [ dirruns, diff ];
  										}

  										if ( node === elem ) {
  											break;
  										}
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
  			var oldCache, uniqueCache, outerCache,
  				newCache = [ dirruns, doneName ];

  			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
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

  						// Support: IE <9 only
  						// Defend against cloned attroperties (jQuery gh-1709)
  						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

  						if ( (oldCache = uniqueCache[ dir ]) &&
  							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

  							// Assign to newCache so results back-propagate to previous elements
  							return (newCache[ 2 ] = oldCache[ 2 ]);
  						} else {
  							// Reuse newcache so results back-propagate to previous elements
  							uniqueCache[ dir ] = newCache;

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
  				outermostContext = context === document || context || outermost;
  			}

  			// Add elements passing elementMatchers directly to results
  			// Support: IE<9, Safari
  			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
  			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
  				if ( byElement && elem ) {
  					j = 0;
  					if ( !context && elem.ownerDocument !== document ) {
  						setDocument( elem );
  						xml = !documentIsHTML;
  					}
  					while ( (matcher = elementMatchers[j++]) ) {
  						if ( matcher( elem, context || document, xml) ) {
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

  			// `i` is now the count of elements visited above, and adding it to `matchedCount`
  			// makes the latter nonnegative.
  			matchedCount += i;

  			// Apply set filters to unmatched elements
  			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
  			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
  			// no element matchers and no seed.
  			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
  			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
  			// numerically zero.
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

  	// Try to minimize operations if there is only one selector in the list and no seed
  	// (the latter of which guarantees us context)
  	if ( match.length === 1 ) {

  		// Reduce context if the leading compound selector is an ID
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
  		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
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
  jQuery.expr[ ":" ] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;



  var dir = function( elem, dir, until ) {
  	var matched = [],
  		truncate = until !== undefined;

  	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
  		if ( elem.nodeType === 1 ) {
  			if ( truncate && jQuery( elem ).is( until ) ) {
  				break;
  			}
  			matched.push( elem );
  		}
  	}
  	return matched;
  };


  var siblings = function( n, elem ) {
  	var matched = [];

  	for ( ; n; n = n.nextSibling ) {
  		if ( n.nodeType === 1 && n !== elem ) {
  			matched.push( n );
  		}
  	}

  	return matched;
  };


  var rneedsContext = jQuery.expr.match.needsContext;

  var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



  var risSimple = /^.[^:#\[\.,]*$/;

  // Implement the identical functionality for filter and not
  function winnow( elements, qualifier, not ) {
  	if ( jQuery.isFunction( qualifier ) ) {
  		return jQuery.grep( elements, function( elem, i ) {
  			/* jshint -W018 */
  			return !!qualifier.call( elem, i, elem ) !== not;
  		} );

  	}

  	if ( qualifier.nodeType ) {
  		return jQuery.grep( elements, function( elem ) {
  			return ( elem === qualifier ) !== not;
  		} );

  	}

  	if ( typeof qualifier === "string" ) {
  		if ( risSimple.test( qualifier ) ) {
  			return jQuery.filter( qualifier, elements, not );
  		}

  		qualifier = jQuery.filter( qualifier, elements );
  	}

  	return jQuery.grep( elements, function( elem ) {
  		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
  	} );
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
  		} ) );
  };

  jQuery.fn.extend( {
  	find: function( selector ) {
  		var i,
  			ret = [],
  			self = this,
  			len = self.length;

  		if ( typeof selector !== "string" ) {
  			return this.pushStack( jQuery( selector ).filter( function() {
  				for ( i = 0; i < len; i++ ) {
  					if ( jQuery.contains( self[ i ], this ) ) {
  						return true;
  					}
  				}
  			} ) );
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
  		return this.pushStack( winnow( this, selector || [], false ) );
  	},
  	not: function( selector ) {
  		return this.pushStack( winnow( this, selector || [], true ) );
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
  } );


  // Initialize a jQuery object


  // A central reference to the root jQuery(document)
  var rootjQuery,

  	// A simple way to check for HTML strings
  	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  	// Strict HTML recognition (#11290: must start with <)
  	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

  	init = jQuery.fn.init = function( selector, context, root ) {
  		var match, elem;

  		// HANDLE: $(""), $(null), $(undefined), $(false)
  		if ( !selector ) {
  			return this;
  		}

  		// init accepts an alternate rootjQuery
  		// so migrate can support jQuery.sub (gh-2101)
  		root = root || rootjQuery;

  		// Handle HTML strings
  		if ( typeof selector === "string" ) {
  			if ( selector.charAt( 0 ) === "<" &&
  				selector.charAt( selector.length - 1 ) === ">" &&
  				selector.length >= 3 ) {

  				// Assume that strings that start and end with <> are HTML and skip the regex check
  				match = [ null, selector, null ];

  			} else {
  				match = rquickExpr.exec( selector );
  			}

  			// Match html or make sure no context is specified for #id
  			if ( match && ( match[ 1 ] || !context ) ) {

  				// HANDLE: $(html) -> $(array)
  				if ( match[ 1 ] ) {
  					context = context instanceof jQuery ? context[ 0 ] : context;

  					// scripts is true for back-compat
  					// Intentionally let the error be thrown if parseHTML is not present
  					jQuery.merge( this, jQuery.parseHTML(
  						match[ 1 ],
  						context && context.nodeType ? context.ownerDocument || context : document,
  						true
  					) );

  					// HANDLE: $(html, props)
  					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
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
  					elem = document.getElementById( match[ 2 ] );

  					// Check parentNode to catch when Blackberry 4.6 returns
  					// nodes that are no longer in the document #6963
  					if ( elem && elem.parentNode ) {

  						// Handle the case where IE and Opera return items
  						// by name instead of ID
  						if ( elem.id !== match[ 2 ] ) {
  							return rootjQuery.find( selector );
  						}

  						// Otherwise, we inject the element directly into the jQuery object
  						this.length = 1;
  						this[ 0 ] = elem;
  					}

  					this.context = document;
  					this.selector = selector;
  					return this;
  				}

  			// HANDLE: $(expr, $(...))
  			} else if ( !context || context.jquery ) {
  				return ( context || root ).find( selector );

  			// HANDLE: $(expr, context)
  			// (which is just equivalent to: $(context).find(expr)
  			} else {
  				return this.constructor( context ).find( selector );
  			}

  		// HANDLE: $(DOMElement)
  		} else if ( selector.nodeType ) {
  			this.context = this[ 0 ] = selector;
  			this.length = 1;
  			return this;

  		// HANDLE: $(function)
  		// Shortcut for document ready
  		} else if ( jQuery.isFunction( selector ) ) {
  			return typeof root.ready !== "undefined" ?
  				root.ready( selector ) :

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

  	// methods guaranteed to produce a unique set when starting from a unique set
  	guaranteedUnique = {
  		children: true,
  		contents: true,
  		next: true,
  		prev: true
  	};

  jQuery.fn.extend( {
  	has: function( target ) {
  		var i,
  			targets = jQuery( target, this ),
  			len = targets.length;

  		return this.filter( function() {
  			for ( i = 0; i < len; i++ ) {
  				if ( jQuery.contains( this, targets[ i ] ) ) {
  					return true;
  				}
  			}
  		} );
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
  			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

  				// Always skip document fragments
  				if ( cur.nodeType < 11 && ( pos ?
  					pos.index( cur ) > -1 :

  					// Don't pass non-elements to Sizzle
  					cur.nodeType === 1 &&
  						jQuery.find.matchesSelector( cur, selectors ) ) ) {

  					matched.push( cur );
  					break;
  				}
  			}
  		}

  		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
  	},

  	// Determine the position of an element within
  	// the matched set of elements
  	index: function( elem ) {

  		// No argument, return index in parent
  		if ( !elem ) {
  			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
  		}

  		// index in selector
  		if ( typeof elem === "string" ) {
  			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
  		}

  		// Locate the position of the desired element
  		return jQuery.inArray(

  			// If it receives a jQuery object, the first element is used
  			elem.jquery ? elem[ 0 ] : elem, this );
  	},

  	add: function( selector, context ) {
  		return this.pushStack(
  			jQuery.uniqueSort(
  				jQuery.merge( this.get(), jQuery( selector, context ) )
  			)
  		);
  	},

  	addBack: function( selector ) {
  		return this.add( selector == null ?
  			this.prevObject : this.prevObject.filter( selector )
  		);
  	}
  } );

  function sibling( cur, dir ) {
  	do {
  		cur = cur[ dir ];
  	} while ( cur && cur.nodeType !== 1 );

  	return cur;
  }

  jQuery.each( {
  	parent: function( elem ) {
  		var parent = elem.parentNode;
  		return parent && parent.nodeType !== 11 ? parent : null;
  	},
  	parents: function( elem ) {
  		return dir( elem, "parentNode" );
  	},
  	parentsUntil: function( elem, i, until ) {
  		return dir( elem, "parentNode", until );
  	},
  	next: function( elem ) {
  		return sibling( elem, "nextSibling" );
  	},
  	prev: function( elem ) {
  		return sibling( elem, "previousSibling" );
  	},
  	nextAll: function( elem ) {
  		return dir( elem, "nextSibling" );
  	},
  	prevAll: function( elem ) {
  		return dir( elem, "previousSibling" );
  	},
  	nextUntil: function( elem, i, until ) {
  		return dir( elem, "nextSibling", until );
  	},
  	prevUntil: function( elem, i, until ) {
  		return dir( elem, "previousSibling", until );
  	},
  	siblings: function( elem ) {
  		return siblings( ( elem.parentNode || {} ).firstChild, elem );
  	},
  	children: function( elem ) {
  		return siblings( elem.firstChild );
  	},
  	contents: function( elem ) {
  		return jQuery.nodeName( elem, "iframe" ) ?
  			elem.contentDocument || elem.contentWindow.document :
  			jQuery.merge( [], elem.childNodes );
  	}
  }, function( name, fn ) {
  	jQuery.fn[ name ] = function( until, selector ) {
  		var ret = jQuery.map( this, fn, until );

  		if ( name.slice( -5 ) !== "Until" ) {
  			selector = until;
  		}

  		if ( selector && typeof selector === "string" ) {
  			ret = jQuery.filter( selector, ret );
  		}

  		if ( this.length > 1 ) {

  			// Remove duplicates
  			if ( !guaranteedUnique[ name ] ) {
  				ret = jQuery.uniqueSort( ret );
  			}

  			// Reverse order for parents* and prev-derivatives
  			if ( rparentsprev.test( name ) ) {
  				ret = ret.reverse();
  			}
  		}

  		return this.pushStack( ret );
  	};
  } );
  var rnotwhite = ( /\S+/g );



  // Convert String-formatted options into Object-formatted ones
  function createOptions( options ) {
  	var object = {};
  	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
  		object[ flag ] = true;
  	} );
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
  		createOptions( options ) :
  		jQuery.extend( {}, options );

  	var // Flag to know if list is currently firing
  		firing,

  		// Last fire value for non-forgettable lists
  		memory,

  		// Flag to know if list was already fired
  		fired,

  		// Flag to prevent firing
  		locked,

  		// Actual callback list
  		list = [],

  		// Queue of execution data for repeatable lists
  		queue = [],

  		// Index of currently firing callback (modified by add/remove as needed)
  		firingIndex = -1,

  		// Fire callbacks
  		fire = function() {

  			// Enforce single-firing
  			locked = options.once;

  			// Execute callbacks for all pending executions,
  			// respecting firingIndex overrides and runtime changes
  			fired = firing = true;
  			for ( ; queue.length; firingIndex = -1 ) {
  				memory = queue.shift();
  				while ( ++firingIndex < list.length ) {

  					// Run callback and check for early termination
  					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
  						options.stopOnFalse ) {

  						// Jump to end and forget the data so .add doesn't re-fire
  						firingIndex = list.length;
  						memory = false;
  					}
  				}
  			}

  			// Forget the data if we're done with it
  			if ( !options.memory ) {
  				memory = false;
  			}

  			firing = false;

  			// Clean up if we're done firing for good
  			if ( locked ) {

  				// Keep an empty list if we have data for future add calls
  				if ( memory ) {
  					list = [];

  				// Otherwise, this object is spent
  				} else {
  					list = "";
  				}
  			}
  		},

  		// Actual Callbacks object
  		self = {

  			// Add a callback or a collection of callbacks to the list
  			add: function() {
  				if ( list ) {

  					// If we have memory from a past run, we should fire after adding
  					if ( memory && !firing ) {
  						firingIndex = list.length - 1;
  						queue.push( memory );
  					}

  					( function add( args ) {
  						jQuery.each( args, function( _, arg ) {
  							if ( jQuery.isFunction( arg ) ) {
  								if ( !options.unique || !self.has( arg ) ) {
  									list.push( arg );
  								}
  							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

  								// Inspect recursively
  								add( arg );
  							}
  						} );
  					} )( arguments );

  					if ( memory && !firing ) {
  						fire();
  					}
  				}
  				return this;
  			},

  			// Remove a callback from the list
  			remove: function() {
  				jQuery.each( arguments, function( _, arg ) {
  					var index;
  					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
  						list.splice( index, 1 );

  						// Handle firing indexes
  						if ( index <= firingIndex ) {
  							firingIndex--;
  						}
  					}
  				} );
  				return this;
  			},

  			// Check if a given callback is in the list.
  			// If no argument is given, return whether or not list has callbacks attached.
  			has: function( fn ) {
  				return fn ?
  					jQuery.inArray( fn, list ) > -1 :
  					list.length > 0;
  			},

  			// Remove all callbacks from the list
  			empty: function() {
  				if ( list ) {
  					list = [];
  				}
  				return this;
  			},

  			// Disable .fire and .add
  			// Abort any current/pending executions
  			// Clear all callbacks and values
  			disable: function() {
  				locked = queue = [];
  				list = memory = "";
  				return this;
  			},
  			disabled: function() {
  				return !list;
  			},

  			// Disable .fire
  			// Also disable .add unless we have memory (since it would have no effect)
  			// Abort any pending executions
  			lock: function() {
  				locked = true;
  				if ( !memory ) {
  					self.disable();
  				}
  				return this;
  			},
  			locked: function() {
  				return !!locked;
  			},

  			// Call all callbacks with the given context and arguments
  			fireWith: function( context, args ) {
  				if ( !locked ) {
  					args = args || [];
  					args = [ context, args.slice ? args.slice() : args ];
  					queue.push( args );
  					if ( !firing ) {
  						fire();
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


  jQuery.extend( {

  	Deferred: function( func ) {
  		var tuples = [

  				// action, add listener, listener list, final state
  				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
  				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
  				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
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
  					return jQuery.Deferred( function( newDefer ) {
  						jQuery.each( tuples, function( i, tuple ) {
  							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

  							// deferred[ done | fail | progress ] for forwarding actions to newDefer
  							deferred[ tuple[ 1 ] ]( function() {
  								var returned = fn && fn.apply( this, arguments );
  								if ( returned && jQuery.isFunction( returned.promise ) ) {
  									returned.promise()
  										.progress( newDefer.notify )
  										.done( newDefer.resolve )
  										.fail( newDefer.reject );
  								} else {
  									newDefer[ tuple[ 0 ] + "With" ](
  										this === promise ? newDefer.promise() : this,
  										fn ? [ returned ] : arguments
  									);
  								}
  							} );
  						} );
  						fns = null;
  					} ).promise();
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
  			promise[ tuple[ 1 ] ] = list.add;

  			// Handle state
  			if ( stateString ) {
  				list.add( function() {

  					// state = [ resolved | rejected ]
  					state = stateString;

  				// [ reject_list | resolve_list ].disable; progress_list.lock
  				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
  			}

  			// deferred[ resolve | reject | notify ]
  			deferred[ tuple[ 0 ] ] = function() {
  				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
  				return this;
  			};
  			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
  		} );

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
  			remaining = length !== 1 ||
  				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

  			// the master Deferred.
  			// If resolveValues consist of only a single Deferred, just use that.
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

  		// add listeners to Deferred subordinates; treat others as resolved
  		if ( length > 1 ) {
  			progressValues = new Array( length );
  			progressContexts = new Array( length );
  			resolveContexts = new Array( length );
  			for ( ; i < length; i++ ) {
  				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
  					resolveValues[ i ].promise()
  						.progress( updateFunc( i, progressContexts, progressValues ) )
  						.done( updateFunc( i, resolveContexts, resolveValues ) )
  						.fail( deferred.reject );
  				} else {
  					--remaining;
  				}
  			}
  		}

  		// if we're not waiting on anything, resolve the master
  		if ( !remaining ) {
  			deferred.resolveWith( resolveContexts, resolveValues );
  		}

  		return deferred.promise();
  	}
  } );


  // The deferred used on DOM ready
  var readyList;

  jQuery.fn.ready = function( fn ) {

  	// Add the callback
  	jQuery.ready.promise().done( fn );

  	return this;
  };

  jQuery.extend( {

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
  } );

  /**
   * Clean-up method for dom ready events
   */
  function detach() {
  	if ( document.addEventListener ) {
  		document.removeEventListener( "DOMContentLoaded", completed );
  		window.removeEventListener( "load", completed );

  	} else {
  		document.detachEvent( "onreadystatechange", completed );
  		window.detachEvent( "onload", completed );
  	}
  }

  /**
   * The ready event handler and self cleanup method
   */
  function completed() {

  	// readyState === "complete" is good enough for us to call the dom ready in oldIE
  	if ( document.addEventListener ||
  		window.event.type === "load" ||
  		document.readyState === "complete" ) {

  		detach();
  		jQuery.ready();
  	}
  }

  jQuery.ready.promise = function( obj ) {
  	if ( !readyList ) {

  		readyList = jQuery.Deferred();

  		// Catch cases where $(document).ready() is called
  		// after the browser event has already occurred.
  		// Support: IE6-10
  		// Older IE sometimes signals "interactive" too soon
  		if ( document.readyState === "complete" ||
  			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

  			// Handle it asynchronously to allow scripts the opportunity to delay ready
  			window.setTimeout( jQuery.ready );

  		// Standards-based browsers support DOMContentLoaded
  		} else if ( document.addEventListener ) {

  			// Use the handy event callback
  			document.addEventListener( "DOMContentLoaded", completed );

  			// A fallback to window.onload, that will always work
  			window.addEventListener( "load", completed );

  		// If IE event model is used
  		} else {

  			// Ensure firing before onload, maybe late but safe also for iframes
  			document.attachEvent( "onreadystatechange", completed );

  			// A fallback to window.onload, that will always work
  			window.attachEvent( "onload", completed );

  			// If IE and not a frame
  			// continually check to see if the document is ready
  			var top = false;

  			try {
  				top = window.frameElement == null && document.documentElement;
  			} catch ( e ) {}

  			if ( top && top.doScroll ) {
  				( function doScrollCheck() {
  					if ( !jQuery.isReady ) {

  						try {

  							// Use the trick by Diego Perini
  							// http://javascript.nwbox.com/IEContentLoaded/
  							top.doScroll( "left" );
  						} catch ( e ) {
  							return window.setTimeout( doScrollCheck, 50 );
  						}

  						// detach all dom ready events
  						detach();

  						// and execute any waiting functions
  						jQuery.ready();
  					}
  				} )();
  			}
  		}
  	}
  	return readyList.promise( obj );
  };

  // Kick off the DOM ready check even if the user does not
  jQuery.ready.promise();




  // Support: IE<9
  // Iteration over object's inherited properties before its own
  var i;
  for ( i in jQuery( support ) ) {
  	break;
  }
  support.ownFirst = i === "0";

  // Note: most support tests are defined in their respective modules.
  // false until the test is run
  support.inlineBlockNeedsLayout = false;

  // Execute ASAP in case we need to set body.style.zoom
  jQuery( function() {

  	// Minified: var a,b,c,d
  	var val, div, body, container;

  	body = document.getElementsByTagName( "body" )[ 0 ];
  	if ( !body || !body.style ) {

  		// Return for frameset docs that don't have a body
  		return;
  	}

  	// Setup
  	div = document.createElement( "div" );
  	container = document.createElement( "div" );
  	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
  	body.appendChild( container ).appendChild( div );

  	if ( typeof div.style.zoom !== "undefined" ) {

  		// Support: IE<8
  		// Check if natively block-level elements act like inline-block
  		// elements when setting their display to 'inline' and giving
  		// them layout
  		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

  		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
  		if ( val ) {

  			// Prevent IE 6 from affecting layout for positioned elements #11048
  			// Prevent IE from shrinking the body in IE 7 mode #12869
  			// Support: IE<8
  			body.style.zoom = 1;
  		}
  	}

  	body.removeChild( container );
  } );


  ( function() {
  	var div = document.createElement( "div" );

  	// Support: IE<9
  	support.deleteExpando = true;
  	try {
  		delete div.test;
  	} catch ( e ) {
  		support.deleteExpando = false;
  	}

  	// Null elements to avoid leaks in IE.
  	div = null;
  } )();
  var acceptData = function( elem ) {
  	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
  		nodeType = +elem.nodeType || 1;

  	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
  	return nodeType !== 1 && nodeType !== 9 ?
  		false :

  		// Nodes accept data unless otherwise specified; rejection can be conditional
  		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
  };




  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  	rmultiDash = /([A-Z])/g;

  function dataAttr( elem, key, data ) {

  	// If nothing was found internally, try to fetch any
  	// data from the HTML5 data-* attribute
  	if ( data === undefined && elem.nodeType === 1 ) {

  		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

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
  			} catch ( e ) {}

  			// Make sure we set the data so it isn't changed later
  			jQuery.data( elem, key, data );

  		} else {
  			data = undefined;
  		}
  	}

  	return data;
  }

  // checks a cache object for emptiness
  function isEmptyDataObject( obj ) {
  	var name;
  	for ( name in obj ) {

  		// if the public data object is empty, the private is still empty
  		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
  			continue;
  		}
  		if ( name !== "toJSON" ) {
  			return false;
  		}
  	}

  	return true;
  }

  function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
  	if ( !acceptData( elem ) ) {
  		return;
  	}

  	var ret, thisCache,
  		internalKey = jQuery.expando,

  		// We have to handle DOM nodes and JS objects differently because IE6-7
  		// can't GC object references properly across the DOM-JS boundary
  		isNode = elem.nodeType,

  		// Only DOM nodes need the global jQuery cache; JS object data is
  		// attached directly to the object so GC can occur automatically
  		cache = isNode ? jQuery.cache : elem,

  		// Only defining an ID for JS objects if its cache already exists allows
  		// the code to shortcut on the same path as a DOM node with no cache
  		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

  	// Avoid doing any more work than we need to when trying to get data on an
  	// object that has no data at all
  	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
  		data === undefined && typeof name === "string" ) {
  		return;
  	}

  	if ( !id ) {

  		// Only DOM nodes need a new unique ID for each element since their data
  		// ends up in the global cache
  		if ( isNode ) {
  			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
  		} else {
  			id = internalKey;
  		}
  	}

  	if ( !cache[ id ] ) {

  		// Avoid exposing jQuery metadata on plain JS objects when the object
  		// is serialized using JSON.stringify
  		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
  	}

  	// An object can be passed to jQuery.data instead of a key/value pair; this gets
  	// shallow copied over onto the existing cache
  	if ( typeof name === "object" || typeof name === "function" ) {
  		if ( pvt ) {
  			cache[ id ] = jQuery.extend( cache[ id ], name );
  		} else {
  			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
  		}
  	}

  	thisCache = cache[ id ];

  	// jQuery data() is stored in a separate object inside the object's internal data
  	// cache in order to avoid key collisions between internal data and user-defined
  	// data.
  	if ( !pvt ) {
  		if ( !thisCache.data ) {
  			thisCache.data = {};
  		}

  		thisCache = thisCache.data;
  	}

  	if ( data !== undefined ) {
  		thisCache[ jQuery.camelCase( name ) ] = data;
  	}

  	// Check for both converted-to-camel and non-converted data property names
  	// If a data property was specified
  	if ( typeof name === "string" ) {

  		// First Try to find as-is property data
  		ret = thisCache[ name ];

  		// Test for null|undefined property data
  		if ( ret == null ) {

  			// Try to find the camelCased property
  			ret = thisCache[ jQuery.camelCase( name ) ];
  		}
  	} else {
  		ret = thisCache;
  	}

  	return ret;
  }

  function internalRemoveData( elem, name, pvt ) {
  	if ( !acceptData( elem ) ) {
  		return;
  	}

  	var thisCache, i,
  		isNode = elem.nodeType,

  		// See jQuery.data for more information
  		cache = isNode ? jQuery.cache : elem,
  		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

  	// If there is already no cache entry for this object, there is no
  	// purpose in continuing
  	if ( !cache[ id ] ) {
  		return;
  	}

  	if ( name ) {

  		thisCache = pvt ? cache[ id ] : cache[ id ].data;

  		if ( thisCache ) {

  			// Support array or space separated string names for data keys
  			if ( !jQuery.isArray( name ) ) {

  				// try the string as a key before any manipulation
  				if ( name in thisCache ) {
  					name = [ name ];
  				} else {

  					// split the camel cased version by spaces unless a key with the spaces exists
  					name = jQuery.camelCase( name );
  					if ( name in thisCache ) {
  						name = [ name ];
  					} else {
  						name = name.split( " " );
  					}
  				}
  			} else {

  				// If "name" is an array of keys...
  				// When data is initially created, via ("key", "val") signature,
  				// keys will be converted to camelCase.
  				// Since there is no way to tell _how_ a key was added, remove
  				// both plain key and camelCase key. #12786
  				// This will only penalize the array argument path.
  				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
  			}

  			i = name.length;
  			while ( i-- ) {
  				delete thisCache[ name[ i ] ];
  			}

  			// If there is no data left in the cache, we want to continue
  			// and let the cache object itself get destroyed
  			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
  				return;
  			}
  		}
  	}

  	// See jQuery.data for more information
  	if ( !pvt ) {
  		delete cache[ id ].data;

  		// Don't destroy the parent cache unless the internal data object
  		// had been the only thing left in it
  		if ( !isEmptyDataObject( cache[ id ] ) ) {
  			return;
  		}
  	}

  	// Destroy the cache
  	if ( isNode ) {
  		jQuery.cleanData( [ elem ], true );

  	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
  	/* jshint eqeqeq: false */
  	} else if ( support.deleteExpando || cache != cache.window ) {
  		/* jshint eqeqeq: true */
  		delete cache[ id ];

  	// When all else fails, undefined
  	} else {
  		cache[ id ] = undefined;
  	}
  }

  jQuery.extend( {
  	cache: {},

  	// The following elements (space-suffixed to avoid Object.prototype collisions)
  	// throw uncatchable exceptions if you attempt to set expando properties
  	noData: {
  		"applet ": true,
  		"embed ": true,

  		// ...but Flash objects (which have this classid) *can* handle expandos
  		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
  	},

  	hasData: function( elem ) {
  		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
  		return !!elem && !isEmptyDataObject( elem );
  	},

  	data: function( elem, name, data ) {
  		return internalData( elem, name, data );
  	},

  	removeData: function( elem, name ) {
  		return internalRemoveData( elem, name );
  	},

  	// For internal use only.
  	_data: function( elem, name, data ) {
  		return internalData( elem, name, data, true );
  	},

  	_removeData: function( elem, name ) {
  		return internalRemoveData( elem, name, true );
  	}
  } );

  jQuery.fn.extend( {
  	data: function( key, value ) {
  		var i, name, data,
  			elem = this[ 0 ],
  			attrs = elem && elem.attributes;

  		// Special expections of .data basically thwart jQuery.access,
  		// so implement the relevant behavior ourselves

  		// Gets all values
  		if ( key === undefined ) {
  			if ( this.length ) {
  				data = jQuery.data( elem );

  				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
  					i = attrs.length;
  					while ( i-- ) {

  						// Support: IE11+
  						// The attrs elements can be null (#14894)
  						if ( attrs[ i ] ) {
  							name = attrs[ i ].name;
  							if ( name.indexOf( "data-" ) === 0 ) {
  								name = jQuery.camelCase( name.slice( 5 ) );
  								dataAttr( elem, name, data[ name ] );
  							}
  						}
  					}
  					jQuery._data( elem, "parsedAttrs", true );
  				}
  			}

  			return data;
  		}

  		// Sets multiple values
  		if ( typeof key === "object" ) {
  			return this.each( function() {
  				jQuery.data( this, key );
  			} );
  		}

  		return arguments.length > 1 ?

  			// Sets one value
  			this.each( function() {
  				jQuery.data( this, key, value );
  			} ) :

  			// Gets one value
  			// Try to fetch any internally stored data first
  			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
  	},

  	removeData: function( key ) {
  		return this.each( function() {
  			jQuery.removeData( this, key );
  		} );
  	}
  } );


  jQuery.extend( {
  	queue: function( elem, type, data ) {
  		var queue;

  		if ( elem ) {
  			type = ( type || "fx" ) + "queue";
  			queue = jQuery._data( elem, type );

  			// Speed up dequeue by getting out quickly if this is just a lookup
  			if ( data ) {
  				if ( !queue || jQuery.isArray( data ) ) {
  					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
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

  			// clear up the last queue stop function
  			delete hooks.stop;
  			fn.call( elem, next, hooks );
  		}

  		if ( !startLength && hooks ) {
  			hooks.empty.fire();
  		}
  	},

  	// not intended for public consumption - generates a queueHooks object,
  	// or returns the current one
  	_queueHooks: function( elem, type ) {
  		var key = type + "queueHooks";
  		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
  			empty: jQuery.Callbacks( "once memory" ).add( function() {
  				jQuery._removeData( elem, type + "queue" );
  				jQuery._removeData( elem, key );
  			} )
  		} );
  	}
  } );

  jQuery.fn.extend( {
  	queue: function( type, data ) {
  		var setter = 2;

  		if ( typeof type !== "string" ) {
  			data = type;
  			type = "fx";
  			setter--;
  		}

  		if ( arguments.length < setter ) {
  			return jQuery.queue( this[ 0 ], type );
  		}

  		return data === undefined ?
  			this :
  			this.each( function() {
  				var queue = jQuery.queue( this, type, data );

  				// ensure a hooks for this queue
  				jQuery._queueHooks( this, type );

  				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
  					jQuery.dequeue( this, type );
  				}
  			} );
  	},
  	dequeue: function( type ) {
  		return this.each( function() {
  			jQuery.dequeue( this, type );
  		} );
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
  			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
  			if ( tmp && tmp.empty ) {
  				count++;
  				tmp.empty.add( resolve );
  			}
  		}
  		resolve();
  		return defer.promise( obj );
  	}
  } );


  ( function() {
  	var shrinkWrapBlocksVal;

  	support.shrinkWrapBlocks = function() {
  		if ( shrinkWrapBlocksVal != null ) {
  			return shrinkWrapBlocksVal;
  		}

  		// Will be changed later if needed.
  		shrinkWrapBlocksVal = false;

  		// Minified: var b,c,d
  		var div, body, container;

  		body = document.getElementsByTagName( "body" )[ 0 ];
  		if ( !body || !body.style ) {

  			// Test fired too early or in an unsupported environment, exit.
  			return;
  		}

  		// Setup
  		div = document.createElement( "div" );
  		container = document.createElement( "div" );
  		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
  		body.appendChild( container ).appendChild( div );

  		// Support: IE6
  		// Check if elements with layout shrink-wrap their children
  		if ( typeof div.style.zoom !== "undefined" ) {

  			// Reset CSS: box-sizing; display; margin; border
  			div.style.cssText =

  				// Support: Firefox<29, Android 2.3
  				// Vendor-prefix box-sizing
  				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
  				"box-sizing:content-box;display:block;margin:0;border:0;" +
  				"padding:1px;width:1px;zoom:1";
  			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
  			shrinkWrapBlocksVal = div.offsetWidth !== 3;
  		}

  		body.removeChild( container );

  		return shrinkWrapBlocksVal;
  	};

  } )();
  var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

  var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


  var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

  var isHidden = function( elem, el ) {

  		// isHidden might be called from jQuery#filter function;
  		// in that case, element will be second argument
  		elem = el || elem;
  		return jQuery.css( elem, "display" ) === "none" ||
  			!jQuery.contains( elem.ownerDocument, elem );
  	};



  function adjustCSS( elem, prop, valueParts, tween ) {
  	var adjusted,
  		scale = 1,
  		maxIterations = 20,
  		currentValue = tween ?
  			function() { return tween.cur(); } :
  			function() { return jQuery.css( elem, prop, "" ); },
  		initial = currentValue(),
  		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

  		// Starting value computation is required for potential unit mismatches
  		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
  			rcssNum.exec( jQuery.css( elem, prop ) );

  	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

  		// Trust units reported by jQuery.css
  		unit = unit || initialInUnit[ 3 ];

  		// Make sure we update the tween properties later on
  		valueParts = valueParts || [];

  		// Iteratively approximate from a nonzero starting point
  		initialInUnit = +initial || 1;

  		do {

  			// If previous iteration zeroed out, double until we get *something*.
  			// Use string for doubling so we don't accidentally see scale as unchanged below
  			scale = scale || ".5";

  			// Adjust and apply
  			initialInUnit = initialInUnit / scale;
  			jQuery.style( elem, prop, initialInUnit + unit );

  		// Update scale, tolerating zero or NaN from tween.cur()
  		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
  		} while (
  			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
  		);
  	}

  	if ( valueParts ) {
  		initialInUnit = +initialInUnit || +initial || 0;

  		// Apply relative offset (+=/-=) if specified
  		adjusted = valueParts[ 1 ] ?
  			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
  			+valueParts[ 2 ];
  		if ( tween ) {
  			tween.unit = unit;
  			tween.start = initialInUnit;
  			tween.end = adjusted;
  		}
  	}
  	return adjusted;
  }


  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
  	var i = 0,
  		length = elems.length,
  		bulk = key == null;

  	// Sets many values
  	if ( jQuery.type( key ) === "object" ) {
  		chainable = true;
  		for ( i in key ) {
  			access( elems, fn, i, key[ i ], true, emptyGet, raw );
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
  			for ( ; i < length; i++ ) {
  				fn(
  					elems[ i ],
  					key,
  					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
  				);
  			}
  		}
  	}

  	return chainable ?
  		elems :

  		// Gets
  		bulk ?
  			fn.call( elems ) :
  			length ? fn( elems[ 0 ], key ) : emptyGet;
  };
  var rcheckableType = ( /^(?:checkbox|radio)$/i );

  var rtagName = ( /<([\w:-]+)/ );

  var rscriptType = ( /^$|\/(?:java|ecma)script/i );

  var rleadingWhitespace = ( /^\s+/ );

  var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
  		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
  		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



  function createSafeFragment( document ) {
  	var list = nodeNames.split( "|" ),
  		safeFrag = document.createDocumentFragment();

  	if ( safeFrag.createElement ) {
  		while ( list.length ) {
  			safeFrag.createElement(
  				list.pop()
  			);
  		}
  	}
  	return safeFrag;
  }


  ( function() {
  	var div = document.createElement( "div" ),
  		fragment = document.createDocumentFragment(),
  		input = document.createElement( "input" );

  	// Setup
  	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

  	// IE strips leading whitespace when .innerHTML is used
  	support.leadingWhitespace = div.firstChild.nodeType === 3;

  	// Make sure that tbody elements aren't automatically inserted
  	// IE will insert them into empty tables
  	support.tbody = !div.getElementsByTagName( "tbody" ).length;

  	// Make sure that link elements get serialized correctly by innerHTML
  	// This requires a wrapper element in IE
  	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

  	// Makes sure cloning an html5 element does not cause problems
  	// Where outerHTML is undefined, this still works
  	support.html5Clone =
  		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

  	// Check if a disconnected checkbox will retain its checked
  	// value of true after appended to the DOM (IE6/7)
  	input.type = "checkbox";
  	input.checked = true;
  	fragment.appendChild( input );
  	support.appendChecked = input.checked;

  	// Make sure textarea (and checkbox) defaultValue is properly cloned
  	// Support: IE6-IE11+
  	div.innerHTML = "<textarea>x</textarea>";
  	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

  	// #11217 - WebKit loses check when the name is after the checked attribute
  	fragment.appendChild( div );

  	// Support: Windows Web Apps (WWA)
  	// `name` and `type` must use .setAttribute for WWA (#14901)
  	input = document.createElement( "input" );
  	input.setAttribute( "type", "radio" );
  	input.setAttribute( "checked", "checked" );
  	input.setAttribute( "name", "t" );

  	div.appendChild( input );

  	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
  	// old WebKit doesn't clone checked state correctly in fragments
  	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

  	// Support: IE<9
  	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
  	support.noCloneEvent = !!div.addEventListener;

  	// Support: IE<9
  	// Since attributes and properties are the same in IE,
  	// cleanData must set properties to undefined rather than use removeAttribute
  	div[ jQuery.expando ] = 1;
  	support.attributes = !div.getAttribute( jQuery.expando );
  } )();


  // We have to close these tags to support XHTML (#13200)
  var wrapMap = {
  	option: [ 1, "<select multiple='multiple'>", "</select>" ],
  	legend: [ 1, "<fieldset>", "</fieldset>" ],
  	area: [ 1, "<map>", "</map>" ],

  	// Support: IE8
  	param: [ 1, "<object>", "</object>" ],
  	thead: [ 1, "<table>", "</table>" ],
  	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
  	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

  	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
  	// unless wrapped in a div with non-breaking characters in front of it.
  	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
  };

  // Support: IE8-IE9
  wrapMap.optgroup = wrapMap.option;

  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;


  function getAll( context, tag ) {
  	var elems, elem,
  		i = 0,
  		found = typeof context.getElementsByTagName !== "undefined" ?
  			context.getElementsByTagName( tag || "*" ) :
  			typeof context.querySelectorAll !== "undefined" ?
  				context.querySelectorAll( tag || "*" ) :
  				undefined;

  	if ( !found ) {
  		for ( found = [], elems = context.childNodes || context;
  			( elem = elems[ i ] ) != null;
  			i++
  		) {
  			if ( !tag || jQuery.nodeName( elem, tag ) ) {
  				found.push( elem );
  			} else {
  				jQuery.merge( found, getAll( elem, tag ) );
  			}
  		}
  	}

  	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
  		jQuery.merge( [ context ], found ) :
  		found;
  }


  // Mark scripts as having already been evaluated
  function setGlobalEval( elems, refElements ) {
  	var elem,
  		i = 0;
  	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
  		jQuery._data(
  			elem,
  			"globalEval",
  			!refElements || jQuery._data( refElements[ i ], "globalEval" )
  		);
  	}
  }


  var rhtml = /<|&#?\w+;/,
  	rtbody = /<tbody/i;

  function fixDefaultChecked( elem ) {
  	if ( rcheckableType.test( elem.type ) ) {
  		elem.defaultChecked = elem.checked;
  	}
  }

  function buildFragment( elems, context, scripts, selection, ignored ) {
  	var j, elem, contains,
  		tmp, tag, tbody, wrap,
  		l = elems.length,

  		// Ensure a safe fragment
  		safe = createSafeFragment( context ),

  		nodes = [],
  		i = 0;

  	for ( ; i < l; i++ ) {
  		elem = elems[ i ];

  		if ( elem || elem === 0 ) {

  			// Add nodes directly
  			if ( jQuery.type( elem ) === "object" ) {
  				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

  			// Convert non-html into a text node
  			} else if ( !rhtml.test( elem ) ) {
  				nodes.push( context.createTextNode( elem ) );

  			// Convert html into DOM nodes
  			} else {
  				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

  				// Deserialize a standard representation
  				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
  				wrap = wrapMap[ tag ] || wrapMap._default;

  				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

  				// Descend through wrappers to the right content
  				j = wrap[ 0 ];
  				while ( j-- ) {
  					tmp = tmp.lastChild;
  				}

  				// Manually add leading whitespace removed by IE
  				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
  					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
  				}

  				// Remove IE's autoinserted <tbody> from table fragments
  				if ( !support.tbody ) {

  					// String was a <table>, *may* have spurious <tbody>
  					elem = tag === "table" && !rtbody.test( elem ) ?
  						tmp.firstChild :

  						// String was a bare <thead> or <tfoot>
  						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
  							tmp :
  							0;

  					j = elem && elem.childNodes.length;
  					while ( j-- ) {
  						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
  							!tbody.childNodes.length ) {

  							elem.removeChild( tbody );
  						}
  					}
  				}

  				jQuery.merge( nodes, tmp.childNodes );

  				// Fix #12392 for WebKit and IE > 9
  				tmp.textContent = "";

  				// Fix #12392 for oldIE
  				while ( tmp.firstChild ) {
  					tmp.removeChild( tmp.firstChild );
  				}

  				// Remember the top-level container for proper cleanup
  				tmp = safe.lastChild;
  			}
  		}
  	}

  	// Fix #11356: Clear elements from fragment
  	if ( tmp ) {
  		safe.removeChild( tmp );
  	}

  	// Reset defaultChecked for any radios and checkboxes
  	// about to be appended to the DOM in IE 6/7 (#8060)
  	if ( !support.appendChecked ) {
  		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
  	}

  	i = 0;
  	while ( ( elem = nodes[ i++ ] ) ) {

  		// Skip elements already in the context collection (trac-4087)
  		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
  			if ( ignored ) {
  				ignored.push( elem );
  			}

  			continue;
  		}

  		contains = jQuery.contains( elem.ownerDocument, elem );

  		// Append to fragment
  		tmp = getAll( safe.appendChild( elem ), "script" );

  		// Preserve script evaluation history
  		if ( contains ) {
  			setGlobalEval( tmp );
  		}

  		// Capture executables
  		if ( scripts ) {
  			j = 0;
  			while ( ( elem = tmp[ j++ ] ) ) {
  				if ( rscriptType.test( elem.type || "" ) ) {
  					scripts.push( elem );
  				}
  			}
  		}
  	}

  	tmp = null;

  	return safe;
  }


  ( function() {
  	var i, eventName,
  		div = document.createElement( "div" );

  	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
  	for ( i in { submit: true, change: true, focusin: true } ) {
  		eventName = "on" + i;

  		if ( !( support[ i ] = eventName in window ) ) {

  			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
  			div.setAttribute( eventName, "t" );
  			support[ i ] = div.attributes[ eventName ].expando === false;
  		}
  	}

  	// Null elements to avoid leaks in IE.
  	div = null;
  } )();


  var rformElems = /^(?:input|select|textarea)$/i,
  	rkeyEvent = /^key/,
  	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
  	return true;
  }

  function returnFalse() {
  	return false;
  }

  // Support: IE9
  // See #13393 for more info
  function safeActiveElement() {
  	try {
  		return document.activeElement;
  	} catch ( err ) { }
  }

  function on( elem, types, selector, data, fn, one ) {
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
  			on( elem, type, selector, data, types[ type ], one );
  		}
  		return elem;
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
  		return elem;
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
  	return elem.each( function() {
  		jQuery.event.add( this, types, fn, data, selector );
  	} );
  }

  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  jQuery.event = {

  	global: {},

  	add: function( elem, types, handler, data, selector ) {
  		var tmp, events, t, handleObjIn,
  			special, eventHandle, handleObj,
  			handlers, type, namespaces, origType,
  			elemData = jQuery._data( elem );

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
  		if ( !( events = elemData.events ) ) {
  			events = elemData.events = {};
  		}
  		if ( !( eventHandle = elemData.handle ) ) {
  			eventHandle = elemData.handle = function( e ) {

  				// Discard the second event of a jQuery.event.trigger() and
  				// when an event is called after a page has unloaded
  				return typeof jQuery !== "undefined" &&
  					( !e || jQuery.event.triggered !== e.type ) ?
  					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
  					undefined;
  			};

  			// Add elem as a property of the handle fn to prevent a memory leak
  			// with IE non-native events
  			eventHandle.elem = elem;
  		}

  		// Handle multiple events separated by a space
  		types = ( types || "" ).match( rnotwhite ) || [ "" ];
  		t = types.length;
  		while ( t-- ) {
  			tmp = rtypenamespace.exec( types[ t ] ) || [];
  			type = origType = tmp[ 1 ];
  			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

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
  			handleObj = jQuery.extend( {
  				type: type,
  				origType: origType,
  				data: data,
  				handler: handler,
  				guid: handler.guid,
  				selector: selector,
  				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
  				namespace: namespaces.join( "." )
  			}, handleObjIn );

  			// Init the event handler queue if we're the first
  			if ( !( handlers = events[ type ] ) ) {
  				handlers = events[ type ] = [];
  				handlers.delegateCount = 0;

  				// Only use addEventListener/attachEvent if the special events handler returns false
  				if ( !special.setup ||
  					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

  					// Bind the global event handler to the element
  					if ( elem.addEventListener ) {
  						elem.addEventListener( type, eventHandle, false );

  					} else if ( elem.attachEvent ) {
  						elem.attachEvent( "on" + type, eventHandle );
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

  		// Nullify elem to prevent memory leaks in IE
  		elem = null;
  	},

  	// Detach an event or set of events from an element
  	remove: function( elem, types, handler, selector, mappedTypes ) {
  		var j, handleObj, tmp,
  			origCount, t, events,
  			special, handlers, type,
  			namespaces, origType,
  			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

  		if ( !elemData || !( events = elemData.events ) ) {
  			return;
  		}

  		// Once for each type.namespace in types; type may be omitted
  		types = ( types || "" ).match( rnotwhite ) || [ "" ];
  		t = types.length;
  		while ( t-- ) {
  			tmp = rtypenamespace.exec( types[ t ] ) || [];
  			type = origType = tmp[ 1 ];
  			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

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
  			tmp = tmp[ 2 ] &&
  				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

  			// Remove matching events
  			origCount = j = handlers.length;
  			while ( j-- ) {
  				handleObj = handlers[ j ];

  				if ( ( mappedTypes || origType === handleObj.origType ) &&
  					( !handler || handler.guid === handleObj.guid ) &&
  					( !tmp || tmp.test( handleObj.namespace ) ) &&
  					( !selector || selector === handleObj.selector ||
  						selector === "**" && handleObj.selector ) ) {
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
  				if ( !special.teardown ||
  					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

  					jQuery.removeEvent( elem, type, elemData.handle );
  				}

  				delete events[ type ];
  			}
  		}

  		// Remove the expando if it's no longer used
  		if ( jQuery.isEmptyObject( events ) ) {
  			delete elemData.handle;

  			// removeData also checks for emptiness and clears the expando if empty
  			// so use it instead of delete
  			jQuery._removeData( elem, "events" );
  		}
  	},

  	trigger: function( event, data, elem, onlyHandlers ) {
  		var handle, ontype, cur,
  			bubbleType, special, tmp, i,
  			eventPath = [ elem || document ],
  			type = hasOwn.call( event, "type" ) ? event.type : event,
  			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

  		cur = tmp = elem = elem || document;

  		// Don't do events on text and comment nodes
  		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
  			return;
  		}

  		// focus/blur morphs to focusin/out; ensure we're not firing them right now
  		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
  			return;
  		}

  		if ( type.indexOf( "." ) > -1 ) {

  			// Namespaced trigger; create a regexp to match event type in handle()
  			namespaces = type.split( "." );
  			type = namespaces.shift();
  			namespaces.sort();
  		}
  		ontype = type.indexOf( ":" ) < 0 && "on" + type;

  		// Caller can pass in a jQuery.Event object, Object, or just an event type string
  		event = event[ jQuery.expando ] ?
  			event :
  			new jQuery.Event( type, typeof event === "object" && event );

  		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
  		event.isTrigger = onlyHandlers ? 2 : 3;
  		event.namespace = namespaces.join( "." );
  		event.rnamespace = event.namespace ?
  			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
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
  			if ( tmp === ( elem.ownerDocument || document ) ) {
  				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
  			}
  		}

  		// Fire handlers on the event path
  		i = 0;
  		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

  			event.type = i > 1 ?
  				bubbleType :
  				special.bindType || type;

  			// jQuery handler
  			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
  				jQuery._data( cur, "handle" );

  			if ( handle ) {
  				handle.apply( cur, data );
  			}

  			// Native handler
  			handle = ontype && cur[ ontype ];
  			if ( handle && handle.apply && acceptData( cur ) ) {
  				event.result = handle.apply( cur, data );
  				if ( event.result === false ) {
  					event.preventDefault();
  				}
  			}
  		}
  		event.type = type;

  		// If nobody prevented the default action, do it now
  		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

  			if (
  				( !special._default ||
  				 special._default.apply( eventPath.pop(), data ) === false
  				) && acceptData( elem )
  			) {

  				// Call a native DOM method on the target with the same name name as the event.
  				// Can't use an .isFunction() check here because IE6/7 fails that test.
  				// Don't do default actions on window, that's where global variables be (#6170)
  				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

  					// Don't re-trigger an onFOO event when we call its FOO() method
  					tmp = elem[ ontype ];

  					if ( tmp ) {
  						elem[ ontype ] = null;
  					}

  					// Prevent re-triggering of the same event, since we already bubbled it above
  					jQuery.event.triggered = type;
  					try {
  						elem[ type ]();
  					} catch ( e ) {

  						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
  						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
  					}
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
  			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
  			special = jQuery.event.special[ event.type ] || {};

  		// Use the fix-ed jQuery.Event rather than the (read-only) native event
  		args[ 0 ] = event;
  		event.delegateTarget = this;

  		// Call the preDispatch hook for the mapped type, and let it bail if desired
  		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
  			return;
  		}

  		// Determine handlers
  		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

  		// Run delegates first; they may want to stop propagation beneath us
  		i = 0;
  		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
  			event.currentTarget = matched.elem;

  			j = 0;
  			while ( ( handleObj = matched.handlers[ j++ ] ) &&
  				!event.isImmediatePropagationStopped() ) {

  				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
  				// a subset or equal to those in the bound event (both can have no namespace).
  				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

  					event.handleObj = handleObj;
  					event.data = handleObj.data;

  					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
  						handleObj.handler ).apply( matched.elem, args );

  					if ( ret !== undefined ) {
  						if ( ( event.result = ret ) === false ) {
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

  		// Support (at least): Chrome, IE9
  		// Find delegate handlers
  		// Black-hole SVG <use> instance trees (#13180)
  		//
  		// Support: Firefox<=42+
  		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
  		if ( delegateCount && cur.nodeType &&
  			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

  			/* jshint eqeqeq: false */
  			for ( ; cur != this; cur = cur.parentNode || this ) {
  				/* jshint eqeqeq: true */

  				// Don't check non-elements (#13208)
  				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
  				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
  					matches = [];
  					for ( i = 0; i < delegateCount; i++ ) {
  						handleObj = handlers[ i ];

  						// Don't conflict with Object.prototype properties (#13203)
  						sel = handleObj.selector + " ";

  						if ( matches[ sel ] === undefined ) {
  							matches[ sel ] = handleObj.needsContext ?
  								jQuery( sel, this ).index( cur ) > -1 :
  								jQuery.find( sel, this, null, [ cur ] ).length;
  						}
  						if ( matches[ sel ] ) {
  							matches.push( handleObj );
  						}
  					}
  					if ( matches.length ) {
  						handlerQueue.push( { elem: cur, handlers: matches } );
  					}
  				}
  			}
  		}

  		// Add the remaining (directly-bound) handlers
  		if ( delegateCount < handlers.length ) {
  			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
  		}

  		return handlerQueue;
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

  		// Support: IE<9
  		// Fix target property (#1925)
  		if ( !event.target ) {
  			event.target = originalEvent.srcElement || document;
  		}

  		// Support: Safari 6-8+
  		// Target should not be a text node (#504, #13143)
  		if ( event.target.nodeType === 3 ) {
  			event.target = event.target.parentNode;
  		}

  		// Support: IE<9
  		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
  		event.metaKey = !!event.metaKey;

  		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
  	},

  	// Includes some event props shared by KeyEvent and MouseEvent
  	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
  		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

  	fixHooks: {},

  	keyHooks: {
  		props: "char charCode key keyCode".split( " " ),
  		filter: function( event, original ) {

  			// Add which for key events
  			if ( event.which == null ) {
  				event.which = original.charCode != null ? original.charCode : original.keyCode;
  			}

  			return event;
  		}
  	},

  	mouseHooks: {
  		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
  			"pageX pageY screenX screenY toElement" ).split( " " ),
  		filter: function( event, original ) {
  			var body, eventDoc, doc,
  				button = original.button,
  				fromElement = original.fromElement;

  			// Calculate pageX/Y if missing and clientX/Y available
  			if ( event.pageX == null && original.clientX != null ) {
  				eventDoc = event.target.ownerDocument || document;
  				doc = eventDoc.documentElement;
  				body = eventDoc.body;

  				event.pageX = original.clientX +
  					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
  					( doc && doc.clientLeft || body && body.clientLeft || 0 );
  				event.pageY = original.clientY +
  					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
  					( doc && doc.clientTop  || body && body.clientTop  || 0 );
  			}

  			// Add relatedTarget, if necessary
  			if ( !event.relatedTarget && fromElement ) {
  				event.relatedTarget = fromElement === event.target ?
  					original.toElement :
  					fromElement;
  			}

  			// Add which for click: 1 === left; 2 === middle; 3 === right
  			// Note: button is not normalized, so don't use it
  			if ( !event.which && button !== undefined ) {
  				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
  			}

  			return event;
  		}
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
  					try {
  						this.focus();
  						return false;
  					} catch ( e ) {

  						// Support: IE<9
  						// If we error on focus to hidden element (#1486, #12518),
  						// let .trigger() run the handlers
  					}
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
  				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
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

  	// Piggyback on a donor event to simulate a different one
  	simulate: function( type, elem, event ) {
  		var e = jQuery.extend(
  			new jQuery.Event(),
  			event,
  			{
  				type: type,
  				isSimulated: true

  				// Previously, `originalEvent: {}` was set here, so stopPropagation call
  				// would not be triggered on donor event, since in our own
  				// jQuery.event.stopPropagation function we had a check for existence of
  				// originalEvent.stopPropagation method, so, consequently it would be a noop.
  				//
  				// Guard for simulated events was moved to jQuery.event.stopPropagation function
  				// since `originalEvent` should point to the original event for the
  				// constancy with other events and for more focused logic
  			}
  		);

  		jQuery.event.trigger( e, null, elem );

  		if ( e.isDefaultPrevented() ) {
  			event.preventDefault();
  		}
  	}
  };

  jQuery.removeEvent = document.removeEventListener ?
  	function( elem, type, handle ) {

  		// This "if" is needed for plain objects
  		if ( elem.removeEventListener ) {
  			elem.removeEventListener( type, handle );
  		}
  	} :
  	function( elem, type, handle ) {
  		var name = "on" + type;

  		if ( elem.detachEvent ) {

  			// #8545, #7054, preventing memory leaks for custom events in IE6-8
  			// detachEvent needed property on element, by name of that event,
  			// to properly expose it to GC
  			if ( typeof elem[ name ] === "undefined" ) {
  				elem[ name ] = null;
  			}

  			elem.detachEvent( name, handle );
  		}
  	};

  jQuery.Event = function( src, props ) {

  	// Allow instantiation without the 'new' keyword
  	if ( !( this instanceof jQuery.Event ) ) {
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

  				// Support: IE < 9, Android < 4.0
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
  	constructor: jQuery.Event,
  	isDefaultPrevented: returnFalse,
  	isPropagationStopped: returnFalse,
  	isImmediatePropagationStopped: returnFalse,

  	preventDefault: function() {
  		var e = this.originalEvent;

  		this.isDefaultPrevented = returnTrue;
  		if ( !e ) {
  			return;
  		}

  		// If preventDefault exists, run it on the original event
  		if ( e.preventDefault ) {
  			e.preventDefault();

  		// Support: IE
  		// Otherwise set the returnValue property of the original event to false
  		} else {
  			e.returnValue = false;
  		}
  	},
  	stopPropagation: function() {
  		var e = this.originalEvent;

  		this.isPropagationStopped = returnTrue;

  		if ( !e || this.isSimulated ) {
  			return;
  		}

  		// If stopPropagation exists, run it on the original event
  		if ( e.stopPropagation ) {
  			e.stopPropagation();
  		}

  		// Support: IE
  		// Set the cancelBubble property of the original event to true
  		e.cancelBubble = true;
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
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://code.google.com/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  jQuery.each( {
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

  			// For mouseenter/leave call the handler if related is outside the target.
  			// NB: No relatedTarget if the mouse left/entered the browser window
  			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
  				event.type = handleObj.origType;
  				ret = handleObj.handler.apply( this, arguments );
  				event.type = fix;
  			}
  			return ret;
  		}
  	};
  } );

  // IE submit delegation
  if ( !support.submit ) {

  	jQuery.event.special.submit = {
  		setup: function() {

  			// Only need this for delegated form submit events
  			if ( jQuery.nodeName( this, "form" ) ) {
  				return false;
  			}

  			// Lazy-add a submit handler when a descendant form may potentially be submitted
  			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

  				// Node name check avoids a VML-related crash in IE (#9807)
  				var elem = e.target,
  					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

  						// Support: IE <=8
  						// We use jQuery.prop instead of elem.form
  						// to allow fixing the IE8 delegated submit issue (gh-2332)
  						// by 3rd party polyfills/workarounds.
  						jQuery.prop( elem, "form" ) :
  						undefined;

  				if ( form && !jQuery._data( form, "submit" ) ) {
  					jQuery.event.add( form, "submit._submit", function( event ) {
  						event._submitBubble = true;
  					} );
  					jQuery._data( form, "submit", true );
  				}
  			} );

  			// return undefined since we don't need an event listener
  		},

  		postDispatch: function( event ) {

  			// If form was submitted by the user, bubble the event up the tree
  			if ( event._submitBubble ) {
  				delete event._submitBubble;
  				if ( this.parentNode && !event.isTrigger ) {
  					jQuery.event.simulate( "submit", this.parentNode, event );
  				}
  			}
  		},

  		teardown: function() {

  			// Only need this for delegated form submit events
  			if ( jQuery.nodeName( this, "form" ) ) {
  				return false;
  			}

  			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
  			jQuery.event.remove( this, "._submit" );
  		}
  	};
  }

  // IE change delegation and checkbox/radio fix
  if ( !support.change ) {

  	jQuery.event.special.change = {

  		setup: function() {

  			if ( rformElems.test( this.nodeName ) ) {

  				// IE doesn't fire change on a check/radio until blur; trigger it on click
  				// after a propertychange. Eat the blur-change in special.change.handle.
  				// This still fires onchange a second time for check/radio after blur.
  				if ( this.type === "checkbox" || this.type === "radio" ) {
  					jQuery.event.add( this, "propertychange._change", function( event ) {
  						if ( event.originalEvent.propertyName === "checked" ) {
  							this._justChanged = true;
  						}
  					} );
  					jQuery.event.add( this, "click._change", function( event ) {
  						if ( this._justChanged && !event.isTrigger ) {
  							this._justChanged = false;
  						}

  						// Allow triggered, simulated change events (#11500)
  						jQuery.event.simulate( "change", this, event );
  					} );
  				}
  				return false;
  			}

  			// Delegated event; lazy-add a change handler on descendant inputs
  			jQuery.event.add( this, "beforeactivate._change", function( e ) {
  				var elem = e.target;

  				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
  					jQuery.event.add( elem, "change._change", function( event ) {
  						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
  							jQuery.event.simulate( "change", this.parentNode, event );
  						}
  					} );
  					jQuery._data( elem, "change", true );
  				}
  			} );
  		},

  		handle: function( event ) {
  			var elem = event.target;

  			// Swallow native change events from checkbox/radio, we already triggered them above
  			if ( this !== elem || event.isSimulated || event.isTrigger ||
  				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

  				return event.handleObj.handler.apply( this, arguments );
  			}
  		},

  		teardown: function() {
  			jQuery.event.remove( this, "._change" );

  			return !rformElems.test( this.nodeName );
  		}
  	};
  }

  // Support: Firefox
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome, Safari
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
  if ( !support.focusin ) {
  	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

  		// Attach a single capturing handler on the document while someone wants focusin/focusout
  		var handler = function( event ) {
  			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
  		};

  		jQuery.event.special[ fix ] = {
  			setup: function() {
  				var doc = this.ownerDocument || this,
  					attaches = jQuery._data( doc, fix );

  				if ( !attaches ) {
  					doc.addEventListener( orig, handler, true );
  				}
  				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
  			},
  			teardown: function() {
  				var doc = this.ownerDocument || this,
  					attaches = jQuery._data( doc, fix ) - 1;

  				if ( !attaches ) {
  					doc.removeEventListener( orig, handler, true );
  					jQuery._removeData( doc, fix );
  				} else {
  					jQuery._data( doc, fix, attaches );
  				}
  			}
  		};
  	} );
  }

  jQuery.fn.extend( {

  	on: function( types, selector, data, fn ) {
  		return on( this, types, selector, data, fn );
  	},
  	one: function( types, selector, data, fn ) {
  		return on( this, types, selector, data, fn, 1 );
  	},
  	off: function( types, selector, fn ) {
  		var handleObj, type;
  		if ( types && types.preventDefault && types.handleObj ) {

  			// ( event )  dispatched jQuery.Event
  			handleObj = types.handleObj;
  			jQuery( types.delegateTarget ).off(
  				handleObj.namespace ?
  					handleObj.origType + "." + handleObj.namespace :
  					handleObj.origType,
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
  		return this.each( function() {
  			jQuery.event.remove( this, types, fn, selector );
  		} );
  	},

  	trigger: function( type, data ) {
  		return this.each( function() {
  			jQuery.event.trigger( type, data, this );
  		} );
  	},
  	triggerHandler: function( type, data ) {
  		var elem = this[ 0 ];
  		if ( elem ) {
  			return jQuery.event.trigger( type, data, elem, true );
  		}
  	}
  } );


  var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
  	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
  	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

  	// Support: IE 10-11, Edge 10240+
  	// In IE/Edge using regex groups here causes severe slowdowns.
  	// See https://connect.microsoft.com/IE/feedback/details/1736512/
  	rnoInnerhtml = /<script|<style|<link/i,

  	// checked="checked" or checked
  	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  	rscriptTypeMasked = /^true\/(.*)/,
  	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  	safeFragment = createSafeFragment( document ),
  	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

  // Support: IE<8
  // Manipulating tables requires a tbody
  function manipulationTarget( elem, content ) {
  	return jQuery.nodeName( elem, "table" ) &&
  		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

  		elem.getElementsByTagName( "tbody" )[ 0 ] ||
  			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
  		elem;
  }

  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript( elem ) {
  	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
  	return elem;
  }
  function restoreScript( elem ) {
  	var match = rscriptTypeMasked.exec( elem.type );
  	if ( match ) {
  		elem.type = match[ 1 ];
  	} else {
  		elem.removeAttribute( "type" );
  	}
  	return elem;
  }

  function cloneCopyEvent( src, dest ) {
  	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
  		return;
  	}

  	var type, i, l,
  		oldData = jQuery._data( src ),
  		curData = jQuery._data( dest, oldData ),
  		events = oldData.events;

  	if ( events ) {
  		delete curData.handle;
  		curData.events = {};

  		for ( type in events ) {
  			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
  				jQuery.event.add( dest, type, events[ type ][ i ] );
  			}
  		}
  	}

  	// make the cloned public data object a copy from the original
  	if ( curData.data ) {
  		curData.data = jQuery.extend( {}, curData.data );
  	}
  }

  function fixCloneNodeIssues( src, dest ) {
  	var nodeName, e, data;

  	// We do not need to do anything for non-Elements
  	if ( dest.nodeType !== 1 ) {
  		return;
  	}

  	nodeName = dest.nodeName.toLowerCase();

  	// IE6-8 copies events bound via attachEvent when using cloneNode.
  	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
  		data = jQuery._data( dest );

  		for ( e in data.events ) {
  			jQuery.removeEvent( dest, e, data.handle );
  		}

  		// Event data gets referenced instead of copied if the expando gets copied too
  		dest.removeAttribute( jQuery.expando );
  	}

  	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
  	if ( nodeName === "script" && dest.text !== src.text ) {
  		disableScript( dest ).text = src.text;
  		restoreScript( dest );

  	// IE6-10 improperly clones children of object elements using classid.
  	// IE10 throws NoModificationAllowedError if parent is null, #12132.
  	} else if ( nodeName === "object" ) {
  		if ( dest.parentNode ) {
  			dest.outerHTML = src.outerHTML;
  		}

  		// This path appears unavoidable for IE9. When cloning an object
  		// element in IE9, the outerHTML strategy above is not sufficient.
  		// If the src has innerHTML and the destination does not,
  		// copy the src.innerHTML into the dest.innerHTML. #10324
  		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
  			dest.innerHTML = src.innerHTML;
  		}

  	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

  		// IE6-8 fails to persist the checked state of a cloned checkbox
  		// or radio button. Worse, IE6-7 fail to give the cloned element
  		// a checked appearance if the defaultChecked value isn't also set

  		dest.defaultChecked = dest.checked = src.checked;

  		// IE6-7 get confused and end up setting the value of a cloned
  		// checkbox/radio button to an empty string instead of "on"
  		if ( dest.value !== src.value ) {
  			dest.value = src.value;
  		}

  	// IE6-8 fails to return the selected option to the default selected
  	// state when cloning options
  	} else if ( nodeName === "option" ) {
  		dest.defaultSelected = dest.selected = src.defaultSelected;

  	// IE6-8 fails to set the defaultValue to the correct value when
  	// cloning other types of input fields
  	} else if ( nodeName === "input" || nodeName === "textarea" ) {
  		dest.defaultValue = src.defaultValue;
  	}
  }

  function domManip( collection, args, callback, ignored ) {

  	// Flatten any nested arrays
  	args = concat.apply( [], args );

  	var first, node, hasScripts,
  		scripts, doc, fragment,
  		i = 0,
  		l = collection.length,
  		iNoClone = l - 1,
  		value = args[ 0 ],
  		isFunction = jQuery.isFunction( value );

  	// We can't cloneNode fragments that contain checked, in WebKit
  	if ( isFunction ||
  			( l > 1 && typeof value === "string" &&
  				!support.checkClone && rchecked.test( value ) ) ) {
  		return collection.each( function( index ) {
  			var self = collection.eq( index );
  			if ( isFunction ) {
  				args[ 0 ] = value.call( this, index, self.html() );
  			}
  			domManip( self, args, callback, ignored );
  		} );
  	}

  	if ( l ) {
  		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
  		first = fragment.firstChild;

  		if ( fragment.childNodes.length === 1 ) {
  			fragment = first;
  		}

  		// Require either new content or an interest in ignored elements to invoke the callback
  		if ( first || ignored ) {
  			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
  			hasScripts = scripts.length;

  			// Use the original fragment for the last item
  			// instead of the first because it can end up
  			// being emptied incorrectly in certain situations (#8070).
  			for ( ; i < l; i++ ) {
  				node = fragment;

  				if ( i !== iNoClone ) {
  					node = jQuery.clone( node, true, true );

  					// Keep references to cloned scripts for later restoration
  					if ( hasScripts ) {

  						// Support: Android<4.1, PhantomJS<2
  						// push.apply(_, arraylike) throws on ancient WebKit
  						jQuery.merge( scripts, getAll( node, "script" ) );
  					}
  				}

  				callback.call( collection[ i ], node, i );
  			}

  			if ( hasScripts ) {
  				doc = scripts[ scripts.length - 1 ].ownerDocument;

  				// Reenable scripts
  				jQuery.map( scripts, restoreScript );

  				// Evaluate executable scripts on first document insertion
  				for ( i = 0; i < hasScripts; i++ ) {
  					node = scripts[ i ];
  					if ( rscriptType.test( node.type || "" ) &&
  						!jQuery._data( node, "globalEval" ) &&
  						jQuery.contains( doc, node ) ) {

  						if ( node.src ) {

  							// Optional AJAX dependency, but won't run scripts if not present
  							if ( jQuery._evalUrl ) {
  								jQuery._evalUrl( node.src );
  							}
  						} else {
  							jQuery.globalEval(
  								( node.text || node.textContent || node.innerHTML || "" )
  									.replace( rcleanScript, "" )
  							);
  						}
  					}
  				}
  			}

  			// Fix #11809: Avoid leaking memory
  			fragment = first = null;
  		}
  	}

  	return collection;
  }

  function remove( elem, selector, keepData ) {
  	var node,
  		elems = selector ? jQuery.filter( selector, elem ) : elem,
  		i = 0;

  	for ( ; ( node = elems[ i ] ) != null; i++ ) {

  		if ( !keepData && node.nodeType === 1 ) {
  			jQuery.cleanData( getAll( node ) );
  		}

  		if ( node.parentNode ) {
  			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
  				setGlobalEval( getAll( node, "script" ) );
  			}
  			node.parentNode.removeChild( node );
  		}
  	}

  	return elem;
  }

  jQuery.extend( {
  	htmlPrefilter: function( html ) {
  		return html.replace( rxhtmlTag, "<$1></$2>" );
  	},

  	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
  		var destElements, node, clone, i, srcElements,
  			inPage = jQuery.contains( elem.ownerDocument, elem );

  		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
  			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

  			clone = elem.cloneNode( true );

  		// IE<=8 does not properly clone detached, unknown element nodes
  		} else {
  			fragmentDiv.innerHTML = elem.outerHTML;
  			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
  		}

  		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
  				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

  			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
  			destElements = getAll( clone );
  			srcElements = getAll( elem );

  			// Fix all IE cloning issues
  			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

  				// Ensure that the destination node is not null; Fixes #9587
  				if ( destElements[ i ] ) {
  					fixCloneNodeIssues( node, destElements[ i ] );
  				}
  			}
  		}

  		// Copy the events from the original to the clone
  		if ( dataAndEvents ) {
  			if ( deepDataAndEvents ) {
  				srcElements = srcElements || getAll( elem );
  				destElements = destElements || getAll( clone );

  				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
  					cloneCopyEvent( node, destElements[ i ] );
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

  		destElements = srcElements = node = null;

  		// Return the cloned set
  		return clone;
  	},

  	cleanData: function( elems, /* internal */ forceAcceptData ) {
  		var elem, type, id, data,
  			i = 0,
  			internalKey = jQuery.expando,
  			cache = jQuery.cache,
  			attributes = support.attributes,
  			special = jQuery.event.special;

  		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
  			if ( forceAcceptData || acceptData( elem ) ) {

  				id = elem[ internalKey ];
  				data = id && cache[ id ];

  				if ( data ) {
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

  					// Remove cache only if it was not already removed by jQuery.event.remove
  					if ( cache[ id ] ) {

  						delete cache[ id ];

  						// Support: IE<9
  						// IE does not allow us to delete expando properties from nodes
  						// IE creates expando attributes along with the property
  						// IE does not have a removeAttribute function on Document nodes
  						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
  							elem.removeAttribute( internalKey );

  						// Webkit & Blink performance suffers when deleting properties
  						// from DOM nodes, so set to undefined instead
  						// https://code.google.com/p/chromium/issues/detail?id=378607
  						} else {
  							elem[ internalKey ] = undefined;
  						}

  						deletedIds.push( id );
  					}
  				}
  			}
  		}
  	}
  } );

  jQuery.fn.extend( {

  	// Keep domManip exposed until 3.0 (gh-2225)
  	domManip: domManip,

  	detach: function( selector ) {
  		return remove( this, selector, true );
  	},

  	remove: function( selector ) {
  		return remove( this, selector );
  	},

  	text: function( value ) {
  		return access( this, function( value ) {
  			return value === undefined ?
  				jQuery.text( this ) :
  				this.empty().append(
  					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
  				);
  		}, null, value, arguments.length );
  	},

  	append: function() {
  		return domManip( this, arguments, function( elem ) {
  			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
  				var target = manipulationTarget( this, elem );
  				target.appendChild( elem );
  			}
  		} );
  	},

  	prepend: function() {
  		return domManip( this, arguments, function( elem ) {
  			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
  				var target = manipulationTarget( this, elem );
  				target.insertBefore( elem, target.firstChild );
  			}
  		} );
  	},

  	before: function() {
  		return domManip( this, arguments, function( elem ) {
  			if ( this.parentNode ) {
  				this.parentNode.insertBefore( elem, this );
  			}
  		} );
  	},

  	after: function() {
  		return domManip( this, arguments, function( elem ) {
  			if ( this.parentNode ) {
  				this.parentNode.insertBefore( elem, this.nextSibling );
  			}
  		} );
  	},

  	empty: function() {
  		var elem,
  			i = 0;

  		for ( ; ( elem = this[ i ] ) != null; i++ ) {

  			// Remove element nodes and prevent memory leaks
  			if ( elem.nodeType === 1 ) {
  				jQuery.cleanData( getAll( elem, false ) );
  			}

  			// Remove any remaining nodes
  			while ( elem.firstChild ) {
  				elem.removeChild( elem.firstChild );
  			}

  			// If this is a select, ensure that it displays empty (#12336)
  			// Support: IE<9
  			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
  				elem.options.length = 0;
  			}
  		}

  		return this;
  	},

  	clone: function( dataAndEvents, deepDataAndEvents ) {
  		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
  		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

  		return this.map( function() {
  			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
  		} );
  	},

  	html: function( value ) {
  		return access( this, function( value ) {
  			var elem = this[ 0 ] || {},
  				i = 0,
  				l = this.length;

  			if ( value === undefined ) {
  				return elem.nodeType === 1 ?
  					elem.innerHTML.replace( rinlinejQuery, "" ) :
  					undefined;
  			}

  			// See if we can take a shortcut and just use innerHTML
  			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
  				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
  				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
  				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

  				value = jQuery.htmlPrefilter( value );

  				try {
  					for ( ; i < l; i++ ) {

  						// Remove element nodes and prevent memory leaks
  						elem = this[ i ] || {};
  						if ( elem.nodeType === 1 ) {
  							jQuery.cleanData( getAll( elem, false ) );
  							elem.innerHTML = value;
  						}
  					}

  					elem = 0;

  				// If using innerHTML throws an exception, use the fallback method
  				} catch ( e ) {}
  			}

  			if ( elem ) {
  				this.empty().append( value );
  			}
  		}, null, value, arguments.length );
  	},

  	replaceWith: function() {
  		var ignored = [];

  		// Make the changes, replacing each non-ignored context element with the new content
  		return domManip( this, arguments, function( elem ) {
  			var parent = this.parentNode;

  			if ( jQuery.inArray( this, ignored ) < 0 ) {
  				jQuery.cleanData( getAll( this ) );
  				if ( parent ) {
  					parent.replaceChild( elem, this );
  				}
  			}

  		// Force callback invocation
  		}, ignored );
  	}
  } );

  jQuery.each( {
  	appendTo: "append",
  	prependTo: "prepend",
  	insertBefore: "before",
  	insertAfter: "after",
  	replaceAll: "replaceWith"
  }, function( name, original ) {
  	jQuery.fn[ name ] = function( selector ) {
  		var elems,
  			i = 0,
  			ret = [],
  			insert = jQuery( selector ),
  			last = insert.length - 1;

  		for ( ; i <= last; i++ ) {
  			elems = i === last ? this : this.clone( true );
  			jQuery( insert[ i ] )[ original ]( elems );

  			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
  			push.apply( ret, elems.get() );
  		}

  		return this.pushStack( ret );
  	};
  } );


  var iframe,
  	elemdisplay = {

  		// Support: Firefox
  		// We have to pre-define these values for FF (#10227)
  		HTML: "block",
  		BODY: "block"
  	};

  /**
   * Retrieve the actual display of a element
   * @param {String} name nodeName of the element
   * @param {Object} doc Document object
   */

  // Called only from within defaultDisplay
  function actualDisplay( name, doc ) {
  	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

  		display = jQuery.css( elem[ 0 ], "display" );

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
  			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
  				.appendTo( doc.documentElement );

  			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
  			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

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
  var rmargin = ( /^margin/ );

  var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

  var swap = function( elem, options, callback, args ) {
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


  var documentElement = document.documentElement;



  ( function() {
  	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
  		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
  		container = document.createElement( "div" ),
  		div = document.createElement( "div" );

  	// Finish early in limited (non-browser) environments
  	if ( !div.style ) {
  		return;
  	}

  	div.style.cssText = "float:left;opacity:.5";

  	// Support: IE<9
  	// Make sure that element opacity exists (as opposed to filter)
  	support.opacity = div.style.opacity === "0.5";

  	// Verify style float existence
  	// (IE uses styleFloat instead of cssFloat)
  	support.cssFloat = !!div.style.cssFloat;

  	div.style.backgroundClip = "content-box";
  	div.cloneNode( true ).style.backgroundClip = "";
  	support.clearCloneStyle = div.style.backgroundClip === "content-box";

  	container = document.createElement( "div" );
  	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
  		"padding:0;margin-top:1px;position:absolute";
  	div.innerHTML = "";
  	container.appendChild( div );

  	// Support: Firefox<29, Android 2.3
  	// Vendor-prefix box-sizing
  	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
  		div.style.WebkitBoxSizing === "";

  	jQuery.extend( support, {
  		reliableHiddenOffsets: function() {
  			if ( pixelPositionVal == null ) {
  				computeStyleTests();
  			}
  			return reliableHiddenOffsetsVal;
  		},

  		boxSizingReliable: function() {

  			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
  			// since that compresses better and they're computed together anyway.
  			if ( pixelPositionVal == null ) {
  				computeStyleTests();
  			}
  			return boxSizingReliableVal;
  		},

  		pixelMarginRight: function() {

  			// Support: Android 4.0-4.3
  			if ( pixelPositionVal == null ) {
  				computeStyleTests();
  			}
  			return pixelMarginRightVal;
  		},

  		pixelPosition: function() {
  			if ( pixelPositionVal == null ) {
  				computeStyleTests();
  			}
  			return pixelPositionVal;
  		},

  		reliableMarginRight: function() {

  			// Support: Android 2.3
  			if ( pixelPositionVal == null ) {
  				computeStyleTests();
  			}
  			return reliableMarginRightVal;
  		},

  		reliableMarginLeft: function() {

  			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
  			if ( pixelPositionVal == null ) {
  				computeStyleTests();
  			}
  			return reliableMarginLeftVal;
  		}
  	} );

  	function computeStyleTests() {
  		var contents, divStyle,
  			documentElement = document.documentElement;

  		// Setup
  		documentElement.appendChild( container );

  		div.style.cssText =

  			// Support: Android 2.3
  			// Vendor-prefix box-sizing
  			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
  			"position:relative;display:block;" +
  			"margin:auto;border:1px;padding:1px;" +
  			"top:1%;width:50%";

  		// Support: IE<9
  		// Assume reasonable values in the absence of getComputedStyle
  		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
  		pixelMarginRightVal = reliableMarginRightVal = true;

  		// Check for getComputedStyle so that this code is not run in IE<9.
  		if ( window.getComputedStyle ) {
  			divStyle = window.getComputedStyle( div );
  			pixelPositionVal = ( divStyle || {} ).top !== "1%";
  			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
  			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

  			// Support: Android 4.0 - 4.3 only
  			// Some styles come back with percentage values, even though they shouldn't
  			div.style.marginRight = "50%";
  			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

  			// Support: Android 2.3 only
  			// Div with explicit width and no margin-right incorrectly
  			// gets computed margin-right based on width of container (#3333)
  			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
  			contents = div.appendChild( document.createElement( "div" ) );

  			// Reset CSS: box-sizing; display; margin; border; padding
  			contents.style.cssText = div.style.cssText =

  				// Support: Android 2.3
  				// Vendor-prefix box-sizing
  				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
  				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
  			contents.style.marginRight = contents.style.width = "0";
  			div.style.width = "1px";

  			reliableMarginRightVal =
  				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

  			div.removeChild( contents );
  		}

  		// Support: IE6-8
  		// First check that getClientRects works as expected
  		// Check if table cells still have offsetWidth/Height when they are set
  		// to display:none and there are still other visible table cells in a
  		// table row; if so, offsetWidth/Height are not reliable for use when
  		// determining if an element has been hidden directly using
  		// display:none (it is still safe to use offsets if a parent element is
  		// hidden; don safety goggles and see bug #4512 for more information).
  		div.style.display = "none";
  		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
  		if ( reliableHiddenOffsetsVal ) {
  			div.style.display = "";
  			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
  			div.childNodes[ 0 ].style.borderCollapse = "separate";
  			contents = div.getElementsByTagName( "td" );
  			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
  			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
  			if ( reliableHiddenOffsetsVal ) {
  				contents[ 0 ].style.display = "";
  				contents[ 1 ].style.display = "none";
  				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
  			}
  		}

  		// Teardown
  		documentElement.removeChild( container );
  	}

  } )();


  var getStyles, curCSS,
  	rposition = /^(top|right|bottom|left)$/;

  if ( window.getComputedStyle ) {
  	getStyles = function( elem ) {

  		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
  		// IE throws on elements created in popups
  		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
  		var view = elem.ownerDocument.defaultView;

  		if ( !view || !view.opener ) {
  			view = window;
  		}

  		return view.getComputedStyle( elem );
  	};

  	curCSS = function( elem, name, computed ) {
  		var width, minWidth, maxWidth, ret,
  			style = elem.style;

  		computed = computed || getStyles( elem );

  		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
  		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

  		// Support: Opera 12.1x only
  		// Fall back to style even without computed
  		// computed is undefined for elems on document fragments
  		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
  			ret = jQuery.style( elem, name );
  		}

  		if ( computed ) {

  			// A tribute to the "awesome hack by Dean Edwards"
  			// Chrome < 17 and Safari 5.0 uses "computed value"
  			// instead of "used value" for margin-right
  			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
  			// but width seems to be reliably pixels
  			// this is against the CSSOM draft spec:
  			// http://dev.w3.org/csswg/cssom/#resolved-values
  			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

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

  		// Support: IE
  		// IE returns zIndex value as an integer.
  		return ret === undefined ?
  			ret :
  			ret + "";
  	};
  } else if ( documentElement.currentStyle ) {
  	getStyles = function( elem ) {
  		return elem.currentStyle;
  	};

  	curCSS = function( elem, name, computed ) {
  		var left, rs, rsLeft, ret,
  			style = elem.style;

  		computed = computed || getStyles( elem );
  		ret = computed ? computed[ name ] : undefined;

  		// Avoid setting ret to empty string here
  		// so we don't default to auto
  		if ( ret == null && style && style[ name ] ) {
  			ret = style[ name ];
  		}

  		// From the awesome hack by Dean Edwards
  		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

  		// If we're not dealing with a regular pixel number
  		// but a number that has a weird ending, we need to convert it to pixels
  		// but not position css attributes, as those are
  		// proportional to the parent element instead
  		// and we can't measure the parent instead because it
  		// might trigger a "stacking dolls" problem
  		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

  			// Remember the original values
  			left = style.left;
  			rs = elem.runtimeStyle;
  			rsLeft = rs && rs.left;

  			// Put in the new values to get a computed value out
  			if ( rsLeft ) {
  				rs.left = elem.currentStyle.left;
  			}
  			style.left = name === "fontSize" ? "1em" : ret;
  			ret = style.pixelLeft + "px";

  			// Revert the changed values
  			style.left = left;
  			if ( rsLeft ) {
  				rs.left = rsLeft;
  			}
  		}

  		// Support: IE
  		// IE returns zIndex value as an integer.
  		return ret === undefined ?
  			ret :
  			ret + "" || "auto";
  	};
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
  			return ( this.get = hookFn ).apply( this, arguments );
  		}
  	};
  }


  var

  		ralpha = /alpha\([^)]*\)/i,
  	ropacity = /opacity\s*=\s*([^)]*)/i,

  	// swappable if display is none or starts with table except
  	// "table", "table-cell", or "table-caption"
  	// see here for display values:
  	// https://developer.mozilla.org/en-US/docs/CSS/display
  	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

  	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  	cssNormalTransform = {
  		letterSpacing: "0",
  		fontWeight: "400"
  	},

  	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
  	emptyStyle = document.createElement( "div" ).style;


  // return a css property mapped to a potentially vendor prefixed property
  function vendorPropName( name ) {

  	// shortcut for names that are not vendor prefixed
  	if ( name in emptyStyle ) {
  		return name;
  	}

  	// check for vendor prefixed names
  	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
  		i = cssPrefixes.length;

  	while ( i-- ) {
  		name = cssPrefixes[ i ] + capName;
  		if ( name in emptyStyle ) {
  			return name;
  		}
  	}
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

  		values[ index ] = jQuery._data( elem, "olddisplay" );
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
  				values[ index ] =
  					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
  			}
  		} else {
  			hidden = isHidden( elem );

  			if ( display && display !== "none" || !hidden ) {
  				jQuery._data(
  					elem,
  					"olddisplay",
  					hidden ? display : jQuery.css( elem, "display" )
  				);
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

  		// both box models exclude margin, so add it if we want it
  		if ( extra === "margin" ) {
  			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
  		}

  		if ( isBorderBox ) {

  			// border-box includes padding, so remove it if we want content
  			if ( extra === "content" ) {
  				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
  			}

  			// at this point, extra isn't border nor margin, so remove border
  			if ( extra !== "margin" ) {
  				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
  			}
  		} else {

  			// at this point, extra isn't content, so add padding
  			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

  			// at this point, extra isn't content nor padding, so add border
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
  		isBorderBox = support.boxSizing &&
  			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

  	// some non-html elements return undefined for offsetWidth, so check for null/undefined
  	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  	if ( val <= 0 || val == null ) {

  		// Fall back to computed then uncomputed css if necessary
  		val = curCSS( elem, name, styles );
  		if ( val < 0 || val == null ) {
  			val = elem.style[ name ];
  		}

  		// Computed unit is not pixels. Stop here and return.
  		if ( rnumnonpx.test( val ) ) {
  			return val;
  		}

  		// we need the check for style in case a browser which returns unreliable values
  		// for getComputedStyle silently falls back to the reliable elem.style
  		valueIsBorderBox = isBorderBox &&
  			( support.boxSizingReliable() || val === elem.style[ name ] );

  		// Normalize "", auto, and prepare for extra
  		val = parseFloat( val ) || 0;
  	}

  	// use the active box-sizing model to add/subtract irrelevant styles
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

  jQuery.extend( {

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
  		"animationIterationCount": true,
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

  		// normalize float css property
  		"float": support.cssFloat ? "cssFloat" : "styleFloat"
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

  		name = jQuery.cssProps[ origName ] ||
  			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

  		// gets hook for the prefixed version
  		// followed by the unprefixed version
  		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

  		// Check if we're setting a value
  		if ( value !== undefined ) {
  			type = typeof value;

  			// Convert "+=" or "-=" to relative numbers (#7345)
  			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
  				value = adjustCSS( elem, name, ret );

  				// Fixes bug #9237
  				type = "number";
  			}

  			// Make sure that null and NaN values aren't set. See: #7116
  			if ( value == null || value !== value ) {
  				return;
  			}

  			// If a number was passed in, add the unit (except for certain CSS properties)
  			if ( type === "number" ) {
  				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
  			}

  			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
  			// but it would mean to define eight
  			// (for every problematic property) identical functions
  			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
  				style[ name ] = "inherit";
  			}

  			// If a hook was provided, use that value, otherwise just set the specified value
  			if ( !hooks || !( "set" in hooks ) ||
  				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

  				// Support: IE
  				// Swallow errors from 'invalid' CSS values (#5509)
  				try {
  					style[ name ] = value;
  				} catch ( e ) {}
  			}

  		} else {

  			// If a hook was provided get the non-computed value from there
  			if ( hooks && "get" in hooks &&
  				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

  				return ret;
  			}

  			// Otherwise just get the value from the style object
  			return style[ name ];
  		}
  	},

  	css: function( elem, name, extra, styles ) {
  		var num, val, hooks,
  			origName = jQuery.camelCase( name );

  		// Make sure that we're working with the right name
  		name = jQuery.cssProps[ origName ] ||
  			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

  		// gets hook for the prefixed version
  		// followed by the unprefixed version
  		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

  		// If a hook was provided get the computed value from there
  		if ( hooks && "get" in hooks ) {
  			val = hooks.get( elem, true, extra );
  		}

  		// Otherwise, if a way to get the computed value exists, use that
  		if ( val === undefined ) {
  			val = curCSS( elem, name, styles );
  		}

  		//convert "normal" to computed value
  		if ( val === "normal" && name in cssNormalTransform ) {
  			val = cssNormalTransform[ name ];
  		}

  		// Return, converting to number if forced or a qualifier was provided and val looks numeric
  		if ( extra === "" || extra ) {
  			num = parseFloat( val );
  			return extra === true || isFinite( num ) ? num || 0 : val;
  		}
  		return val;
  	}
  } );

  jQuery.each( [ "height", "width" ], function( i, name ) {
  	jQuery.cssHooks[ name ] = {
  		get: function( elem, computed, extra ) {
  			if ( computed ) {

  				// certain elements can have dimension info if we invisibly show them
  				// however, it must have a current display style that would benefit from this
  				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
  					elem.offsetWidth === 0 ?
  						swap( elem, cssShow, function() {
  							return getWidthOrHeight( elem, name, extra );
  						} ) :
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
  					support.boxSizing &&
  						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
  					styles
  				) : 0
  			);
  		}
  	};
  } );

  if ( !support.opacity ) {
  	jQuery.cssHooks.opacity = {
  		get: function( elem, computed ) {

  			// IE uses filters for opacity
  			return ropacity.test( ( computed && elem.currentStyle ?
  				elem.currentStyle.filter :
  				elem.style.filter ) || "" ) ?
  					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
  					computed ? "1" : "";
  		},

  		set: function( elem, value ) {
  			var style = elem.style,
  				currentStyle = elem.currentStyle,
  				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
  				filter = currentStyle && currentStyle.filter || style.filter || "";

  			// IE has trouble with opacity if it does not have layout
  			// Force it by setting the zoom level
  			style.zoom = 1;

  			// if setting opacity to 1, and no other filters exist -
  			// attempt to remove filter attribute #6652
  			// if value === "", then remove inline opacity #12685
  			if ( ( value >= 1 || value === "" ) &&
  					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
  					style.removeAttribute ) {

  				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
  				// if "filter:" is present at all, clearType is disabled, we want to avoid this
  				// style.removeAttribute is IE Only, but so apparently is this code path...
  				style.removeAttribute( "filter" );

  				// if there is no filter style applied in a css rule
  				// or unset inline opacity, we are done
  				if ( value === "" || currentStyle && !currentStyle.filter ) {
  					return;
  				}
  			}

  			// otherwise, set new filter values
  			style.filter = ralpha.test( filter ) ?
  				filter.replace( ralpha, opacity ) :
  				filter + " " + opacity;
  		}
  	};
  }

  jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
  	function( elem, computed ) {
  		if ( computed ) {
  			return swap( elem, { "display": "inline-block" },
  				curCSS, [ elem, "marginRight" ] );
  		}
  	}
  );

  jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
  	function( elem, computed ) {
  		if ( computed ) {
  			return (
  				parseFloat( curCSS( elem, "marginLeft" ) ) ||

  				// Support: IE<=11+
  				// Running getBoundingClientRect on a disconnected node in IE throws an error
  				// Support: IE8 only
  				// getClientRects() errors on disconnected elems
  				( jQuery.contains( elem.ownerDocument, elem ) ?
  					elem.getBoundingClientRect().left -
  						swap( elem, { marginLeft: 0 }, function() {
  							return elem.getBoundingClientRect().left;
  						} ) :
  					0
  				)
  			) + "px";
  		}
  	}
  );

  // These hooks are used by animate to expand properties
  jQuery.each( {
  	margin: "",
  	padding: "",
  	border: "Width"
  }, function( prefix, suffix ) {
  	jQuery.cssHooks[ prefix + suffix ] = {
  		expand: function( value ) {
  			var i = 0,
  				expanded = {},

  				// assumes a single number if not a string
  				parts = typeof value === "string" ? value.split( " " ) : [ value ];

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
  } );

  jQuery.fn.extend( {
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

  		return this.each( function() {
  			if ( isHidden( this ) ) {
  				jQuery( this ).show();
  			} else {
  				jQuery( this ).hide();
  			}
  		} );
  	}
  } );


  function Tween( elem, options, prop, end, easing ) {
  	return new Tween.prototype.init( elem, options, prop, end, easing );
  }
  jQuery.Tween = Tween;

  Tween.prototype = {
  	constructor: Tween,
  	init: function( elem, options, prop, end, easing, unit ) {
  		this.elem = elem;
  		this.prop = prop;
  		this.easing = easing || jQuery.easing._default;
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

  			// Use a property on the element directly when it is not a DOM element,
  			// or when there is no matching style property that exists.
  			if ( tween.elem.nodeType !== 1 ||
  				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
  				return tween.elem[ tween.prop ];
  			}

  			// passing an empty string as a 3rd parameter to .css will automatically
  			// attempt a parseFloat and fallback to a string if the parse fails
  			// so, simple values such as "10px" are parsed to Float.
  			// complex values such as "rotate(1rad)" are returned as is.
  			result = jQuery.css( tween.elem, tween.prop, "" );

  			// Empty strings, null, undefined and "auto" are converted to 0.
  			return !result || result === "auto" ? 0 : result;
  		},
  		set: function( tween ) {

  			// use step hook for back compat - use cssHook if its there - use .style if its
  			// available and use plain properties where available
  			if ( jQuery.fx.step[ tween.prop ] ) {
  				jQuery.fx.step[ tween.prop ]( tween );
  			} else if ( tween.elem.nodeType === 1 &&
  				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
  					jQuery.cssHooks[ tween.prop ] ) ) {
  				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
  			} else {
  				tween.elem[ tween.prop ] = tween.now;
  			}
  		}
  	}
  };

  // Support: IE <=9
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
  	},
  	_default: "swing"
  };

  jQuery.fx = Tween.prototype.init;

  // Back Compat <1.8 extension point
  jQuery.fx.step = {};




  var
  	fxNow, timerId,
  	rfxtypes = /^(?:toggle|show|hide)$/,
  	rrun = /queueHooks$/;

  // Animations created synchronously will run synchronously
  function createFxNow() {
  	window.setTimeout( function() {
  		fxNow = undefined;
  	} );
  	return ( fxNow = jQuery.now() );
  }

  // Generate parameters to create a standard animation
  function genFx( type, includeWidth ) {
  	var which,
  		attrs = { height: type },
  		i = 0;

  	// if we include width, step value is 1 to do all cssExpand values,
  	// if we don't include width, step value is 2 to skip over Left and Right
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
  		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
  		index = 0,
  		length = collection.length;
  	for ( ; index < length; index++ ) {
  		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

  			// we're done with this property
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
  		dataShow = jQuery._data( elem, "fxshow" );

  	// handle queue: false promises
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

  		anim.always( function() {

  			// doing this makes sure that the complete handler will be called
  			// before this completes
  			anim.always( function() {
  				hooks.unqueued--;
  				if ( !jQuery.queue( elem, "fx" ).length ) {
  					hooks.empty.fire();
  				}
  			} );
  		} );
  	}

  	// height/width overflow pass
  	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

  		// Make sure that nothing sneaks out
  		// Record all 3 overflow attributes because IE does not
  		// change the overflow attribute when overflowX and
  		// overflowY are set to the same value
  		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

  		// Set display property to inline-block for height/width
  		// animations on inline elements that are having width/height animated
  		display = jQuery.css( elem, "display" );

  		// Test default display if display is currently "none"
  		checkDisplay = display === "none" ?
  			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

  		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

  			// inline-level elements accept inline-block;
  			// block-level elements need to be inline with layout
  			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
  				style.display = "inline-block";
  			} else {
  				style.zoom = 1;
  			}
  		}
  	}

  	if ( opts.overflow ) {
  		style.overflow = "hidden";
  		if ( !support.shrinkWrapBlocks() ) {
  			anim.always( function() {
  				style.overflow = opts.overflow[ 0 ];
  				style.overflowX = opts.overflow[ 1 ];
  				style.overflowY = opts.overflow[ 2 ];
  			} );
  		}
  	}

  	// show/hide pass
  	for ( prop in props ) {
  		value = props[ prop ];
  		if ( rfxtypes.exec( value ) ) {
  			delete props[ prop ];
  			toggle = toggle || value === "toggle";
  			if ( value === ( hidden ? "hide" : "show" ) ) {

  				// If there is dataShow left over from a stopped hide or show
  				// and we are going to proceed with show, we should pretend to be hidden
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
  			dataShow = jQuery._data( elem, "fxshow", {} );
  		}

  		// store state if its toggle - enables .stop().toggle() to "reverse"
  		if ( toggle ) {
  			dataShow.hidden = !hidden;
  		}
  		if ( hidden ) {
  			jQuery( elem ).show();
  		} else {
  			anim.done( function() {
  				jQuery( elem ).hide();
  			} );
  		}
  		anim.done( function() {
  			var prop;
  			jQuery._removeData( elem, "fxshow" );
  			for ( prop in orig ) {
  				jQuery.style( elem, prop, orig[ prop ] );
  			}
  		} );
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
  	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
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

  			// not quite $.extend, this wont overwrite keys already present.
  			// also - reusing 'index' from above because we have the correct "name"
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
  		length = Animation.prefilters.length,
  		deferred = jQuery.Deferred().always( function() {

  			// don't match elem in the :animated selector
  			delete tick.elem;
  		} ),
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

  			deferred.notifyWith( elem, [ animation, percent, remaining ] );

  			if ( percent < 1 && length ) {
  				return remaining;
  			} else {
  				deferred.resolveWith( elem, [ animation ] );
  				return false;
  			}
  		},
  		animation = deferred.promise( {
  			elem: elem,
  			props: jQuery.extend( {}, properties ),
  			opts: jQuery.extend( true, {
  				specialEasing: {},
  				easing: jQuery.easing._default
  			}, options ),
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

  					// if we are going to the end, we want to run all the tweens
  					// otherwise we skip this part
  					length = gotoEnd ? animation.tweens.length : 0;
  				if ( stopped ) {
  					return this;
  				}
  				stopped = true;
  				for ( ; index < length ; index++ ) {
  					animation.tweens[ index ].run( 1 );
  				}

  				// resolve when we played the last frame
  				// otherwise, reject
  				if ( gotoEnd ) {
  					deferred.notifyWith( elem, [ animation, 1, 0 ] );
  					deferred.resolveWith( elem, [ animation, gotoEnd ] );
  				} else {
  					deferred.rejectWith( elem, [ animation, gotoEnd ] );
  				}
  				return this;
  			}
  		} ),
  		props = animation.props;

  	propFilter( props, animation.opts.specialEasing );

  	for ( ; index < length ; index++ ) {
  		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
  		if ( result ) {
  			if ( jQuery.isFunction( result.stop ) ) {
  				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
  					jQuery.proxy( result.stop, result );
  			}
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
  		} )
  	);

  	// attach callbacks from options
  	return animation.progress( animation.opts.progress )
  		.done( animation.opts.done, animation.opts.complete )
  		.fail( animation.opts.fail )
  		.always( animation.opts.always );
  }

  jQuery.Animation = jQuery.extend( Animation, {

  	tweeners: {
  		"*": [ function( prop, value ) {
  			var tween = this.createTween( prop, value );
  			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
  			return tween;
  		} ]
  	},

  	tweener: function( props, callback ) {
  		if ( jQuery.isFunction( props ) ) {
  			callback = props;
  			props = [ "*" ];
  		} else {
  			props = props.match( rnotwhite );
  		}

  		var prop,
  			index = 0,
  			length = props.length;

  		for ( ; index < length ; index++ ) {
  			prop = props[ index ];
  			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
  			Animation.tweeners[ prop ].unshift( callback );
  		}
  	},

  	prefilters: [ defaultPrefilter ],

  	prefilter: function( callback, prepend ) {
  		if ( prepend ) {
  			Animation.prefilters.unshift( callback );
  		} else {
  			Animation.prefilters.push( callback );
  		}
  	}
  } );

  jQuery.speed = function( speed, easing, fn ) {
  	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
  		complete: fn || !fn && easing ||
  			jQuery.isFunction( speed ) && speed,
  		duration: speed,
  		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  	};

  	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
  		opt.duration in jQuery.fx.speeds ?
  			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

  	// normalize opt.queue - true/undefined/null -> "fx"
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

  jQuery.fn.extend( {
  	fadeTo: function( speed, to, easing, callback ) {

  		// show any hidden elements after setting opacity to 0
  		return this.filter( isHidden ).css( "opacity", 0 ).show()

  			// animate to the value specified
  			.end().animate( { opacity: to }, speed, easing, callback );
  	},
  	animate: function( prop, speed, easing, callback ) {
  		var empty = jQuery.isEmptyObject( prop ),
  			optall = jQuery.speed( speed, easing, callback ),
  			doAnimation = function() {

  				// Operate on a copy of prop so per-property easing won't be lost
  				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

  				// Empty animations, or finishing resolves immediately
  				if ( empty || jQuery._data( this, "finish" ) ) {
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

  		return this.each( function() {
  			var dequeue = true,
  				index = type != null && type + "queueHooks",
  				timers = jQuery.timers,
  				data = jQuery._data( this );

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
  				if ( timers[ index ].elem === this &&
  					( type == null || timers[ index ].queue === type ) ) {

  					timers[ index ].anim.stop( gotoEnd );
  					dequeue = false;
  					timers.splice( index, 1 );
  				}
  			}

  			// start the next in the queue if the last step wasn't forced
  			// timers currently will call their complete callbacks, which will dequeue
  			// but only if they were gotoEnd
  			if ( dequeue || !gotoEnd ) {
  				jQuery.dequeue( this, type );
  			}
  		} );
  	},
  	finish: function( type ) {
  		if ( type !== false ) {
  			type = type || "fx";
  		}
  		return this.each( function() {
  			var index,
  				data = jQuery._data( this ),
  				queue = data[ type + "queue" ],
  				hooks = data[ type + "queueHooks" ],
  				timers = jQuery.timers,
  				length = queue ? queue.length : 0;

  			// enable finishing flag on private data
  			data.finish = true;

  			// empty the queue first
  			jQuery.queue( this, type, [] );

  			if ( hooks && hooks.stop ) {
  				hooks.stop.call( this, true );
  			}

  			// look for any active animations, and finish them
  			for ( index = timers.length; index--; ) {
  				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
  					timers[ index ].anim.stop( true );
  					timers.splice( index, 1 );
  				}
  			}

  			// look for any animations in the old queue and finish them
  			for ( index = 0; index < length; index++ ) {
  				if ( queue[ index ] && queue[ index ].finish ) {
  					queue[ index ].finish.call( this );
  				}
  			}

  			// turn off finishing flag
  			delete data.finish;
  		} );
  	}
  } );

  jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
  	var cssFn = jQuery.fn[ name ];
  	jQuery.fn[ name ] = function( speed, easing, callback ) {
  		return speed == null || typeof speed === "boolean" ?
  			cssFn.apply( this, arguments ) :
  			this.animate( genFx( name, true ), speed, easing, callback );
  	};
  } );

  // Generate shortcuts for custom animations
  jQuery.each( {
  	slideDown: genFx( "show" ),
  	slideUp: genFx( "hide" ),
  	slideToggle: genFx( "toggle" ),
  	fadeIn: { opacity: "show" },
  	fadeOut: { opacity: "hide" },
  	fadeToggle: { opacity: "toggle" }
  }, function( name, props ) {
  	jQuery.fn[ name ] = function( speed, easing, callback ) {
  		return this.animate( props, speed, easing, callback );
  	};
  } );

  jQuery.timers = [];
  jQuery.fx.tick = function() {
  	var timer,
  		timers = jQuery.timers,
  		i = 0;

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
  		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
  	}
  };

  jQuery.fx.stop = function() {
  	window.clearInterval( timerId );
  	timerId = null;
  };

  jQuery.fx.speeds = {
  	slow: 600,
  	fast: 200,

  	// Default speed
  	_default: 400
  };


  // Based off of the plugin by Clint Helfers, with permission.
  // http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function( time, type ) {
  	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
  	type = type || "fx";

  	return this.queue( type, function( next, hooks ) {
  		var timeout = window.setTimeout( next, time );
  		hooks.stop = function() {
  			window.clearTimeout( timeout );
  		};
  	} );
  };


  ( function() {
  	var a,
  		input = document.createElement( "input" ),
  		div = document.createElement( "div" ),
  		select = document.createElement( "select" ),
  		opt = select.appendChild( document.createElement( "option" ) );

  	// Setup
  	div = document.createElement( "div" );
  	div.setAttribute( "className", "t" );
  	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
  	a = div.getElementsByTagName( "a" )[ 0 ];

  	// Support: Windows Web Apps (WWA)
  	// `type` must use .setAttribute for WWA (#14901)
  	input.setAttribute( "type", "checkbox" );
  	div.appendChild( input );

  	a = div.getElementsByTagName( "a" )[ 0 ];

  	// First batch of tests.
  	a.style.cssText = "top:1px";

  	// Test setAttribute on camelCase class.
  	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
  	support.getSetAttribute = div.className !== "t";

  	// Get the style information from getAttribute
  	// (IE uses .cssText instead)
  	support.style = /top/.test( a.getAttribute( "style" ) );

  	// Make sure that URLs aren't manipulated
  	// (IE normalizes it by default)
  	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

  	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
  	support.checkOn = !!input.value;

  	// Make sure that a selected-by-default option has a working selected property.
  	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
  	support.optSelected = opt.selected;

  	// Tests for enctype support on a form (#6743)
  	support.enctype = !!document.createElement( "form" ).enctype;

  	// Make sure that the options inside disabled selects aren't marked as disabled
  	// (WebKit marks them as disabled)
  	select.disabled = true;
  	support.optDisabled = !opt.disabled;

  	// Support: IE8 only
  	// Check if we can trust getAttribute("value")
  	input = document.createElement( "input" );
  	input.setAttribute( "value", "" );
  	support.input = input.getAttribute( "value" ) === "";

  	// Check if an input maintains its value after becoming a radio
  	input.value = "t";
  	input.setAttribute( "type", "radio" );
  	support.radioValue = input.value === "t";
  } )();


  var rreturn = /\r/g,
  	rspaces = /[\x20\t\r\n\f]+/g;

  jQuery.fn.extend( {
  	val: function( value ) {
  		var hooks, ret, isFunction,
  			elem = this[ 0 ];

  		if ( !arguments.length ) {
  			if ( elem ) {
  				hooks = jQuery.valHooks[ elem.type ] ||
  					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

  				if (
  					hooks &&
  					"get" in hooks &&
  					( ret = hooks.get( elem, "value" ) ) !== undefined
  				) {
  					return ret;
  				}

  				ret = elem.value;

  				return typeof ret === "string" ?

  					// handle most common string cases
  					ret.replace( rreturn, "" ) :

  					// handle cases where value is null/undef or number
  					ret == null ? "" : ret;
  			}

  			return;
  		}

  		isFunction = jQuery.isFunction( value );

  		return this.each( function( i ) {
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
  				} );
  			}

  			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

  			// If set returns undefined, fall back to normal setting
  			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
  				this.value = val;
  			}
  		} );
  	}
  } );

  jQuery.extend( {
  	valHooks: {
  		option: {
  			get: function( elem ) {
  				var val = jQuery.find.attr( elem, "value" );
  				return val != null ?
  					val :

  					// Support: IE10-11+
  					// option.text throws exceptions (#14686, #14858)
  					// Strip and collapse whitespace
  					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
  					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
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

  					// oldIE doesn't update selected after form reset (#2551)
  					if ( ( option.selected || i === index ) &&

  							// Don't return options that are disabled or in a disabled optgroup
  							( support.optDisabled ?
  								!option.disabled :
  								option.getAttribute( "disabled" ) === null ) &&
  							( !option.parentNode.disabled ||
  								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

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

  					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

  						// Support: IE6
  						// When new option element is added to select box we need to
  						// force reflow of newly added node in order to workaround delay
  						// of initialization properties
  						try {
  							option.selected = optionSet = true;

  						} catch ( _ ) {

  							// Will be executed only in IE6
  							option.scrollHeight;
  						}

  					} else {
  						option.selected = false;
  					}
  				}

  				// Force browsers to behave consistently when non-matching value is set
  				if ( !optionSet ) {
  					elem.selectedIndex = -1;
  				}

  				return options;
  			}
  		}
  	}
  } );

  // Radios and checkboxes getter/setter
  jQuery.each( [ "radio", "checkbox" ], function() {
  	jQuery.valHooks[ this ] = {
  		set: function( elem, value ) {
  			if ( jQuery.isArray( value ) ) {
  				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
  			}
  		}
  	};
  	if ( !support.checkOn ) {
  		jQuery.valHooks[ this ].get = function( elem ) {
  			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
  		};
  	}
  } );




  var nodeHook, boolHook,
  	attrHandle = jQuery.expr.attrHandle,
  	ruseDefault = /^(?:checked|selected)$/i,
  	getSetAttribute = support.getSetAttribute,
  	getSetInput = support.input;

  jQuery.fn.extend( {
  	attr: function( name, value ) {
  		return access( this, jQuery.attr, name, value, arguments.length > 1 );
  	},

  	removeAttr: function( name ) {
  		return this.each( function() {
  			jQuery.removeAttr( this, name );
  		} );
  	}
  } );

  jQuery.extend( {
  	attr: function( elem, name, value ) {
  		var ret, hooks,
  			nType = elem.nodeType;

  		// Don't get/set attributes on text, comment and attribute nodes
  		if ( nType === 3 || nType === 8 || nType === 2 ) {
  			return;
  		}

  		// Fallback to prop when attributes are not supported
  		if ( typeof elem.getAttribute === "undefined" ) {
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
  				return;
  			}

  			if ( hooks && "set" in hooks &&
  				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
  				return ret;
  			}

  			elem.setAttribute( name, value + "" );
  			return value;
  		}

  		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
  			return ret;
  		}

  		ret = jQuery.find.attr( elem, name );

  		// Non-existent attributes return null, we normalize to undefined
  		return ret == null ? undefined : ret;
  	},

  	attrHooks: {
  		type: {
  			set: function( elem, value ) {
  				if ( !support.radioValue && value === "radio" &&
  					jQuery.nodeName( elem, "input" ) ) {

  					// Setting the type on a radio button after the value resets the value in IE8-9
  					// Reset value to default in case type is set after value during creation
  					var val = elem.value;
  					elem.setAttribute( "type", value );
  					if ( val ) {
  						elem.value = val;
  					}
  					return value;
  				}
  			}
  		}
  	},

  	removeAttr: function( elem, value ) {
  		var name, propName,
  			i = 0,
  			attrNames = value && value.match( rnotwhite );

  		if ( attrNames && elem.nodeType === 1 ) {
  			while ( ( name = attrNames[ i++ ] ) ) {
  				propName = jQuery.propFix[ name ] || name;

  				// Boolean attributes get special treatment (#10870)
  				if ( jQuery.expr.match.bool.test( name ) ) {

  					// Set corresponding property to false
  					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
  						elem[ propName ] = false;

  					// Support: IE<9
  					// Also clear defaultChecked/defaultSelected (if appropriate)
  					} else {
  						elem[ jQuery.camelCase( "default-" + name ) ] =
  							elem[ propName ] = false;
  					}

  				// See #9699 for explanation of this approach (setting first, then removal)
  				} else {
  					jQuery.attr( elem, name, "" );
  				}

  				elem.removeAttribute( getSetAttribute ? name : propName );
  			}
  		}
  	}
  } );

  // Hooks for boolean attributes
  boolHook = {
  	set: function( elem, value, name ) {
  		if ( value === false ) {

  			// Remove boolean attributes when set to false
  			jQuery.removeAttr( elem, name );
  		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

  			// IE<8 needs the *property* name
  			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

  		} else {

  			// Support: IE<9
  			// Use defaultChecked and defaultSelected for oldIE
  			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
  		}
  		return name;
  	}
  };

  jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
  	var getter = attrHandle[ name ] || jQuery.find.attr;

  	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
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
  	} else {
  		attrHandle[ name ] = function( elem, name, isXML ) {
  			if ( !isXML ) {
  				return elem[ jQuery.camelCase( "default-" + name ) ] ?
  					name.toLowerCase() :
  					null;
  			}
  		};
  	}
  } );

  // fix oldIE attroperties
  if ( !getSetInput || !getSetAttribute ) {
  	jQuery.attrHooks.value = {
  		set: function( elem, value, name ) {
  			if ( jQuery.nodeName( elem, "input" ) ) {

  				// Does not return so that setAttribute is also used
  				elem.defaultValue = value;
  			} else {

  				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
  				return nodeHook && nodeHook.set( elem, value, name );
  			}
  		}
  	};
  }

  // IE6/7 do not support getting/setting some attributes with get/setAttribute
  if ( !getSetAttribute ) {

  	// Use this for any attribute in IE6/7
  	// This fixes almost every IE6/7 issue
  	nodeHook = {
  		set: function( elem, value, name ) {

  			// Set the existing or create a new attribute node
  			var ret = elem.getAttributeNode( name );
  			if ( !ret ) {
  				elem.setAttributeNode(
  					( ret = elem.ownerDocument.createAttribute( name ) )
  				);
  			}

  			ret.value = value += "";

  			// Break association with cloned elements by also using setAttribute (#9646)
  			if ( name === "value" || value === elem.getAttribute( name ) ) {
  				return value;
  			}
  		}
  	};

  	// Some attributes are constructed with empty-string values when not defined
  	attrHandle.id = attrHandle.name = attrHandle.coords =
  		function( elem, name, isXML ) {
  			var ret;
  			if ( !isXML ) {
  				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
  					ret.value :
  					null;
  			}
  		};

  	// Fixing value retrieval on a button requires this module
  	jQuery.valHooks.button = {
  		get: function( elem, name ) {
  			var ret = elem.getAttributeNode( name );
  			if ( ret && ret.specified ) {
  				return ret.value;
  			}
  		},
  		set: nodeHook.set
  	};

  	// Set contenteditable to false on removals(#10429)
  	// Setting to empty string throws an error as an invalid value
  	jQuery.attrHooks.contenteditable = {
  		set: function( elem, value, name ) {
  			nodeHook.set( elem, value === "" ? false : value, name );
  		}
  	};

  	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
  	// This is for removals
  	jQuery.each( [ "width", "height" ], function( i, name ) {
  		jQuery.attrHooks[ name ] = {
  			set: function( elem, value ) {
  				if ( value === "" ) {
  					elem.setAttribute( name, "auto" );
  					return value;
  				}
  			}
  		};
  	} );
  }

  if ( !support.style ) {
  	jQuery.attrHooks.style = {
  		get: function( elem ) {

  			// Return undefined in the case of empty string
  			// Note: IE uppercases css property names, but if we were to .toLowerCase()
  			// .cssText, that would destroy case sensitivity in URL's, like in "background"
  			return elem.style.cssText || undefined;
  		},
  		set: function( elem, value ) {
  			return ( elem.style.cssText = value + "" );
  		}
  	};
  }




  var rfocusable = /^(?:input|select|textarea|button|object)$/i,
  	rclickable = /^(?:a|area)$/i;

  jQuery.fn.extend( {
  	prop: function( name, value ) {
  		return access( this, jQuery.prop, name, value, arguments.length > 1 );
  	},

  	removeProp: function( name ) {
  		name = jQuery.propFix[ name ] || name;
  		return this.each( function() {

  			// try/catch handles cases where IE balks (such as removing a property on window)
  			try {
  				this[ name ] = undefined;
  				delete this[ name ];
  			} catch ( e ) {}
  		} );
  	}
  } );

  jQuery.extend( {
  	prop: function( elem, name, value ) {
  		var ret, hooks,
  			nType = elem.nodeType;

  		// Don't get/set properties on text, comment and attribute nodes
  		if ( nType === 3 || nType === 8 || nType === 2 ) {
  			return;
  		}

  		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

  			// Fix name and attach hooks
  			name = jQuery.propFix[ name ] || name;
  			hooks = jQuery.propHooks[ name ];
  		}

  		if ( value !== undefined ) {
  			if ( hooks && "set" in hooks &&
  				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
  				return ret;
  			}

  			return ( elem[ name ] = value );
  		}

  		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
  			return ret;
  		}

  		return elem[ name ];
  	},

  	propHooks: {
  		tabIndex: {
  			get: function( elem ) {

  				// elem.tabIndex doesn't always return the
  				// correct value when it hasn't been explicitly set
  				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
  				// Use proper attribute retrieval(#12072)
  				var tabindex = jQuery.find.attr( elem, "tabindex" );

  				return tabindex ?
  					parseInt( tabindex, 10 ) :
  					rfocusable.test( elem.nodeName ) ||
  						rclickable.test( elem.nodeName ) && elem.href ?
  							0 :
  							-1;
  			}
  		}
  	},

  	propFix: {
  		"for": "htmlFor",
  		"class": "className"
  	}
  } );

  // Some attributes require a special call on IE
  // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if ( !support.hrefNormalized ) {

  	// href/src property should get the full normalized URL (#10299/#12915)
  	jQuery.each( [ "href", "src" ], function( i, name ) {
  		jQuery.propHooks[ name ] = {
  			get: function( elem ) {
  				return elem.getAttribute( name, 4 );
  			}
  		};
  	} );
  }

  // Support: Safari, IE9+
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  if ( !support.optSelected ) {
  	jQuery.propHooks.selected = {
  		get: function( elem ) {
  			var parent = elem.parentNode;

  			if ( parent ) {
  				parent.selectedIndex;

  				// Make sure that it also works with optgroups, see #5701
  				if ( parent.parentNode ) {
  					parent.parentNode.selectedIndex;
  				}
  			}
  			return null;
  		},
  		set: function( elem ) {
  			var parent = elem.parentNode;
  			if ( parent ) {
  				parent.selectedIndex;

  				if ( parent.parentNode ) {
  					parent.parentNode.selectedIndex;
  				}
  			}
  		}
  	};
  }

  jQuery.each( [
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
  } );

  // IE6/7 call enctype encoding
  if ( !support.enctype ) {
  	jQuery.propFix.enctype = "encoding";
  }




  var rclass = /[\t\r\n\f]/g;

  function getClass( elem ) {
  	return jQuery.attr( elem, "class" ) || "";
  }

  jQuery.fn.extend( {
  	addClass: function( value ) {
  		var classes, elem, cur, curValue, clazz, j, finalValue,
  			i = 0;

  		if ( jQuery.isFunction( value ) ) {
  			return this.each( function( j ) {
  				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
  			} );
  		}

  		if ( typeof value === "string" && value ) {
  			classes = value.match( rnotwhite ) || [];

  			while ( ( elem = this[ i++ ] ) ) {
  				curValue = getClass( elem );
  				cur = elem.nodeType === 1 &&
  					( " " + curValue + " " ).replace( rclass, " " );

  				if ( cur ) {
  					j = 0;
  					while ( ( clazz = classes[ j++ ] ) ) {
  						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
  							cur += clazz + " ";
  						}
  					}

  					// only assign if different to avoid unneeded rendering.
  					finalValue = jQuery.trim( cur );
  					if ( curValue !== finalValue ) {
  						jQuery.attr( elem, "class", finalValue );
  					}
  				}
  			}
  		}

  		return this;
  	},

  	removeClass: function( value ) {
  		var classes, elem, cur, curValue, clazz, j, finalValue,
  			i = 0;

  		if ( jQuery.isFunction( value ) ) {
  			return this.each( function( j ) {
  				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
  			} );
  		}

  		if ( !arguments.length ) {
  			return this.attr( "class", "" );
  		}

  		if ( typeof value === "string" && value ) {
  			classes = value.match( rnotwhite ) || [];

  			while ( ( elem = this[ i++ ] ) ) {
  				curValue = getClass( elem );

  				// This expression is here for better compressibility (see addClass)
  				cur = elem.nodeType === 1 &&
  					( " " + curValue + " " ).replace( rclass, " " );

  				if ( cur ) {
  					j = 0;
  					while ( ( clazz = classes[ j++ ] ) ) {

  						// Remove *all* instances
  						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
  							cur = cur.replace( " " + clazz + " ", " " );
  						}
  					}

  					// Only assign if different to avoid unneeded rendering.
  					finalValue = jQuery.trim( cur );
  					if ( curValue !== finalValue ) {
  						jQuery.attr( elem, "class", finalValue );
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
  			return this.each( function( i ) {
  				jQuery( this ).toggleClass(
  					value.call( this, i, getClass( this ), stateVal ),
  					stateVal
  				);
  			} );
  		}

  		return this.each( function() {
  			var className, i, self, classNames;

  			if ( type === "string" ) {

  				// Toggle individual class names
  				i = 0;
  				self = jQuery( this );
  				classNames = value.match( rnotwhite ) || [];

  				while ( ( className = classNames[ i++ ] ) ) {

  					// Check each className given, space separated list
  					if ( self.hasClass( className ) ) {
  						self.removeClass( className );
  					} else {
  						self.addClass( className );
  					}
  				}

  			// Toggle whole class name
  			} else if ( value === undefined || type === "boolean" ) {
  				className = getClass( this );
  				if ( className ) {

  					// store className if set
  					jQuery._data( this, "__className__", className );
  				}

  				// If the element has a class name or if we're passed "false",
  				// then remove the whole classname (if there was one, the above saved it).
  				// Otherwise bring back whatever was previously saved (if anything),
  				// falling back to the empty string if nothing was stored.
  				jQuery.attr( this, "class",
  					className || value === false ?
  					"" :
  					jQuery._data( this, "__className__" ) || ""
  				);
  			}
  		} );
  	},

  	hasClass: function( selector ) {
  		var className, elem,
  			i = 0;

  		className = " " + selector + " ";
  		while ( ( elem = this[ i++ ] ) ) {
  			if ( elem.nodeType === 1 &&
  				( " " + getClass( elem ) + " " ).replace( rclass, " " )
  					.indexOf( className ) > -1
  			) {
  				return true;
  			}
  		}

  		return false;
  	}
  } );




  // Return jQuery for attributes-only inclusion


  jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
  	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
  	function( i, name ) {

  	// Handle event binding
  	jQuery.fn[ name ] = function( data, fn ) {
  		return arguments.length > 0 ?
  			this.on( name, null, data, fn ) :
  			this.trigger( name );
  	};
  } );

  jQuery.fn.extend( {
  	hover: function( fnOver, fnOut ) {
  		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
  	}
  } );


  var location = window.location;

  var nonce = jQuery.now();

  var rquery = ( /\?/ );



  var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

  jQuery.parseJSON = function( data ) {

  	// Attempt to parse using the native JSON parser first
  	if ( window.JSON && window.JSON.parse ) {

  		// Support: Android 2.3
  		// Workaround failure to string-cast null input
  		return window.JSON.parse( data + "" );
  	}

  	var requireNonComma,
  		depth = null,
  		str = jQuery.trim( data + "" );

  	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
  	// after removing valid tokens
  	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

  		// Force termination if we see a misplaced comma
  		if ( requireNonComma && comma ) {
  			depth = 0;
  		}

  		// Perform no more replacements after returning to outermost depth
  		if ( depth === 0 ) {
  			return token;
  		}

  		// Commas must not follow "[", "{", or ","
  		requireNonComma = open || comma;

  		// Determine new depth
  		// array/object open ("[" or "{"): depth += true - false (increment)
  		// array/object close ("]" or "}"): depth += false - true (decrement)
  		// other cases ("," or primitive): depth += true - true (numeric cast)
  		depth += !close - !open;

  		// Remove this token
  		return "";
  	} ) ) ?
  		( Function( "return " + str ) )() :
  		jQuery.error( "Invalid JSON: " + data );
  };


  // Cross-browser xml parsing
  jQuery.parseXML = function( data ) {
  	var xml, tmp;
  	if ( !data || typeof data !== "string" ) {
  		return null;
  	}
  	try {
  		if ( window.DOMParser ) { // Standard
  			tmp = new window.DOMParser();
  			xml = tmp.parseFromString( data, "text/xml" );
  		} else { // IE
  			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
  			xml.async = "false";
  			xml.loadXML( data );
  		}
  	} catch ( e ) {
  		xml = undefined;
  	}
  	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
  		jQuery.error( "Invalid XML: " + data );
  	}
  	return xml;
  };


  var
  	rhash = /#.*$/,
  	rts = /([?&])_=[^&]*/,

  	// IE leaves an \r character at EOL
  	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

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
  	ajaxLocation = location.href,

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
  			while ( ( dataType = dataTypes[ i++ ] ) ) {

  				// Prepend if requested
  				if ( dataType.charAt( 0 ) === "+" ) {
  					dataType = dataType.slice( 1 ) || "*";
  					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

  				// Otherwise append
  				} else {
  					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
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
  			if ( typeof dataTypeOrTransport === "string" &&
  				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

  				options.dataTypes.unshift( dataTypeOrTransport );
  				inspect( dataTypeOrTransport );
  				return false;
  			} else if ( seekingTransport ) {
  				return !( selected = dataTypeOrTransport );
  			}
  		} );
  		return selected;
  	}

  	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
  }

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887
  function ajaxExtend( target, src ) {
  	var deep, key,
  		flatOptions = jQuery.ajaxSettings.flatOptions || {};

  	for ( key in src ) {
  		if ( src[ key ] !== undefined ) {
  			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
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
  	var firstDataType, ct, finalDataType, type,
  		contents = s.contents,
  		dataTypes = s.dataTypes;

  	// Remove auto dataType and get content-type in the process
  	while ( dataTypes[ 0 ] === "*" ) {
  		dataTypes.shift();
  		if ( ct === undefined ) {
  			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
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
  			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
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
  					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
  						response = conv( response );
  					} else {
  						try {
  							response = conv( response );
  						} catch ( e ) {
  							return {
  								state: "parsererror",
  								error: conv ? e : "No conversion from " + prev + " to " + current
  							};
  						}
  					}
  				}
  			}
  		}
  	}

  	return { state: "success", data: response };
  }

  jQuery.extend( {

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
  			xml: /\bxml\b/,
  			html: /\bhtml/,
  			json: /\bjson\b/
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

  		var

  			// Cross-domain detection vars
  			parts,

  			// Loop variable
  			i,

  			// URL without anti-cache param
  			cacheURL,

  			// Response headers as string
  			responseHeadersString,

  			// timeout handle
  			timeoutTimer,

  			// To know if global events are to be dispatched
  			fireGlobals,

  			transport,

  			// Response headers
  			responseHeaders,

  			// Create the final options object
  			s = jQuery.ajaxSetup( {}, options ),

  			// Callbacks context
  			callbackContext = s.context || s,

  			// Context for global events is callbackContext if it is a DOM node or jQuery collection
  			globalEventContext = s.context &&
  				( callbackContext.nodeType || callbackContext.jquery ) ?
  					jQuery( callbackContext ) :
  					jQuery.event,

  			// Deferreds
  			deferred = jQuery.Deferred(),
  			completeDeferred = jQuery.Callbacks( "once memory" ),

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
  							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
  								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
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
  		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
  		// Handle falsy url in the settings object (#10093: consistency with old signature)
  		// We also use the url parameter if available
  		s.url = ( ( url || s.url || ajaxLocation ) + "" )
  			.replace( rhash, "" )
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
  			jQuery.event.trigger( "ajaxStart" );
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
  			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
  				s.accepts[ s.dataTypes[ 0 ] ] +
  					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
  				s.accepts[ "*" ]
  		);

  		// Check for headers option
  		for ( i in s.headers ) {
  			jqXHR.setRequestHeader( i, s.headers[ i ] );
  		}

  		// Allow custom headers/mimetypes and early abort
  		if ( s.beforeSend &&
  			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

  			// Abort if not done already and return
  			return jqXHR.abort();
  		}

  		// aborting is no longer a cancellation
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

  			// If request was aborted inside ajaxSend, stop there
  			if ( state === 2 ) {
  				return jqXHR;
  			}

  			// Timeout
  			if ( s.async && s.timeout > 0 ) {
  				timeoutTimer = window.setTimeout( function() {
  					jqXHR.abort( "timeout" );
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
  				window.clearTimeout( timeoutTimer );
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
  					modified = jqXHR.getResponseHeader( "Last-Modified" );
  					if ( modified ) {
  						jQuery.lastModified[ cacheURL ] = modified;
  					}
  					modified = jqXHR.getResponseHeader( "etag" );
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

  				// We extract error from statusText
  				// then normalize statusText and status for non-aborts
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
  					jQuery.event.trigger( "ajaxStop" );
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
  } );

  jQuery.each( [ "get", "post" ], function( i, method ) {
  	jQuery[ method ] = function( url, data, callback, type ) {

  		// shift arguments if data argument was omitted
  		if ( jQuery.isFunction( data ) ) {
  			type = type || callback;
  			callback = data;
  			data = undefined;
  		}

  		// The url can be an options object (which then must have .url)
  		return jQuery.ajax( jQuery.extend( {
  			url: url,
  			type: method,
  			dataType: type,
  			data: data,
  			success: callback
  		}, jQuery.isPlainObject( url ) && url ) );
  	};
  } );


  jQuery._evalUrl = function( url ) {
  	return jQuery.ajax( {
  		url: url,

  		// Make this explicit, since user can override this through ajaxSetup (#11264)
  		type: "GET",
  		dataType: "script",
  		cache: true,
  		async: false,
  		global: false,
  		"throws": true
  	} );
  };


  jQuery.fn.extend( {
  	wrapAll: function( html ) {
  		if ( jQuery.isFunction( html ) ) {
  			return this.each( function( i ) {
  				jQuery( this ).wrapAll( html.call( this, i ) );
  			} );
  		}

  		if ( this[ 0 ] ) {

  			// The elements to wrap the target around
  			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

  			if ( this[ 0 ].parentNode ) {
  				wrap.insertBefore( this[ 0 ] );
  			}

  			wrap.map( function() {
  				var elem = this;

  				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
  					elem = elem.firstChild;
  				}

  				return elem;
  			} ).append( this );
  		}

  		return this;
  	},

  	wrapInner: function( html ) {
  		if ( jQuery.isFunction( html ) ) {
  			return this.each( function( i ) {
  				jQuery( this ).wrapInner( html.call( this, i ) );
  			} );
  		}

  		return this.each( function() {
  			var self = jQuery( this ),
  				contents = self.contents();

  			if ( contents.length ) {
  				contents.wrapAll( html );

  			} else {
  				self.append( html );
  			}
  		} );
  	},

  	wrap: function( html ) {
  		var isFunction = jQuery.isFunction( html );

  		return this.each( function( i ) {
  			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
  		} );
  	},

  	unwrap: function() {
  		return this.parent().each( function() {
  			if ( !jQuery.nodeName( this, "body" ) ) {
  				jQuery( this ).replaceWith( this.childNodes );
  			}
  		} ).end();
  	}
  } );


  function getDisplay( elem ) {
  	return elem.style && elem.style.display || jQuery.css( elem, "display" );
  }

  function filterHidden( elem ) {

  	// Disconnected elements are considered hidden
  	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
  		return true;
  	}
  	while ( elem && elem.nodeType === 1 ) {
  		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
  			return true;
  		}
  		elem = elem.parentNode;
  	}
  	return false;
  }

  jQuery.expr.filters.hidden = function( elem ) {

  	// Support: Opera <= 12.12
  	// Opera reports offsetWidths and offsetHeights less than zero on some elements
  	return support.reliableHiddenOffsets() ?
  		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
  			!elem.getClientRects().length ) :
  			filterHidden( elem );
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
  				buildParams(
  					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
  					v,
  					traditional,
  					add
  				);
  			}
  		} );

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
  		} );

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

  jQuery.fn.extend( {
  	serialize: function() {
  		return jQuery.param( this.serializeArray() );
  	},
  	serializeArray: function() {
  		return this.map( function() {

  			// Can add propHook for "elements" to filter or add form elements
  			var elements = jQuery.prop( this, "elements" );
  			return elements ? jQuery.makeArray( elements ) : this;
  		} )
  		.filter( function() {
  			var type = this.type;

  			// Use .is(":disabled") so that fieldset[disabled] works
  			return this.name && !jQuery( this ).is( ":disabled" ) &&
  				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
  				( this.checked || !rcheckableType.test( type ) );
  		} )
  		.map( function( i, elem ) {
  			var val = jQuery( this ).val();

  			return val == null ?
  				null :
  				jQuery.isArray( val ) ?
  					jQuery.map( val, function( val ) {
  						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
  					} ) :
  					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
  		} ).get();
  	}
  } );


  // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)
  jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

  	// Support: IE6-IE8
  	function() {

  		// XHR cannot access local files, always use ActiveX for that case
  		if ( this.isLocal ) {
  			return createActiveXHR();
  		}

  		// Support: IE 9-11
  		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
  		// is used. In IE 9+ always use the native XHR.
  		// Note: this condition won't catch Edge as it doesn't define
  		// document.documentMode but it also doesn't support ActiveX so it won't
  		// reach this code.
  		if ( document.documentMode > 8 ) {
  			return createStandardXHR();
  		}

  		// Support: IE<9
  		// oldIE XHR does not support non-RFC2616 methods (#13240)
  		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
  		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
  		// Although this check for six methods instead of eight
  		// since IE also does not support "trace" and "connect"
  		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
  			createStandardXHR() || createActiveXHR();
  	} :

  	// For all other browsers, use the standard XMLHttpRequest object
  	createStandardXHR;

  var xhrId = 0,
  	xhrCallbacks = {},
  	xhrSupported = jQuery.ajaxSettings.xhr();

  // Support: IE<10
  // Open requests must be manually aborted on unload (#5280)
  // See https://support.microsoft.com/kb/2856746 for more info
  if ( window.attachEvent ) {
  	window.attachEvent( "onunload", function() {
  		for ( var key in xhrCallbacks ) {
  			xhrCallbacks[ key ]( undefined, true );
  		}
  	} );
  }

  // Determine support properties
  support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
  xhrSupported = support.ajax = !!xhrSupported;

  // Create transport if the browser can provide an xhr
  if ( xhrSupported ) {

  	jQuery.ajaxTransport( function( options ) {

  		// Cross domain only allowed if supported through XMLHttpRequest
  		if ( !options.crossDomain || support.cors ) {

  			var callback;

  			return {
  				send: function( headers, complete ) {
  					var i,
  						xhr = options.xhr(),
  						id = ++xhrId;

  					// Open the socket
  					xhr.open(
  						options.type,
  						options.url,
  						options.async,
  						options.username,
  						options.password
  					);

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
  					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
  						headers[ "X-Requested-With" ] = "XMLHttpRequest";
  					}

  					// Set headers
  					for ( i in headers ) {

  						// Support: IE<9
  						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
  						// request header to a null-value.
  						//
  						// To keep consistent with other XHR implementations, cast the value
  						// to string and ignore `undefined`.
  						if ( headers[ i ] !== undefined ) {
  							xhr.setRequestHeader( i, headers[ i ] + "" );
  						}
  					}

  					// Do send the request
  					// This may raise an exception which is actually
  					// handled in jQuery.ajax (so no try/catch here)
  					xhr.send( ( options.hasContent && options.data ) || null );

  					// Listener
  					callback = function( _, isAbort ) {
  						var status, statusText, responses;

  						// Was never called and is aborted or complete
  						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

  							// Clean up
  							delete xhrCallbacks[ id ];
  							callback = undefined;
  							xhr.onreadystatechange = jQuery.noop;

  							// Abort manually if needed
  							if ( isAbort ) {
  								if ( xhr.readyState !== 4 ) {
  									xhr.abort();
  								}
  							} else {
  								responses = {};
  								status = xhr.status;

  								// Support: IE<10
  								// Accessing binary-data responseText throws an exception
  								// (#11426)
  								if ( typeof xhr.responseText === "string" ) {
  									responses.text = xhr.responseText;
  								}

  								// Firefox throws an exception when accessing
  								// statusText for faulty cross-domain requests
  								try {
  									statusText = xhr.statusText;
  								} catch ( e ) {

  									// We normalize with Webkit giving an empty statusText
  									statusText = "";
  								}

  								// Filter status for non standard behaviors

  								// If the request is local and we have data: assume a success
  								// (success with no data won't get notified, that's the best we
  								// can do given current implementations)
  								if ( !status && options.isLocal && !options.crossDomain ) {
  									status = responses.text ? 200 : 404;

  								// IE - #1450: sometimes returns 1223 when it should be 204
  								} else if ( status === 1223 ) {
  									status = 204;
  								}
  							}
  						}

  						// Call complete if needed
  						if ( responses ) {
  							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
  						}
  					};

  					// Do send the request
  					// `xhr.send` may raise an exception, but it will be
  					// handled in jQuery.ajax (so no try/catch here)
  					if ( !options.async ) {

  						// If we're in sync mode we fire the callback
  						callback();
  					} else if ( xhr.readyState === 4 ) {

  						// (IE6 & IE7) if it's in cache and has been
  						// retrieved directly we need to fire the callback
  						window.setTimeout( callback );
  					} else {

  						// Register the callback, but delay it in case `xhr.send` throws
  						// Add to the list of active xhr callbacks
  						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
  					}
  				},

  				abort: function() {
  					if ( callback ) {
  						callback( undefined, true );
  					}
  				}
  			};
  		}
  	} );
  }

  // Functions to create xhrs
  function createStandardXHR() {
  	try {
  		return new window.XMLHttpRequest();
  	} catch ( e ) {}
  }

  function createActiveXHR() {
  	try {
  		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
  	} catch ( e ) {}
  }




  // Install script dataType
  jQuery.ajaxSetup( {
  	accepts: {
  		script: "text/javascript, application/javascript, " +
  			"application/ecmascript, application/x-ecmascript"
  	},
  	contents: {
  		script: /\b(?:java|ecma)script\b/
  	},
  	converters: {
  		"text script": function( text ) {
  			jQuery.globalEval( text );
  			return text;
  		}
  	}
  } );

  // Handle cache's special case and global
  jQuery.ajaxPrefilter( "script", function( s ) {
  	if ( s.cache === undefined ) {
  		s.cache = false;
  	}
  	if ( s.crossDomain ) {
  		s.type = "GET";
  		s.global = false;
  	}
  } );

  // Bind script tag hack transport
  jQuery.ajaxTransport( "script", function( s ) {

  	// This transport only deals with cross domain requests
  	if ( s.crossDomain ) {

  		var script,
  			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

  		return {

  			send: function( _, callback ) {

  				script = document.createElement( "script" );

  				script.async = true;

  				if ( s.scriptCharset ) {
  					script.charset = s.scriptCharset;
  				}

  				script.src = s.url;

  				// Attach handlers for all browsers
  				script.onload = script.onreadystatechange = function( _, isAbort ) {

  					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

  						// Handle memory leak in IE
  						script.onload = script.onreadystatechange = null;

  						// Remove the script
  						if ( script.parentNode ) {
  							script.parentNode.removeChild( script );
  						}

  						// Dereference the script
  						script = null;

  						// Callback if not abort
  						if ( !isAbort ) {
  							callback( 200, "success" );
  						}
  					}
  				};

  				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
  				// Use native DOM manipulation to avoid our domManip AJAX trickery
  				head.insertBefore( script, head.firstChild );
  			},

  			abort: function() {
  				if ( script ) {
  					script.onload( undefined, true );
  				}
  			}
  		};
  	}
  } );




  var oldCallbacks = [],
  	rjsonp = /(=)\?(?=&|$)|\?\?/;

  // Default jsonp settings
  jQuery.ajaxSetup( {
  	jsonp: "callback",
  	jsonpCallback: function() {
  		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
  		this[ callback ] = true;
  		return callback;
  	}
  } );

  // Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

  	var callbackName, overwritten, responseContainer,
  		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
  			"url" :
  			typeof s.data === "string" &&
  				( s.contentType || "" )
  					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
  				rjsonp.test( s.data ) && "data"
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
  		s.converters[ "script json" ] = function() {
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
  		jqXHR.always( function() {

  			// If previous value didn't exist - remove it
  			if ( overwritten === undefined ) {
  				jQuery( window ).removeProp( callbackName );

  			// Otherwise restore preexisting value
  			} else {
  				window[ callbackName ] = overwritten;
  			}

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
  		} );

  		// Delegate to script
  		return "script";
  	}
  } );




  // data: string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
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
  		return [ context.createElement( parsed[ 1 ] ) ];
  	}

  	parsed = buildFragment( [ data ], context, scripts );

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
  		off = url.indexOf( " " );

  	if ( off > -1 ) {
  		selector = jQuery.trim( url.slice( off, url.length ) );
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
  		jQuery.ajax( {
  			url: url,

  			// If "type" variable is undefined, then "GET" method will be used.
  			// Make value of this field explicit since
  			// user can override it through ajaxSetup method
  			type: type || "GET",
  			dataType: "html",
  			data: params
  		} ).done( function( responseText ) {

  			// Save response for use in complete callback
  			response = arguments;

  			self.html( selector ?

  				// If a selector was specified, locate the right elements in a dummy div
  				// Exclude scripts to avoid IE 'Permission Denied' errors
  				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

  				// Otherwise use the full result
  				responseText );

  		// If the request succeeds, this function gets "data", "status", "jqXHR"
  		// but they are ignored because response was set above.
  		// If it fails, this function gets "jqXHR", "status", "error"
  		} ).always( callback && function( jqXHR, status ) {
  			self.each( function() {
  				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
  			} );
  		} );
  	}

  	return this;
  };




  // Attach a bunch of functions for handling common AJAX events
  jQuery.each( [
  	"ajaxStart",
  	"ajaxStop",
  	"ajaxComplete",
  	"ajaxError",
  	"ajaxSuccess",
  	"ajaxSend"
  ], function( i, type ) {
  	jQuery.fn[ type ] = function( fn ) {
  		return this.on( type, fn );
  	};
  } );




  jQuery.expr.filters.animated = function( elem ) {
  	return jQuery.grep( jQuery.timers, function( fn ) {
  		return elem === fn.elem;
  	} ).length;
  };





  /**
   * Gets a window from an element
   */
  function getWindow( elem ) {
  	return jQuery.isWindow( elem ) ?
  		elem :
  		elem.nodeType === 9 ?
  			elem.defaultView || elem.parentWindow :
  			false;
  }

  jQuery.offset = {
  	setOffset: function( elem, options, i ) {
  		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
  			position = jQuery.css( elem, "position" ),
  			curElem = jQuery( elem ),
  			props = {};

  		// set position first, in-case top/left are set even on static elem
  		if ( position === "static" ) {
  			elem.style.position = "relative";
  		}

  		curOffset = curElem.offset();
  		curCSSTop = jQuery.css( elem, "top" );
  		curCSSLeft = jQuery.css( elem, "left" );
  		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
  			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

  		// need to be able to calculate position if either top or left
  		// is auto and position is either absolute or fixed
  		if ( calculatePosition ) {
  			curPosition = curElem.position();
  			curTop = curPosition.top;
  			curLeft = curPosition.left;
  		} else {
  			curTop = parseFloat( curCSSTop ) || 0;
  			curLeft = parseFloat( curCSSLeft ) || 0;
  		}

  		if ( jQuery.isFunction( options ) ) {

  			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
  			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
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

  jQuery.fn.extend( {
  	offset: function( options ) {
  		if ( arguments.length ) {
  			return options === undefined ?
  				this :
  				this.each( function( i ) {
  					jQuery.offset.setOffset( this, options, i );
  				} );
  		}

  		var docElem, win,
  			box = { top: 0, left: 0 },
  			elem = this[ 0 ],
  			doc = elem && elem.ownerDocument;

  		if ( !doc ) {
  			return;
  		}

  		docElem = doc.documentElement;

  		// Make sure it's not a disconnected DOM node
  		if ( !jQuery.contains( docElem, elem ) ) {
  			return box;
  		}

  		// If we don't have gBCR, just use 0,0 rather than error
  		// BlackBerry 5, iOS 3 (original iPhone)
  		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
  			box = elem.getBoundingClientRect();
  		}
  		win = getWindow( doc );
  		return {
  			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
  			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
  		};
  	},

  	position: function() {
  		if ( !this[ 0 ] ) {
  			return;
  		}

  		var offsetParent, offset,
  			parentOffset = { top: 0, left: 0 },
  			elem = this[ 0 ];

  		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  		// because it is its only offset parent
  		if ( jQuery.css( elem, "position" ) === "fixed" ) {

  			// we assume that getBoundingClientRect is available when computed position is fixed
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
  			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
  			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
  		}

  		// Subtract parent offsets and element margins
  		// note: when an element has margin: auto the offsetLeft and marginLeft
  		// are the same in Safari causing offset.left to incorrectly be 0
  		return {
  			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
  			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
  		};
  	},

  	offsetParent: function() {
  		return this.map( function() {
  			var offsetParent = this.offsetParent;

  			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
  				jQuery.css( offsetParent, "position" ) === "static" ) ) {
  				offsetParent = offsetParent.offsetParent;
  			}
  			return offsetParent || documentElement;
  		} );
  	}
  } );

  // Create scrollLeft and scrollTop methods
  jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
  	var top = /Y/.test( prop );

  	jQuery.fn[ method ] = function( val ) {
  		return access( this, function( elem, method, val ) {
  			var win = getWindow( elem );

  			if ( val === undefined ) {
  				return win ? ( prop in win ) ? win[ prop ] :
  					win.document.documentElement[ method ] :
  					elem[ method ];
  			}

  			if ( win ) {
  				win.scrollTo(
  					!top ? val : jQuery( win ).scrollLeft(),
  					top ? val : jQuery( win ).scrollTop()
  				);

  			} else {
  				elem[ method ] = val;
  			}
  		}, method, val, arguments.length, null );
  	};
  } );

  // Support: Safari<7-8+, Chrome<37-44+
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // getComputedStyle returns percent when specified for top/left/bottom/right
  // rather than make the css module depend on the offset module, we just check for it here
  jQuery.each( [ "top", "left" ], function( i, prop ) {
  	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
  		function( elem, computed ) {
  			if ( computed ) {
  				computed = curCSS( elem, prop );

  				// if curCSS returns percentage, fallback to offset
  				return rnumnonpx.test( computed ) ?
  					jQuery( elem ).position()[ prop ] + "px" :
  					computed;
  			}
  		}
  	);
  } );


  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
  	function( defaultExtra, funcName ) {

  		// margin is only for outerHeight, outerWidth
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
  					// unfortunately, this causes bug #3838 in IE6/8 only,
  					// but there is currently no good, small way to fix it.
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
  	} );
  } );


  jQuery.fn.extend( {

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
  		return arguments.length === 1 ?
  			this.off( selector, "**" ) :
  			this.off( types, selector || "**", fn );
  	}
  } );

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

  if ( typeof define === "function" && define.amd ) {
  	define( "jquery", [], function() {
  		return jQuery;
  	} );
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

  // Expose jQuery and $ identifiers, even in
  // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if ( !noGlobal ) {
  	window.jQuery = window.$ = jQuery;
  }

  return jQuery;
})),
//=== End of jQuery Core ===

//=== Rails https://github.com/rails/jquery-ujs ===
function($, undefined) {
  "use strict";

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.on('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.off('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }
}(jQuery),
// === End Rails ===

// === jQueryUI Effects v1.12.1===
/*! jQuery UI - v1.12.1 - 2018-05-16
* http://jqueryui.com
* Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

  $.ui = $.ui || {};

  $.ui.version = "1.12.1";


  /*!
   * jQuery UI Effects 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Effects Core
  //>>group: Effects
  // jscs:disable maximumLineLength
  //>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
  // jscs:enable maximumLineLength
  //>>docs: http://api.jqueryui.com/category/effects-core/
  //>>demos: http://jqueryui.com/effect/



  var dataSpace = "ui-effects-",
  	dataSpaceStyle = "ui-effects-style",
  	dataSpaceAnimated = "ui-effects-animated",

  	// Create a local jQuery because jQuery Color relies on it and the
  	// global may not exist with AMD and a custom build (#10199)
  	jQuery = $;

  $.effects = {
  	effect: {}
  },

  /*!
   * jQuery Color Animations v2.1.2
   * https://github.com/jquery/jquery-color
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * Date: Wed Jan 16 08:47:09 2013 -0600
   */
  ( function( jQuery, undefined ) {

   	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
   		"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

   	// Plusequals test for += 100 -= 100
   	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

   	// A set of RE's that can match strings and generate color tuples.
   	stringParsers = [ {
   			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
   			parse: function( execResult ) {
   				return [
   					execResult[ 1 ],
   					execResult[ 2 ],
   					execResult[ 3 ],
   					execResult[ 4 ]
   				];
   			}
   		}, {
   			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
   			parse: function( execResult ) {
   				return [
   					execResult[ 1 ] * 2.55,
   					execResult[ 2 ] * 2.55,
   					execResult[ 3 ] * 2.55,
   					execResult[ 4 ]
   				];
   			}
   		}, {

   			// This regex ignores A-F because it's compared against an already lowercased string
   			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
   			parse: function( execResult ) {
   				return [
   					parseInt( execResult[ 1 ], 16 ),
   					parseInt( execResult[ 2 ], 16 ),
   					parseInt( execResult[ 3 ], 16 )
   				];
   			}
   		}, {

   			// This regex ignores A-F because it's compared against an already lowercased string
   			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
   			parse: function( execResult ) {
   				return [
   					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
   					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
   					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
   				];
   			}
   		}, {
   			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
   			space: "hsla",
   			parse: function( execResult ) {
   				return [
   					execResult[ 1 ],
   					execResult[ 2 ] / 100,
   					execResult[ 3 ] / 100,
   					execResult[ 4 ]
   				];
   			}
   		} ],

   	// JQuery.Color( )
   	color = jQuery.Color = function( color, green, blue, alpha ) {
   		return new jQuery.Color.fn.parse( color, green, blue, alpha );
   	},
   	spaces = {
   		rgba: {
   			props: {
   				red: {
   					idx: 0,
   					type: "byte"
   				},
   				green: {
   					idx: 1,
   					type: "byte"
   				},
   				blue: {
   					idx: 2,
   					type: "byte"
   				}
   			}
   		},

   		hsla: {
   			props: {
   				hue: {
   					idx: 0,
   					type: "degrees"
   				},
   				saturation: {
   					idx: 1,
   					type: "percent"
   				},
   				lightness: {
   					idx: 2,
   					type: "percent"
   				}
   			}
   		}
   	},
   	propTypes = {
   		"byte": {
   			floor: true,
   			max: 255
   		},
   		"percent": {
   			max: 1
   		},
   		"degrees": {
   			mod: 360,
   			floor: true
   		}
   	},
   	support = color.support = {},

   	// Element for support tests
   	supportElem = jQuery( "<p>" )[ 0 ],

   	// Colors = jQuery.Color.names
   	colors,

   	// Local aliases of functions called often
   	each = jQuery.each;

   	// Determine rgba support immediately
   	supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
   	support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

   	// Define cache name and alpha properties
   	// for rgba and hsla spaces
   	each( spaces, function( spaceName, space ) {
   		space.cache = "_" + spaceName;
   		space.props.alpha = {
   			idx: 3,
   			type: "percent",
   			def: 1
   		};
   	} );

   	function clamp( value, prop, allowEmpty ) {
   		var type = propTypes[ prop.type ] || {};

   		if ( value == null ) {
   			return ( allowEmpty || !prop.def ) ? null : prop.def;
   		}

   		// ~~ is an short way of doing floor for positive numbers
   		value = type.floor ? ~~value : parseFloat( value );

   		// IE will pass in empty strings as value for alpha,
   		// which will hit this case
   		if ( isNaN( value ) ) {
   			return prop.def;
   		}

   		if ( type.mod ) {

   			// We add mod before modding to make sure that negatives values
   			// get converted properly: -10 -> 350
   			return ( value + type.mod ) % type.mod;
   		}

   		// For now all property types without mod have min and max
   		return 0 > value ? 0 : type.max < value ? type.max : value;
   	}

   	function stringParse( string ) {
   		var inst = color(),
   			rgba = inst._rgba = [];

   		string = string.toLowerCase();

   		each( stringParsers, function( i, parser ) {
   			var parsed,
   				match = parser.re.exec( string ),
   				values = match && parser.parse( match ),
   				spaceName = parser.space || "rgba";

   			if ( values ) {
   				parsed = inst[ spaceName ]( values );

   				// If this was an rgba parse the assignment might happen twice
   				// oh well....
   				inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
   				rgba = inst._rgba = parsed._rgba;

   				// Exit each( stringParsers ) here because we matched
   				return false;
   			}
   		} );

   		// Found a stringParser that handled it
   		if ( rgba.length ) {

   			// If this came from a parsed string, force "transparent" when alpha is 0
   			// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
   			if ( rgba.join() === "0,0,0,0" ) {
   				jQuery.extend( rgba, colors.transparent );
   			}
   			return inst;
   		}

   		// Named colors
   		return colors[ string ];
   	}

   	color.fn = jQuery.extend( color.prototype, {
   		parse: function( red, green, blue, alpha ) {
   			if ( red === undefined ) {
   				this._rgba = [ null, null, null, null ];
   				return this;
   			}
   			if ( red.jquery || red.nodeType ) {
   				red = jQuery( red ).css( green );
   				green = undefined;
   			}

   			var inst = this,
   				type = jQuery.type( red ),
   				rgba = this._rgba = [];

   			// More than 1 argument specified - assume ( red, green, blue, alpha )
   			if ( green !== undefined ) {
   				red = [ red, green, blue, alpha ];
   				type = "array";
   			}

   			if ( type === "string" ) {
   				return this.parse( stringParse( red ) || colors._default );
   			}

   			if ( type === "array" ) {
   				each( spaces.rgba.props, function( key, prop ) {
   					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
   				} );
   				return this;
   			}

   			if ( type === "object" ) {
   				if ( red instanceof color ) {
   					each( spaces, function( spaceName, space ) {
   						if ( red[ space.cache ] ) {
   							inst[ space.cache ] = red[ space.cache ].slice();
   						}
   					} );
   				} else {
   					each( spaces, function( spaceName, space ) {
   						var cache = space.cache;
   						each( space.props, function( key, prop ) {

   							// If the cache doesn't exist, and we know how to convert
   							if ( !inst[ cache ] && space.to ) {

   								// If the value was null, we don't need to copy it
   								// if the key was alpha, we don't need to copy it either
   								if ( key === "alpha" || red[ key ] == null ) {
   									return;
   								}
   								inst[ cache ] = space.to( inst._rgba );
   							}

   							// This is the only case where we allow nulls for ALL properties.
   							// call clamp with alwaysAllowEmpty
   							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
   						} );

   						// Everything defined but alpha?
   						if ( inst[ cache ] &&
   								jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

   							// Use the default of 1
   							inst[ cache ][ 3 ] = 1;
   							if ( space.from ) {
   								inst._rgba = space.from( inst[ cache ] );
   							}
   						}
   					} );
   				}
   				return this;
   			}
   		},
   		is: function( compare ) {
   			var is = color( compare ),
   				same = true,
   				inst = this;

   			each( spaces, function( _, space ) {
   				var localCache,
   					isCache = is[ space.cache ];
   				if ( isCache ) {
   					localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
   					each( space.props, function( _, prop ) {
   						if ( isCache[ prop.idx ] != null ) {
   							same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
   							return same;
   						}
   					} );
   				}
   				return same;
   			} );
   			return same;
   		},
   		_space: function() {
   			var used = [],
   				inst = this;
   			each( spaces, function( spaceName, space ) {
   				if ( inst[ space.cache ] ) {
   					used.push( spaceName );
   				}
   			} );
   			return used.pop();
   		},
   		transition: function( other, distance ) {
   			var end = color( other ),
   				spaceName = end._space(),
   				space = spaces[ spaceName ],
   				startColor = this.alpha() === 0 ? color( "transparent" ) : this,
   				start = startColor[ space.cache ] || space.to( startColor._rgba ),
   				result = start.slice();

   			end = end[ space.cache ];
   			each( space.props, function( key, prop ) {
   				var index = prop.idx,
   					startValue = start[ index ],
   					endValue = end[ index ],
   					type = propTypes[ prop.type ] || {};

   				// If null, don't override start value
   				if ( endValue === null ) {
   					return;
   				}

   				// If null - use end
   				if ( startValue === null ) {
   					result[ index ] = endValue;
   				} else {
   					if ( type.mod ) {
   						if ( endValue - startValue > type.mod / 2 ) {
   							startValue += type.mod;
   						} else if ( startValue - endValue > type.mod / 2 ) {
   							startValue -= type.mod;
   						}
   					}
   					result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
   				}
   			} );
   			return this[ spaceName ]( result );
   		},
   		blend: function( opaque ) {

   			// If we are already opaque - return ourself
   			if ( this._rgba[ 3 ] === 1 ) {
   				return this;
   			}

   			var rgb = this._rgba.slice(),
   				a = rgb.pop(),
   				blend = color( opaque )._rgba;

   			return color( jQuery.map( rgb, function( v, i ) {
   				return ( 1 - a ) * blend[ i ] + a * v;
   			} ) );
   		},
   		toRgbaString: function() {
   			var prefix = "rgba(",
   				rgba = jQuery.map( this._rgba, function( v, i ) {
   					return v == null ? ( i > 2 ? 1 : 0 ) : v;
   				} );

   			if ( rgba[ 3 ] === 1 ) {
   				rgba.pop();
   				prefix = "rgb(";
   			}

   			return prefix + rgba.join() + ")";
   		},
   		toHslaString: function() {
   			var prefix = "hsla(",
   				hsla = jQuery.map( this.hsla(), function( v, i ) {
   					if ( v == null ) {
   						v = i > 2 ? 1 : 0;
   					}

   					// Catch 1 and 2
   					if ( i && i < 3 ) {
   						v = Math.round( v * 100 ) + "%";
   					}
   					return v;
   				} );

   			if ( hsla[ 3 ] === 1 ) {
   				hsla.pop();
   				prefix = "hsl(";
   			}
   			return prefix + hsla.join() + ")";
   		},
   		toHexString: function( includeAlpha ) {
   			var rgba = this._rgba.slice(),
   				alpha = rgba.pop();

   			if ( includeAlpha ) {
   				rgba.push( ~~( alpha * 255 ) );
   			}

   			return "#" + jQuery.map( rgba, function( v ) {

   				// Default to 0 when nulls exist
   				v = ( v || 0 ).toString( 16 );
   				return v.length === 1 ? "0" + v : v;
   			} ).join( "" );
   		},
   		toString: function() {
   			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
   		}
   	} );
   	color.fn.parse.prototype = color.fn;

   	// Hsla conversions adapted from:
   	// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

   	function hue2rgb( p, q, h ) {
   		h = ( h + 1 ) % 1;
   		if ( h * 6 < 1 ) {
   			return p + ( q - p ) * h * 6;
   		}
   		if ( h * 2 < 1 ) {
   			return q;
   		}
   		if ( h * 3 < 2 ) {
   			return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
   		}
   		return p;
   	}

   	spaces.hsla.to = function( rgba ) {
   		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
   			return [ null, null, null, rgba[ 3 ] ];
   		}
   		var r = rgba[ 0 ] / 255,
   			g = rgba[ 1 ] / 255,
   			b = rgba[ 2 ] / 255,
   			a = rgba[ 3 ],
   			max = Math.max( r, g, b ),
   			min = Math.min( r, g, b ),
   			diff = max - min,
   			add = max + min,
   			l = add * 0.5,
   			h, s;

   		if ( min === max ) {
   			h = 0;
   		} else if ( r === max ) {
   			h = ( 60 * ( g - b ) / diff ) + 360;
   		} else if ( g === max ) {
   			h = ( 60 * ( b - r ) / diff ) + 120;
   		} else {
   			h = ( 60 * ( r - g ) / diff ) + 240;
   		}

   		// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
   		// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
   		if ( diff === 0 ) {
   			s = 0;
   		} else if ( l <= 0.5 ) {
   			s = diff / add;
   		} else {
   			s = diff / ( 2 - add );
   		}
   		return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
   	};

   	spaces.hsla.from = function( hsla ) {
   		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
   			return [ null, null, null, hsla[ 3 ] ];
   		}
   		var h = hsla[ 0 ] / 360,
   			s = hsla[ 1 ],
   			l = hsla[ 2 ],
   			a = hsla[ 3 ],
   			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
   			p = 2 * l - q;

   		return [
   			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
   			Math.round( hue2rgb( p, q, h ) * 255 ),
   			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
   			a
   		];
   	};

   	each( spaces, function( spaceName, space ) {
   		var props = space.props,
   			cache = space.cache,
   			to = space.to,
   			from = space.from;

   		// Makes rgba() and hsla()
   		color.fn[ spaceName ] = function( value ) {

   			// Generate a cache for this space if it doesn't exist
   			if ( to && !this[ cache ] ) {
   				this[ cache ] = to( this._rgba );
   			}
   			if ( value === undefined ) {
   				return this[ cache ].slice();
   			}

   			var ret,
   				type = jQuery.type( value ),
   				arr = ( type === "array" || type === "object" ) ? value : arguments,
   				local = this[ cache ].slice();

   			each( props, function( key, prop ) {
   				var val = arr[ type === "object" ? key : prop.idx ];
   				if ( val == null ) {
   					val = local[ prop.idx ];
   				}
   				local[ prop.idx ] = clamp( val, prop );
   			} );

   			if ( from ) {
   				ret = color( from( local ) );
   				ret[ cache ] = local;
   				return ret;
   			} else {
   				return color( local );
   			}
   		};

   		// Makes red() green() blue() alpha() hue() saturation() lightness()
   		each( props, function( key, prop ) {

   			// Alpha is included in more than one space
   			if ( color.fn[ key ] ) {
   				return;
   			}
   			color.fn[ key ] = function( value ) {
   				var vtype = jQuery.type( value ),
   					fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
   					local = this[ fn ](),
   					cur = local[ prop.idx ],
   					match;

   				if ( vtype === "undefined" ) {
   					return cur;
   				}

   				if ( vtype === "function" ) {
   					value = value.call( this, cur );
   					vtype = jQuery.type( value );
   				}
   				if ( value == null && prop.empty ) {
   					return this;
   				}
   				if ( vtype === "string" ) {
   					match = rplusequals.exec( value );
   					if ( match ) {
   						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
   					}
   				}
   				local[ prop.idx ] = value;
   				return this[ fn ]( local );
   			};
   		} );
   	} );

   	// Add cssHook and .fx.step function for each named hook.
   	// accept a space separated string of properties
   	color.hook = function( hook ) {
   		var hooks = hook.split( " " );
   		each( hooks, function( i, hook ) {
   			jQuery.cssHooks[ hook ] = {
   				set: function( elem, value ) {
   					var parsed, curElem,
   						backgroundColor = "";

   					if ( value !== "transparent" && ( jQuery.type( value ) !== "string" ||
   							( parsed = stringParse( value ) ) ) ) {
   						value = color( parsed || value );
   						if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
   							curElem = hook === "backgroundColor" ? elem.parentNode : elem;
   							while (
   								( backgroundColor === "" || backgroundColor === "transparent" ) &&
   								curElem && curElem.style
   							) {
   								try {
   									backgroundColor = jQuery.css( curElem, "backgroundColor" );
   									curElem = curElem.parentNode;
   								} catch ( e ) {
   								}
   							}

   							value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
   								backgroundColor :
   								"_default" );
   						}

   						value = value.toRgbaString();
   					}
   					try {
   						elem.style[ hook ] = value;
   					} catch ( e ) {

   						// Wrapped to prevent IE from throwing errors on "invalid" values like
   						// 'auto' or 'inherit'
   					}
   				}
   			};
   			jQuery.fx.step[ hook ] = function( fx ) {
   				if ( !fx.colorInit ) {
   					fx.start = color( fx.elem, hook );
   					fx.end = color( fx.end );
   					fx.colorInit = true;
   				}
   				jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
   			};
   		} );

   	};

   	color.hook( stepHooks );

   	jQuery.cssHooks.borderColor = {
   		expand: function( value ) {
   			var expanded = {};

   			each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
   				expanded[ "border" + part + "Color" ] = value;
   			} );
   			return expanded;
   		}
   	};

   	// Basic color names only.
   	// Usage of any of the other color names requires adding yourself or including
   	// jquery.color.svg-names.js.
   	colors = jQuery.Color.names = {

   		// 4.1. Basic color keywords
   		aqua: "#00ffff",
   		black: "#000000",
   		blue: "#0000ff",
   		fuchsia: "#ff00ff",
   		gray: "#808080",
   		green: "#008000",
   		lime: "#00ff00",
   		maroon: "#800000",
   		navy: "#000080",
   		olive: "#808000",
   		purple: "#800080",
   		red: "#ff0000",
   		silver: "#c0c0c0",
   		teal: "#008080",
   		white: "#ffffff",
   		yellow: "#ffff00",

   		// 4.2.3. "transparent" color keyword
   		transparent: [ null, null, null, 0 ],

   		_default: "#ffffff"
   	};

  })(jQuery),

  /******************************************************************************/
  /****************************** CLASS ANIMATIONS ******************************/
  /******************************************************************************/
  ( function() {

   var classAnimationActions = [ "add", "remove", "toggle" ],
   shorthandStyles = {
     border: 1,
     borderBottom: 1,
     borderColor: 1,
     borderLeft: 1,
     borderRight: 1,
     borderTop: 1,
     borderWidth: 1,
     margin: 1,
     padding: 1
   };

   $.each(
     [ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
     function( _, prop ) {
       $.fx.step[ prop ] = function( fx ) {
         if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
           jQuery.style( fx.elem, prop, fx.end );
           fx.setAttr = true;
         }
       };
     }
   );

   function getElementStyles( elem ) {
     var key, len,
       style = elem.ownerDocument.defaultView ?
         elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
         elem.currentStyle,
       styles = {};

     if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
       len = style.length;
       while ( len-- ) {
         key = style[ len ];
         if ( typeof style[ key ] === "string" ) {
           styles[ $.camelCase( key ) ] = style[ key ];
         }
       }

     // Support: Opera, IE <9
     } else {
       for ( key in style ) {
         if ( typeof style[ key ] === "string" ) {
           styles[ key ] = style[ key ];
         }
       }
     }

     return styles;
   }

   function styleDifference( oldStyle, newStyle ) {
     var diff = {},
       name, value;

     for ( name in newStyle ) {
       value = newStyle[ name ];
       if ( oldStyle[ name ] !== value ) {
         if ( !shorthandStyles[ name ] ) {
           if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
             diff[ name ] = value;
           }
         }
       }
     }

     return diff;
   }

   // Support: jQuery <1.8
   if ( !$.fn.addBack ) {
     $.fn.addBack = function( selector ) {
       return this.add( selector == null ?
         this.prevObject : this.prevObject.filter( selector )
       );
     };
   }

   $.effects.animateClass = function( value, duration, easing, callback ) {
     var o = $.speed( duration, easing, callback );

     return this.queue( function() {
       var animated = $( this ),
         baseClass = animated.attr( "class" ) || "",
         applyClassChange,
         allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

       // Map the animated objects to store the original styles.
       allAnimations = allAnimations.map( function() {
         var el = $( this );
         return {
           el: el,
           start: getElementStyles( this )
         };
       } );

       // Apply class change
       applyClassChange = function() {
         $.each( classAnimationActions, function( i, action ) {
           if ( value[ action ] ) {
             animated[ action + "Class" ]( value[ action ] );
           }
         } );
       };
       applyClassChange();

       // Map all animated objects again - calculate new styles and diff
       allAnimations = allAnimations.map( function() {
         this.end = getElementStyles( this.el[ 0 ] );
         this.diff = styleDifference( this.start, this.end );
         return this;
       } );

       // Apply original class
       animated.attr( "class", baseClass );

       // Map all animated objects again - this time collecting a promise
       allAnimations = allAnimations.map( function() {
         var styleInfo = this,
           dfd = $.Deferred(),
           opts = $.extend( {}, o, {
             queue: false,
             complete: function() {
               dfd.resolve( styleInfo );
             }
           } );

         this.el.animate( this.diff, opts );
         return dfd.promise();
       } );

       // Once all animations have completed:
       $.when.apply( $, allAnimations.get() ).done( function() {

         // Set the final class
         applyClassChange();

         // For each animated element,
         // clear all css properties that were animated
         $.each( arguments, function() {
           var el = this.el;
           $.each( this.diff, function( key ) {
             el.css( key, "" );
           } );
         } );

         // This is guarnteed to be there if you use jQuery.speed()
         // it also handles dequeuing the next anim...
         o.complete.call( animated[ 0 ] );
       } );
     } );
   };

   $.fn.extend( {
     addClass: ( function( orig ) {
       return function( classNames, speed, easing, callback ) {
         return speed ?
           $.effects.animateClass.call( this,
             { add: classNames }, speed, easing, callback ) :
           orig.apply( this, arguments );
       };
     } )( $.fn.addClass ),

     removeClass: ( function( orig ) {
       return function( classNames, speed, easing, callback ) {
         return arguments.length > 1 ?
           $.effects.animateClass.call( this,
             { remove: classNames }, speed, easing, callback ) :
           orig.apply( this, arguments );
       };
     } )( $.fn.removeClass ),

     toggleClass: ( function( orig ) {
       return function( classNames, force, speed, easing, callback ) {
         if ( typeof force === "boolean" || force === undefined ) {
           if ( !speed ) {

             // Without speed parameter
             return orig.apply( this, arguments );
           } else {
             return $.effects.animateClass.call( this,
               ( force ? { add: classNames } : { remove: classNames } ),
               speed, easing, callback );
           }
         } else {

           // Without force parameter
           return $.effects.animateClass.call( this,
             { toggle: classNames }, force, speed, easing );
         }
       };
     } )( $.fn.toggleClass ),

     switchClass: function( remove, add, speed, easing, callback ) {
       return $.effects.animateClass.call( this, {
         add: add,
         remove: remove
       }, speed, easing, callback );
     }
   } );

  } )();

  /******************************************************************************/
  /*********************************** EFFECTS **********************************/
  /******************************************************************************/

  ( function() {

   if ( $.expr && $.expr.filters && $.expr.filters.animated ) {
     $.expr.filters.animated = ( function( orig ) {
       return function( elem ) {
         return !!$( elem ).data( dataSpaceAnimated ) || orig( elem );
       };
     } )( $.expr.filters.animated );
   }

   if ( $.uiBackCompat !== false ) {
     $.extend( $.effects, {

       // Saves a set of properties in a data storage
       save: function( element, set ) {
         var i = 0, length = set.length;
         for ( ; i < length; i++ ) {
           if ( set[ i ] !== null ) {
             element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
           }
         }
       },

       // Restores a set of previously saved properties from a data storage
       restore: function( element, set ) {
         var val, i = 0, length = set.length;
         for ( ; i < length; i++ ) {
           if ( set[ i ] !== null ) {
             val = element.data( dataSpace + set[ i ] );
             element.css( set[ i ], val );
           }
         }
       },

       setMode: function( el, mode ) {
         if ( mode === "toggle" ) {
           mode = el.is( ":hidden" ) ? "show" : "hide";
         }
         return mode;
       },

       // Wraps the element around a wrapper that copies position properties
       createWrapper: function( element ) {

         // If the element is already wrapped, return it
         if ( element.parent().is( ".ui-effects-wrapper" ) ) {
           return element.parent();
         }

         // Wrap the element
         var props = {
             width: element.outerWidth( true ),
             height: element.outerHeight( true ),
             "float": element.css( "float" )
           },
           wrapper = $( "<div></div>" )
             .addClass( "ui-effects-wrapper" )
             .css( {
               fontSize: "100%",
               background: "transparent",
               border: "none",
               margin: 0,
               padding: 0
             } ),

           // Store the size in case width/height are defined in % - Fixes #5245
           size = {
             width: element.width(),
             height: element.height()
           },
           active = document.activeElement;

         // Support: Firefox
         // Firefox incorrectly exposes anonymous content
         // https://bugzilla.mozilla.org/show_bug.cgi?id=561664
         try {
           active.id;
         } catch ( e ) {
           active = document.body;
         }

         element.wrap( wrapper );

         // Fixes #7595 - Elements lose focus when wrapped.
         if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
           $( active ).trigger( "focus" );
         }

         // Hotfix for jQuery 1.4 since some change in wrap() seems to actually
         // lose the reference to the wrapped element
         wrapper = element.parent();

         // Transfer positioning properties to the wrapper
         if ( element.css( "position" ) === "static" ) {
           wrapper.css( { position: "relative" } );
           element.css( { position: "relative" } );
         } else {
           $.extend( props, {
             position: element.css( "position" ),
             zIndex: element.css( "z-index" )
           } );
           $.each( [ "top", "left", "bottom", "right" ], function( i, pos ) {
             props[ pos ] = element.css( pos );
             if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
               props[ pos ] = "auto";
             }
           } );
           element.css( {
             position: "relative",
             top: 0,
             left: 0,
             right: "auto",
             bottom: "auto"
           } );
         }
         element.css( size );

         return wrapper.css( props ).show();
       },

       removeWrapper: function( element ) {
         var active = document.activeElement;

         if ( element.parent().is( ".ui-effects-wrapper" ) ) {
           element.parent().replaceWith( element );

           // Fixes #7595 - Elements lose focus when wrapped.
           if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
             $( active ).trigger( "focus" );
           }
         }

         return element;
       }
     } );
   }

   $.extend( $.effects, {
     version: "1.12.1",

     define: function( name, mode, effect ) {
       if ( !effect ) {
         effect = mode;
         mode = "effect";
       }

       $.effects.effect[ name ] = effect;
       $.effects.effect[ name ].mode = mode;

       return effect;
     },

     scaledDimensions: function( element, percent, direction ) {
       if ( percent === 0 ) {
         return {
           height: 0,
           width: 0,
           outerHeight: 0,
           outerWidth: 0
         };
       }

       var x = direction !== "horizontal" ? ( ( percent || 100 ) / 100 ) : 1,
         y = direction !== "vertical" ? ( ( percent || 100 ) / 100 ) : 1;

       return {
         height: element.height() * y,
         width: element.width() * x,
         outerHeight: element.outerHeight() * y,
         outerWidth: element.outerWidth() * x
       };

     },

     clipToBox: function( animation ) {
       return {
         width: animation.clip.right - animation.clip.left,
         height: animation.clip.bottom - animation.clip.top,
         left: animation.clip.left,
         top: animation.clip.top
       };
     },

     // Injects recently queued functions to be first in line (after "inprogress")
     unshift: function( element, queueLength, count ) {
       var queue = element.queue();

       if ( queueLength > 1 ) {
         queue.splice.apply( queue,
           [ 1, 0 ].concat( queue.splice( queueLength, count ) ) );
       }
       element.dequeue();
     },

     saveStyle: function( element ) {
       element.data( dataSpaceStyle, element[ 0 ].style.cssText );
     },

     restoreStyle: function( element ) {
       element[ 0 ].style.cssText = element.data( dataSpaceStyle ) || "";
       element.removeData( dataSpaceStyle );
     },

     mode: function( element, mode ) {
       var hidden = element.is( ":hidden" );

       if ( mode === "toggle" ) {
         mode = hidden ? "show" : "hide";
       }
       if ( hidden ? mode === "hide" : mode === "show" ) {
         mode = "none";
       }
       return mode;
     },

     // Translates a [top,left] array into a baseline value
     getBaseline: function( origin, original ) {
       var y, x;

       switch ( origin[ 0 ] ) {
       case "top":
         y = 0;
         break;
       case "middle":
         y = 0.5;
         break;
       case "bottom":
         y = 1;
         break;
       default:
         y = origin[ 0 ] / original.height;
       }

       switch ( origin[ 1 ] ) {
       case "left":
         x = 0;
         break;
       case "center":
         x = 0.5;
         break;
       case "right":
         x = 1;
         break;
       default:
         x = origin[ 1 ] / original.width;
       }

       return {
         x: x,
         y: y
       };
     },

     // Creates a placeholder element so that the original element can be made absolute
     createPlaceholder: function( element ) {
       var placeholder,
         cssPosition = element.css( "position" ),
         position = element.position();

       // Lock in margins first to account for form elements, which
       // will change margin if you explicitly set height
       // see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
       // Support: Safari
       element.css( {
         marginTop: element.css( "marginTop" ),
         marginBottom: element.css( "marginBottom" ),
         marginLeft: element.css( "marginLeft" ),
         marginRight: element.css( "marginRight" )
       } )
       .outerWidth( element.outerWidth() )
       .outerHeight( element.outerHeight() );

       if ( /^(static|relative)/.test( cssPosition ) ) {
         cssPosition = "absolute";

         placeholder = $( "<" + element[ 0 ].nodeName + ">" ).insertAfter( element ).css( {

           // Convert inline to inline block to account for inline elements
           // that turn to inline block based on content (like img)
           display: /^(inline|ruby)/.test( element.css( "display" ) ) ?
             "inline-block" :
             "block",
           visibility: "hidden",

           // Margins need to be set to account for margin collapse
           marginTop: element.css( "marginTop" ),
           marginBottom: element.css( "marginBottom" ),
           marginLeft: element.css( "marginLeft" ),
           marginRight: element.css( "marginRight" ),
           "float": element.css( "float" )
         } )
         .outerWidth( element.outerWidth() )
         .outerHeight( element.outerHeight() )
         .addClass( "ui-effects-placeholder" );

         element.data( dataSpace + "placeholder", placeholder );
       }

       element.css( {
         position: cssPosition,
         left: position.left,
         top: position.top
       } );

       return placeholder;
     },

     removePlaceholder: function( element ) {
       var dataKey = dataSpace + "placeholder",
           placeholder = element.data( dataKey );

       if ( placeholder ) {
         placeholder.remove();
         element.removeData( dataKey );
       }
     },

     // Removes a placeholder if it exists and restores
     // properties that were modified during placeholder creation
     cleanUp: function( element ) {
       $.effects.restoreStyle( element );
       $.effects.removePlaceholder( element );
     },

     setTransition: function( element, list, factor, value ) {
       value = value || {};
       $.each( list, function( i, x ) {
         var unit = element.cssUnit( x );
         if ( unit[ 0 ] > 0 ) {
           value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
         }
       } );
       return value;
     }
   } );

   // Return an effect options object for the given parameters:
   function _normalizeArguments( effect, options, speed, callback ) {

     // Allow passing all options as the first parameter
     if ( $.isPlainObject( effect ) ) {
       options = effect;
       effect = effect.effect;
     }

     // Convert to an object
     effect = { effect: effect };

     // Catch (effect, null, ...)
     if ( options == null ) {
       options = {};
     }

     // Catch (effect, callback)
     if ( $.isFunction( options ) ) {
       callback = options;
       speed = null;
       options = {};
     }

     // Catch (effect, speed, ?)
     if ( typeof options === "number" || $.fx.speeds[ options ] ) {
       callback = speed;
       speed = options;
       options = {};
     }

     // Catch (effect, options, callback)
     if ( $.isFunction( speed ) ) {
       callback = speed;
       speed = null;
     }

     // Add options to effect
     if ( options ) {
       $.extend( effect, options );
     }

     speed = speed || options.duration;
     effect.duration = $.fx.off ? 0 :
       typeof speed === "number" ? speed :
       speed in $.fx.speeds ? $.fx.speeds[ speed ] :
       $.fx.speeds._default;

     effect.complete = callback || options.complete;

     return effect;
   }

   function standardAnimationOption( option ) {

     // Valid standard speeds (nothing, number, named speed)
     if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
       return true;
     }

     // Invalid strings - treat as "normal" speed
     if ( typeof option === "string" && !$.effects.effect[ option ] ) {
       return true;
     }

     // Complete callback
     if ( $.isFunction( option ) ) {
       return true;
     }

     // Options hash (but not naming an effect)
     if ( typeof option === "object" && !option.effect ) {
       return true;
     }

     // Didn't match any standard API
     return false;
   }

   $.fn.extend( {
     effect: function( /* effect, options, speed, callback */ ) {
       var args = _normalizeArguments.apply( this, arguments ),
         effectMethod = $.effects.effect[ args.effect ],
         defaultMode = effectMethod.mode,
         queue = args.queue,
         queueName = queue || "fx",
         complete = args.complete,
         mode = args.mode,
         modes = [],
         prefilter = function( next ) {
           var el = $( this ),
             normalizedMode = $.effects.mode( el, mode ) || defaultMode;

           // Sentinel for duck-punching the :animated psuedo-selector
           el.data( dataSpaceAnimated, true );

           // Save effect mode for later use,
           // we can't just call $.effects.mode again later,
           // as the .show() below destroys the initial state
           modes.push( normalizedMode );

           // See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
           if ( defaultMode && ( normalizedMode === "show" ||
               ( normalizedMode === defaultMode && normalizedMode === "hide" ) ) ) {
             el.show();
           }

           if ( !defaultMode || normalizedMode !== "none" ) {
             $.effects.saveStyle( el );
           }

           if ( $.isFunction( next ) ) {
             next();
           }
         };

       if ( $.fx.off || !effectMethod ) {

         // Delegate to the original method (e.g., .show()) if possible
         if ( mode ) {
           return this[ mode ]( args.duration, complete );
         } else {
           return this.each( function() {
             if ( complete ) {
               complete.call( this );
             }
           } );
         }
       }

       function run( next ) {
         var elem = $( this );

         function cleanup() {
           elem.removeData( dataSpaceAnimated );

           $.effects.cleanUp( elem );

           if ( args.mode === "hide" ) {
             elem.hide();
           }

           done();
         }

         function done() {
           if ( $.isFunction( complete ) ) {
             complete.call( elem[ 0 ] );
           }

           if ( $.isFunction( next ) ) {
             next();
           }
         }

         // Override mode option on a per element basis,
         // as toggle can be either show or hide depending on element state
         args.mode = modes.shift();

         if ( $.uiBackCompat !== false && !defaultMode ) {
           if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {

             // Call the core method to track "olddisplay" properly
             elem[ mode ]();
             done();
           } else {
             effectMethod.call( elem[ 0 ], args, done );
           }
         } else {
           if ( args.mode === "none" ) {

             // Call the core method to track "olddisplay" properly
             elem[ mode ]();
             done();
           } else {
             effectMethod.call( elem[ 0 ], args, cleanup );
           }
         }
       }

       // Run prefilter on all elements first to ensure that
       // any showing or hiding happens before placeholder creation,
       // which ensures that any layout changes are correctly captured.
       return queue === false ?
         this.each( prefilter ).each( run ) :
         this.queue( queueName, prefilter ).queue( queueName, run );
     },

     show: ( function( orig ) {
       return function( option ) {
         if ( standardAnimationOption( option ) ) {
           return orig.apply( this, arguments );
         } else {
           var args = _normalizeArguments.apply( this, arguments );
           args.mode = "show";
           return this.effect.call( this, args );
         }
       };
     } )( $.fn.show ),

     hide: ( function( orig ) {
       return function( option ) {
         if ( standardAnimationOption( option ) ) {
           return orig.apply( this, arguments );
         } else {
           var args = _normalizeArguments.apply( this, arguments );
           args.mode = "hide";
           return this.effect.call( this, args );
         }
       };
     } )( $.fn.hide ),

     toggle: ( function( orig ) {
       return function( option ) {
         if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
           return orig.apply( this, arguments );
         } else {
           var args = _normalizeArguments.apply( this, arguments );
           args.mode = "toggle";
           return this.effect.call( this, args );
         }
       };
     } )( $.fn.toggle ),

     cssUnit: function( key ) {
       var style = this.css( key ),
         val = [];

       $.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
         if ( style.indexOf( unit ) > 0 ) {
           val = [ parseFloat( style ), unit ];
         }
       } );
       return val;
     },

     cssClip: function( clipObj ) {
       if ( clipObj ) {
         return this.css( "clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
           clipObj.bottom + "px " + clipObj.left + "px)" );
       }
       return parseClip( this.css( "clip" ), this );
     },

     transfer: function( options, done ) {
       var element = $( this ),
         target = $( options.to ),
         targetFixed = target.css( "position" ) === "fixed",
         body = $( "body" ),
         fixTop = targetFixed ? body.scrollTop() : 0,
         fixLeft = targetFixed ? body.scrollLeft() : 0,
         endPosition = target.offset(),
         animation = {
           top: endPosition.top - fixTop,
           left: endPosition.left - fixLeft,
           height: target.innerHeight(),
           width: target.innerWidth()
         },
         startPosition = element.offset(),
         transfer = $( "<div class='ui-effects-transfer'></div>" )
           .appendTo( "body" )
           .addClass( options.className )
           .css( {
             top: startPosition.top - fixTop,
             left: startPosition.left - fixLeft,
             height: element.innerHeight(),
             width: element.innerWidth(),
             position: targetFixed ? "fixed" : "absolute"
           } )
           .animate( animation, options.duration, options.easing, function() {
             transfer.remove();
             if ( $.isFunction( done ) ) {
               done();
             }
           } );
     }
   } );

   function parseClip( str, element ) {
       var outerWidth = element.outerWidth(),
         outerHeight = element.outerHeight(),
         clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
         values = clipRegex.exec( str ) || [ "", 0, outerWidth, outerHeight, 0 ];

       return {
         top: parseFloat( values[ 1 ] ) || 0,
         right: values[ 2 ] === "auto" ? outerWidth : parseFloat( values[ 2 ] ),
         bottom: values[ 3 ] === "auto" ? outerHeight : parseFloat( values[ 3 ] ),
         left: parseFloat( values[ 4 ] ) || 0
       };
   }

   $.fx.step.clip = function( fx ) {
     if ( !fx.clipInit ) {
       fx.start = $( fx.elem ).cssClip();
       if ( typeof fx.end === "string" ) {
         fx.end = parseClip( fx.end, fx.elem );
       }
       fx.clipInit = true;
     }

     $( fx.elem ).cssClip( {
       top: fx.pos * ( fx.end.top - fx.start.top ) + fx.start.top,
       right: fx.pos * ( fx.end.right - fx.start.right ) + fx.start.right,
       bottom: fx.pos * ( fx.end.bottom - fx.start.bottom ) + fx.start.bottom,
       left: fx.pos * ( fx.end.left - fx.start.left ) + fx.start.left
     } );
   };

  } )();

  /******************************************************************************/
  /*********************************** EASING ***********************************/
  /******************************************************************************/

  ( function() {

   // Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

   var baseEasings = {};

   $.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
     baseEasings[ name ] = function( p ) {
       return Math.pow( p, i + 2 );
     };
   } );

   $.extend( baseEasings, {
     Sine: function( p ) {
       return 1 - Math.cos( p * Math.PI / 2 );
     },
     Circ: function( p ) {
       return 1 - Math.sqrt( 1 - p * p );
     },
     Elastic: function( p ) {
       return p === 0 || p === 1 ? p :
         -Math.pow( 2, 8 * ( p - 1 ) ) * Math.sin( ( ( p - 1 ) * 80 - 7.5 ) * Math.PI / 15 );
     },
     Back: function( p ) {
       return p * p * ( 3 * p - 2 );
     },
     Bounce: function( p ) {
       var pow2,
         bounce = 4;

       while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
       return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
     }
   } );

   $.each( baseEasings, function( name, easeIn ) {
     $.easing[ "easeIn" + name ] = easeIn;
     $.easing[ "easeOut" + name ] = function( p ) {
       return 1 - easeIn( 1 - p );
     };
     $.easing[ "easeInOut" + name ] = function( p ) {
       return p < 0.5 ?
         easeIn( p * 2 ) / 2 :
         1 - easeIn( p * -2 + 2 ) / 2;
     };
   } );

  } )();

  var effect = $.effects;
	/*!
	 * jQuery UI Effects Blind 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Blind Effect
	//>>group: Effects
	//>>description: Blinds the element.
	//>>docs: http://api.jqueryui.com/blind-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectBlind = $.effects.define( "blind", "hide", function( options, done ) {
		var map = {
				up: [ "bottom", "top" ],
				vertical: [ "bottom", "top" ],
				down: [ "top", "bottom" ],
				left: [ "right", "left" ],
				horizontal: [ "right", "left" ],
				right: [ "left", "right" ]
			},
			element = $( this ),
			direction = options.direction || "up",
			start = element.cssClip(),
			animate = { clip: $.extend( {}, start ) },
			placeholder = $.effects.createPlaceholder( element );

		animate.clip[ map[ direction ][ 0 ] ] = animate.clip[ map[ direction ][ 1 ] ];

		if ( options.mode === "show" ) {
			element.cssClip( animate.clip );
			if ( placeholder ) {
				placeholder.css( $.effects.clipToBox( animate ) );
			}

			animate.clip = start;
		}

		if ( placeholder ) {
			placeholder.animate( $.effects.clipToBox( animate ), options.duration, options.easing );
		}

		element.animate( animate, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: done
		} );
	} );


	/*!
	 * jQuery UI Effects Bounce 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Bounce Effect
	//>>group: Effects
	//>>description: Bounces an element horizontally or vertically n times.
	//>>docs: http://api.jqueryui.com/bounce-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectBounce = $.effects.define( "bounce", function( options, done ) {
		var upAnim, downAnim, refValue,
			element = $( this ),

			// Defaults:
			mode = options.mode,
			hide = mode === "hide",
			show = mode === "show",
			direction = options.direction || "up",
			distance = options.distance,
			times = options.times || 5,

			// Number of internal animations
			anims = times * 2 + ( show || hide ? 1 : 0 ),
			speed = options.duration / anims,
			easing = options.easing,

			// Utility:
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			motion = ( direction === "up" || direction === "left" ),
			i = 0,

			queuelen = element.queue().length;

		$.effects.createPlaceholder( element );

		refValue = element.css( ref );

		// Default distance for the BIGGEST bounce is the outer Distance / 3
		if ( !distance ) {
			distance = element[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
		}

		if ( show ) {
			downAnim = { opacity: 1 };
			downAnim[ ref ] = refValue;

			// If we are showing, force opacity 0 and set the initial position
			// then do the "first" animation
			element
				.css( "opacity", 0 )
				.css( ref, motion ? -distance * 2 : distance * 2 )
				.animate( downAnim, speed, easing );
		}

		// Start at the smallest distance if we are hiding
		if ( hide ) {
			distance = distance / Math.pow( 2, times - 1 );
		}

		downAnim = {};
		downAnim[ ref ] = refValue;

		// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
		for ( ; i < times; i++ ) {
			upAnim = {};
			upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

			element
				.animate( upAnim, speed, easing )
				.animate( downAnim, speed, easing );

			distance = hide ? distance * 2 : distance / 2;
		}

		// Last Bounce when Hiding
		if ( hide ) {
			upAnim = { opacity: 0 };
			upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

			element.animate( upAnim, speed, easing );
		}

		element.queue( done );

		$.effects.unshift( element, queuelen, anims + 1 );
	} );


	/*!
	 * jQuery UI Effects Clip 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Clip Effect
	//>>group: Effects
	//>>description: Clips the element on and off like an old TV.
	//>>docs: http://api.jqueryui.com/clip-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectClip = $.effects.define( "clip", "hide", function( options, done ) {
		var start,
			animate = {},
			element = $( this ),
			direction = options.direction || "vertical",
			both = direction === "both",
			horizontal = both || direction === "horizontal",
			vertical = both || direction === "vertical";

		start = element.cssClip();
		animate.clip = {
			top: vertical ? ( start.bottom - start.top ) / 2 : start.top,
			right: horizontal ? ( start.right - start.left ) / 2 : start.right,
			bottom: vertical ? ( start.bottom - start.top ) / 2 : start.bottom,
			left: horizontal ? ( start.right - start.left ) / 2 : start.left
		};

		$.effects.createPlaceholder( element );

		if ( options.mode === "show" ) {
			element.cssClip( animate.clip );
			animate.clip = start;
		}

		element.animate( animate, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: done
		} );

	} );


	/*!
	 * jQuery UI Effects Drop 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Drop Effect
	//>>group: Effects
	//>>description: Moves an element in one direction and hides it at the same time.
	//>>docs: http://api.jqueryui.com/drop-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectDrop = $.effects.define( "drop", "hide", function( options, done ) {

		var distance,
			element = $( this ),
			mode = options.mode,
			show = mode === "show",
			direction = options.direction || "left",
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			motion = ( direction === "up" || direction === "left" ) ? "-=" : "+=",
			oppositeMotion = ( motion === "+=" ) ? "-=" : "+=",
			animation = {
				opacity: 0
			};

		$.effects.createPlaceholder( element );

		distance = options.distance ||
			element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ) / 2;

		animation[ ref ] = motion + distance;

		if ( show ) {
			element.css( animation );

			animation[ ref ] = oppositeMotion + distance;
			animation.opacity = 1;
		}

		// Animate
		element.animate( animation, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: done
		} );
	} );


	/*!
	 * jQuery UI Effects Explode 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Explode Effect
	//>>group: Effects
	// jscs:disable maximumLineLength
	//>>description: Explodes an element in all directions into n pieces. Implodes an element to its original wholeness.
	// jscs:enable maximumLineLength
	//>>docs: http://api.jqueryui.com/explode-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectExplode = $.effects.define( "explode", "hide", function( options, done ) {

		var i, j, left, top, mx, my,
			rows = options.pieces ? Math.round( Math.sqrt( options.pieces ) ) : 3,
			cells = rows,
			element = $( this ),
			mode = options.mode,
			show = mode === "show",

			// Show and then visibility:hidden the element before calculating offset
			offset = element.show().css( "visibility", "hidden" ).offset(),

			// Width and height of a piece
			width = Math.ceil( element.outerWidth() / cells ),
			height = Math.ceil( element.outerHeight() / rows ),
			pieces = [];

		// Children animate complete:
		function childComplete() {
			pieces.push( this );
			if ( pieces.length === rows * cells ) {
				animComplete();
			}
		}

		// Clone the element for each row and cell.
		for ( i = 0; i < rows; i++ ) { // ===>
			top = offset.top + i * height;
			my = i - ( rows - 1 ) / 2;

			for ( j = 0; j < cells; j++ ) { // |||
				left = offset.left + j * width;
				mx = j - ( cells - 1 ) / 2;

				// Create a clone of the now hidden main element that will be absolute positioned
				// within a wrapper div off the -left and -top equal to size of our pieces
				element
					.clone()
					.appendTo( "body" )
					.wrap( "<div></div>" )
					.css( {
						position: "absolute",
						visibility: "visible",
						left: -j * width,
						top: -i * height
					} )

					// Select the wrapper - make it overflow: hidden and absolute positioned based on
					// where the original was located +left and +top equal to the size of pieces
					.parent()
						.addClass( "ui-effects-explode" )
						.css( {
							position: "absolute",
							overflow: "hidden",
							width: width,
							height: height,
							left: left + ( show ? mx * width : 0 ),
							top: top + ( show ? my * height : 0 ),
							opacity: show ? 0 : 1
						} )
						.animate( {
							left: left + ( show ? 0 : mx * width ),
							top: top + ( show ? 0 : my * height ),
							opacity: show ? 1 : 0
						}, options.duration || 500, options.easing, childComplete );
			}
		}

		function animComplete() {
			element.css( {
				visibility: "visible"
			} );
			$( pieces ).remove();
			done();
		}
	} );


	/*!
	 * jQuery UI Effects Fade 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Fade Effect
	//>>group: Effects
	//>>description: Fades the element.
	//>>docs: http://api.jqueryui.com/fade-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectFade = $.effects.define( "fade", "toggle", function( options, done ) {
		var show = options.mode === "show";

		$( this )
			.css( "opacity", show ? 0 : 1 )
			.animate( {
				opacity: show ? 1 : 0
			}, {
				queue: false,
				duration: options.duration,
				easing: options.easing,
				complete: done
			} );
	} );


	/*!
	 * jQuery UI Effects Fold 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Fold Effect
	//>>group: Effects
	//>>description: Folds an element first horizontally and then vertically.
	//>>docs: http://api.jqueryui.com/fold-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectFold = $.effects.define( "fold", "hide", function( options, done ) {

		// Create element
		var element = $( this ),
			mode = options.mode,
			show = mode === "show",
			hide = mode === "hide",
			size = options.size || 15,
			percent = /([0-9]+)%/.exec( size ),
			horizFirst = !!options.horizFirst,
			ref = horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ],
			duration = options.duration / 2,

			placeholder = $.effects.createPlaceholder( element ),

			start = element.cssClip(),
			animation1 = { clip: $.extend( {}, start ) },
			animation2 = { clip: $.extend( {}, start ) },

			distance = [ start[ ref[ 0 ] ], start[ ref[ 1 ] ] ],

			queuelen = element.queue().length;

		if ( percent ) {
			size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
		}
		animation1.clip[ ref[ 0 ] ] = size;
		animation2.clip[ ref[ 0 ] ] = size;
		animation2.clip[ ref[ 1 ] ] = 0;

		if ( show ) {
			element.cssClip( animation2.clip );
			if ( placeholder ) {
				placeholder.css( $.effects.clipToBox( animation2 ) );
			}

			animation2.clip = start;
		}

		// Animate
		element
			.queue( function( next ) {
				if ( placeholder ) {
					placeholder
						.animate( $.effects.clipToBox( animation1 ), duration, options.easing )
						.animate( $.effects.clipToBox( animation2 ), duration, options.easing );
				}

				next();
			} )
			.animate( animation1, duration, options.easing )
			.animate( animation2, duration, options.easing )
			.queue( done );

		$.effects.unshift( element, queuelen, 4 );
	} );


	/*!
	 * jQuery UI Effects Highlight 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Highlight Effect
	//>>group: Effects
	//>>description: Highlights the background of an element in a defined color for a custom duration.
	//>>docs: http://api.jqueryui.com/highlight-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectHighlight = $.effects.define( "highlight", "show", function( options, done ) {
		var element = $( this ),
			animation = {
				backgroundColor: element.css( "backgroundColor" )
			};

		if ( options.mode === "hide" ) {
			animation.opacity = 0;
		}

		$.effects.saveStyle( element );

		element
			.css( {
				backgroundImage: "none",
				backgroundColor: options.color || "#ffff99"
			} )
			.animate( animation, {
				queue: false,
				duration: options.duration,
				easing: options.easing,
				complete: done
			} );
	} );


	/*!
	 * jQuery UI Effects Size 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Size Effect
	//>>group: Effects
	//>>description: Resize an element to a specified width and height.
	//>>docs: http://api.jqueryui.com/size-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectSize = $.effects.define( "size", function( options, done ) {

		// Create element
		var baseline, factor, temp,
			element = $( this ),

			// Copy for children
			cProps = [ "fontSize" ],
			vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
			hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

			// Set options
			mode = options.mode,
			restore = mode !== "effect",
			scale = options.scale || "both",
			origin = options.origin || [ "middle", "center" ],
			position = element.css( "position" ),
			pos = element.position(),
			original = $.effects.scaledDimensions( element ),
			from = options.from || original,
			to = options.to || $.effects.scaledDimensions( element, 0 );

		$.effects.createPlaceholder( element );

		if ( mode === "show" ) {
			temp = from;
			from = to;
			to = temp;
		}

		// Set scaling factor
		factor = {
			from: {
				y: from.height / original.height,
				x: from.width / original.width
			},
			to: {
				y: to.height / original.height,
				x: to.width / original.width
			}
		};

		// Scale the css box
		if ( scale === "box" || scale === "both" ) {

			// Vertical props scaling
			if ( factor.from.y !== factor.to.y ) {
				from = $.effects.setTransition( element, vProps, factor.from.y, from );
				to = $.effects.setTransition( element, vProps, factor.to.y, to );
			}

			// Horizontal props scaling
			if ( factor.from.x !== factor.to.x ) {
				from = $.effects.setTransition( element, hProps, factor.from.x, from );
				to = $.effects.setTransition( element, hProps, factor.to.x, to );
			}
		}

		// Scale the content
		if ( scale === "content" || scale === "both" ) {

			// Vertical props scaling
			if ( factor.from.y !== factor.to.y ) {
				from = $.effects.setTransition( element, cProps, factor.from.y, from );
				to = $.effects.setTransition( element, cProps, factor.to.y, to );
			}
		}

		// Adjust the position properties based on the provided origin points
		if ( origin ) {
			baseline = $.effects.getBaseline( origin, original );
			from.top = ( original.outerHeight - from.outerHeight ) * baseline.y + pos.top;
			from.left = ( original.outerWidth - from.outerWidth ) * baseline.x + pos.left;
			to.top = ( original.outerHeight - to.outerHeight ) * baseline.y + pos.top;
			to.left = ( original.outerWidth - to.outerWidth ) * baseline.x + pos.left;
		}
		element.css( from );

		// Animate the children if desired
		if ( scale === "content" || scale === "both" ) {

			vProps = vProps.concat( [ "marginTop", "marginBottom" ] ).concat( cProps );
			hProps = hProps.concat( [ "marginLeft", "marginRight" ] );

			// Only animate children with width attributes specified
			// TODO: is this right? should we include anything with css width specified as well
			element.find( "*[width]" ).each( function() {
				var child = $( this ),
					childOriginal = $.effects.scaledDimensions( child ),
					childFrom = {
						height: childOriginal.height * factor.from.y,
						width: childOriginal.width * factor.from.x,
						outerHeight: childOriginal.outerHeight * factor.from.y,
						outerWidth: childOriginal.outerWidth * factor.from.x
					},
					childTo = {
						height: childOriginal.height * factor.to.y,
						width: childOriginal.width * factor.to.x,
						outerHeight: childOriginal.height * factor.to.y,
						outerWidth: childOriginal.width * factor.to.x
					};

				// Vertical props scaling
				if ( factor.from.y !== factor.to.y ) {
					childFrom = $.effects.setTransition( child, vProps, factor.from.y, childFrom );
					childTo = $.effects.setTransition( child, vProps, factor.to.y, childTo );
				}

				// Horizontal props scaling
				if ( factor.from.x !== factor.to.x ) {
					childFrom = $.effects.setTransition( child, hProps, factor.from.x, childFrom );
					childTo = $.effects.setTransition( child, hProps, factor.to.x, childTo );
				}

				if ( restore ) {
					$.effects.saveStyle( child );
				}

				// Animate children
				child.css( childFrom );
				child.animate( childTo, options.duration, options.easing, function() {

					// Restore children
					if ( restore ) {
						$.effects.restoreStyle( child );
					}
				} );
			} );
		}

		// Animate
		element.animate( to, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: function() {

				var offset = element.offset();

				if ( to.opacity === 0 ) {
					element.css( "opacity", from.opacity );
				}

				if ( !restore ) {
					element
						.css( "position", position === "static" ? "relative" : position )
						.offset( offset );

					// Need to save style here so that automatic style restoration
					// doesn't restore to the original styles from before the animation.
					$.effects.saveStyle( element );
				}

				done();
			}
		} );

	} );


	/*!
	 * jQuery UI Effects Scale 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Scale Effect
	//>>group: Effects
	//>>description: Grows or shrinks an element and its content.
	//>>docs: http://api.jqueryui.com/scale-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectScale = $.effects.define( "scale", function( options, done ) {

		// Create element
		var el = $( this ),
			mode = options.mode,
			percent = parseInt( options.percent, 10 ) ||
				( parseInt( options.percent, 10 ) === 0 ? 0 : ( mode !== "effect" ? 0 : 100 ) ),

			newOptions = $.extend( true, {
				from: $.effects.scaledDimensions( el ),
				to: $.effects.scaledDimensions( el, percent, options.direction || "both" ),
				origin: options.origin || [ "middle", "center" ]
			}, options );

		// Fade option to support puff
		if ( options.fade ) {
			newOptions.from.opacity = 1;
			newOptions.to.opacity = 0;
		}

		$.effects.effect.size.call( this, newOptions, done );
	} );


	/*!
	 * jQuery UI Effects Puff 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Puff Effect
	//>>group: Effects
	//>>description: Creates a puff effect by scaling the element up and hiding it at the same time.
	//>>docs: http://api.jqueryui.com/puff-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectPuff = $.effects.define( "puff", "hide", function( options, done ) {
		var newOptions = $.extend( true, {}, options, {
			fade: true,
			percent: parseInt( options.percent, 10 ) || 150
		} );

		$.effects.effect.scale.call( this, newOptions, done );
	} );


	/*!
	 * jQuery UI Effects Pulsate 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Pulsate Effect
	//>>group: Effects
	//>>description: Pulsates an element n times by changing the opacity to zero and back.
	//>>docs: http://api.jqueryui.com/pulsate-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectPulsate = $.effects.define( "pulsate", "show", function( options, done ) {
		var element = $( this ),
			mode = options.mode,
			show = mode === "show",
			hide = mode === "hide",
			showhide = show || hide,

			// Showing or hiding leaves off the "last" animation
			anims = ( ( options.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
			duration = options.duration / anims,
			animateTo = 0,
			i = 1,
			queuelen = element.queue().length;

		if ( show || !element.is( ":visible" ) ) {
			element.css( "opacity", 0 ).show();
			animateTo = 1;
		}

		// Anims - 1 opacity "toggles"
		for ( ; i < anims; i++ ) {
			element.animate( { opacity: animateTo }, duration, options.easing );
			animateTo = 1 - animateTo;
		}

		element.animate( { opacity: animateTo }, duration, options.easing );

		element.queue( done );

		$.effects.unshift( element, queuelen, anims + 1 );
	} );


	/*!
	 * jQuery UI Effects Shake 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Shake Effect
	//>>group: Effects
	//>>description: Shakes an element horizontally or vertically n times.
	//>>docs: http://api.jqueryui.com/shake-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectShake = $.effects.define( "shake", function( options, done ) {

		var i = 1,
			element = $( this ),
			direction = options.direction || "left",
			distance = options.distance || 20,
			times = options.times || 3,
			anims = times * 2 + 1,
			speed = Math.round( options.duration / anims ),
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			positiveMotion = ( direction === "up" || direction === "left" ),
			animation = {},
			animation1 = {},
			animation2 = {},

			queuelen = element.queue().length;

		$.effects.createPlaceholder( element );

		// Animation
		animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
		animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
		animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

		// Animate
		element.animate( animation, speed, options.easing );

		// Shakes
		for ( ; i < times; i++ ) {
			element
				.animate( animation1, speed, options.easing )
				.animate( animation2, speed, options.easing );
		}

		element
			.animate( animation1, speed, options.easing )
			.animate( animation, speed / 2, options.easing )
			.queue( done );

		$.effects.unshift( element, queuelen, anims + 1 );
	} );


	/*!
	 * jQuery UI Effects Slide 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Slide Effect
	//>>group: Effects
	//>>description: Slides an element in and out of the viewport.
	//>>docs: http://api.jqueryui.com/slide-effect/
	//>>demos: http://jqueryui.com/effect/



	var effectsEffectSlide = $.effects.define( "slide", "show", function( options, done ) {
		var startClip, startRef,
			element = $( this ),
			map = {
				up: [ "bottom", "top" ],
				down: [ "top", "bottom" ],
				left: [ "right", "left" ],
				right: [ "left", "right" ]
			},
			mode = options.mode,
			direction = options.direction || "left",
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			positiveMotion = ( direction === "up" || direction === "left" ),
			distance = options.distance ||
				element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ),
			animation = {};

		$.effects.createPlaceholder( element );

		startClip = element.cssClip();
		startRef = element.position()[ ref ];

		// Define hide animation
		animation[ ref ] = ( positiveMotion ? -1 : 1 ) * distance + startRef;
		animation.clip = element.cssClip();
		animation.clip[ map[ direction ][ 1 ] ] = animation.clip[ map[ direction ][ 0 ] ];

		// Reverse the animation if we're showing
		if ( mode === "show" ) {
			element.cssClip( animation.clip );
			element.css( ref, animation[ ref ] );
			animation.clip = startClip;
			animation[ ref ] = startRef;
		}

		// Actually animate
		element.animate( animation, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: done
		} );
	} );


	/*!
	 * jQuery UI Effects Transfer 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Transfer Effect
	//>>group: Effects
	//>>description: Displays a transfer effect from one element to another.
	//>>docs: http://api.jqueryui.com/transfer-effect/
	//>>demos: http://jqueryui.com/effect/



	var effect;
	if ( $.uiBackCompat !== false ) {
		effect = $.effects.define( "transfer", function( options, done ) {
			$( this ).transfer( options, done );
		} );
	}
	var effectsEffectTransfer = effect;


}),
// === End jQueryUI ===

// === jStorage ===
function() {
    function e() {
        var e = !1;
        if ("localStorage"in window)
            try {
                window.localStorage.setItem("_tmptest", "tmpval"),
                e = !0,
                window.localStorage.removeItem("_tmptest")
            } catch (e) {}
        if (e)
            try {
                window.localStorage && (x = window.localStorage,
                S = "localStorage",
                _ = x.jStorage_update)
            } catch (e) {}
        else if ("globalStorage"in window)
            try {
                window.globalStorage && (x = window.globalStorage[window.location.hostname],
                S = "globalStorage",
                _ = x.jStorage_update)
            } catch (e) {}
        else {
            if (k = document.createElement("link"),
            !k.addBehavior)
                return void (k = null);
            k.style.behavior = "url(#default#userData)",
            document.getElementsByTagName("head")[0].appendChild(k);
            try {
                k.load("jStorage")
            } catch (e) {
                k.setAttribute("jStorage", "{}"),
                k.save("jStorage"),
                k.load("jStorage")
            }
            var t = "{}";
            try {
                t = k.getAttribute("jStorage")
            } catch (e) {}
            try {
                _ = k.getAttribute("jStorage_update")
            } catch (e) {}
            x.jStorage = t,
            S = "userDataBehavior"
        }
        s(),
        l(),
        n(),
        d(),
        "addEventListener"in window && window.addEventListener("pageshow", function(e) {
            e.persisted && r()
        }, !1)
    }
    function t() {
        var e = "{}";
        if ("userDataBehavior" == S) {
            k.load("jStorage");
            try {
                e = k.getAttribute("jStorage")
            } catch (e) {}
            try {
                _ = k.getAttribute("jStorage_update")
            } catch (e) {}
            x.jStorage = e
        }
        s(),
        l(),
        d()
    }
    function n() {
        "localStorage" == S || "globalStorage" == S ? "addEventListener"in window ? window.addEventListener("storage", r, !1) : document.attachEvent("onstorage", r) : "userDataBehavior" == S && setInterval(r, 1e3)
    }
    function r() {
        var e;
        clearTimeout(j),
        j = setTimeout(function() {
            if ("localStorage" == S || "globalStorage" == S)
                e = x.jStorage_update;
            else if ("userDataBehavior" == S) {
                k.load("jStorage");
                try {
                    e = k.getAttribute("jStorage_update")
                } catch (e) {}
            }
            e && e != _ && (_ = e,
            i())
        }, 25)
    }
    function i() {
        var e, n = v.parse(v.stringify(w.__jstorage_meta.CRC32));
        t(),
        e = v.parse(v.stringify(w.__jstorage_meta.CRC32));
        var r, i = [], o = [];
        for (r in n)
            if (n.hasOwnProperty(r)) {
                if (!e[r]) {
                    o.push(r);
                    continue
                }
                n[r] != e[r] && "2." == String(n[r]).substr(0, 2) && i.push(r)
            }
        for (r in e)
            e.hasOwnProperty(r) && (n[r] || i.push(r));
        a(i, "updated"),
        a(o, "deleted")
    }
    function a(e, t) {
        if (e = [].concat(e || []),
        "flushed" == t) {
            e = [];
            for (var n in C)
                C.hasOwnProperty(n) && e.push(n);
            t = "deleted"
        }
        for (var r = 0, i = e.length; r < i; r++) {
            if (C[e[r]])
                for (var a = 0, o = C[e[r]].length; a < o; a++)
                    C[e[r]][a](e[r], t);
            if (C["*"])
                for (var a = 0, o = C["*"].length; a < o; a++)
                    C["*"][a](e[r], t)
        }
    }
    function o() {
        var e = (+new Date).toString();
        "localStorage" == S || "globalStorage" == S ? x.jStorage_update = e : "userDataBehavior" == S && (k.setAttribute("jStorage_update", e),
        k.save("jStorage")),
        r()
    }
    function s() {
        if (x.jStorage)
            try {
                w = v.parse(String(x.jStorage))
            } catch (e) {
                x.jStorage = "{}"
            }
        else
            x.jStorage = "{}";
        T = x.jStorage ? String(x.jStorage).length : 0,
        w.__jstorage_meta || (w.__jstorage_meta = {}),
        w.__jstorage_meta.CRC32 || (w.__jstorage_meta.CRC32 = {})
    }
    function u() {
        p();
        try {
            x.jStorage = v.stringify(w),
            k && (k.setAttribute("jStorage", x.jStorage),
            k.save("jStorage")),
            T = x.jStorage ? String(x.jStorage).length : 0
        } catch (e) {}
    }
    function c(e) {
        if (!e || "string" != typeof e && "number" != typeof e)
            throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == e)
            throw new TypeError("Reserved key name");
        return !0
    }
    function l() {
        var e, t, n, r, i = Infinity, s = !1, c = [];
        if (clearTimeout(b),
        w.__jstorage_meta && "object" == typeof w.__jstorage_meta.TTL) {
            e = +new Date,
            n = w.__jstorage_meta.TTL,
            r = w.__jstorage_meta.CRC32;
            for (t in n)
                n.hasOwnProperty(t) && (n[t] <= e ? (delete n[t],
                delete r[t],
                delete w[t],
                s = !0,
                c.push(t)) : n[t] < i && (i = n[t]));
            i != Infinity && (b = setTimeout(l, i - e)),
            s && (u(),
            o(),
            a(c, "deleted"))
        }
    }
    function d() {
        var e;
        if (w.__jstorage_meta.PubSub) {
            var t, n = E;
            for (e = w.__jstorage_meta.PubSub.length - 1; e >= 0; e--)
                t = w.__jstorage_meta.PubSub[e],
                t[0] > E && (n = t[0],
                f(t[1], t[2]));
            E = n
        }
    }
    function f(e, t) {
        if ($[e])
            for (var n = 0, r = $[e].length; n < r; n++)
                $[e][n](e, v.parse(v.stringify(t)))
    }
    function p() {
        if (w.__jstorage_meta.PubSub) {
            for (var e = +new Date - 2e3, t = 0, n = w.__jstorage_meta.PubSub.length; t < n; t++)
                if (w.__jstorage_meta.PubSub[t][0] <= e) {
                    w.__jstorage_meta.PubSub.splice(t, w.__jstorage_meta.PubSub.length - t);
                    break
                }
            w.__jstorage_meta.PubSub.length || delete w.__jstorage_meta.PubSub
        }
    }
    function h(e, t) {
        w.__jstorage_meta || (w.__jstorage_meta = {}),
        w.__jstorage_meta.PubSub || (w.__jstorage_meta.PubSub = []),
        w.__jstorage_meta.PubSub.unshift([+new Date, e, t]),
        u(),
        o()
    }
    function m(e, t) {
        for (var n, r = e.length, i = t ^ r, a = 0; r >= 4; )
            n = 255 & e.charCodeAt(a) | (255 & e.charCodeAt(++a)) << 8 | (255 & e.charCodeAt(++a)) << 16 | (255 & e.charCodeAt(++a)) << 24,
            n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16),
            n ^= n >>> 24,
            n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16),
            i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ n,
            r -= 4,
            ++a;
        switch (r) {
        case 3:
            i ^= (255 & e.charCodeAt(a + 2)) << 16;
        case 2:
            i ^= (255 & e.charCodeAt(a + 1)) << 8;
        case 1:
            i ^= 255 & e.charCodeAt(a),
            i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16)
        }
        return i ^= i >>> 13,
        i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16),
        (i ^= i >>> 15) >>> 0
    }
    var g = "0.4.3"
      , y = window.jQuery || window.$ || (window.$ = {})
      , v = {
        parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(e) {
            return String(e).evalJSON()
        }
        || y.parseJSON || y.evalJSON,
        stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || y.toJSON
    };
    if (!v.parse || !v.stringify)
        throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var b, w = {
        __jstorage_meta: {
            CRC32: {}
        }
    }, x = {
        jStorage: "{}"
    }, k = null, T = 0, S = !1, C = {}, j = !1, _ = 0, $ = {}, E = +new Date, A = {
        isXML: function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return !!t && "HTML" !== t.nodeName
        },
        encode: function(e) {
            if (!this.isXML(e))
                return !1;
            try {
                return (new XMLSerializer).serializeToString(e)
            } catch (t) {
                try {
                    return e.xml
                } catch (e) {}
            }
            return !1
        },
        decode: function(e) {
            var t, n = "DOMParser"in window && (new DOMParser).parseFromString || window.ActiveXObject && function(e) {
                var t = new ActiveXObject("Microsoft.XMLDOM");
                return t.async = "false",
                t.loadXML(e),
                t
            }
            ;
            return !!n && (t = n.call("DOMParser"in window && new DOMParser || window, e, "text/xml"),
            !!this.isXML(t) && t)
        }
    };
    y.jStorage = {
        version: g,
        set: function(e, t, n) {
            if (c(e),
            n = n || {},
            void 0 === t)
                return this.deleteKey(e),
                t;
            if (A.isXML(t))
                t = {
                    _is_xml: !0,
                    xml: A.encode(t)
                };
            else {
                if ("function" == typeof t)
                    return undefined;
                t && "object" == typeof t && (t = v.parse(v.stringify(t)))
            }
            return w[e] = t,
            w.__jstorage_meta.CRC32[e] = "2." + m(v.stringify(t), 2538058380),
            this.setTTL(e, n.TTL || 0),
            a(e, "updated"),
            t
        },
        get: function(e, t) {
            return c(e),
            e in w ? w[e] && "object" == typeof w[e] && w[e]._is_xml ? A.decode(w[e].xml) : w[e] : void 0 === t ? null : t
        },
        deleteKey: function(e) {
            return c(e),
            e in w && (delete w[e],
            "object" == typeof w.__jstorage_meta.TTL && e in w.__jstorage_meta.TTL && delete w.__jstorage_meta.TTL[e],
            delete w.__jstorage_meta.CRC32[e],
            u(),
            o(),
            a(e, "deleted"),
            !0)
        },
        setTTL: function(e, t) {
            var n = +new Date;
            return c(e),
            t = Number(t) || 0,
            e in w && (w.__jstorage_meta.TTL || (w.__jstorage_meta.TTL = {}),
            t > 0 ? w.__jstorage_meta.TTL[e] = n + t : delete w.__jstorage_meta.TTL[e],
            u(),
            l(),
            o(),
            !0)
        },
        getTTL: function(e) {
            var t = +new Date;
            return c(e),
            e in w && w.__jstorage_meta.TTL && w.__jstorage_meta.TTL[e] ? w.__jstorage_meta.TTL[e] - t || 0 : 0
        },
        flush: function() {
            return w = {
                __jstorage_meta: {
                    CRC32: {}
                }
            },
            u(),
            o(),
            a(null, "flushed"),
            !0
        },
        storageObj: function() {
            function e() {}
            return e.prototype = w,
            new e
        },
        index: function() {
            var e, t = [];
            for (e in w)
                w.hasOwnProperty(e) && "__jstorage_meta" != e && t.push(e);
            return t
        },
        storageSize: function() {
            return T
        },
        currentBackend: function() {
            return S
        },
        storageAvailable: function() {
            return !!S
        },
        listenKeyChange: function(e, t) {
            c(e),
            C[e] || (C[e] = []),
            C[e].push(t)
        },
        stopListening: function(e, t) {
            if (c(e),
            C[e]) {
                if (!t)
                    return void delete C[e];
                for (var n = C[e].length - 1; n >= 0; n--)
                    C[e][n] == t && C[e].splice(n, 1)
            }
        },
        subscribe: function(e, t) {
            if (!(e = (e || "").toString()))
                throw new TypeError("Channel not defined");
            $[e] || ($[e] = []),
            $[e].push(t)
        },
        publish: function(e, t) {
            if (!(e = (e || "").toString()))
                throw new TypeError("Channel not defined");
            h(e, t)
        },
        reInit: function() {
            t()
        }
    },
    e()
}();
// === End jStorage ===

var levenshteinDistance = function(e, t) {
    var n = []
      , r = e.length
      , i = t.length;
    if (0 == r)
        return i;
    if (0 == i)
        return r;
    for (var a = r; a >= 0; a--)
        n[a] = [];
    for (var a = r; a >= 0; a--)
        n[a][0] = a;
    for (var o = i; o >= 0; o--)
        n[0][o] = o;
    for (var a = 1; a <= r; a++)
        for (var s = e.charAt(a - 1), o = 1; o <= i; o++) {
            if (a == o && n[a][o] > 4)
                return r;
            var u = t.charAt(o - 1)
              , c = s == u ? 0 : 1
              , l = n[a - 1][o] + 1
              , d = n[a][o - 1] + 1
              , f = n[a - 1][o - 1] + c;
            d < l && (l = d),
            f < l && (l = f),
            n[a][o] = l,
            a > 1 && o > 1 && s == t.charAt(o - 2) && e.charAt(a - 2) == u && (n[a][o] = Math.min(n[a][o], n[a - 2][o - 2] + c))
        }
    return n[r][i]
};

// === AutoSize ===
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery || window.$)
}(function(e) {
    var t, n = {
        className: "autosizejs",
        append: "",
        callback: !1,
        resizeDelay: 10
    }, r = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', i = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], a = e(r).data("autosize", !0)[0];
    a.style.lineHeight = "99px",
    "99px" === e(a).css("lineHeight") && i.push("lineHeight"),
    a.style.lineHeight = "",
    e.fn.autosize = function(r) {
        return r = e.extend({}, n, r || {}),
        a.parentNode !== document.body && e(document.body).append(a),
        this.each(function() {
            function n() {
                var t, n;
                "getComputedStyle"in window ? (t = window.getComputedStyle(f),
                n = f.getBoundingClientRect().width,
                e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, r) {
                    n -= parseInt(t[r], 10)
                }),
                a.style.width = n + "px") : a.style.width = Math.max(p.width(), 0) + "px"
            }
            function o() {
                var o = {};
                if (t = f,
                a.className = r.className,
                c = parseInt(p.css("maxHeight"), 10),
                e.each(i, function(e, t) {
                    o[t] = p.css(t)
                }),
                e(a).css(o),
                n(),
                window.chrome && "setSelectionRange"in f) {
                    var s = f.selectionStart;
                    f.value += " ",
                    f.value = f.value.slice(0, -1),
                    f.setSelectionRange(s, s)
                }
            }
            function s() {
                var e, i;
                t !== f ? o() : n(),
                a.value = f.value + r.append,
                a.style.overflowY = f.style.overflowY,
                i = parseInt(f.style.height, 10),
                a.scrollTop = 0,
                a.scrollTop = 9e4,
                e = a.scrollTop,
                c && e > c ? (f.style.overflowY = "scroll",
                e = c) : (f.style.overflowY = "hidden",
                e < l && (e = l)),
                e += h,
                i !== e && (f.style.height = e + "px",
                m && r.callback.call(f, f))
            }
            function u() {
                clearTimeout(d),
                d = setTimeout(function() {
                    var e = p.width();
                    e !== y && (y = e,
                    s())
                }, parseInt(r.resizeDelay, 10))
            }
            var c, l, d, f = this, p = e(f), h = 0, m = e.isFunction(r.callback), g = {
                height: f.style.height,
                overflow: f.style.overflow,
                overflowY: f.style.overflowY,
                wordWrap: f.style.wordWrap,
                resize: f.style.resize
            }, y = p.width();
            p.data("autosize") || (p.data("autosize", !0),
            "border-box" !== p.css("box-sizing") && "border-box" !== p.css("-moz-box-sizing") && "border-box" !== p.css("-webkit-box-sizing") || (h = p.outerHeight() - p.height()),
            l = Math.max(parseInt(p.css("minHeight"), 10) - h || 0, p.height()),
            p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none" : "horizontal"
            }),
            "onpropertychange"in f ? "oninput"in f ? p.on("input.autosize keyup.autosize", s) : p.on("propertychange.autosize", function() {
                "value" === event.propertyName && s()
            }) : p.on("input.autosize", s),
            !1 !== r.resizeDelay && e(window).on("resize.autosize", u),
            p.on("autosize.resize", s),
            p.on("autosize.resizeIncludeStyle", function() {
                t = null,
                s()
            }),
            p.on("autosize.destroy", function() {
                t = null,
                clearTimeout(d),
                e(window).off("resize", u),
                p.off("autosize").off(".autosize").css(g).removeData("autosize")
            }),
            s())
        })
    }
}),
// === End AutoSize ===

// === TimeAgo ===
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof module && "object" == typeof module.exports ? require("jquery") : jQuery)
}(function(e) {
    function t() {
        var t = a.settings;
        if (t.autoDispose && !e.contains(document.documentElement, this))
            return e(this).timeago("dispose"),
            this;
        var o = n(this);
        return isNaN(o.datetime) || (0 === t.cutoff || Math.abs(i(o.datetime)) < t.cutoff ? e(this).text(r(o.datetime)) : e(this).attr("title").length > 0 && e(this).text(e(this).attr("title"))),
        this
    }
    function n(t) {
        if (t = e(t),
        !t.data("timeago")) {
            t.data("timeago", {
                datetime: a.datetime(t)
            });
            var n = e.trim(t.text());
            a.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(n.length > 0) || a.isTime(t) && t.attr("title") || t.attr("title", n)
        }
        return t.data("timeago")
    }
    function r(e) {
        return a.inWords(i(e))
    }
    function i(e) {
        return (new Date).getTime() - e.getTime()
    }
    e.timeago = function(t) {
        return r(t instanceof Date ? t : "string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
    }
    ;
    var a = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            autoDispose: !0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(t) {
            function n(n, i) {
                var a = e.isFunction(n) ? n(i, t) : n
                  , o = r.numbers && r.numbers[i] || i;
                return a.replace(/%d/i, o)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture)
                throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var r = this.settings.strings
              , i = r.prefixAgo
              , a = r.suffixAgo;
            if (this.settings.allowFuture && t < 0 && (i = r.prefixFromNow,
            a = r.suffixFromNow),
            !this.settings.allowPast && t >= 0)
                return this.settings.strings.inPast;
            var o = Math.abs(t) / 1e3
              , s = o / 60
              , u = s / 60
              , c = u / 24
              , l = c / 365
              , d = o < 45 && n(r.seconds, Math.round(o)) || o < 90 && n(r.minute, 1) || s < 45 && n(r.minutes, Math.round(s)) || s < 90 && n(r.hour, 1) || u < 24 && n(r.hours, Math.round(u)) || u < 42 && n(r.day, 1) || c < 30 && n(r.days, Math.round(c)) || c < 45 && n(r.month, 1) || c < 365 && n(r.months, Math.round(c / 30)) || l < 1.5 && n(r.year, 1) || n(r.years, Math.round(l))
              , f = r.wordSeparator || "";
            return r.wordSeparator === undefined && (f = " "),
            e.trim([i, d, a].join(f))
        },
        parse: function(t) {
            var n = e.trim(t);
            return n = n.replace(/\.\d+/, ""),
            n = n.replace(/-/, "/").replace(/-/, "/"),
            n = n.replace(/T/, " ").replace(/Z/, " UTC"),
            n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"),
            n = n.replace(/([\+\-]\d\d)$/, " $100"),
            new Date(n)
        },
        datetime: function(t) {
            var n = a.isTime(t) ? e(t).attr("datetime") : e(t).attr("title");
            return a.parse(n)
        },
        isTime: function(t) {
            return "time" === e(t).get(0).tagName.toLowerCase()
        }
    });
    var o = {
        init: function() {
            o.dispose.call(this);
            var n = e.proxy(t, this);
            n();
            var r = a.settings;
            r.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, r.refreshMillis))
        },
        update: function(n) {
            var r = n instanceof Date ? n : a.parse(n);
            e(this).data("timeago", {
                datetime: r
            }),
            a.settings.localeTitle && e(this).attr("title", r.toLocaleString()),
            t.apply(this)
        },
        updateFromDOM: function() {
            e(this).data("timeago", {
                datetime: a.parse(a.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
            }),
            t.apply(this)
        },
        dispose: function() {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
            this._timeagoInterval = null)
        }
    };
    e.fn.timeago = function(e, t) {
        var n = e ? o[e] : o.init;
        if (!n)
            throw new Error("Unknown function name '" + e + "' for timeago");
        return this.each(function() {
            n.call(this, t)
        }),
        this
    }
    ,
    document.createElement("abbr"),
    document.createElement("time")
});

// WanaKana
var wanakana, __indexOf = [].indexOf || function(e) {
    for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e)
            return t;
    return -1
}
;
wanakana = wanakana || {},
wanakana.version = "1.3.7",
"function" == typeof define && define.amd && define("wanakana", [], function() {
    return wanakana
}),
wanakana.LOWERCASE_START = 97,
wanakana.LOWERCASE_END = 122,
wanakana.UPPERCASE_START = 65,
wanakana.UPPERCASE_END = 90,
wanakana.HIRAGANA_START = 12353,
wanakana.HIRAGANA_END = 12438,
wanakana.KATAKANA_START = 12449,
wanakana.KATAKANA_END = 12538,
wanakana.LOWERCASE_FULLWIDTH_START = 65345,
wanakana.LOWERCASE_FULLWIDTH_END = 65370,
wanakana.UPPERCASE_FULLWIDTH_START = 65313,
wanakana.UPPERCASE_FULLWIDTH_END = 65338,
wanakana.defaultOptions = {
    useObseleteKana: !1,
    IMEMode: !1
},
wanakana.bind = function(e) {
    return e.addEventListener("input", wanakana._onInput)
}
,
wanakana.unbind = function(e) {
    return e.removeEventListener("input", wanakana._onInput)
}
,
wanakana._onInput = function(e) {
    var t, n, r, i;
    if (t = e.target,
    t.selectionStart,
    t.value.length,
    r = wanakana._convertFullwidthCharsToASCII(t.value),
    n = wanakana.toKana(r, {
        IMEMode: !0
    }),
    r !== n) {
        if (t.value = n,
        "number" == typeof t.selectionStart)
            return t.selectionStart = t.selectionEnd = t.value.length;
        if ("undefined" != typeof t.createTextRange)
            return t.focus(),
            i = t.createTextRange(),
            i.collapse(!1),
            i.select()
    }
}
,
wanakana._extend = function(e, t) {
    var n;
    if (null == e)
        return t;
    for (n in t)
        null == e[n] && null != t[n] && (e[n] = t[n]);
    return e
}
,
wanakana._isCharInRange = function(e, t, n) {
    var r;
    return r = e.charCodeAt(0),
    t <= r && r <= n
}
,
wanakana._isCharVowel = function(e, t) {
    var n;
    return null == t && (t = !0),
    n = t ? /[aeiouy]/ : /[aeiou]/,
    -1 !== e.toLowerCase().charAt(0).search(n)
}
,
wanakana._isCharConsonant = function(e, t) {
    var n;
    return null == t && (t = !0),
    n = t ? /[bcdfghjklmnpqrstvwxyz]/ : /[bcdfghjklmnpqrstvwxz]/,
    -1 !== e.toLowerCase().charAt(0).search(n)
}
,
wanakana._isCharKatakana = function(e) {
    return wanakana._isCharInRange(e, wanakana.KATAKANA_START, wanakana.KATAKANA_END)
}
,
wanakana._isCharHiragana = function(e) {
    return wanakana._isCharInRange(e, wanakana.HIRAGANA_START, wanakana.HIRAGANA_END)
}
,
wanakana._isCharKana = function(e) {
    return wanakana._isCharHiragana(e) || wanakana._isCharKatakana(e)
}
,
wanakana._isCharNotKana = function(e) {
    return !wanakana._isCharHiragana(e) && !wanakana._isCharKatakana(e)
}
,
wanakana._convertFullwidthCharsToASCII = function(e) {
    var t, n, r, i, a, o;
    for (n = e.split(""),
    i = a = 0,
    o = n.length; a < o; i = ++a)
        t = n[i],
        r = t.charCodeAt(0),
        wanakana._isCharInRange(t, wanakana.LOWERCASE_FULLWIDTH_START, wanakana.LOWERCASE_FULLWIDTH_END) && (n[i] = String.fromCharCode(r - wanakana.LOWERCASE_FULLWIDTH_START + wanakana.LOWERCASE_START)),
        wanakana._isCharInRange(t, wanakana.UPPERCASE_FULLWIDTH_START, wanakana.UPPERCASE_FULLWIDTH_END) && n[i](String.fromCharCode(r - wanakana.UPPERCASE_FULLWIDTH_START + wanakana.UPPERCASE_START));
    return n.join("")
}
,
wanakana._katakanaToHiragana = function(e) {
    var t, n, r, i, a, o, s;
    for (n = [],
    s = e.split(""),
    a = 0,
    o = s.length; a < o; a++)
        i = s[a],
        wanakana._isCharKatakana(i) ? (t = i.charCodeAt(0),
        t += wanakana.HIRAGANA_START - wanakana.KATAKANA_START,
        r = String.fromCharCode(t),
        n.push(r)) : n.push(i);
    return n.join("")
}
,
wanakana._hiraganaToKatakana = function(e) {
    var t, n, r, i, a, o, s;
    for (r = [],
    s = e.split(""),
    a = 0,
    o = s.length; a < o; a++)
        n = s[a],
        wanakana._isCharHiragana(n) ? (t = n.charCodeAt(0),
        t += wanakana.KATAKANA_START - wanakana.HIRAGANA_START,
        i = String.fromCharCode(t),
        r.push(i)) : r.push(n);
    return r.join("")
}
,
wanakana._hiraganaToRomaji = function(e, t) {
    var n, r, i, a, o, s, u, c, l, d;
    for (t = wanakana._extend(t, wanakana.defaultOptions),
    o = e.length,
    l = [],
    i = 0,
    r = 0,
    s = 2,
    a = function() {
        return e.substr(i, r)
    }
    ,
    c = function() {
        return r = Math.min(s, o - i)
    }
    ; i < o; ) {
        for (c(); r > 0; ) {
            if (n = a(),
            wanakana.isKatakana(n) && (n = wanakana._katakanaToHiragana(n)),
            "\u3063" === n.charAt(0) && 1 === r && i < o - 1) {
                u = !0,
                d = "";
                break
            }
            if (d = wanakana.J_to_R[n],
            null != d && u && (d = d.charAt(0).concat(d),
            u = !1),
            null != d)
                break;
            r--
        }
        null == d && (d = n),
        l.push(d),
        i += r || 1
    }
    return l.join("")
}
,
wanakana._romajiToHiragana = function(e, t) {
    return wanakana._romajiToKana(e, t, !0)
}
,
wanakana._romajiToKana = function(e, t, n) {
    var r, i, a, o, s, u, c, l, d, f;
    for (null == n && (n = !1),
    t = wanakana._extend(t, wanakana.defaultOptions),
    d = e.length,
    c = [],
    o = 0,
    f = 3,
    s = function() {
        return e.substr(o, a)
    }
    ,
    u = function(e) {
        return wanakana._isCharInRange(e, wanakana.UPPERCASE_START, wanakana.UPPERCASE_END)
    }
    ; o < d; ) {
        for (a = Math.min(f, d - o); a > 0; ) {
            if (r = s(),
            i = r.toLowerCase(),
            __indexOf.call(wanakana.FOUR_CHARACTER_EDGE_CASES, i) >= 0 && d - o >= 4)
                a++,
                r = s(),
                i = r.toLowerCase();
            else {
                if ("n" === i.charAt(0)) {
                    if (t.IMEMode && "'" === i.charAt(1) && 2 === a) {
                        l = "\u3093";
                        break
                    }
                    wanakana._isCharConsonant(i.charAt(1), !1) && wanakana._isCharVowel(i.charAt(2)) && (a = 1,
                    r = s(),
                    i = r.toLowerCase())
                }
                "n" !== i.charAt(0) && wanakana._isCharConsonant(i.charAt(0)) && r.charAt(0) === r.charAt(1) && (a = 1,
                i = r = wanakana._isCharInRange(r.charAt(0), wanakana.UPPERCASE_START, wanakana.UPPERCASE_END) ? "\u30c3" : "\u3063")
            }
            if (null != (l = wanakana.R_to_J[i]))
                break;
            4 === a ? a -= 2 : a--
        }
        null == l && (r = wanakana._convertPunctuation(r),
        l = r),
        (null != t ? t.useObseleteKana : void 0) && ("wi" === i && (l = "\u3090"),
        "we" === i && (l = "\u3091")),
        t.IMEMode && "n" === i.charAt(0) && ("y" === e.charAt(o + 1).toLowerCase() && !1 === wanakana._isCharVowel(e.charAt(o + 2)) || o === d - 1 || wanakana.isKana(e.charAt(o + 1))) && (l = r.charAt(0)),
        n || u(r.charAt(0)) && (l = wanakana._hiraganaToKatakana(l)),
        c.push(l),
        o += a || 1
    }
    return c.join("")
}
,
wanakana._convertPunctuation = function(e) {
    return "\u3000" === e ? " " : "-" === e ? "\u30fc" : e
}
,
wanakana.isHiragana = function(e) {
    var t;
    return t = e.split(""),
    t.every(wanakana._isCharHiragana)
}
,
wanakana.isKatakana = function(e) {
    var t;
    return t = e.split(""),
    t.every(wanakana._isCharKatakana)
}
,
wanakana.isKana = function(e) {
    var t;
    return t = e.split(""),
    t.every(function(e) {
        return wanakana.isHiragana(e) || wanakana.isKatakana(e)
    })
}
,
wanakana.isRomaji = function(e) {
    var t;
    return t = e.split(""),
    t.every(function(e) {
        return !wanakana.isHiragana(e) && !wanakana.isKatakana(e)
    })
}
,
wanakana.toHiragana = function(e, t) {
    return wanakana.isRomaji(e) ? e = wanakana._romajiToHiragana(e, t) : wanakana.isKatakana(e) ? e = wanakana._katakanaToHiragana(e, t) : e
}
,
wanakana.toKatakana = function(e, t) {
    return wanakana.isHiragana(e) ? e = wanakana._hiraganaToKatakana(e, t) : wanakana.isRomaji(e) ? (e = wanakana._romajiToHiragana(e, t),
    e = wanakana._hiraganaToKatakana(e, t)) : e
}
,
wanakana.toKana = function(e, t) {
    return e = wanakana._romajiToKana(e, t)
}
,
wanakana.toRomaji = function(e) {
    return e = wanakana._hiraganaToRomaji(e)
}
,
wanakana.R_to_J = {
    a: "\u3042",
    i: "\u3044",
    u: "\u3046",
    e: "\u3048",
    o: "\u304a",
    yi: "\u3044",
    wu: "\u3046",
    whu: "\u3046",
    xa: "\u3041",
    xi: "\u3043",
    xu: "\u3045",
    xe: "\u3047",
    xo: "\u3049",
    xyi: "\u3043",
    xye: "\u3047",
    ye: "\u3044\u3047",
    wha: "\u3046\u3041",
    whi: "\u3046\u3043",
    whe: "\u3046\u3047",
    who: "\u3046\u3049",
    wi: "\u3046\u3043",
    we: "\u3046\u3047",
    va: "\u3094\u3041",
    vi: "\u3094\u3043",
    vu: "\u3094",
    ve: "\u3094\u3047",
    vo: "\u3094\u3049",
    vya: "\u3094\u3083",
    vyi: "\u3094\u3043",
    vyu: "\u3094\u3085",
    vye: "\u3094\u3047",
    vyo: "\u3094\u3087",
    ka: "\u304b",
    ki: "\u304d",
    ku: "\u304f",
    ke: "\u3051",
    ko: "\u3053",
    lka: "\u30f5",
    lke: "\u30f6",
    xka: "\u30f5",
    xke: "\u30f6",
    kya: "\u304d\u3083",
    kyi: "\u304d\u3043",
    kyu: "\u304d\u3085",
    kye: "\u304d\u3047",
    kyo: "\u304d\u3087",
    ca: "\u304b",
    ci: "\u304d",
    cu: "\u304f",
    ce: "\u3051",
    co: "\u3053",
    lca: "\u30f5",
    lce: "\u30f6",
    xca: "\u30f5",
    xce: "\u30f6",
    qya: "\u304f\u3083",
    qyu: "\u304f\u3085",
    qyo: "\u304f\u3087",
    qwa: "\u304f\u3041",
    qwi: "\u304f\u3043",
    qwu: "\u304f\u3045",
    qwe: "\u304f\u3047",
    qwo: "\u304f\u3049",
    qa: "\u304f\u3041",
    qi: "\u304f\u3043",
    qe: "\u304f\u3047",
    qo: "\u304f\u3049",
    kwa: "\u304f\u3041",
    qyi: "\u304f\u3043",
    qye: "\u304f\u3047",
    ga: "\u304c",
    gi: "\u304e",
    gu: "\u3050",
    ge: "\u3052",
    go: "\u3054",
    gya: "\u304e\u3083",
    gyi: "\u304e\u3043",
    gyu: "\u304e\u3085",
    gye: "\u304e\u3047",
    gyo: "\u304e\u3087",
    gwa: "\u3050\u3041",
    gwi: "\u3050\u3043",
    gwu: "\u3050\u3045",
    gwe: "\u3050\u3047",
    gwo: "\u3050\u3049",
    sa: "\u3055",
    si: "\u3057",
    shi: "\u3057",
    su: "\u3059",
    se: "\u305b",
    so: "\u305d",
    za: "\u3056",
    zi: "\u3058",
    zu: "\u305a",
    ze: "\u305c",
    zo: "\u305e",
    ji: "\u3058",
    sya: "\u3057\u3083",
    syi: "\u3057\u3043",
    syu: "\u3057\u3085",
    sye: "\u3057\u3047",
    syo: "\u3057\u3087",
    sha: "\u3057\u3083",
    shu: "\u3057\u3085",
    she: "\u3057\u3047",
    sho: "\u3057\u3087",
    shya: "\u3057\u3083",
    shyu: "\u3057\u3085",
    shye: "\u3057\u3047",
    shyo: "\u3057\u3087",
    swa: "\u3059\u3041",
    swi: "\u3059\u3043",
    swu: "\u3059\u3045",
    swe: "\u3059\u3047",
    swo: "\u3059\u3049",
    zya: "\u3058\u3083",
    zyi: "\u3058\u3043",
    zyu: "\u3058\u3085",
    zye: "\u3058\u3047",
    zyo: "\u3058\u3087",
    ja: "\u3058\u3083",
    ju: "\u3058\u3085",
    je: "\u3058\u3047",
    jo: "\u3058\u3087",
    jya: "\u3058\u3083",
    jyi: "\u3058\u3043",
    jyu: "\u3058\u3085",
    jye: "\u3058\u3047",
    jyo: "\u3058\u3087",
    ta: "\u305f",
    ti: "\u3061",
    tu: "\u3064",
    te: "\u3066",
    to: "\u3068",
    chi: "\u3061",
    tsu: "\u3064",
    ltu: "\u3063",
    xtu: "\u3063",
    tya: "\u3061\u3083",
    tyi: "\u3061\u3043",
    tyu: "\u3061\u3085",
    tye: "\u3061\u3047",
    tyo: "\u3061\u3087",
    cha: "\u3061\u3083",
    chu: "\u3061\u3085",
    che: "\u3061\u3047",
    cho: "\u3061\u3087",
    cya: "\u3061\u3083",
    cyi: "\u3061\u3043",
    cyu: "\u3061\u3085",
    cye: "\u3061\u3047",
    cyo: "\u3061\u3087",
    chya: "\u3061\u3083",
    chyu: "\u3061\u3085",
    chye: "\u3061\u3047",
    chyo: "\u3061\u3087",
    tsa: "\u3064\u3041",
    tsi: "\u3064\u3043",
    tse: "\u3064\u3047",
    tso: "\u3064\u3049",
    tha: "\u3066\u3083",
    thi: "\u3066\u3043",
    thu: "\u3066\u3085",
    the: "\u3066\u3047",
    tho: "\u3066\u3087",
    twa: "\u3068\u3041",
    twi: "\u3068\u3043",
    twu: "\u3068\u3045",
    twe: "\u3068\u3047",
    two: "\u3068\u3049",
    da: "\u3060",
    di: "\u3062",
    du: "\u3065",
    de: "\u3067",
    "do": "\u3069",
    dya: "\u3062\u3083",
    dyi: "\u3062\u3043",
    dyu: "\u3062\u3085",
    dye: "\u3062\u3047",
    dyo: "\u3062\u3087",
    dha: "\u3067\u3083",
    dhi: "\u3067\u3043",
    dhu: "\u3067\u3085",
    dhe: "\u3067\u3047",
    dho: "\u3067\u3087",
    dwa: "\u3069\u3041",
    dwi: "\u3069\u3043",
    dwu: "\u3069\u3045",
    dwe: "\u3069\u3047",
    dwo: "\u3069\u3049",
    na: "\u306a",
    ni: "\u306b",
    nu: "\u306c",
    ne: "\u306d",
    no: "\u306e",
    nya: "\u306b\u3083",
    nyi: "\u306b\u3043",
    nyu: "\u306b\u3085",
    nye: "\u306b\u3047",
    nyo: "\u306b\u3087",
    ha: "\u306f",
    hi: "\u3072",
    hu: "\u3075",
    he: "\u3078",
    ho: "\u307b",
    fu: "\u3075",
    hya: "\u3072\u3083",
    hyi: "\u3072\u3043",
    hyu: "\u3072\u3085",
    hye: "\u3072\u3047",
    hyo: "\u3072\u3087",
    fya: "\u3075\u3083",
    fyu: "\u3075\u3085",
    fyo: "\u3075\u3087",
    fwa: "\u3075\u3041",
    fwi: "\u3075\u3043",
    fwu: "\u3075\u3045",
    fwe: "\u3075\u3047",
    fwo: "\u3075\u3049",
    fa: "\u3075\u3041",
    fi: "\u3075\u3043",
    fe: "\u3075\u3047",
    fo: "\u3075\u3049",
    fyi: "\u3075\u3043",
    fye: "\u3075\u3047",
    ba: "\u3070",
    bi: "\u3073",
    bu: "\u3076",
    be: "\u3079",
    bo: "\u307c",
    bya: "\u3073\u3083",
    byi: "\u3073\u3043",
    byu: "\u3073\u3085",
    bye: "\u3073\u3047",
    byo: "\u3073\u3087",
    pa: "\u3071",
    pi: "\u3074",
    pu: "\u3077",
    pe: "\u307a",
    po: "\u307d",
    pya: "\u3074\u3083",
    pyi: "\u3074\u3043",
    pyu: "\u3074\u3085",
    pye: "\u3074\u3047",
    pyo: "\u3074\u3087",
    ma: "\u307e",
    mi: "\u307f",
    mu: "\u3080",
    me: "\u3081",
    mo: "\u3082",
    mya: "\u307f\u3083",
    myi: "\u307f\u3043",
    myu: "\u307f\u3085",
    mye: "\u307f\u3047",
    myo: "\u307f\u3087",
    ya: "\u3084",
    yu: "\u3086",
    yo: "\u3088",
    xya: "\u3083",
    xyu: "\u3085",
    xyo: "\u3087",
    ra: "\u3089",
    ri: "\u308a",
    ru: "\u308b",
    re: "\u308c",
    ro: "\u308d",
    rya: "\u308a\u3083",
    ryi: "\u308a\u3043",
    ryu: "\u308a\u3085",
    rye: "\u308a\u3047",
    ryo: "\u308a\u3087",
    la: "\u3089",
    li: "\u308a",
    lu: "\u308b",
    le: "\u308c",
    lo: "\u308d",
    lya: "\u308a\u3083",
    lyi: "\u308a\u3043",
    lyu: "\u308a\u3085",
    lye: "\u308a\u3047",
    lyo: "\u308a\u3087",
    wa: "\u308f",
    wo: "\u3092",
    lwe: "\u308e",
    xwa: "\u308e",
    n: "\u3093",
    nn: "\u3093",
    "n ": "\u3093",
    xn: "\u3093",
    ltsu: "\u3063"
},
wanakana.FOUR_CHARACTER_EDGE_CASES = ["lts", "chy", "shy"],
wanakana.J_to_R = {
    "\u3042": "a",
    "\u3044": "i",
    "\u3046": "u",
    "\u3048": "e",
    "\u304a": "o",
    "\u3094\u3041": "va",
    "\u3094\u3043": "vi",
    "\u3094": "vu",
    "\u3094\u3047": "ve",
    "\u3094\u3049": "vo",
    "\u304b": "ka",
    "\u304d": "ki",
    "\u304d\u3083": "kya",
    "\u304d\u3043": "kyi",
    "\u304d\u3085": "kyu",
    "\u304f": "ku",
    "\u3051": "ke",
    "\u3053": "ko",
    "\u304c": "ga",
    "\u304e": "gi",
    "\u3050": "gu",
    "\u3052": "ge",
    "\u3054": "go",
    "\u304e\u3083": "gya",
    "\u304e\u3043": "gyi",
    "\u304e\u3085": "gyu",
    "\u304e\u3047": "gye",
    "\u304e\u3087": "gyo",
    "\u3055": "sa",
    "\u3059": "su",
    "\u305b": "se",
    "\u305d": "so",
    "\u3056": "za",
    "\u305a": "zu",
    "\u305c": "ze",
    "\u305e": "zo",
    "\u3057": "shi",
    "\u3057\u3083": "sha",
    "\u3057\u3085": "shu",
    "\u3057\u3087": "sho",
    "\u3058": "ji",
    "\u3058\u3083": "ja",
    "\u3058\u3085": "ju",
    "\u3058\u3087": "jo",
    "\u305f": "ta",
    "\u3061": "chi",
    "\u3061\u3083": "cha",
    "\u3061\u3085": "chu",
    "\u3061\u3087": "cho",
    "\u3064": "tsu",
    "\u3066": "te",
    "\u3068": "to",
    "\u3060": "da",
    "\u3062": "di",
    "\u3065": "du",
    "\u3067": "de",
    "\u3069": "do",
    "\u306a": "na",
    "\u306b": "ni",
    "\u306b\u3083": "nya",
    "\u306b\u3085": "nyu",
    "\u306b\u3087": "nyo",
    "\u306c": "nu",
    "\u306d": "ne",
    "\u306e": "no",
    "\u306f": "ha",
    "\u3072": "hi",
    "\u3075": "fu",
    "\u3078": "he",
    "\u307b": "ho",
    "\u3072\u3083": "hya",
    "\u3072\u3085": "hyu",
    "\u3072\u3087": "hyo",
    "\u3075\u3041": "fa",
    "\u3075\u3043": "fi",
    "\u3075\u3047": "fe",
    "\u3075\u3049": "fo",
    "\u3070": "ba",
    "\u3073": "bi",
    "\u3076": "bu",
    "\u3079": "be",
    "\u307c": "bo",
    "\u3073\u3083": "bya",
    "\u3073\u3085": "byu",
    "\u3073\u3087": "byo",
    "\u3071": "pa",
    "\u3074": "pi",
    "\u3077": "pu",
    "\u307a": "pe",
    "\u307d": "po",
    "\u3074\u3083": "pya",
    "\u3074\u3085": "pyu",
    "\u3074\u3087": "pyo",
    "\u307e": "ma",
    "\u307f": "mi",
    "\u3080": "mu",
    "\u3081": "me",
    "\u3082": "mo",
    "\u307f\u3083": "mya",
    "\u307f\u3085": "myu",
    "\u307f\u3087": "myo",
    "\u3084": "ya",
    "\u3086": "yu",
    "\u3088": "yo",
    "\u3089": "ra",
    "\u308a": "ri",
    "\u308b": "ru",
    "\u308c": "re",
    "\u308d": "ro",
    "\u308a\u3083": "rya",
    "\u308a\u3085": "ryu",
    "\u308a\u3087": "ryo",
    "\u308f": "wa",
    "\u3092": "wo",
    "\u3093": "n",
    "\u3090": "wi",
    "\u3091": "we",
    "\u304d\u3047": "kye",
    "\u304d\u3087": "kyo",
    "\u3058\u3043": "jyi",
    "\u3058\u3047": "jye",
    "\u3061\u3043": "cyi",
    "\u3061\u3047": "che",
    "\u3072\u3043": "hyi",
    "\u3072\u3047": "hye",
    "\u3073\u3043": "byi",
    "\u3073\u3047": "bye",
    "\u3074\u3043": "pyi",
    "\u3074\u3047": "pye",
    "\u307f\u3047": "mye",
    "\u307f\u3043": "myi",
    "\u308a\u3043": "ryi",
    "\u308a\u3047": "rye",
    "\u306b\u3043": "nyi",
    "\u306b\u3047": "nye",
    "\u3057\u3043": "syi",
    "\u3057\u3047": "she",
    "\u3044\u3047": "ye",
    "\u3046\u3041": "wha",
    "\u3046\u3049": "who",
    "\u3046\u3043": "wi",
    "\u3046\u3047": "we",
    "\u3094\u3083": "vya",
    "\u3094\u3085": "vyu",
    "\u3094\u3087": "vyo",
    "\u3059\u3041": "swa",
    "\u3059\u3043": "swi",
    "\u3059\u3045": "swu",
    "\u3059\u3047": "swe",
    "\u3059\u3049": "swo",
    "\u304f\u3083": "qya",
    "\u304f\u3085": "qyu",
    "\u304f\u3087": "qyo",
    "\u304f\u3041": "qwa",
    "\u304f\u3043": "qwi",
    "\u304f\u3045": "qwu",
    "\u304f\u3047": "qwe",
    "\u304f\u3049": "qwo",
    "\u3050\u3041": "gwa",
    "\u3050\u3043": "gwi",
    "\u3050\u3045": "gwu",
    "\u3050\u3047": "gwe",
    "\u3050\u3049": "gwo",
    "\u3064\u3041": "tsa",
    "\u3064\u3043": "tsi",
    "\u3064\u3047": "tse",
    "\u3064\u3049": "tso",
    "\u3066\u3083": "tha",
    "\u3066\u3043": "thi",
    "\u3066\u3085": "thu",
    "\u3066\u3047": "the",
    "\u3066\u3087": "tho",
    "\u3068\u3041": "twa",
    "\u3068\u3043": "twi",
    "\u3068\u3045": "twu",
    "\u3068\u3047": "twe",
    "\u3068\u3049": "two",
    "\u3062\u3083": "dya",
    "\u3062\u3043": "dyi",
    "\u3062\u3085": "dyu",
    "\u3062\u3047": "dye",
    "\u3062\u3087": "dyo",
    "\u3067\u3083": "dha",
    "\u3067\u3043": "dhi",
    "\u3067\u3085": "dhu",
    "\u3067\u3047": "dhe",
    "\u3067\u3087": "dho",
    "\u3069\u3041": "dwa",
    "\u3069\u3043": "dwi",
    "\u3069\u3045": "dwu",
    "\u3069\u3047": "dwe",
    "\u3069\u3049": "dwo",
    "\u3075\u3045": "fwu",
    "\u3075\u3083": "fya",
    "\u3075\u3085": "fyu",
    "\u3075\u3087": "fyo",
    "\u3041": "a",
    "\u3043": "i",
    "\u3047": "e",
    "\u3045": "u",
    "\u3049": "o",
    "\u3083": "ya",
    "\u3085": "yu",
    "\u3087": "yo",
    "\u3063": "",
    "\u3095": "ka",
    "\u3096": "ka",
    "\u308e": "wa",
    "\u3000": " ",
    "\u3093\u3042": "n'a",
    "\u3093\u3044": "n'i",
    "\u3093\u3046": "n'u",
    "\u3093\u3048": "n'e",
    "\u3093\u304a": "n'o",
    "\u3093\u3084": "n'ya",
    "\u3093\u3086": "n'yu",
    "\u3093\u3088": "n'yo"
},

// === Honeybadger v0.5.0 ===
function(e, t) {
    "use strict";
    var n = {};
    !function() {
        var e = document.getElementsByTagName("script")
          , t = e[e.length - 1];
        if (t)
            for (var r, i = t.attributes, a = 0, o = i.length; a < o; a++)
                /data-(\w+)$/.test(i[a].nodeName) && (r = i[a].nodeValue,
                "false" === r && (r = !1),
                n[RegExp.$1] = r)
    }();
    var r = function() {
        var e = t()
          , r = e(n);
        return r.factory = e,
        r
    };
    "function" == typeof define && define.amd ? define([], r) : "object" == typeof module && module.exports ? module.exports = r() : e.Honeybadger = r()
}(this, function() {
    function e(e, t) {
        var n = {};
        for (var r in e)
            n[r] = e[r];
        for (var r in t)
            n[r] = t[r];
        return n
    }
    function t(e) {
        return !!u && (u.name === e.name && (u.message === e.message && u.stack === e.stack))
    }
    function n(e, t) {
        var n = e.message;
        for (var r in t)
            if (n.match(t[r]))
                return !0;
        return !1
    }
    function r() {
        var e = {};
        return e.HTTP_USER_AGENT = navigator.userAgent,
        document.referrer.match(/\S/) && (e.HTTP_REFERER = document.referrer),
        e
    }
    function i(e) {
        if ("object" != typeof e)
            return undefined;
        var t = [];
        for (var n in e)
            t.push(n + "=" + e[n]);
        return t.join(";")
    }
    function a(e) {
        return e.stacktrace || e.stack || undefined
    }
    function o(e) {
        var t, n = 10;
        if (e && (t = a(e)))
            return {
                stack: t,
                generator: undefined
            };
        try {
            throw new Error("")
        } catch (e) {
            if (t = a(e))
                return {
                    stack: t,
                    generator: "throw"
                }
        }
        t = ["<call-stack>"];
        for (var r = arguments.callee; r && t.length < n; ) {
            /function(?:\s+([\w$]+))+\s*\(/.test(r.toString()) ? t.push(RegExp.$1 || "<anonymous>") : t.push("<anonymous>");
            try {
                r = r.caller
            } catch (e) {
                break
            }
        }
        return {
            stack: t.join("\n"),
            generator: "walk"
        }
    }
    function s(e, t) {
        var n, r;
        for (n = 0,
        r = e.length; n < r; n++)
            if (!1 === (0,
            e[n])(t))
                return !0;
        return !1
    }
    var u, c, l = "0.5.0", d = {
        name: "honeybadger.js",
        url: "https://github.com/honeybadger-io/honeybadger-js",
        version: l,
        language: "javascript"
    }, f = !1, p = !1;
    return function(h) {
        function m(e) {
            g("debug") && this.console && console.log(e)
        }
        function g(e, t) {
            var n = $[e];
            return n === undefined && (n = $[e.toLowerCase()]),
            "false" === n && (n = !1),
            n !== undefined ? n : t
        }
        function y() {
            return "http" + (g("ssl", !0) && "s" || "") + "://" + g("host", "api.honeybadger.io")
        }
        function v(e) {
            return !/function|symbol/.test(typeof e) && ("object" != typeof e || "undefined" != typeof e.hasOwnProperty)
        }
        function b(e, t, n) {
            var r, i, a, o;
            if (a = [],
            n || (n = 0),
            n >= g("max_depth", 8))
                return encodeURIComponent(t) + "=[MAX DEPTH REACHED]";
            for (r in e)
                o = e[r],
                e.hasOwnProperty(r) && null != r && null != o && (v(o) || (o = Object.prototype.toString.call(o)),
                i = t ? t + "[" + r + "]" : r,
                a.push("object" == typeof o ? b(o, i, n + 1) : encodeURIComponent(i) + "=" + encodeURIComponent(o)));
            return a.join("&")
        }
        function w(e) {
            try {
                var t = new (this.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
                return t.open("GET", e, g("async", !0)),
                void t.send()
            } catch (e) {
                m("Error encountered during XHR request (will retry): " + e)
            }
            (new Image).src = e
        }
        function x(e) {
            u = c = null;
            var t = g("apiKey", g("api_key"));
            return t ? (w(y() + "/v1/notices/js.gif?" + b({
                notice: e
            }) + "&api_key=" + t + "&t=" + (new Date).getTime()),
            !0) : (m("Unable to send error report: no API key has been configured."),
            !1)
        }
        function k(o, l) {
            if (g("disabled", !1))
                return !1;
            if ("object" != typeof o)
                return !1;
            if ("[object Error]" === Object.prototype.toString.call(o)) {
                var p = o;
                o = e(o, {
                    name: p.name,
                    message: p.message,
                    stack: a(p)
                })
            }
            if (t(o))
                return !1;
            if (c && f && x(c),
            0 === function() {
                var e, t;
                t = [];
                for (e in o)
                    ({}).hasOwnProperty.call(o, e) && t.push(e);
                return t
            }().length)
                return !1;
            if (l && (o = e(o, l)),
            n(o, g("ignorePatterns")))
                return !1;
            if (s($.beforeNotifyHandlers, o))
                return !1;
            var h = r();
            "string" == typeof o.cookies ? h.HTTP_COOKIE = o.cookies : "object" == typeof o.cookies && (h.HTTP_COOKIE = i(o.cookies));
            var y = {
                notifier: d,
                error: {
                    "class": o.name || "Error",
                    message: o.message,
                    backtrace: o.stack,
                    generator: o.generator,
                    fingerprint: o.fingerprint
                },
                request: {
                    url: o.url || document.URL,
                    component: o.component || g("component"),
                    action: o.action || g("action"),
                    context: e($.context, o.context),
                    cgi_data: h,
                    params: o.params
                },
                server: {
                    project_root: o.projectRoot || o.project_root || g("projectRoot", g("project_root", window.location.protocol + "//" + window.location.host)),
                    environment_name: o.environment || g("environment"),
                    revision: o.revision || g("revision")
                }
            };
            return c = y,
            u = o,
            f ? (m("Deferring notice.", o, y),
            window.setTimeout(function() {
                t(o) && x(y)
            })) : (m("Queuing notice.", o, y),
            _.push(y)),
            o
        }
        function T(e) {
            return "function" != typeof Object.isExtensible || Object.isExtensible(e)
        }
        function S(e, t) {
            try {
                return "function" != typeof e ? e : T(e) ? (e.___hb || (e.___hb = function() {
                    var n = g("onerror", !0);
                    if (!(A && (n || t) || t && !n))
                        return e.apply(this, arguments);
                    try {
                        return e.apply(this, arguments)
                    } catch (e) {
                        throw k(e),
                        e
                    }
                }
                ),
                e.___hb) : e
            } catch (t) {
                return e
            }
        }
        function C(e, t, n) {
            if (!p && e && t && n) {
                var r = e[t];
                e[t] = n(r)
            }
        }
        var j = []
          , _ = []
          , $ = {
            context: {},
            beforeNotifyHandlers: []
        };
        if ("object" == typeof h)
            for (var E in h)
                $[E] = h[E];
        var A = !0;
        if (window.atob || (A = !1),
        window.ErrorEvent)
            try {
                0 === new window.ErrorEvent("").colno && (A = !1)
            } catch (e) {}
        $.notify = function(t, n, r) {
            if (t || (t = {}),
            "[object Error]" === Object.prototype.toString.call(t)) {
                var i = t;
                t = e(t, {
                    name: i.name,
                    message: i.message,
                    stack: a(i)
                })
            }
            if ("object" != typeof t) {
                t = {
                    message: String(t)
                }
            }
            if (n && "object" != typeof n) {
                n = {
                    name: String(n)
                }
            }
            return n && (t = e(t, n)),
            "object" == typeof r && (t = e(t, r)),
            k(t, o(t))
        }
        ,
        $.wrap = function(e) {
            return S(e, !0)
        }
        ,
        $.setContext = function(t) {
            return "object" == typeof t && ($.context = e($.context, t)),
            $
        }
        ,
        $.resetContext = function(t) {
            return $.context = "object" == typeof t ? e({}, t) : {},
            $
        }
        ,
        $.configure = function(e) {
            for (var t in e)
                $[t] = e[t];
            return $
        }
        ,
        $.beforeNotify = function(e) {
            return $.beforeNotifyHandlers.push(e),
            $
        }
        ;
        var N = [].indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e)
                    return t;
            return -1
        }
        ;
        $.reset = function() {
            $.context = {},
            $.beforeNotifyHandlers = [];
            for (var e in $)
                -1 == N.call(j, e) && ($[e] = undefined);
            return $
        }
        ,
        $.getVersion = function() {
            return l
        }
        ;
        var D = function(e) {
            return function(t, n) {
                if ("function" == typeof t) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return t = S(t),
                    e(function() {
                        t.apply(null, r)
                    }, n)
                }
                return e(t, n)
            }
        };
        C(window, "setTimeout", D),
        C(window, "setInterval", D),
        "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function(e) {
            var t = window[e] && window[e].prototype;
            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (C(t, "addEventListener", function(e) {
                return function(t, n, r, i) {
                    try {
                        n && null != n.handleEvent && (n.handleEvent = S(n.handleEvent))
                    } catch (e) {
                        m(e)
                    }
                    return e.call(this, t, S(n), r, i)
                }
            }),
            C(t, "removeEventListener", function(e) {
                return function(t, n, r, i) {
                    return e.call(this, t, n, r, i),
                    e.call(this, t, S(n), r, i)
                }
            }))
        }),
        C(window, "onerror", function(e) {
            function t(e, t, n, r, i) {
                if (!u && g("onerror", !0)) {
                    if (0 === n && /Script error\.?/.test(e))
                        return void m("Ignoring cross-domain script error. Use CORS to enable tracking of these types of errors.");
                    if (m("Error caught by window.onerror"),
                    i)
                        return void k(i);
                    k({
                        name: "window.onerror",
                        message: e,
                        stack: [e, "\n    at ? (", t || "unknown", ":", n || 0, ":", r || 0, ")"].join("")
                    })
                }
            }
            return function(n, r, i, a, o) {
                return t(n, r, i, a, o),
                "function" == typeof e && e.apply(this, arguments)
            }
        }),
        p = !0;
        for (var E in $)
            j.push(E);
        if (m("Initializing honeybadger.js " + l),
        /complete|interactive|loaded/.test(document.readyState))
            f = !0,
            m("honeybadger.js " + l + " ready");
        else {
            m("Installing ready handler");
            var L = function() {
                f = !0,
                m("honeybadger.js " + l + " ready");
                for (var e; e = _.pop(); )
                    x(e)
            };
            document.addEventListener ? document.addEventListener("DOMContentLoaded", L, !0) : window.attachEvent("onload", L)
        }
        return $
    }
}),
function() {
    Honeybadger.configure({
        apiKey: "9797e5e1",
        environment: "production",
        onerror: !1
    })
}
.call(this),

// WaniKani
function() {
    null == window.WaniKani && (window.WaniKani = {}),
    WaniKani.exceptions = {
        submitErrorReport: function(e, t, n, r, i, a, o) {
            return Honeybadger.notify(n, {
                component: e,
                action: t,
                context: {
                    user: window.WaniKani.username,
                    response_text: r.responseText,
                    response_status: r.status,
                    response_status_text: r.statusText,
                    status: i,
                    details: o
                },
                environment: "production",
                params: a
            })
        }
    }
}
.call(this),
// idleTime
function() {
    var e;
    this.idleTime = {},
    e = 0,
    this.idleTime.load = function() {
        return idleTime.core()
    }
    ,
    this.idleTime.core = function() {
        return $(document).ready(function() {
            return setInterval("idleTime.increment()", 6e4),
            $(this).mousemove(function() {
                return e = 0
            }),
            $(this).keypress(function() {
                return e = 0
            })
        })
    }
    ,
    this.idleTime.increment = function() {
        var t;
        if (t = $("#timeout"),
        (e += 1) > 9 && t.is(":hidden"))
            return idleTime.view()
    }
    ,
    this.idleTime.view = function() {
        return $("#timeout").show(),
        $("#timeout-idle").show(),
        $("html, body").css("overflow", "hidden")
    }
}
.call(this),
// Notes
function() {
    this.Notes = {
        add: function(e, t, n, r, i) {
            var a;
            return a = Notes.format(r, "html"),
            $("<div></div>", {
                "class": "note-" + t + " noSwipe",
                html: a
            }).appendTo(i),
            Notes.store_locally(e, t, n, a),
            Notes.click(e, t, n)
        },
        click: function(e, t, n) {
            var r, i, a, o, s;
            return s = $(".note-" + t),
            i = $.jStorage.get("l/note/" + e.substring(0, 3) + "/" + t.substring(0, 1) + "/" + n) || "",
            r = function() {
                var e, t;
                return t = s.find("button[type=submit]"),
                e = s.find("textarea"),
                t.after('<span class="counter-note" title="Characters Remaining">' + (e.attr("maxlength") - e.val().length) + ' <i class="icon-pencil"></i></span>'),
                e.off,
                e.on("propertychange input textInput", function() {
                    var e;
                    return e = $(this).attr("maxlength") - $(this).val().length,
                    e < 0 && (e = 0),
                    s.find(".counter-note").html(e + ' <i class="icon-pencil"></i>'),
                    0 === $(this).val().length ? t.text("Remove") : t.text("Save")
                })
            }
            ,
            a = function() {
                var e;
                return e = s.find(".btn-cancel"),
                e.off("click"),
                e.on("click", function(e) {
                    return e.preventDefault(),
                    setTimeout(function() {
                        return s.find("form").remove(),
                        s.html(Notes.format(i, "html"))
                    }, 100)
                })
            }
            ,
            o = function(e, t, n) {
                var r;
                return r = s.find("button[type=submit]"),
                r.off("click"),
                r.on("click", function(a) {
                    var o, u;
                    return a.preventDefault(),
                    o = t + "_note",
                    s.find(".processing-note").delay(100).show(0),
                    $.ajax({
                        type: "PUT",
                        url: "/study_materials/" + n,
                        contentType: "application/json",
                        data: JSON.stringify({
                            study_material: (u = {
                                subject_id: n,
                                subject_type: e
                            },
                            u["" + o] = s.find("textarea").val(),
                            u)
                        })
                    }).success(function(r) {
                        return i = Notes.format(r[o], "html"),
                        s.empty().html(i),
                        Notes.store_locally(e, t, n, r[o])
                    }).fail(function() {
                        return $(".processing-note").delay(300).hide(0),
                        r.addClass("error-note-button").text("Error Adding Note. Retry?")
                    })
                })
            }
            ,
            s.off("click"),
            s.on("click", function() {
                var i, u, c, l;
                return 0 === s.find("form").size() ? (c = Notes.format($(this).html(), "input"),
                $(this).empty(),
                u = $("<form></form>").appendTo($(this)),
                i = $("<fieldset></fieldset>").appendTo(u),
                l = $("<textarea></textarea>", {
                    maxlength: 500,
                    placeholder: "Add a note",
                    text: c
                }).appendTo(i).autosize({
                    append: "\n"
                }),
                $("<button></button>", {
                    "class": "btn-cancel",
                    text: "Cancel"
                }).appendTo(i),
                $("<button></button>", {
                    type: "submit",
                    text: "Save"
                }).appendTo(i),
                r(l),
                o(e, t, n),
                a()) : s.find("textarea").focus()
            })
        },
        format: function(e, t) {
            switch (t) {
            case "html":
                return e ? e.replace(/\n/g, "<br>") : "Click to add note";
            case "input":
                return e ? (e = "Click to add note" === e ? "" : e,
                e.replace(/<br>/g, "\n")) : ""
            }
        },
        store_locally: function(e, t, n, r) {
            var i;
            return i = "l/note/" + e.substring(0, 3) + "/" + t.substring(0, 1) + "/" + n,
            $.jStorage.set(i, r),
            $.jStorage.setTTL(i, 72e5)
        }
    }
}
.call(this),
// UserSynonyms
function() {
    this.UserSynonyms = {},
    this.UserSynonyms.load = function(e, t, n, r) {
        return UserSynonyms.generateList(t),
        UserSynonyms.addOption(e, n, r),
        UserSynonyms.removeOption(e, n, r)
    }
    ,
    this.UserSynonyms.addOption = function(e, t, n) {
        var r, i;
        return r = $(".user-synonyms-add-btn"),
        i = UserSynonyms.wrapper(),
        r.off("click"),
        r.on("click", function() {
            var a, o, s, u, c;
            return $(this).hide(),
            s = $("<li></li>", {
                "class": "user-synonyms-add-form"
            }).appendTo(i),
            u = $("<form></form>").appendTo(s),
            c = $("<input></input>").attr({
                type: "text",
                autocapitalize: "none",
                autocomplete: "off",
                autocorrect: "off",
                spellcheck: "false"
            }).appendTo(u).focus(),
            o = $("<button></button>", {
                type: "submit",
                text: "Add"
            }).appendTo(u),
            a = $("<button></button>", {
                type: "button",
                html: '<i class="icon-remove"></i>'
            }).appendTo(u),
            o.off("click"),
            o.on("click", function(r) {
                var a, s, u;
                return r.preventDefault(),
                a = c.val(),
                s = i.find("li"),
                u = a.length + s.slice(0, s.size() - 1).text().length,
                u > 255 ? o.attr("disabled", "disabled").text("Exceeded Synonym Limit") : 0 !== a.trim().length && $.ajax({
                    type: "PUT",
                    url: "/study_materials/" + t,
                    contentType: "application/json",
                    data: JSON.stringify({
                        subject_type: e,
                        subject_id: t,
                        meaning_synonyms: UserSynonyms.synonymsList().concat(c.val())
                    })
                }).success(function(r) {
                    var i, a;
                    if ($(".user-synonyms ul").remove(),
                    UserSynonyms.generateList(r.meaning_synonyms),
                    UserSynonyms.addOption(e, t, n),
                    UserSynonyms.removeOption(e, t, n),
                    n)
                        return a = $.jStorage.get("currentItem"),
                        i = $.grep($.jStorage.get("activeQueue"), function(e) {
                            return e.id !== a.id
                        }),
                        a.syn = r.meaning_synonyms,
                        i.push(a),
                        $.jStorage.set("activeQueue", i)
                }).fail(function() {
                    return !1
                })
            }),
            a.off("click"),
            a.on("click", function(e) {
                return e.preventDefault(),
                s.remove(),
                r.show()
            })
        })
    }
    ,
    this.UserSynonyms.generateList = function(e) {
        var t, n, r, i;
        for ($(".user-synonyms").append($("<ul></ul>")),
        i = UserSynonyms.wrapper(),
        e || (e = []),
        t = 0,
        n = e.length; t < n; t++)
            r = e[t],
            $("<li></li>", {
                text: r,
                title: "Click to remove synonym"
            }).appendTo(i);
        return $("<li></li>", {
            html: "&nbsp;",
            title: "Add your own synonym",
            "class": "user-synonyms-add-btn"
        }).appendTo(i)
    }
    ,
    this.UserSynonyms.removeOption = function(e, t, n) {
        var r;
        return r = UserSynonyms.wrapper().find("li:not(.user-synonyms-add-btn):not(.user-synonyms-add-form)"),
        r.off("click"),
        r.on("click", function() {
            return $(this).remove(),
            $.ajax({
                type: "PUT",
                url: "/study_materials/" + t,
                contentType: "application/json",
                data: JSON.stringify({
                    study_material: {
                        subject_type: e,
                        subject_id: t,
                        meaning_synonyms: UserSynonyms.synonymsList()
                    }
                })
            }).success(function(e) {
                var t, r;
                if (n)
                    return r = $.jStorage.get("currentItem"),
                    t = $.grep($.jStorage.get("activeQueue"), function(e) {
                        return e.id !== r.id
                    }),
                    r.syn = e.meaning_synonyms,
                    t.push(r),
                    $.jStorage.set("activeQueue", t)
            }).fail(function() {
                return !1
            })
        })
    }
    ,
    this.UserSynonyms.wrapper = function() {
        return $(".user-synonyms ul")
    }
    ,
    this.UserSynonyms.synonymsList = function() {
        return UserSynonyms.wrapper().find("li:not(.user-synonyms-add-btn):not(.user-synonyms-add-form)").map(function() {
            return $(this).text()
        }).get()
    }
}
.call(this),
// WaniKani.iosPatch
function() {
    null == window.WaniKani && (window.WaniKani = {}),
    WaniKani.iosPatch = {
        init: function() {
            return this.touchable = !1,
            $(window).on("touchstart", $.proxy(this.flagAsTouchable, this))
        },
        flagAsTouchable: function() {
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/))
                return this.touchable = !0
        }
    },
    jQuery(function() {
        return WaniKani.iosPatch.init()
    })
}
.call(this),
// additionalContent
function() {
    var e, t;
    this.additionalContent = {},
    this.additionalContent.audio = e = function(t) {
        var n, r, i, a;
        if (i = $.jStorage.get("currentItem"),
        a = $.jStorage.get("questionType"),
        $("audio").remove(),
        i.aud && "reading" === a)
            return r = $("#option-audio"),
            n = r.find("button"),
            t = t,
            $("#answer-form fieldset").hasClass("correct") || (t = !1),
            n.removeAttr("disabled"),
            e = $("<audio></audio>", {
                autoplay: t
            }).appendTo(r.removeClass("disabled").children("span")),
            $("<source></source>", {
                src: "https://cdn.wanikani.com/subjects/audio/" + i.aud,
                type: "audio/mpeg"
            }).appendTo(e),
            $("<source></source>", {
                src: "https://cdn.wanikani.com/subjects/audio/" + i.aud.replace(".mp3", ".ogg"),
                type: "audio/ogg"
            }).appendTo(e),
            e[0].addEventListener("play", function() {
                return n.removeClass("audio-idle").addClass("audio-play")
            }),
            e[0].addEventListener("ended", function() {
                return n.removeClass("audio-play").addClass("audio-idle")
            }),
            n.off("click"),
            n.on("click", function() {
                return e[0].play()
            }),
            r.off("click"),
            r.on("click", function() {
                if ($("#user-response").is(":disabled"))
                    return $("audio").trigger("play"),
                    !1
            })
    }
    ,
    this.additionalContent.load = function() {
        return additionalContent.menu(),
        additionalContent.itemInfo()
    }
    ,
    this.additionalContent.menu = function() {
        var e, t, n, r;
        return e = ["kana-chart", "item-info", "home", "last-items", "wrap-up"],
        r = $("#additional-content li"),
        t = $("#information"),
        n = $("#user-response"),
        r.click(function() {
            var i, a;
            if (a = $(this).attr("id").replace("option-", ""),
            $(this).hasClass("inactive"))
                return !1;
            if ($.inArray(a, e) >= 0) {
                if ("home" === a)
                    return location.href = "/review";
                if ("wrap-up" === a)
                    return $(this).hasClass("wrap-up-selected") ? ($(this).removeClass("wrap-up-selected"),
                    $.jStorage.deleteKey("r/wrap-up"),
                    $("#wrap-up-countdown").empty()) : (i = ($.jStorage.get("activeQueue") || []).length,
                    $.jStorage.set("r/wrap-up", !0),
                    $("#wrap-up-countdown").text(i),
                    $(this).addClass("wrap-up-selected"));
                if (!$(this).hasClass("active")) {
                    if (!n.is(":disabled") && "item-info" === a)
                        return;
                    return t.show().children().hide(),
                    "last-items" === a && ($("#additional-content-load").show(),
                    lastItems.load()),
                    $("html, body").animate({
                        scrollTop: n.offset().top - 10
                    }, 200),
                    r.removeClass("active"),
                    $(this).addClass("active"),
                    $("#" + a).fadeIn(300)
                }
                if (r.removeClass("active"),
                t.hide().children().hide(),
                $("html, body").animate({
                    scrollTop: 0
                }, 200),
                "last-items" === a)
                    return lastItems.clear()
            }
        })
    }
    ,
    this.additionalContent.itemInfo = t = function() {
        var e, n;
        return e = function(e) {
            switch (e) {
            case "radical":
                return /\[(?:radical)\]/gi;
            case "kanji":
                return /\[(?:kanji)\]/gi;
            case "vocabulary":
                return /\[(?:vocabulary)\]/gi;
            case "meaning":
                return /\[(?:meaning)\]/gi;
            case "reading":
                return /\[(?:reading)\]/gi;
            case "ja":
                return /\[(?:ja)\]/gi;
            case "closeTagSpan":
                return /\[\/(?:radical|kanji|vocabulary|meaning|reading|ja)\]/gi
            }
        }
        ,
        n = function(t) {
            var n, r, i;
            null == t && (t = ""),
            t = t.replace("\r\n", "<br><br>"),
            r = ["radical", "kanji", "vocabulary", "meaning", "reading", "ja", "closeTagSpan"];
            for (n in r)
                i = r[n],
                t = function() {
                    switch (i) {
                    case "ja":
                        return t.replace(e(i), '<span lang="ja">');
                    case "closeTagSpan":
                        return t.replace(e(i), "</span>");
                    default:
                        return t.replace(e(i), '<span class="highlight-' + i + '">')
                    }
                }();
            return t
        }
        ,
        $("#option-item-info").click(function() {
            var e, r, i, a, o, s;
            if (t = $("#item-info"),
            i = $.jStorage.get("currentItem"),
            o = $.jStorage.get("questionType"),
            a = i.rad ? "r" : i.kan ? "k" : i.voc ? "v" : void 0,
            t.is(":visible") && (t.data("question-type") !== o || t.data("id") !== a + i.id)) {
                if ($("#additional-content-load").show(),
                e = $("#item-info-col1"),
                r = $("#item-info-col2"),
                e.empty(),
                r.empty(),
                i.rad)
                    return s = "/json/radical/" + i.id,
                    $.getJSON(s, function(a) {
                        return a.mnemonic = n(a.mnemonic),
                        e.html("<section><h2>Name</h2>" + a.en + '</section><section class="user-synonyms"><h2>User Synonyms</h2></section>'),
                        r.html("<section><h2>Mnemonics</h2>" + a.mnemonic + '</section><section id="note-meaning"><h2>Name Note</h2></section>'),
                        UserSynonyms.load("radical", i.syn, i.id, !0),
                        Notes.add("radical", "meaning", i.id, a.meaning_note, $("#note-meaning")),
                        $("#all-info").hide(),
                        $("#additional-content-load").fadeOut(200),
                        t.data("id", "r" + i.id),
                        t.data("question-type", o)
                    }).fail(function() {
                        return $("#information-offline").show(),
                        t.hide()
                    });
                if (i.kan)
                    return s = "/json/kanji/" + i.id,
                    $.getJSON(s, function(a) {
                        var s, u, c, l, d, f;
                        l = function() {
                            switch (i.emph) {
                            case "kunyomi":
                                return i.kun;
                            case "onyomi":
                                return i.on;
                            case "nanori":
                                return i.nanori
                            }
                        }(),
                        a.meaning_mnemonic = n(a.meaning_mnemonic),
                        a.reading_mnemonic = n(a.reading_mnemonic),
                        a.meaning_hint = n(a.meaning_hint),
                        a.reading_hint = n(a.reading_hint),
                        f = "",
                        d = a.related;
                        for (c in d)
                            u = d[c],
                            s = u.custom_font_name ? '<i class="radical-' + u.custom_font_name + '"></i>' : /.png/i.test(u.rad) ? '<img src="https://cdn.wanikani.com/subjects/images/' + u.rad + '">' : u.rad,
                            f += '<li><a title="View radical information page" target="_blank" href="/radicals/' + u.slug + '"><span class="radical" lang="ja">' + s + "</span> " + u.en.split(",")[0] + "</li>";
                        return e.html('<section id="item-info-meaning"><h2>Meanings</h2>' + a.en + '</section><section class="user-synonyms"><h2>User Synonyms</h2></section><section id="item-info-reading"><h2>Important Readings (' + i.emph + ')</h2><span lang="ja">' + l + '</span></section><section id="related-items"><h2>Radical Combination</h2><ul class="radical">' + f + "</ul></section>"),
                        r.html('<section id="item-info-meaning-mnemonic"><h2>Meaning Mnemonic</h2>' + a.meaning_mnemonic + '<blockquote><h3><i class="icon-question-sign"></i> HINT</h3>' + a.meaning_hint + '</blockquote></section><section id="note-meaning"><h2>Meaning Note</h2></section><section id="item-info-reading-mnemonic"><h2>Reading Mnemonic</h2>' + a.reading_mnemonic + '<blockquote><h3><i class="icon-question-sign"></i> HINT</h3>' + a.reading_hint + '</blockquote></section><section id="note-reading"><h2>Reading Note</h2></section>'),
                        $("#item-info-meaning-mnemonic blockquote").text().trim().length > 0 && $("#item-info-meaning-mnemonic blockquote").hide(),
                        $("#item-info-reading-mnemonic blockquote").text().trim().length > 0 && $("#item-info-reading-mnemonic blockquote").hide(),
                        Notes.add("kanji", "meaning", i.id, a.meaning_note, $("#note-meaning")),
                        Notes.add("kanji", "reading", i.id, a.reading_note, $("#note-reading")),
                        UserSynonyms.load("kanji", i.syn, i.id, !0),
                        "meaning" === o ? $("#item-info-reading, #item-info-reading-mnemonic, #note-reading").hide() : $("#item-info-meaning, #item-info-meaning-mnemonic, #note-meaning, .user-synonyms").hide(),
                        $("#all-info").show(),
                        $("#additional-content-load").fadeOut(200),
                        t.data("id", "k" + i.id),
                        t.data("question-type", o)
                    }).fail(function() {
                        return $("#information-offline").show(),
                        t.hide()
                    });
                if (i.voc)
                    return s = "/json/vocabulary/" + i.id,
                    $.getJSON(s, function(a) {
                        var s, u, c, l, d, f, p;
                        a.meaning_explanation = n(a.meaning_explanation),
                        a.reading_explanation = n(a.reading_explanation),
                        f = "",
                        d = a.related;
                        for (l in d)
                            c = d[l],
                            f += '<li><a title="View kanji information page" target="_blank" href="/kanji/' + c.slug + '"><span class="kanji" lang="ja">' + c.kan + "</span> " + c.en + "</a></li>";
                        return s = 0 === a.sentences.length ? "<p>N/A</p>" : (u = function() {
                            var e, t, n, r;
                            for (n = a.sentences,
                            r = [],
                            e = 0,
                            t = n.length; e < t; e++)
                                p = n[e],
                                r.push('<div class="context-sentence-group"><p lang="ja">' + p[0] + "</p><p>" + p[1] + "</p></div>");
                            return r
                        }(),
                        u.join("")),
                        e.html('<section id="item-info-meaning"><h2>Meanings</h2>' + a.en + '</section><section class="user-synonyms"><h2>User Synonyms</h2></section><section id="item-info-reading"><h2>Reading</h2><span lang="ja">' + a.kana + '</span></section><section id="part-of-speech"><h2>Part of Speech</h2>' + a.part_of_speech + '</section><section id="related-items"><h2>Related Kanji</h2><ul class="kanji">' + f + "</ul></section>"),
                        r.html('<section id="item-info-meaning-mnemonic"><h2>Meaning Explanation</h2>' + a.meaning_explanation + '</section><section id="note-meaning"><h2>Meaning Note</h2></section><section id="item-info-reading-mnemonic"><h2>Reading Explanation</h2>' + a.reading_explanation + '</section><section id="note-reading"><h2>Reading Note</h2></section><section id="item-info-context-sentences"><h2>Context Sentence</h2>' + s + "</section>"),
                        Notes.add("vocabulary", "meaning", i.id, a.meaning_note, $("#note-meaning")),
                        Notes.add("vocabulary", "reading", i.id, a.reading_note, $("#note-reading")),
                        UserSynonyms.load("vocabulary", i.syn, i.id, !0),
                        "meaning" === o ? $("#item-info-reading, #item-info-reading-mnemonic, #note-reading").hide() : $("#item-info-meaning, #item-info-meaning-mnemonic, #note-meaning, .user-synonyms").hide(),
                        $("#all-info").show(),
                        $("#additional-content-load").fadeOut(200),
                        t.data("id", "v" + i.id),
                        t.data("question-type", o)
                    }).fail(function() {
                        return $("#information-offline").show(),
                        t.hide()
                    })
            }
        })
    }
    ,
    this.additionalContent.closeItemInfo = function() {
        if ($("#item-info").is(":visible"))
            return $("#information").hide().children().hide(),
            $("#option-item-info").removeClass()
    }
    ,
    this.additionalContent.enableButtons = function() {
        return $("#option-item-info").removeClass(),
        additionalContent.audio(audioAutoplay)
    }
    ,
    this.additionalContent.disableAudio = function() {
        return $("#option-audio").addClass("disabled"),
        $("#option-audio button").prop("disabled", "disabled")
    }
    ,
    this.additionalContent.disableItemInfo = function() {
        return $("#item-info").is(":visible") && ($("#information").hide(),
        $("#option-item-info").removeClass()),
        $("#option-item-info").addClass("disabled")
    }
    ,
    this.additionalContent.itemInfoAllButton = function() {
        var e;
        return e = $("#all-info"),
        e.click(function() {
            return $("html, body").animate({
                scrollTop: $("#additional-content").offset().top - 20
            }, 200),
            $("#item-info section").fadeIn(300),
            e.hide()
        })
    }
}
.call(this),
// answerChecker
function() {
    this.answerChecker = {},
    this.answerChecker.evaluate = function(e, t) {
        var n, r, i, a, o, s, u, c, l, d, f;
        if (i = [],
        s = [],
        a = $.jStorage.get("currentItem"),
        n = !1,
        l = !1,
        c = !1,
        o = !1,
        t = $.trim(t),
        "reading" === e && (t = t.replace("n", "\u3093")),
        $("#user-response").val(t),
        "reading" === e) {
            if (a.kan) {
                switch (a.emph) {
                case "onyomi":
                    i = a.on,
                    s = a.kun.concat(a.nanori);
                    break;
                case "kunyomi":
                    i = a.kun,
                    s = a.on.concat(a.nanori);
                    break;
                case "nanori":
                    i = a.nanori,
                    s = a.kun.concat(a.on)
                }
                o = answerChecker.checkIfOtherKanjiReading(t, s, i)
            } else
                a.voc && (i = a.kana);
            i.length > 1 && (c = !0),
            t = answerChecker.stringFormat(t);
            for (u in i)
                r = i[u],
                t === r && (l = !0,
                n = !0)
        } else {
            i = $.merge(a.en, a.syn),
            i.length > 1 && (c = !0),
            t = answerChecker.stringFormat(t);
            for (u in i)
                r = i[u],
                r = answerChecker.stringFormat(r),
                f = levenshteinDistance(r, t),
                d = answerChecker.distanceTolerance(r),
                f <= d && (l = !0),
                0 === f && (n = !0)
        }
        return {
            passed: l,
            accurate: n,
            multipleAnswers: c,
            exception: o
        }
    }
    ,
    this.answerChecker.checkIfOtherKanjiReading = function(e, t, n) {
        var r, i, a;
        a = !1;
        for (i in t)
            r = t[i],
            e === r.replace(/\..*/, "") && (a = !0);
        for (i in n)
            r = n[i],
            e === r && (a = !1);
        return a
    }
    ,
    this.answerChecker.isNonKanaPresent = function(e) {
        return e = "n" === e[e.length - 1] ? e.slice(0, -1) : e,
        /[^\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/.test(e)
    }
    ,
    this.answerChecker.isKanaPresent = function(e) {
        return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f]/.test(e)
    }
    ,
    this.answerChecker.stringFormat = function(e) {
        return e = e.toLowerCase().replace("-", " ").replace(".", "").replace("'", "").replace("/", ""),
        "s" === e.substr(-1) && (e = e.slice(0, -1)),
        e
    }
    ,
    this.answerChecker.distanceTolerance = function(e) {
        switch (e.length) {
        case 1:
        case 2:
        case 3:
            return 0;
        case 4:
        case 5:
            return 1;
        case 6:
        case 7:
            return 2;
        default:
            return 2 + 1 * Math.floor(e.length / 7)
        }
    }
}
.call(this),
// hotKeys
function() {
    this.hotKeys = {},
    this.hotKeys.keyBinds = function() {
        var e, t;
        return t = $("#user-response"),
        e = $("#answer-form button"),
        $(document).on("keydown.reviewScreen", function(n) {
            var r;
            if (r = n.metaKey || n.altKey || n.shiftKey || n.ctrlKey,
            $("#reviews").is(":visible") && !$('[class^="note-"] textarea').is(":focus") && !$(".user-synonyms input").is(":focus"))
                switch (n.keyCode) {
                case 8:
                    if (!t.is(":focus"))
                        return !1;
                    break;
                case 13:
                    if (t.is(":enabled") && !t.is(":focus"))
                        return t.focus(),
                        !1;
                    if (t.is(":disabled"))
                        return $(window).scrollTop(0),
                        e.trigger("click"),
                        t.prop("disabled", !1),
                        !1;
                    break;
                case 32:
                    if ($("#item-info").is(":visible") && !r)
                        return $("#all-info").trigger("click");
                    break;
                case 70:
                    if (t.is(":disabled") && !r)
                        return $("#option-item-info").trigger("click"),
                        !1;
                    break;
                case 74:
                    if (t.is(":disabled") && !r)
                        return $("audio").trigger("play"),
                        !1;
                    break;
                case 188:
                    if (!r)
                        return $("#option-last-items").trigger("click"),
                        !1
                }
        }),
        $(document).on("keypress.reviewScreen", function(e) {
            if (!$('[class^="note-"] textarea').is(":focus") && !$(".user-synonyms input").is(":focus"))
                switch (e.charCode) {
                case 47:
                    return $("#option-kana-chart").trigger("click"),
                    !1
                }
        })
    }
    ,
    this.hotKeys.load = function() {
        return hotKeys.keyBinds(),
        hotKeys.renderView()
    }
    ,
    this.hotKeys.renderView = function() {
        var e, t, n;
        return n = $("#hotkeys"),
        t = $("#hotkeys table"),
        e = $("#hotkeys-header span"),
        $("#hotkeys a").click(function() {
            return n.trigger("click"),
            !1
        }),
        n.click(function() {
            return t.is(":visible") ? (t.hide(),
            e.hide(),
            $("footer").css("z-index", "0")) : ($("footer").css("z-index", "100"),
            t.show(),
            e.show())
        })
    }
}
.call(this),
// kanaChart
function() {
    this.kanaChart = {},
    this.kanaChart.init = function() {
        var e, t, n;
        return n = $("#user-response"),
        e = $("#kana-chart ol li"),
        t = $("#user-response"),
        $("#kana-chart ol li").click(function() {
            return "backspace" !== $(this).attr("class") || t.is(":disabled") ? "backspace" !== $(this).attr("class") && (e.not(".backspace").removeClass(),
            $(this).addClass("active").parent().parent().children("ul").hide(),
            $("#chart-" + $(this).attr("id")[0]).fadeIn(300),
            $(window).scrollTop(t.offset().top)) : void n.val(n.val().slice(0, -1))
        }),
        $("#kana-chart ul li:not(.empty)").click(function() {
            if (!n.is(":disabled"))
                return n.val(n.val() + $(this).children("span").text())
        })
    }
}
.call(this),
// lastItems
function() {
    this.lastItems = {},
    this.lastItems.addToList = function(e) {
        var t;
        return t = $.jStorage.get("lastItems") || [],
        t.push(e),
        $.jStorage.set("lastItems", t.slice(Math.max(t.length - 10, 0))),
        $.jStorage.setTTL("lastItems", 36e5)
    }
    ,
    this.lastItems.clear = function() {
        return $("#last-items-list ul").empty()
    }
    ,
    this.lastItems.disableSessionStats = function() {
        return $("#last-items").is(":visible") && ($("#information").hide(),
        $("#option-last-items").removeClass()),
        $("#last-items").addClass("disabled")
    }
    ,
    this.lastItems.itemInfoKanji = function(e) {
        var t, n;
        return n = lastItems.listAttributes(e.srs_level, e.stats),
        t = '<span class="srs-status" title="' + n.leveledTitle + '">' + n.srs,
        '<li class="pure-u-1-5 kanji"><div class="item"><a href="/kanji/' + e.slug + '" target="_blank" title="View kanji information"><h3 lang="ja">' + e.kan + '</h3></a><div class="add-info">' + t + "</div></div></li>"
    }
    ,
    this.lastItems.generate = function(e) {
        var t, n, r, i, a;
        return r = $("#last-items-list > .pure-u-1 > ul"),
        a = lastItems.listItemAttributes(e),
        e.rad && (e.custom_font_name ? e.rad = '<i class="radical-' + e.custom_font_name + '"></i>' : /.png/i.test(e.rad) && (e.rad = '<img src="https://cdn.wanikani.com/subjects/images/' + e.rad + '" />')),
        t = e.rad ? e.rad : e.kan ? e.kan : e.voc,
        i = $("<li></li>", {
            "class": a.correctClass + " " + a.itemTypeClass
        }).appendTo(r),
        n = $("<a></a>", {
            href: "/" + a.itemTypeClass + "/" + e.slug,
            target: "_blank"
        }).appendTo(i),
        $("<div></div>", {}).appendTo(n).html('<ul><li lang="ja" title="Characters">' + t + '</li><li lang="ja" title="A reading of the item">' + (e.ja || "") + '</li><li title="A meaning or name of the item">' + e.en + '</li><li title="SRS level change">' + a.srsTitle + "</li></ul>")
    }
    ,
    this.lastItems.listItemAttributes = function(e) {
        var t, n, r;
        return t = 1 === e.srs_level && 1 === e.stats.meaning_correct ? "incorrect" : 1 === e.stats.meaning_current_streak || 1 === e.stats.reading_current_streak ? "incorrect" : "correct",
        r = function() {
            switch (e.srs_level) {
            case 1:
            case 2:
            case 3:
            case 4:
                return "Apprentice";
            case 5:
            case 6:
                return "Guru";
            case 7:
                return "Master";
            case 8:
                return "Enlightened";
            case 9:
                return "Burned"
            }
        }(),
        n = e.rad ? "radicals" : e.kan ? "kanji" : "vocabulary",
        {
            correctClass: t,
            srsTitle: r,
            itemTypeClass: n
        }
    }
    ,
    this.lastItems.getlastItems = function() {
        var e, t, n, r;
        n = $.jStorage.get("lastItems") || [],
        r = "/review/last-items?";
        for (e in n)
            t = n[e],
            r += "list[]=" + t.substring(1) + "&";
        return $.getJSON(r, function(t) {
            var n;
            if (0 === t.length)
                $("#last-items-list .pure-u-1").html('<div class="no-data">You have not recently completed any items in your reviews</div>');
            else
                for (e in t)
                    n = t[e],
                    lastItems.generate(n);
            return loadingScreen.remove()
        }).fail(function() {
            return $("#last-items").hide(),
            $("#information-offline").show()
        })
    }
    ,
    this.lastItems.load = function() {
        return $("#last-session").show(),
        lastItems.clear(),
        lastItems.getlastItems(),
        $("#additional-content-load").fadeOut(200)
    }
}
.call(this),
// loadingScreen
function() {
    this.loadingScreen = {},
    this.loadingScreen.remove = function() {
        return $("#loading").delay(1500).fadeOut(300)
    }
}
.call(this),
// popover
function() {
    this.popover = {},
    this.popover.load = function() {
        return popover.info()
    }
    ,
    this.popover.info = function() {
        var e, t;
        return t = $(".apprentice > ul > li, .guru > ul > li, .master > ul > li, .enlightened > ul > li, .burned > ul > li"),
        e = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent),
        $(".apprentice a, .guru a, .master a, .enlightened a, .burned a").click(function(t) {
            if (e)
                return t.preventDefault()
        }),
        t.hover(function() {
            var e, t, n, r, i, a, o, s;
            return i = $(this).height() + 4,
            a = $(window).width() - $(this).offset().left,
            r = $(window).height() - $(this).offset().top,
            n = $("<div></div>", {
                "class": "hover"
            }).appendTo(this),
            $("<ul></ul>").appendTo($(this).children("div")),
            $("<li></li>", {
                text: $(this).data("en")
            }).appendTo($(this).find("ul")),
            $("<li></li>", {
                text: $(this).data("ja")
            }).appendTo($(this).find("ul")),
            $("<li></li>", {
                text: $(this).data("mc")
            }).appendTo($(this).find("ul")),
            $("<li></li>", {
                text: $(this).data("rc")
            }).appendTo($(this).find("ul")),
            o = a > 200 ? (e = "left-side",
            "auto") : (e = "right-side",
            "0"),
            s = r < 100 ? (t = "down-arrow",
            -1 * (n.height() + i / 2)) : (t = "up-arrow",
            i),
            n.css({
                top: s,
                right: o
            }).addClass(t + " " + e)
        }, function() {
            return $(this).children("div").remove()
        })
    }
}
.call(this),
// Review Loop
function() {
    var e;
    jQuery(function() {
        if ($("#reviews").length)
            return kanaChart.init(),
            additionalContent.load(),
            additionalContent.itemInfoAllButton(),
            e.load(),
            e.processAnswer(),
            e.buttons(),
            e.listenSubmitFailedQueue(),
            e.counters(),
            e.listenRenderView(),
            e.listenWrapUp(),
            $("#user-response").click(function() {
                return $("html, body").scrollTop(0)
            }),
            hotKeys.load(),
            idleTime.load()
    }),
    e = {
        load: function() {
            return $.jStorage.deleteKey("r/wrap-up"),
            e.submitFailedQueue(e.getQueueAndAssignQuestion)
        },
        getQueueAndAssignQuestion: function() {
            var t;
            return t = "/review/queue",
            $.getJSON(t, function(t) {
                var n;
                return n = t.splice(0, 10),
                $.jStorage.set("reviewQueue", t),
                $.jStorage.set("activeQueue", n),
                n.length > 0 ? ($("#reviews").is(":hidden") && $("#reviews").show(),
                e.nextQuestion()) : e.goToSummary()
            }).done(function() {
                return e.countersReset()
            })
        },
        answerException: function(e) {
            var t, n;
            return t = $("#additional-content"),
            n = $.jStorage.get("questionType"),
            $("#answer-exception").remove(),
            e.passed ? e.accurate && e.multipleAnswers ? t.append($('<div id="answer-exception"><span>Did you know this item has multiple possible ' + n + "s?</span></div>").addClass("animated fadeInUp")) : e.accurate ? void 0 : t.append($('<div id="answer-exception"><span>Your answer was a bit off. Check the ' + n + " to make sure you are correct</span></div>").addClass("animated fadeInUp")) : t.append($('<div id="answer-exception"><span>Need help? View the correct ' + n + " and mnemonic</span></div>").addClass("animated fadeInUp"))
        },
        buttons: function() {
            var t;
            return t = $("#user-response"),
            $("#submit-errors").hover(function() {
                return $(this).children("#submit-errors-ext-text").css("display", "inline")
            }, function() {
                return $(this).children("#submit-errors-ext-text").css("display", "none")
            }),
            $("#option-item-info").click(function() {
                if (t.is(":disabled"))
                    return $("#answer-exception").remove()
            }),
            $("#submit-errors").click(function() {
                return e.submitFailedQueue()
            })
        },
        counters: function() {
            return e.countersReset(),
            $.jStorage.listenKeyChange("questionCount", function() {
                var e, t, n;
                return t = $.jStorage.get("questionCount"),
                n = $.jStorage.get("wrongCount"),
                e = 0 === t ? 100 : Math.round((t - n) / t * 100),
                $("#correct-rate").html(e)
            }),
            $.jStorage.listenKeyChange("completedCount", function() {
                var e, t, n;
                return e = parseInt($("#completed-count").text()) + parseInt($("#available-count").text()),
                t = $.jStorage.get("completedCount"),
                n = Math.round(t / e * 100),
                n = isNaN(n) ? 0 : n,
                $("#completed-count").html(t),
                $("#progress-bar #bar").css("width", n + "%")
            }),
            $.jStorage.listenKeyChange("activeQueue", function() {
                var e;
                return e = $.jStorage.get("reviewQueue").length + $.jStorage.get("activeQueue").length,
                $("#available-count").html(e)
            })
        },
        countersIncr: function(e) {
            var t, n;
            return e || (n = $.jStorage.get("wrongCount") + 1,
            $.jStorage.set("wrongCount", n)),
            t = $.jStorage.get("questionCount") + 1,
            $.jStorage.set("questionCount", t)
        },
        countersReset: function() {
            return $.jStorage.set("questionCount", 0),
            $.jStorage.set("completedCount", 0),
            $.jStorage.set("wrongCount", 0)
        },
        nextQuestion: function() {
            var t, n, r, i;
            return t = $.jStorage.get("activeQueue") || [],
            r = $.jStorage.get("reviewQueue") || [],
            i = $.jStorage.get("r/wrap-up"),
            0 !== t.length || !i && 0 !== r.length ? e.randomQuestion() : (n = i ? {} : {
                empty_queue: !0
            },
            e.redirectIfProcessed(n))
        },
        redirectIfProcessed: function(t) {
            return setTimeout(function() {
                return e.processingAttempts++,
                console.log(e.processingAttempts),
                e.lastItemProcessed || 20 === e.processingAttempts ? e.submitFailedQueue(e.goToSummary, t) : e.redirectIfProcessed(t)
            }, 100)
        },
        processingAttempts: 0,
        goToSummary: function(e) {
            var t;
            return t = "/review",
            null != e && (t += "/?" + $.param(e)),
            window.location = t
        },
        processAnswer: function() {
            var t, n, r, i, a;
            return r = $("#answer-form button"),
            i = $("#answer-form form"),
            a = $("#user-response"),
            t = function() {
                var t, n, r, o;
                return r = answerChecker.evaluate($.jStorage.get("questionType"), a.val()),
                $("html, body").animate({
                    scrollTop: 0
                }, 200),
                r.exception ? (t = $.jStorage.get("currentItem"),
                i = $("#answer-form form"),
                o = $("#reviews"),
                i.is(":animated") || (o.css("overflow-x", "hidden"),
                n = function() {
                    switch (t.emph) {
                    case "onyomi":
                        return "on'yomi";
                    case "kunyomi":
                        return "kun'yomi";
                    case "nanori":
                        return "nanori"
                    }
                }(),
                i.effect("shake", {}, 400, function() {
                    return o.css("overflow-x", "visible"),
                    i.append($('<div id="answer-exception" class="answer-exception-form"><span>WaniKani is looking for the ' + n + " reading</span></div>").addClass("animated fadeInUp"))
                }).find("input").focus()),
                !1) : (a.blur(),
                WaniKani.iosPatch.touchable ? setTimeout(e.renderPostAnswer, 200, r) : e.renderPostAnswer(r),
                !1)
            }
            ,
            n = function() {
                return $("#answer-exception").remove(),
                e.nextQuestion(),
                additionalContent.closeItemInfo(),
                !1
            }
            ,
            i.delegate("input:text", "keydown", function(e) {
                if (13 === e.which)
                    return r.trigger("click"),
                    !1
            }),
            r.on("click", function(e) {
                return e.preventDefault(),
                a.is(":disabled") ? n() : "reading" === $.jStorage.get("questionType") && answerChecker.isNonKanaPresent(a.val()) || "meaning" === $.jStorage.get("questionType") && answerChecker.isKanaPresent(a.val()) || 0 === a.val().length ? (i.is(":animated") || ($("#reviews").css("overflow-x", "hidden"),
                i.effect("shake", {}, 400, function() {
                    return $("#reviews").css("overflow-x", "visible")
                })),
                !1) : 0 !== a.val().length ? t() : void 0
            })
        },
        processCompleted: function(t, n) {
            var r, i, a, o, s, u, c, l, d;
            if (l = "r" === t.charAt(0),
            n.mc >= 1 && n.rc >= 1 || l && n.mc >= 1) {
                if (a = $.jStorage.get("currentItem"),
                r = $.jStorage.get("activeQueue"),
                d = $.jStorage.get("reviewQueue"),
                n.mi = n.mi || 0,
                n.ri = n.ri || 0,
                l && (n.ri = ""),
                i = $.jStorage.get("completedCount") + 1,
                $.jStorage.set("completedCount", i),
                lastItems.addToList(t),
                $.jStorage.get("r/srsIndicator") && Srs.load($.jStorage.get(t), a.srs),
                c = $.grep(r, function(e) {
                    return e.id !== a.id || !(a.rad && e.rad || a.kan && e.kan || a.voc && e.voc)
                }),
                !$.jStorage.get("r/wrap-up") && 0 !== d.length) {
                    for (s = 11 - c.length; s -= 1; )
                        c.push(d.pop());
                    c.filter(function(e) {
                        return e
                    })
                }
                return $.jStorage.set("activeQueue", c),
                $.jStorage.set("reviewQueue", d),
                $.jStorage.deleteKey(t),
                u = t.substring(1),
                o = {},
                o[u] = [n.mi, n.ri],
                e.lastItemProcessed = !1,
                $.ajax({
                    url: "/json/progress",
                    type: "PUT",
                    data: o,
                    dataType: "json"
                }).fail(function(t, r, i) {
                    var a;
                    return a = $.jStorage.get("submitFailedQueue") || [],
                    a.push({
                        id: u,
                        mi: n.mi,
                        ri: n.ri
                    }),
                    $.jStorage.set("submitFailedQueue", a, {
                        ttl: 36e5
                    }),
                    WaniKani.exceptions.submitErrorReport("reviews", "processCompleted", i, t, r, params, e.errorDetails())
                }).done(function() {
                    return e.lastItemProcessed = !0
                })
            }
        },
        randomQuestion: function() {
            var e, t, n, r;
            return n = $.jStorage.get("activeQueue"),
            e = n[Math.floor(Math.random() * n.length)],
            t = e.kan ? $.jStorage.get("k" + e.id) : e.voc ? $.jStorage.get("v" + e.id) : void 0,
            r = e.rad ? "meaning" : null === t || "undefined" == typeof t.mc && "undefined" == typeof t.rc ? ["meaning", "reading"][Math.floor(2 * Math.random())] : t.mc >= 1 ? "reading" : t.rc >= 1 ? "meaning" : void 0,
            $.jStorage.set("questionType", r),
            $.jStorage.set("currentItem", e)
        },
        renderPostAnswer: function(t) {
            return t.passed ? $("#answer-form fieldset").addClass("correct") : $("#answer-form fieldset").addClass("incorrect"),
            $("#user-response").prop("disabled", !0),
            additionalContent.enableButtons(),
            lastItems.disableSessionStats(),
            e.countersIncr(t.passed),
            e.answerException(t),
            e.updateLocalItemStat(t.passed)
        },
        listenRenderView: function() {
            return $.jStorage.listenKeyChange("currentItem", function(e) {
                var t, n, r;
                return t = $.jStorage.get(e),
                n = $("#user-response"),
                r = $.jStorage.get("questionType"),
                $("html, body").animate({
                    scrollTop: 0
                }, 200),
                additionalContent.disableItemInfo(),
                additionalContent.disableAudio(),
                Srs.remove(),
                $("#answer-form fieldset").removeClass(),
                n.prop("disabled", !1).val("").focus(),
                wanakana.unbind(n[0]),
                "reading" === r && wanakana.bind(n[0]),
                n.val(""),
                t.rad ? (t.custom_font_name ? $("#character span").html('<i class="radical-' + t.custom_font_name + '"></i>') : /.png/i.test(t.rad) ? $("#character span").html('<img src="https://cdn.wanikani.com/subjects/images/' + t.rad + '">') : $("#character span").html(t.rad),
                $("#character").removeClass().addClass("radical"),
                $("#question-type").removeClass().addClass(r),
                $("#question-type h1").html("Radical <strong>Name</strong>")) : t.kan ? ($("#character span").html(t.kan),
                $("#character").removeClass().addClass("kanji"),
                $("#question-type").removeClass().addClass(r),
                $("#question-type h1").html("Kanji <strong>" + r + "</strong>")) : t.voc && ($("#character span").html(t.voc),
                $("#character").removeClass().addClass("vocabulary"),
                $("#question-type").removeClass().addClass(r),
                $("#question-type h1").html("Vocabulary <strong>" + r + "</strong>")),
                "meaning" === r ? n.removeAttr("lang").attr("placeholder", "Your Response") : n.attr({
                    lang: "ja",
                    placeholder: "\u7b54\u3048"
                }),
                loadingScreen.remove()
            })
        },
        submitFailedQueue: function(t, n) {
            var r, i, a, o;
            if (o = $.jStorage.get("submitFailedQueue") || [],
            o.length > 0) {
                r = {};
                for (i in o)
                    a = o[i],
                    r[a.id] = [a.mi, a.ri];
                return $.ajax({
                    url: "/json/progress",
                    type: "PUT",
                    data: r,
                    dataType: "json"
                }).fail(function(t, n, r) {
                    return $("#timeout").show(),
                    $("#timeout-session-end").show(),
                    idleTime.view(),
                    $("#timeout-idle").hide(),
                    WaniKani.exceptions.submitErrorReport("reviews", "submitFailedQueue", r, t, n, url, e.errorDetails())
                }).done(function() {
                    return $.jStorage.deleteKey("submitFailedQueue"),
                    "function" == typeof t ? t(n) : void 0
                })
            }
            return "function" == typeof t ? t(n) : void 0
        },
        updateLocalItemStat: function(t) {
            var n, r, i, a, o;
            return n = $.jStorage.get("currentItem"),
            a = $.jStorage.get("questionType"),
            r = n.rad ? "r" : n.kan ? "k" : "v",
            r += n.id,
            i = $.jStorage.get(r) || {},
            "meaning" === a ? t ? i.mc = 1 : i.mi = "undefined" == typeof i.mi ? 1 : i.mi + 1 : t ? i.rc = 1 : i.ri = "undefined" == typeof i.ri ? 1 : i.ri + 1,
            o = $.jStorage.set(r, i),
            $.jStorage.setTTL(r, 72e5),
            e.processCompleted(r, o)
        },
        listenSubmitFailedQueue: function() {
            return $.jStorage.listenKeyChange("submitFailedQueue", function(e, t) {
                switch (t) {
                case "deleted":
                    return !1;
                case "updated":
                    return $("#timeout").show(),
                    $("#timeout-session-end").show(),
                    idleTime.view(),
                    $("#timeout-idle").hide()
                }
            })
        },
        listenWrapUp: function() {
            return $.jStorage.deleteKey("r/wrap-up"),
            $.jStorage.listenKeyChange("activeQueue", function(e, t) {
                var n;
                if ($.jStorage.get("r/wrap-up"))
                    switch (t) {
                    case "updated":
                        return n = ($.jStorage.get("activeQueue") || []).length,
                        $("#wrap-up-countdown").text(n)
                    }
            })
        },
        errorDetails: function() {
            return {
                failed_queue: $.jStorage.get("submitFailedQueue"),
                review_queue_size: $.jStorage.get("reviewQueue").length,
                active_queue_size: $.jStorage.get("activeQueue").length
            }
        }
    }
}
.call(this),
// Srs
function() {
    this.Srs = {},
    this.Srs.load = function(e, t) {
        return Srs.newSrs(e, t)
    }
    ,
    this.Srs.name = function(e) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
            return "apprentice";
        case 5:
        case 6:
            return "guru";
        case 7:
            return "master";
        case 8:
            return "enlighten";
        case 9:
            return "burn"
        }
    }
    ,
    this.Srs.newSrs = function(e, t) {
        var n, r, i, a, o, s;
        return o = (e.mi || 0) + (e.ri || 0),
        0 === o ? (n = Srs.name(t + 1),
        i = "srs-up",
        a = "Your item has leveled up in the spaced repetition system") : (r = t >= 5 ? 2 * Math.round(o / 2) : 1 * Math.round(o / 2),
        n = t - r < 1 ? 1 : t - r,
        n = Srs.name(n),
        i = "srs-down",
        a = "Your item has leveled down in the spaced repetition system"),
        s = $("<div></div>", {
            "class": "srs"
        }).appendTo("#question-type"),
        $("<div></div>", {
            "class": i + " srs-" + n + " animated fadeInUp",
            title: a
        }).appendTo(s)
    }
    ,
    this.Srs.remove = function() {
        return $(".srs").remove()
    }
}
.call(this),
// Summary Page
function() {
    var e;
    jQuery(function() {
        if ($("#reviews-summary").length)
            return e.load(summaryData),
            window.history.replaceState({}, document.getElementsByTagName("title")[0].innerHTML, "/review")
    }),
    e = {
        load: function(t) {
            return e.get(t)
        },
        get: function(t) {
            var n, r, i, a, o, s, u, c, l, d, f, p, h, m, g, y, v, b;
            return e.processItem("radicals", t.incorrect.radicals, "incorrect"),
            e.processItem("kanji", t.incorrect.kanji, "incorrect"),
            e.processItem("vocabulary", t.incorrect.vocabulary, "incorrect"),
            e.processItem("radicals", t.correct.radicals, "correct"),
            e.processItem("kanji", t.correct.kanji, "correct"),
            e.processItem("vocabulary", t.correct.vocabulary, "correct"),
            p = $("#incorrect .apprentice li").length,
            m = $("#incorrect .guru li").length,
            y = $("#incorrect .master li").length,
            i = $("#correct .apprentice li").length,
            u = $("#correct .guru li").length,
            l = $("#correct .master li").length,
            s = $("#correct .enlightened li").length,
            a = $("#correct .burned li").length,
            v = t.incorrect.radicals.length,
            g = t.incorrect.kanji.length,
            b = t.incorrect.vocabulary.length,
            d = t.correct.radicals.length,
            c = t.correct.kanji.length,
            f = t.correct.vocabulary.length,
            h = p + m + y,
            o = i + u + l + s + a,
            n = o + h === 0 ? 100 : Math.round(o / (o + h) * 100),
            0 === h && $("#incorrect").parent().hide(),
            0 === o && $("#correct").parent().hide(),
            h > 0 && $("#incorrect").show(),
            o > 0 && $("#correct").show(),
            $("#incorrect:visible, #correct:visible").find("li").parent().parent().addClass("active"),
            0 === t.queue_count ? (r = $("#start-session a"),
            r.click(function(e) {
                return e.preventDefault()
            }).addClass("disabled").attr("title", "No reviews in queue")) : $("#review-queue-count").text(t.queue_count),
            $("#review-queue-count").text(t.queue_count),
            $("#incorrect h2 strong").text(h),
            $("#incorrect .apprentice strong").text(p),
            $("#incorrect .guru strong").text(m),
            $("#incorrect .master strong").text(y),
            $("#correct h2 strong").text(o),
            $("#correct .apprentice strong").text(i),
            $("#correct .guru strong").text(u),
            $("#correct .master strong").text(l),
            $("#correct .enlightened strong").text(s),
            $("#correct .burned strong").text(a),
            t.last_review_date ? ($("#last-session-date time").attr("datetime", t.last_review_date),
            $("#last-session-date time").timeago()) : $("#last-session-date").hide(),
            $("#review-stats-answered-correctly .review-stats-value").text(n),
            $("#review-stats-radicals").children(".review-stats-value").text(d).parent().find(".review-stats-total span").text(d + v),
            $("#review-stats-kanji").children(".review-stats-value").text(c).parent().find(".review-stats-total span").text(c + g),
            $("#review-stats-vocabulary").children(".review-stats-value").text(f).parent().find(".review-stats-total span").text(f + b),
            popover.load()
        },
        processItem: function(e, t, n) {
            var r, i, a, o, s, u, c;
            c = [];
            for (r in t)
                i = t[r],
                o = function() {
                    switch (i.srs_level) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        return "#" + n + " .apprentice ul";
                    case 5:
                    case 6:
                        return "#" + n + " .guru ul";
                    case 7:
                        return "#" + n + " .master ul";
                    case 8:
                        return "#" + n + " .enlightened ul";
                    case 9:
                        return "#" + n + " .burned ul"
                    }
                }(),
                s = Math.round(i.stats.meaning_correct / (i.stats.meaning_correct + i.stats.meaning_incorrect) * 100),
                u = i.kan || i.voc ? Math.round(i.stats.reading_correct / (i.stats.reading_correct + i.stats.reading_incorrect) * 100) : void 0,
                "radicals" === e && (i.custom_font_name ? i.rad = '<i class="radical-' + i.custom_font_name + '"></i>' : /.png/i.test(i.rad) && (i.rad = '<img src="https://cdn.wanikani.com/subjects/images/' + i.rad + '" />')),
                a = i.rad ? i.rad : i.kan ? i.kan : i.voc,
                $("<li></li>", {
                    "class": e,
                    "data-en": i.en,
                    "data-ja": i.ja,
                    "data-mc": s,
                    "data-rc": u
                }).appendTo(o),
                c.push($("<a></a>", {
                    lang: "ja",
                    href: "/" + e + "/" + i.slug
                }).html(a).appendTo(o + " li:last-child"));
            return c
        }
    }
}
.call(this),
// Empty Function
function() {}
.call(this);
