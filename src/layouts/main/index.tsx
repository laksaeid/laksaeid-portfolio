"use client";
import { MyLinks } from "@/components";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="p-5 flex justify-end gap-14 w-full h-16">
      <MyLinks href="#" text="Home" />
      <MyLinks href="#" text="About" />
      <MyLinks href="#" text="Skills" />
      <MyLinks href="#" text="Work Samples" />
      <MyLinks href="#" text="Contact" />
    </div>
  );
};
