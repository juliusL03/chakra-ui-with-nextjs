import {clsx} from 'clsx'
import styles from './header.module.scss'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
 const [navbar, setNavBar] = useState(false)

 const changeBackground = () => {
  if(window.scrollY >= 50) {
   setNavBar(true)
  } else {
   setNavBar(false)
  }
 }

 useEffect( () => {
  window.addEventListener('scroll', changeBackground)
 }, [])
	return (
		<div className={clsx(styles.container, navbar ? styles['active'] : '')}>
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
