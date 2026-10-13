# GOV-02 · Service Desk Intake, Ticket Quality & Categorisation

*How work reaches IT, how a ticket is set up so it can be measured, and why a messy ticket record cannot answer basic questions about the team.*

| Field | Value |
|---|---|
| Document ID | GOV-02 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | D. Cross-Cutting Governance |
| Operating tier | Tier 1, “the front door”. Configuration is Tier 3; reporting is Tier 4. |
| Review cycle | Annually, and whenever a tier boundary changes. |
| Depends on it | GOV-06 §11. Nothing about the team is measurable until this is in place. |

## 1. Purpose

This document says how work reaches IT and how a ticket is set up so that the team can answer questions about itself. The second part is the urgent one.

## 2. The measurement problem, stated plainly

When a desk sets up tickets loosely, the first time someone asks “how many tickets did we handle, from whom, about what?”, the answer takes a data project instead of a report. The usual findings look like this:

| Finding | Consequence |
|---|---|
| A large share of “tickets” are booking or appointment items | Part of the ticket record is not tickets at all. |
| Another share are automated alerts | More of the record describes machines, not people. |
| What is left is the genuine human work | Often well short of the total everyone quotes. |
| Who raised a ticket has to be matched on name, email and title | Demand has to be inferred rather than read. |
| Some rows cannot be classified at all | They get set aside, and the totals stop reconciling. |

> **What this costs**
> It takes skilled effort to establish a fact that should have been a report: how many tickets, from whom, about what. That effort has to be repeated every time the question is asked, and the answer carries a caveat every time.
> It also means no baseline can be fully trusted. The best available figures are directional, which is a reasonable place to start and a poor place to stay.
> Everything GOV-06 §11 proposes to measure depends on this being fixed first.

## 3. One front door

Publish one service desk address. That is the front door, and Tier 1 holds it.

| Channel | Status |
|---|---|
| The service desk address | The published address. Everything arriving here becomes a ticket. |
| The service portal | Preferred, because it can require the §5 fields at the point of submission rather than asking for them afterwards. |
| Walk-up | Legitimate and valuable. Still creates a ticket, logged by whoever helped. |
| Phone | Legitimate. Still creates a ticket. |
| Chat message to an individual | Not a queue. Fine for a quick question; if it becomes work, it becomes a ticket. |
| Direct email to a named IT staff member | Not a queue. Redirect to the front door, politely, and explain why once. |
| Tier 2, Tier 3 and IT management addresses | Internal escalation addresses, not public ones. Users do not contact Tier 3 directly. |

> **Why the direct-email habit matters**
> A busy manager emails an operational request to the service desk and to two named IT people at once. That is an entirely sensible thing to do: it maximises the chance of a fast answer.
> The cost is invisible to the sender. The work now depends on those two people being available, it is not in the queue in a way anybody else can pick up, and it does not appear in any measure of what that department needs from IT.
> The answer is not to refuse. It is to action it and reply from the ticket, so the requester learns that the front door is faster, because it is, once four people can see it.

## 4. What pollutes the record, and how to stop it

| Pollutant | Why it is there | Fix |
|---|---|---|
| Booking appointments | A bookings mailbox is generating items into the ticket queue. | Separate them at source. If they must be visible, they belong in a distinct queue or work type that reporting can exclude by default, not filtered out by hand each time. |
| Automated alerts | Monitoring and security notifications arriving as tickets. | Alerts route to a monitoring queue, not the service queue. An alert that needs human work becomes a ticket deliberately, with a person attached. |
| SLA breach re-notifications | Hourly repetition on every breached ticket. | Switch off (GOV-06 §9.2). Cheapest fix in the catalogue. |
| Unattributable submitters | Free-text submitter fields, and mail arriving from addresses not matched to a directory record. | Match submitters to the directory at creation. Where no match exists, that is itself worth knowing: an account request from a personal email address should stand out, not blend in. |
| Tickets with no tier or category | Optional fields. | §5: required, not optional. |
| Duplicate tickets for one issue | Multi-channel arrival: the same request by portal, email and chat. | Link and close duplicates against the surviving ticket; never work two. |

## 5. Setting up a ticket so it can be measured

Six fields. All required, all cheap, and each one answers a question the team otherwise cannot.

| Field | Value | Question it answers |
|---|---|---|
| Submitter | Matched to the directory record, not free text. | Who is generating demand, by population? |
| Tier | The tier currently holding it (§6). | Where is capacity going? This is the field GOV-06 depends on entirely. |
| Priority | Per GOV-06 §4: from impact and scope, not the requester’s wording. | Are we working the right things first? |
| Category | From a fixed list. Free text defeats the purpose. | What is the actual work? This is what turns a pile of lockouts into a ranked list of causes. |
| Confirmed cause, where applicable | For access tickets, the ACC-05 cause A–E. | Which fix would remove this ticket class entirely? |
| Verification tier, for account actions | ACC-06 V1–V4. | Did we confirm who we were talking to? |

> **Three asks for every technician**
> 1. Set the tier in the ticketing system, every time, even when it feels like extra typing.
> 2. When it is not IT’s, look the owner up in the staff directory instead of guessing an address.
> 3. Answer something twice, and write it into the knowledge base.
> The first ask buys everything in GOV-06 §11. The typing is the price of the team being able to make its own case.

## 6. Choosing the tier

Use the four-question test.

