import logo from "./assets/logo_nobg.png"
import Image from "next/image"
import styles from "./logoForMobile.module.css"

function LogoForMobile() {
  return (
    <Image className={styles.logoForMobile} src={logo} alt="Logo Lez Arts Aki" height={40} width={40}/>

  )
}

export default LogoForMobile