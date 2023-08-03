"use client"
import React from 'react';
import {AiFillMail, AiFillPhone} from "react-icons/ai";
import {IoLocationSharp} from "react-icons/io5";
import {Button} from "@/components";
import Image from "next/image";
import {useRouter} from "next/navigation";

const PersonalInfo = () => {
    const router = useRouter()
    return (
        <div className="flex-1 flex flex-col justify-center items-center z-50 h-full">
            <div className="flex justify-around w-full">
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
                    <Button onClick={()=>router.push('/about')} className="mt-10">About me</Button>

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
    );
};

export default PersonalInfo;