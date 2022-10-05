// import theme from "../theme";
import "../styles/globals.css";
import Layout from "../components/common/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		// <ChakraProvider theme={theme}>
		<ChakraProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
