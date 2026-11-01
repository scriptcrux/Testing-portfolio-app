// src/components/Technologies.tsx
import React, { useState, useMemo } from 'react';
import {
  FlaskConical,
  Zap,
  Boxes,
  Database,
  Code2,
  BarChart3,
  Brain,
  Blocks,
  Repeat,
  Search,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechCategory {
  id: string;
  title: string;
  group: string;
  icon: React.ElementType;
  tech: string[];
}

const categories: TechCategory[] = [
  {
    id: 'e2e',
    title: 'Automation & E2E Frameworks',
    group: 'Automation',
    icon: FlaskConical,
    tech: [
      'Playwright',
      'Cypress',
      'WebdriverIO',
      'Selenium WebDriver',
      'Appium',
      'TestNG',
      'Cucumber BDD',
      'Serenity',
      'Jest',
      'Mocha',
    ],
  },
  {
    id: 'api-perf',
    title: 'API & Performance Testing',
    group: 'API & Perf',
    icon: Zap,
    tech: ['Supertest', 'Rest Assured', 'Postman', 'SoapUI', 'Artillery', 'K6', 'GraphQL', 'Pact'],
  },
  {
    id: 'ai-ml',
    title: 'GenAI & ML Quality Assurance',
    group: 'GenAI & ML',
    icon: Brain,
    tech: ['MCP (Model Context Protocol)', 'Claude Code / Copilot Agents', 'LangChain', 'RAGAS', 'OpenAI APIs', 'DeepEval', 'Hugging Face', 'Prompt Testing'],
  },
  {
    id: 'devops',
    title: 'CI/CD, Cloud & Containers',
    group: 'DevOps & Cloud',
    icon: Boxes,
    tech: ['GitHub Actions', 'Azure DevOps', 'GitLab CI', 'Jenkins', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
  },
  {
    id: 'languages',
    title: 'Languages & Core Runtimes',
    group: 'Languages',
    icon: Code2,
    tech: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Rust', 'Node.js', 'React', 'SQL', 'Bash'],
  },
  {
    id: 'observability',
    title: 'Databases & Observability',
    group: 'Data & Telemetry',
    icon: Database,
    tech: ['Splunk', 'Datadog', 'New Relic', 'PostgreSQL', 'MS SQL Server', 'MySQL', 'DynamoDB'],
  },
  {
    id: 'testops',
    title: 'Test Management & Insights',
    group: 'TestOps',
    icon: BarChart3,
    tech: ['Allure Reports', 'ReportPortal', 'Zephyr', 'TestRail', 'JIRA', 'Confluence'],
  },
  {
    id: 'web3',
    title: 'Web3 & Smart Contracts',
    group: 'Web3',
    icon: Blocks,
    tech: ['Hardhat', 'Truffle', 'ethers.js', 'Ganache', 'Smart Contract Audits'],
  },
  {
    id: 'workflow',
    title: 'Workflow Orchestration',
    group: 'Automation',
    icon: Repeat,
    tech: ['n8n', 'Zapier', 'Make (Integromat)', 'Webhooks'],
  },
];

const filterGroups = ['All', 'Automation', 'API & Perf', 'GenAI & ML', 'DevOps & Cloud', 'Languages', 'Data & Telemetry'];

export default function Technologies() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        // Group filter
        if (selectedGroup !== 'All' && cat.group !== selectedGroup) {
          return null;
        }

        // Search query filter
        const q = searchQuery.trim().toLowerCase();
        if (!q) return cat;

        const matchesTitle = cat.title.toLowerCase().includes(q);
        const matchingTech = cat.tech.filter((t) => t.toLowerCase().includes(q));

        if (matchesTitle || matchingTech.length > 0) {
          return {
            ...cat,
            // If tech matches, show highlighted subset, else all
            tech: matchingTech.length > 0 ? matchingTech : cat.tech,
          };
        }
        return null;
      })
      .filter(Boolean) as TechCategory[];
  }, [selectedGroup, searchQuery]);

  const totalTechCount = useMemo(() => {
    const set = new Set<string>();
    categories.forEach((c) => c.tech.forEach((t) => set.add(t)));
    return set.size;
  }, []);

  return (
    <section id="technologies" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative border-y border-slate-200/70 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/70 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            Technical Stack & Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered with Modern Tooling
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            A comprehensive, battle-tested technology arsenal spanning modern testing frameworks, AI evaluation systems, cloud infrastructure, and CI/CD pipelines.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-slate-200/70 dark:border-slate-800">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {filterGroups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedGroup === group
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-950 scale-102'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools (e.g. Playwright, RAGAS)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 bg-white dark:bg-slate-900/80 rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-indigo-950/30 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-800/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{cat.title}</h3>
                        <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                          {cat.group}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-slate-800/70 hover:bg-indigo-50 dark:hover:bg-indigo-950/70 hover:text-indigo-700 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-mono font-medium border border-slate-200/70 dark:border-slate-700/70 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/80"></span>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Stack Highlights Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-900/50 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-slate-900/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full-Spectrum Architecture & Tool Agnostic</h4>
              <p className="text-sm text-indigo-200/80 font-normal">
                Selecting the exact best tool for your product velocity — whether Node.js, Python, or JVM ecosystems.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-6">
            <div className="text-center px-4 border-r border-indigo-800">
              <span className="block text-2xl font-extrabold text-white">{totalTechCount}+</span>
              <span className="text-xs text-indigo-300">Tools Mastered</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-extrabold text-emerald-400">100%</span>
              <span className="text-xs text-indigo-300">Modern Standards</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
