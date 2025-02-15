import { TestTube2, Code, Bot, Shield } from 'lucide-react';

const services = [
  {
    icon: <TestTube2 className="h-8 w-8 text-indigo-600" />,
    title: 'E2E Testing Automation',
    description:
      'Comprehensive end-to-end testing solutions using Cypress, WebdriverIO, and Playwright to ensure your applications work flawlessly.',
  },
  {
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: 'API Testing',
    description:
      'Robust API testing automation frameworks to validate your backend services and ensure reliable data flow.',
  },
  {
    icon: <Bot className="h-8 w-8 text-indigo-600" />,
    title: 'CI/CD Integration',
    description: 'Seamless integration of automated tests into your CI/CD pipeline for continuous quality assurance.',
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: 'Test Strategy Consulting',
    description:
      'Expert guidance on test automation strategy, tool selection, and best practices for your specific needs.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation solutions to streamline your testing processes and improve software quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
