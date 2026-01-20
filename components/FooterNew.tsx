"use client";

import React from "react";
import Cal from "@calcom/embed-react";

export const FooterNew: React.FC = () => {
  return (
    <footer id="contact" className="w-full max-w-7xl mx-auto p-8">
      <div className="bg-white border border-black/10 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-8">Book a Call</h2>

        <div className="w-full overflow-hidden">
          <Cal
            calLink="hanifyaskur/intro-call"
            config={{
              layout: "month_view",
              theme: "dark",
            }}
          />
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          © 2025 Lio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
