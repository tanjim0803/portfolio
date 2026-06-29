export default function TimelineCard({ item }) {
  return (
    <div className="relative bg-[#1e2024] p-8 rounded-2xl shadow-xl border border-transparent hover:border-zinc-800 transition-all duration-300 group">
      {/* Timeline connection point circle node */}
      <div className="absolute -left-[36.5px] top-10 w-[20px] h-[20px] rounded-full bg-[#191b1f] border-4 border-[#141518] transition-colors duration-300 group-hover:border-primary z-10" />

      {/* Timeline horizontal connecting line bridge */}
      <div className="absolute -left-[24px] top-[48px] w-[24px] h-[4px] bg-[#141518]" />

      <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
        <div>
          <h4 className="font-poppins text-2xl font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
            {item.title}
          </h4>
          <p className="font-poppins text-sm text-body font-medium">{item.subtitle}</p>
        </div>

        {/* Right accent metadata badge */}
        <span className="font-poppins bg-[#141518] text-primary text-[11px] font-bold px-3 py-1.5 rounded shadow-inner tracking-wider">
          {item.badge}
        </span>
      </div>

      <hr className="border-zinc-800/60 my-4" />

      <p className="font-poppins text-body text-base leading-relaxed font-light">
        {item.description}
      </p>
    </div>
  );
}
