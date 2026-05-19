import Image from "next/image";
import Typography from "./typography";
import Link from "next/link";
import Footerbox from "./footerBox";
import NavbarLink from "./navbarLinks";
import AssignIcon from "./assignIcons";

const linkStyle = "hover:underline hover:font-bold text-lg"

export default function FooterBar(){
    return (
        <footer className="bg-slate-800 p-5 flex flex-col sm:flex-row gap-5 text-white mt-5 sm:justify-center"> 
            <Footerbox>
                <Typography variant="h1" isBold>NordicDevices</Typography>
                <Typography>IT gjort enkelt.</Typography>
            </Footerbox>
                
            <Footerbox>
                <Typography variant="h1" isBold>Les Mer</Typography>
                    <NavbarLink linkDestination="/">Om Oss</NavbarLink>
                    <NavbarLink linkDestination="/">Om Folka</NavbarLink>
                    <NavbarLink linkDestination="/">Våre Tjenester</NavbarLink>
            </Footerbox>

            <Footerbox>
                <Typography variant="h1" isBold style="mb-5">Kontakt Oss</Typography>
                <AssignIcon iconPath="/callIcon.png" imageAlt="Call Icon"><Typography>+12345678</Typography></AssignIcon>
                <AssignIcon iconPath="/email.png" imageAlt="Call Icon"><Typography>support@nordicdevices.com</Typography></AssignIcon>
            </Footerbox>
        </footer>
    )
}