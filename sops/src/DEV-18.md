# DEV-18 · Conference & Meeting Room AV Standard

*Room technology fails in front of an audience. The cost is not the repair — it is forty people watching. Written for the ninety seconds that actually matter, and for the person standing at the lectern.*

| Field | Value |
|---|---|
| Document ID | DEV-18 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 2 — meeting room and AV emergencies are Tier 2 work. Where a separate AV or room support desk exists, this document attaches to it rather than replacing it. Tier 1 takes the call and runs the ladder in §6. Tier 3 owns the Teams Rooms tenant configuration. Tier 4 owns room investment and the §11 replacement decisions. |
| Review cycle | Annually, and after each start-of-season readiness sweep (§10). |
| Relationship to DEV-06 | DEV-06 governs the shared computer in the room — its image, its accounts, its lock-down. This document governs the room: the display, the audio, the camera, the booking, and what the person at the lectern does when it fails. Read together. |
| Relationship to M365-09 | M365-09 owns the telephony service, the numbers and the voicemail. This document owns the physical device sitting in a room, and §9 exists because that boundary is where tickets fall through. |

## 1.  Purpose — the first ninety seconds

Almost every fault this document covers is small. A wrong input, a cable reseated, a muted output, a device unselected in a menu. Measured as engineering work, room AV is trivial, and that is exactly why it has never had a document.

> **The cost of an AV fault is not the repair. It is forty people watching somebody fail.**
> A projector that will not wake at 9:02 costs about four minutes of technician time. It also costs a presenter their composure in front of a room, a candidate their presentation to a hiring panel, a board meeting its first ten minutes, or a client visit its first impression of the organization. None of that appears in a ticket, and all of it is real.
> It follows that the response time that matters is not the one the service desk measures. It is the one measured in the first ninety seconds by the person standing at the lectern, alone, with a room looking at them. By the time a technician is walking, the damage the fault was going to do has mostly been done.
> So this document is written backwards from that moment. The most valuable thing in it is Appendix A, a card that lives in the room. §5 and §6 are the second and third most valuable. Everything else — tiers, accounts, registers, patching windows — exists so that Appendix A can be short and so that it works.

The second reason it exists is the ninety-day ticket. A request to re-register a Teams desk phone can sit open, past its SLA, for three months. Nothing in it is hard. It ages because room and endpoint telephony work sits in the gap between the telephony service and the device in the room, and a gap between two documents is where tickets go to become permanent (§9).

And the third: Tier 2 during booked hours is a small number of people who are already somewhere else. This document does not pretend otherwise. §7 states what the response actually is, and §5 and §6 are the honest consequence of that — the reliable defence against a public failure is a check twenty minutes earlier and a card at the lectern, not a faster dispatch.

## 2.  The room tiers, and what each is guaranteed to have

The tier is a property of the room, published alongside the room in whatever the booking system shows, so that the person booking it knows what they are getting before they arrive rather than at 9:01. A room whose tier is not published is treated as R1, and the person booking it should be told that.

| Tier | Room type | Guaranteed to have | Support expectation |
|---|---|---|---|
| R1 | Standard meeting room | A display or projector; a wall or lectern plate with HDMI and USB-C; audio to room speakers; a resident PC or a documented laptop connection; a whiteboard that works. | Appendix A in the room. Ladder in §6. Tier 2 dispatch best-effort (§7). |
| R2 | Training or conference room | Everything in R1, plus a conferencing camera and microphone, a wireless presentation path as a fallback, and a call path — a phone, a Teams device, or a room system. | As R1. Pre-event check (§5) recommended for anything external. |
| R3 | Microsoft Teams Room | Everything in R2, plus a certified Teams Rooms console and compute, a camera and microphone array matched to the room, single-touch join, a resource account and a room mailbox (§4). | As R2, plus §4 configuration standards and inclusion in the §10 sweep and §12 patch exclusions. |
| R4 | Large venue or event space | Everything above, plus a mixer, wired and radio microphones, a lectern with its own feed, assistive listening, a recording or streaming path, and a documented signal chain. | An R4 event is not supported without a named operator booked in advance. This is a rule, not a preference — see below. |

> **The R4 rule, stated so that it can be quoted back**
> A large-venue event with radio microphones, multiple sources and a live audience cannot be run from a card on a lectern. It needs somebody whose only job for that hour is the room.
> So an R4 booking requires a named operator, booked at the time the room is booked, and the department holding the event is told that at booking rather than discovering it on the day. Where no operator can be provided, that is said in advance and the event is planned around it.
> This is the honest version of the constraint. The dishonest version is to accept the booking, hope, and dispatch somebody who is already in another building when the microphone fails.

