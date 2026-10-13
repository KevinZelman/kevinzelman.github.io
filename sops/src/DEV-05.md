# DEV-05 · Loaner Device Issue, Support & Return

*The two-minute check before a loaner goes out, and the ten minutes after it comes back.*

| Field | Value |
|---|---|
| Document ID | DEV-05 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 1 — the Service Desk, which already holds the storage room. Faults escalate to Tier 2. |
| Review cycle | Annually, and at the start of each busy season. |

## 1.  Purpose

A loaner exists so that somebody whose computer has failed can keep working. It follows that a loaner which itself does not work is worse than no loaner at all: the person has now lost time twice, and their confidence in IT with it.

Loaner pools tend to produce the same repeat faults: a speaker that does not work, discovered during a meeting; a machine on which Settings will not open and neither Teams nor the camera works; a person simply unable to work on the loaner they were given. These are not difficult faults. They are faults that a two-minute check before issue would have caught.

> **The whole document in one idea**
> A loaner is checked before it goes out, every single time — not only when it was built. A machine that worked when it came back three months ago is not evidence about today.
> Everything else here supports that one habit.

## 2.  What the loaner pool is for

| Loaners are for | Loaners are not for |
|---|---|
| A device that has failed or gone for repair. | Working around a device request that has not been approved (DEV-04). |
| A short-term need — a visitor, a temporary role, a specific event. | A permanent second device by another name. |
| Somebody waiting on a new device to be provisioned. | Long-term issue to a person whose actual device was never ordered. |
| A conference, presentation or off-site need where the person’s own device is unsuitable. | Personal use, or issue to somebody who is not a member of the organization community. |

Where a loaner has been out for more than 30 days, that is not a loan any more. Convert it to an assigned device under DEV-01 or return it — a pool that has been quietly absorbed into permanent use cannot serve the next emergency, which is the failure nobody sees coming until it happens.

## 3.  The pre-issue check

Two minutes, before the device leaves the desk, with the person present where possible. Appendix A is the card.

1. Power on and sign in. Confirm it reaches a usable desktop without a pending update reboot queued.
2. Open Settings. This sounds trivial; a documented fault was precisely that Settings would not open, and it indicates a broken profile that will produce a cascade of other failures.
3. Open Teams, and confirm sign-in works. Teams is what most people need first and it is the commonest reported loaner fault.
4. Test the camera, the microphone and the speakers. Actually test them — play a sound, see the picture. A speaker fault discovered in a meeting is the exact case on record.
5. Confirm network: wired and wireless both, and VPN if the person will work remotely (DEV-10).
6. Confirm it is Intune-enrolled and compliant, and that BitLocker is on with the key escrowed (DEV-03 §5.1). A loaner passes DEV-01 exit criteria before every issue, not only at first build.
7. Confirm battery and charger. Send the charger; a loaner without one is half a loaner.
8. Record the check in the loaner log with the date and who performed it.

> **If any check fails**
> Do not issue the device. Take the next one, and put the failed one into Tier 2’s queue with a note of exactly what failed.
> Issuing a device you know has a fault, with a caveat to the user, is how a pool earns a bad reputation. There is no version of “it mostly works” that helps somebody whose own machine has just died.

## 4.  Issuing

1. Record who has it, the asset tag, the date out, the expected return date, and the reason.
2. Set an expected return date always. “Until my laptop is fixed” is not a date, and it is how a loaner becomes permanent.
3. Explain what is on it and what is not: their files come from OneDrive and SharePoint, not from the loaner, and anything saved only to the loaner’s local disk will be wiped on return (M365-12).
4. Explain that it is an organization device under the same rules as any other — including the Acceptable Use standard (ACC-15) and that it may be remotely wiped if lost (DEV-16).
5. Confirm they can sign in before they leave the desk. This one step prevents the majority of “the loaner doesn’t work” contacts.
## 5.  While it is out

- A fault on a loaner is a P2 — the person is already down one device. Swap it rather than troubleshooting at length; the pool exists to make swapping cheap.
- At the expected return date, chase once. At 30 days, escalate to §2 — convert or return.
- The loaner stays under Intune management throughout and remains subject to compliance and patching (DEV-13).
## 6.  Return to service

Ten minutes, and it is the step whose omission causes the repeat faults. Appendix B is the card.

1. Confirm the charger and any accessories came back.
2. Ask the person what did not work. Ask directly — people frequently do not report a fault on a device they are giving back, and this is the cheapest fault-finding available.
3. Check for data saved locally. Move anything institutional to the right place before wiping (M365-12).
4. Confirm the BitLocker key is escrowed BEFORE wiping (DEV-03 §8).
5. Wipe and re-provision via Autopilot. A returned loaner goes back to a known-good state rather than to whatever state the last user left it in.
6. Run the full §3 pre-issue check and record the result. The device is not back in the pool until it passes.
7. Note any fault found in the loaner log against that asset tag. Faults recurring on the same tag are §7.
8. Clear the primary user in inventory so the device shows as available (DEV-01 §10).
## 7.  Retiring a device from the pool

