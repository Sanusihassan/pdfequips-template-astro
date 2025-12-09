// src/components/AdBlockDetector.tsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

// Updated content type
export type adBlockerContentType = {
  title: string;
  description: string;
  reloadPage: string;
  upgradeToPremium: string; // New field for CTA button
};

export default function AdBlockDetector({
  content,
  lang,
}: {
  content: adBlockerContentType;
  lang: string;
}) {
  const [isAdBlocked, setIsAdBlocked] = useState<boolean | null>(null);
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );

  useEffect(() => {
    const checkAdBlocker = async () => {
      if (subscriptionStatus) {
        return;
      }
      // Wait a bit for AdSense to load
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Method 1: Check if AdSense loaded
      const adSenseBlocked = typeof window.adsbygoogle === "undefined";

      // Method 2: Try to fetch the AdSense script
      let fetchBlocked = false;
      try {
        await fetch(
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          { method: "HEAD", mode: "no-cors", cache: "no-store" }
        );
      } catch (error) {
        fetchBlocked = true;
      }

      // Method 3: Bait element
      let baitBlocked = false;
      try {
        const bait = document.createElement("div");
        bait.className = "ad ads adsbox doubleclick ad-placement carbon-ads";
        bait.style.cssText =
          "position: absolute !important; left: -999px !important; width: 1px !important; height: 1px !important;";
        document.body.appendChild(bait);

        await new Promise((resolve) => setTimeout(resolve, 100));

        baitBlocked =
          bait.offsetHeight === 0 ||
          bait.offsetWidth === 0 ||
          !bait.offsetParent ||
          window.getComputedStyle(bait).display === "none";

        document.body.removeChild(bait);
      } catch (e) {
        baitBlocked = true;
      }

      const detected = adSenseBlocked || fetchBlocked || baitBlocked;

      setIsAdBlocked(detected);

      // Dispatch to Redux store
      if (detected) {
        dispatch(setField({ isAdBlocked: detected }));
      }
    };

    checkAdBlocker();
  }, [dispatch, subscriptionStatus]);

  const handleReload = () => {
    window.location.reload();
  };

  // Construct pricing URL based on language
  const pricingUrl = lang ? `/${lang}/pricing` : "/pricing";

  if (isAdBlocked === null) {
    return null;
  }

  return isAdBlocked ? (
    <div className="fixed bottom-4 right-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg shadow-lg max-w-sm z-9999 p-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 text-2xl">⚠️</div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2 text-base">
            {content.title}
          </h3>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            {content.description}
          </p>

          {/* Buttons container */}
          <div className="flex flex-col gap-2">
            <a
              href={pricingUrl}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200 text-center no-underline"
            >
              {content.upgradeToPremium}
            </a>
            <button
              onClick={handleReload}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
            >
              {content.reloadPage}
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsAdBlocked(false)}
          className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  ) : null;
}
