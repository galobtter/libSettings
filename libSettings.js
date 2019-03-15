/**
 * @license MIT
 * MIT License
 * Copyright (c) 2019 Galobtter
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
'use strict';

const libSettings = {};

/* Internal console/error message functions. */

/**
 * @func
 * @param {string} message
 * @return {string} Message with '[libSettings]' prefix.
*/
libSettings.buildMessage = function ( message ) {
	return ( `[libSettings] ${message}` );
};

/**
 * @func
 * @param {string} message
*/
libSettings.log = function ( message ) {
	console.log( libSettings.buildMessage( message ) );
};

/**
 * @func
 * @param {string} message
*/
libSettings.warn = function ( message ) {
	console.warn( libSettings.buildMessage( message ) );
};

/**
 * @func
 * @param {boolean} condition
 * @param {string} message
*/

libSettings.assert = function ( condition, message ) {
	console.assert( condition, libSettings.buildMessage( message ) );
};

/**
 * @func
 * @param {string} message
 * @param {string} [errorType = 'Error']
*/
libSettings.error = function ( message, errorType = 'Error' ) {
	// FIXME Use console.error?
	throw new window[ errorType ]( libSettings.buildMessage( message ) );
};

/** Used so that functions can take a parameter regarding whether
 * an error should be raised, or a warning logged.
 * @func
 * @param {string} message
 * @param {('warn'|'error')} errorLevel
 * @param {string} errorType
*/
libSettings.throw = function ( message, errorLevel, errorType ) {
	switch ( errorLevel ) {
		case 'warn':
			libSettings.warn( message );
			break;
		case 'error':
			libSettings.error( message, errorType );
	}
};

/** Represents an option.
 * @abstract
 * @param {Object} config
 * @property {string} config.name Name of option. (required)
 * @property {*} config.defaultValue (required)
 * @property {string} config.text Text displayed in settings. (required)
 * @property {string} config.helptip Help text shown in settings.
 * @property {Array} config.possibleValues Either [ <value>, .. ] or
 *  [ [ <InternalValue>, <ValueDisplayedInSettings> ], .. ].
 *  Value is validated against possibleValues.
 * @param {string} type Type of option. Should be same as name of extending class minus
 *  Option at the end (e.g "Color" for "ColorOption" class)
 * @param {...string} basetypes Type(s) to validate against (Defined by extending classes).
*/

libSettings.Option = class {
	constructor( config, type, basetypes ) {
		this.name = config.name;
		this.defaultValue = config.defaultValue;
		this.possibeValues = config.possibleValues;
		switch ( typeof this.possibleValues ) {
			case 'Array':
				this.possibleKeys = this.possibleValues;
				this.possibleSettingsVal = this.possibleValues;
				break;
			case 'Object':
				this.possibleKeys = this.possibleValues.keys();
				this.possibleSettingsVal = this.possibleValues.values();
		}
		this.text = config.text;
		this.type = type;
		this.basetypes = basetypes;
		this.value = this.defaultValue;
		this.validate( this.defaultValue, 'error' );
	}

	validate( value, errorLevel ) {
		// Check type
		if (
			this.basetypes &&
			!this.basetypes.some( ( basetype ) => typeof value === basetype )
		) {
			libSettings.throw( `Value of ${this.name}  does not have one of the type(s) [${this.basetype}].`, errorLevel, 'TypeError' );
			return false;
		}

		// Check if in possibleValues
		if ( this.possibleKeys.indexOf( value ) === -1 ) {
			libSettings.throw( `Value of option ${this.name}, ${value}, is not in [${this.possibleKeys}].`, errorLevel );
			return false;
		}

		return true;
	}

	/**
	 * Set option value.
	 * @param {*} value
	 */
	setValue( value ) {
		if ( this.validate( value ) ) {
			this.value = value;
		} else {
			libSettings.warn( `Validation of the value of ${this.name}, failed, so the default setting of ${this.defaultValue} has been used.` );
			this.value = this.defaultValue;
		}
	}

	/**
	 * Get option value.
	 * @return {*}
	 */
	getValue() {
		return this.value;
	}

	/**
	 * Build UI.
	 * @return {OO.ui.element}
	 */
	buildUI() {
		return libSettings.error( `buildUI not defined by extending class ${this.type}Option.` );
	}
};

/**
 * @extends libSettings.Option
 */
libSettings.BooleanOption = class extends Option { /* eslint-disable-line no-unused-vars */
	constructor( config ) {
		super( config, 'Boolean', 'boolean' );
	}

	buildUI() {
		const checkbox = new OO.ui.CheckboxInputWidget( {
			name: this.name,
			selected: this.getValue()
		} );
		checkbox.on( 'change', this.setValue( !this.getValue() ) );
		return checkbox;
	}
};

/**
 * Use mw.widgets.DateInputWidget
 * @extends libSettings.Option
 */
libSettings.DateOption = class extends libSettings.Option { /* eslint-disable-line no-unused-vars */
	constructor( config ) {
		super( config, 'Date', 'Date' );
	}
};
