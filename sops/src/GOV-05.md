# GOV-05 · Knowledge Base Article Standard & End-User Guide Format

*An SOP is for the person who does the work. An article is for the person with the problem. This is how the second one gets written, published, and kept true — starting from whatever guide library you already have.*

| Field | Value |
|---|---|
| Document ID | GOV-05 |
| Version | 1.0 · Known Good edition, by Kevin Zelman |
| Catalogue domain | D. Cross-Cutting Governance |
| Operating tier | Tier 2 — Advanced Technical Services writes and maintains most articles, because Tier 2 is where the escalated version of every Tier 1 question already lands. Tier 1 identifies what is missing and is the primary consumer. Tier 3 writes for tiers 3 and 4. Tier 4 approves publication of anything stating an organization position rather than a procedure. |
| Review cycle | Annually. The article review cycle in §8 is quarterly and is a different thing — do not conflate them. |
| Basis — adopt, do not invent | Most teams already have a guide library of some kind: a SharePoint or OneDrive folder, a wiki, or a knowledge base inside the ticketing system. Organise it by tier folders (01 - Tier 1, 02 - Tier 2, 03 - Tier 3, 04 - Tier 4 and 05 - All Tiers) and keep whatever guide format already works. Nothing here requires a new site, a new tool, or a migration. This is a consolidation, not a clean start (GOV-01 §8 and §9). |

## 1.  Purpose — a ticket that aged because there was nowhere to point it

Picture a group of staff submitting a set of basic questions about application and email access as a single ticket: “App & Email Access - FAQs from staff”. It goes into SLA violation the same day. Six weeks later it is still open, still in violation, still re-notifying.

There is nothing difficult in it. Every question in that ticket has an answer somebody in IT knows and could give in a sentence. It ages for one reason: answering it properly means writing something down, and writing something down has never been anybody’s job with a name and a date attached to it. Answering it improperly — a long reply to eight people, which is what usually happens — produces the same questions again next quarter from different staff.

Meanwhile the destination usually already exists: a staff resources page, a shared folder, a knowledge base nobody fills. What is missing is not a platform and not a decision. It is a standard for what an article contains, who owns it, when it is reviewed, and what triggers writing one — and a rule that makes writing one somebody’s work rather than somebody’s good intention.

> **The same arithmetic as DEV-17 §1, one level up**
> A question answered in a conversation is answered once, for one person, and the answer is not durable — it exists in a reply nobody can search and in the memory of two people. A question answered in an article is answered for everybody who asks it afterwards, including the people who would have asked next quarter.
> Most help desks are understaffed and most staff wear several hats. There is no version of the plan in which enough people arrive to answer the same question forty times. The only lever available is that the answer becomes a page.
> Which makes documentation a capacity intervention rather than a tidiness project, and it should be resourced and prioritised as one.

## 2.  Adopt, do not invent

The single most useful decision in this document is the one not to design anything.

- The tier folder structure, 01 - Tier 1 through 05 - All Tiers, mirrors the four-tier service model, which means the folder answers the question “who is this for” before a word is written (GOV-01 §8).
- If a guide format is already in use, adopt it as the base format. The best reference example is a guide that is honest, structured, and knows what it does not know (§10).
- A one-page “Desk Sheet — Tiers and Escalation” in 05 - All Tiers is the routing article.
- Whatever page staff are already told to look at becomes the public surface for end-user articles.
What this document adds is the part that is genuinely missing: the required elements of an article (§4), the writing rules (§5), the owner and review date and what happens when it lapses (§8), the trigger that causes an article to be written at all (§9), and the distinction between an SOP and an article (§3) — which is the one people get wrong, and the one that determines whether any of the rest holds.

## 3.  An SOP and an article are not the same document

They cover the same subject and they are different objects with different audiences, different voices and different authorities. Conflating them produces a document that is too internal to publish and too vague to operate.

|  | SOP (governed by GOV-01) | KB article (governed by this document) |
|---|---|---|
| Who it is for | The people who do the work. Tier 1 to Tier 4, and whoever inherits the job. | The person with the problem, right now, who did not want to learn anything today. |
| Voice | Institutional third person. “Tier 2 confirms the cause before acting.” | Second person, present tense. “Check whether it works on your phone.” |
| Shape | Purpose, decisions, procedure, service levels, records, related documents, revision history. | One task, start to finish, with a failure path and a way to reach a human. |
| Contains | Authority, tier assignments, retention periods, open questions, cross-references, the reasoning. | Steps and reassurance. Nothing about tiers, records, retention or reasoning. |
| Length | As long as the subject requires. Six to nine pages is normal. | One screen and one scroll. If it needs more, it is two articles. |
| Names an operating tier | Always. | Never (§5). |
| Where it lives | The SOP library (GOV-01 §8). | The tier folder in the guide library, and the public help page where it is public (§7). |
| Authority | Source of truth. | Derived. Not authoritative on anything. |

