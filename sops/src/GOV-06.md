# GOV-06 · Service Commitments, Priority & Escalation

*A capacity-aware replacement for the SLA matrix — built on the published four-tier model, and designed to be held by a department that is understaffed and whose people wear several hats.*

| Field | Value |
|---|---|
| Document ID | GOV-06 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | D. Cross-Cutting Governance |
| Operating tier | Tier 4 — IT Management (“the homeowners”). Every tier operates under it; Tier 4 owns and declares. |
| Review cycle | Quarterly for the first year, then annually. Coverage in §6 is reviewed whenever staffing changes. |
| Supersedes | Any inherited SLA matrix and its hourly breach notifications. |

## 1.  Purpose — and why the present matrix is not working

This document replaces the existing SLA matrix. It sets out what the IT department commits to, expressed in terms it can actually hold, and it gives the department a way to say honestly when it is over capacity instead of failing quietly.

The usual symptom looks like this: a desk carrying a handful of tickets in simultaneous SLA violation, the oldest a routine request whose target date passed ninety days ago, each one re-notifying every hour.

> **What that pattern actually tells us**
> A target that is missed by ninety days and re-announced every hour is not a target. It is an alarm that nobody can act on, attached to a promise the department never had the capacity to make.
> The failure is in the design, not the people. A matrix built on the assumption of a staffed enterprise service desk, applied to a department where most people hold several roles at once, will generate breaches indefinitely — and the breaches carry no information, because everything is always breaching.
> Worse, the requester is misled. Somebody waiting on that request was told, implicitly, that it would be handled by its target date. Nobody ever told them otherwise. An honest “we are not going to get to this, and here is why” would have served them better the day after the target than silence has since.

So the objective of this document is narrow and deliberate: make fewer promises, make them about things IT controls, publish the capacity behind them, and make it possible to declare when that capacity has run out.

## 2.  Scope

- Every request and incident that reaches IT through any channel, at every tier of the published four-tier model.
- Priority definition, acknowledgement and update commitments, escalation, and the meaning of resolution.
- The declared capacity states in §7 and the protected capacity in §8.
- What IT reports, to whom, and how often.
Out of scope: the ticket system’s configuration and data hygiene, which is GOV-02 and is a prerequisite to measuring anything here; formal security incident handling, which is GOV-03 and takes precedence over every commitment below; change windows, which are GOV-04.

## 3.  Four principles this model is built on

### 3.1  Commit to what the department controls

IT controls whether a request is acknowledged, whether a named person owns it, and whether the requester is told what is happening. IT frequently does not control when it is finished — that can depend on a vendor, a part, a licence, a decision from elsewhere in the organization, or a person being available. Commitments in §5 are therefore about acknowledgement and communication. Resolution targets exist only where the organization genuinely cannot tolerate delay.

This is a smaller promise. It is also one that can be kept, and a promise that is kept is worth more than a larger one that is not.

### 3.2  Publish the coverage, not an abstraction

“Two business days” implies a desk that is staffed for two business days. Where Tier 3 is two or three senior engineers who also run the migrations, the network and the core business systems, an abstraction like that hides the truth from everybody including IT. Section 6 states who is actually available and when, and every commitment is expressed in coverage hours rather than clock hours.

### 3.3  Make over-capacity declarable

The worst available outcome is the current one: the department is over capacity, nothing says so, targets are missed silently, and the requester finds out by waiting. Section 7 introduces three declared capacity states with published effects. Declaring Constrained is not an admission of failure — it is the mechanism by which the department tells the truth on time.

### 3.4  Protect the work that reduces future demand

On most desks, identity and access work is the single biggest slice of ticket volume. The things that would reduce it, like self-service password reset, identity and device management projects, and the guides in the knowledge base, are all project work. If ticket flow is allowed to consume all available capacity, none of them finishes, and next year’s volume is the same or worse.

Section 8 therefore reserves a stated share of each tier’s week as protected, non-commitment-bearing capacity. This is not a benefit. It is the only route out of the backlog, and it is the first thing an understaffed department loses if it is not written down.

### 3.5  A note on many hats

> **Why commitments attach to tiers, and capacity attaches to people**
> In a small shop one person may hold several roles across two or three tiers. That has a specific consequence: the department’s capacity is not the sum of its headcount, and one person’s absence can remove a tier’s ability to respond at all.
> So commitments in §5 are made by tier — a requester deals with “Tier 2”, not with an individual — while the capacity states in §7 are keyed to named role holders being present or absent. That is what lets the model degrade honestly when one person is on leave, rather than pretending the tier is unaffected.

## 4.  Priority

