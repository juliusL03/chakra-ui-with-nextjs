import {clsx} from 'clsx'
import styles from './header.module.scss'
import { Button } from '@chakra-ui/react'

const Header: React.FC = () => {
	return (
		<div className={clsx(styles.container)}>
				<h1>JuliusL.</h1>
    <div className={clsx(styles.navList)}>
     <span>About me</span>
     <span>Tech Stack</span>
     <span>Projects</span>
     <span>Resume</span>
     <Button colorScheme='teal' size='sm'>Contact</Button>
    </div>
		</div>
	)
}

export default Header
