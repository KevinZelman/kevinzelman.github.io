# DEV-06 · Computer Lab, Meeting Room & Shared Device Standard

*The target configuration for a machine that belongs to nobody and is used by everybody — and the readiness check that decides whether rooms work on day one.*

| Field | Value |
|---|---|
| Document ID | DEV-06 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 2 — Advanced Technical Services owns labs, imaging and meeting-room technology, and runs §9. Tier 3 owns the shared-device configuration in the management platform. Tier 4 approves the cutover in §5 and the rollback in §6. |
| Review cycle | Annually, and after every busy-season readiness cycle — the readiness check produces the defect list that revises this document. |
| Governing policy | Your organization's computer and shared-device use policy, if it has one. That policy governs user conduct on these machines. This document operationalises it — it does not restate it and must not contradict it. Where the two differ, the policy is right and this document is a defect to be reported under GOV-01. |

## 1.  Purpose — and the policy this operationalises

> **This is not a new lab policy.**
> Most organizations with shared machines already have a use policy for them. Where yours exists, it governs how people may use these machines, and it stands.
> What is usually missing is the technical half: what a shared machine is actually configured to do, who builds it, and how the organization knows a room is ready on the first day of a busy period. A pilot run without a written target configuration has nothing to be judged against.
> This document is that target configuration. Making sure the use policy is linked where people look for policies is a separate and much smaller job (GOV-01).

The audience is Tier 2 and the staff who depend on Tier 2. Section 9 is the part staff care about, and it is written as a runbook for that reason.

## 2.  What makes a shared device different

A staff laptop and a lab machine look like the same object and are governed by almost opposite assumptions. Every rule in §3 follows from one of these five differences.

| Difference | What follows from it |
|---|---|
| No persistent user state | The machine keeps nothing between sessions: no profile, no cached documents, no browser history, no saved credentials. This is a feature, not a limitation. A lab machine that remembers the last user is a lab machine that leaks one user’s work to the next. |
| No per-user data on the local disk | Anything saved to the desktop or to C: is lost at sign-out, and should be. Users save to OneDrive; work that belongs to a team or project lives in its site (M365-12). This has to be stated in the room, not discovered at the end of a session. |
| A queue of people waiting | Logon time is the specification that matters most and is measured least. Twenty-five people signing in at the start of a training session, each waiting ninety seconds for a profile to build, spends the first quarter of an hour of session time on authentication. Shared multi-user mode exists to fix exactly this. |
| The device is the unit, not the person | Compliance is assessed against the device (DEV-02 §4). Inventory records a room and a seat, not an assignee. A fault report names a machine — “ROOM-214-07” — which means the asset label must be legible from a seated position. |
| A booking calendar, not a working day | Maintenance, patching, reboots and software deployment happen when no session is in the room, and never during booked hours (DEV-13). A busy-season change window is narrower than any other window the organization operates. |

> **The thing users must be told, once, in the room**
> Anything you save on this computer is deleted when you sign out. Save your work in OneDrive — it is already signed in, and it will be there on any other organization machine and at home.
> This belongs on a card at the seat and in the sign-in screen text, not only in a policy document. The commonest and most upsetting shared-machine incident is somebody losing an afternoon’s work because nobody told them, and it is entirely preventable with one sentence in the right place.

## 3.  The target configuration

This is what a lab machine looks like when the migration in §5 is complete. Tier 3 owns these settings in the management platform; changes go through M365-21 and GOV-04.

