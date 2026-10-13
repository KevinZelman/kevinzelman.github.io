# ACC-01 · Account Lifecycle: Joiner, Mover, Leaver

*How an identity at the organization is created, changed and removed so that access always matches a person’s current relationship with the organization.*

| Field | Value |
|---|---|
| Document ID | ACC-01 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | B. Account Usage |
| Operating tier | Tier 2 — Advanced Technical Services. Onboarding prep already sits with Tier 2 under the published tier model. Tier 4 owns this document. |
| Primary audience | IT Account Services and IT administrators. HR and hiring managers act as requesters. |
| Review cycle | Annually, and on any change to the HR and user system of record, Entra ID, or the HR onboarding process. |

## 1.  Purpose

This procedure establishes one repeatable path by which an identity at the organization is created when a person arrives, changed when their role changes, and removed when they leave. Its object is that access at any moment reflects the person’s current relationship with the organization, and that no step in that sequence depends on a particular member of staff remembering it.

It is written because, in many shops, provisioning and de-provisioning are handled case by case. That produces outcomes like these:

- Organization records held in a departing senior staff member’s personal OneDrive, because they first joined as a consultant and no boundary rule was ever stated. Recovering them means standing up a SharePoint site and re-permissioning it by hand.
- Several temporary-worker accounts added to a departmental shared mailbox through a reply-all email thread, with no named mailbox owner and no revocation trigger at the end of the engagement.
- A naming convention for departmental user accounts extended to a new department while still openly contested inside IT.
- HR asking IT, mid-migration, what retiring the old network drives means for payroll-sensitive access.
None of these are failures of skill. They are what happens when a sequence exists only in the heads of the people who run it.

> **Where this sits in the tier model**
> Provisioning and de-provisioning execute at Tier 2, which already owns onboarding prep under the published tier model. Tier 1 receives the request and routes it; Tier 3 handles identity architecture questions this procedure raises but does not answer; Tier 4 owns this document and every approval it names.
> The governing rule of the tier model applies throughout: escalation changes the tier, not the queue. A provisioning ticket that moves to Tier 3 keeps its category and its history. Nobody starts over.

## 2.  Scope

### In scope

- Every identity in your Microsoft 365 tenant and in on-premises Active Directory, for every account class listed in section 3.
- The entitlements attached to those identities: licences, group memberships, shared mailbox membership, SharePoint and OneDrive permissions, mailbox delegations, and privileged role assignments.
- The link between an identity and an assigned device, to the extent needed to complete or close a lifecycle event.
### Out of scope

- Accounts local to an application and not federated to the organization identity. Application onboarding and claim mapping are governed by ACC-16.
- Local accounts on endpoints, governed by DEV-12.
- The lifecycle of the person’s record in the HR and user system of record. This procedure consumes that record; it does not manage it.
- Physical access, keys and ID cards, which are not IT-owned.
## 3.  Systems of record and account classes

Two rules govern everything that follows.

> **Rule 1 — the HR and user system of record is the system of record.**
> An identity is created from a record that already exists in the HR and user system of record. Where no record exists in the HR and user system of record, the request goes back to HR or the records owner; IT does not create a manual identity to work around a missing record. This is what keeps dynamic group membership, licensing and reporting coherent (see M365-04).

> **Rule 2 — Only IT Account Services creates identities.**
> This includes guests. The failure this prevents: a staff member invites an external identity into the tenant, it completes MFA registration, and nobody has recorded a sponsor, purpose or expiry. End-user guest invitation is disabled under ACC-10; guests are requested, not created.

### Account classes

