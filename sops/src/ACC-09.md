# ACC-09 · Temporary Worker & Departmental Access Standard

*How a temporary worker employed by a department gets the access their job needs, and how it ends at the end of the engagement.*

| Field | Value |
|---|---|
| Document ID | ACC-09 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | B. Account Usage |
| Operating tier | Tier 2 — Advanced Technical Services. |
| Review cycle | Each quarter, and annually as a document. |
| Depends on | ACC-02. This document is written to operate under either option, and says so at §3. |

## 1.  Purpose

Temporary workers do a great deal of the organization’s work, and giving them the access to do it is entirely proper. This document says how that access is granted, bounded and removed, so that it matches the job rather than outlasting it.

The failure it addresses is a common one. Several temporary workers are added to a department’s shared mailbox through a reply-all email thread. There is no request record, no named mailbox owner approving it, and nothing scheduled to remove the access when the work ends. Nobody does anything unreasonable; there is simply no other route available.

## 2.  Two relationships, expiring independently

> **Holding an end-user account and being employed are different things, and must expire separately.**
> Many temporary workers already hold an account with the organization in another capacity: as a client, member, volunteer or learner. A person can hold that end-user account and not be employed, be employed and hold no other account, or both, and either relationship can end without the other. Conflating them is the root of most temporary-worker access problems.
> So departmental access ends at the close of each engagement period, regardless of whether the person still holds an end-user account and regardless of whether they are still employed. The engagement period is whatever fixed cycle fits your organization: a quarter, a season, or a contract term. Continuing requires a fresh approval.
> That may look bureaucratic. It is one confirmation per person per period, and it is the only mechanism that reliably stops access accumulating over years of repeat engagements.

## 3.  How access is provisioned

ACC-02 has not yet been decided between two options, and this document works under either. Throughout, “departmental access” means whichever of the following is in force:

| If ACC-02 Option… | Then departmental access means |
|---|---|
| A — suffixed second account (a common existing pattern) | A second account with a departmental prefix. Provisioned by Tier 2, with its own MFA registration, and disabled at the end of the engagement. The person keeps two credentials. |
| B — role group on the single identity (recommended) | Membership of a ROLE-<DEPT>-TempWorker group on the person’s own identity, carrying an end-date expiry. One credential, one MFA registration, one thing to remove. |

Everything else in this document — approval, scope, engagement boundaries, supervision — applies identically either way. The choice affects the mechanism, not the governance.

## 4.  Requesting it

1. The hiring department raises a ticket. Not a reply-all thread — this is the specific practice being replaced, and the reason is that an email thread leaves no record of who authorised what.
2. The request names: the person, the department, the supervisor, the end date, and exactly what they need to reach.
3. The owner of each resource approves. A department’s mailbox owner approves access to that mailbox; IT does not decide who reads a department’s correspondence (M365-03 §4).
4. Tier 2 checks the classification of what they will reach. Applicant records, client records and conduct records are CONFIDENTIAL, which means named access and annual owner review at minimum (M365-15).
5. MFA is registered before access is granted, not afterwards (ACC-03 §5.1).
6. Access is scoped to what the job needs. “The same as the last temporary worker had” is not a scope — the last temporary worker may have had a different job, or too much.
7. The end-date expiry is set at the point of granting, and the supervisor is told the date.
8. Record the request, each owner approval, the scope and the expiry.
## 5.  What a temporary worker may and may not hold

| May | May not |
|---|---|
| Membership of a departmental shared mailbox, approved by its owner. | Ownership of a shared mailbox, site or Team. Ownership is a staff responsibility. |
| Access to a departmental SharePoint site, scoped to what the job needs. | Any administrative role in any system (ACC-07). Where an elevated action is needed, staff perform it. |
| An organization device, or supervised access to a shared one. | Local administrator rights on any endpoint (DEV-12). |
| Access to systems the job requires, approved per system. | Standing access to anything classified RESTRICTED (M365-15). |
| Send-as for the department, so outbound mail reads as the department. | Access retained over a gap between engagement periods without fresh approval. |

## 6.  The engagement boundary

1. Two weeks before each engagement period ends, Tier 2 sends each department a list of its temporary workers and their access.
2. The supervisor confirms who is returning for the next period. One line per person.
3. Access for anybody not confirmed expires on the last day of the period. Automatically, without a further decision.
4. Returning people have their access re-approved for the next period, with the scope checked rather than assumed — jobs change between periods.
5. A non-response from a supervisor means everything expires. This is deliberate: the safe default when nobody answers is less access, not more.
6. Record the end-of-engagement action for each person, including expiries that happened automatically.
## 7.  When employment ends mid-engagement

