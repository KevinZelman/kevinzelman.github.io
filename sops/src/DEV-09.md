# DEV-09 · macOS Device Management Standard

*The target state the macOS enrollment pilot can be judged against — mapped condition by condition onto the Windows baseline, so the two platforms are comparable rather than divergent.*

| Field | Value |
|---|---|
| Document ID | DEV-09 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 2 — Advanced Technical Services enrolls, builds and supports Macs. Tier 3 owns the Apple Business Manager relationship, the Intune configuration and the Platform SSO deployment. Tier 4 declares the pilot production against §12. |
| Review cycle | Annually, and every autumn when Apple ships a major macOS release — the release cadence is the single largest recurring risk in this document. |
| Relationship to DEV-02 | DEV-02 §4 records the macOS row of the compliance baseline as “provisional pending DEV-09”, and says plainly that its gap list IS the DEV-09 specification. §4 of this document closes that: the ten Windows conditions, their macOS equivalents, and the two places where an honest equivalent does not exist. |

## 1.  Purpose — a pilot with nothing to be judged against

macOS Intune enrollment is often piloted alongside everything else — Intune waves, a tooling transition, co-management workload switching, a lab pilot — and against no written target-state standard — which means the pilot has nothing to be judged against, and “it worked” is not a finding anybody can act on.

A pilot without exit criteria does one of two things. It runs indefinitely, because nobody can say when it is finished. Or it is declared successful on the strength of a few Macs enrolling without visible complaint, and the organization discovers the gaps one at a time over the following year — usually the escrow gap, and usually at the moment a Mac needs recovering.

This document is the target state. Section 4 maps it onto the Windows baseline so the two platforms are comparable rather than divergent, section 12 is the exit criteria, and Appendix B is the sheet somebody signs.

## 2.  Who runs macOS, and why it matters

| Population | Why they are on macOS | What follows for this document |
|---|---|---|
| Design and media | The toolchain. Adobe workflows, video, audio and print production are genuinely better served on macOS, and the people doing that work are expert in the platform. | They will hold standing local admin today, they will use Homebrew and third-party tooling, and they are the hardest population for §6. Engage them early and honestly rather than presenting a finished policy. |
| Some staff | Personal preference of long standing, sometimes role-specific software, sometimes a machine bought from a project budget. | This is where retail-purchased Macs come from (§3), and where the migration in §11 will be most sensitive because the machine feels like theirs. |
| Some executives and senior staff | Preference, and often an iPhone-and-Mac working pattern. | A small population with disproportionate data sensitivity, and the population least able to tolerate an intrusive rollout. Get FileVault escrow right here first (§5). |
| A small number of shared and specialist machines | A studio workstation, an edit bay, a departmental machine. | Treated as shared devices on the DEV-06 principles, not as somebody’s Mac. |

The population is small enough to enumerate and large enough to matter. Enumerating it is step one of §11, and until it is enumerated the organization does not know the size of the problem — which is a sentence that could be written about several parts of the estate.

## 3.  Enrollment — ABM, ADE, and the devices that cannot be ADE-enrolled

The target enrollment path is Apple Business Manager with Automated Device Enrollment, linked to Intune. A device enrolled this way is supervised, its enrollment is not removable by the user, and it configures itself out of the box with no technician touching it.

|  | ADE via Apple Business Manager | Manual enrollment via Company Portal |
|---|---|---|
| How it happens | The device appears in ABM at purchase, is assigned to the Intune server token, and enrolls during Setup Assistant. | A person installs Company Portal and enrolls the Mac themselves, or a technician does it. |
| Supervised | Yes. Supervision is what enables the stronger restrictions and the account-creation controls in §6. | No. |
| User can remove management | No. | Yes — and this is the material difference. A manually-enrolled Mac can be unenrolled by whoever holds admin on it, at which point the organization’s controls silently stop applying. |
| Configurable before first login | Yes — including whether the first user becomes an administrator (§6). | No. The device already has an account and an administrator by the time management arrives. |
| Available for | Devices purchased through an ABM-linked channel: Apple directly, or an authorised reseller that enrolls the purchase into the organization’s ABM account. | Everything else, including every Mac already in the building. |

