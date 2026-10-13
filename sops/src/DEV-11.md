# DEV-11 · Software Request, Approval, Licensing & Deployment

*How a request for software is answered — the “do we already have it?” check, the approval path by cost and by risk, the licence register, and the deployment mechanism of record through a move to Intune.*

| Field | Value |
|---|---|
| Document ID | DEV-11 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 2 — Advanced Technical Services runs intake, packaging and deployment. Tier 3 owns the security and compatibility assessment and the deployment mechanism. Tier 4 approves cost and anything material. Tier 1 answers “where do I get X?” from the published catalogue rather than raising a request. |
| Review cycle | Annually, and at each renewal cycle. |
| Governing policy | Your organization’s software use and acquisition policy, if you have one. That policy governs acquisition. This document operationalises it: the request path, the approval gates, the licence register and the deployment mechanism. It does not restate it and must not contradict it. Where it does, the policy is right and this document is a defect to be reported under GOV-01 §10. |
| Relationship to M365-20 | M365-20 governs Microsoft licensing, which is assigned by rule from the system of record. This document governs everything else — the software the organization buys, downloads or is given, one product at a time. The two meet at §2 and at §11. |

## 1.  Purpose — and the policy this sits under

A member of staff wants a piece of software. Today the answer depends entirely on who they ask: a technician who installs it, a manager who buys it on a departmental card, a colleague who sends them a download link, or a ticket that sits because nobody knows who decides. Two things are missing — an approval path and a deployment mechanism of record — and this document is both.

The volume argument for this document is honestly a weak one. On most desks, software and licensing is a small share of tickets, often around one in twenty. That is not a queue crisis. The argument is that each of those requests is answered from scratch, that the organization cannot say what is installed across its estate or what it is entitled to install, and that the most common wrong answer — granting local administrator rights so somebody can install something themselves — quietly undoes most of the endpoint controls in this domain (DEV-12 §2).

> **This is not a new software policy.**
> Most organizations already have one, often sitting in a shared folder nobody links to. It governs acquisition and it is not restated here.
> What this document adds is the machinery the policy assumes and the organization does not yet have: an intake with mandatory fields, an approval path that separates the cost question from the risk question, a licence register, and a deployment mechanism that produces a record of what is actually installed.
> The first action arising from this document is therefore not procedural. It is to make sure the policy can be found from your staff portal or internal knowledge base (GOV-01 §9), because a governing policy nobody can find is not governing anything.

## 2.  Do we already have it?  The first substantive step

Before cost, before risk, before anything: does the organization already license something that does this? This is deliberately the first substantive step because a surprising share of requests are for a capability already paid for, and because it is the only step that can close a request in ten minutes at no cost to anybody (M365-20 §4 step 3).

| What is asked for | What the organization already provides | Where it is written |
|---|---|---|
| A survey or questionnaire tool | Microsoft Forms, for internal audiences. Note the constraint below. | M365-17 |
| An appointment or scheduling page | Microsoft Bookings. Already in use widely enough that its appointments polluted a ticket export. | M365-17 |
| A project tracker, task board or simple Gantt | Planner and Lists. Project for the small number of people who genuinely need dependency scheduling. | M365-01 §2, M365-19 |
| A diagramming tool | Visio for the web, and Whiteboard for the rough case. | M365-01 §2 |
| A way to send somebody a large file | A SharePoint or OneDrive link with an expiry. Not a third-party transfer service, which takes organization content outside the tenant. | M365-11, M365-14 |
| A webinar or recorded session tool | Teams, including recording and transcription. | M365-08 |
| An AI assistant or chatbot | Copilot where licensed. Anything else is a data-handling decision, not a software decision. | M365-18 |
| A departmental site, intranet page or document library | SharePoint. This is a request for a site, not for software. | M365-10 |
| A small departmental application or automation | Power Platform, within the governance already written for it. Build-versus-buy is a real question and this is where it is asked. | M365-19 |
| A PDF editor | Reading, annotating, signing and combining are covered by the tools already deployed. Full editing is a genuine licence for a small number of people — not a site licence. | M365-01 §3 |
| A form external users can upload files to | Nothing. Microsoft Forms will not accept uploads from external users because uploads land in tenant OneDrive or SharePoint. This request is genuine and needs §3 onward. | M365-17 |

