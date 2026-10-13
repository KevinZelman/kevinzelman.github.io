# GOV-04 · IT Change Management & Maintenance Windows

*Three change classes, one register, an agreed set of windows the organization’s calendar governs — and the rule that a vendor change is an organization change.*

| Field | Value |
|---|---|
| Document ID | GOV-04 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | D. Cross-Cutting Governance |
| Operating tier | Tier 4 — IT Management approves normal and emergency changes and owns the window and freeze calendar. Tier 3 assesses and executes. Tier 2 executes standard changes with no approval at all, which is the point of §3. |
| Review cycle | Annually — and the freeze calendar before each busy season begins, against the published calendar rather than last year’s copy. |
| Relationship to M365-21 | M365-21 is this process applied to one system — the Microsoft 365 tenant — with the tenant-specific hazards named. A tenant change is a change class under this document and uses this register. It does not get a second process, and its Appendix A record is this register’s record. |

## 1.  Purpose — and the question about size

Picture a common case. A vendor engineer applies vulnerability remediation to the test servers of a core business system and then to production, inside the maintenance window, coordinated in an email thread. The sequencing is right, the window is right, and nothing goes wrong.

It is also unfindable afterwards. There is no record of what changed on those servers, on what date, at whose approval, or how it would have been reversed. If that system behaves oddly three months later, the first question anybody asks is “what changed?” — and the answer lives in somebody’s mailbox, if it is still there.

That is the gap this document closes. Not that changes are made badly — they are usually made carefully — but that they are made without a record, which means the organization cannot answer that question, cannot tell a vendor “not that week” during the busiest week of the year, and cannot see that a rising number of emergency fixes is a pattern rather than a run of bad luck.

> **The second thing this document has to get right is its own size**
> A small IT team does not need a change advisory board and should not acquire one. A weekly meeting to approve printer driver updates would consume more of this department’s capacity than the changes themselves, and it would be quietly abandoned inside two months.
> A change process nobody can staff is a change process nobody follows — and an abandoned process is worse than none, because it leaves everybody believing a control exists.
> So §3 puts most of the volume into a standard, pre-approved class that requires no approval and no meeting, Appendix B is that list as a starting set, and §11 defines how the list GROWS as changes prove themselves. The process reserved for the changes that can actually hurt is then small enough to be followed.

## 2.  What is a change, and what is not

A change is any planned alteration to a production system, service, configuration or integration that could affect availability, security, data, or what somebody experiences when they use it.

### 2.1  In scope

- Server, application and firmware patching, including vendor-applied patching (DEV-13, §8).
- Microsoft 365 tenant configuration — Conditional Access, authentication methods, sharing, retention, mail flow, directory attributes (M365-21).
- Identity provider and federation configuration, including claim mapping and application cutovers (ACC-16).
- Network, firewall, wireless and VPN configuration (DEV-10).
- Device management: compliance and configuration policies, enrollment settings, ring definitions (DEV-01, DEV-02).
- Lab, meeting room and shared-device images and configuration (DEV-06, DEV-18).
- Telephony and Teams voice configuration.
- Backup configuration, schedules and retention.
- Integrations and interfaces between systems, including anything scheduled that moves data.
- Anything a vendor does to an organization system, whoever executes it (§8).
### 2.2  Not a change

- Per-user fulfilment: creating an account, granting a permission, provisioning a mailbox or a site. These have their own documents and their own records; putting them through a change process would produce a register nobody could read.
- Actions taken during an incident to restore service. Those are GOV-03. They are recorded there, and any fix that follows enters this register retrospectively as an emergency change (§10).
- Anything on the standard list at Appendix B — which IS a change, but a pre-approved one, recorded in a line rather than a form.
The working test, for anything genuinely unclear: would somebody be surprised by this, and would they be right to be? If yes, it is at least a normal change.

## 3.  The three classes