Where a room falls short of its published tier — a dead speaker, no USB-C, an assistive listening system that has not worked for two years — it is recorded in the fault register (§11) and the room’s published tier is corrected. A room advertised as something it is not generates a failure every time somebody trusts the advertisement.

## 3.  The connection path, and the choice at the plate

The single most common room failure, across every institution, is that the display is showing a different input from the one the cable is in. It is first in every ladder in this document for that reason.

| What you have | Use | Notes, honestly |
|---|---|---|
| An organization laptop with USB-C | The single USB-C cable at the plate. | Carries video, audio, the room camera and microphone, and power on one cable. This is the supported default and it is the one that works. Where a room has USB-C, use it. |
| An organization laptop, HDMI only | HDMI for video and audio, plus a separate USB-A lead for the room camera and microphone if you are in a meeting. | Two cables, and the second one is the one people forget — which is why the far end can see the slides and hear nothing. |
| A resident room PC | Sign in with your organization account and open your file from OneDrive or the Team. | The most reliable option in an R1 room, because nothing is being plugged in. The cost is a sign-in, so it is worth being signed in before the room fills (DEV-06). |
| A personal or guest laptop | HDMI at the plate. Wireless presentation as the fallback. | Supported for display. Not supported for the room camera and microphone chain, which needs a driver relationship the organization does not have with a guest machine. For a hybrid session, present from an organization device and let the guest share into the meeting instead. |
| Wireless presentation | Where the room has it, as a fallback or where a cable genuinely cannot reach. | A fallback and not a default, and it is worth saying why rather than being mysterious about it: it depends on the network, it adds a half-second of latency that makes video and live demonstrations unpleasant, and it does not carry the room camera. Perfectly good for slides. |
| A tablet or phone | An adapter to HDMI, if you have one. | It will display. Expect to be disappointed by the audio and do not plan a hybrid session around it. |

- Cables are captive at the plate, labelled, and long enough to reach a laptop on the lectern. A cable that must be unplugged from the wall to reach is a cable that will go missing.
- Every room has one spare of whatever its primary cable is, held locally, not at the front door in another building.
- Adapters are a peripheral swap item (DEV-17 §9), and a room that eats adapters is a fault to record rather than a habit to accommodate.
## 4.  Teams Rooms

### 4.1  The resource account and the licence

A Teams Room signs in as a resource account — an account that belongs to the room, not to a person and not to a department shared credential. That distinction carries most of the governance in this section.

- The account is a non-human account under ACC-08: named owner, purpose recorded, credential held in custody, rotated on a schedule, and never used interactively by a person.
- It is licensed, and the licence is a real annual cost per room — a Teams Rooms licence, in whichever tier the room’s capabilities require. It belongs in the annual licence position as its own line so the organization is making the decision knowingly (M365-20).
- Its password does not expire, because a room that signs itself out at 3am is an outage at 9am. That is a deliberate exception recorded against the account, not an oversight, and it is the reason the credential is held in custody and rotated deliberately (ACC-08).
- The credential is never written on the console, taped inside the cabinet, or left in the room’s documentation. This happens, and it is the same class of exposure as a password on a monitor (ACC-15).
- It is not exempt from Conditional Access; it is scoped within it. A room device has a predictable location, a predictable client and a predictable behaviour, which makes it one of the easier accounts to constrain properly rather than to exclude (ACC-03).
- Its sign-in activity is worth watching precisely because it should be boring. An interactive sign-in to a room account from somewhere unexpected is a clear signal, and nobody is currently looking (GOV-03).
### 4.2  A Teams Room is a managed endpoint, with no exemption

> **It runs an operating system, it is on the network, it holds an account, it has a camera and a microphone, and it sits unattended in a room where confidential conversations happen.**
> So it is enrolled, compliant and patched like any other endpoint. DEV-02 applies to it. DEV-13 applies to it, with the timing constraint in §12. It is in the asset register, it has an owner, and it is in scope for the DEV-01 enrollment waves.
> The alternative — and it is what happens by default, everywhere, because room devices are bought by a project and handed over without a lifecycle — is an unmanaged Windows machine with a camera and a microphone in the organization’s best meeting room, running whatever firmware it shipped with, signed in permanently as an account nobody owns.
> Stated that way it is obviously unacceptable. It is worth stating that way.

