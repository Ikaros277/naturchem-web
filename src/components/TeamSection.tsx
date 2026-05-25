import { teamMembers } from "@/lib/team";

export function TeamMemberCards() {
  return (
    <div className="grid grid-2 team-member-cards">
      {teamMembers.map((m) => (
        <article key={m.name} className="card team-card">
          <h3 className="team-card-name">{m.name}</h3>
          <p className="team-card-role muted">{m.role}</p>
          {m.details.map((line) => (
            <p key={line} className="team-card-detail">
              {line}
            </p>
          ))}
          {m.phone ? (
            <p className="team-card-phone">
              <a href={`tel:${m.phone.replace(/\s/g, "")}`}>Telefon: {m.phone}</a>
            </p>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function TeamSectionContact() {
  const contactTeamMembers = teamMembers.slice(0, 3);

  return (
    <section className="section content-block" aria-labelledby="tym-kontakt-heading">
      <h2 id="tym-kontakt-heading">Odborná garance</h2>
      <p>
        Poptávky posuzujeme s ohledem na požadavky úřadů, účel výstupu a dostupné podklady.
        Zakázky řeší odborní pracovníci se zkušeností s akreditovanými měřeními, autorizovanými
        studiemi, odbornými posudky, EIA a environmentální legislativou.
      </p>
      <h3 className="team-subheading">Kontaktní osoby</h3>
      <div className="grid grid-2 team-member-cards">
        {contactTeamMembers.map((m) => (
          <article key={m.name} className="card team-card">
            <h3 className="team-card-name">{m.name}</h3>
            <p className="team-card-role muted">{m.role}</p>
            {m.details.slice(0, 1).map((line) => (
              <p key={line} className="team-card-detail">
                {line}
              </p>
            ))}
            {m.phone ? (
              <p className="team-card-phone">
                <a href={`tel:${m.phone.replace(/\s/g, "")}`}>Telefon: {m.phone}</a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