Priority is derived from what is affected and how badly, not from how urgently it was described. The requester states the facts; IT sets the priority from this table. Where a requester disagrees, that is a Tier 4 question and is answered, not argued at the desk.

| Priority | Applies when | Typical examples | Notes |
|---|---|---|---|
| P1 Critical | An organization-wide system is down; or a meeting, session or event in progress cannot proceed; or a security incident, suspected compromise or data exposure; or a legal or regulatory clock is running. | Authentication outage. Network outage. Ransomware indication. A live session with no working AV. | The only priority carrying a resolution target. Takes precedence over everything, including protected capacity. |
| P2 High | A department cannot do its work; or one person is completely blocked with no workaround; or a room is down with a session scheduled within 24 hours. | A department’s shared mailbox inaccessible. A staff member locked out with no MFA method. A business-critical form blocked at a deadline. | The workhorse priority. Most genuine problems are P2. |
| P3 Normal | One person is degraded but working; or a room is down with nothing imminent; or a standard access or permission request. | A slow laptop. A printer fault with another printer nearby. Adding a member to a shared mailbox. | No resolution target. Update cadence only. |
| P4 Scheduled | Something new is being asked for; or the requester agrees it can wait for a scheduled window. | New software. A new SharePoint site. A hardware refresh. A reporting request. | Scheduled by agreement. Suspended entirely under Degraded. |

Two rules prevent drift. First, urgency asserted by the requester does not raise priority — impact and scope do. Second, a P1 is declared, not inferred: whoever declares it says so explicitly in the ticket and in the tier channel, because a P1 changes what everybody else is doing.

## 5.  What IT commits to, and what it does not

### 5.1  Two clocks

| Clock | What it measures |
|---|---|
| Acknowledged and owned | From arrival to the moment a named person at the correct tier has the ticket and the requester has been told so. This is the department’s primary commitment. |
| Next update | The maximum interval the requester will go without hearing something. An update may be “no progress, here is why, here is when we next look” — that is a legitimate update and is far better than silence. |

### 5.2  The commitments

| Priority | Acknowledged and owned | Update cadence | Resolution |
|---|---|---|---|
| P1 | 15 minutes within coverage. 1 hour outside coverage, for outage and security only. | Hourly until mitigated, then daily until closed. | Mitigate within 4 hours, or Tier 4 takes the decision and communicates organization-wide. Mitigation is not closure (§10). |
| P2 | 4 coverage hours. | Daily. | No target. A stated plan with an expected date within 2 coverage days. |
| P3 | 1 coverage day. | Every 3 coverage days. | No target. Scheduled against available capacity. |
| P4 | 3 coverage days. | On state change, or fortnightly. | By agreement with the requester at acknowledgement. |

### 5.3  Why there is no resolution target below P1

Because a stretched department cannot honour one, and pretending otherwise is what produces the ninety-day breach. A resolution target is only meaningful where capacity is reserved to meet it. Below P1, capacity is genuinely contended — by other tickets, by protected project work, and by the several other roles each person holds.

What replaces it is stronger than it sounds. Under this model a P3 requester is told, within one working day, that a named person has their ticket, and then hears something every three days until it is done. They are never left wondering. They may be told the honest answer — that it is queued behind higher-impact work — and they may be told it will not be done at all, with a reason (§9.4). All three of those outcomes are more useful than a date that will be missed.

> **What IT is explicitly not promising**
> That every request will be completed. An understaffed department that cannot decline work does not thereby complete more of it — it simply accumulates silent failures. Section 9.4 makes declining an explicit, communicated, recorded decision at Tier 4.
> That coverage is continuous. Section 6 states when it is not.
> That priority reflects the requester’s stated urgency. Section 4 sets priority on impact.

## 6.  Coverage — the hours behind the commitments

Every commitment in §5 is expressed in coverage hours. This section states what those are. It is the section most likely to be uncomfortable to publish and the most important to publish accurately, because every target above is meaningless without it.

| Tier | Who | Coverage | Outside coverage |
|---|---|---|---|
| Tier 1 The front door | Front-line technicians (often part-time or junior), supervised by full-time IT staff. | On-site across the week.  [ your hours ] | Requests queue. Nothing is lost; nothing is acknowledged until coverage resumes. Holiday and seasonal dips reduce Tier 1 materially and must be published, not discovered. |
| Tier 2 The living space | Full-time technicians, part-week on-site and part-week remote.  [ your allocation ] | [ your hours ], mixed on-site and remote across the working week. | P1 only, by escalation from Tier 3 or Tier 4. No P2–P4 commitment outside coverage. |
| Tier 3 The attic | Senior engineers, who also carry the projects, the network, identity and the core business systems. | [ your hours ], and materially reduced during any declared cutover window (§7). | Outage and security only. Tier 3 is escalation-only in normal operation and users do not contact it directly. |
| Tier 4 The homeowners | IT leadership. | Working week, with the understanding that Tier 4 capacity is largely committed to decisions rather than queue work. | Security incidents and organization-wide outages. |

