# DEV-10 · Remote Access & VPN Standard

*What the VPN is actually for, who gets it, and why most people no longer need it.*

| Field | Value |
|---|---|
| Document ID | DEV-10 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | C. Device Usage |
| Operating tier | Tier 2 — Advanced Technical Services, which already owns VPN. |
| Review cycle | Annually, and whenever a service moves from on-premises to Microsoft 365. |
| Related existing policy | Your organization's internet and network usage policy, if it has one. This standard puts it into practice. |

## 1.  Purpose

This document says what the organization’s VPN is for, who is entitled to it, and under what conditions — so that it is granted deliberately rather than by default, and so that a VPN ticket has an owner and a runbook.

VPN failure tickets are a classic example of tickets that sit past their service target. Part of the reason they age is that nothing states who VPN is for or what a working state looks like, so there is no obvious owner and no definition of done.

## 2.  Two populations, one technology

> **The same tool is serving two very different situations, and only one of them is intended.**
> Staff who need to reach on-premises resources from off site. This is the purpose, and it is legitimate and shrinking.
> People using a VPN to hide where they are signing in from. This tends to surface alongside repeated account blocks and a suspicion of credential sharing, and the usual response is a verbal instruction not to use a VPN or share access. That instruction is correct, but it is only spoken.
> Writing the rule down serves both. Staff get a supported service with a clear entitlement. The second case becomes a published rule the organization can point to, rather than an instruction one staff member gave once.

## 3.  What the VPN is for — and what it is not

| The VPN is for | The VPN is not for |
|---|---|
| Reaching on-premises systems that are not published for external access — file shares while they still exist, internal administrative interfaces, network equipment management. | Reaching Microsoft 365. Outlook, Teams, SharePoint and OneDrive work from anywhere and do not need it. This misunderstanding drives a large share of VPN tickets. |
| Administrative access to infrastructure, by IT staff, from a compliant device. | Making a personal device “safe”. The VPN protects the connection, not the endpoint (DEV-07). |
| A specific application that genuinely requires an on-site source address. | Bypassing a geographic or network restriction, whether the organization’s or somebody else’s. |
| Vendor access to a named system, time-boxed (ACC-11). | Concealing where you are signing in from, or letting somebody else appear to be you (ACC-15 §3). |

The first row of the right-hand column is worth saying to every requester: if what you need is email, Teams or your files, you do not need the VPN and it will not make them work better. Answering that once, in writing, removes a recurring ticket category.

## 4.  Who gets it

| Population | Entitlement | Basis |
|---|---|---|
| IT staff, Tiers 2–4 | Yes, standing. | Infrastructure access is the job. |
| Staff with a stated on-premises need | On request, with the need named. | Reviewed annually; removed when the need ends. |
| Staff generally | Not by default. | Microsoft 365 does not require it (§3). |
| Temporary workers | Only where the specific role requires an on-premises system, approved by the supervisor and time-boxed to the engagement. | ACC-09. |
| Non-staff accounts (members, volunteers, customers) | No. | §7. |
| Vendors and contractors | Time-boxed, to a named system, with a sponsor. | ACC-11. |
| Guests | No. | ACC-10 §5. |

## 5.  Conditions of use

- Multifactor authentication is required. No exceptions, including for IT staff.
- The connecting device must be organization-owned and compliant (DEV-02), or a personal device meeting DEV-07 where that is permitted for the role.
- Split tunnelling is configured so that Microsoft 365 traffic does not traverse the VPN. This improves performance for the user and reduces load on the concentrator — and it reinforces §3 by making the distinction visible.
- Sessions have a maximum duration and re-authenticate. A VPN session that persists for weeks is an unmonitored standing connection.
- Use is logged. Logs are used for troubleshooting and security investigation, per ACC-15 §6.
- The Internet & Network Usage Policy applies to VPN traffic exactly as it does on site.
## 6.  Requesting and removing it

1. The request states the specific on-premises system needed and why Microsoft 365 does not serve it. Tier 2 checks that answer honestly — most requests resolve here without a grant.
2. The manager approves for staff; the supervisor for temporary workers; the sponsor for vendors.
3. Confirm MFA is registered and the device is compliant before granting.
4. Grant through a group, never individually (M365-11 §2), so review and removal work.
5. Set a review date. Annual for staff, end-of-engagement for temporary workers, contract-end for vendors.
6. Remove on separation and on role change (ACC-01 §6.2, §7.2) — this is one of the entitlements most often left behind at a mover.
7. Remove at review where the stated need no longer exists. The need was named at grant precisely so this question is answerable.
## 7.  The non-staff question

