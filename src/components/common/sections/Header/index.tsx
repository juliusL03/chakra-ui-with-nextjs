import {clsx} from 'clsx'
import styles from './header.module.scss'
import { Button } from '@chakra-ui/react'

const Header: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
				<h1>JTL</h1>
    <div className={clsx(styles.navList)}>
     <span>About</span>
     <span>Experiences</span>
     <span>Project</span>
     <Button colorScheme='teal' size='sm'>Contact</Button>
    </div>
		</div>
	)
}

export default Header
