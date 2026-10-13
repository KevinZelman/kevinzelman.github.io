# DEV-17 · Printer, Copier & Peripheral Standard

*The most frequent request the front door receives and the least severe. Written down once so it stops being answered forty times — and because a copier is a computer with a hard drive in it.*

| Field | Value |
|---|---|
| Document ID | DEV-17 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 1 — the published model names peripherals, printers and hardware as front-door work, and this document is written so that the front door can finish the job. Tier 2 owns queue and driver deployment; Tier 3 owns the print architecture decision in §4; Tier 4 owns the exceptions in §2 and the disposal approvals in §11. |
| Review cycle | Annually, and whenever the print architecture in §4 changes. |
| Why a P3 is worth writing at all | Because the queue is not sorted by severity, it is filled by frequency. A P3 that arrives forty times a quarter consumes more of the department’s total capacity than a P1 that arrives twice, and nobody notices, because each individual instance is trivially small. §1 does the arithmetic. The fix for this class of demand is documentation, not staffing (GOV-05, GOV-06). |
| Relationship to DEV-04 | DEV-04 decides what the organization buys and on what refresh cycle. This document says what the standard peripheral set is once it has been bought, and how it is supported. §2 is the shared boundary. |

## 1.  Purpose — the arithmetic of a P3

This is the least important document in the catalogue by severity and one of the more valuable by return, and it is worth being explicit about why, because the instinct in a department this stretched is to leave a P3 undocumented and deal with each one as it arrives.

> **Do the sum, because it is the whole premise of the document**
> A printer question takes a member of Tier 1 somewhere between ten and twenty minutes end to end — the contact, the walk, the driver, the ticket. Call it fifteen. Forty of those in a term is ten hours of front-door capacity, spent on a problem whose answer has not changed.
> A P1 that arrives twice a term and takes four hours each time is eight hours. It gets a document, a review, a named owner and a post-incident note, because it is frightening. The ten-hour item gets nothing, because each instance is fifteen minutes and fifteen minutes never looks like a problem worth writing about.
> That is the trap. The queue is not filled by severity, it is filled by frequency, and the department is severely understaffed with most staff wearing several hats. There is no version of this in which more capacity arrives. So the only available lever is that the fortieth person answers the question themselves, from a page, without a contact — which is GOV-05, and which needs a source document to derive from. This is that source document.

Two secondary reasons this document is not merely a convenience. First, secure release printing and scan-to-email are genuine data-handling controls that are usually treated as printer settings (§5, §6). Second, a multifunction copier holds a hard drive containing images of everything it has ever scanned, copied or printed, and it leaves the building at end of lease on a date set by a contract rather than by IT (§11). Both of those are in here because there is no other document they belong to.

## 2.  What the organization supplies as standard

Published so that the answer to “can I have one” is a lookup rather than a negotiation with whoever picks up the request. The catalogue and the refresh cycle are DEV-04; this is the supported set and who supplies it.

| Item | Standard | Supplied by | Notes |
|---|---|---|---|
| Docking station or hub | One per assigned desk for a laptop user. | IT, with the device | Matched to the laptop model. A hub bought separately is the commonest cause of a “monitor stopped working” report. |
| Monitors | Two, standard size, for a staff desk. One for a shared or hot desk. | IT, with the device | Cables supplied. A third monitor is a DEV-04 exception, not a request. |
| Keyboard and mouse | Wired, standard. | IT | Wireless on request where there is a reason. Batteries are departmental. |
| Headset | One per person whose role includes calls or Teams meetings. | IT | Wired USB is the supported default; it does not need pairing and it does not run out of charge mid-meeting. |
| Webcam | Where the device has no usable built-in camera. | IT | Room cameras are DEV-18, not this. |
| Cables and adapters | USB-C, HDMI, USB-A, DisplayPort, and the common adapters. | IT — swap stock | Held as consumable swap stock, not as tracked assets (§9). |
| Printing | Access to the shared multifunction device serving your area. | IT / copier vendor | Shared devices, not personal ones. See below. |
| Scanning | Via the same multifunction device. | IT / copier vendor | Scan to OneDrive is the supported default (§6). |
| Accessibility peripherals | Whatever the person needs. | IT, without a catalogue argument | Not a discretionary request and not subject to this table. §10. |

