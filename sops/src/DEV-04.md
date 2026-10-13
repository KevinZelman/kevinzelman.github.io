# DEV-04 · Standard Hardware Catalog, Request & Refresh Cycle

*What the organization buys, how you ask for it, how often it is replaced, and what it honestly costs in weeks.*

| Field | Value |
|---|---|
| Document ID | DEV-04 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 4 — IT Management owns the catalogue, approves every off-catalogue exception and owns the annual refresh position. Tier 2 confirms technical fit and builds the device. Tier 1 answers “what will I get and when”. |
| Review cycle | The document annually. The model annex in §3 twice a year, because vendor configurations change faster than SOPs do. |
| Relationship to M365-20 | A licence follows the person, not the device. Replacing somebody’s laptop changes nothing about their entitlement, and a lab or shared device is not a licence holder. Anybody reasoning about cost needs both documents. |

## 1.  Purpose

In many organizations, asking IT for a computer is a negotiation. The person asking does not know what they are entitled to, the budget holder does not know what it costs until IT prices it, and IT does not know what the answer was last time somebody in that role asked. Each request is therefore re-derived, and the answers differ.

This document publishes the answer in advance: a short list of standard configurations, a request path with three named approvals, a replacement cycle that can be budgeted, and an exception route for the genuine cases the list does not fit.

## 2.  Why a catalogue at all

The argument for standardisation is usually made in terms of purchasing leverage. That is the least of it. The real return is on the support side, and it is worth being specific about, because a catalogue restricts choice and the people whose choice it restricts are entitled to know what the organization gets in exchange.

| What standardisation buys |  |
|---|---|
| Fewer images to maintain | Every distinct model is a distinct set of drivers, firmware quirks and a distinct thing to test before a Windows feature update. Four models is a Tuesday. Twenty models is a permanent tax on a department that does not have the staff for it. |
| Drivers that are already known good | The commonest cause of a device that behaves oddly after enrollment is a driver or firmware level nobody has seen before. A catalogue means Tier 2 has seen this model before, on purpose. |
| Spare parts that fit | One charger type, one dock type, one keyboard. A spare that fits any machine in the building is available in minutes; a spare ordered for one machine is available in ten days. |
| A Tier 2 that has seen the fault before | This is the whole point. Diagnosis on a familiar model is a recognition problem; diagnosis on an unfamiliar one is a research problem. The same fault costs perhaps twenty minutes in the first case and half a day in the second. |
| A refresh forecast that can be believed | You cannot forecast the replacement cost of an estate you cannot describe. §8 depends entirely on §3 and on the inventory in DEV-01 §10. |
| A predictable answer for the person asking | The person asking benefits too, which is easy to forget. A published catalogue means nobody has to negotiate, nobody has to know who to ask, and nobody discovers afterwards that a colleague got something better. |

> **What standardisation does not buy, and should not claim to**
> It does not make every user happy. Somebody will always want the machine they have at home, and the honest answer is that the organization is optimising for the estate rather than for the individual preference. That is a defensible position but it is not a costless one.
> It does not remove the need for judgement. A catalogue with no exception path is a catalogue people route around — via a departmental purchase order, via a grant, via a vendor who will sell to a department directly. Then the organization owns an unmanaged device it did not choose and did not budget for. §6 exists precisely so that the exception is visible rather than clandestine.

## 3.  The standard catalogue

Six classes. The class is what this document fixes; the specific model in each class is named in a one-page annex maintained by Tier 2 and reviewed twice a year, because a model named inside an SOP is wrong within twelve months and then the SOP is wrong too.