### 4.3  Room mailbox and booking behaviour

The room has a resource mailbox with a calendar, and its configuration decides whether booking the room works or quietly does not.

| Setting | Intent at the organization |
|---|---|
| Auto-accept | On for meeting rooms, so that booking is immediate and the calendar is trustworthy. Off, or delegated, for any room whose schedule is owned elsewhere — see the open question below. |
| Booking window and maximum duration | Set deliberately. An unlimited booking window produces a room reserved every Tuesday until 2031 by somebody who has left. |
| Recurring meetings | Permitted, with a maximum duration, and reviewed annually. Standing recurrences on shared rooms are the main reason a room appears fully booked and is empty. |
| Delegates | Named, for rooms that require approval. A delegate who does not know they are one is a booking request that never gets answered. |
| Room lists | Every bookable room belongs to a room list so that Room Finder works and people can find a room by building and capacity rather than by remembering its name (M365-04). |
| Capacity, features and floor | Populated on the mailbox — capacity, whether it has a display, whether it is accessible, its tier from §2. This is what makes a room findable rather than merely bookable. |
| Private meeting subjects | Room calendars are widely visible. Configure so that a room booking does not publish a meeting’s subject line across the organization; “Meeting” is sufficient information for a room. |

> **Open — decide who owns room bookings**
> Rooms are often booked in two places: a scheduling or facilities system, and the room mailbox in Exchange. Both can hold a booking, and if both do, they will disagree.
> Pick one source of truth per room. For rooms scheduled elsewhere, either the mailbox does not auto-accept, or the schedule is written into the mailbox as the source. Absent a decision, somebody books a room for a Wednesday afternoon, a scheduled session arrives to find it occupied, and IT is asked to arbitrate between two systems that were both told they were in charge.
> ACTION: whoever owns scheduling and the Head of IT decide which system holds the booking and how the other reflects it. IT will implement either answer. What it cannot do is reconcile them case by case.

### 4.4  The peripheral chain

“The Teams Room is broken” is almost always one link. The chain is short enough to walk in order, and walking it in order is faster than guessing.

| Link | Typical failure | First action |
|---|---|---|
| Console | Blank, unresponsive, or showing a sign-in screen. | Touch it and wait ten seconds. A sign-in screen means §4.1 — the account has signed out, and that is a Tier 2 fix, not a user one. |
| Compute unit | Powered but not driving the display. | Check the display input first (§3), then look for the unit’s power light in the cabinet. |
| Display | Black, or showing the wrong source. | Input selection. Every time. Then power. |
| Camera | Not detected, or the wrong camera selected in the meeting. | Check the USB run at both ends, then the device selection in the meeting controls. |
| Microphone array | Far end cannot hear, or hears the laptop instead. | Device selection, then mute state in three places: the array, the console, and the app. |
| Speakers | No audio, or audio from the laptop rather than the room. | Output device selection, then room volume, then the amplifier’s power — which is often in a cabinet and often switched off by a cleaner. |
| USB run and extenders | Intermittent camera or microphone; works cold, fails after an hour. | This is the failure that looks like software and is not. Long USB runs with active extenders fail with heat and with age. Record it in §11 — a room with an intermittent USB run will produce a ticket a month forever until the run is replaced. |
| Network | Join fails, or the room is offline in the admin portal. | Tier 2. A room device on a wireless connection is a room device that will fail during a meeting; room systems are wired. |

## 5.  The pre-event check — a runbook

For anything that matters: a big presentation, a board meeting, an external speaker, a candidate presentation, a client visit, a recorded session.

> **The guaranteed way not to fail in front of an audience is to have walked in twenty minutes earlier.**
> Twenty minutes, not five. Five minutes is enough to discover a problem and not enough to solve it, which is worse than not knowing — you now start the session rattled and behind.
> Nothing else in this document comes close to the value of this one habit. Every step below takes seconds; the whole check is under ten minutes in a room that is working.

