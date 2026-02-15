// src/components/Technologies.tsx
import { FlaskConical, Zap, Boxes, Database, Code2, BarChart3, Wrench, Brain, Blocks, Repeat } from 'lucide-react';

const categories = [
  {
    title: 'Automation & Testing Frameworks',
    icon: <FlaskConical className="w-5 h-5 text-indigo-600" />,
    tech: [
      'WebdriverIO',
      'Cypress',
      'Playwright',
      'Selenium WebDriver',
      'TestNG',
      'Cucumber',
      'Serenity',
      'Appium',
      'Mocha',
      'Jest',
    ],
  },
  {
    title: 'API & Performance Testing',
    icon: <Zap className="w-5 h-5 text-indigo-600" />,
    tech: ['Supertest', 'Rest Assured', 'Postman', 'Artillery', 'K6', 'Jest', 'GraphQL'],
  },
  {
    title: 'CI/CD & DevOps',
    icon: <Boxes className="w-5 h-5 text-indigo-600" />,
    tech: ['Jenkins', 'GitHub Actions', 'GitLab', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    title: 'Databases & Logging',
    icon: <Database className="w-5 h-5 text-indigo-600" />,
    tech: ['MS SQL Server', 'MySQL', 'DynamoDB', 'Splunk', 'Datadog'],
  },
  {
    title: 'Programming & Scripting Languages',
    icon: <Code2 className="w-5 h-5 text-indigo-600" />,
    tech: ['JavaScript', 'Java', 'C', 'HTML', 'CSS', 'React', 'Node.js', 'Python', 'Rust'],
  },
  {
    title: 'Test Management & Reporting',
    icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
    tech: ['Zephyr', 'TestRail', 'HP-ALM', 'JIRA', 'ReportPortal'],
  },
  {
    title: 'Miscellaneous & Specialized Tools',
    icon: <Wrench className="w-5 h-5 text-indigo-600" />,
    tech: ['Apache POI', 'Maven', 'Sikuli', 'JAWS (Accessibility Testing)'],
  },
  {
    title: 'AI / ML Testing & Tools',
    icon: <Brain className="w-5 h-5 text-indigo-600" />,
    tech: ['TensorFlow', 'PyTorch', 'Hugging Face', 'MLflow', 'Great Expectations'],
  },
  {
    title: 'Web3 & Blockchain Testing',
    icon: <Blocks className="w-5 h-5 text-indigo-600" />,
    tech: ['Hardhat', 'Truffle', 'ethers.js', 'Ganache', 'Smart Contract Testing'],
  },
  {
    title: 'Workflow Automation',
    icon: <Repeat className="w-5 h-5 text-indigo-600" />,
    tech: ['n8n', 'Zapier', 'Make (Integromat)'],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leveraging modern tools and frameworks to deliver robust automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                {cat.icon}
                <h3 className="text-lg font-semibold text-gray-900">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium transition-colors hover:bg-indigo-100 hover:text-indigo-900"
                  >
                    {t}
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
