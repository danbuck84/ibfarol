import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-canvas-dark text-[#B4BDBD] py-14 px-8 text-sm leading-[20px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <Image src="/logo-footer.png" alt="Igreja Batista Farol" width={140} height={44} className="h-[44px] w-auto" />
          <p className="mt-5 max-w-[34ch]">
            Uma igreja bíblica, simples e acolhedora, que vive a fé de forma prática e faz diferença em sua comunidade.
          </p>
          <p className="mt-4 text-xs leading-[16px] text-brand-mute max-w-[40ch]">
            Rua Othon dos Santos Mercadante, 43 - Vila Sinha, São José dos Campos - SP, 12212-650
          </p>
        </div>
        
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary mb-4">
            Horários
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between gap-3">
              <span>Domingo</span>
              <span className="text-brand-mute tabular-nums">09h às 12h</span>
            </li>
          </ul>
        </div>
        
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary mb-4">
            Próximos passos
          </p>
          <ul className="flex flex-col gap-2">
            <li><Link href="#novo" className="text-[#B4BDBD] hover:text-white transition-colors">Sou novo</Link></li>
            <li><Link href="#recursos" className="text-[#B4BDBD] hover:text-white transition-colors">Recursos</Link></li>
            <li><Link href="#contribua" className="text-[#B4BDBD] hover:text-white transition-colors">Contribua</Link></li>
            <li><Link href="#boletim" className="text-[#B4BDBD] hover:text-white transition-colors">Boletim da semana</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto mt-10 pt-4 border-t border-brand-hairline text-brand-mute text-xs leading-[16px]">
        © Igreja Batista Farol · contato@batistafarol.org · (12) 99162-6321
      </div>
    </footer>
  );
}
