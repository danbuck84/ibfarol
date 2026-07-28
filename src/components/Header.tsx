import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-8 py-3.5 bg-white/90 backdrop-blur-md border-b border-brand-hairline">
      <Link href="#inicio" className="flex items-center border-none">
        <Image src="/logo-header.png" alt="Igreja Batista Farol" width={120} height={38} className="h-[38px] w-auto" />
      </Link>
      <nav className="hidden md:flex items-center gap-7">
        <Link href="#novo" className="text-sm font-semibold text-brand-ink decoration-transparent pb-1 border-b-2 border-brand-primary">
          Sou novo
        </Link>
        <Link href="#recursos" className="text-sm text-brand-body decoration-transparent pb-1 border-b-2 border-transparent hover:border-brand-hairline-soft">
          Recursos
        </Link>
        <Link href="#ministerios" className="text-sm text-brand-body decoration-transparent pb-1 border-b-2 border-transparent hover:border-brand-hairline-soft">
          Ministérios
        </Link>
        <Link href="#contribua" className="text-sm text-brand-body decoration-transparent pb-1 border-b-2 border-transparent hover:border-brand-hairline-soft">
          Contribua
        </Link>
      </nav>
      <button className="font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
        Planeje sua visita
      </button>
    </header>
  );
}
