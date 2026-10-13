# DEV-01 · Device Enrollment & Lifecycle

*How an organization-owned endpoint is enrolled, made compliant, assigned, reassigned and retired — through a move to Intune and after it.*

| Field | Value |
|---|---|
| Document ID | DEV-01 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Primary audience | IT administrators and desktop support. Section 10 and Appendix C are used by the service desk. |
| Review cycle | Every six months while co-management is in place, then annually. |

## 1.  Purpose

This procedure defines how an organization-owned endpoint enters management, what “managed” means as a testable condition, and how the device is assigned, reassigned and retired. It is written to survive a move from a legacy endpoint tool to Intune rather than to be replaced by it.

It exists because enrollment often runs from per-wave instructions rather than a standing procedure. The usual signs:

- Intune enrollment runs as waves driven by individual emails, each with its own bespoke package of scripts, flyers and trackers. Each wave re-derives the steps, and nothing accumulates.
- Several transitions are in flight at once: a legacy endpoint tool to Intune, Configuration Manager co-management workload switching, a pilot on shared devices, and macOS enrollment.
- BitLocker key custody becomes inconsistent. A move between encryption tools only reaches machines that are online and healthy, so some devices show a recovery key in Entra and others show nothing at all.

> **Why the escrow gap is the sharpest risk here**
> A device with no escrowed recovery key is a device whose data is unrecoverable the first time it prompts for recovery, and which cannot be safely wiped and reissued. It also cannot be closed out on a leaver checklist (ACC-01 §7.2 step 8).
> This procedure therefore makes escrow verification a mandatory exit criterion in section 7, not a post-hoc report. A device is not enrolled until its key is confirmed present.

## 2.  Scope

### In scope

- All organization-owned Windows and macOS endpoints: staff laptops and desktops, lab and meeting room machines, loaners, kiosks and conference-room PCs.
- Enrollment, compliance attainment, encryption and key escrow, assignment, reassignment and retirement.
- The inventory record that ties a device to a person and an asset tag.
### Out of scope

- Personally-owned devices, governed by DEV-07. A personal device is never enrolled under this procedure.
- Mobile phones and tablets, governed by DEV-08 — including the phone carrying a person’s Authenticator method.
- Servers and infrastructure, including business systems maintained with a vendor under DEV-13.
- Network equipment, printers and peripherals (DEV-17), and meeting-room AV (DEV-18).
- Software selection and licensing, governed by DEV-11.
## 3.  Current state, target state and the cutover trigger

| Element | Current state — governs today | Target state — governs after cutover |
|---|---|---|
| Management authority | Co-management. Configuration Manager holds some workloads; Intune holds others. Which workload sits where must be recorded per workload, not assumed. | Intune is the single management authority for endpoints. Configuration Manager retired for endpoint workloads. |
| Inventory and ticketing | The ticketing system, or a legacy endpoint tool, holds the asset record. | Intune holds device state; the ticketing system holds the service record. The join key between them is the asset tag and must be maintained deliberately. |
| New device provisioning | Mixed: imaging and manual build alongside Autopilot. | Autopilot only. No manually-built endpoint enters service. |
| Encryption | Mixed estate. A previous encryption tool on some devices, BitLocker under Intune on others, and a residue with neither a healthy agent nor an escrowed key. | BitLocker via Intune on all Windows devices, recovery key escrowed in Entra ID, verified per §9. |
| macOS | Often still being tested. | Per DEV-09. Until that is adopted, macOS follows the interim path in §6.5. |
| Labs and shared devices | Often a pilot. | Per DEV-06. |

> **Cutover trigger — per workload, per device class**
> A workload moves from Configuration Manager to Intune when all of the following hold for the device class in question:
> 1.  A pilot group of at least 10 devices has carried the workload in Intune for 10 business days with no regression in the §7 exit criteria.
> 2.  Every device in the class that is expected to be online has checked in to Intune. Devices that have not checked in are listed and chased, not written off — a silent device is where the last escrow gap came from.
> 3.  Escrow verification per §9 returns a key for every encrypted device in the pilot group.
> 4.  The rollback path from Intune back to Configuration Manager for that workload has been written down and tested once.
> 
> Record the decision, the date and the evidence in the project record. Do not switch a workload tenant-wide on the strength of a pilot that only covered healthy, online machines.

