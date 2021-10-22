import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { AppProps } from 'next/app'

// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
