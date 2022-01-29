import { FormControl, FormLabel, HStack, Input, VStack } from '@chakra-ui/react';
import { BaseProps } from './base-interface';

/**
 * Base input component to display the main input field of a autocomplete
 * or dropdown component.
 * @returns {JSX.Element}
 */
export const Base = (props: BaseProps) => {
	return (
		<FormControl
			isRequired={props.isRequired}
			width={props.width}
			maxWidth={props.fullWidth ? 'auto' : props.maxWidth}
		>
			<VStack align="flex-start" spacing={0}>
				{props.label && (
					<HStack>
						<FormLabel fontSize="sm">{props.label}</FormLabel>
					</HStack>
				)}
				<Input
					cursor={props.cursor}
					placeholder={props.placeholder}
					sx={{
						caretColor: props.showCaret ? 'auto' : 'transparent',
					}}
				/>
			</VStack>
		</FormControl>
	);
};

export const _defaultProps = (Base.defaultProps = {
	width: '100%',
	maxWidth: '25rem',
	placeholder: '',
	label: null,
	isRequired: false,
	showCaret: true,
});
