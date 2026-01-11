import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">LOGO here</div>
        {/* AUTH BUTTON HERE  */}
        <Button
          variant="default"
          size="sm"
          className="bg-lime-700 hover:bg-white hover:text-lime-700 border hover:border-2 hover:border-lime-700 gap-2"
        >
          <LogIn className="w-4 h-4" />
          Sign In
        </Button>
      </div>
    </header>
  );
}
