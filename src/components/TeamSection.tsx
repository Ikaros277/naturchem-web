import Image from "next/image";
import { getTeamInitials } from "@/lib/team-initials";
import { teamMembers as defaultTeamMembers } from "@/lib/team";
import type { TeamMember } from "@/lib/team";

function TeamCard({ member, compact = false }: { member: TeamMember; compact?: boolean }) {
  const detailLines = compact ? member.details.slice(0, 1) : member.details;

  return (
    <article className="card team-card">
      {member.photo ? (
        <div className="team-card-avatar team-card-avatar--photo" aria-hidden="true">
          <Image src={member.photo} alt="" width={80} height={80} className="team-card-photo" />
        </div>
      ) : (
        <div className="team-card-avatar" aria-hidden="true">
          {getTeamInitials(member.name)}
        </div>
      )}
      <div className="team-card-content">
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-role muted">{member.role}</p>
        {(member.phones?.length || member.email) ? (
          <div className="team-card-contacts">
            {member.phones?.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="team-card-contact-line">
                {phone}
              </a>
            ))}
            {member.email ? (
              <a href={`mailto:${member.email}`} className="team-card-contact-line">
                {member.email}
              </a>
            ) : null}
          </div>
        ) : null}
        {detailLines.map((line) => (
          <p key={line} className="team-card-detail">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
}

export function TeamMemberCards({ members = defaultTeamMembers }: { members?: TeamMember[] }) {
  return (
    <div className="grid grid-2 team-member-cards">
      {members.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  );
}

export function TeamSectionContact() {
  const contactTeamMembers = defaultTeamMembers.slice(0, 3);

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
