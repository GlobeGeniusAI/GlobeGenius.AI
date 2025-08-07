import Link from "next/link";

export default function TrendingTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 pb-20 pt-22 w-full max-w-6xl mx-auto">
      {tags.map((tag) => (
        <Link
          key={tag}
          href="#"
          className="rounded-full border border-gray-400 px-10 py-2 text-[#ff6f61] text-lg font-montserrat font-medium hover:bg-gray-200 shadow-md transition transform hover:-translate-y-1 active:translate-y-0 hover:cursor-pointer"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}