1. Turn the display on and select the input. Confirm you can see your own desktop on the big screen. This is step one because it is the most common failure and because everything after it depends on it.
2. Connect with your own cable and your own laptop — the ones you will use. A room that works with the resident PC tells you nothing about whether it works with your machine.
3. Open the actual file from where it actually lives. Not a copy, not a similar deck. If it is going to fail to open, or fail to find its embedded video, you want that at 8:40.
4. Play something with sound and listen to it in the room. Audio is the check nobody does and the failure everybody remembers. Confirm you can hear it from the back, not just from the lectern.
5. If the session is hybrid or recorded, join the meeting from the room and confirm the room camera and the room microphone are the selected devices — not the laptop’s. This is the single most common hybrid failure: the far end sees a ceiling and hears a lectern.
6. Ring a colleague into the meeting for thirty seconds and ask them whether they can see and hear the room. Thirty seconds. It is the only test that tests the whole chain.
7. Have the material in two places: in OneDrive or the Team, and a copy on the local drive or a USB stick. The network is not a thing you get to blame at 9:02, and a local copy costs you nothing.
8. Find the card (Appendix A), note the room number and the number to call, and know where the light switches and the blinds are. Small things, and they are the ones that go wrong in a strange room.
9. For anything genuinely high-stakes, book Tier 2 attendance when you book the room, not on the day. A booked attendance is a planned half-hour; an emergency is a technician abandoning something else and arriving after it mattered (§7).
## 6.  The in-room recovery ladder

Written for a person standing at a lectern with a room waiting. Ordered by likelihood, and timed, because the scarce resource here is not skill — it is the number of seconds before the room decides the session has gone wrong.

1. The display input. Press the source or input button until you see your screen. Around half of all room faults are this, and it takes ten seconds. Do it before anything else, every single time.
2. The cable. Unplug both ends and plug them back in firmly. Then, if there is a spare in the room, use the spare. Twenty seconds.
3. Wake the room. Touch the console, move the resident PC’s mouse, press a key. A room that looks dead is usually asleep.
4. Audio: check three places, in this order — the volume in the application, the volume in the operating system, and the room’s own volume control. It is almost always one of the first two, and it is almost always muted rather than low.
5. In a meeting, check the device selection. Open the audio and video settings inside Teams or Zoom and confirm the room camera and room microphone are chosen. If the meeting was started on the laptop rather than in the room, this will be wrong by default.
6. Restart the console or the room system — but look at the clock first. It takes three to five minutes and it is worth it only if you have them. If you do not, go to step 7 now.
7. Fall back deliberately, and say so out loud. Present from the laptop screen, turn it toward the room, use the whiteboard, or carry on with the material and share the deck afterwards. Then call. This is a supported action and not a failure — it is the right decision, and it is in this document so that nobody feels they are improvising when they take it.

> **The three-minute rule**
> If it is not fixed in three minutes, stop and fall back. Three minutes of a presenter crouched behind a lectern with their back to the room does more damage than the fault did, and the fourth minute never works either.
> Call it in, run the session, and let somebody fix the room afterwards when there is nobody in it. That is a better outcome for the audience and a much better outcome for the room, because a fault diagnosed calmly gets fixed properly instead of patched under pressure.
> Nobody has ever been criticised for running a session without slides. Everybody remembers the fifteen minutes.

## 7.  Escalation, and what Tier 2 actually is during booked hours

| Situation | Route | What actually happens |
|---|---|---|
| A fault with people waiting | Phone the room support number. Not email. | Email is not a channel for something happening now — nobody is watching a mailbox with the urgency the moment requires. A published phone number that reaches a person is the only mechanism that works. |
| A fault found in the pre-event check | Service desk, flagged as pre-event with the start time. | This is the good case: there is time. A fault reported at 8:40 for a 9:00 start is frequently fixable; the same fault reported at 9:02 is not. |
| A room down with no session in it | Ticket, with the room number. | P3, scheduled. Fixed properly, in a room nobody is waiting for. |
| A Teams Room offline or signed out | Ticket to Tier 2, room number in the subject. | Usually §4.1 or §4.4. Not a user-fixable state, and telling a user to try again wastes their time. |
| An R4 event | The booked operator (§2). | If no operator was booked, the honest answer at that point is that the organization will do what it can and it may not be enough. Which is why §2 makes the operator a booking requirement. |
| A pattern across rooms | Tier 3. | Three rooms failing the same way in a day is infrastructure — a network segment, a certificate, a tenant change — not three room faults (M365-21). |