## 4.  Device classes and target configuration

| Class | Join type | Primary user | Encryption | Notes |
|---|---|---|---|---|
| Staff / staff laptop | Entra joined | Named individual | BitLocker, key in Entra | Standard case. Windows Hello for Business eligible, which ACC-03 depends on. |
| Staff desktop | Entra joined | Named individual | BitLocker, key in Entra | As above. |
| Loaner | Entra joined | None — pool device | BitLocker, key in Entra | Must pass §7 before every issue, not only at first build. See DEV-05. |
| Computer lab | Entra joined | None — shared | BitLocker, key in Entra | Provisional pending DEV-06. Shared-use profile; no standing local admin. |
| Meeting room / lectern PC | Entra joined | None — shared | BitLocker, key in Entra | Availability matters more than flexibility. Locked configuration. |
| Conference room PC | Entra joined | None — shared | BitLocker, key in Entra | See DEV-18 for the AV chain around it. |
| Kiosk / single-purpose | Entra joined | None | BitLocker, key in Entra | Assigned-access configuration. |
| macOS staff device | Entra registered / Intune enrolled | Named individual | FileVault, key escrowed | Provisional per §6.5 pending DEV-09. |

Every class carries the same encryption and escrow requirement. There is no device class at the organization for which an unescrowed recovery key is acceptable.

## 5.  Roles and responsibilities

| Activity | Desktop support | IT admin (Intune) | Service desk | IT Security | Head of IT |
|---|---|---|---|---|---|
| Register a new device with Autopilot | R | A | I | — | — |
| Build and hand over a device | R / A | C | I | — | — |
| Verify the §7 exit criteria | R | A | I | I | — |
| Verify BitLocker escrow (§9) | R | A | C | C | I |
| Remediate a device with no escrowed key | R | A | I | C | I |
| Plan and run a wave (§8) | R | R / A | C | I | I |
| Approve a workload cutover (§3) | C | R | I | C | A |
| Retrieve a recovery key for a user | R | C | R | I | — |
| Authorise a remote wipe | C | R | I | A | I |
| Approve disposal and certify data destruction | R | C | I | C | A |

Recovery-key retrieval requires an Entra role carrying the bitlockerKeys/key/read permission — Cloud Device Administrator, Helpdesk Administrator, Intune Administrator or a purpose-built custom role. Every retrieval is audited under Key Management in the Entra audit log. Grant the narrowest role that works, and review holders quarterly under ACC-07.

## 6.  Enrollment paths

### 6.1  New device — Autopilot, user-driven  (default for staff)

1. Confirm the device is registered to the tenant as an Autopilot device before it reaches the person. Where the supplier can register at order time, use that; otherwise register the hardware hash on receipt.
2. Assign the device to the correct Autopilot deployment profile for its class per §4.
3. Record the asset tag, serial and class in the inventory before hand-over. A device that reaches a desk before it exists in inventory is how the estate stops being countable.
4. Hand the device to the person sealed or freshly reset. They power on, select language and keyboard, connect to network, and sign in with their the organization credential.
5. The Enrollment Status Page holds the desktop until device-phase and user-phase policies and applications have applied. Do not disable it to make hand-over feel faster; it is the only thing preventing a person from starting work on a half-configured machine.
6. Verify every §7 exit criterion, including escrow per §9, before the ticket closes.
### 6.2  New device — Autopilot, pre-provisioned  (bulk and time-critical hand-overs)

IT completes the device phase in advance, so the person only completes the user phase. Use for batch refreshes and for any hand-over where the person cannot spend the device-phase time waiting. Exit criteria are identical; only the sequence differs.

### 6.3  Existing device — co-management wave  (current state)

