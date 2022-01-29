/** Props Interface */
interface IFProps {
	children?: React.ReactNode;
	condition: boolean;
}

/**
 * Helper component to beautify if statements in JSX.
 * @param props
 * @returns
 */
const IF = (props: IFProps) => {
	return props.condition ? <>{props.children}</> : null;
};

export default IF;
