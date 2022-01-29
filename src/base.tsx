import { FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';
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
				<InputGroup>
					<Input
						cursor={props.cursor}
						placeholder={props.placeholder}
						sx={{
							caretColor: props.showCaret ? 'auto' : 'transparent',
						}}
					/>
					{props.shouldShowRightElement && <InputRightElement children={<IoChevronDown />} />}
				</InputGroup>
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
});