> **Be straight about this: a Mac bought retail cannot be ADE-enrolled. Ever.**
> ADE depends on the device having entered the organization’s Apple Business Manager account at the point of purchase, through Apple or an authorised reseller who does that enrollment. A Mac bought from a consumer retailer, bought online on a personal card and expensed, or bought through a project budget from an unlinked supplier, cannot be added to ABM afterwards. There is no retrospective path, no support call that fixes it, and no workaround. The device can only ever be manually enrolled.
> The consequence is a permanent, documented compliance gap on that device: management is removable by its user, supervision-dependent restrictions cannot be applied, and the account-creation control in §6 was never available — so its first user is almost certainly a local administrator.
> This is not a small administrative irritation. It is the difference between a managed Mac and a Mac that is managed until somebody decides otherwise.

### 3.1  The purchasing rule that stops it recurring

1. Every Mac and every iPad the organization buys is purchased through the ABM-linked channel. This is a rule in DEV-04 §3 (class S6), not a preference, and it applies to project-funded and departmentally-funded purchases identically.
2. No Mac is bought on a personal card and expensed. The reimbursement route is the commonest way an unmanageable Mac enters the organization, and the person doing it is being helpful rather than difficult — which is why the rule has to be published rather than enforced by refusal at the finance desk.
3. Project purchases: a project budget can specify a Mac; it cannot specify a supplier that leaves the organization with an unmanageable device. IT supplies the channel details to Procurement so this is settled when the budget is approved rather than at delivery.
4. Where a device has already arrived outside the channel, it is manually enrolled (§11), and the gap is recorded against it in inventory with the reason. Not hidden, and not treated as compliant.
5. The count of non-ADE Macs is reported annually with the DEV-04 §8 refresh list. It should fall every year; if it does not, the purchasing rule is not operating.
6. The gap closes at refresh. A non-ADE Mac is replaced at its four-year point by an ADE-enrolled one, which makes this a bounded problem with an end date rather than a permanent condition.
## 4.  The configuration baseline, mapped onto DEV-02

DEV-02 §3 defines ten conditions for a compliant device and §4 records the macOS row as provisional pending this document. Below is the mapping, condition by condition. The value of the table is comparability: the two platforms should differ where the platforms genuinely differ, and nowhere else.