| Question | Answer |
|---|---|
| Can I finish it with what I already have access to? | It is yours. |
| Is a person affected, or a system? | System means Tier 3. |
| Am I waiting on money, risk or permission? | Tier 4. |
| Does this belong to IT at all? | Redirect, and log it. |

And the governing rule: escalation changes the tier, not the queue. The category and the full history travel with the ticket. Nobody starts over.

## 7. When it is not ours

Redirecting a ticket correctly counts as resolving it. Write that into Tier 1’s responsibilities deliberately, because it is counter-intuitive: sending work to the right place is a completed piece of work, not a failure to help.

Sort every request into one of three groups, quickly:

| Group | What it covers | Where it goes |
|---|---|---|
| IT | Accounts and sign-in, devices, software, email and files, networks, printing, meeting room AV, and the technical side of any security concern. | Keep it. Work it at your tier, or escalate. |
| The usual departments | HR: pay, benefits, leave, personnel records. Finance: invoices, expenses, purchasing, budgets. Facilities or physical security: buildings, badges, keys, safety. Legal or compliance: contracts, privacy requests, regulatory questions. | Redirect to that department. |
| Everyone else | Anything about the organization’s own clients, services or programmes where nothing in IT is broken. | Redirect to the department that owns it. |

Nobody needs to memorise who owns what. The skill is recognising quickly that a request is not yours, and then looking the owner up. That is why an up-to-date staff directory matters as much as any tool IT runs: it lets the front door redirect in seconds, correctly, without naming a person or an address from memory. If the directory is wrong, tell whoever maintains it.

When a request mixes both, such as an HR form that will not load, keep the technical part and redirect the rest.

Log every redirection, with the department you sent it to. A department receiving many redirected requests may have a front-door problem of its own, and nobody can see that if redirections are not recorded.

## 8. Escalation hygiene

- Set the category before escalating. An escalation described only as “user is locked out” forces the receiving tier to redo the triage.
- Add owner’s notes: what the person reported, what you tried, what you confirmed. Three sentences.
- Escalate on scope, not difficulty. A fiddly case inside your remit stays with you; ask in the tier channel rather than moving the ticket.
- The receiving tier may recategorise, including back down. That is review, not rejection.
- Never close and reopen to restart a clock. It corrupts every measure and is visible in the audit trail.

## 9. What good looks like

A month after this is in force, the team should be able to answer these without a data project:

- How many genuine tickets did we handle, and from which populations?
- How was capacity distributed across the four tiers?
- What were the top five categories, and which single fix would remove the most volume?
- Of the account tickets, how many were each ACC-05 cause?
- How many account actions were taken without a recorded verification?
- How many days was each tier in Constrained or Degraded?

If any of those takes more than a few minutes to answer, it should become a report.

## 10. Measurement

- Share of tickets with all six §5 fields populated. Target 95%+ within a quarter.
- Share of the record that is genuine human tickets. Target above 95%.
- Share of submitters matched to a directory record.
- Tickets arriving via the front door versus by direct email to an individual.
- Redirections logged. A rising number means §7 is working, not that IT is refusing work.

## 11. Records

| Record | Held in | Retention |
|---|---|---|
| Ticket, with the six required fields | The ticketing system | Per M365-16 |
| Redirections, with destination department | Ticket | 3 years |
| Category list and its change history | IT governance record | Permanent |
| Monthly data-quality figures | GOV-06 monthly pack | 3 years |

## 12. Related documents

| ID | Title | Relationship |
|---|---|---|
| GOV-06 | Service Commitments, Priority & Escalation | Depends entirely on this document. Priority definition lives there. |
| GOV-01 | SOP Catalog Governance | Uses this intake for change proposals. |
| GOV-03 | Security Incident Response | Alerts routed under §4 must still reach a human path. |
| ACC-05 | Account Lockout Triage | Supplies the confirmed-cause field. |
| ACC-06 | Identity Verification | Supplies the verification-tier field. |
| GOV-05 | Knowledge Base Article Standard | Where the third ask leads. |

## Appendix A · Ticket setup card

|  | Field | Get it right because |
|---|---|---|
| 1 | Submitter, matched to the directory | A free-text name cannot be counted, and an unmatched submitter is itself a signal. |
| 2 | Tier, every time | This is the field the whole service-commitment model runs on. |
| 3 | Priority, from impact and scope | Not from how urgently it was described (GOV-06 §4). |
| 4 | Category, from the list | Free text means the category cannot be reported on at all. |
| 5 | Confirmed cause, for access tickets | ACC-05 A–E. This is what makes a pile of lockouts actionable. |
| 6 | Verification tier, for account actions | ACC-06 V1–V4. Required: the ticket does not close without it. |

## Appendix B · Redirection card

Redirecting correctly counts as resolving. Look the owner up in the staff directory rather than guessing an address, and log it.

| If it is about | It goes to |
|---|---|
| Sign-in, devices, software, email, files, network, printing, meeting room AV | IT. Keep it. |
| Pay, benefits, leave, personnel records | HR |
| Invoices, expenses, purchasing, budgets | Finance |
| Buildings, badges, keys, physical safety | Facilities or physical security |
| Contracts, legal questions, privacy requests, compliance | Legal or compliance |
| The organization’s own clients, services or programmes, with nothing broken in IT | The department that owns it, from the staff directory |
| A mix of both | Keep the technical part, redirect the rest |
| Anything where you are not sure | Check the staff directory first, then ask in the Tier 1+2 channel rather than guessing. A wrong redirect costs the requester more than a two-minute question costs you. |
