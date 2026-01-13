import React from "react";
import { createClient } from "@/utils/supabase/server";
import { TrendingDown } from "lucide-react";

export default async function EmptyState() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      {user && (
        <section className="max-w-2xl mx-auto px-4 pb-20 text-center mt-10">
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-12">
            <TrendingDown className=" w-16 h-16 mx-auto b-4 text-gray-200" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No product listed yet
            </h3>
            <p>Add your first product right now!!</p>
          </div>
        </section>
      )}
    </>
  );
}