Existing domain-joined devices move by wave per section 8. Do not enroll ad hoc between waves except to remediate a fault, because an untracked enrollment is invisible to the wave record and becomes a silent device later.

### 6.4  Reimage

Reimaging through Autopilot is a normal, healthy outcome, not a failure. A reimaged device returns enrolled, encrypted and with its key escrowed automatically — which is frequently better than the state it was in. Before reimaging:

1. Confirm what data is resident locally and whether it is in OneDrive or a departmental SharePoint site. If institutional records are only on the local disk, move them first (M365-12).
2. Record the existing recovery key state. If no key is escrowed, treat the device under §9 before proceeding — a reimage destroys the last chance to recover the current volume.
3. Reimage, then run the full §7 exit criteria as though it were a new device.
### 6.5  macOS  (interim path)

Where macOS management is not yet mature and DEV-09 is not yet adopted, macOS devices follow this path and are individually recorded as interim:

1. Enroll in Intune and confirm the device appears with the expected user affinity.
2. Enable FileVault by policy and confirm the recovery key is escrowed. A macOS device with FileVault on and no escrowed key carries exactly the same risk as its Windows equivalent.
3. Apply the available baseline, and record explicitly which controls the Windows baseline has that macOS does not yet. That list is the specification for DEV-09.
### 6.6  Lab, meeting-room and shared devices  (interim path)

Shared-device pilots proceed under this section until DEV-06 is adopted. Shared devices have no primary user, so the person-to-device link in §10 is replaced by a room-and-position record. No standing local administrator rights (DEV-12).

## 7.  Definition of done — mandatory exit criteria

> **A device is “enrolled” only when every line below is true and recorded.**
> This is the single most important section of this document. “Enrolled” has been treated as “appears in the console”, and that is what allowed a population of devices to exist that are encrypted with no recoverable key. A checkbox that is verified rather than assumed is the whole difference.

| # | Criterion | How it is evidenced |
|---|---|---|
| 1 | Device appears in Intune and has checked in within the last 24 hours | Intune device record, last check-in timestamp |
| 2 | Device is Entra joined with the expected join type for its class | Entra device record |
| 3 | Correct deployment profile and configuration profiles have applied, with no conflicts | Intune profile assignment status; policy-conflict view checked and clear |
| 4 | Device reports compliant against the DEV-02 baseline | Intune compliance status |
| 5 | Disk is encrypted | Intune encryption report |
| 6 | Recovery key is present in Entra ID — confirmed by looking, not inferred | Key ID recorded on the ticket (§9) |
| 7 | Required applications for the class have installed | Intune app install status |
| 8 | Primary user is set correctly, or the device is correctly recorded as shared | Intune primary user field; §10 record |
| 9 | Asset tag, serial, class and location are in the inventory record | Inventory system |
| 10 | No standing local administrator account beyond the DEV-12 standard | Local group membership checked |
| 11 | For a loaner: the DEV-05 pre-issue functional check has passed | Loaner log — camera, audio, Teams, sign-in all tested |

Criterion 6 is the one that is easiest to skip and most expensive to have skipped. Criterion 11 exists because loaner pools produce repeated in-meeting failures — a non-working speaker, a machine that cannot open Settings, a camera that does not work — all of which a two-minute pre-issue check catches.

## 8.  Wave runbook for existing devices

This turns what a good enrollment wave does into a procedure, so that the next wave starts from it instead of from a fresh email.

### 8.1  Before the wave  (T-5 business days)

1. Define the wave by a stable attribute — location, department or device class — and produce the target list with a count. A wave of seventy machines across two locations is specific enough to review.
2. Check the target list against Intune for devices already enrolled, and against the inventory for devices that no longer exist. Both categories are common and both distort the completion figure.
3. Create or confirm the wave group and confirm profile and application assignments resolve to it.
4. Record the pre-wave escrow position for every device in the list: key present, or no key. This is the baseline the wave is measured against.
5. Prepare the technician sheet and the end-user notice. The end-user notice states what will change, what may need a restart, and who to contact — not a request for consent.
6. Confirm the rollback path for this wave and this workload, and that someone has actually performed it once.
### 8.2  During the wave

