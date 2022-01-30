import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<Demo />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
