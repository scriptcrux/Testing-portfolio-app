import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  Github,
  ExternalLink,
  X,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Cpu,
  Clock,
  Activity,
  FileCode,
  Lock
} from 'lucide-react';
import { projects } from '../data/projects';
import { toast } from 'react-toastify';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 max-w-md mx-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">The requested framework project could not be located.</p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyCode = () => {
    if (!project.codeSnippet) return;
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopiedCode(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24 pt-24 transition-colors duration-200">
      {/* Sub-navigation bar */}
      <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          {project.isPrivate ? (
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-800">
              <Lock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Enterprise Private Core SDK</span>
            </div>
          ) : project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Repository</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Project Header Banner */}
        <div className="mb-10 bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold tracking-wide uppercase border border-indigo-100 dark:border-indigo-800">
              {project.category}
            </span>
            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded-full text-xs font-semibold border border-amber-200 dark:border-amber-800">
                <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                <span>Private Monorepo Core</span>
              </span>
            ) : (
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Production Architecture</span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Private Monorepo Notice */}
          {project.isPrivate && (
            <div className="mt-6 p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200/90 dark:border-amber-800/60 flex items-start gap-3">
              <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide">
                  Enterprise Private Monorepo Architecture
                </h4>
                <p className="text-xs text-amber-800 dark:text-amber-400 mt-0.5 leading-relaxed">
                  {project.privateNotice ||
                    'This core framework repository represents internal proprietary SDK architecture published to a private registry (@script-crux scoped packages). It is consumed across independent public test runners (like BillPulse UI & API suites) via personal access tokens (PAT) in CI/CD pipelines.'}
                </p>
              </div>
            </div>
          )}

          {/* Multi-Repo Ecosystem Architecture Banner */}
          {project.ecosystem && (
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
                <h4 className="text-xs font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">
                  BillPulse Multi-Repo Enterprise Architecture Ecosystem
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-indigo-100/80 dark:border-slate-800">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase">Target Platform (SUT)</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{project.ecosystem.sut}</span>
                </div>
                <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-indigo-100/80 dark:border-slate-800">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase">Shared Framework SDK</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">{project.ecosystem.coreLib}</span>
                </div>
                <div className="p-3 bg-white/90 dark:bg-slate-900/90 rounded-xl border border-indigo-100/80 dark:border-slate-800">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase">Architecture Role</span>
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 mt-0.5 block">{project.ecosystem.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Metrics Quick Bar */}
          {project.architectureMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Execution Workers</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                  {project.architectureMetrics.workers}
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Duration</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                  {project.architectureMetrics.duration}
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                  <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Reliability Metric</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                  {project.architectureMetrics.flakeRate}
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Automated Scope</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-mono">
                  {project.architectureMetrics.testCount}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Code Snippet & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Live Code Snippet Viewer */}
            {project.codeSnippet && (
              <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 font-mono text-xs text-indigo-300 font-semibold flex items-center gap-1.5">
                      <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                      {project.codeSnippet.filename}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                    title="Copy Code"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed bg-slate-950/60">
                  <pre>
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                </div>

                <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Language: {project.codeSnippet.language}</span>
                  <span>Production Ready</span>
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Key Architecture Decisions & Implementation</span>
                </h3>

                <ul className="space-y-3">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-mono font-medium border border-slate-200/80 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: CI/CD Screenshots & Run Proof (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Showcase Media */}
            <div className="bg-slate-950 rounded-2xl shadow-xl overflow-hidden border border-slate-800">
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>CI/CD Pipeline Run Proof</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                  PASSED
                </span>
              </div>

              {project.video ? (
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    src={project.video}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    title={project.title}
                  />
                </div>
              ) : (
                <div
                  className="relative group cursor-pointer bg-slate-950"
                  onClick={() => setActiveImage(project.mainImage)}
                >
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-auto object-contain max-h-[460px] group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="px-3.5 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery of CI/CD Runs & Architecture Screens */}
            {project.images && project.images.length > 1 && (
              <div className="bg-white dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                  <span>Pipeline Execution Artifacts</span>
                  <span className="text-xs font-mono text-slate-400 font-normal">
                    {project.images.length} views
                  </span>
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-video bg-slate-950 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-800"
                      onClick={() => setActiveImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${project.title} view ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 p-2 rounded-full bg-white/90 shadow text-slate-900">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/60 dark:to-slate-900 border border-indigo-100 dark:border-indigo-800/60 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Need a similar automation framework?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                I architect custom, maintainable test automation suites tailored to your application stack.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 underline underline-offset-4"
              >
                Discuss Framework Implementation →
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors rounded-full bg-slate-800/80"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt="Full screen preview"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