1. Work the list in a recorded order. Mark each device: enrolled, deferred, or failed — with a reason for anything not enrolled.
2. Do not mark a device complete on enrollment alone. Complete means the §7 criteria, including escrow.
3. Escalate a device that will not enroll after two attempts rather than repeating the attempt. Repeated identical attempts are how a wave loses a day.
### 8.3  After the wave  (T+2 business days)

1. Produce the completion figure as three numbers, never one: targeted, completed to §7, and outstanding with reasons.
2. List every device that did not check in. These are the silent devices, and they are the population that generated the current escrow gap. Chase them individually; do not let them age into the estate.
3. Re-run escrow verification across the whole wave and compare against the §8.1 baseline. Any device encrypted with no key goes to §9 immediately.
4. Record what went wrong and what would be done differently. That record is the input to the next wave, and it is what stops each wave being the first one.
## 9.  BitLocker key escrow verification and remediation

### 9.1  Why this section is separate

Silent BitLocker enablement backs the recovery key up to Entra ID automatically at the point encryption occurs — but only where the device is Entra joined, no policy conflict blocks the backup, and the backup actually succeeds before encryption starts. Where a migration between encryption tools reached only the machines that were online and healthy, the estate now contains devices in three different states and they are not distinguishable without looking.

| State | What it means | Action |
|---|---|---|
| Encrypted, key in Entra | Correct. Recoverable and safe to wipe. | None. Record the key ID against the device. |
| Encrypted, no key in Entra | The dangerous state. Data is unrecoverable at the next recovery prompt and the device cannot be safely reissued. | Remediate per §9.3. Treat as a priority, not a backlog item. |
| Not encrypted | Non-compliant, but not yet at risk of unrecoverable loss. | Apply the encryption policy, then verify escrow per §9.2. |

### 9.2  Verification

1. For a single device: open the device in Intune, and under Monitor select Recovery keys. Where no key exists, Intune states plainly that no BitLocker key was found for the device — that message is a finding, not a display problem.
2. For a population: use the Intune encryption report (Devices → Monitor → Encryption report) to list encryption state, then confirm key presence for every device the report shows as encrypted.
3. Record the key ID, not the key itself, against the device in the inventory. The key stays in Entra; the inventory records only that it is there.
4. Every retrieval of an actual recovery key is audited in Entra under Key Management, including the retriever and the key ID. Treat that audit trail as the reason to retrieve narrowly, not as a reason to avoid retrieving when a user needs it.
### 9.3  Remediation for an encrypted device with no escrowed key

1. Confirm the device is Entra joined. Automatic backup does not occur otherwise, and this is the most common single cause.
2. Check for policy conflicts between the encryption profile and any security baseline. A conflict can prevent the backup silently while encryption itself proceeds.
3. Trigger a key rotation from Intune, then re-verify per §9.2. A rotation generates a new recovery password and stores it in Entra, which resolves the majority of cases without touching the volume.
4. Where rotation does not produce a key, escalate. Do not wipe, reimage or reissue the device until a key exists or the volume has been deliberately decrypted with the data preserved.
5. Where a device cannot be brought into escrow and must be recovered, reimage via Autopilot after confirming resident data is safe. The device returns enrolled, encrypted and escrowed.
6. Record the remediation and the resulting key ID on the ticket.
Note for the future: Entra holds a maximum of 200 recovery keys per device. A device that has churned through rotations near that ceiling will fail silent encryption because the key backup fails first. Worth knowing before it is diagnosed the hard way.

## 10.  Assignment, primary user and the inventory record

The device-to-person link is what makes a leaver checklist closable, a recovery-key request answerable, and a refresh budget forecastable. It is administrative work with no visible reward until the moment it is missing.

