import { pillars } from "@/app/data";
import PillarCard from "@/app/components/PillarCard";

export default function OverviewPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-8 py-11 max-md:px-5 max-md:py-6">
      <div className="mb-2.5 font-mono text-[11.5px] tracking-wide text-accent uppercase">
        OmniCloud Consulting &mdash; Organization Operations Map &middot; Draft v0.1
      </div>
      <h1 className="mb-3 text-[34px] leading-tight font-bold tracking-tight text-ink">
        Every stream of work, one map.
      </h1>
      <p className="mb-4 max-w-[64ch] text-[15px] leading-relaxed text-ink-2">
        Six pillars, their recurring workstreams, and who owns what. Cadence shows how
        often each activity runs; RACI shows who&apos;s Responsible, Accountable, Consulted
        and Informed. Open a pillar to see its full activity list.
      </p>
      <div className="mb-9 inline-flex items-center gap-1.5 rounded-full border border-dashed border-border-strong px-3 py-1.5 text-[12.5px] text-ink-2">
        <span className="text-accent">&#9998;</span> Starter template &mdash; replace placeholder heads and
        activities with the real ones
      </div>

      <div className="mb-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
        {pillars.map((p) => (
          <PillarCard key={p.slug} pillar={p} />
        ))}
      </div>
    </div>
  );
}
