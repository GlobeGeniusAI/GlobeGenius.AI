export type Tag = {
  icon?: string; // e.g. "❤️"
  label: string; // e.g. "Romantic"
};

type Props = {
  tags: Tag[];
};

export default function Tags({ tags }: Props) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((tag, index) => (
        <div
          key={`${tag.label}-${index}`}
          className="inline-flex items-center rounded-lg px-2 py-1 text-[11px] font-medium bg-gray-100 text-gray-400"
        >
          {tag.icon && <span className="mr-1">{tag.icon}</span>}
          <span>{tag.label}</span>
        </div>
      ))}
    </div>
  );
}