| Element | Setting | Why |
|---|---|---|
| Management | Entra joined and Intune-enrolled, configured in Windows shared multi-user mode (shared PC configuration). Not co-managed via Configuration Manager once migrated. | One source of truth. A shared machine reporting to two management systems is the case where nobody can say what is actually applied (DEV-02 §8). |
| Sign-in | Organization credentials only. No local accounts for users, no Guest account, no cached credential reuse, no “stay signed in”. | Attribution. Every action on an organization machine must map to an identity, which is the assumption every other control rests on (ACC-15 §3). |
| Profiles | Temporary profile per session, deleted at sign-out. Account management enabled so profiles are removed on a threshold rather than accumulating. | Disk exhaustion on lab machines is almost always accumulated profiles. It presents as “the lab is slow” three weeks into a busy period. |
| Automatic sign-out | Idle sign-out after 15 minutes in an open-access lab; 30 minutes during a booked session; forced sign-out and reboot at building close. | Somebody who walks away from a signed-in session has left their mailbox open in a public room. The longer session value exists so a person is not signed out during an exercise. |
| Local storage | Known-folder redirection to OneDrive. Local disk cleared at sign-out and on reboot. No local “User Work” share. | §2. A local share becomes a permanent unmanaged data store within months, and then somebody’s work is in it. |
| Encryption | BitLocker enabled, recovery key escrowed to Entra and verified (DEV-03 §5). | Labs are the population most likely to be missed by an escrow sweep, because nobody signs into them interactively for weeks at a time — which is precisely how escrow gaps happen. A lab machine that needs reimaging and has no escrowed key is a machine that gets rebuilt from nothing, in week one, by hand. |
| Local administrator | No standing local admin. One unique per-device local break-glass administrator account, password escrowed and rotated automatically (DEV-12 §4). | A shared local admin password across a lab is one password away from every machine in the building. |
| Patching | Update rings scheduled for quiet-period and out-of-hours windows only. Deadline-driven with a forced restart outside booked hours (DEV-13). | A reboot at 10:40 in a booked session is a training incident. A machine three months behind on updates is a security incident. The window is the answer to both. |
| Endpoint security | Defender for Endpoint onboarded and reporting, per DEV-14. | Labs are the highest-exposure population in the estate: shared use, removable media, user-downloaded material. |
| Kiosk mode | Used for single-purpose stations only — lobby check-in terminals, print release stations, information and wayfinding screens. Assigned-access single-app configuration, no interactive sign-in. | Kiosk is the right answer for a station that does one thing and the wrong answer for a general-use lab machine. Keeping the distinction sharp prevents a lab being locked down into uselessness. |
| Peripherals and removable media | USB storage permitted and scanned. No user-installable printers or drivers (DEV-17). | Users genuinely use USB drives, and blocking them moves the problem rather than solving it. User-installed drivers are the commonest cause of a lab machine behaving differently from its neighbours. |
| Browser | No saved passwords, no persistent profile, no sync. Cleared at sign-out. | The other half of §2. A signed-in browser profile surviving a session is the same exposure as a surviving Windows profile. |
| Power | Never sleep during opening hours; wake for the maintenance window; shut down at building close. | A device that is never awake during the maintenance window never patches, and never reports — so it looks compliant by absence (DEV-02 condition 1). |
| Naming and labelling | Room-and-seat naming, matching a physical label legible from the seat. | §2. It is also what makes a fault report actionable instead of “a computer in the lab is broken”. |

Guests and visitors: there is no Guest account. A visiting specialist or an event delegate who needs a machine gets a sponsored identity under ACC-10, or supervised use of a staff-signed session where that is genuinely appropriate. Standing up a shared local account for a two-day event is how permanent unattributable accounts are created.

## 4.  Software baseline, and training-specific software

| Layer | Contents |
|---|---|
| Core (every shared machine) | Windows at the supported build, Microsoft 365 apps, Edge and one alternate browser, Adobe Acrobat Reader, Teams, Zoom where the organization licenses it, the print client (DEV-17), and assistive technology — screen reader, magnifier and read-aloud — enabled and tested rather than merely installed. |
| Function layer (per lab) | The software that defines what a lab is for: statistical packages, design and media suites, development toolchains, line-of-business applications. Recorded per lab, per quarter, in the lab register. |
| Session layer (per quarter) | Software requested by a staff member for a specific training programme in a specific quarter. Requested via §4.1, deployed to named labs, and removed when it is no longer required and its licence has lapsed. |

### 4.1  Requesting training software — and the deadline

