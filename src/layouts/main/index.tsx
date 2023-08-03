"use client";
import {motion} from 'framer-motion'
import Link from "next/link";
import {usePathname} from "next/navigation";
const links : {
  href:string
  text:string
}[] =[
{href : '/' , text:'home'},
{href : '/about' , text:'About'},
{href : '/skills' , text:'Skills'},
{href : '/work-sample' , text:'Work Samples'},
{href : '/contact' , text:'Contact'}
]
export const Header = () => {
  const path = usePathname()
  return (
    <div className="p-5 flex justify-end gap-14 w-full h-16">
      {links.map(link=>(

          <Link className={'text-sm relative'} key={link.text} href={link.href}>
            {link.href === path && <motion.span layoutId={'underline'} className={'absolute left-0 top-full block bg-white w-full h-[1px]'}/>}
            {link.text}
          </Link>

      ))}

    </div>
  );
};