A device that fails its pre-issue check twice in a term leaves the pool. Not for repair-and-return — out.

The reasoning is economic rather than technical: the staff time spent re-diagnosing a marginal machine, plus the cost of a failure in front of a user, exceeds the residual value of a device that is already at the end of its useful life. Tracking faults by asset tag in the loaner log is what makes this visible instead of anecdotal.

## 8.  Pool size and condition

- The pool needs enough devices that a failed pre-issue check has a next device to reach for. One spare is not a pool.
- Loaners are the same standard build as assigned devices wherever possible. A loaner that behaves differently generates its own support contacts.
- Pool devices are powered on and checked in monthly even when not issued, so that they are patched, compliant and escrowed rather than three months stale. An untouched loaner is a silent device (DEV-01 §8.3).
- Report pool size, condition and monthly fault count to Tier 4 with the DEV-04 refresh planning. A pool quietly degrading is a budget question, not an IT failing.
## 9.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Issue a loaner to somebody whose device has failed | P2 — same coverage day. Their alternative is not working. |
| Pre-issue check | Before every issue. No exceptions, no “it was fine last time”. |
| Fault reported on a loaner in use | P2 — swap rather than troubleshoot. |
| Return to service after return | Within 2 coverage days, and not back in the pool until it passes §3. |
| Loaner out beyond 30 days | Escalate to Tier 4 as a device request (DEV-04), not a loan extension. |

## 10.  Measurement

- Pre-issue check failures per month. A rising number is good — it means faults are being caught at the desk rather than by a user.
- Faults reported by users on issued loaners. This is the number that should fall to near zero, and it is the measure of whether §3 is actually being done.
- Repeat faults by asset tag — the §7 trigger.
- Loaners out beyond 30 days. A rising number means the pool is being used to paper over a hardware refresh gap.
## 11.  Records

| Record | Held in | Retention |
|---|---|---|
| Loaner log: issue, return, dates, person, asset tag | Loaner log | 1 year |
| Pre-issue check result, per issue | Loaner log | 1 year |
| Faults found, by asset tag | Loaner log + ticket | Life of the asset |
| Return-to-service including escrow confirmation | Ticket | Life of the asset |
| Retirement decisions under §7 | Asset register | Life of the asset + 1 year |

## 12.  Related documents

| ID | Title | Relationship |
|---|---|---|
| DEV-01 | Device Enrollment & Lifecycle | Exit criterion 11 is the §3 check. Loaners are a device class in §4 of that document. |
| DEV-03 | Disk Encryption & BitLocker Recovery Key Handling | §6 step 4 — escrow before wipe. |
| DEV-04 | Standard Hardware Catalog, Request & Refresh | Where a 30-day loaner should have gone instead. |
| DEV-10 | Remote Access & VPN Standard | §3 step 5. |
| DEV-13 | Patch, Update & Maintenance Window Standard | §8 — pool devices go stale if never powered on. |
| DEV-16 | Lost, Stolen or Compromised Device Response | Explained to the borrower at §4 step 4. |
| M365-12 | OneDrive Appropriate Use | Where the borrower’s files actually live. |
| ACC-15 | Acceptable Use & Credential-Sharing Standard | Applies to a loaner as to any organization device. |
| GOV-06 | Service Commitments | Supplies §9. |

## Appendix A — Pre-issue card

Two minutes, every issue. If any line fails, take the next device.

| ✓ | Check | Watch for |
|---|---|---|
| ☐ | Powers on and reaches a usable desktop | No pending update reboot queued |
| ☐ | Settings opens | A documented real fault — indicates a broken profile |
| ☐ | Teams opens and signs in | The commonest reported loaner fault |
| ☐ | Camera shows a picture | Actually look at it |
| ☐ | Microphone and speakers work | Actually play a sound — a meeting is not the place to find out |
| ☐ | Wired and wireless network both work |  |
| ☐ | VPN connects, if they will work remotely | DEV-10 |
| ☐ | Intune-enrolled and compliant | DEV-01 exit criteria |
| ☐ | BitLocker on, key escrowed in Entra | DEV-03 — verify, do not assume |
| ☐ | Battery holds charge, charger included | A loaner without a charger is half a loaner |
| ☐ | Logged: date, who checked, result |  |

## Appendix B — Return-to-service card

| ✓ | Step | Note |
|---|---|---|
| ☐ | Charger and accessories returned |  |
| ☐ | Asked the person what did not work | Ask directly — they often will not volunteer it |
| ☐ | Checked for locally-saved data and moved anything institutional | M365-12 |
| ☐ | BitLocker key confirmed escrowed BEFORE wipe | DEV-03 §8 — never skip |
| ☐ | Wiped and re-provisioned via Autopilot | Back to a known-good state |
| ☐ | Full pre-issue check passed | Not in the pool until it passes |
| ☐ | Any fault logged against the asset tag | Two failures in a quarter → §7, out of the pool |
| ☐ | Primary user cleared in inventory | DEV-01 §10 |