| Class | Configuration (indicative) | Who it is for | Notes |
|---|---|---|---|
| S1 — Standard staff laptop | 14" business-class Windows laptop, mid-range CPU, 16 GB RAM, 512 GB SSD, 3-year next-business-day warranty. | The default for administrative and professional staff. Most of the estate should be this. | The reference build. If a request does not state a reason for something else, this is what it gets. |
| S2 — Power-user laptop | As S1, higher-resolution display, 32 GB RAM option, larger battery. | Staff who work across many systems at once or run heavier software, on a machine that spends its day moving between rooms and meetings. | The 32 GB option needs one line of justification, not a business case. |
| S3 — Travel / ultraportable | 13" ultraportable, under 1.2 kg, LTE option, 16 GB RAM. | Roles that genuinely travel — field and sales staff, recruiters, senior staff who present off site. | Not a status item. It is a lighter machine with a smaller screen, and people who work at a desk should be told that plainly. |
| S4 — Desktop | Small-form-factor Windows desktop, 16 GB RAM, 512 GB SSD. | Fixed-location roles where the machine never moves and a laptop is a worse tool: front-desk positions, some records and Finance posts, print-room and mail-room stations. | Cheaper, lasts longer (§7), and cannot be left on a train. Worth offering rather than assuming everybody wants a laptop. |
| S5 — Workstation | Tower or mobile workstation, 32–64 GB RAM, discrete GPU, larger fast storage. | The few roles with a real computational or media requirement: design, video, GIS, statistical work on large datasets. | Named roles only, on the strength of the work rather than the seniority. Reviewed at refresh — a workstation for a role that has changed is a workstation in the wrong place. |
| S6 — Mac | 15" MacBook Air class as the standard Mac; 14" MacBook Pro class where the work needs it (design, media). | The macOS populations recognised in DEV-09 §2. | MUST be purchased through the Apple Business Manager-linked channel. A Mac bought retail cannot be Automated Device Enrollment-enrolled and starts life with a documented compliance gap (DEV-09 §3). This is a purchasing rule, not a preference. |

Lab, meeting room and presenter machines are not in this catalogue. They are specified in DEV-06, which has different requirements — shared use, no persistent user state, and a calendar-driven procurement cycle.

> **Open — owner: Head of IT, with the CFO**
> Two questions this document cannot answer on its own, and which change the shape of §7 and §8:
> 1.  Is device replacement funded centrally from an IT capital line, or charged to the department? Central funding makes the refresh cycle enforceable and the forecast meaningful. Departmental funding makes it advisory, and the organization should not pretend otherwise in §7.
> 2.  Does the organization lease or buy? A lease imposes the refresh cycle automatically and smooths the cost; purchase keeps flexibility and defers cost into an unbudgeted future. Both are legitimate; the risk is drifting into one by default.
> ACTION: a position on both before this document goes past draft. IT recommends central funding with a staged purchase cycle (§7), which is the arrangement that makes the annual list in §8 a plan rather than a wish.

## 4.  Monitors, docks and peripherals

Standard bundles, so that a desk setup is a single line on a request rather than five conversations.

| Bundle | Contains | Who gets it |
|---|---|---|
| Desk bundle (standard) | One 24" monitor, one USB-C dock matched to the laptop class, keyboard, mouse. | Anybody issued an S1–S3 laptop who has an assigned desk. |
| Desk bundle (dual) | Two 24" monitors or one 27", dock, keyboard, mouse. | Roles that work across two systems at once as a matter of routine — records, Finance, front-office processing, service desk. Manager states the role, not the preference. |
| Meeting kit | USB headset with microphone; webcam where the laptop camera is inadequate for the role. | Anybody who runs or joins Teams meetings regularly, which is now most people. |
| Presenter kit | USB-C to HDMI adapter, presentation remote. | staff and anybody who presents in rooms. Room-side AV is DEV-18, not this document. |

### 4.1  What the organization supplies, and what it does not

- Supplied: the device, one charger, the bundles above, and a replacement charger when one fails or is lost — a person without a charger cannot work, and making that a negotiation is a false economy.
- Supplied on request with a stated reason: a second charger for somebody who genuinely works in two locations; a laptop bag; a privacy filter for a screen visible to the public.
- Not supplied: personal printers (DEV-17 — the organization’s position is shared multifunction devices), consumer peripherals bought because they are preferred, phone chargers and cables, home furniture, or a second personal device.
- Not supplied by IT at all: ergonomic equipment and workplace adjustments. Where a person needs specific equipment for a health reason or a disability, that is an accommodation and it goes through HR — funded and decided there, with IT advising on technical fit. Routing it as an IT exception makes a person disclose a medical matter to the wrong department and gives them a worse answer.
- Home internet is not an IT-supplied service. Remote working access is DEV-10.
## 5.  Requesting a device

Three approvals, each answering a different question, and none of them able to answer the others.

|---|---|---|
| Budget holder — department head or cost-centre owner | Should the organization spend this money, from this budget, on this person? | Which model. That is not their call and should not be presented to them as one. |
| IT (Tier 2) | Does the requested class fit the work, will it be supportable, and is anything else needed to make it useful? | Whether the money should be spent. |
| Tier 4 — IT Management | Only where the request is off-catalogue (§6), or where the request is for a workstation class (S5). | Nothing on a standard in-catalogue request. Requiring management approval for an S1 laptop would be theatre. |

