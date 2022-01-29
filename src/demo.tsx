import { VStack } from '@chakra-ui/react';
import { Autocomplete } from 'autocomplete';
import { Dropdown } from 'dropdown';

const Demo = () => {
	return (
		<VStack w="100vw" h="100vh" justify="center" align="center" spacing={12}>
			<Autocomplete />
			<Dropdown />
		</VStack>
	);
};

export default Demo;
