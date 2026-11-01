// src/components/Services.tsx
import React from 'react';
import {
  FlaskConical,
  Code2,
  GitBranch,
  ShieldCheck,
  BrainCircuit,
  Blocks,
  Workflow,
  Gauge,
  CheckCircle2,
} from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  techs: string[];
}

const services: ServiceItem[] = [
  {
    icon: FlaskConical,
    title: 'E2E Test Automation Architecture',
    category: 'Web & Mobile',
    description:
      'Bulletproof end-to-end testing frameworks across Playwright, Cypress, and WebdriverIO with automated parallel execution, smart retries, and cross-browser coverage.',
    deliverables: ['Custom page-object & fixture architecture', 'Multi-browser parallel grid execution', 'Visual regression & shadow DOM asserts'],
    techs: ['Playwright', 'Cypress', 'WebdriverIO', 'Appium'],
  },
  {
    icon: Code2,
    title: 'API Testing & Contract Validation',
    category: 'Backend & Microservices',
    description:
      'High-throughput API validation, schema validation, and consumer-driven contract testing to ensure seamless microservices integration and zero-data corruption.',
    deliverables: ['REST & GraphQL automated regression', 'Pact contract verification', 'Idempotency & error handling suites'],
    techs: ['Supertest', 'Rest Assured', 'Postman', 'Pact'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD Quality Gates & Pipeline Orchestration',
    category: 'DevOps & Automation',
    description:
      'Embedding automated test suites into modern CI/CD pipelines (GitHub Actions, GitLab, Jenkins) with automated gating, flaky-test quarantine, and live telemetry.',
    deliverables: ['Zero-downtime regression gates', 'Dockerized test runner environments', 'Allure & Datadog dashboard metrics'],
    techs: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Docker'],
  },
  {
    icon: BrainCircuit,
    title: 'GenAI & LLM Quality Engineering',
    category: 'Emerging AI',
    description:
      'Rigorous evaluation frameworks for LLM pipelines and RAG architectures — measuring semantic drift, hallucinations, factual precision, and prompt resilience.',
    deliverables: ['RAGAS benchmark evaluations', 'Prompt regression & hallucination suites', 'Latency & token budget monitoring'],
    techs: ['LangChain', 'RAGAS', 'DeepEval', 'Python'],
  },
  {
    icon: Gauge,
    title: 'Performance & Load Engineering',
    category: 'Scalability',
    description:
      'High-concurrency load, stress, and spike testing to discover throughput cliffs, database bottlenecks, and memory leaks before production traffic arrives.',
    deliverables: ['10,000+ RPS distributed load runs', 'p95/p99 latency analysis & profiling', 'Connection leak & threshold validation'],
    techs: ['Artillery', 'K6', 'JMeter', 'Datadog'],
  },
  {
    icon: ShieldCheck,
    title: 'QA Strategy & Architecture Consulting',
    category: 'Leadership & Advisory',
    description:
      'Strategic transformation of legacy QA practices. Designing shift-left quality blueprints, tool selection, defect prevention metrics, and mentoring engineering teams.',
    deliverables: ['Quality maturity & gap analysis', 'Zero-flake migration roadmap', 'Engineer upskilling & code reviews'],
    techs: ['Shift-Left', 'BDD / TDD', 'Test Strategy', 'Metrics'],
  },
  {
    icon: Blocks,
    title: 'Web3 & Smart Contract Verification',
    category: 'Decentralized Systems',
    description:
      'Automated security checks, transaction simulations, gas consumption profiling, and integration suites for EVM smart contracts and decentralized applications.',
    deliverables: ['Smart contract unit & fuzz testing', 'Mainnet fork integration suites', 'Reentrancy & edge-case validation'],
    techs: ['Hardhat', 'Truffle', 'ethers.js', 'Ganache'],
  },
  {
    icon: Workflow,
    title: 'n8n & Workflow Automation',
    category: 'Operations',
    description:
      'Designing event-driven automations using n8n and webhooks to synchronize QA alerts, automate test data generation, and trigger cross-platform triage workflows.',
    deliverables: ['Automated test data provisioning', 'JIRA & Slack incident sync bots', 'Nightly build reporting pipelines'],
    techs: ['n8n', 'Zapier', 'Webhooks', 'REST APIs'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 relative border-b border-slate-200/60 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            Capabilities & Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Quality Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            End-to-end testing frameworks and automation architectures engineered to accelerate release velocity and prevent defects at every tier of the stack.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative flex flex-col justify-between p-6 bg-slate-50/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 dark:hover:shadow-indigo-950/50 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/20 group-hover:bg-indigo-600 flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase px-2.5 py-1 bg-white dark:bg-slate-800 rounded-md border border-slate-200/60 dark:border-slate-700/80 shadow-sm">
                      {s.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-150 leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 space-y-1.5">
                    {s.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags Bottom */}
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {s.techs.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-slate-800 group-hover:bg-indigo-50/80 dark:group-hover:bg-indigo-950/60 text-slate-600 dark:text-slate-300 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 border border-slate-200/60 dark:border-slate-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
