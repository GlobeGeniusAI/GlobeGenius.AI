import Link from "next/link";

export default function TrendingTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 pb-24 pt-20">
      {tags.map((tag) => (
        <Link
          key={tag}
          href="#"
          className="rounded-full border border-gray-400 px-10 py-2 text-[#ff6f61] text-lg font-montserrat font-medium hover:bg-gray-200 shadow-md transition"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