Non-staff accounts do not receive organization VPN access. Everything they need, such as Microsoft 365 and the portals, is published for access from anywhere.

Separately, and more importantly: using a personal VPN or proxy to obscure the location an organization account signs in from, or to enable somebody else to sign in as you, is prohibited under ACC-15 §3. That is now a written rule rather than an instruction given in a difficult conversation.

> **A caution worth holding**
> VPN use is not evidence of wrongdoing. People use VPNs for privacy, on public Wi-Fi, and because a device came with one enabled. People who travel or work abroad may use one routinely and entirely legitimately.
> It becomes relevant only alongside other indicators — the ACC-05 §5 repeat ladder, unfamiliar sign-in patterns, or an account blocked repeatedly. Treating VPN use alone as suspicious would be both wrong and corrosive.

## 8.  Where this is going

The VPN’s scope shrinks with every service that moves. Retiring the old network drives removes one of the largest remaining reasons staff need it (M365-13), and application publishing through Entra can remove most of the rest.

- Each time a service moves to Microsoft 365 or is published through Entra, review whether the VPN entitlements that existed for it can be withdrawn.
- The target is a small VPN population — IT staff and a named list — rather than a general staff entitlement.
- This is worth stating as a direction because it changes how requests should be handled today: the question is “what do you need to reach, and can we publish it instead?”, not “should you have VPN?”.
## 9.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| VPN not connecting, entitled user blocked from work | P2 — 4 coverage hours. |
| VPN down for multiple users | P1 at Tier 3. |
| New VPN request, need stated and approved | P3 — 3 coverage days. |
| Request where Microsoft 365 already serves the need | Answered at Tier 1 in the conversation. Not a ticket that ages. |
| Removal on separation or role change | With the ACC-01 procedure. |
| Annual entitlement review | Tier 2, on schedule. |

## 10.  Records

| Record | Held in | Retention |
|---|---|---|
| Entitlement register: person, stated need, approver, review date | IT register | Live + 3 years |
| Requests declined because M365 serves the need | Ticket | 1 year — useful evidence for §8 |
| Connection logs | VPN platform | Per M365-16 |
| Annual review outcomes | Ticket | 3 years |

## 11.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Internet Policy | Your organization's internet and network usage policy | The governing policy. This standard operationalises it. |
| ACC-15 | Acceptable Use & Credential-Sharing Standard | §3 — VPN misuse, and §7 here. |
| ACC-05 | Account Lockout Triage & Escalation | Where VPN use becomes relevant as one indicator among several. |
| DEV-02 | Device Compliance & Configuration Baseline | Condition of use. |
| DEV-07 | Personally-Owned Device Access Standard | Personal devices connecting. |
| M365-13 | File Share Retirement | Removes one of the largest remaining reasons for VPN. |
| ACC-01 | Account Lifecycle | Removal at mover and leaver. |
| ACC-09 / ACC-11 | Temporary worker / Vendor standards | Time-boxed entitlements. |
| GOV-06 | Service Commitments | Supplies §9. |

## Appendix A — “Do I need the VPN?”

Tier 1 desk card, and the source for an end-user article. Most answers are no, and that is good news for the person asking.

|  | What do you need to reach? | Answer |
|---|---|---|
| 1 | Email, Teams, SharePoint, OneDrive | No VPN needed. These work from anywhere, and the VPN will not make them faster. |
| 2 | A portal — the staff portal, the knowledge base, a web app | No VPN needed. |
| 3 | A file on an old network drive | Yes for now — and it is moving to SharePoint, at which point you will not need it (M365-13). |
| 4 | An internal administrative system with no external address | Yes. State which system on the request. |
| 5 | Network equipment or a server | Yes, if you are IT. |
| 6 | “I just thought I should have it” | No. Ask what you are trying to do — there is usually a better answer. |
| 7 | A non-staff account asking for VPN | No. Everything they need is published (§7). |