| Class | It is this class when… | Approval | Window | Record |
|---|---|---|---|---|
| Standard (pre-approved) | It is on the Appendix B list, it has been done before with a known outcome, it has a known back-out, and it meets the conditions stated for it on that list. | None. Pre-approved as a class by Tier 4, annually. | Per the list; most need none. | One line in the register afterwards, quoting the standard-change ID. |
| Normal | Anything not on the standard list, planned in advance. | Per §6, by blast radius. | Per §7. | Full record (Appendix A) BEFORE it happens. |
| Emergency | It cannot wait for the normal path without unacceptable risk: an actively exploited vulnerability, a failing component, or a fix required to restore or protect service. | Tier 4 verbally or by message before, written retrospectively within one coverage day. | Whenever necessary. | Full record within one coverage day. PIR always (§11). |

There is no fourth class for large work. A change that is really a project — a migration wave, a system replacement, an identity provider cutover — is a set of normal changes with a plan around it. The plan belongs to the relevant SOP (DEV-01, M365-13, ACC-16 §8); each individual cutover event enters this register on its own record.

### 3.1  Which class is this? — worked examples

| The change | Class | Why |
|---|---|---|
| Monthly operating system quality updates to the pilot and standard rings | Standard | On the list, staged by ring, known outcome, and the back-out is the removal of the update (DEV-13). |
| Adding a Conditional Access policy in report-only mode | Standard | Report-only changes nothing for any user. It is the safest possible way to learn what a policy would do. |
| Enabling that same policy | Normal | It can lock out a population immediately and at scale, and it has. M365-21 §5 sets the additional gates. |
| A vendor applying vulnerability remediation to a production business system | Normal | §8. The vendor executes; the organization approves, holds the back-out and verifies. |
| A firewall rule to permit a new integration | Normal | It changes what can reach what. Blast radius is assessed before, not discovered after. |
| Changing the SAML claim mapping on a live application | Normal | ACC-16 §4. It can break sign-in for every user of that application simultaneously. |
| Rebuilding a training-room image during a quiet period | Standard | On the list, provided no session is booked in the room (DEV-06). |
| Rebooting a hung production server | Emergency if service is down; Normal if it is scheduled to prevent a fault. | The class follows the urgency, not the action. |
| Blocking a sending domain during a live phishing wave | Emergency | GOV-03 and M365-22 govern the response; the change record follows within one coverage day. |
| Disabling a compromised account | Not a change | Incident response under GOV-03. |
| Creating a mailbox for a new starter | Not a change | Fulfilment under ACC-01. |

## 4.  The change record

One record, one register. The full template is Appendix A. Every field below is mandatory for a normal change, and a record missing one of them is returned rather than approved — which takes a minute and saves the argument later.

- Reference and a title somebody could search for.
- Class (§3).
- What changes, specifically enough that another engineer could find the setting or the package.
- Why, and who asked.
- Systems and populations affected, with numbers rather than adjectives.
- What could go wrong — written before, not after.
- The back-out plan, and whether it has been tested (§5).
- Test evidence, or an explicit statement that testing was not possible and why.
- Proposed window and expected duration.
- Communication: who is told, by whom, and when (§9).
- Approver, named, per §6.
- Implementer, named.
- Actual start and finish times. The ACTUAL times — correlating a change with the tickets it produced is the main day-to-day use of this register, and an approximate date defeats it.
- Verification: what was checked afterwards and what it showed.
- Outcome: succeeded, succeeded with issues, or backed out.

> **Where the register lives, and one caution about it**
> It should sit alongside the tickets in the ticketing system, as a distinct queue with a distinct type, so that “what changed?” and “what broke?” are one search rather than two systems.
> The caution is real. Where ticket hygiene is poor, a ticket export fills up with automated noise and duplicates, and its figures do not reconcile. A change register allowed to accumulate the same way becomes another unusable export.
> So: a distinct type, a small number of mandatory fields, and a monthly review that reads it (§11). A register nobody reads monthly will be wrong within a quarter, and nobody will find out until they need it.

## 5.  The back-out plan

> **A change with no tested back-out is not approved.**
> Stated as an absolute, because the alternative is a change that can only go forwards — being debugged at nine in the evening, with the business opening at eight the next morning and no way back.
> The back-out plan states: the specific action that reverses this change, who is able to perform it, how long it takes, THE DECISION POINT — the time by which, if the change is not verified working, the back-out is executed rather than the problem debugged — and how the organization will know the reversal worked.
> “Tested” means somebody has performed the reversal, in test or on a non-production instance, or the reversal is a documented and routine platform operation. It does not mean somebody believes it would probably work.