> **An honest statement of the response, because publishing a number the organization cannot hold is worse than publishing none**
> Tier 2 during booked hours is a very small number of people, and each of them is already somewhere. The realistic response to a meeting-room AV emergency is best-effort dispatch — often ten to twenty minutes, sometimes better, sometimes considerably worse if two rooms fail at once or if the person is across site. In the Constrained or Degraded capacity states defined in GOV-06 it will be longer, and there is no configuration of this department in which it is two minutes.
> That is not a target to be improved by writing a better number. It is a staffing fact, and the person at the lectern deserves to know it in advance rather than to discover it while waiting.
> Which is the entire reason §5 and §6 exist, and the reason the three-minute fallback is written as a supported action. The department’s realistic contribution to a room failing at 9:02 is a card on the lectern and a habit of arriving at 8:40 — and both of those are free.

One thing the organization should fix cheaply: a single published number for room and meeting room emergencies, printed on Appendix A in every room, answered by a person during booked hours. Most shops already have the people for this; what is usually missing is the number on the card in the room. That is an afternoon of work and it is the highest-value item in this document after Appendix A itself.

## 8.  Hybrid meetings and recording

- Consent and notification are governed by M365-08 and are not a room setting. The room’s job is to make the recording indicator visible and the notification honest; the decision about whether to record, and about a user who does not consent to appearing in one, belongs to the session owner and to organization policy.
- Tell the room it is being recorded, in words, at the start. The platform notification is necessary and is not sufficient — half the room is not looking at a screen.
- Where the recording lands is the thing that goes wrong later, and it is decided by how the meeting was created. A meeting recorded from a personal account puts months of sessions in one person’s OneDrive, where it is subject to everything in M365-12 and M365-16 — including the fact that it does not survive that person leaving in the way people assume it does.
- So: hold recurring recorded sessions as channel meetings in a team’s Team, so the recording lands in the Team’s site, follows the team rather than the person, and is reachable by a colleague covering for them (M365-07, M365-08).
- A room camera is pointed at people. It is on for a meeting and off otherwise, there is no standing feed from any room, and nobody views a room camera outside a session. If a room needs a camera cover, it gets one — the reassurance is worth more than the argument.
- Captions and transcripts are an accessibility provision, not a convenience, and where a session is recorded for later viewing a transcript should be part of it (DEV-17 §10).
- Recordings of board, personnel or disciplinary meetings are records with a retention obligation and frequently a sensitivity classification. They do not live in a room organiser’s personal storage (M365-15, M365-16).
## 9.  Room and endpoint telephony — the ninety-day ticket

> **The ninety-day ticket, because it is the clearest example of what an absent document costs**
> “Request for Help: Re-registering Teams Desk Phone”. SLA target passed. Still open, still in violation, three months later, and re-notifying hourly along with the rest of the P3 backlog.
> Ninety days. Re-registering a Teams desk phone is a twenty-minute job for somebody who has done it once. It did not age because it was hard, or because it was deprioritised in favour of something more important. It aged because it fell between the telephony service and the device in the room: no document said whose job it was, and no runbook said how, so it belonged to nobody and there was nothing to hand to whoever picked it up.
> That is what a missing P3 procedure costs — not a slow response, but no response at all, for three months, on something trivial. GOV-06 §9.3 names this kind of ticket as the test case for re-baselining the backlog: it is either accepted with a real date, redirected, or closed as will-not-do with the requester told. It is not left as it is.

The boundary, so this does not happen again: M365-09 owns the telephony service — numbers, calling policies, voicemail, call queues. This document owns the physical device in a room or on a desk: its account, its registration, its firmware, its faults. A telephony device request is a Tier 2 endpoint task under this document, and it is routed here.

### 9.1  Desk and room phone re-registration — the runbook that was missing

1. Establish what the device is signed in as. This is the diagnosis, and it is almost always the answer: a device signed in with a departing person’s account, with a shared credential, or with a personal account instead of the resource account it should hold.
2. Confirm the correct identity for the device. A common-area or room phone signs in as a resource account under ACC-08, licensed for it (M365-20). A personal desk phone signs in as its user. A device inheriting a leaver’s account is an ACC-01 §7.2 gap and should be recorded as one.
3. Sign the device out cleanly at the device where it is responsive, or remotely from the Teams admin centre where it is not.
4. Sign in by device code from the admin centre rather than by typing a password into a handset. It is faster, it does not expose the credential in a room, and it works with the modern authentication requirements the handset may not fully support.
5. Update firmware while you are there. A handset several versions behind is the cause of a class of registration faults that look like account faults, and it will otherwise be the next ticket.
6. Test: an inbound call, an outbound call, and voicemail. Three tests, two minutes, and they are what distinguish a closed ticket from a returning one.
7. Record the device, its account, its firmware and its location in the asset register. A telephony device that is not in the register is a device that will produce another ninety-day ticket, because nobody will know what it is meant to be.
8. Where the device cannot be recovered, say so and replace it. Three attempts across three weeks is worse for everyone than a replacement handset in week one.
## 10.  The start-of-season room readiness sweep

