import { Raci } from "@/app/data";

function Cell({ tag, value, emphasize }: { tag: string; value?: string; emphasize?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-0.5 rounded-lg border px-2.5 py-1.5 ${
        emphasize ? "border-accent-strong bg-accent-wash" : "border-border bg-surface-raised"
      }`}
    >
      <span className={`font-mono text-[10px] font-semibold tracking-wide ${emphasize ? "text-accent" : "text-muted"}`}>
        {tag}
      </span>
      <span className={`text-[12.5px] ${value ? "font-medium text-ink" : "text-muted"}`}>{value ?? "—"}</span>
    </div>
  );
}

export default function RaciGrid({ raci }: { raci: Raci }) {
  return (
    <div className="grid min-w-[340px] flex-[2_1_0%] grid-cols-4 gap-2">
      <Cell tag="R" value={raci.r} />
      <Cell tag="A" value={raci.a} emphasize />
      <Cell tag="C" value={raci.c} />
      <Cell tag="I" value={raci.i} />
    </div>
  );
}
