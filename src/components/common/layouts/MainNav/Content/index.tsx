
import clsx from 'clsx'

import styles from './content.module.scss'
import React from 'react'

type props = {
 children :React.ReactNode
}

const Content: React.FC<props> = ({children}) => {
	return <div className={clsx(styles.content)}>{children}</div>
}

export default Content
