"use client";
import React from "react";
import { title } from "./Title.css";

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className={title}>{children}</h1>;
}
