import { getTeamInitials } from "@/lib/team-initials";
import { teamMembers } from "@/lib/team";

function TeamCard({ member, compact = false }: { member: (typeof teamMembers)[number]; compact?: boolean }) {
  const detailLines = compact ? member.details.slice(0, 1) : member.details;

  return (
    <article className="card team-card">
      <div className="team-card-avatar" aria-hidden="true">
        {getTeamInitials(member.name)}
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-role muted">{member.role}</p>
        {detailLines.map((line) => (
          <p key={line} className="team-card-detail">
            {line}
          </p>
        ))}
        {member.phone ? (
          <p className="team-card-phone">
            <a href={`tel:${member.phone.replace(/\s/g, "")}`}>Telefon: {member.phone}</a>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function TeamMemberCards() {
  return (
    <div className="grid grid-2 team-member-cards">
      {teamMembers.map((member) => (
        <TeamCard key={member.name} member={member} />
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
        {contactTeamMembers.map((member) => (
          <TeamCard key={member.name} member={member} compact />
        ))}
      </div>
    </section>
  );
}