> **The deadline is the whole mechanism**
> Recommended: training software requests close six weeks before the first day of the busy season. Count back six weeks from your own busy-season start. Confirm the exact dates against the organization’s calendar with the relevant department.
> A request arriving in the week before a busy season will not be in the lab in the week before a busy season, and saying so in advance is kinder than discovering it together on the first day of the busy season. Packaging, licensing and testing an unfamiliar application takes days of Tier 2 time that is already committed to the readiness runbook in §9.
> A deadline with no consequence is a suggestion. So: requests after the deadline are accepted, queued behind readiness work, and given an honest date — which will often be three weeks in.

1. Staff member raises the request via the department head, who confirms it is needed for a scheduled training session. This is the only approval, and it belongs to the department rather than to IT.
2. The request names the application, the version, the labs and seats needed, the training session, and — critically — the licence: who holds it, how many seats, whether it needs a licence server or a hardware key, and who pays (DEV-11).
3. Tier 2 confirms the licence exists before any packaging work starts. Packaging software the organization is not licensed to run wastes the work and creates an exposure.
4. Tier 2 packages it and deploys to one machine in the target configuration first. A silent installer that works on a technician’s laptop and fails under shared multi-user mode is the standard outcome, not the unusual one.
5. The requesting staff member tests it on that machine and confirms it works for the actual exercise — not that it launches. This step is skipped constantly and it is the one that catches the licence prompt, the missing sample dataset and the feature that needs local admin.
6. Deploy to the named labs. Record it in the lab register against the quarter.
7. At the end of the engagement, review: still required next quarter, licence still valid, still installed. Software nobody has asked about for a year comes off, with notice to the department.
No staff-installed software. There is no standing local admin on a shared machine (§3), which means the answer to “can I just install it myself” is no — and the reason is that an application installed on one machine in a lab of twenty-five produces a session where four people cannot do the exercise. DEV-11 is the route.

## 5.  Cutover — from the ticketing system and unmanaged to Intune-managed

Rather than write a procedure that is wrong now or wrong later, both states are stated. The current-state text governs a given lab until that lab has passed §6.

| Element | Current state — governs today | Target state — after per-lab cutover |
|---|---|---|
| Management | A mix: some machines the ticketing system-managed, some managed by Configuration Manager, some effectively unmanaged and maintained by hand. | Intune-enrolled, Entra joined, shared multi-user configuration (§3). |
| Build method | Imaging, per lab, by hand, with the image maintained locally. | Provisioning from the management platform against the §3 configuration, so a rebuild is a repeatable action rather than a craft skill. |
| Software delivery | the ticketing system packages, plus manual installs on individual machines. | Intune app deployment. Every the ticketing system package for a lab application must be re-packaged and re-tested — this is the largest single item of work in the cutover and it should be estimated honestly. |
| Sign-in | Mixed. Some labs use local or shared accounts. | Organization credentials only. No local user accounts (§3). |
| Patching | the ticketing system-driven where managed; ad hoc where not. | Update rings on the quiet-period and out-of-hours windows (DEV-13). |
| Encryption and escrow | Inconsistent, and labs are the least visible population in the escrow position. | BitLocker with a verified escrowed key on every machine (DEV-03). |
| Inventory | Partial and split across systems. The number of shared machines the organization operates is not currently a number anybody can state with confidence. | One inventory, per room and seat, reconciled (DEV-01 §10). |

> **Cutover trigger — per lab, never estate-wide**
> A lab moves to target state when all five are true, and not before:
> 1.  Every application in that lab’s function layer has been re-packaged, deployed and tested by somebody who trains with it (§4.1 step 5).
> 2.  Printing works from the target configuration in that room, tested with the actual queues, not assumed (DEV-17).
> 3.  One machine has run the full target configuration through a real session, and the staff member who ran it has said it worked.
> 4.  Escrow is verified for every machine in the lab, and the rebuild path has been tested once on a machine nobody needs.
> 5.  The rollback in §6 is available and has been tested — not merely written down.
> 
> And one rule that overrides all of them: no lab cuts over during a busy period. The windows are your published quiet periods. The pilot is the vehicle for proving the configuration; it is not a licence to migrate a room mid-season because the pilot went well.

Enforcing a control against a population that cannot yet satisfy it has a classic cost: a rushed phishing-resistant MFA rollout that leaves people stuck in an MFA setup loop (ACC-03 §11). The lab equivalent is a room of twenty-five people who cannot sign in, in front of the trainer, in week one. The order in §6 is what prevents it.

