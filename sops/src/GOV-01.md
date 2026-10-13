# GOV-01 · SOP Catalog Governance & Document Control

*How the catalogue is numbered, owned, approved, reviewed and retired — and how the material that already exists is consolidated into it.*

| Field | Value |
|---|---|
| Document ID | GOV-01 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | D. Cross-Cutting Governance |
| Operating tier | Tier 4 — IT Management. Tier 4 owns every document in the catalogue, which keeps ownership in one place. |
| Review cycle | Annually. |

## 1.  Purpose

A catalogue without document control becomes the email threads it was built to replace. This document is the machinery that keeps it alive: how documents are numbered, who owns them, when they are reviewed, and how somebody proposes a change.

It also has a specific first task. Many organizations do not lack policy and procedure material — they lack a single index. Search the tenant for “standard operating procedure” and the material usually turns up in several places, with the IT policies missing from the page where people look for policies.

> **So this is a consolidation, not a creation**
> Section 9 is the consolidation worklist. It comes before writing anything new, because publishing a new catalogue alongside the existing partial ones would make the problem worse rather than better.

## 2.  The two document types, and why both exist

Many service desks already keep a tier-based guide library. The catalogue is domain-based. These are different axes and both are correct — the mistake would be to force one into the other.

|  | SOP | Tier guide |
|---|---|---|
| Answers | What the organization’s procedure is. | What this tier does during a shift. |
| Organised by | Domain — M365, ACC, DEV, GOV. | Tier — one knowledge base folder per tier. |
| Audience | Whoever must follow or approve the procedure. Often several tiers. | One tier, at the point of work. |
| Length | As long as the procedure needs. | Short. A guide that is not usable during a call is not a guide. |
| Authority | Authoritative. The SOP is the source. | Derived. A guide never contradicts its SOP; where it appears to, the SOP is right and the guide is a defect. |
| Lives in | The SOP library (§8). | The knowledge base, in its tier folder. |
| Example | ACC-04 Password Standard & Self-Service Password Reset. | Guide — Password Reset and Account Access (Tier 1). |

One SOP may yield several guides — one per tier that touches it — plus an end-user article under GOV-05. All three derive from one source, which is what stops them drifting apart. A guide written independently of its SOP is the origin of every contradictory instruction a service desk has ever given.

## 3.  Numbering

- Format: DOMAIN-nn. Domains are M365, ACC, DEV and GOV.
- Numbers are never reused and never renumbered. A retired document keeps its number and is marked retired, so that every reference in an older SOP, a ticket or an email still resolves.
- A new domain requires a Tier 4 decision. Four is deliberately few; a fifth should have to justify itself.
Renumbering is the single most tempting and most damaging thing to do to a catalogue. It breaks every cross-reference at once, silently, and there is no way to detect the breakage except by reading everything.

## 4.  Ownership and approval

| Role | Responsibility |
|---|---|
| Contributing tier | The tier that operates the procedure. Consulted before approval and again at review — a procedure the operating tier has not read will not be followed. |
| Anybody | May propose a change (§10). |

One owner and one approver per document. Shared ownership means no ownership, and a document with two owners is reviewed by neither.

## 5.  The control block

Every document opens with one. It reuses the fields your knowledge base already uses, typically Version, Tier, Owner, Created and Review, and adds what a catalogue needs. Appendix A is the template.

Two fields are worth explaining because they are unusual and both earn their place:

- Cutover-sensitive. Says whether the document changes when a migration in flight completes. Where a document is, it carries a current-state and a target-state section rather than being rewritten later.
- Evidence base. Cites the observed items that justify the document. It is what lets any entry be defended in a budget or audit conversation, and it stops the catalogue accumulating documents nobody can remember the reason for.
## 6.  Review cadence

| Document class | Cadence | Also triggered by |
|---|---|---|
| Cutover-sensitive, migration live | Every 6 months | The cutover completing — at which point the current-state section is removed |
| Identity and security | Annually | Any attempted social-engineering incident; any change to Entra configuration |
| Everything else | Annually | A change to the system it describes |
| A document that produced a defect report | Immediately | Any report under §10 that the procedure did not work in practice |

> **A document past its review date is flagged, not quietly trusted**
> Stale documentation is more dangerous than none, because people follow it. An expired SOP should be visibly expired in the register — the reader can then decide, rather than being misled.
> The register carries the review date for exactly this purpose, and a monthly check of overdue documents is a five-minute Tier 4 task.

## 7.  Recording gaps — the most valuable convention in the catalogue

This convention is worth making standard, because it is unusually good practice.

> **What it looks like**
> Picture a Tier 1 password guide with a section headed “Gaps — read before using this on a live call”. It says plainly that identity verification is not documented anywhere, that this is the most important missing piece, and that it has been left blank rather than invented.
> That single paragraph is worth more than a confident answer would have been. It tells the next reader exactly what to build; in this catalogue, that is ACC-06.

So: every document in this catalogue may carry a Gaps section, and is expected to where gaps exist. The rules are short.