### 2.1  Not supplied as standard

- A personal desktop printer. Stated plainly with the reasons, because refusing without them reads as obstruction: consumables for a small printer cost several times per page what the fleet costs; it has no secure release, so §5 cannot apply to it; it produces no meter or audit record; and every model is a driver somebody has to maintain for one person. Where there is a genuine case — a device handling continuous sensitive output in a private office, a specialist media requirement — it is a DEV-04 exception with Tier 4 approval and the department carries the consumables.
- Consumer peripherals bought on a departmental card and then presented to IT for support. IT will help, and will not promise to. The honest position is that a supported peripheral is one IT has a spare of.
- Personally-owned peripherals, other than under §10. They may be used on an organization device where they work; IT does not troubleshoot them and will not install unsigned vendor software to make them work (DEV-12).
- Fax. If a business process still requires a fax, that is a process question for the department and Tier 4, not a peripheral request.
## 3.  Adding a printer on a managed device

On a managed device the printer should already be there. Printer assignment is a deployment, targeted at a group by location or department, and it arrives with the rest of the device configuration (DEV-01, DEV-02).

> **So the first diagnostic question is not “how do I add it”**
> If a managed device does not already have the printers for its area, that is a deployment gap and it belongs in a ticket against the assignment, not in a walk-through with the user. Adding it by hand fixes one person and leaves the next twelve to discover the same thing.
> Tier 1 adds the printer by hand to unblock the person in front of them, and then records that the assignment did not reach the device. Both halves. The second half is the one that stops the ticket recurring.

1. Confirm the device is enrolled and compliant. An unenrolled device is a DEV-01 matter and printing is a symptom, not the problem.
2. Confirm which printer they should have — by room or department, from the printer register. Guessing produces a queue that works today and points at the wrong floor after the next move.
3. Add it per Appendix B, which is written to be handed to the user.
4. Print a test page before leaving or ending the contact. A printer that was added but never printed is not a closed ticket.
5. Where secure release applies, have the person release the test job at the device with their badge or PIN, so that the first time they use it is not the day it matters (§5).
6. Record the deployment gap if there was one. Assignment groups are corrected in batches, and the batch is built from these records.
## 4.  Where print is going — servers, Universal Print, direct IP

Recorded here because it is the one part of printing that is genuinely in motion, and because it will surface as a wave of printer tickets during any move to Intune if nobody has planned it.

| Architecture | How it works | Assessment |
|---|---|---|
| Print server (the status quo) | Queues published from a Windows print server; clients connect over the domain by UNC path. | Works, understood, and depends on the client being domain-joined and on site or on VPN. That last dependency is the problem: as devices move to Entra-joined Intune management through the DEV-01 waves, the path that publishes those queues stops being available to them. This will present as “printing broke after my computer was upgraded”, in volume, at a predictable moment. |
| Universal Print | Cloud print service in Microsoft 365. Printers registered to the tenant, shared to groups, assigned through Intune. No print server, no queue path, no VPN dependency. | The natural destination for a tenant already committed to Intune and Entra. Needs a licence check (it is included in some Microsoft 365 plans and not others — confirm against your actual tenant entitlement before designing around it, M365-20), and needs either printer models that support it natively or a connector host for those that do not. Recommended direction. |
| Direct IP via Intune | The printer is deployed to the device as a direct TCP/IP queue with a driver, by Intune configuration or script. | The pragmatic interim, and honestly quite serviceable. No server, no cloud dependency, no licence question. The costs are that it needs the device to reach the printer’s address — so it is site-only unless routed — and that driver management moves onto Tier 2. Appropriate for the migration period and for printers Universal Print cannot reach. |
| Vendor cloud print | The copier vendor’s own print and release platform. | Frequently offered with a fleet contract and frequently the least bad answer for badge release across a mixed fleet. Assess it as a third-party service handling print job content — which is organization data leaving the tenant — under ACC-16 and the sensitive classes in M365-15, not as a printer feature. |