## 6.  Per-lab migration, and the rollback

1. Survey the lab: machine count, models, ages, current management state, the full application list, the peripherals, the print queues, and who presents in it. Write it down — this becomes the lab register entry.
2. Identify everything that will not survive the move: the ticketing system-packaged applications, licence servers and hardware keys, room-control or screen-sharing software, locally-installed drivers, anything reading an old mapped network drive (M365-13), and any local account somebody depends on.
3. Re-package and test the application set on one machine in the target configuration. Expect this to be the bulk of the elapsed time.
4. Confirm hardware fitness. A machine that will not run the target configuration acceptably is a DEV-04 §8 refresh line, not a migration problem to be solved with effort.
5. Migrate one machine. Leave it for a week of real use, in the room, with a notice on it inviting people to report anything odd.
6. Migrate the remainder of the lab in one window, leaving one machine on the current-state build until exit is confirmed. That machine is the rollback (below) and the comparison.
7. Run the §9 readiness check against the whole lab.
8. Staff who present in the room confirm it works. Tier 4 records the lab as cut over, and the lab register entry is updated with the date.
9. Retire the ticketing system management of those machines deliberately — an object left in the ticketing system after the machine is Intune-managed is exactly the two-sources-of-truth problem in DEV-02 §8.
### 6.1  Rollback

- Rollback means restoring the lab to its pre-migration management and build. It is a decision for Tier 3 with Tier 4 informed, and it is not a failure — it is the reason step 6 leaves one machine alone.
- Trigger: sessions cannot proceed and the cause cannot be fixed within one coverage day. The threshold is deliberately about the people in the room, not about tidiness.
- Precondition: the current-state image for that lab is retained and known to work for the whole quarter following the migration. Deleting the old image the week after a migration removes the rollback and nobody notices until it is needed.
- Window: rollback is available up to the start of the busy period. Mid-season, the answer is to fix forward or to relocate the session, because rebuilding a room during a busy week is worse than the fault it is trying to undo.
- Every rollback is written up: what failed, why it was not caught in step 5, and what changes in this document as a result. A rollback with no write-up is a rollback the next lab repeats.
## 7.  Presenter and meeting-room machines

A presenter machine is not a lab machine, and configuring it as one causes a specific, humiliating failure: a presenter signed out mid-presentation.

|  | Lab machine | Presenter machine |
|---|---|---|
| Who signs in | A user, for one session. | The presenter in the room, for the length of a session — and sometimes back-to-back sessions. |
| Idle sign-out | 15–30 minutes (§3). | Never during a scheduled session. Sign-out at the end of the booked block, or at building close. A presenter who steps to the whiteboard for twenty minutes must not return to a sign-in screen. |
| Local state | Discarded at sign-out. | Discarded at sign-out, with the same OneDrive rule — but the presenter needs to be able to open their material immediately, which makes OneDrive and the team site the only sane place for it to live. |
| Peripherals | Keyboard, mouse, headset. | The AV chain: projector or display, room audio, document camera, microphone, capture. All of it is DEV-18, and most presenter faults are AV faults rather than computer faults. |
| Patching and reboots | Quiet-period and out-of-hours windows. | The same window, and never in the ten minutes before a session. A pending-restart prompt at 9:25 is a P1 waiting to happen. |
| Failure impact | One person moves to the next seat. | A room of thirty watches. This is why presenter readiness is its own line in §9 and why the fault path in §10 is a meeting room emergency rather than a normal ticket. |
| Spare provision | One spare machine per lab (§10). | A tested loaner laptop with the right adapters, reachable in minutes (DEV-05). |

- Every presentation room has a card at the presenter: how to sign in, how to select the display source, and the one number to call. Photographed by staff constantly, which is the sign it is the right artefact.
- The presenter machine is signed in by the presenter, never left signed in under a shared or departmental identity. A permanently signed-in presenter account is an unattributable identity in a public room.
- Guest speakers and external presenters: a sponsored identity where there is time (ACC-10), otherwise the host presenter signs in and stays with the machine. Presenting from a personal laptop is legitimate and often the fastest answer — the room-side requirement is an adapter that works (DEV-18).
## 8.  Printing and peripherals

