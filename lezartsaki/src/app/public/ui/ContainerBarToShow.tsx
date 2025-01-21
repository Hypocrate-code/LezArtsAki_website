"use client";
import React, { createElement, useRef, useState, useEffect, ReactNode } from "react";

function joinInSpan(letters : Array<string>, width: number, isH1OrH2: boolean) : string {
    const elsWithSpans : string[] = []
    if (width <= 650 && isH1OrH2) {
      for (let i = 0; i<letters.length; i++) {
        elsWithSpans.push(`<span style='--n: ${Math.abs((letters.length / 2) - i) * 0.03}s' class="animatedLetter">${letters[i]}</span>`)
      }
    }
    else {
      for (let i = 0; i<letters.length; i++) {
        elsWithSpans.push(`<span style='--n: ${i * 0.019}s' class="animatedLetter">${letters[i]}</span>`)
      }
    }
    return elsWithSpans.join('')
}

function ContainerBarToShow({ children }: { children: ReactNode }) {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [hasBeenSeen, setSeen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {        
        setSeen(true);
        observer.disconnect();
      }
    }, {rootMargin : "0px 0px -55px 0px"});

    if (myRef.current) {
      if (!myRef.current.innerHTML.includes('</span>')) {
        myRef.current.innerHTML = joinInSpan(myRef.current.innerHTML.split(''), window.innerWidth, myRef.current.tagName == "H1" || myRef.current.tagName == "H2")
      }
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, []);

  // Vérifiez si `children` est un élément React valide
  if (React.isValidElement(children)) {
    return createElement(
      children.type,
      {
        ...children.props, // Conservez les props d'origine
        className: `${children.props.className || ""} ${hasBeenSeen ? "" : "barToShow"}`.trim(), // Ajoutez la classe dynamiquement
        ref: myRef,
      },
      children.props.children // Conservez les enfants internes
    );
  }
  // Si `children` n'est pas un élément React valide, retournez-le tel quel
  return <>{children}</>;
}

export default ContainerBarToShow;