> **The rule that holds the whole system together, stated hard**
> EVERY SOP THAT GENERATES END-USER QUESTIONS MUST HAVE AT LEAST ONE ARTICLE AS ITS PUBLIC FACE. An SOP whose subject the community touches — passwords, printing, rooms, phishing, file shares, devices — is not finished when it is approved. It is finished when the article derived from it is published.
> THE SOP IS THE SOURCE OF TRUTH AND THE ARTICLE IS DERIVED FROM IT. Never the reverse. Every article records, in a field the reader does not see, which SOP and which section it came from.
> A DIVERGENCE IS A DEFECT, AND WHICH DOCUMENT IS DEFECTIVE DEPENDS ON WHICH IS RIGHT. If the article no longer matches the SOP, the article is fixed. If the article is right about what actually happens and the SOP is wrong, that is a defect report against the SOP under GOV-01 §10, and it takes priority over writing new documents — because the SOP is what somebody will follow in six months.
> WHY THIS MATTERS MORE THAN IT SOUNDS: if an article is allowed to become the source of truth, then the organization’s actual procedure is whatever the last person to edit a web page believed at the time. There is nothing to audit, nothing to approve, and no way to tell a correction from a drift. The two-document arrangement is not bureaucracy — it is the only version in which either document can be trusted.

The practical consequence for a writer: never write an article about something with no SOP behind it. If the underlying procedure does not exist, the article cannot be derived and you will invent it — which is §10, and which is the failure this catalogue was commissioned to stop.

## 4.  The article template and its required elements

Appendix A is the template ready to copy. This section says what each element is for, because a template whose purpose is not understood gets filled in mechanically and then does not work.

| Element | What it must contain | Why it is required |
|---|---|---|
| A title written as the question the person actually types | “I can’t sign in to my email”. Not “Authentication Remediation Procedure”, not “Account Access”, not “Email Guide”. | The title is a search query, not a heading. The test is literal: would somebody type this into a search box? If not, the article will not be found, and an article nobody finds has cost writing time and returned nothing. |
| Who it is for | One line: staff, contractors, guests, or everyone. Say it plainly. | A user reading a staff-only procedure gets to step 4 and hits a door. Ninety seconds wasted and one ticket generated, by an article that was trying to help. |
| What you need before you start | Your phone. Your employee ID. Access to a second device. Ten minutes. Your manager’s approval. | The largest single cause of an abandoned article is discovering at step 6 that you needed something you do not have. Putting it at the top costs one line and saves the whole attempt. |
| How long it takes | “About two minutes.” “About ten minutes, and you will need to restart.” | People abandon tasks whose length is unknown, and start ones whose length is stated. It also sets an expectation that stops a three-minute wait becoming a ticket. |
| Numbered steps, second person, one action each | One action per step. The exact name of the button. What you should see afterwards. | “What you should see” is the part usually left out and the part that lets a reader tell whether it worked. Without it they cannot self-diagnose and every deviation becomes a contact. |
| What to do if it does not work | REQUIRED. The two or three most common reasons it fails, and what to do about each. | An article that stops at the happy path sends the reader to the queue with no more information than they started with — and it teaches them that articles do not help. This element is not optional and an article without it is not published. |
| When to contact whom, and what to include | The actual address or number. What to tell us so we do not have to ask. | Half the value of an article can be a better ticket. A reader who arrives having tried three things and can say which three has saved the desk a round trip (GOV-02). |
| Footer metadata — not shown to the reader | Owner by name. Last reviewed. Review due. Source SOP and section. Tier folder. Whether it carries screenshots. | §6, §8 and §3 all depend on these five fields existing. An article without an owner and a review date is an article that will be wrong and nobody will know when it happened. |

## 5.  The writing rules

