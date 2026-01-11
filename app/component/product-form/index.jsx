"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function ProductForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {};

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
    </>
  );
}
