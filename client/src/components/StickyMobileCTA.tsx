// StickyMobileCTA - appears on mobile only after scrolling past the hero section
// White background, orange CTA button, dismissible
// Only shown on mobile (md:hidden), hidden on desktop

import { useEffect, useState } from "react";

const GHL_JOIN_URL =
  "https://bk3wb95ynz5uaen0kg00.app.clientclub.net/courses/offers/c289bef5-743c-4172-b386-1ca0a307b1ce";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("sticky-cta-dismissed")) {
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 400px (past the hero section)
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 400) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("sticky-cta-dismissed", "1");
  };

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label="Join The Lab CTA"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* White bar with subtle top shadow */}
      <div
        className="bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3"
        style={{ boxShadow: "0 -4px 16px rgba(0,0,0,0.10)" }}
      >
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-semibold text-gray-900 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Join The Lab - $29/mo
          </p>
          <p className="text-xs text-gray-500 leading-tight mt-0.5">
            Weekly Q&amp;A · AI &amp; Google Ads training
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={GHL_JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold text-white"
          style={{
            backgroundColor: "#E98C28",
            minHeight: "44px",
            fontFamily: "Space Grotesk, sans-serif",
            whiteSpace: "nowrap",
          }}
          aria-label="Join The Lab for $29 per month"
        >
          Join Now →
        </a>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full"
          aria-label="Dismiss"
          style={{ minHeight: "44px", minWidth: "44px" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 4L4 12M4 4l8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Safe area padding for iOS home indicator */}
      <div className="bg-white" style={{ height: "env(safe-area-inset-bottom, 0px)" }} />
    </div>
  );
}
