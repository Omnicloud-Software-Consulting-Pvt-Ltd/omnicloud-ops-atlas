import { Cadence, cadenceLabel } from "@/app/data";

const darkTextCadences: Cadence[] = ["monthly", "quarterly", "annual"];

const bg: Record<Cadence, string> = {
  daily: "bg-cad-daily",
  weekly: "bg-cad-weekly",
  monthly: "bg-cad-monthly",
  quarterly: "bg-cad-quarterly",
  annual: "bg-cad-annual",
};

export default function CadenceBadge({ cadence }: { cadence: Cadence }) {
  const textColor = darkTextCadences.includes(cadence) ? "text-ink" : "text-white";
  return (
    <span
      className={`flex-none rounded-full px-2 py-[3px] font-mono text-[10.5px] font-semibold uppercase tracking-wide whitespace-nowrap ${bg[cadence]} ${textColor}`}
    >
      {cadenceLabel[cadence]}
    </span>
  );
}
