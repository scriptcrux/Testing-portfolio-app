// src/components/Services.tsx

import {
  BeakerIcon,
  CodeBracketIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CubeIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    Icon: BeakerIcon,
    title: 'E2E Testing Automation',
    description:
      'Comprehensive end-to-end testing solutions using Cypress, WebdriverIO, and Playwright to ensure your applications work across browsers and devices.',
  },
  {
    Icon: CodeBracketIcon,
    title: 'API Testing & Contract Validation',
    description:
      'Robust API automation using Supertest, Rest Assured and contract tests to validate backend services and data integrity.',
  },
  {
    Icon: ServerStackIcon,
    title: 'CI/CD Integration',
    description:
      'Seamless integration of automated tests into CI/CD pipelines (GitHub Actions, Jenkins, GitLab CI) for continuous quality and faster releases.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Test Strategy & Consulting',
    description:
      'Expert guidance on test strategy, tool selection, test design, and best practices to align automation efforts with business goals.',
  },
  {
    Icon: CpuChipIcon,
    title: 'AI & ML Testing',
    description:
      'Validation and monitoring of AI/ML pipelines — dataset checks, model regression tests, data drift detection, and observability for ML-driven features.',
  },
  {
    Icon: CubeIcon,
    title: 'Web3 / Blockchain Testing',
    description:
      'Smart contract testing, security checks, transaction simulation and integration testing for dApps and blockchain backends to ensure correctness and resilience.',
  },
  {
    Icon: BoltIcon,
    title: 'n8n Automations & Integrations',
    description:
      'Design and deploy n8n workflow automations to integrate services, orchestrate test triggers, and streamline data flows between systems.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive automation solutions to streamline testing, reduce manual work, and improve software quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.Icon;
            return (
              <article
                key={s.title}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                aria-labelledby={`svc-${s.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-md">
                    <Icon className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>

                  <div>
                    <h3
                      id={`svc-${s.title.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-lg font-semibold text-gray-900"
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm">{s.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
