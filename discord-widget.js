/* Known Good · live Discord card. Shows only aggregate counts (no member names or avatars). */
(function () {
  const GUILD = "946463147051593748", INVITE = "N7CzrXz4hT";
  const cards = document.querySelectorAll(".kg-discord");
  if (!cards.length) return;
  const set = (sel, txt) => cards.forEach(c => { const el = c.querySelector(sel); if (el && txt) el.textContent = txt; });
  fetch(`https://discord.com/api/v10/invites/${INVITE}?with_counts=true`)
    .then(r => r.ok ? r.json() : null)
    .then(j => { if (j && j.approximate_member_count) set("[data-kg=members]", `${j.approximate_member_count.toLocaleString()} members`);
                 if (j && j.approximate_presence_count) set("[data-kg=online]", `${j.approximate_presence_count.toLocaleString()} online now`); })
    .catch(() => {});
  fetch(`https://discord.com/api/guilds/${GUILD}/widget.json`)
    .then(r => r.ok ? r.json() : null)
    .then(j => { if (j && typeof j.presence_count === "number") set("[data-kg=online]", `${j.presence_count.toLocaleString()} online now`); })
    .catch(() => {});
})();