Rooms fail during quiet periods. Cables walk, projector lamps age, amplifiers get switched off, a room gets repainted and the plate gets moved, and firmware updates arrive in an empty building. The first week of a busy season is where all of that is discovered simultaneously, in front of users, and it is entirely preventable.

1. Two weeks before the start of a busy season, Tier 2 begins the sweep. Appendix B is the checklist, one per room, and it is completed in the room rather than from memory.
2. Sequence by risk, not by room number. Rooms booked in the first week first, then R3 and R4 rooms, then everything else. This is the step that makes a partial sweep useful.
3. Every check is a real check. Play audio, plug in a laptop, join a test meeting in an R3 room. A visual inspection confirms the equipment is present and confirms nothing about whether it works.
4. Faults found go into the register (§11) with the room number, and anything that cannot be fixed before the busy season goes to Tier 4 as a list with costs attached — not as an assurance that it is being looked at.
5. Publish which rooms were swept and when. This is the honest part: the department cannot sweep every room every quarter, so it publishes what it did. Someone presenting in an unswept room can then do the §5 check themselves, which they cannot do if they believe the room was checked.
6. Repeat, abbreviated, at the start of each busy season and before any period when the organization hosts external visitors.

> **Being honest about the capacity this needs**
> A genuine check of a single room takes fifteen to twenty-five minutes. A hundred rooms is three to four person-days, in the fortnight that is already the busiest of the year for onboarding preparation (GOV-06).
> So the plan is a prioritised partial sweep with a published list, not an unpublished intention to do all of them. A partial sweep everybody knows about is more useful than a complete sweep that was planned and did not happen — and it is the version that can be repeated next year.
> If the organization wants every room swept, that is a resourcing decision for Tier 4, and it is a small one: it is a week of a Front Door technician’s time with a checklist and somebody to escalate to.

## 11.  The fault register, and knowing which rooms fail repeatedly

One row per fault per room: date, room, tier, symptom, what was done, whether it recurred. It is a small table and it answers a question nothing else in the department can answer.

- Three faults in one room in one quarter is not three tickets. It is one asset at the end of its life, and the register is how that becomes a costed replacement request instead of a recurring irritation that everybody has privately stopped reporting.
- The unreported fault is the dangerous one. Staff stop reporting a room that has failed three times and start working around it — arriving early, bringing their own adapter, booking a different room. The register makes that invisible adaptation visible.
- It is also the evidence for the AV line in the capital plan. “The rooms are getting old” is not a case; “these eleven rooms produced sixty per cent of AV faults last year and here is the cost of each fault in staff time” is.
- The register is a slice of the ticket system, not a separate spreadsheet — which requires the ticket to carry the room number. Stated plainly: if the room is not a field, the register cannot exist, and the room number in the subject line is the cheapest possible version of that field (GOV-02).
- Review quarterly with Tier 4. Rooms in the top decile of fault count get a decision: repair, replace, or re-tier and stop advertising the room as something it is not (§2).
- Record the near misses too — a fault found in a pre-event check and fixed before the session. Those are the successes of §5 and they are the argument for keeping it.
## 12.  Patching windows — never during booked hours

> **A Teams Room that reboots for updates at 10am on a Tuesday is an outage in front of an audience, caused by the organization’s own maintenance.**
> It is also the most avoidable AV fault there is, and the most damaging to the department’s credibility, because it is not bad luck — it is a configuration nobody set.

