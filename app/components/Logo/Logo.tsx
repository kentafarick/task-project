import Image from "next/image";

export default function Logo() {
    return (
        <Image 
            src="/icons/logo.svg"
            alt="INCHAPIN"
            width={187}
            height={30}
            priority
        />    
    );
}