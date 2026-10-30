// StickyMobileCTA - appears on mobile only after scrolling past the hero section
// Promotes The Lab 14-day free trial on every page
// Only shown on mobile (md:hidden), dismissible per session

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { LAB_TRIAL_URL as GHL_JOIN_URL } from "@/lib/ghlLinks";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // Reset dismissed state when page changes so CTA shows on new pages
    setDismissed(false);
    setVisible(false);
  }, [location]);

  useEffect(() => {
    // Don't show if already dismissed this session for this page
    const dismissKey = "sticky-cta-dismissed-lab";
    if (sessionStorage.getItem(dismissKey)) {
      return;
    }

    const handleScroll = () => {
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
    const dismissKey = "sticky-cta-dismissed-lab";
    sessionStorage.setItem(dismissKey, "1");
  };

  if (dismissed || !visible) return null;

  const ctaConfig = {
    title: "14-Day Free Trial, Then $29 CAD/mo",
    subtitle: "Tuesday live training · Google Ads · SEO · AI",
    href: GHL_JOIN_URL,
    label: "Start your 14-day free trial of The KnowHow Lab",
    buttonText: "Try Free →",
    isExternal: true,
    ariaLabel: "Start your 14-day free trial of The KnowHow Lab",
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label={ctaConfig.label}
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
            {ctaConfig.title}
          </p>
          <p className="text-xs text-gray-500 leading-tight mt-0.5">
            {ctaConfig.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={ctaConfig.href}
          target={ctaConfig.isExternal ? "_blank" : undefined}
          rel={ctaConfig.isExternal ? "noopener noreferrer" : undefined}
          className="flex-shrink-0 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold text-white"
          style={{
            backgroundColor: "#C47820",
            minHeight: "44px",
            fontFamily: "Space Grotesk, sans-serif",
            whiteSpace: "nowrap",
          }}
          aria-label={ctaConfig.ariaLabel}
        >
          {ctaConfig.buttonText}
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
