import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Game from './_components/game'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className='underline text-5xl'>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
      <Game />
    </main>
  )
}