> **Fill these in with your own numbers before you publish**
> The coverage figures above are deliberately left blank rather than invented. An SLA whose coverage numbers are guessed is the same failure as the one this document replaces, one layer down.
> Staffing is exactly the kind of fact that must come from whoever runs IT, not from a template.
> Publishing reduced coverage over holidays and quiet seasons is separately important. Otherwise it is discovered by whoever needs help that week.

## 7.  Capacity states

The mechanism that makes this model honest. At any moment each tier is in one of three declared states, and the state is visible to the community.

| State | Declared when | Effect on commitments | Declared by |
|---|---|---|---|
| NORMAL | Default. | All §5 commitments apply. | — |
| CONSTRAINED | Open tickets in the tier exceed the stated threshold, or a named role holder is absent and unbacked. | P1 and P2 unchanged. P3 acknowledgement extends to 3 coverage days and cadence to weekly. P4 acknowledgement suspends — requests are accepted and queued without a target. | Tier lead. Recorded and posted in the tier channel. |
| DEGRADED | A P1 is active; or two or more role holders in the tier are absent; or a declared migration cutover window is live. | P1 and P2 only. P3 acknowledged with an honest statement that it is queued with no date. P4 not accepted — the requester is told to resubmit after the state clears. | Tier 4. Posted to the community on the knowledge base as well as in Teams. |

> **Declaring a state is not a failure report**
> It is the opposite. A department that declares Constrained on Monday has told the truth on Monday. A department that stays silent and misses its targets tells the same truth months later, badly, to somebody who has been waiting the whole time.
> Tier leads should expect to declare Constrained regularly. If a tier is never in Constrained while its targets are being missed, the state mechanism is not being used and the model has quietly reverted to the one it replaced.

Two safeguards. A state is declared with a reason and an expected review date, never open-ended — Appendix B is the template. And a state cannot suppress a P1 or a security matter; GOV-03 takes precedence over every commitment and every state in this document.

## 8.  Protected capacity

Each tier reserves a stated share of its week for project, improvement and documentation work. Protected capacity carries no §5 commitments, is diarised in advance, and is not the residue left after the queue is clear — because there is no such residue.

| Tier | Protected | What it is for, and why the figure is what it is |
|---|---|---|
| Tier 1 | 10% | Training, and writing up answers given twice into the knowledge base, which is the third of GOV-02’s three asks. Tier 1 is the most queue-driven tier, so the share is small but must be non-zero or the guides never get written. |
| Tier 2 | 20% | Imaging, device enrollment waves, inventory work. Wave work is schedulable and therefore protectable; treating it as interruptible is why each wave restarts from scratch (DEV-01 §8). |
| Tier 3 | 40% | The projects. Tier 3 often carries an identity migration, a device-management transition and a file-share retirement at the same time. These are the projects that reduce future ticket volume, and they are competing with unbounded queue flow. Forty per cent is the difference between finishing them this year and not finishing them. |
| Tier 4 | 60% | Decisions, vendors, planning, and this catalogue. Tier 4 queue work is mostly approvals, which are short; the capacity is needed for the work that only Tier 4 can do. |

A P1 suspends protected capacity at every tier for its duration. Nothing else does. In particular, a P3 backlog does not — that is the entire point, and it is the commitment most likely to be quietly abandoned under pressure.

## 9.  Escalation and notification

### 9.1  The existing rule stands

Escalation changes the tier, not the queue. The category and the full history travel with the ticket, and nobody starts over. That rule is not modified here.

Escalation is on scope, not difficulty. A fiddly problem that is still inside a tier’s remit stays with that tier, and the help is asked for in the tier channel rather than by moving the ticket.

### 9.2  When a commitment is at risk

1. At 75% of an acknowledgement target: one notice to the assignee. Nobody else.
2. At the target: one notice to the tier lead. Not repeated — the tier lead now owns the decision and repetition adds nothing.
3. On a second consecutive missed update on the same ticket: one notice to Tier 4, requiring a decision from the fixed list in §9.4.
4. No ticket generates more than three automated notices in its lifetime. Backlog age is a weekly report, not an alert stream.