- State what is unknown, not a guess dressed as procedure. A guessed value that later proves wrong costs more than an acknowledged blank.
- Say what would be needed to close it, so it becomes a task rather than a complaint.
- Where a value must be confirmed from a live system, mark it and say so — as ACC-04 §3 does with the password policy.
- Gaps are reviewed at each review. A gap that has been open for two cycles is either not important or not resourced, and either answer is useful.
## 8.  Where documents live

|  |  |
|---|---|
| SOP library | A single SharePoint document library with versioning on, one folder per domain, and the register as its index. Approved documents as PDF alongside the editable source, so that the approved version cannot be edited by accident. |
| Tier guides | The knowledge base, one folder per tier. If that structure already exists and works, keep it. |
| End-user articles | The knowledge base, per GOV-05. |
| Organization policies | The staff portal’s policies page, which is where people look. §9 makes sure the IT policies are actually linked there. |
| The register | The index. One row per document, with owner, approver, status, review date and operating tier. |

## 9.  Consolidating what already exists

In order, before new documents are added. Appendix B is the worklist.

1. Find out who has already begun. Look for existing workspaces, trackers or templates for SOP work. Where somebody has done work, duplicating it would be both wasteful and discouraging.
2. Inventory the existing published policies: the acceptable use policy, the information security policy (if it exists in more than one place, decide which copy is authoritative), and any other IT policies sitting in shared folders: network use, shared storage, sensitive data disposal, software acquisition, computer use, and email and accounts.
3. Map each existing policy to the catalogue entry that should align to it rather than replace it. Record each mapping in the register’s Basis column.
4. Fix the staff portal’s policies page. Policies often sit in a page’s own asset folder with nothing linking to them. This is the cheapest visible win available and it requires no new writing.
5. Adopt the existing guide format and tier folders rather than inventing a parallel structure (§2).
6. Only then publish the register and begin the first phase of writing.
## 10.  Change intake

1. Anybody may propose a change through the service desk against the document ID. No form, no committee — an ID and a sentence.
2. The owner responds within ten business days: accepted, accepted with modification, declined with a reason, or deferred to the next review with a date.
3. A report that a procedure turned out to be wrong in practice is a defect and takes priority over writing new documents. The register is worth nothing if people learn to work around it.
4. A change that alters a decision recorded in the document — a retention window, a naming convention, a service commitment — needs the approver, not just the owner.
5. Version increments: 0.x while draft, 1.0 on first approval, minor increment for clarification, major for a change in what the procedure requires.
## 11.  Retirement

1. A document is retired when the system it describes is gone, or when it is superseded by another entry.
2. It keeps its number, is marked RETIRED with a date and a pointer to whatever replaced it, and stays in the library. It does not leave.
3. The register keeps the row. A reader following an old reference must be able to find out what happened rather than encountering nothing.
4. Retirement is an approver decision, recorded like any other.
## 12.  Records

| Record | Held in | Retention |
|---|---|---|
| The register | SOP library | Live — permanent |
| Approved PDF of every version | SOP library | Permanent |
| Change proposals and their outcomes | Ticket | 3 years |
| Approver decisions on retention, naming and commitments | Document revision history | Permanent |
| Overdue-review log | IT governance record | 3 years |
| Consolidation worklist outcomes (§9) | Project record | Life of the project + 2 years |

## 13.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Tier model | Your tiers and escalation guide | The tier model this catalogue attaches to. Not superseded. |
| GOV-05 | Knowledge Base Article Standard | The derived end-user article format (§2). |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies the §10 response commitment. |
| GOV-02 | Service Desk Intake, Ticket Quality & Categorisation | The intake channel §10 uses. |
| M365-10 | SharePoint Site Request, Provisioning & Ownership | How the SOP library itself is provisioned and owned. |
| M365-16 | Retention, Legal Hold & eDiscovery | Retention of approved documents. |
| All entries | Every document in the catalogue | This document governs all of them. |

## Appendix A — Control block template

| Field | Guidance |
|---|---|
| Document ID | DOMAIN-nn. Never reused. |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | One of the four. |
| Operating tier | Which tier executes. Tier 4 owns regardless. |
| Review cycle | Per §6. |
| Related existing policy | Where an existing organization policy already covers this ground. Align, do not replace. |
| Closes / Gaps | What this document closes, and what it still cannot answer (§7). |

## Appendix B — Consolidation worklist

| ✓ | Task | Where |
|---|---|---|
| ☐ | Find out who started the SOP work and how far it got | Existing workspaces, trackers and templates |
| ☐ | If the information security policy exists in more than one place, decide which copy is authoritative | Wherever the copies live |
| ☐ | Confirm the acceptable use policy is current, and whether any draft revision supersedes it | IT policies library |
| ☐ | Link every IT policy from the policies page | The staff portal |
| ☐ | Map each existing policy to its catalogue entry | Register — Basis column |
| ☐ | Adopt the existing guide format and tier folders | The knowledge base tier folders |
| ☐ | Provision the SOP library with versioning and domain folders | New SharePoint library (M365-10) |
| ☐ | Publish the register as its index |  |
| ☐ | Then, and only then, start the first phase of writing |  |
