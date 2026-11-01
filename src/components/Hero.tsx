import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Play, CheckCircle2, ShieldCheck, Activity, RotateCcw, Sparkles, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RESUME_URLS } from '../data/resume';

type SuiteTab = 'playwright' | 'genai' | 'artillery' | 'cicd';

interface TestCase {
  id: string;
  name: string;
  status: 'passed' | 'running' | 'queued';
  duration: string;
  details: string;
}

const suiteData: Record<SuiteTab, { name: string; file: string; tests: TestCase[] }> = {
  playwright: {
    name: 'Playwright E2E Suite',
    file: 'tests/e2e/checkout-resilience.spec.ts',
    tests: [
      { id: '1', name: 'Identity & SSO Multi-factor Auth Flow', status: 'passed', duration: '248ms', details: 'OAuth2.0 token validated' },
      { id: '2', name: 'Distributed Cart Checkout & Stripe Idempotency', status: 'passed', duration: '412ms', details: 'Zero-drop network replay' },
      { id: '3', name: 'Cross-browser Parallel Matrix (Chromium, WebKit)', status: 'passed', duration: '310ms', details: 'Viewports 1920x1080 & Mobile' },
      { id: '4', name: 'Dynamic Shadow DOM & Canvas Element Assertions', status: 'passed', duration: '195ms', details: 'Auto-retrying assertions OK' },
    ],
  },
  genai: {
    name: 'CloudPulse Ragas Quality Gates',
    file: 'tests/ragas_eval/test_ragas_quality_gates.py',
    tests: [
      { id: '1', name: 'Ragas Faithfulness & Hallucination Guard', status: 'passed', duration: '120ms', details: 'Score: 1.000 (Zero Hallucination)' },
      { id: '2', name: 'Context Precision & Fact Recall on ChromaDB', status: 'passed', duration: '145ms', details: 'Recall: 0.993 | Precision: 0.875' },
      { id: '3', name: 'Adversarial Prompt Refusal & Safety Guard', status: 'passed', duration: '85ms', details: '100% Negative Refusal compliance' },
    ],
  },
  artillery: {
    name: 'Artillery Performance & Load',
    file: 'perf/scenarios/spike_10k_rps.yml',
    tests: [
      { id: '1', name: 'Warm-up Phase (1,000 req/sec over 30s)', status: 'passed', duration: '30s', details: 'p95 latency: 28ms' },
      { id: '2', name: 'Spike Phase (10,000 req/sec concurrent)', status: 'passed', duration: '45s', details: 'p99 latency: 54ms | 0.00% errors' },
      { id: '3', name: 'Recovery & Connection Pool Saturation', status: 'passed', duration: '15s', details: 'Zero connection leak detected' },
    ],
  },
  cicd: {
    name: 'GitHub Actions Matrix Pipeline',
    file: '.github/workflows/regression-matrix.yml',
    tests: [
      { id: '1', name: 'Dockerized Parallel Runners (Ubuntu-24.04)', status: 'passed', duration: '1m 12s', details: '4 containers distributed' },
      { id: '2', name: 'Allure Report & Datadog APM Telemetry Sync', status: 'passed', duration: '14s', details: 'Dashboard updated' },
      { id: '3', name: 'Slack QA Bot & JIRA Regression Release Sign-off', status: 'passed', duration: '6s', details: 'Green-build badge dispatched' },
    ],
  },
};

