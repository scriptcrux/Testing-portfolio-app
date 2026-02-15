// src/components/Experience.tsx

const experiences = [
  {
    title: 'Senior SDET',
    company: 'Epam Systems',
    period: 'Oct 2021 – Present',
    description: [
      'Owned end-to-end automation for Cox Automotive’s DRiP platform using Playwright (UI), Pytest + requests (API), and Allure reports integrated with GitHub Actions.',
      'Built scalable regression suites, reducing release validation time by 30% and increasing coverage to 70%.',
      'Executed performance tests with Artillery, improving API response times by ~25%.',
      'Integrated Splunk, Datadog, and New Relic dashboards into QA workflows for observability and root-cause analysis.',
      'Validated GenAI-powered applications using LangChain + RAGAS to measure prompt accuracy and mitigate hallucinations.',
      'Mentored 2 QA engineers, introduced coding best practices, and reviewed automation artifacts.',
    ],
  },
  {
    title: 'Senior Associate QA',
    company: 'Publicis Sapient',
    period: 'Oct 2019 – Oct 2021',
    description: [
      'Delivered QA automation for GreenSky’s Lending platform and Plan Viewer using Cypress, WebdriverIO, and Appium for web and mobile.',
      'Implemented CI/CD pipelines in Jenkins and GitHub Actions with automated reporting via ReportPortal.',
      'Created reusable Cypress component libraries, reducing script duplication by 40%.',
      'Worked with product and dev teams to triage issues, reducing defect leakage by 20%.',
      'Received Bravo awards for QA contributions and mentoring junior testers.',
    ],
  },
  {
    title: 'Senior Software QA',
    company: 'RSK Business Solutions',
    period: 'Nov 2018 – Oct 2019',
    description: [
      'Led QA automation for Vistra’s Client Portal, implementing Selenium + Cucumber BDD frameworks with Java + TestNG.',
      'Automated 60% of smoke/regression scenarios, reducing manual testing time by 35%.',
      'Performed API validation using Rest Assured and Postman, ensuring data integrity across services.',
      'Set up CI pipelines with Jenkins and Maven for continuous execution and reporting.',
    ],
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Aug 2014 – Oct 2018',
    description: [
      'Developed QA automation suites for CitiDirect and internal banking apps using Selenium WebDriver, TestNG, and Java.',
      'Automated accessibility testing using JAWS screen reader and integrated results into reporting.',
      'Reduced regression cycle time by 40% by optimizing automation framework design.',
      'Worked with offshore/onshore teams, mentored juniors, and contributed to defect prevention strategies.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* <Briefcase className="w-12 h-12 text-indigo-600 mx-auto mb-4" /> */}
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Work Experience</h2>
          <p className="text-lg text-gray-600">
            Over 10 years of QA Automation experience across Web, API, Mobile, Cloud, and GenAI platforms — driving
            quality through modern frameworks, CI/CD integration, and emerging technologies.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-indigo-200">
              <div className="mb-1">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
