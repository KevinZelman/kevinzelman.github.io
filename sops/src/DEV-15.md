# DEV-15 · Device Reassignment, Wipe, Retirement & Disposal

*What happens to an organization device between one holder and the next, and at the end of its life.*

| Field | Value |
|---|---|
| Document ID | DEV-15 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 2 — Advanced Technical Services. Disposal approval is Tier 4. |
| Review cycle | Annually. |
| Related existing policy | Your organization's policy on disposing of sensitive data, if it has one. §6 operates under it. |

## 1.  Purpose

A device changes hands more often than it is bought, and the handover is where data leaks, licences are lost and recovery keys disappear. This document is the procedure for doing it properly, and it is deliberately short: three checks carry most of the value.

## 2.  The three checks that must never be skipped

> **Check 1 — Confirm the BitLocker recovery key is escrowed BEFORE any wipe.**
> A wipe of an encrypted volume with no escrowed key is unrecoverable and permanent. An estate that has never audited escrow can have devices in exactly that state without knowing how many (DEV-03 §2).
> This same check closes a leaver ticket (ACC-01 §7.2 step 8) and satisfies DEV-01 exit criterion 6. Three procedures depend on it.

> **Check 2 — Confirm resident data has been dealt with BEFORE reissue.**
> A device reissued carrying the previous holder’s local files is a data incident that nobody notices until the new holder opens a folder.
> Where institutional records are only on the local disk, they move to the right place first (M365-12).

> **Check 3 — Deregister from Autopilot BEFORE disposal.**
> A device sold, donated or recycled while still registered to your Autopilot tenant will try to enrol into your tenant when the next owner sets it up. That is both an operational nuisance and a poor look.
> It is the single most commonly forgotten step at disposal because nothing prompts for it.

## 3.  Reassignment

1. Confirm the device is returned, with its charger and accessories.
2. Ask the returning holder what did not work. People rarely volunteer a fault on a device they are handing back, and this is the cheapest fault-finding available (DEV-05 §6).
3. Check for locally-resident data and move anything institutional to its proper home (Check 2).
4. Confirm the recovery key is escrowed (Check 1). If it is not, DEV-03 §6 before anything else.
5. Wipe and re-provision through Autopilot. A reassigned device goes to a known-good state, not to whatever state the last holder left it in.
6. Clear the previous primary user and set the new one in Intune and in inventory (DEV-01 §10).
7. Verify the full DEV-01 §7 exit criteria before issuing. A reassigned device is issued to the same standard as a new one.
8. Record the reassignment: from whom, to whom, date, asset tag.
One note on recovery keys after reassignment: where an Autopilot device is reused by a new owner, the previous owner’s ability to see the recovery key does not automatically transfer. The new holder asks an administrator, which is the correct behaviour and worth knowing before somebody is confused by it (DEV-01 §10).

## 4.  Wiping

- Wipe means a full reset through the management platform, not a file deletion and not a quick format.
- Check 1 first. Always.
- A device that cannot be wiped through the platform — because it will not check in, or has been removed from management — is wiped locally by a technician, and the record notes that it was done manually.
- A device that cannot be wiped at all, because it is dead, goes to §6 as physical destruction rather than being set aside "to deal with later". Set-aside devices are how estates accumulate unaccounted disks.
- For a device that held CONFIDENTIAL or RESTRICTED data, a platform wipe of an encrypted volume is sufficient, provided the encryption was in place and verified. Where it was not, treat the disk under §6.
## 5.  Retirement

Retirement is the point at which a device leaves service but has not yet left the building.

1. Wipe per §4.
2. Remove from Intune and from Entra device registration.
3. Deregister from Autopilot (Check 3).
4. Remove from Configuration Manager and from the ticketing system or asset tool, if you use them.
5. Release any licence or entitlement attached to the device (M365-20).
6. Set the inventory status to retired, with the date. Retired is a real status and it is not the same as disposed.
7. Store retired devices securely until disposal. A retired device in an unlocked cupboard is an unaccounted disk.
## 6.  Disposal

