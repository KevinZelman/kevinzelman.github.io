# ACC-14 · Mailbox & Calendar Delegation Standard

*Delegation, shared mailboxes and send-as are three different things. Choosing the wrong one is the most common access request the desk receives.*

| Field | Value |
|---|---|
| Document ID | ACC-14 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | B. Account Usage |
| Operating tier | Tier 2 — Advanced Technical Services grants and removes. Tier 1 answers the “which one do I need?” question using §2. |
| Review cycle | Annually. |
| Relationship to M365-03 | M365-03 governs shared mailboxes as objects — when one should exist, who owns it, how it is named. This document governs access to a PERSON’S mailbox and calendar. They are requested interchangeably and are not interchangeable. |

## 1.  Purpose

“Can you give me access to her email?” arrives at the service desk regularly, and it can mean at least four different things. The requester usually does not know which one they want, because the distinctions are Exchange’s rather than anyone’s natural way of thinking about the problem.

Answered by whoever picks it up, the request tends to get the most permissive option that makes the symptom go away. That is how an assistant ends up with full access to a director’s mailbox when they needed to manage a calendar, and how several temporary-worker accounts end up on a departmental mailbox by reply-all with no owner and no review date.

This document makes the choice a two-minute lookup and puts a form in front of it.

## 2.  The four things people mean by “access to their email”

| Mechanism | What it does | Who sees it | Right for |
|---|---|---|---|
| Full Access delegation | Opens another person’s entire mailbox — every folder, every message, sent items, deleted items. | The delegate sees everything, including mail the owner considers private. | A genuine assistant relationship, with the owner’s informed consent. |
| Folder-level permission | Access to one folder, or to the calendar only, at a chosen level. | Only that folder. | Most cases. This is the answer people usually need and rarely ask for. |
| Shared mailbox membership | Access to a separate mailbox that belongs to a function, not a person (M365-03). | All members see the same mail. | A departmental address — info@, billing@ — where several people handle a queue. |
| Send-as / send-on-behalf | The ability to send mail that appears to come from the other identity. | Recipients. This is the one with reputational consequences. | Sending from a functional address, or a named assistant sending on behalf. |

> **The distinction that matters most**
> A shared mailbox is a place. A delegation is a relationship with a person’s private correspondence.
> Almost every request that arrives as “add me to her email” should be a shared mailbox that does not exist yet, or a folder permission. Full Access on a colleague’s personal mailbox is the rarest of the four and is treated as the exception it is.
> When a department finds itself delegating access to an individual’s mailbox because that individual receives the department’s mail, the correct fix is a shared mailbox under M365-03 — and the request should be redirected there rather than granted as asked.

## 3.  Choosing correctly — the decision table

| If the requester says… | The answer is… |
|---|---|
| “I need to manage her calendar and book meetings for her.” | Calendar delegation at Editor, with or without meeting-request handling (§5). Not mailbox access. |
| “I cover the info inbox with three colleagues.” | A shared mailbox under M365-03. If one does not exist, that is the request. |
| “He is on leave and his mail needs answering.” | Time-bound Full Access with a stated end date, plus an auto-reply naming the cover (§7). |
| “I send the newsletter and it should come from the department.” | Send-as on the departmental shared mailbox. Also M365-06 if it is a mass communication. |
| “I need to see whether she is free.” | Free/busy is already visible to everyone in the tenant by default. No request needed — answer at Tier 1 and close it. |
| “She has left and I need her files and mail.” | Not a delegation. That is the ACC-01 §7 leaver procedure and, if content must be searched, M365-16 §8. |
| “I need access to my temporary worker’s account.” | No. Supervision is not a mailbox permission. If the work is departmental, it belongs in a shared mailbox (ACC-09). |
| “I just need to check something in his mailbox.” | Declined, and referred to M365-16 §8. Curiosity, however well-intentioned, is not a basis. |

## 4.  How delegation is requested

1. The request comes through the service desk on the form in Appendix A. Not by reply-all on an existing thread, which is how grants end up with no owner and no record of who approved them.
2. THE MAILBOX OWNER APPROVES, in writing, for any access to their own mailbox. Not their manager, not the department head — the owner. The only exceptions are the absence and departure cases in §7, which have their own authority.
3. The requester states the minimum they need: which folder, at what level, for how long. “Full access” is not a level, it is the absence of one.
4. Tier 2 checks the request against §3 and redirects it where the answer is a shared mailbox. Redirecting a request is not refusing it; the ticket stays open until the person can do their job.
5. Every grant carries a review date. A delegation with no end date is a permanent grant made by accident (ACC-17).
6. The grant is recorded: mailbox, delegate, level, approver, date, review date. Recorded means in the register, not only in the ticket that will be closed and forgotten.
7. The mailbox owner is told when the grant is made and when it is removed. Somebody having access to your mail without your knowledge is the failure mode this rule exists to prevent.
## 5.  Calendar delegation and the visibility question