| Account class | Source of record | Requested by | Naming | Default licence | Default expiry |
|---|---|---|---|---|---|
| Employee (staff) | the HR system | HR | Per ACC-02 | Standard staff licence | None — ends on separation |
| Staff, part-time or fixed-term | the HR system, per contract | HR | Per ACC-02 | Standard staff licence | Contract end + 30 days unless renewed |
| End user (non-staff) | the HR and user system of record | Automated | Per ACC-02 | Per M365-20 | Per ACC-12 |
| Temporary worker — departmental access | Hiring dept + HR | Hiring department | Per ACC-02 — see §9 open decision | Uses existing licence | End of engagement, re-approved each engagement |
| Vendor / contractor | Sponsoring director | Sponsoring director | Per ACC-11 | As needed | 90 days, renewable |
| Guest (external) | Named internal sponsor | Sponsor via IT | #EXT# in tenant | None | 90 days |
| Service / non-human | IT | IT | Per ACC-08 | As needed | Reviewed annually |
| Administrative (privileged) | IT | IT | Per ACC-07 | As needed | Reviewed quarterly |

Default licence and expiry values above are drafting proposals. They become policy when the approver in the control block signs this document.

## 4.  Roles and responsibilities

R = does the work.  A = accountable and signs off.  C = consulted before the step completes.  I = informed after.

> **Onboarding is HR-owned**
> Human Resources holds the onboarding process and is accountable for it end to end. HR takes the intake and feeds the appropriate departments — IT, Facilities, Payroll, the hiring department — to fulfil the needs each of them owns.
> IT is accountable for executing the technical provisioning it is handed, and for telling HR what it needs in order to do that. IT is not accountable for chasing the existence of a new hire, and does not maintain a parallel intake form.
> If HR is piloting this arrangement, write it down here anyway, so the rest of the organization can adopt it once the pilot holds.

| Activity | HR | Hiring manager | Records owner | IT Account Services | IT Security | Head of IT |
|---|---|---|---|---|---|---|
| Own the onboarding process end to end | A / R | C | C | C | — | I |
| Take the intake and route it to the departments that must act | A / R | C | C | I | — | I |
| Supply IT with the §5.1 fields it needs to provision | A / R | C | C | C | — | I |
| Approve access beyond the role default | C | R | — | I | C | A |
| Create, modify or disable the identity | I | I | I | R / A | C | I |
| Confirm device issue and return | I | R | — | C | — | I |
| Notify IT of a role change | A / R | R | — | I | — | I |
| Escalate a provisioning request between tiers | I | I | I | R / A | C | I |
| Notify IT of a separation | A / R | R | — | I | I | I |
| Approve retention of a departed person’s mail or files | C | R | — | I | C | A |
| Reassign ownership of sites, Teams and shared mailboxes | I | R | — | R | — | A |
| Quarterly access review (ACC-17) | C | R | C | R | C | A |

## 5.  Joiner procedure

### 5.1  Trigger and lead time

HR initiates onboarding and routes the technical provisioning request to IT at least five business days before the start date. A request inside five days is still actioned, but the organization accepts that day-one readiness is not guaranteed. IT does not refuse late requests; it records them, because the pattern is the evidence HR needs to tighten the upstream process.

Because HR owns the process, IT’s job at this step is narrow and specific: state what it needs, act on it when it arrives, and report back. The fields below are that statement of need. They are not an IT form competing with HR’s — they are the IT section of HR’s.

The provisioning request is incomplete, and goes back to HR, unless it carries all of the following:

| Field | Why IT needs it |
|---|---|
| Legal name and preferred name | Legal name must match the HR and user system of record; preferred name drives the display name and mail alias. |
| Which other departments HR has routed this to | So IT knows whether Facilities, Payroll and the hiring department are already in motion, and does not duplicate or assume. |
| HR record ID | The join key. Without it the identity cannot be reconciled and dynamic groups will not resolve. |
| Role title, department, manager | Determines the role default entitlement set and the approver for anything beyond it. |
| Account class | Selects the row in the §3 table — licence, naming and expiry all follow from it. |
| Start date, and end date if fixed-term | The end date becomes the automated expiry. Its absence is why contractor accounts outlive contracts. |
| Work location and hybrid pattern | Determines device class, remote access need (DEV-10) and telephony need (M365-09). |
| Device and telephony requirement | Triggers DEV-01 provisioning in parallel rather than after the fact. |
| Any access beyond the role default, with business reason | Captured at the point of request, where the manager is present to justify it, rather than as a later exception. |

