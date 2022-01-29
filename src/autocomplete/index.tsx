import { Base, _defaultProps } from 'base';
import { CursorType } from 'enums/cursor';
import { AutocompleteProps } from './interface';

export const Autocomplete = (props: AutocompleteProps) => {
	return <Base {...props} />;
};

Autocomplete.defaultProps = {
	..._defaultProps,
	cursor: CursorType.Text,
	placeholder: 'Enter your placeholder',
	fullWidth: false,
};