> **Open — decide where print is going**
> Many organizations have not decided which of these they are going to, and the decision is bound to the Intune migration rather than independent of it. Every wave that completes without an answer adds users whose printing works by an arrangement that is being retired.
> ACTION: Tier 3 to establish, before the next enrollment wave, (a) whether the tenant’s licences include Universal Print, (b) which of the current fleet supports it natively, and (c) what the interim is for the rest — direct IP by Intune configuration is the presumed answer. Record the outcome as an addition to this section and as a DEV-01 prerequisite.
> This is a half-day of investigation and it prevents a predictable, visible, self-inflicted wave of tickets. It is also the only genuinely urgent item in this document.

## 5.  Secure release printing, and the tray as a data leak

Secure release — badge or PIN at the device, job held until then — exists for one reason and it is worth stating without euphemism.

> **A printed page sitting in an output tray is an unclassified copy of organization data, unattended, in a corridor**
> Every control the organization operates around a document stops at the printer. There is no label on the paper, no access list, no audit trail, no encryption, no revocation, and no way to know who picked it up. The moment a job prints to an open tray, the organization has taken a controlled record and left it in a public space.
> This is not hypothetical or exotic. It is a payroll report, a disciplinary letter, a user’s accommodation paperwork, a list of names and dates of birth, a draft of something not yet announced. Every institution has found one of those in a tray.
> So: anything falling in the sensitive classes proposed in M365-15 is printed to a secure-release queue, or it is not printed. That is a rule about handling, not about printer configuration, and it belongs to the person pressing print as much as to IT.

| Rule |  |
|---|---|
| Secure release is the default queue | Where a device supports it, the released queue is the one deployed and the direct queue is not published. A default that requires a choice will not be chosen under time pressure. |
| Held jobs expire | Unreleased jobs are deleted after a set period — 24 hours is a reasonable default. A held job queue that never empties is a filing cabinet of documents nobody collected. |
| No shared release credentials | A badge or PIN is an identity (ACC-15). Releasing somebody else’s job for them, however helpfully, is the same act as reading their post. |
| Collect immediately | Published in the end-user guidance: press print, then walk. A job released and left in the tray has defeated the entire control. |
| Found paper has a route | Anything found in a tray that looks sensitive goes to the department that owns it or to the service desk, not into recycling and not read. This should be said out loud, because the instinctive reaction is embarrassment and silence. |
| Confidential waste | Every multifunction device has a confidential waste bin within sight of it, or the control has a hole in it at the disposal end. Facilities own the bins; IT should say when one is missing. |
| A device without secure release | Is a device that must not be used for sensitive output, and the people using it should be told that plainly rather than left to assume. |

Honest note on current state: secure release is not uniformly deployed across the organization’s fleet, and this document does not claim otherwise. Establishing which devices support it, which have it enabled, and which areas therefore have no compliant route for sensitive printing is a Tier 2 survey of about a day. Until that exists, §5 is a standard the organization is working toward and should be described that way in any end-user text.

## 6.  Scanning — to email, to OneDrive, and the relay trap

### 6.1  Scan to OneDrive or SharePoint is the supported default

- The scanned document lands inside the tenant, in a place that carries a classification by virtue of being that place (M365-15), under retention, in the boundary the organization actually governs (M365-12).
- It does not travel as an attachment, so it is not copied into three mailboxes and a phone on its way to being filed.
- It works from any device the person is signed into, which is the practical reason people will accept it.
- Scan to a departmental SharePoint site rather than a personal OneDrive for anything that is an organization record. A scanned invoice in somebody’s OneDrive is the same problem as a leaver’s OneDrive full of departmental files (M365-12), arriving by a different route.
### 6.2  Scan to email, and the trap

> **A copier configured to send through an unauthenticated relay is a mail security hole with a paper feeder**
> The convenient way to make scan-to-email work is to point the device at something that will accept mail from it without credentials. Every copier vendor knows how to do this and it takes four minutes.
> What the organization then has is a device on the network that will send mail appearing to come from the organization, to anybody, at the request of anybody who can walk up to it. It bypasses the external-mail banner, the phishing controls and any content inspection (M365-22). It is also, eventually, found — open relays are scanned for continuously, and the organization learns about it from a blocklist rather than from an audit.
> The rule: a multifunction device sends mail by authenticated submission, using a dedicated non-human account under ACC-08 with a named owner and a rotation schedule — never a person’s credentials, and never a shared password recorded in the device’s configuration page and nowhere else.
> And it sends to internal recipients only, unless a specific business need is approved by Tier 4 with a recorded reason. Scan-to-external from a walk-up device is an unmonitored data export channel with no sender identity behind it.