### 5.2  Provisioning steps  (T-5 to T-0)

1. Validate the request against the HR and user system of record. If the record does not exist, return it to HR — who own the process and can resolve it at source. Do not create a manual identity to bridge the gap.
2. Create the identity per ACC-02. Do not deviate from the naming standard to accommodate a personal preference or a departmental habit; raise a change against ACC-02 instead. Local deviations are how a convention becomes contested.
3. Assign the licence for the account class per §3 and record it (M365-20).
4. Confirm that dynamic group membership resolves. Dynamic groups derive from the HR and user system of record attributes, so an identity created before its record in the HR and user system of record is complete will land outside its groups and the person will appear to have no access on day one. Verify, do not assume (M365-04).
5. Grant the role default entitlements only. Anything beyond the default requires the manager’s written approval recorded on the ticket — not a verbal agreement, and not an inference from what the previous post-holder had.
6. Where the role needs a departmental shared mailbox, raise it through M365-03 so the mailbox acquires a named owner. Do not add the person directly.
7. Provision the device per DEV-01 and record the assignment against the person, including asset tag.
8. Issue a Temporary Access Pass rather than a plain password where the platform supports it, so that first sign-in forces MFA registration and no shared secret ever exists in an email (ACC-03).
9. Deliver credentials in person or to the manager. Never to a personal email address. A reset request from a personal email account, on behalf of a differently-named person, is a classic social-engineering move; the control that stops that class of request is ACC-06, and it starts here.
10. Record on the ticket: account name, licence assigned, groups resolved, device asset tag, MFA enrollment deadline, and who received the credentials.
### 5.3  Day one — actions by the person

1. Sign in, set a password meeting ACC-04, and register at least two MFA methods within 24 hours (ACC-03).
2. Read and acknowledge the organization’s acceptable use policy, including the prohibition on credential sharing. Where that policy already exists, ACC-15 governs how it is presented and evidenced at this step rather than replacing it.
3. Confirm mailbox, Teams and file access. Report any gap on the original provisioning ticket rather than opening a new one, so that the joiner record stays in one place.
### 5.4  Exit criteria

The account is not “provisioned”, and the ticket does not close, until every one of these is true:

- The person has signed in successfully.
- Two MFA methods are registered.
- The correct licence is assigned.
- Dynamic group membership has resolved and been observed, not assumed.
- Any device is recorded against the person and is compliant per DEV-02.
- The Acceptable Use acknowledgement is on file.
## 6.  Mover procedure

> **The governing principle**
> A role change is a removal followed by an addition. The addition always happens, because the person needs it and will ask. The removal is the step that gets skipped — and it is the step that matters. Every stale entitlement in the tenant was once a legitimate grant to someone whose role subsequently changed.

### 6.1  Trigger

HR submits a Role Change notification on or before the effective date, naming the outgoing role, the incoming role, the new manager and the effective date.

### 6.2  Steps

1. Retrieve the person’s current entitlements in full: group memberships (assigned and dynamic), shared mailbox membership, SharePoint and OneDrive permissions, mailbox and calendar delegations, application roles, privileged roles, and device assignments.
2. Produce the delta against the incoming role’s default entitlement set. Attach it to the ticket. This list is the deliverable of the step, not a by-product.
3. Remove every entitlement not in the incoming role default. Retention of a legacy entitlement requires the new manager’s written justification on the ticket and expires automatically after 90 days unless renewed.
4. Add the incoming role’s defaults.
5. Where the person owned a shared mailbox, Team or SharePoint site for the outgoing department, reassign ownership before removing their access. An unowned site is where link rot starts; broken-link tickets sit past SLA for exactly this reason.
6. Where the person sponsored guest accounts, reassign sponsorship or expire the guests (ACC-10).
7. Update the device assignment if the device moves with the department, and re-scope any device-based configuration.
8. Record the before and after entitlement lists on the ticket. This is the evidence the quarterly access review in ACC-17 depends on.
### 6.3  Special case — an existing account holder becoming a temporary worker

