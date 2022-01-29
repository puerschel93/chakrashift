import { Base, _defaultProps } from 'base';
import { CursorType } from 'enums/cursor';
import { DropdownProps } from './interface';

export const Dropdown = (props: DropdownProps) => {
	return <Base {...props} />;
};

Dropdown.defaultProps = {
	..._defaultProps,
	cursor: CursorType.Pointer,
	showCaret: false,
	placeholder: 'Enter your placeholder',
	fullWidth: false,
	shouldShowRightElement: true,
};