### 5.1  Three back-outs that are not back-outs

- “We can restore from backup.” Not unless a restore of that system has actually been performed and timed. Restores are routinely far slower than the person proposing them assumes, and the assumption is only tested on the worst possible night.
- “We can reinstall it.” That is a rebuild, not a reversal, and it leaves the data question entirely unanswered.
- “It is reversible in the console.” For many changes it is. For several it is not: a claim mapping the vendor has already consumed and rebound (ACC-16 §8.1), a retention policy that has already deleted, or a directory attribute committed to a system that now depends on it (M365-21 §3). Establish which kind this is before, not during.
### 5.2  Genuinely irreversible changes

Some changes cannot be reversed. They are not exempt from this section — they are escalated by it. An irreversible change is named as irreversible on the record, approved by the Head of IT rather than at the normal level, and given a longer pilot and a stated stop point in place of a back-out. Irreversibility raises the approval; it never removes the requirement to have thought about it.

### 5.3  Authority to reverse

Any Tier 3 engineer may back out a change that is actively causing harm, immediately, without approval, and record it afterwards. That authority is stated deliberately and it applies across the estate — M365-21 §7 grants the same for tenant changes. A process that makes an engineer hesitate before undoing a breaking change is worse than no process at all.

## 6.  Approval by class

| Change | Assessed by | Approved by | Additional requirement |
|---|---|---|---|
| Standard change on the Appendix B list | Tier 2, against the list | Pre-approved by Tier 4 annually | If it does not fit the stated conditions exactly, it is not a standard change. |
| Normal — single service, no user-visible effect | Tier 3 | Tier 3 lead | Recorded. Tier 4 sees it at the monthly review. |
| Normal — user-visible, one department | Tier 3 | Tier 4 | Department head informed before the window (§9). |
| Normal — affects a whole population (all users, all staff, everyone) | Tier 3 | Head of IT, explicitly | Approval by absence of objection does not count. Piloted or report-only first wherever the platform allows it. |
| Normal — identity, authentication or federation | Tier 3 | Head of IT | The ACC-03 §11 and ACC-16 §9 gates apply on top of this table. This is the class most likely to break access. |
| Normal — executed by a vendor | Tier 3 with the system owner | Tier 4, named organization approver | The vendor is never the approver (§8). |
| Irreversible (§5.2) | Tier 3 plus a second named reviewer | Head of IT | Named as irreversible on the record. Longer pilot, stated stop point. |
| Emergency | Whoever is present | Tier 4 before where minutes allow; written retrospective approval within one coverage day | PIR at the next monthly review, without exception (§11). |

Where the department is small enough that the assessor and the approver would be the same person — which in a small team is often — a second named person reviews and the Head of IT approves. That is not bureaucracy. It is the only thing standing between a tired engineer at ten at night and a decision nobody else has looked at.

## 7.  Maintenance windows and the organization’s calendar

The windows are the part of this document the rest of the organization cares about, and they are the part a vendor needs in order to schedule anything.

| Window | When | Suitable for | Notice |
|---|---|---|---|
| Weekly technical window | Tuesdays 06:00–08:00 | Low-risk server and application work with no user-visible effect. Certificate and DNS work. Most of the standard list. | 2 coverage days on the register. No site notice. |
| Primary maintenance window | Second Saturday of the month, 22:00 – 04:00 Sunday | Normal changes with a user-visible effect: servers, network, the HR and user system of record, identity and federation cutovers. | 10 calendar days to the site. |
| Secondary window | Last Sunday of the month, 06:00 – 10:00 | Overflow, and vendor work that cannot fit the primary window. | 10 calendar days. |
| Quiet-period window | Your published quiet periods, such as holiday weeks or planned shutdowns | Anything needing hours rather than minutes: image rebuilds and shared-device work (DEV-06), migrations, wave cutovers (DEV-01), major upgrades. | Scheduled a quarter ahead. |
| Out of window | Any time | Emergency changes only (§10), or a Head of IT exception with the reason recorded. | As the situation allows. |

### 7.1  The organization’s calendar governs

Never during your peak business period. Never during a period-end close. Never in the first week after a large intake of new people. Never on the day of a major organization event, or the day before it. These are not preferences to be balanced against convenience — they are the periods in which a failure is least recoverable and most visible.