1. The sending account is created and owned under ACC-08. Its credential is held in custody, not in the technician’s notes.
2. The from-address is a device address that is obviously a device — a scanner address, not a person and not a department that receives mail. Replies to a scan should bounce somewhere harmless.
3. Recipients are restricted to internal addresses at the transport level, so the restriction survives somebody changing the device’s address book.
4. The device’s own address book is treated as a directory extract and is reviewed when the device is reconfigured or relocated. Leavers accumulate in it (ACC-01 §7.2).
5. Scan-to-self — the device mails the scan to the signed-in user and nobody else — is the safest form of scan-to-email and should be preferred where the platform supports it.
6. Never scan anything in the sensitive classes to a personal address. Say it in the end-user guidance, because it is the single most common informal workaround in any institution.
## 7.  Consumables and who orders toner

| Item | Who orders | How, and the thing that goes wrong |
|---|---|---|
| Toner, fleet multifunction devices | The copier vendor, automatically | Fleet contracts normally include auto-replenishment triggered by remote meter reads. The failure mode is a device that has lost network reachability and therefore stopped reporting — it will run dry silently. A device reporting no meter read for a fortnight is a fault, not a quiet month. |
| Toner, non-fleet printers | The department that owns the printer | IT does not hold a toner stock for non-standard devices and should say so before the printer is bought, not afterwards. This is one of the reasons §2.1 exists. |
| Paper | Facilities or the department, per local arrangement | Not an IT consumable. Worth stating, because “the printer is out of paper” arrives as an IT ticket several times a term. |
| Staples, waste toner bottles, maintenance kits | The copier vendor under the service contract | Part of the service call in §8, not a separate purchase. |
| Batteries for wireless peripherals | The department | Which is a small argument for the wired default in §2. |

- The trigger is the toner-low alert, not the toner-out event. A device that stops on the Friday of a deadline week stopped being fine on the Tuesday and nobody acted on the warning.
- Departments hold one spare cartridge for a device they depend on. That is cheaper than an expedited delivery and very much cheaper than a missed deadline.
- Nobody refills or remanufactures cartridges for fleet devices. It voids the service contract and the vendor will identify it during the next call, at which point the conversation is about the contract rather than about the printer.
## 8.  The copier fleet and vendor service calls

### 8.1  Logging the call

1. The fault is reported to the service desk, which logs it with the vendor. Departments calling the vendor directly produces a fleet whose fault history exists only in the vendor’s system, which is where the register in DEV-18 §11 and the refresh case in DEV-04 both come from.
2. The ticket records the device asset tag, location, error code and the vendor reference. The vendor reference is the field people forget and the one that makes the follow-up possible.
3. The requesting department is told when the technician is expected, so that somebody is there and the room is accessible.
### 8.2  A vendor technician on site is a physical access event

> **Say this plainly, because it is invisible in the way a remote access grant is not**
> A copier engineer arrives, unaccompanied, with tools and a bag, and works for an hour on a networked device that holds images of everything the department has scanned. Nobody logged in. No account was created. No ticket in the identity register records that an outside party had hands-on access to an organization system.
> The controls in ACC-11 — named individuals, notification of changes, purpose limitation, screening appropriate to the access held, and the right to audit — are written for accounts. They apply with at least equal force to a person physically in the building, and many organizations have no document that says so.
> ACTION: the physical escort and sign-in expectation for vendor technicians should be recorded either in ACC-11 §8 or in a Facilities procedure, and cross-referenced from here. Raised as a gap rather than legislated here, because it is not IT’s to own alone. Owner: a named IT lead, with Facilities and site security.

