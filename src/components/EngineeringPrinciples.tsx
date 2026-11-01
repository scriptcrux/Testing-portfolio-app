// src/components/EngineeringPrinciples.tsx
import React from 'react';
import {
  GitPullRequest,
  CheckCircle,
  Eye,
  Bot,
  Gauge,
  Layers,
} from 'lucide-react';

const principles = [
  {
    icon: GitPullRequest,
    title: 'Shift-Left Quality Architecture',
    subtitle: 'Catch bugs at PR time, not post-release',
    description:
      'Embedding automated contract tests, linters, and component mocks directly into PR validations. Intercepting defects at commit time reduces rectification costs by up to 80%.',
    badge: 'Defect Prevention',
  },
  {
    icon: CheckCircle,
    title: 'Zero-Flake Determinism',
    subtitle: '100% trustworthy green builds',
    description:
      'Eliminating false positives using network idempotency, smart locator prioritization, dynamic polling, and isolated test states. A red build always indicates a genuine bug.',
    badge: 'Reliability',
  },
  {
    icon: Eye,
    title: 'Observability & Live APM Telemetry',
    subtitle: 'Instant root-cause diagnosis',
    description:
      'Connecting automated test runs directly with Splunk, Datadog, and Allure traces. Failing tests automatically capture HAR files, DOM snapshots, and console error dumps.',
    badge: 'Telemetry',
  },
  {
    icon: Bot,
    title: 'GenAI & LLM Guardrails',
    subtitle: 'Continuous prompt & drift testing',
    description:
      'Evaluating LLM-backed architectures using RAGAS and DeepEval to detect hallucinations, answer relevancy degradation, and prompt injection vulnerabilities.',
    badge: 'Next-Gen QA',
  },
  {
    icon: Gauge,
    title: 'Sub-5-Minute Feedback Loops',
    subtitle: 'Massive parallel test containerization',
    description:
      'Orchestrating test suites across distributed Docker containers in GitHub Actions & GitLab CI. Delivering comprehensive end-to-end regression results in minutes.',
    badge: 'Velocity',
  },
  {
    icon: Layers,
    title: 'Risk-Weighted Coverage Matrix',
    subtitle: 'Maximizing ROI on critical user journeys',
    description:
      'Aligning automation depth with revenue-critical transaction flows, regulatory compliance, and high-frequency user funnels rather than superficial vanity test counts.',
    badge: 'Business Value',
  },
];

export default function EngineeringPrinciples() {
  return (
    <section id="principles" className="py-24 bg-white dark:bg-slate-950 relative border-b border-slate-200/60 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            Core Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Guarantee Software Resilience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Quality is not an afterthought or an inspection phase — it is an architectural discipline designed into every layer of development.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-50 dark:hover:shadow-indigo-950/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 group-hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>Battle-tested in enterprise production</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