- Printing from shared machines goes through the organization print service and its release stations. The full standard is DEV-17; what belongs here is that printing is the single commonest cause of a lab being declared broken, and it is therefore an explicit line in the §9 check and in the §5 cutover trigger.
- Queues are deployed by policy, not installed by users. A user-installed printer on one machine in a lab produces the “it works on that one” report that consumes an afternoon.
- After a cutover, print queues must be tested from the target configuration in the actual room. Driver behaviour under a shared, non-administrative session is not the same as under a technician’s session, and this is where cutovers most often disappoint.
- Scanners, document cameras, headsets and specialist peripherals are recorded per lab in the register, with their driver requirement, because a peripheral needing a manually-installed driver is a migration blocker that only shows up if somebody wrote it down.

> **Open — owner: Finance, with the relevant department**
> Print quotas: whether one exists, what it is, and who resets it. Tier 1 is currently asked this and does not have a published answer, which turns a thirty-second question into a ticket.
> ACTION: a stated position, published in the same place as the shared-device use policy, and reflected in DEV-17.

## 9.  Start-of-season readiness — the runbook

This is the section that determines whether staff experience the organization’s IT as competent. It runs before every busy period, on a schedule, whether or not anything has changed — because the reason a lab fails in week one is almost never a change somebody made deliberately.

| When | What | Owner | Output |
|---|---|---|---|
| T–8 weeks | Confirm from the booking calendar which rooms and labs are in use, for what, and at what capacity. Ask the question rather than assuming last season repeats. | Tier 2, with the room bookers | Room and lab list for the season |
| T–6 weeks | Training software deadline closes (§4.1). Licence checks complete. | Tier 2, with department heads | Confirmed software list per lab |
| T–4 weeks | Packaging and deployment. Staff testing of anything new (§4.1 step 5). | Tier 2 | Tested packages, staff sign-off |
| T–3 weeks | Patch and reboot every shared machine. Verify check-in, compliance and escrow across the whole shared estate (DEV-02, DEV-03). | Tier 2 / Tier 3 | Three-number position: ready, faults, never checked in |
| T–2 weeks | Physical walk-through of every room: power on every machine, sign in, print, test the AV chain, test peripherals, check labels and cards. | Tier 2 | Per-room checklist (Appendix A) |
| T–1 week | Fix the defect list. Anything unfixable gets a stated workaround and the affected staff are told before the busy season, by name. | Tier 2, escalating to Tier 3 | Closed defects, communicated exceptions |
| T–2 days | Final sweep: reboot everything, confirm nothing is sitting on a pending-restart prompt, confirm no update deadline lands inside week one. | Tier 2 | Green list issued to the relevant department |
| Week 1 | Named person reachable for meeting room faults, with a spare machine and a loaner laptop staged (§10). | Tier 2 | Week-one fault log |
| End of week 2 | Review the week-one fault log against the T–2 week checklist. Every fault that the checklist should have caught becomes a new line in Appendix A. | Tier 2 / Tier 4 | Revised checklist |

> **Two rules that make the difference between a runbook and a ritual**
> Somebody physically sits at every machine and signs in as a user would. Remote checks confirm a machine is reporting; they do not confirm that the seat works. The faults that ruin week one — a dead keyboard, a monitor input on the wrong source, a print queue that prompts for credentials, a projector that no longer syncs — are all invisible to a management console.
> The week-one fault log feeds back into the checklist. A readiness check that never grows is a readiness check that keeps missing the same things. This is the mechanism by which this document actually improves.

## 10.  Faults, spares and the loaner path