1. Requester or their manager raises a ticket stating: the person, their role, their start date if it is a new joiner, the catalogue class requested, and the bundle (§4). Not a model number, and not a link to a vendor page.
2. Budget holder confirms funding in writing on the ticket. An email approval attached to the ticket is fine; a verbal one is not, because in six months nobody will remember it and the department will dispute the charge.
3. Tier 2 confirms fit, and says so on the ticket in one line. Where a different class is the better answer, Tier 2 proposes it with the reason — an S4 desktop for a fixed desk, an S1 rather than an S3 for somebody who does not actually travel.
4. Where it is off-catalogue, §6 runs here. Where it is an S5 workstation, Tier 4 approves on the strength of the work.
5. Order placed. The ticket records the order date and the expected delivery window from §10, and the requester is told that date rather than left to ask.
6. On arrival: asset-tagged, recorded in inventory against the person and the cost centre, and enrolled per DEV-01. A device that reaches a desk without an inventory record is a device that will be missing from the §8 forecast and from every audit thereafter.
7. Built to the DEV-02 baseline, encrypted with the recovery key escrowed and verified before handover (DEV-03 §5). Not after handover. This is the step whose omission produces escrow gaps.
8. Handed over with the standard software set (DEV-11), the person signed in, OneDrive known-folder redirection working (M365-12), and five minutes spent showing them where their files are. The five minutes prevents a ticket.
9. The device being replaced is collected at handover, not left on the desk (§9). A device that stays on the desk is a device that is still there in a year, unpatched and signed in.

> **New joiners are the case this most often fails**
> A device that arrives after somebody’s start date is the most visible failure in this whole document, and it is almost always caused by IT being told about the joiner in the same week they arrive.
> Where HR owns onboarding intake and routing, A hardware request needs to leave HR at the offer-accepted point, not the week-of-arrival point, because §10 is three weeks in the good case. ACC-01 §5 is the intake; this document is what it triggers.
> Where the lead time genuinely cannot be met, the answer is a loaner on day one with the real device to follow (DEV-05) — not an expedited purchase at a worse price, and not a first week with no computer.

## 6.  Off-catalogue requests — the exception process

Off-catalogue requests are allowed. A catalogue with no exception path gets ignored, and an ignored catalogue is worse than no catalogue at all, because it produces the same variety of devices while also producing resentment.

What the exception process requires is that the request is justified, approved and recorded — so that the organization knows what it owns, Tier 2 knows what it is supporting, and the annual count in §8 shows whether the catalogue itself needs changing.

1. The requester states the requirement, not the product. “I need to run Adobe Premiere on 4K footage” is a requirement. “I need a MacBook Pro” is a product, and it might not even be the right one.
2. Tier 2 states in writing what the catalogue cannot do about that requirement, and what the support consequence of the exception is — a non-standard image, a driver set nobody else runs, a warranty path that differs, or a device that will be slower to fix when it breaks.
3. Tier 4 approves or declines, in writing, with a reason either way. A declined exception gets a real explanation and an alternative; a declined exception with no explanation becomes a departmental purchase order the following month.
4. The approval is recorded in the exception register: person, device, requirement, approver, date, and the support consequence accepted.
5. The device is still enrolled, still meets the DEV-02 baseline, and is still refreshed on the §7 cycle. An exception is an exception to the model, never to management, encryption or compliance.
6. Exceptions are counted annually and reported with the §8 list. A rising count is evidence that the catalogue is wrong — three requests for the same thing means it belongs in §3, not in the register.

| Justification | Assessment |
|---|---|
| Software with a documented requirement the standard class cannot meet | Good. Name the software and the requirement. Tier 2 confirms it against the actual specification rather than the vendor’s recommendation, which is usually generous. |
| A platform requirement — a design or media toolchain that runs properly only on macOS | Good, and it is DEV-09 §2 rather than an exception at all, provided it is bought through the ABM channel (§3). |
| An external constraint — a grant that specifies equipment, an instrument that requires a particular controller | Good. Record the constraint and the expiry, because grant-funded equipment often outlives the grant and then becomes the organization’s to support and replace. |
| An accommodation for a health reason or disability | Not an IT exception. HR route (§4.1). IT advises on technical fit and does not require the person to justify anything to IT. |
| “I prefer this brand” / “this is what I have at home” | Declined, courteously and with the §2 reasoning. This is the commonest request and it deserves a straight answer rather than a slow one. |
| Seniority | Declined. Seniority is not a technical requirement, and a catalogue that bends to it stops being a catalogue. Where a senior role genuinely travels constantly, that is S3 and it is already in §3. |
| Urgency — “I need something this week” | Not an exception; §10 is unchanged by urgency. The answer is a loaner (DEV-05). |