Calendars carry more than people expect. A meeting subject line can disclose a disciplinary process, a redundancy consultation, a medical appointment or a candidate’s name before any of those are public.

| Level | What the delegate can do | When to use it |
|---|---|---|
| Free/busy only | See that time is blocked, not what it is. This is the tenant default for everyone. | The default. Requires no request at all. |
| Reviewer | Read items including subject and detail. | Rarely correct on its own. Consider whether free/busy is enough. |
| Author | Read, and create items. | A colleague who books on the owner’s behalf but does not manage the calendar. |
| Editor | Read, create, and modify or delete existing items. | A genuine assistant relationship. |
| Delegate with meeting requests | Editor, plus meeting invitations are routed to the delegate. | A full assistant relationship. The owner must understand that invitations may be accepted without them seeing them. |

- Private items are hidden from delegates unless the owner explicitly permits them. The owner is told this at the point of granting, because most people do not know it and it changes how they use the private flag.
- Room and resource calendars are not personal calendars and are governed by M365-03 and DEV-18.
- Where an assistant supports several people, each grant is separate and each owner approves their own. There is no bulk grant.
## 6.  Send-as and send-on-behalf — the honesty rule

These two look similar in the admin console and are entirely different to the recipient, which is the only view that matters.

- SEND-AS produces a message indistinguishable from one the owner sent. The recipient cannot tell.
- SEND-ON-BEHALF produces “Delegate on behalf of Owner” in the From line. The recipient can tell.

> **The rule**
> Send-as is granted on FUNCTIONAL identities — a departmental shared mailbox, a service address. Sending as a departmental address such as info@ is honest: no individual is being impersonated, and the recipient understands they are hearing from a department.
> Send-as on a PERSON’S mailbox is granted only with that person’s explicit written consent, recorded, and reviewed annually. It is the one permission in this document that allows one member of the organization community to be indistinguishable from another in writing, and it should feel like a decision.
> Where a delegate is sending on a person’s behalf, send-on-behalf is the default and send-as is the exception that must be argued for.

Send-as is also relevant to phishing resilience: a population accustomed to receiving mail that appears to come from a senior colleague but was sent by somebody else is a population trained not to look closely (M365-22).

## 7.  Absence, illness and departure

### 7.1  Planned absence

The person going on leave arranges their own cover before they go: an auto-reply naming a colleague, and where necessary a folder permission or a time-bound delegation they granted themselves. This needs no ticket and is the right answer in almost every case.

### 7.2  Unplanned absence — illness or emergency

Where a colleague is unexpectedly absent and business genuinely cannot continue, access may be granted without their approval, under conditions:

1. The manager requests it, stating what business need cannot wait and what has been tried.
2. Tier 4 authorises. Not Tier 2, and not on urgency alone — the point of the authorisation is that somebody senior has weighed a colleague’s privacy against the business need.
3. The grant is scoped as narrowly as the need permits and time-bound to a stated date, typically no more than 30 days.
4. The absent person is told, in writing, as soon as it is reasonable to tell them. Not when they return — as soon as it is reasonable. Discovering on return that colleagues have been reading your mail for six weeks is a harm the organization can avoid at no cost.
5. The grant is removed on the stated date unless it is renewed by the same authority.
### 7.3  Departure

At separation, the manager receives delegated access under ACC-01 §7.2 and ACC-12. That grant is 30 days, it is for handover and for moving institutional records, and it is not a standing entitlement. It ends on the date; where the department needs the mail permanently, the mailbox is converted to shared under M365-16 §4 and membership is governed by M365-03 from then on.

## 8.  Review and removal