- Room systems patch outside booked hours. The maintenance window for a room device is defined against the organization’s calendar, not against the calendar month, and quiet periods are the good windows (DEV-13, GOV-04).
- Room devices are excluded from any general reboot or update policy that targets endpoints broadly. An exclusion group for room systems exists in Intune and every room device is in it, checked at the §10 sweep.
- Update windows are configured on the device itself as well as in policy, so that a policy gap does not become a 10am reboot.
- Firmware and vendor updates to room hardware, including the AV vendor’s own updates, are changes to the estate and go in the change record (GOV-04) with a window. A vendor treating an update as routine does not make it invisible.
- Where a room genuinely must be patched during a busy period — a security update that cannot wait — the room is taken out of service for a named slot, the booking holder is told, and it is a change with an approval rather than a surprise.
- After any patch or firmware change to an R3 or R4 room, somebody joins a test meeting in it before the next session. A room that patched successfully and lost its camera is a successful patch and a broken room.
## 13.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| AV fault with a meeting or session in progress | P2 — best-effort dispatch, typically 10–20 minutes during coverage. Not a guarantee, and longer in Constrained or Degraded states. §7 states this honestly and §6 is the mitigation. |
| Fault found in a pre-event check, session within the hour | P2 — immediate best effort, and this is the case where the department can most often actually help. |
| Room down, no session scheduled | P3 — 3 coverage days, fixed properly. |
| Teams Room offline or signed out | P3 — next coverage day, and same day where the room is booked. |
| Booked Tier 2 attendance for a high-stakes event | Honoured as booked. Treated as a commitment, not as a courtesy. |
| R4 event without a booked operator | Best effort only, stated at booking (§2). |
| Telephony device registration (the ninety-day case) | P3 — 5 coverage days, with the §9.1 runbook. Not ninety days. |
| Start-of-season sweep | Prioritised partial sweep completed before day one, with the swept list published (§10). |
| Quarterly fault register review | On schedule, to Tier 4. |
| Room patching | Outside booked hours, always. No SLA — a scheduling constraint (§12). |

## 14.  Records

| Record | Held in | Retention |
|---|---|---|
| Room register: room, tier, equipment, connection path, published tier | IT asset register | Live |
| Teams Room resource accounts, owners and licences | IT register (ACC-08, M365-20) | Life of the room + 1 year |
| Fault register: date, room, symptom, action, recurrence | Ticket system, sliced by room | 3 years |
| Start-of-season sweep checklists and the published swept list | Project record | 2 years |
| Pre-event check requests and booked Tier 2 attendances | Ticket | 1 year |
| Room patch and firmware changes | Change record (GOV-04) | 3 years |
| Telephony device register: device, account, firmware, location | IT asset register | Life of the device + 1 year |
| Quarterly register review outcomes and re-tiering decisions | Tier 4 record | 3 years |

## 15.  Related documents

| ID | Title | Relationship |
|---|---|---|
| DEV-06 | Computer Lab, Meeting Room & Shared Device Standard | The shared computer in the room. This document is the room around it. |
| DEV-02 | Device Compliance & Configuration Baseline | §4.2. A Teams Room is compliant like anything else. |
| DEV-13 | Patch, Update & Maintenance Window Standard | §12. The timing constraint is the whole contribution. |
| DEV-01 | Device Enrollment & Lifecycle | Room devices are in the waves. |
| DEV-17 | Printer, Copier & Peripheral Standard | Cables, adapters and the audio device selection problem. |
| DEV-05 | Loaner Device Issue, Support & Return | Loaner faults are the same class of problem, seen on a laptop. |
| M365-09 | Teams Phone, Desk Phone & Voicemail | §9. The service; this document holds the device. |
| M365-08 | Teams Meetings, Recording & Guest Participation | §8. Consent and where recordings land. |
| M365-07 | Teams Provisioning, Naming & Lifecycle | Team-owned recordings, for §8. |
| M365-03 | Shared Mailbox Standard | Adjacent to §4.3 — a room mailbox is a resource mailbox, not a shared mailbox, and they are requested interchangeably. |
| M365-04 | Distribution List & Dynamic Group Standard | Room lists (§4.3). |
| M365-16 | Retention, Legal Hold & eDiscovery | Recordings as records (§8). |
| M365-20 | Licence Assignment & Reclamation | The per-room licence cost (§4.1). |
| M365-21 | Tenant Configuration Change Control | Tenant changes that break several rooms at once (§7). |
| ACC-08 | Service, Application & Non-Human Account Standard | The resource account (§4.1, §9.1). |
| ACC-03 | MFA Enrollment, Reset & Account Recovery | How a room account sits inside Conditional Access. |
| GOV-04 | IT Change Management & Maintenance Windows | Room and firmware changes (§12). |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies §13, and §9 is its named backlog test case. |
| GOV-05 | Knowledge Base Article Standard | Appendix A is published under it and belongs in the Tier 1 folder. |

## Appendix A — The presenter quick card

Print this on one side of a card, laminate it, and leave it on the lectern in every room. Fill in the room number and the number to call before laminating — a card that says “call the service desk” without a number is decoration.

### If the screen is blank