The person retains their user identity. Departmental access is provisioned per ACC-02 and ACC-09, and it expires at the end of the engagement, even though the person’s main relationship with the organization continues. The two relationships must expire independently; conflating them is how temporary workers end up holding departmental mail access with no revocation trigger.

## 7.  Leaver procedure

### 7.1  Timing by notice type

| Notice type | IT action | Deadline |
|---|---|---|
| Planned separation, notice given | Complete the §7.2 checklist; disable sign-in at end of last working day. | On the date and time HR states |
| Immediate or involuntary | Disable sign-in, revoke all sessions and refresh tokens, remove registered MFA methods, disable assigned devices. Then complete the full checklist. | Sign-in disabled within 1 hour of HR instruction |
| Death in service | Disable and preserve. No forwarding, no delegation without Head of IT approval. | Within 4 hours; Head of IT notified immediately |
| Non-staff end user leaving | Per ACC-12. | Per ACC-12 |
| Part-time or fixed-term staff, contract ended and not renewed | Disable at the end of the engagement + 30 days. | Automated from the HR and user system of record |
| Vendor or contractor, engagement ended | Disable at the stated end date. | Automated by account expiry |

### 7.2  Steps, in order

1. Disable sign-in. Do not delete the account. Deletion destroys the mailbox and the OneDrive with it, and both are frequently needed after the person has gone.
2. Revoke active sessions and refresh tokens, and remove registered MFA methods. A disabled account with a live token is not disabled.
3. Remove all group memberships, shared mailbox membership, delegations, SharePoint and OneDrive permissions, application roles and privileged roles.
4. Reassign ownership of every SharePoint site, Team and shared mailbox the person owned, before their access is removed. Record the new owner.
5. Handle the mailbox. Where the department needs continued access, convert it to a shared mailbox — this preserves all mail and calendar and needs no licence below 50 GB. Where it does not, place the mailbox under a retention hold and make it inactive. Either way the sign-in stays blocked and the password is reset, because a converted shared mailbox still answers to the departed person’s original credentials until it does not. Do not configure forwarding to a personal address under any circumstances. The order in §7.3 is not optional.
6. Handle the OneDrive: grant the manager delegated access for 30 days and MOVE institutional records into the department’s SharePoint site inside that window. For files, unlike mail, the move is the retention — an unlicensed OneDrive is not a preserved OneDrive (§7.3). The alternative is a bespoke recovery project for one departure (M365-12).
7. Reclaim the licence only once the mailbox is shared or inactive under hold AND the OneDrive move is confirmed complete — in that order, verified, not assumed (M365-20 Appendix A).
8. Confirm device return per DEV-15. Before wiping, verify the BitLocker recovery key is escrowed in Entra ID. Some devices may have no escrowed key at all, so this check must be performed and recorded rather than presumed (DEV-03).
9. Expire or reassign every guest account the person sponsored.
10. Record completion of each step on the ticket. A leaver ticket with unrecorded steps is not closed, whatever its status field says.
### 7.3  Retention

> **Two years is a floor, not a window**
> Mailbox and OneDrive content — both files and email — is retained for a MINIMUM of two years after separation. There is no maximum. Nothing is deleted at the two-year mark; two years is the point before which deletion is not permitted at all.
> Deletion after that floor is a deliberate, approved act with a recorded reason, not an automatic expiry. The default in the absence of a decision is to keep.

| Asset | Treatment | Notes |
|---|---|---|
| Sign-in | Disabled on the separation date. | Not subject to retention — access and data are separate questions. |
| Mailbox (email) | Retained a minimum of two years. No maximum. | Shared mailbox (unlicensed, under 50 GB) or inactive mailbox under a retention hold. Both survive licence removal. |
| OneDrive (files) | Institutional records MOVED to the departmental SharePoint site inside the 30-day manager window, and retained there a minimum of two years. | The default route. Free, supported, and it makes the content usable rather than archived. Alternatives in M365-16 §5. |
| OneDrive residue after the move | Whatever the manager judged personal or superseded. No retention obligation attaches to it. | If anything institutional is still there when the window closes, the window has not closed. |
| Teams chat and channel messages | Per tenant retention policy, which must be set to meet the same two-year floor. | Check this. A 90-day chat policy silently undercuts the decision (M365-16). |
| Licence | Reclaimed after the mailbox is shared or inactive and the OneDrive move is confirmed — in that order. | Sequence matters. Reclaiming early is how content is lost. |
| Account object | Retained disabled for as long as any associated data is retained. | The account object anchors a shared mailbox. Deleting it destroys what it anchors. Disable, do not delete. |

