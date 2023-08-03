import Link from "next/link";
interface Props{
    text:string
    href:string
}
const MyLinks = ({text,href}:Props) => {
    return ( <Link className="text-sm transition-all" href={href}>{text}</Link> );
}
 
export default MyLinks;