1. The technician signs in at the point the organization normally requires, and is met by a member of the department or of IT. “Met” is not “escorted at all times” for a copier in a corridor; it is “somebody knows they are here and who they are”.
2. Where the device sits in a restricted area — a payroll office, a records room, a server room — the technician is accompanied for the duration. Not as a comment on the technician.
3. Nothing leaves the building without the organization knowing what it is. A replaced part is a part; a replaced hard drive or storage board is a data event and §11 applies to it before it goes anywhere.
4. Remote fleet management access held by the vendor — the tool that reads meters and pushes firmware — is a vendor access grant under ACC-11 with a named owner, and it is in scope for the quarterly vendor access review, not exempt because it is “just the copiers”.
5. Firmware updates pushed by the vendor are changes to a networked device on the organization estate. They belong in the change record (GOV-04) even when the vendor treats them as routine, and they do not happen during a period when the device is needed.
## 9.  Peripheral faults and the swap-first principle

> **Swap first. Diagnose later, or never.**
> A technician spending twenty minutes establishing whether a USB-C cable has failed has spent more of the organization’s money than a box of USB-C cables costs. The diagnosis has no value: the outcome either way is a new cable.
> So for anything consumable and cheap — cables, adapters, keyboards, mice, headsets, docks — Tier 1 swaps it, restores the person to work, and moves on. The suspect item is tested in a quiet moment or binned. Not in front of the user, and not instead of the user working.
> This is not carelessness about cost. It is the recognition that in a department this size, the scarcest resource is a technician’s attention, and it should not be spent on a five-dollar question.

| Symptom | Swap this first | Escalate if |
|---|---|---|
| Monitor blank or flickering | The video cable, then the dock. | Both swapped and it persists — the port or the laptop is suspect (DEV-05 loaner, ticket to Tier 2). |
| Docking station drops devices | The dock, then its power supply. | A second dock behaves the same — likely a driver or firmware matter for Tier 2, and likely affecting more than one person. |
| Keyboard or mouse unresponsive | The unit. Do not open it. | A replacement also fails on that machine — the port or the hub is the fault. |
| Headset no audio, or mic not heard | The headset, then the port. | Two headsets fail — this is the OS audio device selection nine times in ten, and it is a two-minute check rather than an escalation (DEV-18 §6). |
| Webcam not detected | The cable, then the unit. | Also fails on another machine, or the machine sees no camera at all — Tier 2. |
| Printer not printing | Nothing. Go to Appendix A. | The ladder in Appendix A is exhausted. |

### 9.1  Where swap-first stops

- At anything with an asset tag and an inventory record. Laptops, monitors above the swap-stock tier, and multifunction devices are assets and follow DEV-15 for reassignment or retirement — not the swap pile.
- At anything under warranty where the vendor requires the failed unit returned. Binning it costs the organization the replacement.
- At anything that has failed twice in the same place. Two failed cables at one desk is not two cable faults; something at that desk is damaging them, or the port is. That is worth twenty minutes.
- At a pattern. Six of the same dock model failing in a month is a batch or a firmware matter for Tier 2, and the swap stock will run out before anybody notices if each one is handled in isolation.
Swap stock is a consumable budget line, held at the front door, replenished on a threshold rather than when it runs out. A swap-first principle with an empty swap box is a policy that produces an apology.

## 10.  Accessibility peripherals

> **These are never treated as a discretionary request**
> An accessibility peripheral is not a preference, an upgrade, or a nice-to-have that competes with other requests for the same budget. It is the equipment that makes it possible for a colleague or a user to do the work at all, and a delay in providing it is a period during which somebody cannot work.
> So: it does not go through the standard catalogue argument in §2. It is not weighed against a refresh cycle. It is fulfilled, and the funding is settled afterwards rather than before.