> **Mail and files do not behave the same way, and the difference decides the procedure**
> A two-year floor with no maximum is the right call for an organization that keeps records. Implemented naively — by leaving the account licensed — it means paying for a licence for every person who ever left, forever. So the floor has to be delivered without a licence. For mail that is straightforward. For files it needs a deliberate choice between four routes, only one of which is free.
> MAIL. A shared mailbox needs no licence up to 50 GB, and an inactive mailbox under a Microsoft 365 retention hold survives licence removal indefinitely. Both are documented, supported mechanisms. The floor is met at no cost.
> FILES. An unlicensed OneDrive is not simply dormant. Microsoft places unlicensed OneDrive accounts into read-only mode after 60 unlicensed days and archives them after 93, and a cumulative 365-day nonpayment clock carries a deletion risk beyond that. Retention policies and legal holds ARE honoured through the archived state — but only while archive billing is enabled; unpaid, the content is at risk at 365 days despite any hold. Reassigning the OneDrive’s owner does not change this: Microsoft states that enforcement does not use the owner property to validate licensing, and that changing it is an unsupported state.
> IF YOUR TENANT IS AN EDUCATION OR NONPROFIT TENANT, check Microsoft’s current guidance: some enforcement changes have been stated not to apply to EDU customers. The scope of that exclusion is not stated cleanly enough to build a two-year retention commitment on. Obtaining it in writing from Microsoft is an open prerequisite (§9.2) and would materially simplify this procedure.
> THEREFORE, unless an exclusion has been confirmed in writing for your tenant, the default is to MOVE the records: institutional content goes into the departmental SharePoint site during the 30-day manager window, where a retention policy holds it and colleagues can actually use it. It costs nothing, depends on no billing toggle, and is what Microsoft itself recommends for a OneDrive with no active owner. The three alternatives — a longer tenant active-storage period, paid archive, or a retained licence — are set out in M365-16 §5 with their costs.

Check these behaviours against Microsoft Learn before relying on them (Exchange Online shared and inactive mailboxes; OneDrive retention and deletion; Manage unlicensed OneDrive user accounts; Standard storage for unlicensed OneDrive accounts). The full comparison of the four routes is M365-16 §5; the ordered reclamation checklist is M365-20 Appendix A. Confirm the behaviour once on a test account before the first separation is processed under this rule — verify, do not assume.

## 8.  Service levels

| Request type | Target |
|---|---|
| Joiner, five or more business days’ notice | Ready on the start date |
| Joiner, under five business days’ notice | Two business days from a complete request |
| Mover | Three business days from the effective date |
| Leaver, planned | Completed on the date HR states |
| Leaver, immediate | Sign-in disabled within one hour; full checklist within one business day |
| Access beyond the role default | Three business days from written manager approval |

These are proposals for ratification under GOV-06, not commitments already in force. Where a service desk is already carrying P3 tickets months past their targets, that shows the current matrix is not operating, rather than that these targets are unrealistic.

## 9.  Decisions

Three decisions shape how this document is applied. Record your answers here so that the next reader can see what was decided, by whom, and what still needs doing.

| Decision | Outcome | Where it landed |
|---|---|---|
| D2 — onboarding ownership | Recommended: onboarding is HR-owned. HR takes the intake and feeds the departments that must act. | §4 callout and RACI; §5.1 |
| D3 — retention after separation | Recommended: minimum two years for mailbox and OneDrive, files and email, no maximum. | §7.3 |
| D1 — temporary-worker naming | Open: both conventions are drafted, and ACC-02 §5 recommends the role-group model. See §9.1. | ACC-02 |

