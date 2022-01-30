import { Box, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
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
			<Box position="relative">
				<Input placeholder={props.placeholder} name={props.id} />
				<Box
					position="absolute"
					left="0"
					top="calc(100% + 0.5rem)"
					width="100%"
					py="0.5rem"
					rounded="md"
					borderColor="gray.600"
					borderWidth="1px"
				>
					<Text>Something</Text>
				</Box>
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
