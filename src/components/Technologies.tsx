const technologies = [
  {
    category: 'Automation & Testing Frameworks',
    items: [
      'WebdriverIO',
      'Cypress',
      'Playwright',
      'Selenium WebDriver',
      'TestNG',
      'Cucumber',
      'Serenity',
      'Appium',
      'mocha',
      'jest',
    ],
  },
  {
    category: 'API & Performance Testing',
    items: ['Supertest', 'Rest Assured', 'Postman', 'Artillery', 'K6', 'jest', 'GraphQL'],
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitHub Actions', 'GitLab', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    category: 'Databases & Logging',
    items: ['MS SQL Server', 'MySQL', 'DynamoDB', 'Splunk', 'Datadog'],
  },
  {
    category: 'Programming & Scripting Languages',
    items: ['JavaScript', 'Java', 'C', 'HTML', 'CSS', 'React', 'Node.js', 'Python', 'Rust'],
  },
  {
    category: 'Test Management & Reporting',
    items: ['Zephyr', 'TestRail', 'HP-ALM', 'JIRA', 'ReportPortal'],
  },
  {
    category: 'Miscellaneous & Specialized Tools',
    items: ['Apache POI', 'Maven', 'Sikuli', 'JAWS (Accessibility Testing)'],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leveraging modern tools and frameworks to deliver robust automation solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm w-full sm:w-[45%] lg:w-[30%]">
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
