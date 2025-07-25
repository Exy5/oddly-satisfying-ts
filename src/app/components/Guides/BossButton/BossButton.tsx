"use client";
import React from "react";
import Link from "next/link";
import { bossButton, bossButtonImage, bossButtonText } from "./BossButton.css";
import Image from 'next/image'

export default function BossButton({ href, name, image }: { href: string; name: string; image?: string }) {
  return (
    <Link href={href} className={bossButton}>
      {image && (
        <Image 
          src={image} 
          alt="" 
          className={bossButtonImage} 
          aria-hidden 
          width={56}
          height={56}
        />
      )}
      <span className={bossButtonText}>{name}</span>
    </Link>
  );
}
