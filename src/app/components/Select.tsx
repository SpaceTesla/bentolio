'use client';

import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface SelectProps {
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: Option[];
  disabled?: boolean;
  error?: string;
  className?: string;
}

export default function Select({
  label,
  placeholder = 'Select an option',
  value,
  defaultValue,
  onChange,
  options,
  disabled,
  error,
  className,
}: SelectProps) {
  const generatedId = useId();
  const triggerId = `${generatedId}-trigger`;
  const listboxId = `${generatedId}-listbox`;

  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | undefined
  >(defaultValue);
  const currentValue = isControlled ? value : uncontrolledValue;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === currentValue),
    [options, currentValue],
  );

  const open = useCallback(() => {
    if (disabled) return;
    setIsOpen(true);
    const index = Math.max(
      0,
      options.findIndex((o) => o.value === currentValue && !o.disabled),
    );
    setActiveIndex(index >= 0 ? index : 0);
  }, [disabled, options, currentValue]);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  const selectIndex = useCallback(
    (index: number) => {
      const option = options[index];
      if (!option || option.disabled) return;
      if (isControlled) {
        onChange?.(option.value);
      } else {
        setUncontrolledValue(option.value);
        onChange?.(option.value);
      }
      close();
      triggerRef.current?.focus();
    },
    [options, isControlled, onChange, close],
  );

  const moveActive = useCallback(
    (delta: number) => {
      if (!options.length) return;
      let next = activeIndex;
      do {
        next = (next + delta + options.length) % options.length;
      } while (options[next]?.disabled && next !== activeIndex);
      setActiveIndex(next);
    },
    [activeIndex, options],
  );

  useEffect(() => {
    if (!isOpen) return;
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        moveActive(1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        moveActive(-1);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (activeIndex >= 0) selectIndex(activeIndex);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, activeIndex, moveActive, selectIndex, close]);

  return (
    <div ref={containerRef} className={className}>
      {label ? (
        <label className="block pl-1 text-sm" htmlFor={triggerId}>
          {label}
        </label>
      ) : null}
      <div className="relative mt-2">
        <button
          id={triggerId}
          ref={triggerRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          className="bg-secondary/30 w-full rounded-[12px] border border-white/10 p-4 pr-12 text-left transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10 disabled:opacity-60"
          onClick={() => (isOpen ? close() : open())}
          disabled={disabled}
        >
          <span className={selectedOption ? '' : 'opacity-60'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 opacity-70"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isOpen && (
          <ul
            id={listboxId}
            role="listbox"
            aria-labelledby={triggerId}
            ref={listRef}
            className="bg-primary custom-scrollbar absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-[12px] border border-white/10 p-1 shadow-xl outline-none"
          >
            {options.map((option, index) => {
              const isSelected = option.value === currentValue;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled || undefined}
                  className={[
                    'cursor-default rounded-[8px] px-3 py-2 text-sm transition select-none',
                    option.disabled
                      ? 'cursor-not-allowed opacity-50'
                      : 'hover:bg-secondary/30',
                    isActive ? 'bg-secondary/40' : '',
                    isSelected ? 'text-accent' : '',
                  ].join(' ')}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectIndex(index)}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {error ? <p className="mt-2 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
