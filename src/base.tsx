import { Input } from '@chakra-ui/react';

/** Props */
interface BaseProps {
	width?: string | number;
	maxWidth?: string | number;
	fullWidth?: boolean;
}

/**
 * Base input component to display the main input field of a autocomplete
 * or dropdown component.
 * @returns {JSX.Element}
 */
export const Base = (props: BaseProps) => {
	return <Input width={props.width} maxWidth={props.fullWidth ? 'auto' : props.maxWidth} />;
};

Base.defaultProps = {
	width: '100%',
	maxWidth: '25rem',
	fullWidth: false,
};
