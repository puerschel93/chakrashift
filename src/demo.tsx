import { Button, useColorMode, VStack } from '@chakra-ui/react';
import { Autocomplete } from 'autocomplete';
import { Dropdown } from 'dropdown';

const Demo = () => {
	/** Colormode */
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<VStack w="100vw" h="100vh" justify="center" align="center" spacing={12}>
			<Button onClick={toggleColorMode}>{colorMode}</Button>
			<Autocomplete />
			<Dropdown />
		</VStack>
	);
};

export default Demo;