The last row matters as much as the other ten. A “do we already have it?” check that always answers yes becomes a way of refusing requests, which teaches people to stop asking and to install things themselves. The check exists to close the easy cases honestly, not to close all of them.

- Tier 1 should be able to answer the first ten rows without raising a request at all. That is a GOV-05 article and it is the cheapest thing in this document.
- Where the answer is “we have something, but it is worse for your purpose”, say that plainly and proceed. A requester told to use an inadequate tool will find another one, and IT will not know about it.
- Record the outcome either way. A request closed at §2 is evidence for the M365-01 service description and for the GOV-05 article; a request closed at §2 with no record is a conversation.
## 3.  The request — mandatory fields

One intake, through the service desk (GOV-02 §3). Appendix A is the form. A request missing a mandatory field is returned within one coverage day with what is missing, not queued silently — an incomplete request that sits for a fortnight and is then returned has cost the requester three weeks.

1. WHAT: the exact product, edition and version. “Adobe” is not a product; “Acrobat Pro, current subscription release” is.
2. WHY: what it is for, in one sentence a non-specialist can read. This is the field the approvers actually read.
3. WHO: how many people, named or by role, and whether the number is expected to grow.
4. DATA: does it hold, process or transmit client records, payroll or HR data, or anything in the sensitive classes in M365-15? A yes routes to §5 whatever the cost.
5. WHERE: does the data stay on the device, sit in the organization tenant, or go to a vendor’s cloud? If the last, in which country, and does the vendor use organization data to train anything?
6. COST: one-off and recurring, per seat or per device, and the funding source with the budget holder named.
7. WHEN: the date it is needed, and what depends on it. “As soon as possible” sets no priority (GOV-06 §4).
8. RIGHTS: does it need administrative rights to install, or to run? Those are two different answers and the second is the expensive one (§10, DEV-12).
9. SIGN-IN: does it authenticate against organization identity? If so it is also an ACC-16 intake and the two run together, not one after the other.
10. PLACE: individual devices, a departmental set, or a lab or meeting-room image? A lab image change lands in a quiet-period window (DEV-06, GOV-04 §7).
11. ALREADY THERE: has a trial already been installed, and on how many machines? Asked without reproach, because the honest answer is frequently yes and IT needs to know what is on the estate more than it needs to be right about how it got there.
12. ALTERNATIVE: what was checked at §2, and why it does not fit.
## 4.  The approval path: cost, and risk

Two questions, two approvers, and they are not interchangeable. The budget holder approves spending organization money. IT approves fitness, safety and supportability. Neither can answer the other’s question, and neither may override it: IT does not decline a request on cost grounds, and a budget holder does not authorise a security exposure by paying for it.

| Trigger | Who approves | What they are approving, and what it is not |
|---|---|---|
| Already in the self-service catalogue, no cost | Nobody | Nothing to approve. The person installs it (§10). If a catalogue item needs an approval every time, it does not belong in the catalogue. |
| No cost, no institutional data, one or a few users, not in the catalogue | Tier 2, with the short assessment in §5 | That it is safe to run and supportable. Recorded so that the tenth identical request becomes a catalogue item instead of a tenth assessment. |
| Any recurring cost, at any size | The department’s budget holder | The cost, and that the department will still be paying it next year. Not the security question. |
| Cost above the organization purchasing threshold, or a multi-year commitment | Tier 4, then organization purchasing | A material institutional commitment. Contract, data-processing terms and renewal date come with it (§6). |
| Holds or transmits client records, payroll or HR data, or anything in the sensitive classes in M365-15 | Tier 3 assessment, Tier 4 decision — regardless of cost, including free | The data risk. This is the row that catches the free tool with an organization spreadsheet in it. See M365-15. |
| Authenticates against organization identity, or requests tenant consent | Tier 3, via ACC-16 and ACC-08 §8 | An identity integration and, for an OAuth application, a standing permission grant. A tenant consent is not a software install; it is an account with permissions and no leaver process. |
| Requires administrative rights to RUN, not merely to install | Tier 4, as a DEV-12 exception | A standing weakening of the endpoint. Almost always worth one more conversation with the vendor first. |
| Goes onto a lab or meeting-room image | Tier 2 with the room or lab owner; scheduled by Tier 3 | A change to a shared environment, delivered in a quiet-period window (DEV-06, DEV-18, GOV-04 §7). |
| A browser extension | Tier 3 | See §8. Low friction to install, high reach once installed. |
| Free, open-source, or given to the organization | The same path as anything else | Acquisition is free. Operation is not (§7). |

