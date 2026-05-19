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
        <div className="absolute inset-0 bg-[url(/kbdcloseup.jpg)] bg-cover bg-center opacity-100 -z-10 border-b-5 border-slate-600"></div>
    
        <div className="text-white p-5">
            <Typography isBold isCentered style="text-5xl">Om Oss</Typography>
            <Typography isCentered>Hvem er Nordic Devices?</Typography>
        </div>
    </div>

    { /* Main Content */}
    <div className="flex flex-col justify-center items-center p-5">
    <Sidebox direction="right" imagePath="/server.jpg" size={300}>
        <div>
            <Typography variant="h2" isBold isUnderscore>Vårt Mål</Typography>
            <Typography>Vi ønsker å gjøre IT mer tilgjengelig for alle. Ikke bare de som har flere år med erfaring innen bransjen.</Typography>
        </div>
    </Sidebox>
    </div>

    <FooterBar></FooterBar> {/* Footerbar */}
</div>
);
}