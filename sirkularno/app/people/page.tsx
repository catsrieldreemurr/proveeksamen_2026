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
        <div className="absolute inset-0 bg-[url(/peoples.jpg)] bg-cover bg-center opacity-100 -z-10 border-b-5 border-slate-600"></div>
    
        <div className="text-white p-5">
            <Typography isBold isCentered style="text-5xl">Om Folka</Typography>
        </div>
    </div>

    { /* Main Content */}
    <div className="flex flex-col justify-center items-center p-5">
        <Sidebox direction="right" imagePath="/person1.png" size={150}>
            <div>
                <Typography variant="h2" isBold isUnderscore>Alva Thomas</Typography>
                <Typography>Daglig Leder og Driftekspert</Typography>
                <Typography>Utdanning Her</Typography>
                <Typography spacer>Kontakt: +12345678</Typography>
            </div>
        </Sidebox>

        <Sidebox direction="left" imagePath="/person2.png" size={150}>
            <div>
                <Typography variant="h2" isBold isUnderscore>Eun Martins</Typography>
                <Typography>Driftekspert</Typography>
                <Typography>Utdanning Her</Typography>
                <Typography spacer>Kontakt: +12345678</Typography>
            </div>
        </Sidebox>

        <Sidebox direction="right" imagePath="/person3.png" size={150}>
            <div>
                <Typography variant="h2" isBold isUnderscore>Nora Johnson</Typography>
                <Typography>Driftekspert</Typography>
                <Typography>Utdanning Her</Typography>
                <Typography spacer>Kontakt: +12345678</Typography>
            </div>
        </Sidebox>
    </div>

    <FooterBar></FooterBar> {/* Footerbar */}
</div>
);
}