## 7.  The refresh cycle

| Class | Refresh at | Reasoning |
|---|---|---|
| S1, S2, S3 laptops | Four years | The warranty is three years. The fourth year is the organization taking a managed risk on a machine it can still replace under §8. Beyond four years, battery, hinge and thermal failures cluster, and the support cost curve turns upward sharply. |
| S4 desktops | Five years | No battery, no hinges, no drops, and a fixed thermal environment. Five years is a genuine saving rather than a deferral. |
| S5 workstations | Four years, or on a stated need | Driven by the work rather than the calendar. Reviewed annually with the role. |
| S6 Macs | Four years | Aligned to the laptop cycle. Note the macOS-specific constraint: Apple’s OS support window is what actually ends the life of a Mac, and it does not fall on the organization’s calendar (DEV-09 §9). |
| Monitors, docks, peripherals | On failure | A monitor that works is a monitor. Replace docks when the laptop connector standard changes, which is the one case where a working accessory becomes useless. |

### 7.1  Staged, not synchronised

The cycle is staged so that the organization replaces a predictable slice of the estate each year. With a four-year laptop cycle, roughly a quarter of laptops fall due annually. That is the whole design intent, and it is worth stating why:

- A synchronised cycle produces a cliff — one year in four where the organization must fund and Tier 2 must deploy the entire laptop estate at once. Neither the budget nor a stretched IT team can absorb that.
- A staged cycle produces a repeatable annual number: a similar cost line, a similar volume of deployment work, and a similar amount of loaner and handover activity. Predictable is the point.
- If the estate is not staged today, the first refresh list will be lumpy. The correction is deliberate: where a cohort is oversized, split it across two years and refresh the worst-condition machines first, rather than replacing perfectly serviceable devices to make a spreadsheet tidy.
- Refresh is a date, not a fault. A device is replaced because its cohort came due, not because it broke. Waiting for failure means the replacement is always an emergency, always unbudgeted, and always resolved with a loaner from a pool that is already producing recurring faults.
- A device kept past its refresh date with the user’s agreement is fine, once, recorded, with a stated new date. Kept past it because nobody looked is how the organization acquires seven-year-old laptops that Tier 2 cannot get parts for.
## 8.  The annual refresh list, and how it becomes a budget

One list, once a year, produced by IT and handed to Finance before the budget is set rather than after.

1. Tier 3 extracts from inventory every device with its class, age, assigned person, cost centre and condition (DEV-01 §10).
2. Tier 2 marks the cohort due under §7, plus any device outside cohort that should be replaced early on condition, with a one-line reason.
3. The list is costed at current catalogue prices, by department and cost centre, with the off-catalogue exception count from §6 shown separately.
4. Tier 4 reviews and issues it to the CFO, ahead of the organization’s budget cycle. [ Confirm the fiscal-year dates and the date the ask must land — IT should be producing this list against Finance’s calendar, not its own. ]
5. Departments see their own lines and can challenge them before the budget is set, which is the point at which a challenge is useful.
6. Once funded, the list becomes the year’s deployment plan, scheduled by Tier 2 against the organization’s calendar — not during the first three weeks of a busy season, and not during the busy-season readiness period in DEV-06 §9.
7. At year end, actuals against list. A refresh plan with no look-back gets less credible every year it is presented.

> **This section depends on an inventory the organization does not fully have yet**
> Every number in the annual list comes from the device inventory. Today, with the ticketing system and Intune both holding partial truth and the estate being enrolled wave by wave, a device can be in one system and not the other — and a device in neither is invisible to this document entirely.
> So the first refresh list will be an estimate, and it should be labelled as one. The reconciliation in DEV-01 §10 and DEV-02 §8 is what turns it into a forecast, and it is a precondition for asking Finance to trust the number.
> Stating this openly is better than presenting a confident figure built on an incomplete inventory. The second is how a department loses credibility with a CFO once and does not get it back.

