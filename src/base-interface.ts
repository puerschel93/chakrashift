import { CursorType } from 'enums/cursor';

export interface BaseProps {
	width?: string | number;
	maxWidth?: string | number;
	fullWidth: boolean;
	cursor: CursorType;
	placeholder: string;
	label: string | null;
	isRequired: boolean;
	showCaret: boolean;
	shouldShowRightElement: boolean;
}