| # | DEV-02 condition | macOS equivalent | Status |
|---|---|---|---|
| 1 | Enrolled and checked in within 14 days | Intune MDM enrollment; MDM check-in and the Intune agent reporting. | Equivalent. Note that macOS check-in behaviour differs and a Mac asleep for a fortnight looks the same as a Mac that has left. |
| 2 | Entra joined with the expected join type | macOS has no Entra join. The equivalent is device registration in Entra via Platform SSO / the Enterprise SSO plug-in (§7). | HONEST DIVERGENCE. Registration, not join. It is sufficient for Conditional Access device-based conditions, and it must be stated rather than glossed, because it is the source of most “why does my Mac behave differently” support traffic. |
| 3 | Disk encrypted, recovery key escrowed in Entra | FileVault enabled by policy, personal recovery key escrowed to Intune (§5). | Equivalent, and the highest-risk line in this document. Escrow is to Intune rather than Entra — a real difference in where a technician looks under pressure. |
| 4 | OS at or above the minimum supported build | macOS at the current major or the one before, with a stated minimum. Apple’s support model differs: majors are free, annual, and users can upgrade themselves unless deferred (§9). | Equivalent condition, different mechanics. The risk runs in the opposite direction to Windows — users upgrading too early rather than too late. |
| 5 | Security updates applied within the window | Software update enforcement via declarative device management, with deferral and a deadline (§9). | Equivalent. |
| 6 | Endpoint protection active, healthy, reporting | Microsoft Defender for Endpoint for macOS, onboarded, with Full Disk Access and network extension approvals granted by configuration profile (§10). | Equivalent, with a macOS-specific trap: without the privacy-preferences profile, Defender installs, reports as present, and cannot actually see the file system. Installed is not the same as working. |
| 7 | Firewall enabled | macOS application firewall enabled, with stealth mode. | Equivalent. |
| 8 | No standing local administrator beyond DEV-12 | No standing admin for the primary user; a separate managed local administrator account with an escrowed, rotated password (§6). | HARDEST LINE. On macOS the default is the opposite of the requirement: the first ADE user becomes an administrator unless configured otherwise. §6 is the whole discussion. |
| 9 | Secure Boot enabled where hardware supports it | Apple silicon: Secure Boot at Full Security, the default, satisfied by hardware. Intel Macs with a T2 chip: Secure Boot setting enforced. Intel Macs without T2: no equivalent. | Equivalent on Apple silicon and T2. A recorded gap on older Intel Macs, which is a refresh argument rather than a remediation project (DEV-04 §7). |
| 10 | Screen lock with a maximum idle timeout | Screen saver idle time with require-password-after-delay, set by profile. | Equivalent. |
| 11 | — no Windows equivalent in DEV-02 — | Gatekeeper enforced, allowing App Store and identified, notarised developers only. Users cannot override it. | macOS ADDITION. This is the platform’s primary defence against unsigned software, it has no direct DEV-02 line, and DEV-02 should adopt it by reference at its next revision so the baselines stay reconcilable. |
| 12 | — no Windows equivalent in DEV-02 — | Privacy preferences (PPPC) profiles for the agents that need them: Defender, remote support tooling, screen recording for conferencing and DisplayLink-class drivers. | macOS ADDITION. On macOS, permission is a configuration item. Anything not granted by profile silently does nothing, and “silently does nothing” is the recurring theme of macOS management. |

Twelve lines rather than ten, with the two additions named as additions. The alternative — quietly running a different baseline on macOS — is how an estate ends up with two security postures and one compliance report that averages them.

## 5.  FileVault and recovery-key escrow

> **This is the BitLocker escrow problem again, on a different platform.**
> A move between encryption tools typically only reaches machines that are online and healthy. Afterwards some devices show a BitLocker key in Entra and some show nothing, and without a procedure nobody can tell which is which (DEV-03).
> FileVault has precisely the same failure mode. A Mac with FileVault on and no escrowed recovery key is not a protected device — it is a device whose data is gone the moment it needs recovering. The user cannot help; the key does not exist anywhere else.
> The difference is that the failure is now known. There is no excuse for arriving at the same position on a second platform, which is why escrow verification is exit criterion 3 in §12 and appears twice in Appendix A.

1. FileVault is enabled by configuration profile at enrollment, not left to the user and not enabled after handover.
2. The personal recovery key is escrowed to Intune. Escrow is configured before enablement — a key generated before escrow is configured is not retrospectively collected.
3. Escrow is VERIFIED per device, by querying for the key, before the Mac is handed to anybody. Verified means somebody looked and the key was there. Not “the policy is assigned”.
4. Key rotation is enabled so that a key used once is replaced automatically.
5. Tier 3 runs the same detection query monthly that DEV-03 §5 runs for Windows: every enrolled Mac, encryption state, and escrow present or absent. The three-number position — encrypted with key, encrypted without key, not encrypted — is reported with the DEV-03 figures rather than separately, so nobody reads a Windows number and believes it covers the estate.
6. Remediation for a Mac with no escrowed key: confirm escrow configuration is applied, then rotate the key so a fresh one is generated and escrowed, then verify. Where the Mac cannot be brought into escrow at all — an unmanaged machine, or a user-encrypted volume — the device is recorded as an exception with an owner and a date, and it is not treated as compliant.
7. Retrieving a key for a user: the requester is verified to the ACC-06 standard before the key is released, and the release is recorded — who asked, who verified, who released, on which device (DEV-03 §7). A recovery key is a key to everything on the machine, and the request will sometimes arrive by the route real impersonation attempts arrive by.
8. Before any wipe, reimage, reassignment or disposal: escrow state is checked and the key retained until the device is confirmed clear (DEV-03 §8, DEV-15). A Mac wiped on the assumption that a key exists is unrecoverable if it did not.
## 6.  Admin rights, and the first-user problem