| Freeze | Covers | What still proceeds |
|---|---|---|
| Intake freeze | The week before, and the first full week after, a large intake of new starters or temporary workers. | Emergency and standard changes only. This is often the desk’s peak (ACC-01, ACC-09), and a change made now looks exactly like the ordinary confusion of a new intake, so nobody diagnoses it as a change. |
| Peak-period freeze | Your published peak business periods, such as open enrolment, a seasonal rush or tax season. | Emergency only for anything touching the core business system, the customer portal, identity or the network. These are the weeks when a failure costs the most. |
| Critical-event freeze | Audits, board meetings, launches, or any fixed-date event the organization cannot move. | Emergency only. A meeting room or authentication failure during a fixed-date event cannot be recovered by a service desk, however good it is. |
| Major organization event | The day, and the day before. | Emergency only. |
| Payroll and financial close | The published payroll runs and year-end close dates. | No change touching the HR and user system of record, the network path to Finance, or the payroll-sensitive shares. Emergency changes here are approved by the Head of IT with Finance informed. |

### 7.2  Windows, capacity and GOV-06

- The window and freeze calendar is owned by Tier 4 and published a quarter in advance, so that departments and vendors can both plan against it.
- A window is capacity consumed. A Saturday-night window is followed by a Monday on which the same small number of people are the service desk. GOV-06 §7 exists for exactly this: a major window is a Constrained day DECLARED IN ADVANCE, not a surprise discovered on the Monday.
- Under a declared Degraded state only emergency and standard changes proceed. The normal queue holds, and the register records what was deferred and why — so the backlog is visible rather than implied.

> **These windows are a proposal, and there is one question to settle before they are published**
> The windows above are drafted, not observed. They should be checked against the organization’s published calendar, against your vendors’ support arrangements, and against your own peak, event and payroll dates before anybody commits to them externally.
> The harder question is staffing. A monthly Saturday-night window has to be staffed by people who will also be the desk on Monday. If the department cannot hold that, the honest answer is FEWER windows, not the same number missed — a published window that is repeatedly not used teaches vendors and departments to negotiate outside the calendar, which is the condition this document is trying to end.
> ACTION: Tier 4 to confirm the window set against the coming year’s calendar and the department’s actual coverage before publication.

## 8.  Vendor changes

> **A vendor change is an organization change.**
> It enters the same register, with an organization approver, a back-out and a communication — whoever executes it, however routine it is, and however competent the vendor.
> The vendor’s own change process is their internal control. It is not the organization’s record, and it is not visible to anybody at the organization three months later when something on that system behaves oddly.
> This is the rule a real remediation teaches. Nothing in that kind of remediation is done badly. It is simply that the organization has no record of it, and could not have told the vendor “not that week” had the week been a peak week.

1. The vendor’s request enters the register as a normal change, raised by the organization system or contract owner. It does not stay in the email thread it arrived in.
2. The organization names an approver. The vendor is never the approver of a change to an organization system — not because their judgement is doubted, but because approval is an accountability the organization cannot outsource.
3. The record states what the vendor will do, on which systems, in which order, and what the back-out is. Test before Production is the correct sequence and it should be visible in the record, as it should be in any vendor thread. Where the vendor cannot supply a back-out, that is escalated under §5.2 rather than accepted as normal practice.
4. An organization engineer is available during the window — not necessarily executing, but reachable, and able to verify afterwards. A vendor change verified only by the vendor is a change nobody at the organization has confirmed.
5. Verification is performed by the organization against a stated check, and recorded. “The vendor said it went fine” is not a verification.
6. STANDING vendor maintenance — a recurring patching cadence, for example — is approved ONCE as a standing change with a defined scope, a named window and a stated back-out, and each execution is then a one-line register entry (Appendix B, STD-12). This is the standard-change mechanism applied to vendors, and it is what stops the process being abandoned for the routine work it was never meant to obstruct.
7. The requirement to route changes through the organization register belongs in the vendor’s contract and in the operating agreement at renewal (ACC-11). Until it does, this section depends on goodwill — which is worth having, and is not a control.
### 8.1  Three vendor situations worth naming