- Second person. “You”, never “the user”. An article addressed to “the user” was written for the writer.
- Present tense, active voice, imperative steps. “Click Save.” Not “Save should then be clicked” and not “the system will then require the user to save”.
- One task per article. If the title needs an “and”, it is two articles. This is the rule most often broken, because writing one long article feels more efficient and reads as a wall.
- No internal jargon. Not SSPR, not Entra, not tenant, not MDM, not conditional access, not provisioning, not MFA registration campaign. Say what the person sees on their screen. Where a product name is genuinely on the screen, use it exactly and only there.
- NO TIER NAMES IN END-USER TEXT. “Tier 2 will contact you” tells a staff member nothing they can act on and exposes an internal structure that is not theirs to navigate. Write “someone from IT will get in touch”. The tier model is load-bearing behind the article and invisible in it (§12).
- Name the button exactly as it appears, including its capitalisation. If it says “Get started”, do not write “click Begin”. A reader who cannot find the button you named assumes the article is out of date and stops trusting it — and they are usually right to.
- No individual names, extensions or ticket numbers. Roles and shared addresses only. An article naming a person is wrong the day that person changes role, and it routes work around intake to somebody’s inbox — which is exactly the pattern GOV-02 exists to stop.
- Say what will happen next when the reader cannot see it. “You will get an email within about ten minutes.” Silence after step 7 is what generates the follow-up contact.
- Do not explain the architecture and do not apologise for it. The reader wants the task done. One sentence of “why” is occasionally worth it where it changes behaviour — “we ask for this because it is what stops somebody else resetting your password” — and never more than one.
- Write the failure path in the same warm voice as the success path. The person reading “if it does not work” is already annoyed, and a curt sentence there does more damage than anywhere else in the article.
- No dead ends. Every path in an article ends with either a completed task or a way to reach a person.
- Formal, precise English in SOPs; plain, warm, ordinary English in articles. An article is not a place to perform institutional voice.
## 6.  Screenshots, and the honest cost of them

Screenshots are the most useful element in an article and the most expensive to own. They date faster than the text, because Microsoft changes its interfaces continuously and without notice, and a screenshot that no longer matches the screen is worse than no screenshot at all — it tells the reader confidently that they are in the wrong place.

- Use one where the screen is visually ambiguous, or at the single step where people get lost. Not at every step. Ten screenshots is ten maintenance obligations attached to one article.
- Crop tight to the thing being pointed at. A full-screen capture ages the moment a wallpaper, a taskbar or a browser chrome changes, none of which the article is about.
- Annotate — a box or an arrow. Do not rely on the reader finding the small thing you meant.
- NEVER capture real data. No real user record, no real name, no real ticket, no real mailbox, no real address list. Use a test account, and check the browser tabs, the notification badges and the sidebar before saving — that is where real data leaks into a screenshot (M365-15).
- Record in the register which articles carry screenshots. When Microsoft changes an interface, that field turns a search across the whole library into a short review list. It is one column and it is the difference between a maintainable library and a hopeful one.
- Where an interface is actively changing this quarter, publish the text-only version now and add screenshots when it settles. Text describing a button survives a visual redesign; a picture of the old button does not.
- A short screen recording is sometimes the right answer and carries the same maintenance burden, plus the burden of captions. Treat it as a considered choice, not a shortcut.
## 7.  Where an article lives

The folder is the audience, not the topic. This is the only rule needed to file correctly, and it is worth stating because the instinct is to file by subject.

| Folder | What goes in it | Read by |
|---|---|---|
| 01 - Tier 1 | Everything the front door uses and hands out: passwords, sign-in, lockouts, MFA, printing, Wi-Fi, peripherals, room basics. | Tier 1, and end users. The largest folder and the one with the highest return. |
| 02 - Tier 2 | Imaging, enrollment, MDM, permissions, room AV recovery, telephony devices, patch handling. | Tier 2. Internal, procedural, and frequently the derived version of a longer SOP. |
| 03 - Tier 3 | Authentication, SSO and claims, integrations, servers, tenant configuration. | Tier 3. Expert notes, and the smallest folder. |
| 04 - Tier 4 | Approval routes, positions, cost and licence questions, escalation of decisions. | Management. Mostly pointers into SOPs rather than tasks. |
| 05 - All Tiers | The Desk Sheet, the tier test, the escalation and redirection table, anything everybody needs. | Everybody. Adopted as is. |

- A printing article that end users read lives in 01 even though its subject is a printer, because 01 is the audience. A printing article about driver deployment lives in 02, for the same reason.
- An article may be public — published on the help page — or internal. Public articles are also the Tier 1 folder’s content; the folder is the store and the help page is the surface.
- One source, two surfaces. The surface is not edited independently of the source. The moment somebody corrects a typo on the help page and not in the library, the organization has two articles that disagree, and the reader has no way to tell which is current.

> **Open — decide how the help page is produced**
> How the public help page is produced from the library has not been decided: authored directly on the page, embedded from the library, or linked to it. The three have different divergence risks and different amounts of work.
> IT’s recommendation is the cheapest and most robust: the library holds the article, the help page links to it or embeds it, and nobody edits the page. A copy is a second document, however carefully it is made and however good the intention behind it.
> ACTION: decide before the first ten articles are published, because retro-fitting a single-source arrangement across a populated library is considerably more work than starting with one.

