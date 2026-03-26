export default function EstherPortfolioWebsite() {
  const skills = [$1"Remote Collaboration",
    "AI Tools for Problem Solving",
  ];

  const services = [
    {
      title: "Virtual Assistant Support",
      desc: "Inbox management, scheduling, task coordination, document preparation, and day-to-day administrative support for busy teams and founders.",
    },
    {
      title: "Customer Service Support",
      desc: "Professional handling of customer inquiries, follow-ups, complaint resolution, and clear communication across email and chat channels.",
    },
    {
      title: "Administrative Coordination",
      desc: "Structured reporting, record keeping, research assistance, and workflow organization using modern remote tools.",
    },
  ];

  const experience = [
    {
      role: "Research Assistant",
      org: "Dr. Anwuli Ofuani-Sokolo",
      period: "Sept 2025 – Present",
      points: [
        "Organized, analyzed, and documented research data for reporting and decision-making.",
        "Transcribed focus group data with accuracy and maintained structured records.",
        "Provided administrative and documentation support for ongoing projects.",
      ],
    },
    {
      role: "Administrative Assistant",
      org: "De-vine Laboratory",
      period: "2024",
      points: [
        "Supported team scheduling, internal documentation, and email communication.",
        "Handled client-facing communication professionally via email and phone.",
        "Helped maintain smooth day-to-day office operations.",
      ],
    },
    {
      role: "Virtual Assistant Intern",
      org: "Remote Internship",
      period: "Dec 2025 – Jan 2026",
      points: [
        "Provided remote administrative support and handled communication workflows.",
        "Used Asana and Notion to manage tasks efficiently.",
        "Supported document handling and coordination in a remote work environment.",
      ],
    },
  ];

  const portfolioItems = [
    {
      title: "Email Management Sample",
      desc: "A simple inbox organization and response-handling sample showing structure, prioritization, and professional communication.",
      type: "Document Sample",
    },
    {
      title: "Customer Service Response Samples",
      desc: "Examples of complaint handling, inquiry responses, and follow-up messaging written in a clear, professional tone.",
      type: "Communication Sample",
    },
    {
      title: "Task Management Board",
      desc: "A sample workflow board showing how tasks are prioritized, tracked, and completed for remote support work.",
      type: "Workflow Sample",
    },
    {
      title: "Data Entry Sample",
      desc: "A clean spreadsheet sample demonstrating organization, status tracking, and accurate record management.",
      type: "Spreadsheet Sample",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden bg-white border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-100" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm bg-white shadow-sm">
                Open to Remote Internship & Entry-Level Roles
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Esther Okhawere
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-neutral-600 font-medium">
                Virtual Assistant & Customer Support Professional
              </p>
              <p className="mt-6 text-base md:text-lg text-neutral-700 max-w-xl leading-8">
                I help teams stay organized, communicate clearly, and deliver better service through reliable administrative support, customer communication, efficient remote collaboration, and smart use of AI tools to solve problems faster.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:okhawereesther9@gmail.com"
                  className="rounded-2xl px-6 py-3 bg-neutral-900 text-white shadow-md hover:shadow-lg transition"
                >
                  Contact Me
                </a>
                <a
                  href="#portfolio"
                  className="rounded-2xl px-6 py-3 border border-neutral-300 bg-white hover:bg-neutral-100 transition"
                >
                  View Work Samples
                </a>
              </div>
              <div className="mt-8 text-sm text-neutral-600 space-y-2">
                <p><span className="font-semibold">Email:</span> okhawereesther9@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> 09023217450</p>
                <p><span className="font-semibold">Location:</span> Port Harcourt, Nigeria</p>
                <p><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/estherokhawere2644/" className="underline">linkedin.com/in/estherokhawere2644</a></p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl bg-neutral-900 text-white p-8 shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">What I Bring</p>
                <h2 className="mt-3 text-2xl font-semibold">Reliable support that helps businesses run smoothly</h2>
                <p className="mt-4 text-neutral-200 leading-7">
                  Detail-oriented, calm under pressure, and committed to delivering professional support across admin operations, customer communication, and AI-assisted problem-solving.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-neutral-200">
                  <p className="text-3xl font-bold">3+</p>
                  <p className="mt-2 text-neutral-600">Relevant support roles and internships</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-neutral-200">
                  <p className="text-3xl font-bold">Remote</p>
                  <p className="mt-2 text-neutral-600">Ready for distributed teams and online workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl bg-white border border-neutral-200 p-7 shadow-sm">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-neutral-700 leading-7">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Skills</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Core tools and strengths</h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Experience</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Professional background</h2>
        </div>
        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div key={item.role + item.org} className="rounded-3xl bg-white border border-neutral-200 p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="text-neutral-600 mt-1">{item.org}</p>
                </div>
                <p className="text-sm text-neutral-500">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Portfolio</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Proof of work</h2>
            <p className="mt-4 text-neutral-300 leading-7">
              These samples demonstrate how I organize communication, manage workflows, and support day-to-day business operations.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-neutral-700 bg-neutral-800 p-7 shadow-lg">
                <p className="text-sm text-neutral-400">{item.type}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-neutral-300 leading-7">{item.desc}</p>
                <div className="mt-6">
                  <button className="rounded-2xl px-5 py-3 bg-white text-neutral-900 font-medium">
                    Add sample link
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-[2rem] bg-white border border-neutral-200 p-8 md:p-12 shadow-sm text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Let’s work together</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Available for remote internship and entry-level roles</h2>
          <p className="mt-4 text-neutral-700 max-w-2xl mx-auto leading-8">
            I am currently seeking opportunities where I can contribute value, grow professionally, and support teams with dependable virtual assistance, customer service, and AI-assisted problem-solving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:okhawereesther9@gmail.com"
              className="rounded-2xl px-6 py-3 bg-neutral-900 text-white shadow-md"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/estherokhawere2644/"
              className="rounded-2xl px-6 py-3 border border-neutral-300 bg-white"
            >View LinkedIn Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
}
