import { Base } from 'base';
import { CursorType } from 'enums/cursor';
import { AutocompleteProps } from './interface';

export const Autocomplete = (props: AutocompleteProps) => {
	return <Base cursor={props.cursor} placeholder={props.placeholder} fullWidth={props.fullWidth} />;
};

Autocomplete.defaultProps = {
	cursor: CursorType.Text,
	placeholder: 'Enter your placeholder',
	fullWidth: false,
};
