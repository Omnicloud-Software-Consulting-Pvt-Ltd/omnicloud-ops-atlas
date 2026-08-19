import { Activity } from "@/app/data";
import CadenceBadge from "./CadenceBadge";
import RaciGrid from "./RaciGrid";

export default function ActivityRow({ activity }: { activity: Activity }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4">
      <div className="flex min-w-[240px] flex-[1.4_1_0%] items-start gap-3">
        <CadenceBadge cadence={activity.cadence} />
        <div>
          <div className="mb-0.5 text-sm font-semibold text-ink">{activity.name}</div>
          <div className="text-[12.5px] text-muted">{activity.note}</div>
        </div>
      </div>
      <RaciGrid raci={activity.raci} />
    </div>
  );
}
