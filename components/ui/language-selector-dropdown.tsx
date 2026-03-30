import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync state with actual i18n language
  const selected = languages.find(l => l.code === i18n.language.split('-')[0]) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
      i18n.changeLanguage(langCode);
      setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "group flex items-center justify-center p-2 rounded-full transition-colors duration-300",
          "text-black dark:text-white",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        )}
        aria-label="Select Language"
      >
        <div className="size-10 md:size-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">
                {selected.code}
            </span>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-full mt-2 w-48 origin-top-right rounded-2xl overflow-hidden",
            "bg-white dark:bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800",
            "animate-fade-in z-50 ring-1 ring-black/5"
          )}
        >
          <div className="p-2 flex flex-col gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 text-sm text-left rounded-xl transition-all font-bold",
                  selected.code === lang.code
                    ? "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white"
                    : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-black dark:hover:text-white"
                )}
              >
                <span className="text-xl leading-none">{lang.flag}</span>
                <span className="flex-1 uppercase tracking-wider text-xs md:text-sm">{lang.label}</span>
                {selected.code === lang.code && (
                  <Check className="h-4 w-4" strokeWidth={3} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