> **One number this document deliberately does not state, with a named owner**
> The purchasing threshold above which Tier 4 and organization purchasing are involved is a Finance figure, set by the organization’s procurement arrangements and by the Software Use & Acquisition Policy. It is not IT’s to invent, and a guessed figure here would be quoted back as policy within months.
> ACTION: Head of IT to obtain the threshold and the current purchasing route from Finance, and to insert it into §4 before this document is published. Owner: Head of IT. It is one conversation.
> Until it is filled in, Tier 2 escalates any recurring cost to Tier 4 rather than guessing — which is slower and is the right way round to be wrong.

## 5.  The security and privacy review

The review is proportionate, and that is the whole design. A sixty-item questionnaire produces one of two outcomes: nobody completes it, or somebody completes it dishonestly to get their software. Appendix B is twelve questions, and IT should be able to work through the short form in about fifteen minutes.

| Depth | When, and what it consists of |
|---|---|
| Short form — three questions | A free or low-cost single-user utility with no institutional data: where does it come from, what does it reach, and who patches it. Tier 2, recorded in the ticket. |
| Standard form — Appendix B in full | Anything with a recurring cost, anything used by a department, anything installed by policy across devices. Tier 3, recorded as a governance record. |
| Standard form plus contract and identity review | Anything holding client records, payroll or HR data, or in the sensitive classes in M365-15. Adds ACC-16 for sign-in, ACC-08 §8 for consent and permissions, a data-processing agreement, and a Tier 4 decision recorded with a named person accepting the residual risk. |

### 5.1  Four answers that change the outcome rather than the paperwork

- “It needs a kernel driver or its own real-time protection component.” Two endpoint protection products on one device is a fault, not defence in depth (DEV-14 §4). This is a Tier 3 decision before purchase, not a support ticket afterwards.
- “It needs an inbound firewall rule, or a VPN connection to a vendor.” That is a network change under GOV-04 and a remote-access decision under DEV-10, and it frequently costs more than the software.
- “There is no way to deprovision a user.” An application with no SCIM and no admin removal path is not reached by the leaver process at all (ACC-16 §7). It enters the ACC-17 §2 annual application review at onboarding, not later.
- “The vendor updates it automatically, from the internet, whenever it likes.” Convenient for the vendor and a live question for DEV-13: an unmanaged auto-updater is a code-execution channel into the estate that the organization does not control. Sometimes acceptable, never unnoticed.
A residual risk may be accepted. It is accepted by a named person at Tier 4, in writing, with the reason — never by IT declining to raise it and never by the requester agreeing to be careful.

## 6.  The licence register, and the true-up problem

One register, owned by Tier 4, holding every non-Microsoft software entitlement the organization has. It is the document that answers a vendor audit, and it is usually the document that does not exist.

| Field | Why it is in the register |
|---|---|
| Product, edition, version | A licence for a previous major version is not a licence for this one, and the difference is discovered at audit. |
| Vendor, and the contract or order reference | The entitlement document is the evidence. A register pointing at nothing proves nothing. |
| Licence model | Per named user, per device, concurrent, or site. The counting unit differs per model and counting seats for a per-device licence gives the wrong answer in both directions. |
| Entitled count | What the organization has bought. |
| Deployed count, and its source | What is actually installed, and where that figure came from. See the caveat below — today, for most products, the honest entry is “not reliably known”. |
| Business owner | A named person outside IT who needs this software and answers the renewal question (§11). Not the technician who installed it. |
| Renewal or expiry date | The field that makes §11 possible. A renewal discovered in the week it expires is not a decision. |
| Annual cost and funding source | For the Tier 4 annual position, alongside the Microsoft position in M365-20 §7. |
| Where the key, entitlement or download lives | So that a reinstall does not require finding the person who bought it years ago. |
| Data classification and review outcome | The §5 result, carried forward, so the next request for the same product does not repeat the assessment. |

### 6.1  The true-up problem

Deployed counts drift upward, silently, and always in the same direction. A vendor audit then arrives, produces a number the organization cannot contest, and the organization pays the difference — a true-up — at list price rather than at the price it would have negotiated.

