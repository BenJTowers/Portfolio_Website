"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navigation.module.css";

type NavigationItem = readonly [number: string, label: string, href: string];

export function Navigation({ items }: { items: readonly NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.trigger} type="button" onClick={() => setIsOpen(true)} ref={triggerRef} aria-expanded={isOpen} aria-controls="site-index">
        INDEX +
      </button>
      {isOpen && (
        <div className={styles.backdrop} role="presentation" onMouseDown={closeMenu}>
          <section className={styles.panel} id="site-index" role="dialog" aria-modal="true" aria-labelledby="index-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className={styles.topline}>
              <p id="index-title">BT / INDEX</p>
              <button type="button" onClick={closeMenu} ref={closeRef}>CLOSE ×</button>
            </div>
            <nav aria-label="Main navigation">
              {items.map(([number, label, href]) => (
                <a href={href} key={href} onClick={closeMenu}><span>{number}</span>{label}<b aria-hidden="true">↘</b></a>
              ))}
            </nav>
            <div className={styles.footer}><p>VOL. 01 / 2026</p><p>VANCOUVER, BC</p></div>
          </section>
        </div>
      )}
    </>
  );
}