> **The hourly re-notification is switched off, and that is the first change to make**
> It is producing noise and nothing else. A handful of tickets re-announcing themselves every hour trains everyone who receives it to filter the whole category, which means the one notice that mattered is also filtered.
> This is the cheapest item in the whole catalogue to implement and it should not wait for the rest of this document to be approved.

### 9.3  Tier 4 decision, when a ticket reaches it

Tier 4 chooses exactly one of these, records it, and the requester is told which:

| Decision | Meaning |
|---|---|
| Re-prioritise | The priority was wrong. Set the correct one and the corresponding commitments apply from now. |
| Reassign | It is at the wrong tier or the wrong person. Move it; history travels with it. |
| Accept with a date | It is genuinely queued behind higher-impact work. Give the requester a real date and hold it. This is the honest answer for most aged P3s. |
| Close as will-not-do | The organization is not going to do this. Say so, with a reason, to the requester. |
| Redirect | It was never IT’s. Send it to the department that owns it, from the staff directory, and log the redirection (§10). |

### 9.4  On declining work

A department that cannot decline work does not complete more of it. It accumulates silent failures, and every one of them is a person who was told nothing. Closing a request as will-not-do, with a reason, to a named requester, is a legitimate and respectful outcome, and it is a Tier 4 decision rather than a desk-level one.

The test is simple: would we rather tell this person no this month, or leave them waiting for half a year? An unresourced matrix answers that question by default, and answers it badly.

## 10.  What “resolved” means

| Outcome | Counts as resolved when |
|---|---|
| Fixed | The requester confirms it, or three coverage days pass after a stated fix with no response. Not when the technician believes it is fixed. |
| Redirected | The department that owns it has it and the redirection is logged. Redirecting a ticket correctly counts as resolving it — that is already written into Tier 1’s responsibilities and it stays. |
| Mitigated (P1 only) | Service is restored. Mitigation is not closure: the P1 stays open at daily cadence until the underlying cause is addressed or a follow-up ticket carries it. |
| Will-not-do | A Tier 4 decision is recorded and the requester has been told, with a reason. |
| Duplicate or withdrawn | Linked to the surviving ticket, or the requester has withdrawn it. |

What does not count: closing for inactivity without a stated fix, closing to clear a queue before a report, or closing and reopening to restart a clock. All three corrupt the measurement in §11, and the department needs that measurement more than it needs a clean-looking dashboard.

## 11.  Measurement, and the one number leadership should read

Measurement here has a prerequisite. If your ticket export is padded with booking appointments and automated alerts, and working out who raised each ticket takes guesswork, then until GOV-02 fixes intake and categorisation everything below is directional rather than exact, and should be reported as such.

| Measure | Why it is measured | Reported |
|---|---|---|
| % acknowledged within target, by tier and priority | The primary commitment, and the thing the department controls. This is the number IT should be held to. | Monthly |
| % with an update within cadence | The second commitment. Catches the ticket that was owned and then went quiet. | Monthly |
| Backlog age profile — median and 90th percentile, by tier | Shows whether the queue is ageing, without pretending an age target exists. | Monthly |
| Tickets closed as will-not-do, and redirections | Both are legitimate outcomes. If they are zero, the department is not declining anything and §9.4 is not being used. | Monthly |
| P1 count, and time to mitigate | The only resolution commitment. | Monthly, and per incident |
| Capacity-state days per tier per month | See below. | Monthly, to leadership |

> **Capacity-state days is the number that matters**
> If Tier 2 spends fourteen days of a month in Constrained and four in Degraded, that is not a performance problem to be managed. It is a statement, in the department’s own operating data, that the work arriving exceeds the capacity available to do it.
> That converts this document from a stick into an instrument. The current matrix measures how far IT falls short of a standard nobody resourced. This one measures how often the department runs out of capacity — which is the question leadership is actually in a position to act on.
> It is also the most honest possible staffing case: not an opinion from IT about being busy, but a count of declared days, published monthly, against commitments the department itself proposed.

## 12.  Adopting this

In order. Steps 1 and 2 are worth doing whether or not the rest of this document is approved.