export default function Hero() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<SuiteTab>('playwright');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);

  const goToSection = (id: string, filter = 'All') => {
    navigate(`/?filter=${encodeURIComponent(filter)}`, { replace: false });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 140);
  };

  const simulateRun = () => {
    setIsRunning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return prev + 20;
      });
    }, 320);
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:py-36 overflow-hidden mesh-gradient-hero tech-grid-pattern border-b border-slate-200/60 dark:border-slate-850">
      {/* Background ambient decorative blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-50/90 dark:bg-indigo-950/70 border border-indigo-200/70 dark:border-indigo-800/70 text-indigo-900 dark:text-indigo-200 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Lead SDET & Automation Architect</span>
              <span className="hidden sm:inline-block text-indigo-300 dark:text-indigo-600">•</span>
              <span className="hidden sm:inline-block text-slate-600 dark:text-slate-300 font-normal">Available for Advisory & High-Impact Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Architecting{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                Zero-Flake Automation
              </span>{' '}
              & High-Velocity CI/CD
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              10+ years driving enterprise quality engineering across Web, Mobile, API, and GenAI platforms.
              I help tech leaders eliminate release bottlenecks, cut cycle times by 35%+, and guarantee defect-free deployments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => goToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-md shadow-indigo-200/80 dark:shadow-indigo-950/80 hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Start a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => goToSection('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Explore Frameworks</span>
              </button>

              <a
                href="https://github.com/scriptcrux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={RESUME_URLS.view}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-indigo-700 dark:text-indigo-300 font-semibold text-sm sm:text-base bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200/80 dark:border-indigo-800/80 shadow-sm hover:shadow transition-all duration-200 active:scale-95"
                title="View & Download Latest Resume (Google Drive)"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* High-Impact Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/70 dark:border-slate-800/80">
              <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">100+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Suites Automated</div>
              </div>

              <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">10+ Yrs</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">QA Leadership</div>
              </div>

              <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">-30%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Release Validation Time</div>
              </div>

              <div className="p-3 bg-white/70 dark:bg-slate-900/70 rounded-xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">99.8%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Suite Reliability</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live QA Terminal / Suite Runner HUD */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl shadow-indigo-950/20 overflow-hidden"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400 font-medium">scriptcrux-runner@v3.4</span>
                </div>

                <div className="flex items-center gap-2">
                  {isRunning ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-950/70 text-amber-300 border border-amber-800/60 animate-pulse">
                      <RotateCcw className="w-3 h-3 animate-spin text-amber-400" />
                      <span>CI: RUNNING ({progress}%)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/70 text-emerald-400 border border-emerald-800/50">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>CI: PASSING</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Suite Tabs */}
              <div className="flex bg-slate-900/90 border-b border-slate-800 px-2 pt-2 gap-1 overflow-x-auto text-xs font-mono">
                {(['playwright', 'genai', 'artillery', 'cicd'] as SuiteTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-t-lg transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-slate-800/90 text-indigo-300 border-t border-x border-slate-700 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    {tab === 'playwright' && '⚡ Playwright'}
                    {tab === 'genai' && '🤖 GenAI/RAGAS'}
                    {tab === 'artillery' && '🔥 Artillery'}
                    {tab === 'cicd' && '🚀 CI/CD'}
                  </button>
                ))}
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] space-y-3.5">
                
                {/* File Header */}
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/60">
                  <span className="truncate text-slate-300">
                    <span className="text-indigo-400 font-bold">$ </span>
                    {suiteData[activeTab].file}
                  </span>
                  <span className="text-[11px] text-slate-500 shrink-0 ml-2">threads: 8</span>
                </div>

                {/* Simulated Running Progress Bar (when active) */}
                {isRunning && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-indigo-300">
                      <span>Executing parallel workers...</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Tests List */}
                <div className="space-y-2.5">
                  {suiteData[activeTab].tests.map((test, index) => {
                    const totalTests = suiteData[activeTab].tests.length;
                    const currentStep = Math.floor((progress / 100) * totalTests);
                    const isTestPassed = !isRunning || index < currentStep;
                    const isTestRunning = isRunning && index === currentStep;

                    return (
                      <div
                        key={test.id}
                        className={`p-2.5 rounded-lg border transition-colors flex items-start justify-between gap-3 ${
                          isTestRunning
                            ? 'bg-amber-950/20 border-amber-800/40'
                            : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            {isTestPassed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            ) : isTestRunning ? (
                              <RotateCcw className="w-4 h-4 text-amber-400 animate-spin shrink-0" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                              </div>
                            )}
                            <span className="text-slate-200 font-medium leading-snug">{test.name}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 pl-6 leading-tight">{test.details}</p>
                        </div>
                        <span className="shrink-0 text-[11px] text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                          {isTestRunning ? (
                            <span className="text-amber-400 font-semibold">running...</span>
                          ) : isTestPassed ? (
                            test.duration
                          ) : (
                            <span className="text-slate-500">queued</span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Terminal Footer / Interactive Trigger */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    {isRunning ? (
                      <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                        <RotateCcw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                        <span>Running workers ({progress}%)</span>
                      </span>
                    ) : (
                      <>
                        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5" /> 100% Passed
                        </span>
                        <span>•</span>
                        <span>Flake: 0.0%</span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={simulateRun}
                    disabled={isRunning}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-all shadow-sm hover:shadow-indigo-500/20 active:scale-95 disabled:opacity-50"
                  >
                    {isRunning ? (
                      <>
                        <RotateCcw className="w-3 h-3 animate-spin" />
                        <span>Running...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Simulate Run</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

