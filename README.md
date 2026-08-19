# OmniCloud Ops Atlas

A Next.js site visualizing the workstreams, activities, cadences, and RACI ownership across OmniCloud's operational pillars.

## What this is

Originally scoped from the OmniCloud-Elevator-Pitch material as a visual workflow of "everything happening across the org, by pillar." Two parallel outputs came out of the initial design pass:

1. **This Next.js app** — the real, deployable site.
2. **A design canvas** ([Claude artifact](https://claude.ai/code/artifact/5043cd0e-8803-46ba-bcbb-da9bbcb458d4)) — used for visual review/markup before content was finalized here. Treat this repo as the source of truth going forward; the canvas was a drafting step, not a synced twin.

## Pillars covered

01. Delivery & Consulting Operations
02. Pre-Sales & Business Development
03. Marketing & Branding
04. Human Resources
05. Finance
06. Recruitment

Each pillar has workstreams, and each workstream has activities with a cadence (daily/weekly/monthly/quarterly/annual) and RACI ownership.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Routes: `/` and `/pillar/<slug>` for each pillar (`delivery`, `pre-sales`, `marketing`, `hr`, `finance`, `recruitment`).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Architecture

- **Framework**: Next.js (App Router) + TypeScript + Tailwind.
- **Content**: currently static, hardcoded in [`app/data.ts`](app/data.ts) as typed objects (`Pillar` → `Workstream` → `Activity`). No CMS or database wired up yet.
- **Components**: `app/components/` — `PillarCard`, `ActivityRow`, `CadenceBadge`, `RaciGrid`, `Sidebar`.

## In-progress: dynamic data source (Salesforce)

Decision made: back this content with **Salesforce** instead of a generic CMS, so pillar owners can maintain their own section through tools they already use.

- Schema designed (not yet deployed) under [`salesforce/`](salesforce/) as SFDX metadata — see that folder for the object model.
- Custom objects use an `OpsAtlas_` prefix (`OpsAtlas_Pillar__c`, `OpsAtlas_Workstream__c`, `OpsAtlas_Activity__c`) to stay identifiable and isolated in the org, with master-detail relationships (Activity → Workstream → Pillar).
- Target: **sandbox first**, not production — validate the schema and a real edit workflow there before any prod deployment.
- A read-only permission set (`OpsAtlas_Integration_ReadOnly`) is included for the future integration user this site's backend will authenticate as.
- **Not yet done**: Connected App / OAuth setup for server-to-server auth, the Next.js data-fetching layer (API routes/server components reading from Salesforce with caching), and migrating the content out of `app/data.ts`.

## Hosting

Not yet deployed. Planned: Vercel, with Salesforce credentials held server-side as environment variables (never exposed to the client) and cached (e.g. ISR) rather than queried live per page view.

## Repo

Private, under `Omnicloud-Software-Consulting-Pvt-Ltd`. Add collaborators via repo Settings → Collaborators, or `gh repo add-collaborator`.
