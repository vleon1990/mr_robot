import styles from '../styles/Home.module.css'
import Robot from '../robot_components/Robot'
import { useLinks } from '../context/linkContext'
import Image from 'next/image'
import Multi from '../links/Multi'
import Collaz from '../links/Collaz'
import Ocr from '../links/Ocr'
import Mac from '../links/Mac'
import Dron from '../links/Dron'
import Docker from '../links/Docker'
import { motion } from 'framer-motion';


export default function Home() {
  const {showmulti,showmac,showocr,showdocker,showcollaz,showdron,
        setOpenMulti, setOpenCollaz, setOpenDron, setOpenDocker, setOpenOcr,setOpenMac} = useLinks()

  const multipass = <Image onClick={() => setOpenMulti(true)} src='/multi.png'  alt="multi" layout='fill' objectFit='contain' />
  const mac = <Image onClick={() => setOpenMac(true)} src='/mac.svg'  alt="mac" layout='fill' objectFit='contain' />
  const ocr = <Image onClick={() => setOpenOcr(true)} src='/ocr.svg'  alt="ocr" layout='fill' objectFit='contain' />
  const docker = <Image onClick={() => setOpenDocker(true)} src='/docker.png'  alt="docker" layout='fill' objectFit='contain' />
  const collaz = <Image onClick={() => setOpenCollaz(true)} src='/collaz.svg'  alt="collaz" layout='fill' objectFit='contain' />
  const dron = <Image onClick={() => setOpenDron(true)} src='/dron.svg' alt='dron' layout='fill' objectFit='contain' />
  
  return (
  <>
    <Multi />
    <Collaz />
    <Ocr />
    <Mac />
    <Dron />
    <Docker />
    <div className={styles.row}>
    <div className={styles.side}>
        <motion.div className={styles.fakeimg} whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.6 }}>{showdron ? !dron : dron}</motion.div>
        <motion.div className={styles.fakeimg} whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.6 }}>{showcollaz ? !collaz : collaz}</motion.div>
        <motion.div className={styles.fakeimg} whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.6 }}>{showdocker ? !docker : docker}</motion.div>
    </div>
    <div className={styles.main}>
      <Robot />
    </div>
    <div className={styles.sideTwo}>
        <motion.div className={styles.fakeimg} whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.6 }}>{showocr ? !ocr : ocr}</motion.div>
        <motion.div className={styles.fakeimg} whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.6 }}>{showmac ? !mac : mac}</motion.div>
        <motion.div className={styles.fakeimg} whileHover={{ scale: 0.6 }} whileTap={{ scale: 0.6 }}>{showmulti ? !multipass : multipass}</motion.div>
    </div>
    </div>
  </>
  )
}