| Situation | Priority and route | What is expected to happen |
|---|---|---|
| Presenter or meeting room machine fails during a scheduled session | P1 meeting room emergency to Tier 2, by phone rather than a ticket first. | Somebody comes to the room. Where the fix is not immediate, the staged loaner laptop and adapter go in and the session continues (DEV-05). The ticket is raised afterwards — the room first, the record second. |
| One lab machine faulty, session in progress | Not an emergency. The person moves to the spare seat. | Reported against the machine name, fixed in the next window, and the machine is labelled out of service so the next session does not rediscover it. |
| A lab-wide fault — nobody can sign in, print or reach a licence server | P1 to Tier 2, escalating to Tier 3 if authentication, network or a licence server is involved. | Treated as an outage, with the affected staff told directly rather than left to work it out from the room. |
| A machine repeatedly faulty | Tier 2 pulls it from service. | Three faults in a quarter is a hardware replacement line (DEV-04 §8), not a fourth repair. Recurring faults on the same units is exactly the pattern that damaged the loaner pool’s reputation. |
| Software missing or broken for an exercise | P2 to Tier 2 with the session and its date. | Honest answer within the coverage day: fixed before the session, or an alternative for it. Not silence. |

- Spares: recommend one spare machine per twenty seats in each lab, built to the same configuration and kept powered on so that it patches and reports. A spare in a cupboard is a machine three months behind on updates that will not sign in when it is finally needed.
- Loaners for presenters: at least one tested laptop with the standard adapter set, staged and checked weekly during busy periods (DEV-05 §3). A loaner that fails in front of a room is worse than no loaner.
- A faulty shared machine is retired through DEV-15 like any other device — escrowed key handled, disk wiped, inventory closed. Labs are where machines quietly disappear from the record.
## 11.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Meeting room or presenter failure during a scheduled session | P1 — attend the room within 15 minutes in Normal capacity; loaner in place within 30. |
| Lab-wide fault, no session in progress | P2 — 4 coverage hours. |
| Single lab machine faulty | P3 — next maintenance window, machine labelled out of service same day. |
| Training software request received by the §4.1 deadline | Deployed and staff-tested before the busy period starts. |
| Training software request received after the deadline | Accepted, queued behind readiness work, with an honest date given within 2 coverage days. |
| Start-of-season readiness runbook (§9) | Before every busy period, on the schedule. Not compressible — a shortened readiness cycle is paid for in week one. |
| Per-lab cutover (§6) | Scheduled in quiet periods only. Never during a busy period. |
| Rollback decision | Within one coverage day of the trigger (§6.1). |

## 12.  Records

| Record | Held in | Retention |
|---|---|---|
| Lab register: room, seats, machines, software, peripherals, print queues | IT register | Live, revised per quarter |
| Per-quarter software requests and staff test sign-off | Ticket | 3 years |
| Per-lab cutover record, with the trigger conditions evidenced | Ticket + Tier 4 record | 7 years |
| Rollback decisions and write-ups | Tier 4 record | 7 years |
| Start-of-season readiness checklists, completed | IT record | 3 years |
| Week-one fault logs and the checklist revisions they produced | IT record | 3 years |
| Escrow verification for shared machines | Per DEV-03 | Per DEV-03 |

## 13.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Use policy | Your organization's computer and shared-device use policy | The governing policy. This document operationalises it and is subordinate to it. |
| DEV-01 | Device Enrollment & Lifecycle | Shared devices are a device class in it; §5 depends on its inventory reconciliation. |
| DEV-02 | Device Compliance & Configuration Baseline | §4 records shared and training-room devices as “provisional pending DEV-06”. §3 here is what that becomes. |
| DEV-03 | Disk Encryption & BitLocker Recovery Key Handling | Labs are the population most easily missed by an escrow sweep. |
| DEV-04 | Standard Hardware Catalog, Request & Refresh Cycle | Shared machines are not in that catalogue; their replacement is still a refresh line in its §8. |
| DEV-05 | Loaner Device Issue, Support & Return | The staged presenter loaner, and the pre-issue check that makes it trustworthy. |
| DEV-11 | Software Request, Approval, Licensing & Deployment | The route for §4. No staff-installed software. |
| DEV-12 | Local Administrator Rights on Endpoints | §3 — no standing admin, and the per-device break-glass account. |
| DEV-13 | Patch, Update & Maintenance Window Standard | The busy-season window. Never during booked hours. |
| DEV-14 | Endpoint Security Agent & MDR Escalation Standard | Shared machines are the highest-exposure population. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | Where a retired lab machine goes. |
| DEV-17 | Printer, Copier & Peripheral Standard | Printing — §8, and the cutover trigger. |
| DEV-18 | Conference & Meeting Room AV Standard | The AV chain around a presenter machine (§7). |
| M365-12 | OneDrive Appropriate Use & Institutional Data Boundary | Where user work is saved, since the local disk keeps nothing. |
| M365-13 | File Share Retirement Runbook | Old mapped drives in lab builds are a migration blocker (§6 step 2). |
| GOV-04 | Change Management & Maintenance Windows | A lab cutover is a change with a room full of witnesses. |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies §11. |

