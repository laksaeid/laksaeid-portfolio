'use client'
import { Header } from "@/layouts";
import Image from "next/image";
import { AiFillMail, AiFillPhone, IoLocationSharp } from "@/icons";
import { Button } from "@/components";
import Particles from "@/components/particles";
export default function Home() {
  return (
    <main className="flex flex-col h-full ">
      <Header />
      <div className="flex-1 flex flex-col justify-center items-center z-50">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4 w-52">
            <p className="bg-teal-500 rounded-full rounded-bl-none p-1 text-center">
              Hello im
            </p>
            <h1 className="text-2xl">Saeid Lak</h1>
            <p className="text-xs">FRONT-END DEVELOPER</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <AiFillMail />
                <span className="text-xs text-slate-400">
                  laksaeidd2@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AiFillPhone />
                <span className="text-xs text-slate-400">+98 903 668 4333</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationSharp />
                <span className="text-xs text-slate-400">Iran-Tehran</span>
              </div>
            </div>
              <Button text="About me" classes="mt-10"/>

          </div>
          <Image
            alt="profile"
            src={"/prof.jpg"}
            height={300}
            width={300}
            className="rounded-full shadow-xl shadow-slate-900"
          />
        </div>
      </div>
      <Particles/>
    </main>
  );
}