| Field | Rule |
|---|---|
| Asset tag | The join key between the management system and the service record. Physically present on the device and recorded in both systems. |
| Serial number | Recorded at receipt, from the supplier record where possible rather than transcribed by hand. |
| Device class | Per §4. Drives every profile assignment, so an incorrect class is a silent misconfiguration. |
| Primary user | Set for individually-assigned devices. Cleared and replaced on reassignment, never simply left. Note that where an Autopilot device is reused by a new owner, the previous owner’s access to the recovery key does not automatically transfer — the new owner must ask an administrator. |
| Shared-device record | Room and position instead of a person, for every class in §4 with no primary user. |
| Location | Building and room. This is what makes a wave definable by location, per §8.1. |
| Status | In stock, issued, loaned, in repair, retired, disposed. One value at a time, changed at the moment the physical state changes. |

## 11.  Reassignment, retirement and disposal

DEV-15 holds the full procedure. This section states the three checks that must not be skipped, because they are the ones that fail quietly.

1. Before wipe: confirm the recovery key is escrowed (§9). A wipe of an unescrowed encrypted volume is unrecoverable, and this is also the check ACC-01 §7.2 step 8 depends on to close a leaver ticket.
2. Before reissue: confirm resident institutional data has been moved to OneDrive or a departmental SharePoint site, and confirm the previous primary user has been cleared and the new one set. A reissued device carrying the previous holder’s local data is a data incident waiting to be noticed.
3. Before disposal: certify data destruction, remove the device from Intune, Entra and Autopilot registration, release the licence entitlement (M365-20), and set the inventory status to disposed. A device left registered in Autopilot after disposal will attempt to reappear.
## 12.  Service levels

| Activity | Target |
|---|---|
| New device, Autopilot, from receipt to hand-over ready | 3 business days |
| New starter device, request received 5+ days before start date | Ready on the start date (ACC-01 §8) |
| Recovery-key retrieval for a verified user | 30 minutes |
| Encrypted device found with no escrowed key | Remediation started same business day |
| Loaner pre-issue functional check | Before every issue, no exceptions |
| Device reassignment, wipe and reissue | 2 business days |
| Wave completion report after wave close | 2 business days |

Proposals for ratification under GOV-06, not commitments currently in force.

## 13.  Records

| Record | Held in | Retention |
|---|---|---|
| Completed §7 exit criteria per device | Service desk ticket | Life of the asset + 1 year |
| Recovery key ID against the device | Inventory record | Life of the asset |
| Escrow remediation actions | Ticket + project record | 3 years |
| Wave plan, target list and three-number completion report | Project record | Life of the migration + 2 years |
| Silent-device list per wave, with chase outcome | Project record | Until every device is resolved |
| Workload cutover decisions and evidence | Project record | Life of the migration + 2 years |
| Loaner pre-issue check per issue | Loaner log | 1 year |
| Data destruction certificate | Asset register | 7 years |

## 14.  Related documents

| ID | Title | Relationship |
|---|---|---|
| DEV-02 | Device Compliance & Configuration Baseline | Defines “compliant” for exit criterion 4. Must exist before Conditional Access enforces device compliance. |
| DEV-03 | Disk Encryption & BitLocker Recovery Key Handling | Section 9 is the operational summary; DEV-03 is the full standard. |
| DEV-05 | Loaner Device Issue, Support & Return | Owns the pre-issue check in exit criterion 11. |
| DEV-06 | Computer Lab, Meeting Room & Shared Device Standard | Replaces the interim §6.6 once adopted. |
| DEV-07 | Personally-Owned Device (BYOD) Access Standard | Covers everything explicitly out of scope here. Read it alongside your acceptable use policy. |
| DEV-09 | macOS Device Management Standard | Replaces the interim §6.5 once adopted. The gap list from §6.5 step 3 shows what it must cover. |
| DEV-11 | Software Request, Approval, Licensing & Deployment | Application delivery behind exit criterion 7. |
| DEV-12 | Local Administrator Rights on Endpoints | Exit criterion 10. |
| DEV-13 | Patch, Update & Maintenance Window Standard | Ongoing device state after enrollment. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | Full procedure behind section 11. |
| DEV-16 | Lost, Stolen or Compromised Device Response | Depends on the §10 inventory record and §9 escrow position. |
| ACC-01 | Account Lifecycle: Joiner, Mover, Leaver | Device provisioning at joiner; escrow check at leaver. |
| ACC-03 | MFA Enrollment, Reset & Account Recovery | Windows Hello for Business depends on the join and compliance achieved here. |
| M365-20 | License Assignment, Reclamation & Cost Attribution | Entitlement release at disposal. |
| GOV-04 / GOV-06 | Change Management / SLA Definition | Wave scheduling and target ratification. |