## 8.  Owner, review date, and the staleness problem

> **An out-of-date article is worse than no article, and this is the reason the review cycle is a rule rather than an aspiration**
> A reader with no article raises a ticket. That costs the department fifteen minutes and it works.
> A reader with a wrong article follows it, fails, loses ten minutes, raises the ticket anyway, and now believes the organization’s documentation does not work. That belief is expensive and it is durable: the next time there is an article, they will not read it. One wrong article can cost the trust that fifty right ones were building.
> It also generates two pieces of work instead of one — the original problem and a correction to the article — and the correction is the one that will not get done.

- Every article carries a named owner. A person, not a team and not “IT”. A team does not review anything; a named person does, or notices they have not.
- Every article carries a review date, set when it is published and visible to the owner.
- Default review interval: twelve months. Six months for anything covering a Microsoft 365 web interface, because those change without notice. Three months for anything touching something in flight — an Intune enrollment wave, an identity-provider move, a ticketing system cutover, a file share retirement (M365-13), a vendor’s MFA deadline.
- AN UNREVIEWED ARTICLE PAST ITS DATE IS UNPUBLISHED, NOT LEFT UP. This is the rule that makes a review date mean something, and it is the only version that works: unpublishing is reversible and takes a review to undo, whereas leaving a wrong article up is a decision nobody made and nobody can see.
- A review is five minutes of doing, not reading. Follow your own steps on a test account. Reading your own article confirms that you still agree with yourself, which is not the question.
- Reviewed with no change is a real outcome: the date moves, the reviewer is recorded, nothing else happens. Most reviews are this, and pretending otherwise is what makes people avoid the cycle.
- When an owner leaves or changes role, their articles are reassigned as part of the leaver procedure, in the same step that reassigns site and mailbox ownership (ACC-01 §7.2). Orphaned articles are how a library rots without anybody deciding to let it.
- A reader-reported error is a defect and outranks writing a new article. Two coverage days (§14). Nothing else in this document takes priority over it.

> **Open — decide who unpublishes**
> Who actually unpublishes, and how. IT’s recommendation: the register owner unpublishes on the date, automatically and without discussion, notifies the article owner, and reinstatement requires a completed review. No negotiation, no grace period, no exception for a busy month.
> The first time this happens to a useful article that somebody simply had not got to, it will be unpopular, and there will be a good argument for making an exception. Making that exception is how the rule stops existing. Better to publish the rule now, warn everybody twice, and hold it.
> ACTION: confirm the mechanism and who holds it before the library exceeds twenty articles, which is the point at which the review workload becomes real.

## 9.  How a ticket becomes an article

> **The third identical ticket is a documentation defect, not a support event**
> Two people asking the same question is a coincidence. Three is a pattern, and continuing to answer it individually is a decision to keep paying for it — forty times a quarter, at fifteen minutes each, for as long as the organization operates the service.
> So the third occurrence stops being a support event and becomes a defect with an owner and a due date, exactly like a bug. That reframing is the entire mechanism of this section.

1. Tier 1 or Tier 2 flags the third occurrence, against the ticket category (GOV-02). The flag is a field, not a conversation, and it takes ten seconds.
2. The flag creates one article task with a NAMED OWNER and a DUE DATE. Not a backlog entry, not a note in a meeting. An unowned documentation task is a documentation task that will not happen, and the FAQ ticket in §1 is the evidence.
3. The default owner is the tier that resolves the ticket, because they already know the answer and writing it down is fifteen minutes rather than an hour of research.
4. Answer the third ticket normally. The article does not hold up the person who asked; it prevents the fourth person needing to.
5. Publish within ten coverage days of the flag (§14). Then reply to the requester with the link — which is both a courtesy and a test of whether the article is any good.
6. Monthly, check the top ticket categories by volume against the article list. A category in the top ten with no published article is a gap with a name written against it, reported with the GOV-02 numbers.
### 9.2  The other three ways an article gets written

- A new service going live. The article is a launch deliverable, in the same list as the licence and the configuration — not a follow-up item. A service launched without an article generates its own first wave of tickets, and everybody involved will be too busy to write it then.
- An SOP being published. Its public face is written within ten coverage days of approval (§3). This is the single largest source of articles over the next two phases, because most SOPs have none.
- A member of Tier 1 saying “I explain this every day”. That sentence is worth more than any report, and it should be treated as a valid trigger on its own without waiting for three tickets to prove it.
### 9.3  The FAQ case — what to do with a ticket like the one in §1

The staff FAQ ticket is not one article. It is probably six: signing in, email on a phone, resetting a password, getting access to an application, sharing a file with somebody outside the organization, and what to do about a suspicious message.

