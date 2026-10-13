# ACC-12 · Separation, Retiree & Former-Member Disposition

*What a person keeps after they stop working here, for how long, and who decides. The identity side of leaving.*

| Field | Value |
|---|---|
| Document ID | ACC-12 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | B. Account Usage |
| Operating tier | Tier 4 — the disposition classes are an executive-level policy question. Tier 3 configures; Tier 2 executes the individual case. |
| Review cycle | Annually. |
| Relationship to ACC-01 | ACC-01 §7 is the mechanical leaver procedure — the steps, in order, for any departure. This document decides which of several dispositions a given person gets, which is a policy question ACC-01 deliberately does not answer. |
| Relationship to M365-16 | This document decides how long. M365-16 is how the platform actually delivers it. |

## 1.  Purpose

When somebody leaves the organization, three questions arrive at once and they are usually answered separately by whoever is asked: how long does their email keep working, what happens to their files, and can they keep their address.

> **Before reading further — count your directory**
> Compare the number of enabled user accounts with the number of people who actually work with the organization today. In many tenants the first number is far larger, because leaver accounts have rarely been disabled.
> Every enabled account belonging to somebody who has gone is a sign-in that still works, counted against no licence position anybody reviews, and invisible to the access reviews in ACC-17 because nobody has been asked to review it.
> That is not an argument for a mass disable, which would break things nobody has predicted and is exactly the kind of change GOV-04 exists to prevent. It is an argument for §2 of this document to be adopted and then run backwards: agree the classes, then work the backlog by class, oldest first, with a defined restore path for the ones that turn out to matter.
> ACTION: Tier 3 to produce a breakdown of enabled accounts by last sign-in date, and bring it to Tier 4 with a proposed disposal plan.

Answered case by case, the results are inconsistent in ways people notice. A retiring colleague of thirty years is cut off on their last day while a departing administrator keeps a live mailbox for eight months because nobody closed the ticket. Both are avoidable, and the second is a security exposure with a friendly face.

This document sets the classes once, so that the answer is a lookup rather than a negotiation, and so that HR can tell a departing colleague what will happen before it happens rather than afterwards.

## 2.  The disposition classes

Every separation falls into one of these. HR states the class on the leaver notification (ACC-01 §5.1); IT does not infer it.

| Class | Applies to | Sign-in ends | Set by |
|---|---|---|---|
| Standard separation | Staff and administrators leaving voluntarily or at the end of a term of employment. | Last working day. | HR |
| Immediate separation | Involuntary departure, or any departure where risk is a factor. | Within one hour of HR instruction, ahead of the conversation where necessary. | HR, with the Head of IT |
| Retirement | Staff retiring from the organization after qualifying service. | Last working day, unless affiliate (§4). | HR |
| Affiliate | Retired staff with a continuing working relationship; named affiliates. | Not ended — converted to an affiliate account with annual renewal. | Senior leadership |
| End of appointment | Part-time and fixed-term staff between contracts. | Suspended at the end of the engagement, reactivated on reappointment. | Senior leadership / HR |
| Former member | Non-staff accounts (members, volunteers, programme participants) whose relationship has ended. | See §5. | The office that owns the relationship |
| Removal for cause | Non-staff accounts removed for a policy breach. | On the owning office’s notification. | The office that owns the relationship |
| Deceased | Any member of the community. | Handled under §6.3, never as a routine leaver. | HR or the owning office, with the Head of IT |

> **The class is a decision, and somebody outside IT makes it**
> IT executes dispositions. IT does not decide who is affiliate, who retires with honour, or whose departure is sensitive. Those judgements belong to HR, senior leadership and the office that owns the relationship, and asking IT to make them puts a technical department in the position of adjudicating a colleague’s standing.
> Where the class is not stated, the leaver is processed as a standard separation and the gap is raised with HR. IT does not hold a departure open waiting for a decision that has not been asked for.

## 3.  What each class actually gets

| Class | Mailbox | Files | Address | Licence |
|---|---|---|---|---|
| Standard separation | Shared or inactive from the last day. Two-year minimum (ACC-01 §7.3). | Institutional records moved to the departmental site in 30 days. | Retained as an alias on the shared mailbox where mail still arrives. | Reclaimed after M365-16 Appendix A. |
| Immediate separation | Same, but converted the same day. | Manager delegation granted immediately; move completed in 30 days. | No auto-reply implying continued employment. | Reclaimed same day where possible. |
| Retirement | As standard. A longer courtesy window may be approved by Tier 4. | As standard. | As standard. | As standard. |
| Affiliate | Retained, licensed, active. | Retained. Institutional records still move to the department. | Retained. | Retained — an annual cost, reviewed annually. |
| End of appointment | Retained, sign-in suspended, not converted. | Retained in place. | Retained. | Reclaimed during the gap; reassigned on reappointment. |
| Former member | Per §5. | Per §5. | Per §5. | Per §5. |
| Removal for cause | Inactive under retention. No courtesy window. | Retained under policy. | Released after the retention floor. | Reclaimed immediately. |