> **9.1  Departmental temporary-worker account model — owner: ACC-02**
> A common pattern gives departmental temporary workers a second account, with a suffix appended to their original user account. Extending that pattern to the next department is usually when it gets contested inside IT.
> The alternative is a role-group model on the single user identity, with departmental access granted by group membership and removed at the end of the engagement.
> Both conventions are drafted in ACC-02 as Option A and Option B, and ACC-02 §5 recommends the pivot to Option B. This SOP refers throughout to “the departmental access account or role group per ACC-02”, so it does not need rewriting whichever option is adopted.

> **9.2  What D3 requires before the first separation under it**
> Once the two-year floor is decided, three things must be true in the tenant before the first separation is processed under it, and none of them is decided by this document:
> 1.  Mailbox behaviour confirmed by Tier 3 on a test account — shared conversion and inactive-mailbox hold both surviving licence removal. If the organization is still in Exchange hybrid at that point, the on-premises Set-RemoteMailbox -Type Shared step must be confirmed as part of the same test: without it, directory sync reverts the conversion and the mailbox contents can be lost permanently within 30 days.
> 1a. If your tenant is an education or nonprofit tenant, confirm in writing whether it is excluded from unlicensed-OneDrive enforcement. If it is, there is no archive or deletion clock on a leaver’s OneDrive and no paid route is needed to meet the two-year floor. An exclusion that comes from licensing is re-checked at each renewal and at the M365-16 annual review (M365-16 §5.2).
> 1b. The OneDrive route chosen and configured — move to SharePoint (default), tenant active-storage period, paid archive, or retained licence — per M365-16 §5, with the cost recorded.
> 2.  Teams chat and channel retention raised to meet the same two-year floor, or the decision is quietly defeated for one content type (M365-16).
> 3.  HR concurrence recorded for employee records, and a view from counsel on any record class carrying an external retention obligation longer than two years — the floor is a minimum, and some records will exceed it.

## 10.  Records

| Record | Held in | Retention |
|---|---|---|
| Completed account request, with all §5.1 fields | Service desk ticket | 3 years |
| Written manager approval for access beyond role default | Service desk ticket | 3 years, or until the entitlement is removed — whichever is later |
| Mover before/after entitlement lists | Service desk ticket | 3 years |
| Leaver checklist with each step evidenced | Service desk ticket | 3 years |
| Identity verification method used (ACC-06) | Service desk ticket | 3 years |
| Device assignment and return, with escrow check | Asset register + ticket | Life of the asset + 1 year |

## 11.  Related documents

| ID | Title | Relationship |
|---|---|---|
| ACC-02 | Account Naming, UPN & Identifier Standard | Supplies the naming rule this procedure applies. Holds open decision 9.1. |
| ACC-03 | MFA Enrollment, Reset & Account Recovery | Governs the MFA registration required at §5.3 and revocation at §7.2. |
| ACC-06 | Identity Verification Before Any Account Action | Governs credential handover at §5.2 step 9. |
| ACC-09 | Temporary Worker & Departmental Access Account Standard | Governs the special case at §6.3. |
| ACC-10 | Guest & Sponsored External Account Standard | Governs guest sponsorship reassignment at §6.2 and §7.2. |
| ACC-12 | Separation, Retiree & Former-Member Disposition | Governs user and retiree leaver treatment. |
| ACC-15 | Acceptable Use & Credential-Sharing Standard | Governs the acknowledgement at §5.3. Aligns to your existing acceptable use policy. |
| ACC-17 | Periodic Access Review & Entitlement Recertification | Consumes the entitlement records this procedure produces. |
| M365-03 | Shared Mailbox Request, Provisioning & Ownership | Route for shared mailbox access at §5.2 step 6. |
| M365-04 | Distribution List & Dynamic Group Standard | Explains the membership derived from the HR and user system of record, verified at §5.2 step 4. |
| M365-12 | OneDrive Appropriate Use & Institutional Data Boundary | The boundary rule that makes §7.2 step 6 enforceable. |
| M365-20 | License Assignment, Reclamation & Cost Attribution | Licence assignment and reclaim. |
| DEV-01 | Device Enrollment & Lifecycle | Device provisioning at §5.2 step 7. |
| DEV-03 | Disk Encryption & BitLocker Recovery Key Handling | The escrow check at §7.2 step 8. |
| DEV-15 | Device Reassignment, Wipe, Retirement & Disposal | Device return at §7.2 step 8. |
| GOV-06 | SLA Definition, Priority Matrix & Escalation | Ratifies the targets in §8. |