|  |  |
|---|---|
| 1. Press the INPUT or SOURCE button | Keep pressing until you see your own screen. This is the answer about half the time. Ten seconds. |
| 2. Reseat the cable | Unplug both ends, push them back in firmly. If there is a spare cable in the room, try it. |
| 3. Wake everything up | Touch the console. Move the mouse. Press a key. Rooms sleep. |
| 4. Check your laptop is sending | Windows key + P, then choose Duplicate. On a Mac, look in Displays. |

### If there is no sound

|  |  |
|---|---|
| Check three volumes, in this order | The one in the app or video player. The one on your computer. The one for the room. It is almost always muted rather than turned down. |
| Check the output device | On your computer, choose the room’s speakers or display rather than the laptop’s own. |

### If you are in a meeting and the far end cannot see or hear the room

|  |  |
|---|---|
| Choose the room’s camera and microphone | Open the audio and video settings inside Teams, and pick the room devices rather than your laptop’s. If you started the meeting on your laptop, this will be wrong until you change it. |
| Check the mute in all three places | The microphone itself, the room console, and the meeting. |

### The three-minute rule

If it is not working after three minutes, stop. Present from your laptop screen, use the board, or carry on and send the slides afterwards — and call us. Three minutes of crouching behind the lectern with your back to the room costs more than the fault does, and the fourth minute will not work either. Falling back is the right call, not a failure, and it is written down here so that you know we mean it.

### Calling us

|  |  |
|---|---|
| Room number | ____________________  (write it here — it is the first thing we will ask) |
| Meeting room support, now | ____________________  (phone, during booked hours. Please ring rather than email if people are waiting.) |
| Everything else | the service desk address |
| Tell us three things | The room. What is not working — screen, sound, camera, or the whole system. Whether anything is on the screen or the console, and what it says. |

And the one that prevents almost all of this: come in twenty minutes early for anything that matters, plug in your own laptop, and play something with sound. It takes five minutes when the room is empty and it is the difference between a good session and a memorable one.

## Appendix B — Room readiness checklist

One per room, completed in the room, at the §10 sweep and after any significant change. Every line is a real check — plug something in, play something, join something.

Room: ____________   Published tier (R1–R4): ______   Checked by: ____________   Date: ____________

| ✓ | Check | Evidence / note |
|---|---|---|
| ☐ | Display or projector powers on and reaches full brightness | Lamp hours or panel age if the room reports it |
| ☐ | Input selection works and every published input is live | Which inputs; note any dead one |
| ☐ | A laptop connects over the room’s primary cable and displays | Tested with which laptop and cable |
| ☐ | Secondary connection path works (HDMI where USB-C is primary, or vice versa) |  |
| ☐ | A spare of the primary cable is present in the room | If not, order — this is the cheapest fault to prevent |
| ☐ | Audio plays through the room speakers and is audible from the back row | Not from the lectern. Walk to the back. |
| ☐ | Resident PC signs in with an organization account and reaches OneDrive | DEV-06 image version |
| ☐ | Camera detected and image is correctly framed for the room | R2 and above |
| ☐ | Microphone tested by a live call to a colleague — they can hear the back of the room | R2 and above. This is the test that matters. |
| ☐ | Teams Room console responsive, signed in as the resource account, one-touch join works | R3. Note the account and the firmware version. |
| ☐ | Room device is enrolled, compliant and in the patch exclusion group | R3. DEV-02, §12. |
| ☐ | Room mailbox accepts a test booking and shows correct capacity and features | R3, and any bookable room. §4.3 |
| ☐ | Assistive listening system present and tested | R4 and any room advertising it |
| ☐ | Radio microphones charge, transmit and have batteries in stock | R4 |
| ☐ | Wireless presentation connects from an organization laptop | Where the room has it |
| ☐ | Presenter quick card (Appendix A) present, current, with the room number and phone number filled in | Replace if it names a number that no longer answers |
| ☐ | AV cabinet secure, amplifier powered, nothing unplugged or borrowed | The commonest quiet-period fault |
| ☐ | USB run and extenders stable after fifteen minutes of continuous use | R3. Intermittent runs pass a short test and fail a presentation. |
| ☐ | Room’s published tier still matches what the room actually has | Correct the published tier if not (§2) |
| ☐ | Outstanding faults from last quarter’s register are closed or carried with a date | §11 |

Faults found, with the room number, go into the register the same day. Anything that cannot be fixed before the busy season goes to Tier 4 as a costed list — not as an assurance.