- THE VENDOR WHO PATCHES YOUR CORE BUSINESS SYSTEM: the case in §1, and usually the one with the largest blast radius. Standing approval under step 6 is the right shape here, with Prod work in a named window and an organization verification step.
- YOUR MANAGED SECURITY (MDR) PROVIDER: a partner ACTING during an incident is GOV-03 and DEV-14, not this document. Changes to the monitoring or response CONFIGURATION are changes and enter this register.
- MICROSOFT’S own service changes: outside the organization’s approval, but not outside its awareness. Message centre items with a user-visible effect are triaged monthly by Tier 3 and entered in the register as informational, so that “what changed?” has an answer even in the cases where the organization did not change it.
## 9.  Communication

IT drafts, Tier 4 approves, and site-wide notice goes out by the agreed route (M365-06). One rule sits above the table: the service desk is told before the site is, always. A desk that learns about a change from the first ticket cannot do its job, and will spend the morning diagnosing something it could have recognised in one line.

| Audience | Told what | When | By |
|---|---|---|---|
| Service desk (Tier 1 and 2) | Full detail: what is changing, when, what it looks like when it goes wrong, and who to escalate to. | At approval, and again the day before. | Tier 3 |
| Affected department heads | A plain-language summary and the window. | 10 calendar days ahead. | Tier 4 |
| The whole site (population-wide changes) | What is happening, when, what to expect, and WHAT TO DO IF SOMETHING DOES NOT WORK AFTERWARDS. | 10 calendar days ahead, and a reminder the day before. | Tier 4, via M365-06 |
| The site, afterwards | A short note: completed, completed with issues, or postponed. | Within one coverage day. | Tier 4 |
| Vendors and partners with dependent access | The window, and anything required of them. | 10 calendar days ahead. | The system owner |

- The notice says what to do if it does not work, not only what will happen. A notice that ends with “no action is required” and gives no contact route produces a week of tickets that never mention the change, which then cannot be correlated with it.
- Postponements and cancellations are announced with the same reach as the original notice. A change quietly cancelled teaches people that the notices need not be read.
- Notices name a window, not a duration. “Between 22:00 and 04:00” is honest; “about twenty minutes” is a hostage.
## 10.  Emergency changes

The definition is tight: it cannot wait for the normal path without unacceptable risk. It does not mean somebody senior would like it today, and the distinction has to be held, because the emergency path exists by borrowing the assurance the normal path provides.

1. Obtain approval from Tier 4 before acting where a delay of minutes is available — verbally or by message. Where Tier 4 is unreachable, the Head of IT; where neither is reachable, the most senior person available, named on the record afterwards.
2. Act. Nothing in this section prevents an engineer from acting to protect or restore a service. Acting is correct; not recording it afterwards is what this section forbids.
3. Write the record within one coverage day, including what back-out was available and whether it was used.
4. Obtain and record retrospective approval within one coverage day.
5. Hold a post-implementation review at the next monthly register review, for every emergency change, without exception (§11).

> **The count is the finding, not the individual change**
> A department with many emergency changes does not have an emergency problem. It has a planning problem, a fragility problem, or a vendor whose lead times do not fit the organization — and the register is the only instrument that makes the difference visible.
> Emergency changes are counted monthly and reported annually. A rising count is a matter for Tier 4 to act on, not a fact about a difficult month.

## 11.  Post-implementation review, and the monthly register review

Not every change gets a PIR. Doing one for everything guarantees that none of them are done properly.

### 11.1  A PIR is held for

- Every emergency change.
- Every change that was backed out.
- Every change that caused an incident or a measurable spike in tickets.
- Every change to identity, authentication or federation, whatever the outcome.
### 11.2  Five questions

1. Did it do what it was meant to do?
2. What did we not anticipate?
3. Was the back-out adequate — and if it was used, did it work within the time we said it would?
4. Did the communication reach the people who needed it, in time to be useful?
5. Should this become a standard change — or should it never be attempted this way again?
### 11.3  The monthly register review

Fifteen minutes at an existing Tier 4 meeting. Do not create a new one; a new meeting is the first thing that will be cancelled.

- Changes made, by class, with outcomes.
- Emergency count and backed-out count, both as trends rather than as single months.
- Changes deferred under a declared capacity state (§7.2).
- PIR outcomes and any action arising.
- Additions to, and removals from, the standard change list.

