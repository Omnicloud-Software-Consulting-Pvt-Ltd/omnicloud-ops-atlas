import { notFound } from "next/navigation";
import { pillars, getPillar, activityCount } from "@/app/data";
import ActivityRow from "@/app/components/ActivityRow";

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export default async function PillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  return (
    <div className="mx-auto max-w-[860px] px-8 py-10 max-md:px-5 max-md:py-6">
      <header className="mb-6.5 border-b border-border pb-5">
        <div className="mb-2 font-mono text-[11.5px] tracking-wide text-accent uppercase">
          Pillar {pillar.index}
        </div>
        <h1 className="mb-2.5 text-[27px] font-bold tracking-tight text-ink">{pillar.name}</h1>
        <div className="text-[13px] text-ink-2">
          Head:{" "}
          <em className="border-b border-dashed border-border-strong text-muted not-italic">assign owner</em>
          {" · "}
          {pillar.workstreams.length} workstreams &middot; {activityCount(pillar)} activities
        </div>
      </header>

      {pillar.workstreams.map((ws) => (
        <section key={ws.title} className="mb-6.5">
          <h2 className="mb-3 text-[13px] font-semibold tracking-wide text-ink-2 uppercase">{ws.title}</h2>
          <div className="flex flex-col gap-2.5">
            {ws.activities.map((act) => (
              <ActivityRow key={act.name} activity={act} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
