import React from "react";
import AuthButton from "../auth-button";
import { createClient } from "@/utils/supabase/server";
import logo from "@/public/icons/pricePing_logo.webp";
import Image from "next/image";

export default async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="bg-white/40 backdrop-blur-lg border-b border-white/10 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <Image src={logo} alt="PricePing Logo" width={40} height={40} />
          <h1 className="font-semibold text-3xl text-lime-900">PricePing</h1>
        </div>
        <AuthButton user={user} />
      </div>
    </header>
  );
}
