import Option from 'Option.js';
/**
 * @extends Option
 */
export default class NumberOption extends Option {
	constructor( config ) {
		super( config, 'Number' );
	}

	UI() {
		this.numberInput = new OO.ui.NumberInputWidget( {
			name: this.name,
			text: this.label,
			input: { value: this.value },
			min: this.values.min,
			max: this.values.max
		} );

		return new OO.ui.FieldLayout( this.numberInput, {
			help: this.helptip,
			helpInline: this.helpInline,
			align: 'inline'
		} );
	}

	getUIvalue() {
		return this.numberInput.getValue();
	}
}