## Appendix A — Joiner checklist

Print or paste into the ticket. Every line is evidenced before the ticket closes.

| Done | Step | Evidence recorded |
|---|---|---|
| ☐ | Request complete against all §5.1 fields | Ticket |
| ☐ | Record in the HR and user system of record validated | HR record ID on ticket |
| ☐ | Identity created per ACC-02 | Account name |
| ☐ | Licence assigned per account class | Licence SKU |
| ☐ | Dynamic group membership observed to resolve | Group list, screenshot or export |
| ☐ | Role default entitlements granted | Entitlement list |
| ☐ | Any beyond-default access carries written manager approval | Approval text on ticket |
| ☐ | Shared mailbox access raised via M365-03, not granted directly | M365-03 ticket reference |
| ☐ | Device provisioned per DEV-01 and recorded | Asset tag |
| ☐ | Temporary Access Pass issued (not a plain password) | Method noted |
| ☐ | Credentials delivered in person or to manager — never a personal address | Recipient named |
| ☐ | Person signed in successfully | Sign-in log |
| ☐ | Two MFA methods registered within 24 hours | Methods listed |
| ☐ | Acceptable Use acknowledged (ACC-15) | Acknowledgement on file |

## Appendix B — Mover checklist

| Done | Step | Evidence recorded |
|---|---|---|
| ☐ | HR Role Change notification received with effective date | Ticket |
| ☐ | Full current entitlement list retrieved | Before list attached |
| ☐ | Delta against incoming role default produced | Delta attached |
| ☐ | Every entitlement not in the new default removed | After list attached |
| ☐ | Any retained legacy entitlement carries written justification and a 90-day expiry | Justification + expiry date |
| ☐ | Incoming role defaults added | After list |
| ☐ | Ownership of sites, Teams and shared mailboxes reassigned before access removal | New owner named |
| ☐ | Sponsored guests reassigned or expired | Guest list actioned |
| ☐ | Device assignment updated | Asset register |
| ☐ | Before and after lists recorded for ACC-17 | Both attached |

## Appendix C — Leaver checklist

| Done | Step | Evidence recorded |
|---|---|---|
| ☐ | Sign-in disabled (not deleted) at the stated time | Timestamp |
| ☐ | Sessions and refresh tokens revoked | Timestamp |
| ☐ | Registered MFA methods removed | Method list |
| ☐ | All groups, shared mailboxes, delegations, permissions and roles removed | Entitlement list |
| ☐ | Ownership of every owned site, Team and mailbox reassigned | New owners named |
| ☐ | Mailbox converted to shared or time-bound delegation applied | Method + window |
| ☐ | No forwarding to any personal address configured | Confirmed |
| ☐ | Manager granted OneDrive delegation, 30 days, to move records out | Window recorded |
| ☐ | Institutional records moved to departmental SharePoint inside the window | Destination site |
| ☐ | BitLocker recovery key confirmed escrowed in Entra BEFORE wipe | Key ID or explicit “none found” + remediation |
| ☐ | Device returned, wiped and recorded per DEV-15 | Asset tag + disposition |
| ☐ | Sponsored guest accounts expired or reassigned | Guest list actioned |
| ☐ | Mailbox shared or inactive under hold; password reset; sign-in blocked | Method + confirmation content survives |
| ☐ | OneDrive institutional records MOVED to the departmental site inside 30 days | Destination site + date the move completed |
| ☐ | Licence reclaimed WITHOUT loss of retained content — verified, not assumed | Date + SKU + verification |
| ☐ | Every step above evidenced on the ticket | Ticket complete |
