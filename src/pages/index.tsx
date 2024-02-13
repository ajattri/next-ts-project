
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h2>
       Welcome to the page
      </h2>
      <Link href="/contact">
       link to contacts
      </Link>
    </>
  );
}