- Self-installs, by anybody holding local administrator rights, add seats nobody recorded (DEV-12).
- An image with software baked into it multiplies an entitlement every time a machine is built from it. This is the largest single source and it is invisible because each install looks legitimate.
- A departure reclaims the Microsoft licence by rule (M365-20 §2) and leaves the non-Microsoft seat assigned, because nothing automatic touches it (§11).
- A department that could not get an answer buys its own instance of something the organization already licenses, and now the organization holds two contracts for one product.
- A trial that was never uninstalled becomes a production dependency, then a renewal invoice.

> **Say what the register can support, and no more**
> While deployment is split between a legacy endpoint tool, technician installs and self-installed software (§9), the organization cannot produce a trustworthy deployed count for most products. The register must record that, per product, rather than carrying a number it cannot defend.
> “Deployed count: not reliably known; source: none” is a useful entry. It is an accurate statement of exposure, it is the argument for §9, and it is far better than a figure somebody assembled from memory in an afternoon — which will be quoted in a renewal negotiation as though it were measured.
> The deployed count becomes reliable when the target state in §9 is reached, because the management platform then reports it. That is one of the more concrete benefits of the Intune transition and it is worth stating to whoever is funding it.

- Reconcile entitled against deployed annually per product as a minimum, and monthly for anything where the platform reports it automatically. The reconciliation record is the audit defence and is retained for seven years (§13).
- Where deployed exceeds entitled, the organization buys the difference or removes the installs. It does not leave it and hope. Removing installs is often the right answer and is almost never considered.
- Named-user licences are not freely transferable between people because one has left. Several vendors permit reassignment only after a stated period, or not at all. Check the terms before promising a colleague a seat.
## 7.  Free and open-source software, treated honestly

The organization uses open-source software, should continue to, and should be clear-eyed about it. Free to acquire is not free to run, and the gap is where the surprises live.

| The claim | The reality in a small IT shop |
|---|---|
| “It costs nothing.” | Acquisition costs nothing. Packaging, testing, deploying, patching, supporting and eventually removing it are the same work as for a commercial product, done by the same very small number of people. |
| “It is safer because the code is open.” | Sometimes materially truer, sometimes not. What matters operationally is whether anybody is maintaining it, how quickly it ships fixes, and whether the organization will notice when it stops. |
| “It updates itself.” | Frequently there is no MSI, no managed update channel, and no way to deploy a version centrally. Which means either a per-device manual update — which will not happen — or a packaging job every release (DEV-13 §3). |
| “Vulnerabilities are not our problem.” | They arrive in the daily Defender for Endpoint vulnerability notifications like everything else, with the same remediation timeframe in DEV-13 §8 and no vendor to escalate to. |
| “The licence does not matter, it is free.” | For ordinary internal use, usually true. It stops being true where the organization modifies the software, embeds a library in something it distributes, or builds a service on it — at which point copyleft obligations are real and a Tier 4 question. |
| “I will just download it.” | The provenance is the risk. A search result for a well-known free utility is frequently a repackaged installer carrying adware or worse. The rule is the project’s own site or a recognised repository, verified where a checksum or signature is published — and this is precisely why the organization packages FOSS centrally rather than sending people to download it. |
| “It has been abandoned but it still works.” | An unmaintained package is an end-of-support system on a desktop. It is a Tier 4 accepted risk with an end date and a replacement plan, not a permanent arrangement (DEV-13 §11). |

So: open-source software follows exactly the same route as commercial software through §3, §4 and §5. The cost approval is trivially easy. The operational assessment is not, and skipping it because there is no invoice is how a free utility becomes an unpatched dependency on forty machines.

## 8.  Browser extensions — the under-governed channel

> **An extension is software with the fewest controls and the widest reach.**
> Installing one takes a click. It needs no administrative rights, generates no ticket, appears in no inventory today, and asks its permission question at the moment the person is trying to get something done — so the answer is always yes.
> What it can then do is read and modify every page the person visits. That includes the HR system, the payroll screens, the mailbox, the client records system and anything else that lives in a browser, which in most organizations is now most things. An extension is closer to a credential than to an application.
> Extensions also change hands. A benign extension with a large install base is a saleable asset, and the new owner inherits the permissions the original earned. The user is not asked again.

|  | Current state | Target state |
|---|---|---|
| Who may install | Anybody, in Edge or Chrome, without a record. | Extensions blocked by default; a short allow list deployed by policy. |
| The request route | None. Nobody asks. | §3, with a Tier 3 assessment (§4). |
| What is installed across the estate | Unknown. | Reported from the management platform, monthly, with the coverage figure (DEV-14 §12). |
| The allow list | Does not exist. | A published list of business extensions with a named requester and a review date, held in the licence register (§6). |

