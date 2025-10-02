"use client";

import { Check, ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface NativeSelectProps {
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const NativeSelect = React.forwardRef<HTMLDivElement, NativeSelectProps>(
  (
    { className, placeholder, options, value, onChange, disabled, ...props },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(value || "");

    const selectedOption = options.find(
      (option) => option.value === selectedValue,
    );

    React.useEffect(() => {
      setSelectedValue(value || "");
    }, [value]);

    const handleSelect = (optionValue: string) => {
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    };

    return (
      <div className="relative z-10" ref={ref} {...props}>
        <div
          className={cn(
            "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors",
            "cursor-pointer hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
            isOpen && "ring-1 ring-ring",
            className,
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              !disabled && setIsOpen(!isOpen);
            }
          }}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span
            className={cn(
              "truncate",
              !selectedValue && "text-muted-foreground",
            )}
          >
            {selectedOption?.label || placeholder || "Select..."}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 opacity-50 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </div>

        {isOpen && (
          <div className="absolute top-full z-[9999] mt-1 w-full rounded-md border border-border bg-popover shadow-lg animate-in fade-in-0 zoom-in-95">
            <div className="p-1 max-h-60 overflow-auto" role="listbox">
              {options.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    "relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "focus:bg-accent focus:text-accent-foreground focus:outline-none",
                    selectedValue === option.value &&
                      "bg-accent text-accent-foreground",
                  )}
                  onClick={() => handleSelect(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelect(option.value);
                    }
                  }}
                  role="option"
                  tabIndex={0}
                  aria-selected={selectedValue === option.value}
                >
                  <span className="flex-1 truncate">{option.label}</span>
                  {selectedValue === option.value && (
                    <Check className="h-4 w-4 ml-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overlay to close dropdown when clicking outside */}
        {isOpen && (
          <button
            type="button"
            className="fixed inset-0 z-[9998] cursor-default"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsOpen(false);
              }
            }}
            tabIndex={-1}
            aria-label="Close dropdown"
          />
        )}
      </div>
    );
  },
);

NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