> **How the process gets lighter instead of heavier**
> The standard-change list grows by evidence. A normal change performed three times with the same outcome and no surprises is a candidate; Tier 4 adds it at the monthly review, with its conditions and its back-out stated.
> That is the mechanism by which this document becomes cheaper to follow over time, which is the only way a process survives in a department this size.
> The two failure signals are worth naming. A standard list that never grows means the process is not being used. A list that grows without evidence means it is being used to avoid the process.

## 12.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Normal change assessed after submission | P3 — 3 coverage days at Tier 3. |
| Tier 4 approval of a normal change | 5 coverage days, or at the next monthly review where nothing is time-bound. |
| Head of IT approval for a population-wide or irreversible change | 5 coverage days. |
| Vendor request raised into the register | Within 2 coverage days of the vendor asking. |
| Emergency change: record written and retrospective approval obtained | Within 1 coverage day. |
| Site-wide notice for a user-visible change | 10 calendar days ahead, plus a reminder the day before. |
| Back-out of a change actively causing harm | Immediate, by any Tier 3 engineer, without approval (§5.3). |
| Window and freeze calendar published | A quarter in advance. |
| Monthly register review | On schedule. Suspended only under a declared Degraded state, and then made up. |
| Under Constrained | Assessment and the window calendar hold. Non-essential normal changes may be deferred, with the deferral recorded. |

## 13.  Records

| Record | Held in | Retention |
|---|---|---|
| Change register, all classes | IT change log | 7 years |
| Back-out plans and their test evidence | Attached to the change record | 7 years |
| Standard change list, with its annual Tier 4 approval | IT governance record | Permanent — it is what keeps the process usable |
| Vendor change records, including standing approvals | Change log + contract file | 7 years |
| Site-wide notices issued | M365-06 record | 3 years |
| PIR outcomes and actions | IT change log | 7 years |
| Window and freeze calendar as published each year | IT governance record | 7 years |
| Monthly register review notes | Tier 4 record | 7 years |

## 14.  Related documents

| ID | Title | Relationship |
|---|---|---|
| M365-21 | Tenant Configuration Change Control | Tenant configuration is a change class governed here. M365-21 is its system-specific instance and its record is this register’s record. |
| DEV-13 | Patch, Update & Maintenance Window Standard | Patching operates inside these windows. DEV-13 sets the cadence and the rings; this document sets the window, the approval and the record. |
| DEV-06 | Computer Lab, Meeting Room & Shared Device Standard | Never during booked hours. Lab work belongs in the quiet-period window. |
| DEV-18 | Conference & Meeting Room AV Standard | Never during booked hours. Room technology is changed when no meeting is in the room. |
| DEV-01 | Device Enrollment & Lifecycle | Enrollment waves are a series of normal changes with a plan around them (§3). |
| DEV-02 | Device Compliance & Configuration Baseline | Compliance policy changes are normal changes with a population-wide blast radius. |
| ACC-16 | Application Onboarding, SSO & SAML Claims Standard | §8 cutovers and §9 authentication-strength changes are scheduled, approved and recorded here. |
| ACC-03 | MFA Enrollment, Reset & Account Recovery | §11 there sets gates that apply on top of §6 here. |
| ACC-11 | Vendor, Contractor & Consultant Account Standard | The account a vendor uses to execute §8, and the contract that should require §8. |
| ACC-17 | Periodic Access Review & Entitlement Recertification | Uses the same freeze calendar, for the same reason (§7.1). |
| GOV-03 | Security Incident Response & Escalation Matrix | Incident actions are not changes. The fixes that follow them are, retrospectively (§10). |
| GOV-02 | Service Desk Intake & Ticket Quality | The register sits beside the tickets so that “what changed” and “what broke” are one search. |
| GOV-06 | Service Commitments, Priority & Escalation | Windows consume capacity; §7.2 and §12. |
| M365-06 | Mass Communication Approval | The route for site notice under §9. |
| M365-22 | Phishing Reporting & Email Threat Response | Emergency mail-flow changes during a live wave. |

## Appendix A — Change record template

