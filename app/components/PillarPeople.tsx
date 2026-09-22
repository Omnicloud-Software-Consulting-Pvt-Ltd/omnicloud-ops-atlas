import { Pillar, pillarRoster } from "@/app/data";

export default function PillarPeople({ pillar }: { pillar: Pillar }) {
  const people = pillarRoster(pillar);
  if (people.length === 0) return null;

  return (
    <aside className="w-[240px] flex-none max-lg:hidden">
      <div className="sticky top-10 rounded-2xl border border-border bg-surface p-4.5">
        <div className="mb-3.5 font-mono text-[11px] tracking-wide text-muted uppercase">People</div>
        <div className="flex flex-col gap-3">
          {people.map((p) => (
            <div key={p.role} className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-wash font-mono text-[11px] font-semibold text-accent">
                {p.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0">
                <div className="truncate text-[13px] font-medium text-ink">{p.name}</div>
                <div className="truncate text-[11px] text-muted">{p.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
