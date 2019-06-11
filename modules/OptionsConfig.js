/**
 * This class provides the only methods for interacting with OptionsConfig
 * for safety.
 * @param {Array.<Page>} config
*/
export default class OptionsConfig {
	constructor( config ) {
		this.config = config;
		/**
		 * this.options is a single level object of {option.name: option,..}
 	 	 * which allows options can be easily and efficiently iterated.
	 	 * this.options is an implementation detail of traverse, and retrieveProperty
	 	 * and should not be depended on (only access optionsConfig through functions).
		 */
		this.options = this.depthCopyTraverse();
	}

	/**
	 * This.config shouldn't be modified. Only options should be modified, using
	 * traverse to access each option.
	 * Don't access this.config directly; instead, use getConfig, if necessary to access.
	 * (the methods given below should likely suffice instead)
	 * getting should only be used to find information about this.config, not for modification.
	 * @returns {Object}
	*/
	getConfig() {
		return this.config;
	}

	/**
	 *
	 * @param {function} func
	 * @param {boolean} ignoreHidden
	 * @return {Object}
	 */
	depthCopyTraverse( func, ignoreHidden ) {
		const options = {};
		const copy = function ( option ) {
			options[ option.name ] = option;
		};
		this.config.forEach( ( page ) =>
			( page.hide && ignoreHidden ) ?
				undefined :
				page.traverse( copy, ignoreHidden )
		);
		return options;
	}

	/**
	 * Run a function on every option.
	 * @param {Function} func
	*/
	traverse( func ) {
		for ( const optionName in this.options ) {
			func( this.options[ optionName ] );
		}
	}

	/**
	 * Retrieve a property from every option.
	 * For example, you can retrieve the default value of every option
	 * using retrieveProperty( 'defaultValue' ).
	 * @param {string} propertyName
	 * @returns {Object} {option.name: option.propertyName,...}
	 */
	retrieveProperty( propertyName ) {
		const optionProperties = {};
		for ( const optionName in this.options ) {
			const option = this.options[ optionName ];
			optionProperties[ optionName ] = option[ propertyName ];
		}
		return optionProperties;
	}

	/**
	 * Update's every option's property.
	 * @param {string} propertyName
	 * @param {Object} newPropertyValues {option.name: newPropertyValue,...}
	 */
	updateProperty( propertyName, newPropertyValues ) {
		for ( const optionName in newPropertyValues ) {
			const newPropertyValue = newPropertyValues[ optionName ];
			const option = this.options[ optionName ];
			if ( option ) {
				option[ propertyName ] = newPropertyValue;
			}
		}
	}
}
