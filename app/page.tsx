import { pillars, Pillar } from "@/app/data";
import PillarCard from "@/app/components/PillarCard";

function groupPillars(list: Pillar[]) {
  const groups: { group: string; items: Pillar[] }[] = [];
  for (const p of list) {
    const last = groups[groups.length - 1];
    if (last && last.group === p.group) {
      last.items.push(p);
    } else {
      groups.push({ group: p.group, items: [p] });
    }
  }
  return groups;
}

export default function OverviewPage() {
  const groups = groupPillars(pillars);

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

      {groups.map((g) => (
        <div key={g.group} className="mb-9">
          <div className="mb-3 font-mono text-[11px] tracking-wide text-muted uppercase">{g.group}</div>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
            {g.items.map((p) => (
              <PillarCard key={p.slug} pillar={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