Under your organization's policy on disposing of sensitive data, which governs where one exists. This section is the operational sequence.

1. Tier 4 approves disposal, per batch rather than per device.
2. Confirm every device in the batch is wiped and retired per §4 and §5, and that Check 3 has been done for each.
3. Where a device held RESTRICTED data, or where wiping could not be verified, the disk is physically destroyed rather than wiped. Destruction is the default when there is doubt, because the cost of a disk is trivial against the cost of being wrong.
4. Obtain a certificate of data destruction from the disposal vendor, listing serial numbers. A certificate without serial numbers evidences nothing.
5. Reconcile the certificate against the batch. Any device on the list that is not on the certificate is investigated before the batch is closed.
6. Update inventory to disposed, with the date and the certificate reference.
7. Retain the certificate for seven years.
## 7.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Reassignment, device returned | P3 — 2 coverage days, and not issued until §3 step 7 passes. |
| Device found encrypted with no escrowed key | P2 — DEV-03 §6 starts the same coverage day. Do not wipe. |
| Retirement processing | P4 — batched, as protected capacity work. |
| Disposal batch | P4 — scheduled, with Tier 4 approval. |
| Certificate reconciliation discrepancy | P2 to Tier 4. An unaccounted device is a potential incident. |

## 8.  Records

| Record | Held in | Retention |
|---|---|---|
| Reassignment: from, to, date, asset tag, exit criteria met | Ticket + inventory | Life of the asset + 1 year |
| Escrow confirmation before each wipe | Ticket | Life of the asset + 1 year |
| Manual wipes, with the reason | Ticket | 3 years |
| Retirement, including Autopilot deregistration | Inventory | Life of the asset + 1 year |
| Disposal approval, certificate with serial numbers, reconciliation | Asset register | 7 years |

## 9.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Disposal Policy | Your organization's policy on disposing of sensitive data | Governs §6. |
| DEV-03 | Disk Encryption & BitLocker Recovery Keys | Check 1. §8 of that document is this document’s precondition. |
| DEV-01 | Device Enrollment & Lifecycle | §11, and the exit criteria a reassigned device must meet. |
| DEV-05 | Loaner Device Issue, Support & Return | The same return-to-service discipline, per issue. |
| DEV-16 | Lost, Stolen or Compromised Device Response | A device that never comes back. |
| ACC-01 | Account Lifecycle | §7.2 step 8 depends on Check 1. |
| M365-12 | OneDrive Appropriate Use | Check 2 — where resident data should have been. |
| M365-15 | Data Classification & Handling | Determines whether §6 step 3 applies. |
| M365-20 | License Assignment & Reclamation | §5 step 5. |

## Appendix A — Reassignment checklist

| ✓ | Step | Evidence |
|---|---|---|
| ☐ | Device, charger and accessories returned | Confirmed |
| ☐ | Asked what did not work | Noted, or “nothing reported” |
| ☐ | Resident data checked; institutional records moved | Destination |
| ☐ | RECOVERY KEY CONFIRMED ESCROWED — before any wipe | Key ID |
| ☐ | Wiped and re-provisioned via Autopilot | Date |
| ☐ | Previous primary user cleared; new one set | Both names |
| ☐ | Full DEV-01 §7 exit criteria met | Checklist |
| ☐ | Reassignment recorded | Inventory updated |

## Appendix B — Disposal checklist

| ✓ | Step | Evidence |
|---|---|---|
| ☐ | Tier 4 approved the batch | Approver |
| ☐ | Every device wiped and retired | Per-device record |
| ☐ | DEREGISTERED FROM AUTOPILOT — every device | Confirmed per serial |
| ☐ | Removed from Intune, Entra, Configuration Manager and the ticketing system | Confirmed |
| ☐ | Licences and entitlements released | M365-20 |
| ☐ | RESTRICTED or unverifiable devices physically destroyed | List |
| ☐ | Certificate of destruction received, WITH serial numbers | Certificate reference |
| ☐ | Certificate reconciled against the batch; discrepancies investigated | Reconciliation note |
| ☐ | Inventory set to disposed, with date and certificate reference | Inventory |
