"use client";
import React from "react";
import Link from "next/link";
import { bossButton, bossButtonImage, bossButtonText } from "./BossButton.css";

export default function BossButton({ href, name, image }: { href: string; name: string; image?: string }) {
  return (
    <Link href={href} className={bossButton}>
      {image && (
        <img src={image} alt="" className={bossButtonImage} aria-hidden />
      )}
      <span className={bossButtonText}>{name}</span>
    </Link>
  );
}
