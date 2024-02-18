import Head from 'next/head'
import {useRouter} from 'next/router'

import {getTitle} from '@/utils/helpers/title'

import Container from './Container'
import Header from '../../sections/Header'

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
    {children}
    </Container>
		</div>
	)
}

export default MainNav
