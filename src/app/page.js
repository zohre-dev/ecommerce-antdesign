"use client";
import { getAllProducts } from "@/utils/route";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/categories/all");
  }, []);

  return <main className={styles.container}></main>;
}