## 9.  The device being replaced

- It is collected at handover of the new one. Not later, not “when I’ve moved my files” — the files are in OneDrive and SharePoint, and if they are not, that is the conversation to have on the day (M365-12).
- It goes to DEV-15: wiped, its escrowed key handled, its inventory record closed or reassigned, and then reassigned, retired or disposed of. Nothing in this document lets a replaced device skip that.
- A device coming off a four-year laptop cycle is often a perfectly good three- or four-year-old machine. Where it still meets the DEV-02 baseline and has support life left, it can be reassigned to a lighter-use role, or into the loaner pool under DEV-05 — which is a better source of loaners than buying new ones, provided the pre-issue check in DEV-05 §3 is honoured.
- A device beyond its support life does not go into the loaner pool. Putting expired hardware in front of somebody whose own machine has just failed is how the loaner pool acquired the reputation it has.
- Donation, sale to staff, or transfer to a community partner all require the DEV-15 disposal path to have completed first, and a written record. A machine leaving the organization with an unwiped disk is a data breach with a friendly cover story.
- The licence is not attached to the device and does not travel with it. Reclamation, if any, follows the person under M365-20.
## 10.  Lead times, stated honestly

These are the numbers Tier 1 should quote. Quoting optimistic ones produces a second ticket asking where the device is.

| Class | Order to desk | What drives it |
|---|---|---|
| S1, S2, S4 — standard configurations | 2–3 weeks | Held or fast-moving vendor stock, plus organization receiving, asset tagging and build. The build and enrolment is 1–2 coverage days of that, and it is the part that competes with everything else Tier 2 is doing. |
| S3 — ultraportable | 3–4 weeks | Narrower stock. LTE options are slower. |
| S5 — workstation | 6–10 weeks | Built to order. GPU availability moves this figure around more than anything else in the table. |
| S6 — Mac | 3–5 weeks | Must route through the ABM-linked channel (§3), which is not the fastest channel and is not negotiable. |
| Off-catalogue (§6) | 4–8 weeks, plus the approval | Approval, sourcing, and a build nobody has done before. |
| Peripherals and bundles | 1–2 weeks | Usually stocked. Docks are the exception when a connector standard shifts. |
| Term-start surge | Order by 1 June for a September term | Everybody in higher education orders in August. Ordering in August means competing with them for the same stock, and the organization loses. |

- There is no same-week device. The organization does not hold a stock of ready-to-issue machines, and pretending otherwise sets an expectation that will be broken in front of a new employee.
- The answer to genuine urgency is a loaner on the day (DEV-05) and the real device on the real timeline. That answer is available immediately, which makes it a better answer than an expedited order that arrives in ten days at a worse price.
- Where a delivery date slips, the requester is told before they ask. Most of the frustration in this area is not the wait; it is the silence.
## 11.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Answering “what am I entitled to and what does it cost?” | Tier 1, in the conversation, from §3 and §10. |
| In-catalogue request with budget approval attached | P3 — ordered within 2 coverage days of the ticket being complete. |
| Incomplete request (no budget approval, no role stated) | Returned same coverage day with what is missing. Not held silently (GOV-02). |
| Tier 2 fit confirmation | P3 — 2 coverage days. |
| Off-catalogue exception decision by Tier 4 | P3 — 5 coverage days, with a written reason either way. |
| Build, enrolment and handover after delivery | 1–2 coverage days in Normal capacity; scheduled with the requester in Constrained. |
| Charger or dock failure | P3 — replaced from stock the same coverage day where held. |
| Annual refresh list to the CFO | Once a year, on Finance’s calendar (§8 step 4). |
| Model annex review | Twice a year, by Tier 2. |

## 12.  Records

| Record | Held in | Retention |
|---|---|---|
| Request, with budget approval and role stated | Ticket | 3 years |
| Order, cost, cost centre, delivery date | Ticket + Finance record | 7 years |
| Asset record: class, serial, asset tag, assignee, purchase date | Inventory | Life of the device + 3 years |
| Off-catalogue exceptions: requirement, approver, support consequence | Exception register | Life of the device + 3 years |
| Annual refresh list and the actuals against it | Tier 4 record | 7 years |
| Model annex versions | IT record | Superseded + 3 years |
| Replaced-device disposition | Per DEV-15 | Per DEV-15 |

## 13.  Related documents