DEV-12 sets the organization position: no standing local administrator rights on an endpoint. macOS makes that harder than Windows in one specific, structural way.

> **By default, the first person to sign in to an ADE-enrolled Mac becomes a local administrator.**
> Unless the enrollment profile is configured otherwise, Setup Assistant creates the primary account as an administrator. So a Mac enrolled with a correct configuration profile, a compliant baseline and FileVault escrowed still hands its user the ability to disable much of it — including, on a manually-enrolled Mac, removing management altogether (§3).
> This is not a subtle setting. It is the difference between the DEV-12 standard applying to the Windows estate and applying to the whole organization.

| Element | Target |
|---|---|
| Primary user account | Standard user. Configured in the enrollment profile’s account settings, which requires ADE — one more consequence of §3. |
| Management admin account | One local administrator per device, created at enrollment, with a unique password escrowed and rotated automatically. The macOS analogue of the DEV-12 §4 built-in-administrator rule, and never a shared password across the fleet. |
| Elevation for a user who needs it | Time-bound promotion, recorded on a ticket, with an expiry — or the work is done by Tier 2. Tooling for on-demand elevation on macOS is thinner than on Windows, and the honest position is that today this is a procedure rather than a product. |
| Standing admin for named technical roles | Permitted only as a recorded DEV-12 exception: named person, named device, stated reason, compensating controls, expiry, reviewed. Design and media staff installing their own toolchain is the realistic case, and pretending otherwise produces either a policy nobody follows or an unmanaged Mac. |
| Removing standing admin from existing Macs | The last step of the migration, not the first (§11). Doing it early loses the goodwill the rest of the migration needs. |

Being realistic about the exception matters. The macOS population is often disproportionately technical, has held admin on their own machines for years, and is the population most able to tell whether IT knows what it is doing. A standard that reads as though written by somebody who has never used the platform will be complied with in form and worked around in substance.

## 7.  Sign-in — Platform SSO and the Enterprise SSO plug-in

- Target: the Microsoft Enterprise SSO plug-in deployed by configuration profile, with Platform SSO configured so that macOS sign-in is bound to the Entra identity. This is what delivers single sign-on to Entra-integrated applications from the Mac, and what registers the device in Entra so Conditional Access can evaluate it (§4 condition 2).
- Platform SSO authentication method: password synchronisation is the least disruptive starting point; the secure-enclave-backed method is stronger and is where this should end up, alongside the phishing-resistant direction in ACC-03 and DEV-08 §8. Pick one, record which, and do not run a mixture across the fleet by accident.
- It requires Company Portal present, the profile deployed, and the user to complete a registration prompt. That prompt is the step users dismiss, so it needs explaining rather than deploying silently.
- The recurring support pain is a mismatch between the local account short name and the Entra UPN — a Mac set up years ago as “jsmith” bound to an identity of a different shape. Record the local account name at enrollment and expect this to be the commonest §11 defect.
- Where a legacy identity provider remains in force for parts of the population (ACC-03 §3), be explicit about which identity provider a Mac is signing in to for which application. When that is not written down, a managed security partner ends up asking which MFA system the organization is actually using.
- Do not make Platform SSO a precondition for FileVault escrow. Escrow is the more important control and must not wait behind an SSO deployment (§5).
## 8.  Software delivery