1. Break the ticket into its constituent questions. One article each.
2. Write the two or three that are most asked. Do not attempt all six before publishing any — a partial answer published this week beats a complete one that never ships.
3. Reply to the staff who raised it with the links, an honest acknowledgement of how long it has taken, and a note of which questions are still coming.
4. Close it. A six-week-old ticket converted into three permanent articles is a good trade, and it is the trade the department needs to start making routinely rather than exceptionally.
## 10.  Honesty about what is not known

A good Tier 1 password-reset guide does something unusual and admirable: it records its own gaps. About the most important one, a real guide said:

> **“Identity verification is not documented anywhere… That is the single most important missing piece in this guide, and it is deliberately left blank rather than invented.”**
> It then names four more gaps: no recovery path for accounts with no MFA registered, unclear Tier 1 visibility of self-service reset, an undocumented password policy, and unresolved access to the desk’s account-management tool.
> That is the standard this document requires of every article in the library, and it is worth being explicit about why it is a strength rather than an embarrassment. Four of those five gaps were closed within a fortnight, by ACC-04 and ACC-06 — precisely because they were named. A gap that is written down gets fixed. A gap that is papered over with a plausible-sounding step gets followed, by somebody who will then do the wrong thing confidently.
> An invented step is the worst possible output of a documentation project, because it has the authority of a published article and none of the truth of one.

- Where an article cannot state a step because the underlying answer does not exist, it says so, names what is missing, and does not invent it. In an internal guide, in those words.
- A named gap carries an owner and, where one exists, a date. “Not yet decided” with a name attached is a useful sentence; “not yet decided” alone is an excuse.
- Gaps are collected into the register, which turns the article library into a live list of what the department has not decided — one of the more valuable management artefacts available at this stage, and free.
- An article whose gap makes it unusable is not published. The gap is escalated instead, because publishing an article that cannot be followed is worse than the silence it replaces (§8).
- For a public article the calculation is slightly different: a reader does not need to see the organization’s internal uncertainty, and exposing it unnecessarily undermines confidence for no gain. But the article must never fill the space with a plausible instruction. Where a public article cannot answer, it routes to a person — which is honest, useful, and the reason §4 requires a contact route in every article.
- This applies to the SOPs too (GOV-01 §7). It is the same discipline, and the guide got there first.
## 11.  Measuring whether articles work, without pretending

The standard claim for a knowledge base is ticket deflection. It cannot be measured honestly at this scale, and it is better to say so than to build a number that will be quoted for years.

- You cannot count the tickets that were not raised. Every deflection figure is a modelled estimate with the answer chosen in advance.
- Page views do not distinguish “solved it” from “read it, gave up, and rang a colleague instead”. A popular article and a confusing one look identical.
- The ticket baseline is rarely clean enough to support a before-and-after. A typical export mixes in booking appointments and automated alerts, attribution needs name and email heuristics, and the source figures often fail to reconcile. Any percentage computed on top of that is a percentage of an unknown.
So the practical proxy: track whether the ticket categories that have articles shrink. It is directional rather than proof, and it is honest about being directional.

| Measure | How | What it does and does not tell you |
|---|---|---|
| Volume in a ticket category that has a published article | Month over month, compared like for like — September against September, not September against July. | The best available signal. Confounded by seasonal peaks, headcount changes and any change to the service itself, so it is read as a direction rather than a result. |
| Number of top-ten categories with no published article | One number, monthly, from GOV-02 reporting. | The single most useful figure in this section, and the one to report upward. It is a coverage measure, not an outcome measure, and it should be described that way every time it is quoted. |
| Tier 1 first-contact resolution within a category | From the ticket record. | Answers the more tractable question: did the article let the front door finish the job instead of escalating? A genuine capacity effect, and easier to attribute than deflection. |
| Repeat contacts from the same person in a category | From the ticket record. | A falling repeat rate suggests the article resolved the underlying confusion rather than the immediate instance. |
| Article page views | From the platform. | The weakest measure. Useful only for spotting an article nobody can find — a zero-view article is a filing or titling problem (§4), not a subject problem. |
| Reader-reported errors | From the ticket record. | Counter-intuitively a good sign in a young library: it means people are reading and trust the correction route. A library with no reported errors is more likely unread than perfect. |

And the honest closer: none of this proves the library is worth what it costs. What will prove it is that the third identical ticket stops arriving, and the front door will feel that months before it can be shown in a number. Report the coverage figure and the category trend, describe both as directional, and do not build a deflection dashboard — a fabricated metric in a governance document is the same defect as an invented step in an article (§10).

## 12.  The published tier pages