| ID | Title | Relationship |
|---|---|---|
| DEV-01 | Device Enrollment & Lifecycle | §5 steps 6–8. Every device bought here is enrolled there, and §8 depends on its inventory. |
| DEV-02 | Device Compliance & Configuration Baseline | What the device must meet before handover — including for off-catalogue exceptions. |
| DEV-03 | Disk Encryption & BitLocker Recovery Key Handling | Escrow verified before handover, not after. |
| DEV-05 | Loaner Device Issue, Support & Return | The answer to urgency (§10), and where a serviceable replaced device may go (§9). |
| DEV-06 | Computer Lab, Meeting Room & Shared Device Standard | Lab and presenter machines are specified there, not here. |
| DEV-09 | macOS Device Management Standard | Class S6, and the purchasing rule in §3 that ADE depends on. |
| DEV-11 | Software Request, Approval, Licensing & Deployment | What is on the device when it is handed over, and where software-driven exceptions get tested. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | Where the replaced device goes (§9). |
| DEV-17 | Printer, Copier & Peripheral Standard | Printing is a shared service; §4.1 is why personal printers are not supplied. |
| DEV-18 | Conference & Meeting Room AV Standard | Room-side technology, as distinct from the presenter kit in §4. |
| M365-20 | Licence Assignment & Reclamation | The licence follows the person, not the device. |
| ACC-01 | Account Lifecycle | §5 — the joiner intake that should trigger a hardware request early enough to meet §10. |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies §11, including the capacity states. |

## Appendix A — Device request card

Attach to the ticket. A request missing rows 1–5 is returned rather than researched.

| Field | Entry |
|---|---|
| 1.  Person and role |  |
| 2.  New joiner? | YES / NO — if yes, start date (and note §10: three weeks minimum) |
| 3.  Catalogue class requested (§3) | S1 / S2 / S3 / S4 / S5 / S6 |
| 4.  Bundle (§4) | Standard desk / Dual desk / Meeting kit / Presenter kit / None |
| 5.  Budget holder approval | Name, date, attached to the ticket in writing |
| 6.  Replacing an existing device? | YES / NO — asset tag, and who collects it at handover (§9) |
| 7.  Off-catalogue? (§6) | If yes: the requirement, stated as a requirement and not a product |
| 8.  Software beyond the standard set | List it here so DEV-11 runs in parallel rather than afterwards |
| 9.  Anything IT should know | Free text — travel patterns, a shared desk, a specific room, an accessibility need being handled by HR |
| — IT use — | Fit confirmed by / date · Tier 4 approval if required · order date · expected delivery quoted to requester |

## Appendix B — “What will I get?”, for publication

Source text for the knowledge base. Format per GOV-05. Written for the person asking, because most of the friction here is not knowing.

|  |  |
|---|---|
| The standard machine | A 14-inch Windows laptop with 16 GB of memory and a fast SSD, a monitor, a dock, a keyboard and a mouse. It is a good machine, and it is what most people at the organization use. |
| If you present | You can have the higher-spec version, which has a better screen and a bigger battery. Ask for it — it does not need a business case. |
| If you travel a lot | There is a lighter 13-inch option. It is genuinely lighter and the screen is genuinely smaller, so it is worth thinking about which matters more to you. |
| If you never leave your desk | A desktop is often the better tool and it lasts a year longer. Worth considering rather than taking a laptop by default. |
| If you work in design or media | There is a workstation class, and there is a Mac. Tell us what you need to run and we will work out which. |
| How to ask | One ticket to the service desk address. Say who it is for, what they do, and get your budget holder to approve the cost in writing on the ticket. We will tell you within two working days whether the class you asked for is the right fit. |
| How long it takes | Two to three weeks for a standard machine, three to five for a Mac, six to ten for a workstation. There is no same-week option — we do not hold ready-built machines. If somebody needs a computer on Monday, ask for a loaner and we will sort that out today. |
| If you want something that is not on the list | You can ask, and the answer is sometimes yes. Tell us what you need to be able to do rather than which machine you want, because there is often a better answer than the one you had in mind. We will give you a written yes or no with a reason. |
| When it gets replaced | Laptops after four years, desktops after five. We will contact you — you do not need to wait for it to break, and please do not. |
| What happens to your old one | We take it when we hand you the new one, wipe it properly, and either reassign it or dispose of it securely. Your files live in OneDrive and SharePoint, so nothing of yours goes with it — and if you think something might, tell us on the day and we will check together. |
