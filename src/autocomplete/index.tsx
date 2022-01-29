import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';
import IF from 'helpers/if';
import { InputProps } from 'interfaces/input';
import { v4 as uuidv4 } from 'uuid';

/** Interface */
interface AutocompleteProps extends InputProps {
	id: string;
	items: string[];
	label: string | null;
	isRequired: boolean;
}

/** Component */
export const Autocomplete = (props: AutocompleteProps) => {
	return (
		<FormControl
			width={props.width}
			maxWidth={props.fullWidth ? 'auto' : props.maxWidth}
			isRequired={props.isRequired}
		>
			<IF condition={props.label !== null}>
				<FormLabel htmlFor={props.id}>{props.label}</FormLabel>
			</IF>
			<Box>
				<Input placeholder={props.placeholder} name={props.id} />
			</Box>
		</FormControl>
	);
};

/** Default Props */
Autocomplete.defaultProps = {
	/** Autocomplete Props */
	id: uuidv4(),
	label: null,
	isRequired: false,
	/** Input Props */
	items: [],
	width: '100%',
	fullWidth: false,
	maxWidth: '25rem',
	placeholder: 'Enter your placeholder here...',
};
