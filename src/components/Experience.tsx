// src/components/Experience.tsx
import React from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Award,
  Building2,
  Download,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { RESUME_URLS } from '../data/resume';

interface ExperienceItem {
  title: string;
  company: string;
  project?: string;
  client?: string;
  period: string;
  current?: boolean;
  impactMetrics: string[];
  description: string[];
  coreTech: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Lead SDET',
    company: 'Cyncly',
    project: 'Cyncly – Next Make ERP Platform',
    period: 'Oct 2021 – Present',
    current: true,
    impactMetrics: [
      'AI Agent & MCP Workflows',
      'Cypress + TypeScript',
      'Azure DevOps CI/CD',
      'Primary QA for 2 Dev Teams',
    ],
    description: [
      'Acting as the primary Lead QA supporting two core development teams across complete end-to-end application testing activities for Next Make, an enterprise ERP platform supporting the window, door, and glass industry across design, manufacturing, and delivery workflows.',
      'Built AI-assisted QA workflows using Model Context Protocol (MCP) integrations, reusable AI prompts, and specialized autonomous agents to accelerate requirement analysis, automated test generation, debugging, and framework expansion.',
      'Governed the entire testing lifecycle from initial requirement analysis and test planning through to release readiness sign-off and production validation.',
      'Architected and maintained robust frontend regression test suites using Cypress and TypeScript across complex UI business workflows.',
      'Conducted backend and API validation for SOAP and REST services using SoapUI, guaranteeing transactional integrity across microservices.',
      'Configured and supported CI execution and release gate validations through Azure DevOps pipelines for rapid, continuous delivery.',
      'Drove full defect lifecycle management including triage, root-cause analysis, validation, and cross-functional closure coordination.',
    ],
    coreTech: ['Cypress', 'TypeScript', 'MCP (Model Context Protocol)', 'AI Agents', 'SoapUI', 'Azure DevOps', 'ERP Solutions', 'JIRA'],
  },
  {
    title: 'Lead QA Consultant / Automation Architect',
    company: 'Cox Automotive',
    project: 'Dealer Retailing Platform (DRiP)',
    period: 'Oct 2021 – Present',
    impactMetrics: [
      '-30% Release Validation Time',
      'ReportPortal Dashboards',
      'Testing Pyramid Alignment',
      '5 QA Engineers Mentored',
    ],
    description: [
      'Owned end-to-end test automation architecture using Python + Playwright for web UI and Pytest + requests for backend workflows across distributed microservices.',
      'Ensured strict adherence to the testing pyramid, collaborating with developers to balance unit, integration, and E2E coverage while focusing QA on high-value scenarios.',
      'Constructed resilient regression suites integrated into GitHub Actions pipelines, enabling nightly execution with automated test reporting in ReportPortal.',
      'Coordinated deliverables across offshore and external vendor teams, ensuring alignment on test strategy, quality expectations, and delivery timelines.',
      'Collaborated closely with developer teams using Splunk and New Relic dashboards for telemetry, root-cause analysis, and observability.',
      'Provided active mentorship to 5 QA engineers on test strategy, automation design, and clean-code practices, fostering team-wide quality ownership.',
      'Leveraged GitHub Copilot to accelerate automation development and improve test artifact maintainability.',
    ],
    coreTech: ['Python', 'Playwright', 'Pytest', 'GitHub Actions', 'ReportPortal', 'Splunk', 'New Relic', 'GitHub Copilot', 'Rally'],
  },
  {
    title: 'Senior QA Automation Lead',
    company: 'GreenSky',
    project: 'Loan Origination & Servicing Platform',
    period: 'Fintech Engagement',
    impactMetrics: [
      'WDIO → Playwright Migration',
      'Artillery Load Testing',
      'GitLab CI/CD',
      '4 QA Engineers Mentored',
    ],
    description: [
      'Automated UI workflows with WebdriverIO (TypeScript), mobile journeys with Appium, and API suites using Axios + Mocha/Chai for high-volume loan applications.',
      'Spearheaded full framework migration from WebdriverIO to Playwright (TypeScript), dramatically improving stability, execution speed, and parallelization.',
      'Conducted performance and stress testing with Artillery, validating high-volume loan transaction loads and backend queue throughput.',
      'Configured GitLab CI/CD pipelines and harnessed Splunk & Datadog telemetry for rapid defect triage and production observability.',
      'Defined QA deliverables through structured Work Breakdown Structures (WBS), enhancing project predictability and test traceability.',
      'Mentored 4 QA engineers and actively contributed to technical interviews and team growth.',
    ],
    coreTech: ['Playwright', 'WebdriverIO', 'Appium', 'TypeScript', 'Artillery', 'GitLab CI/CD', 'Splunk', 'Datadog', 'Axios'],
  },
  {
    title: 'Senior Associate QA',
    company: 'Publicis Sapient',
    project: 'Plan Viewer (Investment & Retirement Portal)',
    period: 'Jun 2019 – Sep 2021',
    impactMetrics: [
      '~70% UI Coverage',
      '-25% Defect Leakage',
      'Jenkins CI/CD',
      'Bravo Award Winner',
    ],
    description: [
      'Automated frontend regression using Cypress (JavaScript), achieving ~70% end-to-end test coverage for member investment tracking and retirement forecasting portals.',
      'Built backend REST API test suites using Supertest + Mocha/Chai, ensuring stability, schema conformance, and fast execution on core financial endpoints.',
      'Integrated automated suites into Jenkins CI/CD pipelines, executing smoke and regression runs on every build for rapid developer feedback loops.',
      'Designed and managed test cases in Zephyr (JIRA), creating complete traceability between business requirements, test executions, and defects.',
      'Partnered directly with product owners to define acceptance criteria and test scope, reducing defect leakage into UAT by 25%.',
      'Active participant in Agile ceremonies (sprint planning, retrospectives), helping foster a culture of quality-first development.',
    ],
    coreTech: ['Cypress', 'JavaScript', 'Supertest', 'Mocha', 'Chai', 'Jenkins', 'Zephyr (JIRA)', 'Agile/Scrum'],
  },
  {
    title: 'Senior Software QA',
    company: 'RSK Business Solutions',
    project: 'Vistra Portal (Entity Governance)',
    period: 'Feb 2018 – May 2019',
    impactMetrics: [
      'Java + Serenity BDD',
      'RestAssured API',
      'Appium Mobile QA',
      'TestRail Traceability',
    ],
    description: [
      'Built and maintained scalable test automation using Java + Serenity BDD for web workflows and RestAssured for multi-jurisdiction entity records.',
      'Automated mobile scenarios with Appium (Android & iOS), significantly increasing test coverage of business-critical compliance flows.',
      'Collaborated with external implementation and support partners, coordinating test deliverables and ensuring smooth integration across vendor and internal teams.',
      'Managed requirements and test cases in TestRail, ensuring continuous traceability and clear executive reporting.',
      'Integrated automated test execution into Jenkins pipelines with Maven, enabling consistent smoke and regression runs on release candidates.',
      'Provided hands-on guidance to 4 junior QA members on test case design, automation architecture, and defect RCA.',
    ],
    coreTech: ['Java', 'Serenity BDD', 'RestAssured', 'Appium', 'TestRail', 'Jenkins', 'Maven'],
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    project: 'CitiDirect (Global Transaction Banking)',
    period: 'Jun 2014 – Jan 2018',
    impactMetrics: [
      'Selenium + TestNG',
      'HP ALM Management',
      'Banking Workflows',
      'Reduced UAT Defect Leakage',
    ],
    description: [
      'Automated core corporate banking workflows using an in-house Selenium WebDriver + TestNG + Log4j framework, boosting regression efficiency across releases.',
      'Authored, executed, and maintained comprehensive test cases in HP ALM, ensuring strict audit traceability between requirements, tests, and defects.',
      'Executed smoke, regression, and production validation cycles across global online banking, multi-currency treasury, and payment workflows.',
      'Collaborated with developers and business analysts during grooming to uncover edge cases early, reducing UAT defect leakage.',
    ],
    coreTech: ['Selenium WebDriver', 'Java', 'TestNG', 'HP ALM', 'Log4j', 'SQL', 'Corporate Banking'],
  },
];

