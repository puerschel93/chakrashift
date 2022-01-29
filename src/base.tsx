import { FormLabel, HStack, Input, VStack } from '@chakra-ui/react';
import { BaseProps } from './base-interface';

/**
 * Base input component to display the main input field of a autocomplete
 * or dropdown component.
 * @returns {JSX.Element}
 */
export const Base = (props: BaseProps) => {
	return (
		<VStack width={props.width} maxWidth={props.fullWidth ? 'auto' : props.maxWidth} align="flex-start">
			{props.label && (
				<HStack>
					<FormLabel>{props.label}</FormLabel>
				</HStack>
			)}
			<Input cursor={props.cursor} placeholder={props.placeholder} />
		</VStack>
	);
};

export const _defaultProps = (Base.defaultProps = {
	width: '100%',
	maxWidth: '25rem',
	placeholder: '',
	label: null,
});
