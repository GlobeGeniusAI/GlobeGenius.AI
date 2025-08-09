'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type Tag = {
  icon?: string;        // e.g. "❤️"
  label: string;        // e.g. "Romantic"
};

type FavoriteCardProps = {
  title: string;               // e.g. "Paris, France"
  tags: Tag[];                 // in display order
  savedOn: Date | string;      // date saved
  imageUrl?: string | null;    // if missing, we show a color block
  onPreview?: () => void;
  onRemove?: () => void;
  className?: string;          // optional wrapper overrides
};

export default function FavoriteCard({
  title,
  tags,
  savedOn,
  imageUrl,
  onPreview,
  onRemove,
  className = '',
}: FavoriteCardProps) {
  const savedText = useMemo(() => {
    const d = typeof savedOn === 'string' ? new Date(savedOn) : savedOn;
    // Example: "Saved on May 24, 2025"
    return `Saved on ${d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;
  }, [savedOn]);

  return (
    <div
      className={`w-full max-w-[420px] overflow-hidden font-montserrat rounded-[28px] bg-white shadow-md ring-1 ring-black/5 ${className}`}
    >
      {/* Image (or placeholder color) */}
      <div className="relative h-[520px] w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
            priority={false}
          />
        ) : (
          // Placeholder color 
          <div className="h-full w-full bg-gradient-to-br from-[#c8e2ff] via-[#9fd0ff] to-[#8bbcff]" />
        )}
      </div>

      {/* Body */}
      <div className="px-6 pb-6 pt-7">
        <h3 className="text-[40px] font-semibold leading-none text-black">
          {title}
        </h3>

        {/* Tags */}
     
        <div className="mt-6 flex flex-wrap gap-3">
  {tags.map((t, i) => (
    <div
      key={`${t.label}-${i}`}
      className={[
        'inline-flex items-center rounded-2xl px-4 py-3 text-[18px] font-medium w-auto bg-gray-100 text-gray-400'].join(' ')}
    >
      {t.icon && <span className="mr-2">{t.icon}</span>}
      <span>{t.label}</span>
    </div>
  ))}
</div>

        {/* Saved on */}
        <p className="mt-7 text-[24px] font-medium text-black">{savedText}</p>

        {/* Preview and remove buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onPreview}
            className="text-[26px] text-black font-medium rounded-xl border border-gray-400 px-8 py-2 hover:bg-gray-200 transition hover:cursor-pointer"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="text-[26px] text-black font-medium rounded-xl border border-gray-400 px-8 py-2 hover:bg-gray-200 transition hover:cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