| Channel | Use for | Notes |
|---|---|---|
| Intune app deployment (pkg and dmg) | The default. Organization-standard applications, security agents, and anything the organization is responsible for keeping current. | Wrapped or native. Test on the target build — an installer that works interactively and fails silently as a managed install is the standard first result. |
| Apps and Books (VPP) via Apple Business Manager | App Store applications, licensed to the organization and assignable per device or per user. | Requires the ABM token in Intune, kept renewed. An expired token stops app assignment silently, which is a good candidate for a calendar reminder rather than a discovery. |
| Microsoft AutoUpdate | The Microsoft 365 applications, Edge, Defender, Company Portal. | Deploy once, then let MAU keep them current on a defined channel. Do not repackage Microsoft applications; it creates a second update path that fights the first. |
| Self-service via Company Portal | Optional applications the user may install without a ticket. | The best return on effort in this whole section. Every application in the portal is a ticket that never gets raised. |
| Homebrew | Named technical roles only, under a recorded exception. | See below. It is neither endorsed nor bannable in practice, and the honest position is a bounded one. |

### 8.1  Homebrew, honestly

- It is how technically-capable Mac users install things, it is genuinely useful, and it is probably already present on your Macs.
- It is also a support burden and a governance gap: it installs outside the managed application inventory, it is not a licence record, some formulae need administrative rights, and software it installs bypasses the approval path in DEV-11 entirely.
- Position: not blocked for named technical roles holding a DEV-12 exception. Not the delivery mechanism for anything the organization depends on — if a tool matters, it is packaged and deployed under §8 so that it survives the person who installed it.
- Tier 2 supports the organization’s applications. It does not undertake to debug a Homebrew environment, and saying that in advance is fairer than discovering it during an outage.
- Anything installed by Homebrew that processes organization data at CONFIDENTIAL or above needs to be a recorded application under DEV-11, whatever installed it.
## 9.  Updates — deferral and enforcement

- Minor and security updates: enforced with a deadline, on the DEV-13 rings. Recommend deferral of up to 30 days for the general population, shorter for the pilot ring, with a forced restart outside working hours.
- Major macOS upgrades: deferred by policy, recommend 60 to 90 days. Piloted on a small ring first, and only then released.

> **Apple ships a major macOS release every autumn, often at the worst possible moment**
> A major upgrade arriving unmanaged in a busy week will break something — a VPN client, a print driver, a security agent, a line-of-business application, a media plug-in — and it will break it in front of a meeting or a deadline.
> Deferral is therefore not conservatism; it is the only control the organization has over the timing of a change it does not author. The pilot ring runs the new major in its first two months, the estate moves after that, and the deferral window is set before the release rather than during it.
> Note the opposite-direction risk to Windows: on macOS, users can and will upgrade themselves, for free, on the day. The control is the deferral policy, and it has to be in place before the release, not after somebody has already gone ahead.

- Shared and lab Macs follow DEV-06: quiet-period windows, never during booked hours, and no update deadline inside the first two weeks of a busy period.
- An unmanaged Mac receives whatever Apple offers it whenever the user accepts. That is the strongest practical argument for §11, and it is more persuasive to a Mac-using colleague than a compliance argument.
## 10.  Endpoint security, printing and peripherals

### 10.1  Defender for Endpoint on macOS

- Deployed by Intune, onboarded, and — critically — granted Full Disk Access and its network extension approvals by configuration profile. Without those, it installs, reports itself present, and cannot see the file system. An agent that looks like coverage and is not is worse than no agent (DEV-02 condition 6).
- Verify after deployment by confirming detection actually works on one machine, using a benign test, rather than by reading the console.
- Confirm explicitly whether the MDR service covers macOS endpoints, at what level, and where a macOS detection lands (DEV-14). Nobody should have to ask which platforms the MDR watches. This is a question to be answered in writing before §12 is signed.
### 10.2  Printing and peripherals

- Printing is deployed by profile with AirPrint or the organization print service where supported. macOS driver behaviour differs from Windows and a queue that works on Windows must be tested separately on macOS — this is a per-model test, not a per-platform assumption (DEV-17).
- Docks and external displays: DisplayLink-class drivers require a system extension approval and, for some functions, screen-recording permission granted by PPPC profile (§4 condition 12). A user who is asked to approve a system extension will decline it, so it is deployed by profile, in advance.
- Scanners, capture devices and studio hardware: recorded per machine, with their driver and permission requirements, because these are the items that turn a routine macOS upgrade into a broken workflow (§9).
- Camera, microphone and screen-recording permissions for Teams and Zoom are granted by profile. Otherwise the first meeting on a new Mac is a support call, every time.
## 11.  Migrating the Macs that already exist

