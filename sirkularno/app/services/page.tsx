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
        <div className="absolute inset-0 bg-[url(/tech.jpg)] bg-cover bg-center opacity-100 -z-10 border-b-5 border-slate-600"></div>
    
        <div className="text-white p-5">
            <Typography isBold isCentered style="text-5xl">Våre Tjenester</Typography>
            <Typography isCentered>Hva kan vi offre deg som en kunde?</Typography>
        </div>
    </div>

    { /* Main Content */}
    <div className="flex flex-col justify-center items-center p-5">
        <Sidebox direction="right" imagePath="/server.jpg" size={250}>
            <div>
                <Typography variant="h2" isBold isUnderscore>Platform As A Service</Typography>
                <Typography>Utforsk PaaS og hvordan det hjelper utviklere ved å tilby en skybasert plattform for å bygge, distribuere og administrere applikasjoner. Utviklere får tilgang til kildene de trenger uten å måtte administrere den underliggende infrastrukturen.</Typography>
            </div>
        </Sidebox>

        <Sidebox direction="left" imagePath="/tech.jpg" size={250}>
            <div>
                <Typography variant="h2" isBold isUnderscore>Administrere IT utstyr</Typography>
                <Typography>Vi kan sette opp, og administrere ditt IT-utstyr for deg, slik at du kan fokusere på andre ting med sikkerheten at alt er satt opp korrekt.</Typography>
            </div>
        </Sidebox>

        <Typography variant="h1" spacer isBold>Kontakt oss, vi vil høre hvordan vi kan hjelpe deg!</Typography>
    </div>

    <FooterBar></FooterBar> {/* Footerbar */}
</div>
);
}