Getting there follows the DEV-02 §5 sequence rather than a switch, because blocking extensions on a Monday produces a specific and immediate ticket class and a loss of goodwill that is hard to recover:

1. MEASURE. Report what extensions are installed across the estate. This is the number that will surprise people and it does not exist today.
2. Publish the allow list, derived from what is actually in use and defensible — a password manager, an accessibility tool, a citation manager, a screen-reader helper, whatever the measurement shows people genuinely rely on.
3. Tell people, name a date, and give them the route in §3 for anything missing. A fortnight’s notice removes most of the friction.
4. Then enforce, blocking by default. Not before — enforcing against a population that cannot comply is the DEV-02 §2 failure and the organization has already paid for that lesson once.
- Where an extension is also an OAuth application consented in the tenant, it is an ACC-08 §8 matter as well. Two controls, one artefact, and it is easy to close one and think the job is done.
- An extension request is a software request. It goes through §3 with a shorter §5, and it is recorded — because the useful output of this section is a list, not a policy.
## 9.  Deployment: current state, target state, and what to expect during the transition

This is the cutover section. The mechanism of record is changing, and the change is what turns most of the rest of this document from a procedure into a capability.

| Element | Current state — governs today | Target state — governs after cutover |
|---|---|---|
| Deployment mechanism | A mix: a legacy endpoint tool for some packages, technician installs for many, and self-installed software wherever a user holds local administrator rights (DEV-12). | Intune application deployment, as the single mechanism of record. Required applications assigned by group; everything else offered through the catalogue. |
| Self-service | None. Every install is a ticket, a technician visit, or an administrative-rights grant. | A Company Portal catalogue. The person installs approved software themselves, with no elevation and no ticket. |
| The record of what is installed | Partial. The legacy tool’s inventory covers the devices it manages; nothing covers self-installs. The deployed counts in §6 cannot be supported. | Intune and Defender software inventory, as the source of the deployed count in §6 and of the extension report in §8. |
| Packaging | Per request, by whoever picked up the ticket, usually undocumented and not repeatable. | Packaged once, versioned, with a named owner and a stated update path recorded at packaging time (DEV-13 §3). |
| Removal | Manual, per device, and therefore not done. | Assignment removal. Which is also how a licence is genuinely reclaimed (§11). |
| macOS | Manual installs. Enrollment under test. | Per DEV-09 once written. Provisional until then, and recorded as a gap rather than assumed. |
| Labs and meeting rooms | Software baked into the image, changed at rebuild. | Per DEV-06. Image changes land in a quiet-period window (GOV-04 §7); in-term additions are deployed, not re-imaged. |
| The service desk record | The ticketing system holds the asset and service desk record. | Unchanged by this cutover. Deployment moving to Intune does not move ticketing (DEV-01 §3). Where one product did both, these are two different transitions, frequently confused in conversation. |

### 9.1  What a department should expect during the transition

- Requests do not stop and the route does not change. Intake is §3 whichever mechanism ends up fulfilling it.
- A request may be fulfilled by either mechanism for a while. The ticket records which one — because in eighteen months somebody will need to know how a package reached a device, and “it was always there” is the answer that costs a day.
- New packaging work goes to Intune. Adding a new package to the legacy tool during the transition is work that will be thrown away, and it should be declined rather than done politely.
- A package that exists in the legacy tool and is still needed is repackaged as part of the wave that moves its devices, not left to be discovered when the legacy tool is switched off (DEV-01 §8).
- The catalogue will be short at first. It should launch with the ten or twelve applications that generate the most requests, not with everything — a catalogue nobody can navigate produces tickets, which is the thing it exists to prevent.
- For a period the same application will be available two ways. That is normal and temporary. Two different VERSIONS of the same application available two ways is not acceptable, and is the specific thing to watch for.
- Nothing is removed from anybody’s device by the transition itself. Where something will be removed — an unlicensed install, a superseded version, a blocked extension — the affected people are told before, with a date, not after.
- Lab and shared-room images move last, and they move in a quiet period. A rebuild during a busy period interrupts the people using them, and it is not worth the tidiness (DEV-06, DEV-18).
- Expect the deployed counts in §6 to get worse before they get better. As inventory improves, installs nobody knew about will surface. That is the control working, not a new problem appearing.