- The supervisor tells the service desk. Same day where the departure is not amicable.
- Departmental access is removed — the group membership, or the second account disabled, per §3.
- Their end-user identity, if they have one, is untouched. They keep it and whatever access comes with it; that separation is the point of §2.
- Ownership of anything they were working on transfers to the supervisor.
- Any organization device is returned per DEV-15.
## 8.  Supervision and training

Temporary workers on an IT desk often sit at Tier 1 and are the front door for the whole organization. Temporary workers in a front office often read applicant or client correspondence. Both are positions of real trust held by people early in their working lives, and the organization owes them clear expectations rather than assumed ones.

- Every temporary worker reads and acknowledges the Technology Acceptable Use Policy before access is granted (ACC-15).
- Where the role touches CONFIDENTIAL data, the supervisor briefs them on what that means in practice — not a policy reference, a conversation about the specific records they will see.
- Temporary workers at Tier 1 read ACC-06 before their first shift, and again at the start of each engagement period, because the cohort changes and this is the tier attackers call.
- A named supervisor exists for every temporary worker at all times. If the supervisor leaves, the access is reassigned or expires — it does not continue unsupervised.
## 9.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| New temporary-worker access, complete request with owner approval | P3 — 1 coverage day. |
| Access requested without owner approval | Held. The department is told what is needed. |
| End-of-engagement list to departments | Two weeks before each period ends, by Tier 2. |
| End-of-engagement expiry | Automatic on the last day of the period. |
| Mid-engagement removal on supervisor request | Same coverage day. |
| Removal where the departure is not amicable | P2 — within 1 coverage hour. |

## 10.  Records

| Record | Held in | Retention |
|---|---|---|
| Request, with each resource owner’s approval | Ticket | 3 years |
| Scope granted, and the expiry date | Ticket + access register | 3 years |
| End-of-engagement confirmations and automatic expiries | Ticket | 3 years |
| Acceptable Use acknowledgement | Training record | Duration of employment + 1 year |
| ACC-06 reading confirmation for Tier 1 temporary staff | Training record | Duration + 1 year |

## 11.  Related documents

| ID | Title | Relationship |
|---|---|---|
| ACC-02 | Account Naming, UPN & Identifier Standard | Decides the mechanism in §3. This document works under either option. |
| ACC-01 | Account Lifecycle | §6.3 — an existing account holder becoming a temporary worker. |
| ACC-03 | MFA Enrollment | Registered before access is granted. |
| ACC-06 | Identity Verification | Read by Tier 1 temporary staff each engagement period. |
| ACC-15 | Acceptable Use & Credential-Sharing Standard | Acknowledged before access. |
| M365-03 | Shared Mailbox Request & Ownership | The owner who approves mailbox access. |
| M365-11 | SharePoint & OneDrive Permission Management | How site access is granted. |
| M365-15 | Data Classification & Handling | What CONFIDENTIAL means for §4 step 4. |
| DEV-12 | Local Administrator Rights on Endpoints | §5. |
| GOV-06 | Service Commitments | Supplies §9. |

## Appendix A — Engagement-start card

| ✓ | Step | Who |
|---|---|---|
| ☐ | Ticket raised naming the person, department, supervisor, end date and what they need | Hiring department |
| ☐ | Each resource owner has approved, on the ticket | Mailbox / site owner |
| ☐ | Classification of what they will reach checked | Tier 2 |
| ☐ | MFA registered BEFORE access is granted | Temporary worker |
| ☐ | Scope set to the job, not to what the last person had | Tier 2 + supervisor |
| ☐ | Acceptable Use acknowledged | Temporary worker |
| ☐ | Tier 1 staff only: ACC-06 read before first shift | Temporary worker |
| ☐ | End-of-engagement expiry set and supervisor told the date | Tier 2 |

## Appendix B — End-of-engagement card

| ✓ | Step | When |
|---|---|---|
| ☐ | List of temporary workers and their access sent to each department | Two weeks before the period ends |
| ☐ | Supervisor confirms who is returning — one line per person | Within those two weeks |
| ☐ | Anybody not confirmed expires automatically | Last day of the period |
| ☐ | Returning people re-approved, with scope re-checked | Before the next period starts |
| ☐ | No supervisor response? Everything expires | Last day of the period — the safe default |
| ☐ | End-of-engagement action recorded for every person, including automatic expiries | At completion |