Publish the four-tier model with names people remember. Known Good uses Tier 1 the front door, Tier 2 the living space, Tier 3 the attic and Tier 4 the homeowners, with one governing rule (“Escalation changes the TIER, not the QUEUE”), a four-question tier test, and a redirection card that sorts every request into IT, the usual departments, or everyone else (GOV-02 §7).

- Articles attach to that model rather than describing a second one. The tier folder is the audience (§7); the Desk Sheet is the routing article; the redirection table is what stops an article sending a reader to the wrong desk.
- An article that routes a reader somewhere uses the redirection card and the staff directory rather than inventing a destination. Sending a user to the service desk address for something HR owns is a wrong answer delivered efficiently.
- The tier pages are internal. End-user articles never mention a tier (§5), so the model is invisible in the public text and entirely load-bearing behind it.
- Where an article’s subject crosses desks — a meeting room problem that is partly AV and partly a user device — the article says who to contact for which, in the reader’s terms, and the internal escalation is not the reader’s problem.
## 13.  What happens to earlier documentation efforts

Most teams already have earlier attempts: a master SOP list, a priority list, an SOP template and some rough notes, often in Loop, OneNote or a wiki. Somebody built those before the catalogue existed, and they were right to. They are an asset and should be treated as one.

| Workspace | What it is | What happens to it |
|---|---|---|
| A master SOP list | An index of intended SOPs, predating the published register. | Reconciled into the published register under GOV-01 §9. Anything in it that is not in the catalogue is added to the catalogue. The register is the survivor; the old page keeps a pointer to it and nothing else. |
| A priority list | A prioritisation of the documents that matter most. | Checked against the delivery phases and priorities. Where it disagrees with the phasing, that disagreement is worth reading — it is somebody’s independent judgement about the same queue. Then closed, with a pointer. |
| An SOP template | An SOP template. | Compared with the format these documents use. Either it becomes the template of record, or the differences are recorded and it is explicitly superseded. One template, either way, and the decision is written down rather than left to whichever a writer finds first. |
| Rough notes | Working notes. | Kept as working notes for the life of the project, explicitly marked as not a source of truth, and archived when the project closes. Working notes are useful and they are not documentation. |

> **Reconciled, not maintained in parallel**
> Two registers is worse than either register alone, because every reader now has to know which one is real, and the answer will differ by person. The same is true of two templates and two article libraries.
> An old page holding a pointer to the register is fine and even helpful. An old page holding content is a second source of truth, and it will be found and used by somebody a year from now who has no way of knowing it was superseded.
> One further point, which is not procedural but matters more than most of this document: the person who built these workspaces is told what happened to their work, and credited for it. The fastest way to stop people documenting anything is to have their effort quietly absorbed and their name removed. This catalogue depends on people continuing to write things down voluntarily.

## 14.  Service levels

| Activity | Commitment (per GOV-06) |
|---|---|
| Correction to an article reported as wrong | 2 coverage days. A wrong article is a defect and outranks writing a new one (§8). |
| Article task raised after a third identical ticket | Within 2 coverage days of the flag (§9). |
| Article written and published from a flag | 10 coverage days from the flag. P3. |
| Article for a newly approved SOP | 10 coverage days from approval. |
| Article for a new service | Before the service goes live. A launch deliverable, not a follow-up. |
| FAQ-style ticket broken into articles | 10 coverage days, partial publication accepted (§9.3). |
| Quarterly review batch | On schedule. Reviewed with no change is a valid outcome. |
| Unpublishing an article past its review date | Automatic on the date. Not a judgement and not negotiated (§8). |
| Reinstating an unpublished article | On completion of a review. Same day. |
| Monthly coverage report — top-ten categories with no article | On schedule, to Tier 4, with the GOV-02 numbers. |

## 15.  Records

| Record | Held in | Retention |
|---|---|---|
| Article register: title, owner, tier folder, source SOP, review date, screenshots yes/no, public yes/no | Guide library | Live — permanent |
| Article review log: date, reviewer, outcome | Guide library | 3 years |
| Published versions of each article | Guide library versioning | Current plus prior 3 versions |
| Gaps register (§10) | IT governance record | Live |
| Article task list from repeat-ticket flags | Ticket system | 2 years |
| Repeat-ticket flags and their categories | the ticketing system | 3 years |
| Unpublish and reinstate log | Guide library | 3 years |
| Monthly coverage reports | IT governance record | 3 years |
| Reconciliation outcomes (§13) | Project record | Life of the project + 2 years |

## 16.  Related documents

