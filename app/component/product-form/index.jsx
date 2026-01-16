"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { AuthModal } from "../auth-modal";
import { addProduct } from "@/app/actions";
import { toast } from "sonner";

export default function ProductForm({ user }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setShowAuthModal(true);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("url", url);

    const result = await addProduct(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.success || "Product tracked successfully!!");
      setUrl("");
    }

    setLoading(false);
  };

  return (
    <>
      <form className="w-full max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Input
            type="url"
            value={url}
            disabled={loading}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="h-12 text-base"
            placeholder="Place product URL ( Walmart, Amazon, Flipkart)"
          />
          <Button
            className="bg-lime-700 p-5 hover:bg-white hover:text-lime-700 border hover:border-2 hover:border-lime-700"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 -4 w-4 animate-spin" />
                ...Adding
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>
      </form>
      {/* AUTH MODAL  */}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
