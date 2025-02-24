"use client"
import { Member } from "./TeamSection"
import styles from "./page.module.css"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

function MemberEl({member, i, n}: {member: Member, i: number, n: number}) {
  let c = styles.center;
  if (i == 1 && n == 1) {
    c = styles.left
  }
  const thisRef = useRef<HTMLDivElement>(null)
  const [hasBeenSeen, setSeen] = useState(false)
  if (i == 1 && i != n) {
    c = styles.left
  }
  if (i == n && i != 1) {
    c = styles.right
  }
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {    
        setSeen(true);
        observer.disconnect();
      }
    }, {rootMargin : "-55px 0px -55px 0px"});
    if (thisRef.current) {
      observer.observe(thisRef.current);
    }
    return () => {
      if (thisRef.current) {
        observer.unobserve(thisRef.current);
      }
    };
  }, []);
  return (
    <div ref={thisRef} className={`${styles.member} ${c} ${hasBeenSeen && styles.seen}`}>
      <h2>{member.name}</h2>
      <p className={styles.role}>{member.role}</p>
      <div className={styles.quoteContainer}>
        <p className={styles.quote}>{member.quote}</p>
      </div>
      <Image src={member.img} alt="" width={400} height={600}/>
    </div>
  )
}

export default MemberEl