Every row above depends on the mechanism in M365-16 — particularly the files column, where the move is the retention and an unlicensed OneDrive preserves nothing. A disposition table that assumes otherwise is a table of intentions.

## 4.  Retirees and long-service affiliates

This is where the organization’s values and its security posture have to be reconciled honestly, because they do pull in different directions.

- A retiring colleague of long standing being cut off at 5pm on their last day is experienced as a slight, and it is often read as one. The technical correctness of it does not help.
- An indefinitely retained account for someone with no continuing obligation to the organization is a credential with nobody watching it — the classic dormant-account compromise, and it will not be noticed quickly because nobody expects activity on it.
The resolution is not a compromise on security; it is to make the distinction explicit and to attach the retained account to a continuing relationship rather than to sentiment.

### 4.1  The affiliate account

1. Senior leadership designates the individual. IT does not.
2. The account is renewed annually, on a date, by senior leadership. Not renewed means suspended — automatically, with 30 days’ notice to the holder and senior leadership.
3. The same MFA and Conditional Access requirements apply as to any active member of staff (ACC-03). An affiliate account is not exempt because its holder is retired; it is exactly the account an attacker would prefer.
4. Entitlements are re-baselined at designation: mail and Teams by default; no administrative systems, no HR or client data, no privileged roles, no VPN unless separately justified (DEV-10).
5. The licence cost is visible in the annual position (M365-20 §7) as its own line, so the organization is making the decision knowingly.
6. An affiliate account that has not signed in for twelve months is raised at renewal. Honour does not require an unused mailbox.
### 4.2  The retirement courtesy window

For a standard retirement, Tier 4 may approve a courtesy window — a period after the last working day during which the mailbox remains active for forwarding personal correspondence and closing out professional relationships. Recommended default: 60 days, once, on the manager’s request, with a stated end date communicated to the retiree in writing at the start. A window with no stated end date becomes permanent by inattention, which is how the organization acquires accounts nobody can account for.

## 5.  Former members and alumni

Some organizations offer former members — alumni, retired volunteers, past programme participants — a continuing email address. It is a policy question with real cost and real goodwill on either side, and it is not IT’s to settle. What IT can do is set out the options honestly and cost them.

| Option | What it means | Honest assessment |
|---|---|---|
| No retention | Account closed after a defined grace period once the relationship ends. | Cheapest and safest. People lose access to material they may still need, which generates a predictable wave of tickets unless communicated well in advance. |
| Grace period then close (recommended) | Sign-in retained for a defined period — 6 or 12 months — with clear advance notice and a documented export path, then closed. | RECOMMENDED. Solves the real problem, which is transition, not permanence. Bounded cost, bounded risk, and it is defensible to explain. |
| Forwarding alias | Mailbox closed; the address forwards to a personal address the person nominates. | Cheap and popular, but every forwarded message is organization mail leaving the tenant unmonitored, and the alias occupies a namespace that may be needed again. |
| Permanent alumni mailbox | A lifetime address on a separate domain or a low-cost SKU. | A goodwill decision with an ongoing cost and a large dormant-account population to secure. If adopted, it must be a separate namespace with its own security baseline, not a retained user account. |

> **Open — owner: the office that owns the relationship, with the Head of IT**
> If the organization has no stated position, former members are handled inconsistently and the question arrives every time a group leaves.
> IT recommends the grace-period option: twelve months from the end of the relationship, with two notifications and a published export guide, then closure. It costs a licence for a bounded period, it treats people well at the moment they most need continuity, and it does not leave the organization with thousands of dormant credentials.
> ACTION: the owning office to state a position for executive leadership. IT will implement whichever is chosen; what it cannot do is keep answering the question case by case.

Whatever is decided, one rule holds: a former member’s account is not a user account left running. The entitlements are re-baselined when the relationship ends — no line-of-business systems, no client records, no licences the organization pays for per active user.

## 6.  The awkward cases

### 6.1  The person who comes back

Staff return, part-time staff are reappointed, members rejoin. Where an account was disabled rather than deleted, reactivation is a mover procedure (ACC-01 §6), not a joiner: the entitlements are re-baselined against the new role and the old ones are not restored wholesale on the assumption that they were right before. Where the account was made inactive under retention, the returning person gets a new mailbox and the old content is made available to them — an inactive mailbox is a record, not a resource to be resumed.

### 6.2  The person whose relationship changes shape

The archetype is a consultant who became a senior member of staff, whose files stayed where the consultant had put them because the account class never changed when the relationship did, and whose departure years later became a rescue project. The rule is that a change of relationship is a mover event with a recorded class change, not a quiet continuation. This applies in both directions — staff who become consultants are a vendor account under ACC-11, not a retained staff identity.

### 6.3  Death of a member of the community

This is handled by a named person, slowly, and never by the routine leaver process.