- IT does not assess need and does not ask for medical documentation. Where a formal determination is required, that is made by the organization’s accommodations function — Human Resources for employees, User Accessibility Services for users — and IT acts on their instruction. A technician should never be in the position of adjudicating a colleague’s health.
- Equally, a person should not have to explain a diagnosis to get a larger monitor or a vertical mouse. Where the request is for standard equipment the organization already stocks, it is simply provided.
- Specialist equipment — screen readers, magnification hardware, alternative input devices, braille displays, FM or loop systems, adjustable desks with a technology element — is specified with the person, not for them. They know what has worked before.
- A person’s own assistive device is supported on a best-effort basis and is explicitly exempt from the §2.1 rule about personally-owned peripherals. IT will do what it can to make it work on an organization device, will not obstruct its use, and will be honest about what it cannot promise. Where making it work requires software that DEV-12 or DEV-11 would otherwise refuse, that is an exception to be granted, not a wall.
- Assistive software follows the same principle under DEV-11, and a licence cost is not a reason for delay — it is a Tier 4 purchase, made quickly.
- Room-level provision — assistive listening in a large meeting room, captioning — is DEV-18 §2, and an R4 room without it is a gap to record rather than a preference to note.
- Nothing about a person’s accommodation is recorded in a ticket beyond what is needed to deliver it. No diagnosis, no correspondence from a clinician, no detail that would be unwelcome in a system several dozen people can read (GOV-02).
Service commitment: an accessibility peripheral request is handled at P2 regardless of the capacity state (GOV-06), and where the equipment must be ordered the person is told the date rather than left waiting. A holding arrangement — a loaner, a temporary alternative — is offered in the meantime (DEV-05).

## 11.  Disposal — a copier is a computer

> **The multifunction device in the corridor has a hard drive in it, and the drive holds images of what it has processed**
> Print jobs, scans, copies, faxes, held secure-release jobs, the address book, and in many models a spooled image of every document that has passed through it. Depending on configuration and model, that can be months of a department’s paperwork.
> It leaves the building at end of lease, on a date set by a contract, collected by a logistics firm, and it goes to a vendor’s refurbishment floor. Unless somebody acts, the drive goes with it. This is the single highest-consequence sentence in this document and it belongs to a P3 because nobody has ever raised a ticket about it.
> DEV-15 governs the handling. The organization’s existing Disposal of Sensitive Data Policy governs the obligation. Both apply to a copier exactly as they apply to a laptop, and the fact that it does not look like a computer is not a distinction the policy makes.

1. Every multifunction device on the estate is in the asset register with a note of whether it holds a drive and whether that drive is encrypted. Most modern fleet devices support both encryption and an overwrite-on-completion setting; both should be on, and it is worth finding out whether they are.
2. End-of-lease dates are held by IT and by whoever holds the contract, and they are diarised. A device leaving on a contractual date with no action taken is the failure mode, and it happens because the date lives in a finance system rather than in an IT calendar.
3. Before any device leaves — end of lease, replacement, or vendor exchange — the drive is sanitised to the DEV-15 standard, or removed and destroyed and the device leaves without it. Which of those is available depends on the lease terms, so it is a question to ask at contract signature, not at collection.
4. Obtain the certificate. A vendor assurance that “the drives are wiped” is not a record; a certificate naming the device, the serial, the method and the date is. It is retained per DEV-15.
5. Clear the address book, the stored credentials, the scan destinations and the sending account before release, and rotate the ACC-08 sending credential that device used (§6). A retired copier’s configuration page has held a working credential more than once, somewhere.
6. The same applies to a device being relocated between departments, which is the case everybody forgets. A copier moving from Finance to a shared corridor carries Finance’s held jobs and Finance’s address book with it. Treat a relocation as a reassignment under DEV-15.
7. Small peripherals with no storage — cables, keyboards, mice, monitors — are not a data risk and go to standard e-waste. Anything with storage in it, including some newer desk phones and conferencing devices, is not in that category.
## 12.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| “It will not print”, single user | P3 — same or next coverage day. Appendix A first; most of these should not become a ticket at all once it is published (GOV-05). |
| A printer or copier down, affecting an area | P2 — same coverage day, with the vendor call logged the same day where it is a fleet fault. |
| A copier down in a department with a hard external deadline | P2, and the honest answer is a named alternative device within the hour rather than a repair. |
| Peripheral swap from stock | Same coverage day. Walk-up where the front door is staffed. |
| Accessibility peripheral request | P2 in any capacity state. Where it must be ordered, a date is given and an interim arrangement offered. |
| New printer deployment or assignment change | P3 — 5 coverage days, batched. |
| Toner for a fleet device that has not auto-replenished | Same coverage day to log; delivery is the vendor’s SLA, not the organization’s. |
| Vendor service call, non-urgent | Logged same coverage day. Attendance per the fleet contract. |
| Copier disposal or relocation with a drive in it | Not an SLA matter. Planned work, scheduled ahead of the contractual date (§11). |
| Print architecture decision (§4) | Before the next DEV-01 enrollment wave. This is the only dated commitment in this document. |

