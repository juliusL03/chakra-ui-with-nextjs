import Head from 'next/head'
import {useRouter} from 'next/router'

import {getTitle} from '@/utils/helpers/title'

import Container from './Container'
import Header from '../../sections/Header'
import Content from './Content'

type Props = {
	children: React.ReactNode
}

const MainNav: React.FC<Props> = ({children}) => {
	const router = useRouter()

	return (
		<div>
			<Head>
				<title>{getTitle(router)}</title>
			</Head>
			<Container className="h-screen overflow-y-scroll">
    <Header />
    <Content>
     {children}
    </Content>
    </Container>
		</div>
	)
}

export default MainNav