- Delegations are reviewed semi-annually with shared mailbox membership under ACC-17. The reviewer is the mailbox owner, or for a shared mailbox its named owner — never IT.
- A delegation whose reviewer does not respond is escalated one level and then removed. The person can ask for it back; the organization should not carry standing access to private correspondence that nobody will confirm is still needed.
- Delegations are removed automatically when either party changes role (ACC-01 §6). A mover event re-baselines both sides.
- Temporary-worker delegations expire at the end of the engagement, always, without exception and without a renewal by default (ACC-09).
- Removals are notified to both parties. A silently removed delegation produces a ticket within the hour.
## 9.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| “Which one do I need?” | Answered at Tier 1 from §3, in the conversation. |
| Calendar or folder permission, owner approved | P3 — 2 coverage days. |
| Full Access delegation, owner approved | P3 — 3 coverage days. |
| Send-as on a functional mailbox | P3 — 3 coverage days. |
| Send-as on a person’s mailbox | P3 — Tier 4 review; 5 coverage days. |
| Unplanned absence access (§7.2) | P2 — Tier 4 decision within one coverage day. |
| Removal on request | Same coverage day. Removals are never queued behind grants. |

## 10.  Records

| Record | Held in | Retention |
|---|---|---|
| Delegation register: mailbox, delegate, level, approver, dates | IT register | Life of the grant + 3 years |
| Owner approval | Ticket | 3 years |
| Send-as grants on personal mailboxes | IT register | Life of the grant + 3 years |
| Unplanned-absence authorisations, with the business justification | IT governance record | 7 years |
| Notification to the absent person | Ticket | 7 years |
| Semi-annual review outcomes | IT register (ACC-17) | 3 years |

## 11.  Related documents

| ID | Title | Relationship |
|---|---|---|
| M365-03 | Shared Mailbox Standard | Where most of these requests should actually go. |
| M365-02 | Exchange Online Mailbox Standard | The mailbox itself, and forwarding rules. |
| M365-06 | Mass Communication Approval | When send-as becomes a broadcast. |
| M365-16 | Retention, Legal Hold & eDiscovery | §8 — the only lawful route to read a colleague’s mail without their consent. |
| ACC-01 | Account Lifecycle | Mover and leaver events re-baseline delegations. |
| ACC-09 | Temporary Worker Access Standard | End-of-engagement expiry. |
| ACC-12 | Separation & Retiree Disposition | The 30-day manager window. |
| ACC-17 | Periodic Access Review | The semi-annual review. |
| GOV-06 | Service Commitments | Supplies §9. |

## Appendix A — Delegation request form

Submitted to the service desk. A request without owner approval is held, not actioned.

| Field | Entry |
|---|---|
| Mailbox or calendar | Whose, or which shared mailbox |
| Delegate | Named individual. One form per delegate. |
| What do you actually need to do? | In your own words. This is the field that gets the answer right. |
| Mechanism requested (§2) | Full Access / Folder / Shared mailbox / Send-as / Send-on-behalf / Calendar |
| Level, if calendar or folder | Free-busy / Reviewer / Author / Editor / Delegate with meeting requests |
| Start date and END DATE | An end date is required. “Ongoing” means a review date instead. |
| Mailbox owner approval | Owner’s written approval attached or forwarded |
| — IT USE — Redirected to shared mailbox? | YES / NO — if yes, M365-03 request reference |
| — IT USE — Granted by, date, review date |  |

## Appendix B — For end users: setting up delegation yourself

Most of what people ask IT for here, they can do themselves in about a minute. This appendix is written to be published.

### Letting a colleague see or manage your calendar

You do not need IT for this. In Outlook, open your calendar, choose Share, enter your colleague’s name, and pick what they can do: see when you are busy, see the details, add things, or manage it fully. You can change or remove it at any time from the same place.

### Before you share your whole mailbox

Sharing your calendar is normal. Sharing your entire mailbox is not, and you should think about it in the same way you would think about handing someone your filing cabinet. Everything is in there — mail from HR, mail from Occupational Health, correspondence you had forgotten about, your sent items. If what your colleague actually needs is one folder or your calendar, share that instead.

### If several of you handle the same mail

You want a shared mailbox, not access to each other’s. A shared mailbox has its own address, everyone sees the same messages, replies go out from the department rather than from whoever happened to answer, and it does not disappear when one of you changes role. Ask the service desk for one — it costs nothing and it will save you a great deal of confusion.

### When you go on leave

Set an out-of-office that names a colleague and gives their address. If that colleague needs to see your mail while you are away, you can grant it before you go and remove it when you get back. Doing it yourself is faster than asking us, and it means you decide what they can see.

### If you need access to a colleague’s mailbox

Ask them. If they agree, either of you can raise it with the service desk and we will set it up. If they are unexpectedly away and something genuinely cannot wait, tell their manager — there is a process for that, it needs a senior approval, and your colleague will be told about it, which is right.

What we cannot do is give one person access to another person’s mailbox without them knowing. That is not a bureaucratic obstacle; it is the thing that makes it safe for any of us to use organization email for anything personal at all.