> **An open question that determines whether §10 works at all**
> The self-service catalogue does not exist yet, and its first contents and its approval route are undecided. Everything in §10 depends on it: until the catalogue is live, DEV-12’s answer to “I need to install software” — publish it through the management platform — has nowhere to send the person, and the honest consequence is that administrative rights keep getting granted.
> The first list should be derived from data rather than opinion. The ticket history for software requests already contains it, and reading it is an afternoon’s work.
> ACTION: Tier 3 with Tier 2 to produce the first catalogue list from the ticket history, and to state who approves an addition to it, within 30 days of this document being approved. Owner: a named Tier 3 lead. This is the highest-value open item in this document.

## 10.  Self-service or assisted — and the admin-rights question underneath

Most software requests are really administrative-rights requests in disguise, and most administrative-rights requests are really software requests. Both halves are true, they point at each other, and saying so out loud is more useful than either document saying it alone.

DEV-12 §5 answers “I need to install software” with “not local admin — publish it through the management platform (DEV-11)”. That answer is correct and, until the catalogue in §9 exists, it has nowhere to land. Somebody who genuinely needs a piece of software today and is told to wait for a platform capability will get administrative rights instead, from somebody trying to be helpful. Naming that gap is the only way it gets closed rather than worked around.

| Route | When | What the person does | What it costs IT |
|---|---|---|---|
| Self-service catalogue | An approved application, no cost, no elevation needed. | Opens Company Portal and installs it. | Packaging, once. Then nothing per install. |
| Required assignment | Everybody in a group needs it — a department, a role, a lab. | Nothing. It appears. | A policy and a version to keep current. |
| Assisted install | Not in the catalogue, needed once, or needs configuration the user should not do. | Raises a ticket; a technician installs it. | A visit or a remote session, every time. This is what the catalogue is designed to remove. |
| Time-boxed elevation | Somebody whose actual job is installing and testing tools — a developer, a researcher. | Elevates for the task, on their own account, with a recorded reason. | A recorded DEV-12 exception with an expiry, reviewed quarterly. |
| Standing local administrator rights | Never, as an answer to a software request. | — | Every endpoint control underneath it (DEV-12 §2). This row exists to be pointed at. |

- A request that recurs is a packaging decision, not five assisted installs. The third identical ticket is the trigger, and Tier 2 should raise it rather than fulfil it a third time.
- A technician install is still a licence consumed. It goes into the register (§6) at the moment it happens, not at the next reconciliation.
- Software that only works with the user as local administrator at RUN time is a vendor defect. Ask the vendor first; it is frequently a permissions setting on a directory, and the answer arrives faster than the exception would.
## 11.  Renewals, the annual review, and what happens at separation

### 11.1  Renewals

- The renewal date lives in the register (§6). The business owner is notified 90 days out — a renewal decision taken in the week it expires is not a decision, it is an invoice.
- The question at renewal is not “shall we renew?” but “is this still used, by how many people, and would the organization buy it today at this price?” Usage comes from the platform, not from the owner’s impression of it.
- A product with no identifiable business owner is not renewed. It is either adopted by somebody who needs it or retired — and this is the single most productive question in the register.
- Where the answer is retire, the removal is planned: assignment removed, installs uninstalled, data extracted first, and the register entry closed with a date. A cancelled subscription with the software still on forty machines is the worst of both.
### 11.2  The annual review — deliberately one packet with ACC-17

The software review and the application access review ask the same business owner about the same product in the same breath. Sending them separately guarantees that one of the two is ignored, so they are one packet in one month.

- ACC-17 §2 asks: who still needs access to this? This document adds: is the entitlement count right, is it still worth the money, and who owns it now?
- They run in the ACC-17 annual round — March in the ACC-17 §2.1 calendar, placed in the quietest month, and never in a registration or finals freeze.
- IT produces the packet; the business owner answers it. IT can see who has it and cannot see who still needs it (ACC-17 §3).
- The annual position — products, entitlements, deployed counts, costs, renewals due — goes to Tier 4 alongside the Microsoft position in M365-20 §7, as one software cost picture rather than two.
### 11.3  Separation

Microsoft licences come back by rule when somebody leaves (M365-20 §2). Non-Microsoft licences do not, because nothing automatic is watching them. That makes this the reclamation that is routinely missed, and the money is real.