| ID | Title | Relationship |
|---|---|---|
| Tier 1 Guide | Your password reset and account access guide | The natural reference example for §10. Appendix B is its successor for the lockout case. |
| Desk Sheet | Desk Sheet — Tiers and Escalation (05 - All Tiers) | The routing article (§12). |
| GOV-01 | SOP Catalog Governance & Document Control | Governs SOPs. §8 sets where documents live; §9 is the consolidation this document’s §13 completes; §10 receives defect reports from §3. |
| GOV-02 | Service Desk Intake, Ticket Quality & Categorisation | Supplies the categories §9 and §11 depend on. Without categorisation there is no trigger and no measurement. |
| GOV-06 | Service Commitments, Priority & Escalation | Supplies §14, and the capacity argument in §1. |
| GOV-03 | Security Incident Response | Articles that must not exist: nothing published tells an attacker how the organization verifies identity. |
| ACC-04 | Password Standard & Self-Service Password Reset | Source for Appendix B, and its Appendix B is end-user text awaiting this format. |
| ACC-05 | Account Lockout Triage & Repeat-Incident Escalation | Source for Appendix B. The five causes are why the article asks what it asks. |
| ACC-06 | Identity Verification Before Any Account Action | What the article can and cannot say about verification. |
| ACC-03 | MFA Enrollment, Reset & Account Recovery | The largest single source of end-user articles in the catalogue. |
| ACC-15 | Acceptable Use & Credential-Sharing Standard | Its Appendix A is written to be published here. |
| ACC-01 | Account Lifecycle | §7.2 — reassigning articles when an owner leaves. |
| DEV-17 | Printer, Copier & Peripheral Standard | Its appendices are two articles awaiting this template. |
| DEV-18 | Conference & Meeting Room AV Standard | Its presenter card is a Tier 1 article with a physical surface. |
| M365-13 | File Share Retirement Runbook | Articles on the short review interval (§8). |
| M365-22 | Phishing Reporting & Email Threat Response | An article every member of the organization should have read once. |

## Appendix A — The article template, ready to copy

Copy this into a new document in the correct tier folder and fill it in. Delete the guidance in brackets as you go. If a section does not apply, say why rather than deleting it — an empty “if it does not work” section is a signal that the article is not finished.

| Section | What to write |
|---|---|
| TITLE | [ The question the person would type. Starts with “How do I”, “I can’t”, or “What happens when”. If it contains the word “procedure”, start again. ] |
| Who this is for | [ Staff / contractors / guests / Everyone. One line. ] |
| How long it takes | [ “About two minutes.” Be honest — an underestimate produces a ticket at minute four. ] |
| Before you start, you will need | [ Bullet list. Your phone. Your ID number. A second device. Ten minutes. Approval from your manager. Everything the reader must have in hand. ] |
| Steps | [ Numbered. One action each. Name the button exactly as it appears. After the last step, say what they should see so they know it worked. ] |
| If it does not work | [ REQUIRED. The two or three commonest reasons it fails, each with what to do. This is the section that makes the difference between an article and a leaflet. ] |
| Still stuck? | [ The address or number to contact, and what to tell us — what you tried, what the message said exactly, when it started. ] |
| Related articles | [ Two or three links, no more. A wall of links is a way of not choosing. ] |
| — NOT SHOWN TO THE READER — |  |
| Owner | [ A named person. Not a team. ] |
| Source SOP and section | [ e.g. ACC-05 §2. If this is blank, stop: there may be no procedure behind this article (§3). ] |
| Tier folder | [ 01–05. The folder is the audience, not the topic. ] |
| Published to the help page? | [ Yes / No ] |
| Screenshots? | [ Yes / No — and how many. This field is what makes a UI change a review list. ] |
| Last reviewed / review due | [ Date / date. 12 months, 6 for a Microsoft 365 interface, 3 for anything in migration. ] |
| Known gaps | [ What this article cannot answer, and who owns the gap. Left blank only if there genuinely are none (§10). ] |

## Appendix B — Worked example: “I am locked out of my account”

A complete article, written end to end as a model of the format, derived from ACC-04 and ACC-05. It is publishable as it stands once the two bracketed values are confirmed. Note what it does not contain: no tier names, no product names the reader will not see, no explanation of smart lockout, and no invented verification step (§10).

## I can’t sign in to my work account

For: everyone with a work account.   ·   Takes about five minutes.

### Before you start, you will need

- The phone or device you set up for security verification, if you have one.
- A second device if you can get one — another computer, or your phone. It makes several of the steps below much quicker.
- Your work email address.
### First, three quick questions — they change what you should do

“I’m locked out” turns out to mean about five different things, and the fix is different for each. These three questions get you to the right one in under a minute, and they are the same questions we would ask you.

