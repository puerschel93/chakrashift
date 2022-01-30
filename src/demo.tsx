import { Button, useColorMode, VStack } from '@chakra-ui/react';
import { Autocomplete } from 'autocomplete';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Demo = () => {
	/** Colormode */
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<VStack w="100vw" h="100vh" justify="center" align="center" spacing={12}>
			<Button
				position="absolute"
				top="2rem"
				left="2rem"
				onClick={toggleColorMode}
				leftIcon={colorMode === 'light' ? <IoSunny /> : <IoMoon />}
				variant="ghost"
			>
				{colorMode}
			</Button>
			<Autocomplete label="Autocomplete" isRequired />
		</VStack>
	);
};

export default Demo;