- HR or the owning office notifies the Head of IT directly. The account is not processed by the automated or routine path, and no automated notification goes to the family, the manager, or the department.
- Sign-in is disabled. Nothing is deleted, converted or reclaimed until Tier 4 says so, and the default is to wait.
- Requests for access to the person’s mail or files come through §8 of M365-16 with counsel involved, however sympathetic the requester and however reasonable the request sounds. This protects the family as much as the organization.
- Auto-replies, distribution list removals and directory changes are made deliberately and gently, on the department’s timing, not on the system’s.
- Any member of IT who encounters this case escalates it and does not act on it alone.
## 7.  Announcing it, and the courtesy that costs nothing

Most of the friction in separations is not technical. It is that people find out what happened to their account by discovering it stopped working.

1. HR tells the departing person what will happen to their account, their mail and their files, in writing, before their last day. IT supplies the standard text; HR delivers it, because it belongs in the conversation HR is already having.
2. The text says: what date sign-in ends, what happens to mail sent to their address afterwards, how long they have to take personal material, and what they may not take.
3. Personal material — personal correspondence, their own professional portfolio, materials they own — may be exported before the last day. Institutional records may not (M365-12, M365-15). Where the line is unclear, the manager decides, not the departing person and not IT.
4. The manager is told separately what they are responsible for: the 30-day OneDrive window, the ownership reassignments, and the written confirmation that nothing institutional remains.
5. Where a shared mailbox or an alias continues to receive mail, correspondents get a courteous, accurate auto-reply that names a colleague, and never one implying the person is still here.
## 8.  What is never granted

- Forwarding from an organization mailbox to a personal address after separation. Not for a week, not as a favour. Institutional mail leaving the tenant unmonitored is a data transfer, whatever the intention behind it (M365-02, ACC-15).
- A departing person’s continued access to a shared mailbox, a Team, or a departmental site “just to finish something off”. If work is genuinely unfinished, it is handed over, or the person is engaged under ACC-11 with a real account and a real end date.
- Retention of privileged or administrative access into any courtesy window (ACC-07).
- Access for a family member, colleague or successor to a departed person’s mailbox without the M365-16 §8 route.
- An open-ended extension. Every extension has a date, an approver and a record.
## 9.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Standard separation, notified in advance | Completed on the date HR states. |
| Immediate separation | Sign-in disabled within one hour of instruction; full checklist within one coverage day. P1 in any capacity state. |
| Affiliate designation, from senior leadership | P3 — 3 coverage days. |
| Affiliate annual renewal | Batch, once a year, by Tier 3. |
| Retirement courtesy window request | P3 — Tier 4 decision within 5 coverage days. |
| Former-member batch | Scheduled with the owning office against the end date, not on request. |
| Deceased | Not an SLA matter. Head of IT handles directly. |

## 10.  Records

| Record | Held in | Retention |
|---|---|---|
| Leaver notification with the class stated | Ticket + HR record | 7 years |
| Disposition applied, with dates | Ticket | 7 years |
| Affiliate designations and annual renewals | IT register | Life of the designation + 3 years |
| Courtesy window approvals: person, dates, approver | IT register | 3 years |
| Manager written confirmation that no institutional records remain | Ticket | 7 years |
| Extensions and exceptions | IT register | 3 years |

## 11.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Account Policy | Your organization's email and account policy | The governing policy. This procedure operates under it and should be cross-referenced from it. |
| ACC-01 | Account Lifecycle | §7 is the mechanical procedure. This document supplies the class. |
| ACC-07 | Privileged Account Standard | Privileged access never survives a separation. |
| ACC-11 | Vendor, Contractor & Consultant Accounts | Where a departing person continues in another capacity. |
| ACC-14 | Mailbox & Calendar Delegation | The mechanism behind the manager window. |
| M365-12 | OneDrive Institutional Data Boundary | Why the 30-day move is small or large. |
| M365-16 | Retention, Legal Hold & eDiscovery | How every duration in §3 is actually delivered. |
| M365-20 | Licence Assignment & Reclamation | The cost side, including the affiliate line. |
| GOV-06 | Service Commitments | Supplies §9. |

## Appendix A — Disposition decision sheet

Completed by HR, senior leadership or the owning office and attached to the leaver notification. IT does not complete this sheet.

| Field | Entry |
|---|---|
| Name and account |  |
| Last working day / end date |  |
| Disposition class (§2) |  |
| Is this an immediate separation? | YES / NO — if yes, name the Head of IT contact |
| Manager receiving the 30-day OneDrive window |  |
| Ownership to be reassigned | Sites, Teams, shared mailboxes, sponsored guests |
| Address kept as an alias? | YES / NO — on which shared mailbox |
| Courtesy window requested? | YES / NO — end date, approver |
| Affiliate designation? | Senior leadership signature and renewal date |
| Anything sensitive IT should know | Free text — including whether the departure is contested |
| Departing person notified in writing? | YES / NO — date |