1. The ACC-01 leaver checklist includes non-Microsoft named-user licences held by the leaver, taken from the register (§6) rather than from anybody’s memory.
2. Each is either reassigned — where the terms permit it (§6) — or released, and the register updated with the date. Not “to be tidied up later”.
3. Wiping and re-provisioning the device removes the installation (DEV-15 §4). It does not release the vendor-side seat. Those are two separate actions and both are needed; doing only the first is how entitled and deployed counts drift apart.
4. Where the leaver was the BUSINESS OWNER of a product in the register, that is a trigger in its own right: the product needs a new owner before the next renewal, or it is a candidate for retirement (the same pattern as a departing sponsor in ACC-10 §3).
5. Where the leaver held the only account with a vendor’s administrative portal, that is an ACC-08 problem as well and it is urgent — an application nobody can administer is discovered at the worst possible moment.
## 12.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| A catalogue application | Self-service. No ticket, no target, no IT involvement. |
| Incomplete request | Returned within 1 coverage day, naming what is missing (GOV-02 §5). Never queued silently. |
| “Do we already have it?” check (§2) | Answered within 1 coverage day. Most requests that close, close here. |
| Complete request, no cost, no institutional data | P3 — assessed and answered within 3 coverage days. |
| Request needing the standard security and privacy review (§5) | P4 — recommendation within 10 coverage days. The review is the work, not the delay. |
| Request needing Tier 4 cost approval | P4 — to the next Tier 4 decision slot, with the date told to the requester at acknowledgement. |
| “I cannot work because X is missing” | P2 at Tier 2 — the person is blocked. The assessment runs in parallel; a workaround is not deferred behind it. |
| Packaging a new catalogue application | P4, scheduled against protected capacity (GOV-06 §8). Packaging is the work that removes future tickets. |
| Lab or meeting room image change | Scheduled to the next quiet-period window (GOV-04 §7). Not accelerated mid-term. |
| Renewal notification to the business owner | 90 days before the renewal date. |
| Under a declared Constrained state | New packaging holds. Requests are still assessed and answered. |
| Under a declared Degraded state | P4 not accepted (GOV-06 §7). The requester is told to resubmit, with the date the state is expected to clear. |

## 13.  Records

| Record | Held in | Retention |
|---|---|---|
| Software request, with the §2 outcome and every approval | Ticket | 3 years |
| Security and privacy review, with accepted risks and the named accepter | IT governance record | Life of the software + 3 years |
| Licence register (§6) | IT register | Live, plus 7 years after retirement |
| Entitled-against-deployed reconciliation | IT register | 7 years — this is the audit defence |
| Packaging record: version, source, owner, update path | Tier 2 / Tier 3 record | Life of the package |
| Extension allow list, with requesters and review dates | IT register | Live |
| Annual review outcomes | With the ACC-17 packet | 3 years |
| Vendor contracts, licence terms, data-processing agreements | Finance / contract record | Per organization contract retention |
| Retirement and removal records | IT register | 3 years |

## 14.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Software Policy | the organization's software policy (existing) | The governing policy. This document operationalises it and is subordinate to it. |
| M365-20 | License Assignment, Reclamation & Cost Attribution | The Microsoft half. §4 and §7 there; §2 and §11 here. |
| M365-01 | Microsoft 365 Service Description & Supported Baseline | What the organization already provides — the §2 table. |
| M365-17 / M365-18 / M365-19 | Forms & Bookings / Copilot / Power Platform | The three most common §2 answers, and the build-versus-buy question. |
| DEV-12 | Local Administrator Rights on Endpoints | §10. The two documents answer each other and neither works alone. |
| DEV-01 | Device Enrollment & Lifecycle | §3 and §8 — the waves that carry the §9 cutover. |
| DEV-02 | Device Compliance & Configuration Baseline | A package that breaks a baseline condition is not deployable. §5 there is the sequence §8 here follows. |
| DEV-13 | Patch, Update & Maintenance Window Standard | Who updates the package after it is deployed, and what happens when it appears in a vulnerability notification. |
| DEV-14 | Endpoint Security Agent & MDR Escalation Standard | §5.1 — two protection products on one device is a fault. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | §11.3 — removing the install is not releasing the seat. |
| DEV-06 / DEV-18 | Labs & shared devices / Meeting room AV | Image changes, and the quiet-period window. |
| ACC-16 | Application Onboarding, SSO & SAML Claims | Anything that authenticates. Runs alongside this, not after it. |
| ACC-08 | Service, Application & Non-Human Account Standard | §8 there — OAuth consent and standing permissions. |
| ACC-17 | Periodic Access Review & Entitlement Recertification | §11.2 — one packet, two questions. |
| GOV-02 | Service Desk Intake & Ticket Quality | One front door; incomplete requests returned rather than queued. |
| GOV-04 | IT Change Management & Maintenance Windows | An estate-wide deployment is a change; image changes take a window. |
| GOV-01 | SOP Catalog Governance & Document Control | §9 — linking the governing policy from the page that holds it. |