Every Mac in the building today is a manual enrollment (§3). The order below matters, and the last step is last for a reason.

1. Enumerate them. Model, age, OS version, who has it, what it is used for, whether it was bought through the ABM channel, and whether its user holds admin. Until this list exists the organization does not know the size of the problem (§2).
2. Triage on hardware and OS. A Mac too old for a supported macOS is a DEV-04 §8 refresh line, not a migration task. Spending Tier 2 time enrolling a machine that will be replaced within the year is the wrong order of work.
3. Talk to the users first, individually, and tell them what will change and what will not. This population is small enough to make that possible and technical enough to notice if it is not done.
4. Enroll via Company Portal. User data stays in place; this is not a rebuild.
5. Apply the §4 baseline, then enable FileVault and — before anything else is considered finished — VERIFY the escrowed key exists (§5). On an already-encrypted Mac the existing key is not escrowed retrospectively: rotate it so a fresh key is generated and captured.
6. Deploy Platform SSO and the standard application set. Record the local account short name and resolve any mismatch with the Entra UPN now, not later (§7).
7. Onboard Defender with its permission profiles, and confirm it can actually see the disk (§10.1).
8. Set update deferral before the next macOS major, whichever month the migration happens in (§9).
9. Record the device in inventory, with the ADE gap flagged where it applies, and a refresh date that closes the gap (§3.1 step 6).
10. Only now address standing admin (§6). Last, deliberately: by this point the machine is managed, encrypted, escrowed, protected and patched, so if the admin conversation takes three months the organization is not exposed while it happens.
## 12.  Pilot exit criteria

macOS enrollment is production when every line below is true, evidenced, and signed off by Tier 4 on Appendix B. Not on a date, and not on the absence of complaints.

| # | Criterion | Evidence |
|---|---|---|
| 1 | Apple Business Manager account exists, is linked to Intune, and the token renewal is diarised with a named owner. | Console + calendar entry |
| 2 | An ADE-enrolled Mac goes from box to compliant with no technician touching it, twice, on two different models. | Two build records |
| 3 | FileVault escrow verified on every enrolled Mac, with the three-number position reported alongside the DEV-03 Windows figures. | Escrow query output |
| 4 | A recovery key has been retrieved and used to unlock a Mac in a rehearsal, following the ACC-06 verification path. | Rehearsal record |
| 5 | The §4 baseline is deployed and measurable, with each of the twelve conditions reportable from the console. | Compliance report |
| 6 | Primary user is a standard user on an ADE build, with an escrowed, rotating management admin account present. | Build record |
| 7 | Platform SSO working: sign-in to an Entra application from a Mac with no second prompt, and the device registered in Entra. | Test record |
| 8 | Defender onboarded, Full Disk Access granted, and detection proven with a benign test rather than assumed. | Detection record |
| 9 | MDR coverage of macOS confirmed in writing, with the escalation path for a macOS detection stated (DEV-14). | Written confirmation |
| 10 | Software delivery proven: a pkg deployment, a VPP assignment, and a Company Portal self-service install. | Three deployment records |
| 11 | Update deferral and enforcement proven on a minor update, and a deferral window set for the next major. | Policy + console |
| 12 | Printing tested on macOS against the actual queues, per model, in a real room (DEV-17). | Printed page |
| 13 | Tier 2 can rebuild a Mac from scratch using the documented path, without help from whoever ran the pilot. | A rebuild done by somebody else |
| 14 | The purchasing rule in §3.1 is published and understood by Finance and Procurement. | Published rule + acknowledgement |
| 15 | The existing-Mac inventory (§11 step 1) is complete, with the non-ADE count and each machine’s refresh date. | Inventory extract |
| 16 | DEV-02 §4 updated so the macOS row is no longer “provisional pending DEV-09”. | Revised DEV-02 |