Mandatory for every normal and emergency change. A standard change needs only the one-line register entry quoting its Appendix B identifier. This should take five minutes; if it takes longer, the change is bigger than it looked.

| Field | Entry |
|---|---|
| Reference and title |  |
| Class | Standard / Normal / Emergency (§3) |
| Raised by, and date |  |
| What changes | Specific enough that another engineer could find the setting or the package. |
| Why, and who asked |  |
| Systems affected |  |
| Populations affected, with numbers | Who cannot easily tell us it broke? People on leave, part-time staff, guests. |
| What could go wrong | Written before. This field is the value of the record. |
| BACK-OUT PLAN | The action, who performs it, how long it takes, and the decision point. REQUIRED (§5). |
| Back-out tested? | YES — when and by whom  /  NO — then this is not approved  /  IRREVERSIBLE — Head of IT approval per §5.2 |
| Test evidence | Or an explicit statement that testing was not possible, and why. |
| Pilot or report-only first? | Required for anything in M365-21 §5 or ACC-16 §9. |
| Proposed window and duration | Per §7. Confirm it is not inside a freeze. |
| Communication plan | Who, by whom, when (§9). |
| Vendor involved? | Named vendor, named organization approver (§8). |
| Approved by | Named, per §6. |
| Implemented by, actual start and finish | Actual times. |
| Verification | What was checked, and what it showed. |
| Outcome | Succeeded / succeeded with issues / backed out. |
| PIR required? | Per §11.1. |

## Appendix B — The standard (pre-approved) change list

A starting set drafted for review, not an approved list. Tier 4 approves it once as a whole, then annually, and adds to it at the monthly register review as normal changes prove themselves (§11.3). Each entry is pre-approved ONLY while its stated conditions hold.

| ID | Change | Conditions | Back-out | Window |
|---|---|---|---|---|
| STD-01 | Monthly operating system quality updates to the pilot and standard rings | Per the DEV-13 ring schedule. No ring skipped, no ring merged. | Uninstall the update; hold the ring. | Per DEV-13 |
| STD-02 | Third-party application updates deployed through Intune or the ticketing system | Pilot ring first and clean for 3 days. | Retire the deployment; redeploy the previous version. | Any |
| STD-03 | Printer and peripheral driver updates | Not during a scheduled booking in that room. | Roll back the driver. | Any |
| STD-04 | Endpoint protection signature and engine updates | Vendor-published, automatic, monitored by your security provider. | Vendor rollback path. | Any |
| STD-05 | Creating a Conditional Access policy in REPORT-ONLY mode | Report-only only. Enabling it is a normal change (M365-21 §5). | Delete the policy. | Any |
| STD-06 | Creating or amending a dynamic group rule | Fewer than 50 members, no permission or licence attached to the group, M365-04 §7 register updated. | Restore the previous rule, recorded. | Any |
| STD-07 | Certificate renewal, like for like, ahead of expiry | Same issuer, same subject, no change of key type. | Reinstate the previous certificate until its expiry. | Weekly technical |
| STD-08 | DNS record change for a service already in production, like for like | TTL lowered 24 hours ahead. | Restore the previous record. | Weekly technical |
| STD-09 | Adding a device to the scope of an existing Intune configuration or compliance policy | The policy itself is unchanged; scope only. | Remove from scope. | Any |
| STD-10 | Restarting a non-production or Test-tier server | Not a test instance during scheduled vendor activity on it. | Not applicable. | Any |
| STD-11 | Redeploying a lab or meeting-room image from the approved image | No session booked in the room; DEV-06 baseline unchanged. | Redeploy the previous image. | Quiet period / room free period |
| STD-12 | Vendor maintenance under an approved standing scope | Scope, systems and window exactly as approved under §8 step 6. Test before Production. | As stated in the standing approval. | The approved recurring window |
| STD-13 | Blocking a confirmed malicious sender, domain or URL | M365-22 triage complete and the message confirmed malicious. | Remove the block. | Any |
| STD-14 | Adding or amending a monitoring or alerting rule | Changes what is observed, never what is enforced. | Delete the rule. | Any |

Anything not on this list, or not meeting the conditions stated for it, is a normal change. When in doubt it is a normal change — the cost of over-classifying is one form; the cost of under-classifying is the thing this document exists to prevent.
