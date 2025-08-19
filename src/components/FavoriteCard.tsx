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
    return `Saved on ${d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;
  }, [savedOn]);

  return (
    <div
      className={`w-full max-w-[236px] overflow-hidden font-montserrat rounded-[16px] bg-white shadow-md ring-1 ring-black/5 ${className}`}
    >
      {/* Image */}
      <div className="relative h-[292px] w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 236px"
            priority={false}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#c8e2ff] via-[#9fd0ff] to-[#8bbcff]" />
        )}
      </div>

      {/* Body */}
      <div className="px-3 pb-3 pt-4">
        <h3 className="text-[22px] font-semibold leading-none text-black">
          {title}
        </h3>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t, i) => (
            <div
              key={`${t.label}-${i}`}
              className="inline-flex items-center rounded-lg px-2 py-1 text-[11px] font-medium bg-gray-100 text-gray-400"
            >
              {t.icon && <span className="mr-1">{t.icon}</span>}
              <span>{t.label}</span>
            </div>
          ))}
        </div>

        {/* Saved on */}
        <p className="mt-4 text-[14px] font-medium text-black">{savedText}</p>

        {/* Buttons */}
        <div className="mt-3 flex items-center justify-between gap-1.5">
          <button
            type="button"
            onClick={onPreview}
            className="text-[15px] text-black font-medium rounded-md border border-gray-400 px-4 py-1 hover:bg-gray-200 transition hover:cursor-pointer"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="text-[15px] text-black font-medium rounded-md border border-gray-400 px-4 py-1 hover:bg-gray-200 transition hover:cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}