> **Criterion 13 is the one that decides whether this is a standard or a person**
> A platform that only works while the person who piloted it is available has not been adopted; it has been demonstrated. In a small team where most staff wear several hats, that distinction is the difference between a capability and a liability.
> The same test applies to the Intune waves and the lab pilot: work executed from per-wave email rather than from a standing procedure anybody can pick up.

## 13.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| New ADE Mac, enrollment to usable | Same as a Windows build: 1–2 coverage days after delivery (DEV-04 §11). |
| Manual enrollment of an existing Mac | P3 — scheduled with the user, 1 coverage day of work. |
| FileVault escrow verification for a new Mac | Before handover. Not a service level — a gate. |
| Recovery-key retrieval after ACC-06 verification | P2 — 4 coverage hours. Somebody is locked out of a machine. |
| Mac cannot sign in / Platform SSO failure | P2 — 4 coverage hours. |
| macOS application deployment request | P3 — per DEV-11, with the honest note that a first-time macOS package takes longer than a Windows one. |
| Major macOS release lands | Deferral window confirmed within 5 coverage days of Apple’s announcement, ahead of general availability. |
| Monthly escrow and compliance position | Reported by Tier 3 with the DEV-03 figures, not separately. |
| Pilot exit sign-off | Tier 4, against §12, on the evidence. |

## 14.  Records

| Record | Held in | Retention |
|---|---|---|
| Mac inventory: model, age, user, ADE status, local account name | Inventory | Life of the device + 3 years |
| Per-device build record against Appendix A | Ticket | Life of the device |
| FileVault escrow verification, per device, with date | Console + IT record | Life of the device |
| Recovery-key releases: who asked, who verified, who released | Ticket | 7 years |
| Non-ADE devices, with the recorded gap and refresh date | Exception register | Until the device is replaced |
| Standing admin exceptions for macOS (DEV-12) | Exception register | Life of the exception + 3 years |
| Pilot exit criteria evidence and Tier 4 sign-off | Tier 4 record | 7 years |
| Written confirmation of MDR coverage for macOS | Tier 4 record | Life of the contract + 3 years |

## 15.  Related documents

| ID | Title | Relationship |
|---|---|---|
| DEV-01 | Device Enrollment & Lifecycle | Macs are a device class in it; §11 is the macOS-specific enrollment path. |
| DEV-02 | Device Compliance & Configuration Baseline | §4 is the mapping its §4 asks for. Criterion 16 closes the loop. |
| DEV-03 | Disk Encryption & BitLocker Recovery Key Handling | The same problem, the same failure mode, one platform over. §5 mirrors it deliberately. |
| DEV-04 | Standard Hardware Catalog, Request & Refresh Cycle | Class S6, and the ABM purchasing rule §3.1 depends on. |
| DEV-06 | Computer Lab, Meeting Room & Shared Device Standard | Shared and studio Macs follow it. |
| DEV-08 | Mobile Device Access to organization Data | iPhones and iPads: the same ABM rule, the same enrollment story. |
| DEV-11 | Software Request, Approval, Licensing & Deployment | §8 — including anything Homebrew installed that the organization depends on. |
| DEV-12 | Local Administrator Rights on Endpoints | §6. The first-user problem is the macOS-specific hard case. |
| DEV-13 | Patch, Update & Maintenance Window Standard | §9 — rings, deadlines, and the September problem. |
| DEV-14 | Endpoint Security Agent & MDR Escalation Standard | §10.1, and the coverage question in criterion 9. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | Never wipe a Mac without confirming the escrow position first. |
| DEV-17 | Printer, Copier & Peripheral Standard | §10.2 — macOS queues are tested separately. |
| ACC-03 | MFA & Account Recovery | Platform SSO methods and the phishing-resistant direction. |
| ACC-06 | Identity Verification | Before any recovery key is released. |
| ACC-07 | Privileged Account Standard | The management admin account is a privileged credential. |
| M365-21 | Tenant Configuration Change Control | Changes to the profiles and policies in §4. |
| GOV-04 | Change Management & Maintenance Windows | Deferral changes and major-release releases are changes. |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies §13. |

