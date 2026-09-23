export type Cadence = "per-project" | "daily" | "weekly" | "monthly" | "quarterly" | "annual";

export type Raci = {
  r?: string;
  a: string;
  c?: string;
  i?: string;
};

export type Activity = {
  name: string;
  note: string;
  cadence: Cadence;
  raci: Raci;
};

export type Workstream = {
  title: string;
  activities: Activity[];
};

export type Pillar = {
  slug: string;
  index: string;
  name: string;
  head?: string;
  group: string;
  // Extra roster roles to list in the People panel that don't appear in any
  // activity's RACI.
  people?: string[];
  workstreams: Workstream[];
};

// Fixed org roles mapped to the person currently holding them. Roles that
// change per-project or per-engagement (Solutions Architect, Project Lead,
// QA Lead, etc.) are intentionally left out and shown as role names only.
// Placeholder names below — swap in real people, or eventually source this
// from Salesforce (see salesforce/ + ops-atlas-salesforce-plan memory).
export const roster: Record<string, string> = {
  "Head of Delivery": "Ananya Rao",
  "Head of Pre-Sales": "Karthik Menon",
  "Head of Marketing": "Priya Nair",
  "Head of HR": "Sanjay Verma",
  "Head of Finance": "Lakshmi Iyer",
  "Head of Accounts": "Rahul Desai",
  "Head of Recruitment": "Divya Shah",
  "Resourcing Manager": "Arjun Kapoor",
  "HR Executive": "Meera Pillai",
};

export const cadenceLabel: Record<Cadence, string> = {
  "per-project": "Per Project",
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  annual: "Annual",
};