| Question | What it means |
|---|---|
| Does your password get accepted, and then something else fails? | Then your password is fine and the problem is the second step — the code or the approval on your phone. Go to “My phone is the problem” below. Do not reset your password; it will not help and it makes the day longer. |
| Does it fail everywhere — your laptop, your phone, a different computer, on site? | Go to “It fails everywhere” below. |
| Does it work somewhere but not in one place — one app, one computer, or only off site? | Go to “It works in some places but not others” below. |

### If you have just forgotten your password

1. Go to aka.ms/sspr on any device.
2. Enter your work email address and the characters shown on screen.
3. Choose one of the verification methods you set up — a code to your phone, or an approval in the app.
4. Enter a new password. It has to be one you have not used before.
5. Sign in with the new one. On a work laptop, if you are somewhere other than the office, connect to the internet first and then sign in.
You should be back in within about two minutes, and you do not need to contact anybody. If the site says it cannot verify you, that usually means you only have one verification method registered — see the last section.

### My phone is the problem — new phone, reset phone, or the app has nothing in it

This is the commonest version of being locked out and it is not a password problem. Your password is almost certainly fine, and resetting it will not get you in.

1. If you still have your old phone, or a second method registered, go to aka.ms/mysecurityinfo and add your new phone there. That fixes it in about three minutes with no contact.
2. If you have no working method at all, we have to help — this is the one case we cannot make self-service, for a good reason. Contact us using the details below.
3. We will ask you to prove who you are before we change anything. That takes a minute or two and it is not a formality: it is the same check that stops somebody else calling us and taking over your account.
4. Once you are back in, please register a second method straight away. Five minutes now is what lets you fix this yourself at 11pm the night before a deadline, which is when it usually happens.
### It fails everywhere

1. Try once, carefully, on a different device — your phone’s browser is fine. If it fails there too, your account is probably locked rather than your password being wrong.
2. Wait a few minutes and try once more. Do not try repeatedly; repeated attempts extend the problem rather than shortening it.
3. Think about anything that still has your old password saved in it — mail set up on a phone or tablet, a mapped drive, a tablet you have not used for a while. Something quietly retrying an old password is the usual cause, and until it stops the lockout will come back.
4. Contact us. Tell us if you have changed your password recently and what devices you use your account on. That is the information that lets us stop it recurring rather than just unlocking you.
### It works in some places but not others

1. Note exactly where it fails: which app, which computer, on site or off, and what the message says word for word. That message is what tells us which of several quite different things is happening.
2. Try the same thing on the office network if you are off site, or on a different network if you are on it.
3. Contact us with those details. Please do not reset your password first — it will not fix this and it removes the trail we use to find the cause.
### If it does not work

- The reset site says it cannot verify you. You probably have only one verification method registered, or the one you have is on a phone you no longer have. Contact us; we can help, and we will ask you to prove who you are first.
- You reset your password and your laptop still will not let you in. On a work laptop, connect to the internet, then sign in — the laptop needs to hear about the new password. If you are off site, connect and wait a minute before trying.
- Your new password keeps being rejected. It has to be new — not one you have used before, and not a small variation on it. Try something genuinely different, and consider three or four unrelated words, which are both stronger and easier to type.
- It worked and then stopped again within a few hours. Something is retrying your old password. Tell us — it is a device of yours, we can usually work out which, and it will keep happening until we do.
- Your account is locked again for the third time. Please tell us that specifically. It usually means something needs fixing properly rather than unlocking again, and we would rather sort it out than keep letting you back in.
### Still stuck?

Contact the service desk by email, phone or in person. If a deadline is today, say so in the first line.

Four things make this much faster, and you already know all of them:

- Whether your password is accepted before it fails, or rejected straight away.
- Whether it fails everywhere or only in one place.
- Whether anything has changed about your phone.
- The exact wording of the message. Not a summary — a photo of the screen is perfect.
One last thing, and it is the most useful sentence in this article: please do not ask a colleague to sign in for you, and please do not approve a prompt on somebody else’s behalf. It is not a rule for its own sake — everything done with your account is recorded as done by you, and it leaves you answering for it.

— NOT SHOWN TO THE READER —   Owner: [ named Tier 1 lead ]  ·  Source: ACC-05 §2 and §3; ACC-04 §4 and Appendix B  ·  Folder: 01 - Tier 1  ·  Public: yes  ·  Screenshots: none, deliberately — every screen in this journey is a Microsoft web interface and would need reviewing twice a year (§6)  ·  Review due: 6 months  ·  Known gaps: the identity-verification wording is deliberately general because it must not publish the check itself (GOV-03); the [ contact route for a person with no registered method ] and the [ password requirement wording ] are to be confirmed against ACC-06 and ACC-04 §3 before first publication, and are marked rather than guessed (§10).
