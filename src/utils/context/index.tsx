import {ReactNode} from 'react'
import {ChakraProvider, theme} from '@chakra-ui/react'

type TProps = {
	children: ReactNode
}

const AppProviders: React.FC<TProps> = ({children}) => (
 <ChakraProvider theme={theme}>
  {children}
 </ChakraProvider>
)
	
export default AppProviders
