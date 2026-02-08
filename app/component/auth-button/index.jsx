"use client";

import { useState } from "react";
import { LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "../auth-modal";
import { signOut } from "@/app/actions";

export default function AuthButton({ user }) {
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (user) {
    return (
      <form action={signOut}>
        <Button
          size="sm"
          type="submit"
          className="bg-lime-700 p-5 hover:bg-white hover:text-lime-700 border hover:border-2 hover:border-lime-700"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <>
      <Button
        onClick={() => setShowAuthModal(true)}
        variant="default"
        size="sm"
        className="bg-lime-700 p-5 hover:bg-white hover:text-lime-700 border hover:border-2 hover:border-lime-700"
      >
        <LogIn className="w-4 h-4" />
        Sign In
      </Button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
