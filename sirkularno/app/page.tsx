import { Button } from "@/components/ui/button";
import FooterBar from "@/components/ui/footer";
import Navbar from "@/components/ui/nav";
import Sidebox from "@/components/ui/sideboxes";
import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      {/* Top */}
      <div className="relative h-[40rem] w-full flex items-center justify-center"> 
        <div className="absolute inset-0 bg-[url(/hero_main.jpg)] bg-cover bg-center opacity-100 -z-10 border-b-5 border-slate-600"></div>
        
        <div className="text-white p-5">
          <Typography isBold isCentered style="text-5xl">IT gjort enkelt.</Typography>
          <Typography isCentered>IT må ikke være så kjempekomplisert. Vi vil gjøre det enklere.</Typography>
        </div>
      </div>

      { /* Main Content */}
      <div className="flex flex-col justify-center items-center p-5">
        <Sidebox direction="right" imagePath="/office.jpg" size={300}>
          <div>
            <Typography variant="h2" isBold isUnderscore>Din assistent innen IT</Typography>
            <Typography>Du har behovet, vi har kunnskapen.</Typography>
            <Typography>Vi tar av oss det kompliserte, så du kan fokusere på det som er viktig for deg.</Typography>
          </div>
        </Sidebox>

        <Sidebox direction="left" imagePath="/callcentre.png" size={300}>
          <div>
            <Typography variant="h2" isBold isUnderscore>Vi er der når du trenger oss.</Typography>
            <Typography>Vi tilbyr våre kunder 24/7-timers support, slik at vi alltid kan hjelpe hvor og når det er nødvendig.</Typography>
            <Typography spacer>Våre eksperter er bare en telefon unna.</Typography>
          </div>
        </Sidebox>
      </div>

      <FooterBar></FooterBar> {/* Footerbar */}
    </div>
  );
}