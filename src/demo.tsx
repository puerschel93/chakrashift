import { Button, useColorMode, VStack } from '@chakra-ui/react';

const Demo = () => {
	/** Colormode */
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<VStack w="100vw" h="100vh" justify="center" align="center" spacing={12}>
			<Button onClick={toggleColorMode}>{colorMode}</Button>
		</VStack>
	);
};

export default Demo;
