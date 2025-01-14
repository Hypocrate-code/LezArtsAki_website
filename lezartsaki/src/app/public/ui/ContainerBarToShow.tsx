"use client";
import React, { createElement, useRef, useState, useEffect, ReactNode } from "react";

function ContainerBarToShow({ children }: { children: ReactNode }) {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [hasBeenSeen, setSeen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        observer.disconnect();
      }
    }, {rootMargin : "-75px"});

    if (myRef.current) {
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
