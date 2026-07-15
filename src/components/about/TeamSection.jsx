// This section introduces the core team members in a friendly, premium profile layout.
const teamMembers = [
  {
    role: 'Frontend Developer',
    name: 'Elsa Jojo',
    responsibilities: [
      'Built the React frontend',
      'Designed the UI/UX',
      'Developed Upload Page',
      'Developed Loading Experience',
      'Developed Result Dashboard',
      'Integrated frontend components',
    ],
  },
  {
    role: 'Backend & AI Developer',
    name: 'Arun P S',
    responsibilities: [
      'Developed FastAPI backend',
      'Built REST APIs',
      'Integrated MediaPipe',
      'Implemented facial landmark detection',
      'Developed facial measurement pipeline',
      'Built facial scoring algorithm',
      'Generated structured JSON responses',
    ],
  },
]

function TeamSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_70px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Meet the Team</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">People behind the experience</h2>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-[1.5rem] border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-22px_rgba(15,23,42,0.3)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-lg font-semibold text-white">
                {member.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">{member.role}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{member.name}</h3>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              {member.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