## Appendix A — Mac build checklist

One per device, completed before handover. A Mac handed over with an unticked row 6 or row 7 is the escrow failure repeating on a second platform.

| ✓ | Step | Evidence |
|---|---|---|
| ☐ | Purchased through the ABM-linked channel; device present in Apple Business Manager | ABM record |
| ☐ | Assigned to the Intune enrollment token; ADE profile applied | Console |
| ☐ | Enrollment profile sets the primary user as a STANDARD user (§6) | Console |
| ☐ | Enrolled and checked in; showing in inventory with room, assignee and asset tag | Console + inventory |
| ☐ | Baseline profiles applied — all twelve §4 conditions reporting | Compliance report |
| ☐ | FileVault enabled by policy | Console |
| ☐ | Recovery key ESCROWED AND VERIFIED by query — somebody looked (§5 step 3) | Key visible in Intune |
| ☐ | Key rotation enabled | Console |
| ☐ | Management admin account created; password escrowed and rotating; no standing user admin | Console |
| ☐ | Gatekeeper enforced; user cannot override | Console |
| ☐ | Firewall on with stealth mode; screen lock and idle timeout set | Console |
| ☐ | Defender installed, onboarded, Full Disk Access granted, detection proven | Detection test |
| ☐ | PPPC profiles applied for camera, microphone, screen recording and any dock driver | Console |
| ☐ | Platform SSO / Enterprise SSO plug-in deployed; device registered in Entra; local account name recorded | Test sign-in |
| ☐ | Update deferral and deadline set, appropriate to the ring and the next major release | Console |
| ☐ | Standard applications deployed; Microsoft AutoUpdate channel set; Company Portal self-service available | Device |
| ☐ | Printing tested against the queues the user will actually use | Printed page |
| ☐ | OneDrive signed in with known-folder redirection working (M365-12) | Test file |
| ☐ | Non-ADE device? Gap recorded in inventory with the reason and a refresh date (§3.1) | Inventory |
| ☐ | User shown: where files live, how sign-in works, what to do about updates | Handover note |

## Appendix B — Pilot exit criteria sign-off

Signed by Tier 4 to declare macOS enrollment production. Sixteen criteria from §12; a partial sheet is a pilot that is still running, which is a legitimate answer.

| # | Criterion (§12) | Evidence attached / date / initials |
|---|---|---|
| 1 | ABM linked to Intune, token renewal owned |  |
| 2 | Box-to-compliant with no technician, twice, two models |  |
| 3 | FileVault escrow verified estate-wide, reported with DEV-03 |  |
| 4 | Recovery-key retrieval rehearsed through ACC-06 |  |
| 5 | All twelve §4 conditions deployed and reportable |  |
| 6 | Standard primary user; escrowed rotating management admin |  |
| 7 | Platform SSO working; device registered in Entra |  |
| 8 | Defender onboarded, Full Disk Access, detection proven |  |
| 9 | MDR macOS coverage confirmed in writing (DEV-14) |  |
| 10 | pkg, VPP and self-service deployments all proven |  |
| 11 | Update enforcement proven; next major deferred |  |
| 12 | Printing tested per model in a real room |  |
| 13 | A rebuild performed by somebody who did not run the pilot |  |
| 14 | Purchasing rule published; Finance and Procurement acknowledge |  |
| 15 | Existing-Mac inventory complete with non-ADE count |  |
| 16 | DEV-02 §4 revised — macOS row no longer provisional |  |
|  | Tier 4 sign-off — name, role, date |  |
|  | Outstanding gaps accepted, with owners and dates | Free text — an honest list here is worth more than sixteen ticks |