## Appendix A — Start-of-season lab readiness checklist

One sheet per room, completed at the machine by a person sitting in the seat. Every fault found in week one that this sheet should have caught becomes a new line on it (§9).

| ✓ | Check | Evidence |
|---|---|---|
| ☐ | Room and seat labels present and legible from the seat | Walk-through |
| ☐ | Every machine powers on, and none is sitting on a pending-restart or update prompt | Sign-in at the seat |
| ☐ | Sign-in with a real organization test account completes in under 60 seconds | Timed, at the seat |
| ☐ | OneDrive known-folder redirection active; a test file saves and appears elsewhere | Test file |
| ☐ | Sign-out clears the profile; the next sign-in shows no trace of the previous session | Sign in twice |
| ☐ | Every application in the lab’s software list launches and opens a real file | Per-application tick |
| ☐ | Training software for this quarter present on every seat that needs it | Software list vs seat count |
| ☐ | Licence servers and hardware keys reachable, with no expiry inside the quarter | Launch test + licence date |
| ☐ | Print queues present, and a test page releases at the station without a credential prompt | Printed page |
| ☐ | Peripherals work: keyboard, mouse, headset, scanner, document camera as applicable | Per-device tick |
| ☐ | Assistive technology present and functional, not merely installed | Launch test |
| ☐ | Compliant in Intune, checked in within 14 days, no unresolved conditions (DEV-02) | Console |
| ☐ | BitLocker on, recovery key escrowed and verified for every machine (DEV-03 §5) | Console |
| ☐ | Defender onboarded, healthy and reporting (DEV-14) | Console |
| ☐ | No standing local admin; break-glass account password escrowed and rotated (DEV-12) | Console |
| ☐ | Update ring set to the busy-season window; no deadline falls inside the first two weeks (DEV-13) | Console |
| ☐ | No local user accounts, no Guest account, no saved browser credentials | At the machine |
| ☐ | Idle sign-out timing correct for the room type (§3, §7) | Console + observed |
| ☐ | Spare machine present, powered, patched and to the same build (§10) | At the machine |
| ☐ | Presenter rooms: AV chain tested end to end — display, audio, document camera, capture (DEV-18) | Observed |
| ☐ | Presenter rooms: sign-in card at the presenter, current, with the right number on it | Walk-through |
| ☐ | Save-your-work-to-OneDrive card at each seat or on the sign-in screen (§2) | Walk-through |
| ☐ | People presenting in this room told of any unresolved defect, by name, before the busy season | Email on the ticket |
| ☐ | Room signed off; defects with owners and dates recorded | Tier 2 signature |

## Appendix B — Training software request card

Raised by the staff member through the department head, six weeks before the busy period starts (§4.1). A request missing the licence rows cannot be started.

| Field | Entry |
|---|---|
| Training programme or session |  |
| Quarter, and first date it is needed in a session |  |
| Application, exact version |  |
| Labs and number of seats |  |
| Licence: who holds it, how many seats, expiry |  |
| Licence server or hardware key required? | YES / NO — if yes, details |
| Cost, and which budget pays |  |
| Does it need administrative rights to run? | YES / NO — if yes, say what it does, because this may not be deployable as requested |
| Sample data or configuration needed for the exercise |  |
| Staff member who will test it (§4.1 step 5) | Name — the test is on the target machine, doing the real exercise |
| Department head confirmation | Name, date |
| — IT use — | Licence verified · packaged · tested on target build · staff sign-off · labs deployed · register updated |