## 13.  Records

| Record | Held in | Retention |
|---|---|---|
| Printer and multifunction device register: location, model, drive, encryption, secure release, lease end | IT asset register | Live, plus 3 years after disposal |
| Multifunction device sending accounts and their owners | IT register (ACC-08) | Life of the device + 1 year |
| Vendor service calls: device, fault, reference, attendance | Ticket | 3 years |
| Drive sanitisation or destruction certificates | IT asset record (DEV-15) | 7 years |
| Secure release survey outcome (§5) | Project record | Life of the fleet contract |
| Printer deployment gaps found by Tier 1 (§3) | Ticket, batched to Tier 2 | 1 year |
| Swap stock levels and replenishment | Front-door stock record | 1 year |
| Accessibility peripheral fulfilment — delivery only, no detail of need | Ticket | 3 years |
| DEV-04 exceptions for non-standard printers | Tier 4 record | 3 years |

## 14.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Disposal Policy | the organization Disposal of Sensitive Data Policy (existing) | The governing policy for §11. A copier is in scope and the policy does not need amending to make that true. |
| DEV-04 | Standard Hardware Catalog, Request & Refresh Cycle | §2 is the peripheral half of that catalogue; §2.1 exceptions run through it. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | §11. Applies to a copier exactly as to a laptop. |
| DEV-01 | Device Enrollment & Lifecycle | §3, and the migration exposure in §4. |
| DEV-02 | Device Compliance & Configuration Baseline | Printer assignment arrives with device configuration. |
| DEV-11 | Software Request, Approval, Licensing & Deployment | Drivers and assistive software (§10). |
| DEV-12 | Local Administrator Rights on Endpoints | Why users do not install their own drivers. |
| DEV-18 | Conference & Meeting Room AV Standard | Room peripherals and the audio device selection problem in §9. |
| ACC-08 | Service, Application & Non-Human Account Standard | The device sending account in §6. |
| ACC-11 | Vendor, Contractor & Consultant Account Standard | §8. Vendor remote fleet access, and the physical access gap raised there. |
| ACC-15 | Acceptable Use & Credential-Sharing Standard | A badge or release PIN is an identity (§5). |
| M365-12 | OneDrive Institutional Data Boundary | Where a scan should land (§6.1). |
| M365-15 | Data Classification & Handling | The sensitive classes in §5 and §6. |
| M365-22 | Phishing Reporting & Email Threat Response | What the relay in §6.2 bypasses. |
| GOV-04 | IT Change Management & Maintenance Windows | Vendor firmware pushes (§8). |
| GOV-05 | Knowledge Base Article Standard | Appendices A and B are written to be published under it, verbatim. |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies §12, and the capacity argument in §1. |

## Appendix A — “It will not print”: the Tier 1 troubleshooting ladder

Written to be published to end users exactly as it stands, and to be used by Tier 1 in the same order. The steps are ordered by how often they turn out to be the answer, not by how technical they are. Most printing problems are solved before step 5.

### Start here