## Appendix A — Per-device enrollment checklist

One per device. Paste into the ticket. Nothing here is optional and nothing is inferred.

| Done | Criterion | Evidence recorded |
|---|---|---|
| ☐ | Asset tag, serial, class and location in inventory BEFORE hand-over | Inventory ID |
| ☐ | Appears in Intune, checked in within 24 hours | Last check-in timestamp |
| ☐ | Entra joined with the correct join type for its class | Entra device ID |
| ☐ | Profiles applied; policy-conflict view checked and clear | Assignment status |
| ☐ | Reports compliant against DEV-02 | Compliance status |
| ☐ | Disk encrypted | Encryption report |
| ☐ | Recovery key CONFIRMED PRESENT in Entra — looked at, not assumed | Key ID  (or “none found” → §9) |
| ☐ | Required applications for the class installed | App install status |
| ☐ | Primary user set, or correctly recorded as shared | Username or room/position |
| ☐ | No standing local admin beyond DEV-12 | Local group checked |
| ☐ | Loaner only: pre-issue functional check passed (camera, audio, Teams, sign-in) | Loaner log entry |

## Appendix B — Wave runbook checklist

| Done | Step | Evidence recorded |
|---|---|---|
| ☐ | Wave defined by a stable attribute; target list produced with a count | List + count |
| ☐ | Target list reconciled against Intune (already enrolled) and inventory (no longer exists) | Reconciled list |
| ☐ | Wave group created; profile and app assignments resolve to it | Group ID |
| ☐ | Pre-wave escrow position recorded for every device | Baseline export |
| ☐ | Technician sheet and end-user notice prepared | Both attached |
| ☐ | Rollback path for this workload written down and performed once | Rollback note |
| ☐ | List worked in a recorded order; each device marked enrolled / deferred / failed with reason | Working list |
| ☐ | No device marked complete on enrollment alone — §7 criteria met | Per-device checklists |
| ☐ | Completion reported as three numbers: targeted / completed / outstanding with reasons | Report |
| ☐ | Silent devices (never checked in) listed and chased individually | Silent list + outcomes |
| ☐ | Post-wave escrow verification run and compared to baseline | Comparison |
| ☐ | Lessons recorded as input to the next wave | Wave retrospective |

## Appendix C — Escrow verification and remediation card

| Step | Check | If it fails |
|---|---|---|
| 1 | Intune → device → Monitor → Recovery keys. Is a key present? | “No BitLocker key found” is a finding. Continue to step 2. |
| 2 | Is the device Entra joined? | Not joined → automatic backup never happens. Resolve the join first. This is the most common cause. |
| 3 | Any policy conflict between the encryption profile and a security baseline? | Conflict can block backup silently while encryption proceeds. Resolve the conflict, then step 4. |
| 4 | Trigger key rotation from Intune, then re-check step 1. | Key now present → record the key ID and close. |
| 5 | Still no key? | ESCALATE. Do not wipe, reimage or reissue. The volume is currently unrecoverable and a wipe makes that permanent. |
| 6 | Device must be recovered and no key can be produced. | Confirm resident data is safe, then reimage via Autopilot. It returns enrolled, encrypted and escrowed. |

Retrieving a key for a user: verify their identity per ACC-03 §6 first. Recovery-key retrieval is an account action and the same verification gate applies — a 48-digit key handed to the wrong person defeats the encryption entirely.