const certifications = [
  {
    title: 'ISTQB Foundation Level Certified',
    issuer: 'ISTQB',
    badge: 'Quality Engineering',
  },
  {
    title: 'Google Associate Cloud Engineer (GCP)',
    issuer: 'Google Cloud',
    badge: 'Cloud & Infrastructure',
  },
  {
    title: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    badge: 'Cloud Architecture',
  },
];

const awards = [
  {
    title: 'Delivery Excellence Award',
    detail: 'Multiple recognitions across 2023–2025 for outstanding project execution and delivery consistency.',
  },
  {
    title: 'Knowledge Sharing Award',
    detail: 'Honored for contributions to team learning, technical enablement, and automation best practices.',
  },
  {
    title: 'Technical Interview Contributor Award',
    detail: 'Recognized for active contributions to hiring panels, SDET candidate assessment, and talent evaluation.',
  },
  {
    title: 'Pillar of the Month Award',
    detail: 'Honored for consistent, high-impact contributions and dependable problem solving.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 relative border-b border-slate-200/60 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            Career Journey & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            10+ Years of Enterprise SDET Leadership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Proven track record designing scalable automation architectures, AI-assisted QA workflows, and release gates for ERP systems, automotive leaders, and tier-1 fintech institutions.
          </p>

          {/* Quick Resume Download Action */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={RESUME_URLS.view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md shadow-indigo-100 dark:shadow-indigo-950 transition-all hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>View Latest Resume (Google Drive)</span>
            </a>
            <a
              href={RESUME_URLS.download}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 font-semibold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Direct Download</span>
            </a>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-300 dark:via-indigo-500/40 to-slate-200 dark:to-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20 group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute left-0 sm:left-4 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full border-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm ${
                    exp.current
                      ? 'bg-indigo-600 border-indigo-100 dark:border-indigo-900 text-white shadow-indigo-300 dark:shadow-indigo-950'
                      : 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400'
                  }`}
                >
                  {exp.current ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 bg-slate-50/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-50 dark:hover:shadow-indigo-950/40 transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1">
                          <Building2 className="w-4 h-4 inline" /> {exp.company}
                        </span>
                        {exp.project && (
                          <>
                            <span className="text-slate-300 dark:text-slate-600">•</span>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">{exp.project}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shrink-0 self-start sm:self-auto shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metrics Badges */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {exp.impactMetrics.map((metric, mi) => (
                      <span
                        key={mi}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70"
                      >
                        <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Description Points */}
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Core Tech Stack */}
                  <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">Key Tech:</span>
                    {exp.coreTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Credentials Grid: Certifications, Awards, and Education */}
        <div className="max-w-5xl mx-auto mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
          
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications, Honors & Education
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Recognized for industry standardizations, cloud competency, and technical delivery excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Professional Certifications</h4>
              <ul className="space-y-3">
                {certifications.map((cert, ci) => (
                  <li key={ci} className="text-sm">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{cert.title}</div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{cert.issuer} • {cert.badge}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Recognition */}
            <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Awards & Recognition</h4>
              <ul className="space-y-3">
                {awards.map((award, ai) => (
                  <li key={ai} className="text-sm">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{award.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">{award.detail}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & Academic Foundation */}
            <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Academic Foundation</h4>
                <div className="text-sm">
                  <div className="font-bold text-slate-900 dark:text-white">Dehradun Institute of Technology</div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">Bachelor's Degree in Engineering (B.Tech)</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">2009 – 2013</div>
                </div>
              </div>

              {/* Bottom Resume Banner in Card */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <a
                  href={RESUME_URLS.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Official Resume (Google Drive)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