1. Switch off the hourly breach re-notification. It is producing noise and masking the one notice that matters (§9.2). Cheapest item in the catalogue; do it this week.
2. Re-baseline the existing backlog once, and do not retro-apply these commitments to it. Every ticket currently in violation gets exactly one Tier 4 decision from the §9.3 list. The oldest breached ticket is the test case: it is either accepted with a real date, redirected, or closed as will-not-do and the requester told. It is not left as it is.
3. Fill in the §6 coverage figures from whoever runs IT, including holiday and seasonal reductions, and publish them.
4. Set the Constrained ticket thresholds per tier. Derive them from the re-baselined backlog rather than choosing round numbers.
5. Configure the tier and priority fields in the ticketing system so that §4 and §5 can be measured at all (GOV-02).
6. Run 30 days measuring acknowledgement only, internally, with no external commitment published. This establishes whether the targets in §5.2 are the right ones before the organization is told about them.
7. Adjust §5.2 against what those 30 days show. A target the department misses in a normal month is the wrong target, not a failure.
8. Publish to the community: the commitments, the coverage, and the capacity states — so that a declared state means something to the person reading it.
9. Begin monthly reporting, including capacity-state days, to leadership.
## 13.  Records

| Record | Held in | Retention |
|---|---|---|
| Capacity state declarations, with reason and review date | IT operations record + tier channel | 3 years — this is the §11 evidence base |
| P1 declarations and mitigation timeline | Incident record (GOV-03) | 7 years |
| Tier 4 decisions under §9.3, with the reason given to the requester | Ticket | 3 years |
| Will-not-do closures | Ticket + monthly report | 3 years |
| The 30-day baseline from §12 step 6 | Project record | Life of this document |
| Monthly reports to leadership | IT governance record | 5 years |

## 14.  Related documents

| ID | Title | Relationship |
|---|---|---|
| GOV-02 | Service Desk Intake, Ticket Quality & Categorisation | Prerequisite. Nothing in §11 is measurable until intake and categorisation are fixed. |
| GOV-03 | Security Incident Response & Escalation Matrix | Takes precedence over every commitment and capacity state here. |
| GOV-04 | IT Change Management & Maintenance Windows | Cutover windows trigger Degraded under §7. |
| GOV-05 | Knowledge Base Article Standard | Where Tier 1’s protected capacity output goes (§8). |
| ACC-03 / ACC-04 / ACC-05 | MFA, Password & Lockout documents | Their service levels are stated per this document. They are also the largest single lever on the volume §11 measures. |
| DEV-01 | Device Enrollment & Lifecycle | Wave work is Tier 2 protected capacity (§8). |
| ACC-01 | Account Lifecycle | Its §8 targets are restated in this document’s terms on next revision. |

## Appendix A — Priority decision card

Keep at the desk. Work down; stop at the first line that matches.

|  | Is this true? | Then |
|---|---|---|
| 1 | An organization-wide system is down, or there is a security incident, suspected compromise or data exposure. | P1 — declare it in the ticket and the tier channel |
| 2 | A meeting, session or event is happening right now and cannot proceed. | P1 |
| 3 | A legal or regulatory clock is running. | P1 — and tell Tier 4 |
| 4 | A whole department cannot do its work. | P2 |
| 5 | One person is completely blocked and has no workaround. | P2 |
| 6 | A room is down and a session is scheduled in it within 24 hours. | P2 |
| 7 | One person is working but degraded, or a room is down with nothing imminent. | P3 |
| 8 | It is a standard access or permission request. | P3 |
| 9 | It is a request for something new, or the requester agrees it can wait. | P4 |
| 10 | It is not IT’s at all. | Redirect to the owning department, from the staff directory, and log it — that counts as resolved |

The requester saying it is urgent does not move it up this list. Impact and scope do. If they disagree, that is a Tier 4 question — take it there rather than settling it at the desk.

## Appendix B — Capacity state declaration

Post in the tier channel. For Degraded, also post to the community on the knowledge base.

| Field | Value |
|---|---|
| Tier | Tier __  |
| State | CONSTRAINED  /  DEGRADED |
| Declared by |  |
| Effective from |  |
| Reason | Open tickets above threshold  /  role holder absent and unbacked  /  P1 active  /  cutover window live  /  other (state it) |
| Effect on commitments | Per GOV-06 §7. State plainly which priorities are affected. |
| Community notice sent? | Required for DEGRADED. |

## Appendix C — Monthly report template

| Measure | This month | Note |
|---|---|---|
| % acknowledged within target — Tier 1 |  | By priority |
| % acknowledged within target — Tier 2 |  | By priority |
| % acknowledged within target — Tier 3 |  | By priority |
| % acknowledged within target — Tier 4 |  | By priority |
| % updated within cadence |  | All tiers |
| Backlog median age / 90th percentile |  | Per tier |
| Will-not-do closures |  | Zero here means §9.4 is not being used |
| Redirections |  | A legitimate resolution |
| P1 count / median time to mitigate |  |  |
| CONSTRAINED days — per tier |  | The staffing signal |
| DEGRADED days — per tier |  | The staffing signal |
| Data quality caveat |  | State the GOV-02 position — is this exact yet, or directional? |
