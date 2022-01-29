import { Input, VStack } from '@chakra-ui/react';
import { BaseProps } from './base-interface';

/**
 * Base input component to display the main input field of a autocomplete
 * or dropdown component.
 * @returns {JSX.Element}
 */
export const Base = (props: BaseProps) => {
	return (
		<VStack width={props.width} maxWidth={props.fullWidth ? 'auto' : props.maxWidth}>
			<Input cursor={props.cursor} placeholder={props.placeholder} />
		</VStack>
	);
};

Base.defaultProps = {
	width: '100%',
	maxWidth: '25rem',
	placeholder: '',
};
