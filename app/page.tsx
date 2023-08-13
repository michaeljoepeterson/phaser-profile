import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Game from './_components/game'
import ClientWrapper from './_components/client-wrapper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='z-10'>
        <p className='underline text-5xl min-h-[50em]'>
          Get started by editing&nbsp;
        </p>
        <p>
          more stuff
        </p>
      </div>
      <ClientWrapper>
        <Game />
      </ClientWrapper>
    </main>
  )
}