export const pillars: Pillar[] = [
  {
    slug: "marketing",
    index: "01",
    name: "Marketing & Branding",
    group: "Go-to-Market & Delivery",
    workstreams: [
      {
        title: "Content & Social",
        activities: [
          {
            name: "Social media posting",
            note: "Publish scheduled posts across channels",
            cadence: "daily",
            raci: { r: "Marketing Associate", a: "Head of Marketing" },
          },
          {
            name: "Content calendar review",
            note: "Plan next week's posts, blogs & assets",
            cadence: "weekly",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Delivery (case studies)" },
          },
        ],
      },
      {
        title: "Website & Digital",
        activities: [
          {
            name: "Inbound inquiry routing",
            note: "Triage website & form inquiries to Pre-Sales",
            cadence: "daily",
            raci: { r: "Marketing Associate", a: "Head of Marketing", i: "Pre-Sales" },
          },
          {
            name: "Website & analytics review",
            note: "Traffic, conversion & SEO health check",
            cadence: "weekly",
            raci: { r: "Digital Marketing", a: "Head of Marketing" },
          },
        ],
      },
      {
        title: "Campaigns & Events",
        activities: [
          {
            name: "Campaign performance report",
            note: "Reach, engagement & pipeline-influenced review",
            cadence: "monthly",
            raci: { r: "Digital Marketing", a: "Head of Marketing", i: "Leadership" },
          },
          {
            name: "Campaign & event planning",
            note: "Plan next quarter's campaigns, webinars & sponsorships",
            cadence: "quarterly",
            raci: { r: "Head of Marketing", a: "Leadership", c: "Pre-Sales" },
          },
        ],
      },
      {
        title: "Brand Governance",
        activities: [
          {
            name: "Newsletter send",
            note: "Compile & send the monthly company newsletter",
            cadence: "monthly",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Delivery, HR" },
          },
          {
            name: "Brand refresh & guideline review",
            note: "Review logo, templates & brand guidelines",
            cadence: "annual",
            raci: { r: "Head of Marketing", a: "Leadership", i: "All Departments" },
          },
        ],
      },
    ],
  },
  {
    slug: "pre-sales",
    index: "02",
    name: "Pre-Sales & Business Development",
    group: "Go-to-Market & Delivery",
    workstreams: [
      {
        title: "Lead & Pipeline Management",
        activities: [
          {
            name: "Lead triage & inbox review",
            note: "Qualify and route new inbound leads",
            cadence: "daily",
            raci: { r: "BDR", a: "Head of Pre-Sales", i: "Marketing" },
          },
          {
            name: "Pipeline review",
            note: "Stage, value and next-step review across open opportunities",
            cadence: "weekly",
            raci: { r: "Sales Team", a: "Head of Pre-Sales", i: "Leadership" },
          },
        ],
      },
      {
        title: "Proposals & SOWs",
        activities: [
          {
            name: "CRM / opportunity update",
            note: "Keep deal stage, value & notes current",
            cadence: "daily",
            raci: { r: "Sales Rep", a: "Head of Pre-Sales" },
          },
          {
            name: "Proposal / SOW drafting cycle",
            note: "Scope, estimate & draft statements of work",
            cadence: "weekly",
            raci: { r: "Solutions Architect", a: "Head of Pre-Sales", c: "Delivery, Finance" },
          },
        ],
      },
      {
        title: "Partner Relations",
        activities: [
          {
            name: "Partner alignment call",
            note: "Salesforce & ISV partner sync on pipeline and enablement",
            cadence: "monthly",
            raci: { r: "Partner Manager", a: "Head of Pre-Sales", c: "Marketing" },
          },
          {
            name: "Partner tier / certification renewal",
            note: "Maintain partner tier requirements & certifications",
            cadence: "annual",
            raci: { r: "Partner Manager", a: "Head of Pre-Sales", c: "Delivery, HR", i: "Leadership" },
          },
        ],
      },
      {
        title: "Forecasting & Planning",
        activities: [
          {
            name: "Revenue forecast",
            note: "Roll up committed / best-case / pipeline forecast",
            cadence: "monthly",
            raci: { r: "Head of Pre-Sales", a: "Leadership", c: "Finance" },
          },
          {
            name: "Territory & target planning",
            note: "Set quotas and territory splits for the coming quarter",
            cadence: "quarterly",
            raci: { r: "Head of Pre-Sales", a: "Leadership", i: "Sales Team" },
          },
        ],
      },
    ],
  },
  {
    slug: "delivery",
    index: "03",
    name: "Delivery & Consulting Operations",
    group: "Go-to-Market & Delivery",
    workstreams: [
      {
        title: "Kickoff: Handover & Staffing",
        activities: [
          {
            name: "Sales-to-delivery handover",
            note: "Transfer signed SOW, scope, client context & commercials from Pre-Sales to the delivery team",
            cadence: "per-project",
            raci: {
              r: "Solutions Architect",
              a: "Head of Delivery",
              c: "Head of Pre-Sales, Delivery Manager",
              i: "Client Stakeholders",
            },
          },
          {
            name: "Resource allocation & staffing assignment",
            note: "HR identifies and assigns available resources to the incoming project",
            cadence: "per-project",
            raci: {
              r: "HR Executive",
              a: "Head of Delivery",
              c: "Resourcing Manager, Head of HR",
              i: "Delivery Manager",
            },
          },
        ],
      },
      {
        title: "Active Project Delivery",
        activities: [
          {
            name: "Project status stand-up",
            note: "15-min sync on blockers & priorities",
            cadence: "daily",
            raci: { r: "Project Lead", a: "Delivery Manager", i: "Client Stakeholders" },
          },
          {
            name: "Project health / RAG report",
            note: "Red-amber-green status rollup across active engagements",
            cadence: "weekly",
            raci: { r: "Project Lead", a: "Head of Delivery", i: "Leadership" },
          },
        ],
      },
      {
        title: "Resource & Staffing",
        activities: [
          {
            name: "Timesheet & utilization review",
            note: "Track billable vs. bench hours across delivery teams",
            cadence: "daily",
            raci: { r: "PMO", a: "Delivery Manager", c: "Finance" },
          },
          {
            name: "Resource allocation & bench review",
            note: "Match upcoming demand against available bench",
            cadence: "weekly",
            raci: { r: "Resourcing Manager", a: "Head of Delivery", c: "Finance, Pre-Sales" },
          },
        ],
      },
      {
        title: "Quality & Governance",
        activities: [
          {
            name: "Quality / code review audit",
            note: "Spot-check delivery quality against org standards",
            cadence: "monthly",
            raci: { r: "QA Lead", a: "Head of Delivery", i: "Project Leads" },
          },
          {
            name: "Quarterly business review (QBR)",
            note: "Value delivered, roadmap, and renewal risk per client",
            cadence: "quarterly",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Pre-Sales, Client Sponsor", i: "Leadership" },
          },
        ],
      },
      {
        title: "Client Success & Planning",
        activities: [
          {
            name: "Steering committee",
            note: "Executive-level checkpoint on scope, risk & budget",
            cadence: "monthly",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Client Sponsor", i: "Leadership" },
          },
          {
            name: "Capacity & headcount planning",
            note: "Forecast delivery capacity against the sales pipeline",
            cadence: "annual",
            raci: { r: "Head of Delivery", a: "Leadership", c: "Finance, HR" },
          },
        ],
      },
    ],
  },
  {
    slug: "hr",
    index: "04",
    name: "Human Resources",
    group: "People",
    workstreams: [
      {
        title: "Attendance & Leave",
        activities: [
          {
            name: "Attendance & leave approvals",
            note: "Process leave requests & flag attendance exceptions",
            cadence: "daily",
            raci: { r: "HR Executive", a: "Head of HR", c: "Delivery Managers" },
          },
          {
            name: "Grievance & employee relations review",
            note: "Review and act on open employee concerns",
            cadence: "weekly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Leadership" },
          },
        ],
      },
      {
        title: "Onboarding & Exits",
        activities: [
          {
            name: "Onboarding / exit formalities",
            note: "Process joiner & leaver paperwork as they occur",
            cadence: "daily",
            raci: { r: "HR Executive", a: "Head of HR", c: "IT, Finance", i: "Delivery Managers" },
          },
          {
            name: "New joiner induction",
            note: "Orientation session for the week's new hires",
            cadence: "weekly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Delivery" },
          },
        ],
      },
      {
        title: "Payroll & Compliance",
        activities: [
          {
            name: "Payroll input prep",
            note: "Compile attendance, leave & variable pay inputs",
            cadence: "monthly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Finance" },
          },
          {
            name: "Policy compliance check",
            note: "Verify statutory & internal policy adherence",
            cadence: "monthly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Finance", i: "Leadership" },
          },
        ],
      },
      {
        title: "Performance & Development",
        activities: [
          {
            name: "Performance review cycle",
            note: "Goal-setting & review across all delivery teams",
            cadence: "quarterly",
            raci: { r: "Head of HR", a: "Leadership", c: "Delivery Managers" },
          },
          {
            name: "Appraisal & increment cycle",
            note: "Annual compensation review & promotion cycle",
            cadence: "annual",
            raci: { r: "Head of HR", a: "Leadership", c: "Finance", i: "All Employees" },
          },
        ],
      },
    ],
  },
  {
    slug: "recruitment",
    index: "05",
    name: "Recruitment",
    group: "People",
    workstreams: [
      {
        title: "Sourcing & Screening",
        activities: [
          {
            name: "Resume screening",
            note: "Screen inbound applications against open roles",
            cadence: "daily",
            raci: { r: "Recruiter", a: "Head of Recruitment" },
          },
          {
            name: "Candidate outreach",
            note: "Source & message candidates for priority roles",
            cadence: "daily",
            raci: { r: "Recruiter", a: "Head of Recruitment" },
          },
        ],
      },
      {
        title: "Interview Pipeline",
        activities: [
          {
            name: "Interview scheduling & pipeline review",
            note: "Coordinate panels, track candidate stage",
            cadence: "weekly",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "Delivery Managers" },
          },
          {
            name: "Offer & negotiation tracking",
            note: "Prepare, send & track outstanding offers",
            cadence: "weekly",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "HR, Finance" },
          },
        ],
      },
      {
        title: "Reporting & Vendor Relations",
        activities: [
          {
            name: "Hiring report",
            note: "Openings, time-to-fill & source-of-hire rollup",
            cadence: "monthly",
            raci: { r: "Head of Recruitment", a: "Leadership", i: "HR" },
          },
          {
            name: "College / vendor relationship review",
            note: "Check in with campus & staffing vendor partners",
            cadence: "monthly",
            raci: { r: "Recruiter", a: "Head of Recruitment" },
          },
        ],
      },
      {
        title: "Workforce Planning",
        activities: [
          {
            name: "Campus hiring drive",
            note: "Run the quarterly campus / bulk-hiring cycle",
            cadence: "quarterly",
            raci: { r: "Head of Recruitment", a: "Leadership", c: "HR, Delivery" },
          },
          {
            name: "Workforce & headcount planning",
            note: "Align next year's hiring plan to delivery & sales forecast",
            cadence: "annual",
            raci: { r: "Head of Recruitment", a: "Leadership", c: "Finance, Delivery" },
          },
        ],
      },
    ],
  },
  {
    slug: "finance",
    index: "06",
    name: "Finance",
    group: "Finance",
    people: ["Head of Accounts"],
    workstreams: [
      {
        title: "Transactions & Reconciliation",
        activities: [
          {
            name: "Transaction reconciliation",
            note: "Match bank & ledger transactions",
            cadence: "daily",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "Invoice & expense processing",
            note: "Process vendor invoices & employee expense claims",
            cadence: "daily",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
        ],
      },
      {
        title: "Billing & Collections",
        activities: [
          {
            name: "AR / AP aging review",
            note: "Chase overdue receivables, flag payable due dates",
            cadence: "weekly",
            raci: { r: "Accounts Executive", a: "Head of Finance", i: "Leadership" },
          },
          {
            name: "Client billing & timesheet sync",
            note: "Reconcile billable hours against invoices raised",
            cadence: "weekly",
            raci: { r: "Accounts Executive", a: "Head of Finance", c: "Delivery" },
          },
        ],
      },
      {
        title: "Close & Reporting",
        activities: [
          {
            name: "Financial close",
            note: "Close the books & produce monthly statements",
            cadence: "monthly",
            raci: { r: "Head of Finance", a: "Leadership" },
          },
          {
            name: "Board / investor reporting",
            note: "Prepare quarterly financial & operational reporting pack",
            cadence: "quarterly",
            raci: { r: "Head of Finance", a: "Leadership" },
          },
        ],
      },
      {
        title: "Payroll & Statutory",
        activities: [
          {
            name: "Payroll processing",
            note: "Run payroll & statutory deductions",
            cadence: "monthly",
            raci: { r: "Head of Finance", a: "Leadership", c: "HR" },
          },
          {
            name: "Audit & statutory filing",
            note: "Coordinate the annual audit & regulatory filings",
            cadence: "annual",
            raci: { r: "Head of Finance", a: "Leadership", c: "External Auditor" },
          },
        ],
      },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

export function cadenceMix(pillar: Pillar): Record<Cadence, number> {
  const mix: Record<Cadence, number> = {
    "per-project": 0,
    daily: 0,
    weekly: 0,
    monthly: 0,
    quarterly: 0,
    annual: 0,
  };
  for (const ws of pillar.workstreams) {
    for (const act of ws.activities) {
      mix[act.cadence] += 1;
    }
  }
  return mix;
}

export function activityCount(pillar: Pillar): number {
  return pillar.workstreams.reduce((sum, ws) => sum + ws.activities.length, 0);
}

export function pillarRoster(pillar: Pillar): { role: string; name: string }[] {
  const seen = new Set<string>();
  const entries: { role: string; name: string }[] = [];
  for (const ws of pillar.workstreams) {
    for (const act of ws.activities) {
      for (const field of [act.raci.r, act.raci.a, act.raci.c, act.raci.i]) {
        if (!field) continue;
        for (const role of field.split(",").map((s) => s.trim())) {
          if (roster[role] && !seen.has(role)) {
            seen.add(role);
            entries.push({ role, name: roster[role] });
          }
        }
      }
    }
  }
  for (const role of pillar.people ?? []) {
    if (roster[role] && !seen.has(role)) {
      seen.add(role);
      entries.push({ role, name: roster[role] });
    }
  }
  return entries;
}
