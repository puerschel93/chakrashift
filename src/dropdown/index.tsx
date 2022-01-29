import { Base, _defaultProps } from 'base';
import { CursorType } from 'enums/cursor';
import { DropdownProps } from './interface';

export const Dropdown = (props: DropdownProps) => {
	return <Base cursor={props.cursor} placeholder={props.placeholder} fullWidth={props.fullWidth} />;
};

Dropdown.defaultProps = {
	..._defaultProps,
	cursor: CursorType.Pointer,
	placeholder: 'Enter your placeholder',
	fullWidth: false,
};