1. Look at the printer itself. Nine times out of ten it is telling you what is wrong on its little screen — out of paper, a door open, a tray not pushed in, toner low, a paper jam. Fix what it says and try again. This is the first step because it is the answer more often than everything below it put together.
2. Check you are printing to the printer you are standing next to. It sounds obvious. It is the most common cause of a job that vanished — it printed perfectly, on another floor. Look at the printer name in the print window before you press print, and check the name on the sticker on the machine.
3. If this is a secure-release printer, your job is waiting for you. Nothing comes out until you tap your card or enter your PIN at the machine. If you have never done this before, come to the service desk and we will set you up in two minutes.
4. Open your print queue and see whether the job is sitting there. On Windows, click the printer icon near the clock, or open Settings and find your printer. If there is a stuck job at the top of the list, delete everything in the queue and print once — just once. Printing four more times while one is stuck is how six copies appear an hour later.
5. Turn the printer off, wait ten seconds, turn it back on. Give it a minute to come back. This resolves a genuine share of faults and costs you two minutes.
6. Restart your computer. We know. It genuinely fixes the print service when it has got itself into a state, and it is faster than waiting for us.
7. Find out whether it is just you. Ask the person next to you to print something. If nobody can print, it is the printer and we already want to know. If it is only you, it is your computer or your queue and the steps below are the ones that will help.
8. Try printing something else — one page from a different document, or a test page from the printer settings. If that works, the problem is the document you were trying to print, not the printer. Very large files, files with unusual fonts, and PDFs from outside the organization are the usual suspects. Save it as a PDF and print that.
9. Remove the printer and add it back. Appendix B has the steps. This clears out a corrupted queue and it works surprisingly often.
10. If it is a small printer on your own desk: check both ends of the cable and the power. Then swap the cable — come and get one from us, we keep a box of them and we would rather give you a cable than book an appointment.
### When to contact us, and what to tell us

Contact the service desk at the service desk address once you have been through the list, or straight away if the printer is showing a hardware error, if nobody in your area can print, or if you have a deadline today and no time for any of this. There is no prize for struggling.

Four things make it much faster for us to help, and they are all things you already know:

- The name on the sticker on the printer, or the room it is in.
- The exact wording of any message on the printer’s screen or on your computer. Not a summary — the words.
- Whether anyone else near you can print.
- Whether it worked yesterday, and whether anything changed — a new laptop, a document from somewhere else, a move to a different desk.
### Two things not worth your time

- Downloading a driver from the manufacturer’s website. It will not install on an organization laptop, and if it does it will usually make things worse. Ask us instead.
- Buying a printer. A desk printer costs several times as much per page as the shared one down the corridor, cannot hold a job securely, and will need consumables your department pays for. If the shared printer is genuinely in the wrong place, tell us that instead — that is a problem worth solving.
One last thing, and it matters more than it sounds: if you print something confidential, walk to the printer and collect it straight away. A page left in a tray has left the organization’s control entirely.

## Appendix B — Adding a printer, step by step

Written to be published. On an organization laptop your area’s printers should appear on their own; if they have not, this is how to add one, and please tell us it did not appear so that we can fix it for everybody else.

### On a Windows laptop

1. Find the printer’s name. It is on a sticker on the machine. If there is no sticker, tell the service desk — that is our fault and we will fix it.
2. Click the Start button and open Settings.
3. Choose Bluetooth & devices, then Printers & scanners.
4. Click Add device, and wait about thirty seconds. Nearby printers appear in the list.
5. When you see the one you want, click Add device next to it. Windows will fetch what it needs, which takes a minute or two.
6. If your printer does not appear in the list, click “The printer that I want isn’t listed” and stop there — the rest of that screen needs information you should not have to know. Send us the printer’s name and we will add it for you, usually the same day.
7. Print a test page. In the same Printers & scanners screen, click your new printer, then Printer properties, then Print Test Page. Do this now rather than at the moment you need it.
### On a Mac

1. Open System Settings from the Apple menu.
2. Choose Printers & Scanners.
3. Click Add Printer, Scanner or Fax.
4. Wait for the list to populate, choose your printer, and click Add.
5. Print a test page from any document.
### Making it the one you print to by default

Windows tries to be helpful by setting your default to whatever you used last, which is exactly wrong if you have just visited another building. In Printers & scanners, turn off “Let Windows manage my default printer”, then click the printer you want and choose Set as default. On a Mac, choose your printer in the Default printer list in Printers & Scanners.

### If you use secure release

Your job will not print until you are at the machine. Send it as normal, walk to the printer, tap your ID card on the reader or enter your PIN, and pick your job from the list. If your card is not recognised, come to the service desk — it takes a couple of minutes to register and it is worth doing before you need it.

### If you have moved desk or building

Tell us. Your old printers will still be in your list and your new ones may not be, and we would rather fix that in one go than have you add printers one at a time for a fortnight.
