import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Lead Automation Engineer',
    company: 'Epam Solutions',
    period: '2021 - Present',
    description: [
      'Led a team of automation engineers in developing and maintaining test frameworks',
      'Conducted end-to-end testing for frontend and backend systems using WebdriverIO, Supertest, Axios, Jenkins, and Artillery(performance).',
      'Worked with SQL Server/DynamoDB for data validation and used Splunk/Datadog for log analysis and monitoring.',
      'Generated test reports using ReportPortal for better visibility and tracking.',
      'Contributed to the interview process and onboarding of new team members.',
      'Responsible for  technical guidance and mentorship to enhance team performance.',
    ],
  },
  {
    title: 'Senior QA Automation Engineer',
    company: 'Publicis Sapient',
    period: '2019 - 2021',
    description: [
      'Developed end-to-end test automation framework using Cypress and Rest Assured',
      'Implemented API testing suite that caught 35% more bugs before production',
      'Managed test processes and generated daily status reports.',
      'Mentored junior team members in test automation best practices',
      'Actively engaged in client interactions to ensure smooth communication and project alignment.',
      'Ensured robust defect tracking and resolution through collaboration with cross-functional teams.',
    ],
  },
  {
    title: 'Senior Software QA',
    company: 'RSK Business solutions',
    period: '2018 - 2019',
    description: [
      'Created automated test suites using Selenium WebDriver and Java and serenity',
      'Reduced manual testing effort by 60% through strategic test automation',
      'Conducted Proof of Concepts (POCs) for mobile and web applications.',
      'Collaborated with developers to implement CI/CD pipelines',
      'Collaborated closely with teams to identify and resolve defects early in the development cycle.',
    ],
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    period: '2014 - 2018',
    description: [
      'Developed and maintained in-house web testing frameworks using Selenium, TestNG, and Log4j.',
      'Contributed to sprint planning, test strategy creation, and defining testing scope',
      'Managed the defect lifecycle to ensure timely and effective resolution.',
      'Executed different types of testing, such as sanity, smoke, ad-hoc, and regression testing',
      'Developed and optimized test scripts to improve test coverage and efficiency.',
      'Ensured compliance with industry standards and best practices for quality assurance.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 10 years of experience in crafting robust automation solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative pl-8 ${index !== experiences.length - 1 ? 'pb-12' : ''}`}>
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-indigo-100"></div>
              )}
              <div className="relative">
                <div className="absolute left-[-2rem] top-2 bg-white">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-indigo-600 font-medium">{exp.company}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 shrink-0"></span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