## Appendix A — The software request form

Twelve fields. Every one is mandatory and every one is used by somebody. Fields nobody reads get dropped at the next review.

| Field | Required |
|---|---|
| Requester and department | Named person. A department is not a requester. |
| Product, edition, version | Exact. “Adobe” is not a product. |
| What it is for | One sentence, readable by a non-specialist. This is the field the approvers read. |
| Who will use it | How many, named or by role, and whether the number will grow. |
| Does it touch client, payroll or HR data? | Yes / No / Not sure. “Not sure” routes to §5 and is a perfectly good answer. |
| Where does the data go? | On the device, in the organization tenant, or to a vendor. If a vendor: which country, and do they use organization data to train anything? |
| Cost | One-off and recurring, per seat or per device, with the funding source and the budget holder named. |
| When is it needed, and what depends on it | A date and a reason. “As soon as possible” sets no priority. |
| Administrative rights | Needed to install? Needed to run? Two separate answers. |
| Does it sign in with an organization account? | If yes, this is also an ACC-16 intake and they run together. |
| Where does it go? | Individual devices, a departmental set, or a lab or meeting-room image. |
| Already installed anywhere? | Including trials. Asked without reproach — IT needs to know what is on the estate. |
| What was checked at §2, and why it does not fit | The one question that closes the most requests, honestly, in ten minutes. |

## Appendix B — The security review questions IT asks

Twelve questions, not sixty. A questionnaire nobody completes is not a control, and one completed dishonestly to get a piece of software is worse than none. The short form is questions 1, 2 and 9; the standard form is all twelve; the third depth adds ACC-16, ACC-08 and a contract review.

|  | The question | Why it is asked |
|---|---|---|
| 1 | Where does the software come from, and how will it be obtained? | Provenance is the largest single risk in free software (§7). The vendor’s own site or a recognised repository, verified where a signature or checksum exists. |
| 2 | What does it reach — the device only, the network, or the internet? | Determines whether this is a desktop decision or a network and data decision. |
| 3 | Does it hold, process or transmit client records, payroll or HR data? | Routes the request to Tier 4 whatever it costs, including free. The sensitive classes in M365-15 apply. |
| 4 | Where does the data physically live, and who else can see it? | A vendor cloud is a data transfer. Sub-processors and training use are both fair questions and are frequently answered in the terms. |
| 5 | How does a person sign in? | organization identity via ACC-16, or its own password store — which means another credential, no MFA, and no leaver process. |
| 6 | How is a leaver removed? | SCIM, an admin console, or nothing. Nothing means the ACC-17 §2 annual review is the only control that will ever reach it (ACC-16 §7). |
| 7 | Does it request tenant consent or OAuth permissions? | That is an application identity with standing permissions, not an install. ACC-08 §8. |
| 8 | Does it need administrative rights to install, or to run? | To run is a DEV-12 exception and a standing weakening of the endpoint (§10). |
| 9 | Who patches it, and how does an update reach the estate? | Vendor channel, a managed package, or an unmanaged auto-updater. DEV-13 §3 has to be able to answer this before deployment, not after. |
| 10 | Does it install a driver, a service, or its own real-time protection? | A second protection product on one device is a fault (DEV-14 §4). A kernel driver is a stability and support question as well as a security one. |
| 11 | Does it need an inbound firewall rule, an open port, or a vendor VPN? | A network change under GOV-04 and a remote-access decision under DEV-10, both of which can cost more than the software. |
| 12 | What happens if the organization stops using it? | Can the data be extracted, in what format, and by whom? Asked at the start, because it cannot be asked usefully at the end. |

Outcome: recommend, recommend with conditions, or decline with a reason. A residual risk that is accepted is accepted by a named person at Tier 4 in writing (§5). An assessment with no recorded outcome has not happened.
