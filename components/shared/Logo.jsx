import Image from "next/image";

export default function Logo() {
  return <Image className="rounded-full" src="/assets/images/logo.webp" width={60} height={60} alt="MD. Omar Faruq logo" />;
}
