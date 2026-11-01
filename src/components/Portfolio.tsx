import React, { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, X, Github, ArrowRight, ExternalLink, Search, Lock } from 'lucide-react';
import { projects } from '../data/projects';

type ViewMode = 'images' | 'video';

const categories = ['All', 'Full-Stack QA', 'Frontend', 'API & Backend', 'Performance', 'GenAI', 'Mobile', 'Accessibility'];

const MediaModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  video?: string;
  title: string;
  initialView?: ViewMode;
}> = ({ isOpen, onClose, images, video, title, initialView = 'images' }) => {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState<ViewMode>(initialView);

  useEffect(() => {
    if (!isOpen) {
      setIndex(0);
      setView(initialView);
    }
  }, [isOpen, initialView]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
      if (e.key === 'ArrowLeft' && images.length > 1) setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-800 text-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div>
            <h4 className="text-base font-bold text-white">{title}</h4>
            <p className="text-xs text-slate-400">Media Preview</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {video && (
            <div className="mb-4 flex gap-2">
              <button
                onClick={() => setView('images')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  view === 'images' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Screenshots ({images.length})
              </button>
              <button
                onClick={() => setView('video')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  view === 'video' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Play className="h-3 w-3 fill-current" />
                Video Demo
              </button>
            </div>
          )}

          {view === 'video' && video ? (
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-black border border-slate-800">
              <iframe src={video} className="absolute inset-0 w-full h-full" allowFullScreen title={title} />
            </div>
          ) : (
            <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              {images.length ? (
                <>
                  <img
                    src={images[index]}
                    alt={`${title} preview ${index + 1}`}
                    className="w-full h-[480px] object-contain bg-slate-950"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-indigo-600 text-white p-2.5 rounded-full shadow-lg border border-slate-700 transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-indigo-600 text-white p-2.5 rounded-full shadow-lg border border-slate-700 transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          aria-label={`Jump to slide ${i + 1}`}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === i ? 'bg-indigo-400 w-5' : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-72 flex items-center justify-center text-slate-500 font-mono text-sm">
                  No preview images available
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterFromUrl = searchParams.get('filter');

  const [filter, setFilter] = useState<string>(() => {
    if (filterFromUrl && categories.includes(filterFromUrl)) {
      return filterFromUrl;
    }
    return 'All';
  });

  const [q, setQ] = useState('');
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [modalMode, setModalMode] = useState<ViewMode>('images');

  // Sync if URL param changes (e.g., from external links or browser navigation)
  useEffect(() => {
    if (filterFromUrl && categories.includes(filterFromUrl)) {
      setFilter(filterFromUrl);
    } else if (!filterFromUrl) {
      setFilter('All');
    }
  }, [filterFromUrl]);

  const handleFilterSelect = (cat: string) => {
    setFilter(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('filter');
    } else {
      newParams.set('filter', cat);
    }
    setSearchParams(newParams, { replace: true });
  };

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return projects.filter((p) => {
      if (filter !== 'All' && p.category !== filter) return false;
      if (!query) return true;
      return (
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.join(' ').toLowerCase().includes(query)
      );
    });
  }, [filter, q]);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/40 relative border-b border-slate-200/70 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/70 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            Production Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Automation Architectures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Real-world enterprise frameworks engineered for resilience, high concurrency, and zero false positives.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-slate-200/70 dark:border-slate-850">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => handleFilterSelect(c)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === c
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200 dark:shadow-indigo-950 scale-102'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects or tags..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 shadow-sm"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-white dark:bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 dark:hover:shadow-indigo-950/40 transition-all duration-300"
            >
              <div>
                {/* Media Preview Box */}
                <div className="relative h-52 bg-slate-950 overflow-hidden cursor-pointer">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => {
                      setModalIndex(projects.findIndex((p) => p.id === item.id));
                      setModalMode('images');
                    }}
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-slate-950/80 text-white backdrop-blur-md border border-white/20">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/90 text-emerald-400 border border-emerald-800/60 backdrop-blur-md">
                      CI/CD PASS
                    </span>
                  </div>

                  {/* Play video overlay button (only if real video exists) */}
                  {item.video ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalIndex(projects.findIndex((p) => p.id === item.id));
                        setModalMode('video');
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
                      aria-label="Watch video demo"
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </button>
                  ) : (
                    <div
                      onClick={() => {
                        setModalIndex(projects.findIndex((p) => p.id === item.id));
                        setModalMode('images');
                      }}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]"
                    >
                      <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View CI/CD & Code Artifacts</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {item.isPrivate ? (
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shrink-0"
                        title="Enterprise Private Core SDK (Proprietary Architecture)"
                      >
                        <Lock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        <span>Private SDK</span>
                      </span>
                    ) : item.github ? (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                        title="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>

                  {item.ecosystem && (
                    <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/80 text-[11px] text-slate-600 dark:text-slate-300 flex items-center justify-between">
                      <span className="font-semibold text-slate-500 dark:text-slate-400">Tier:</span>
                      <span className="font-mono text-indigo-600 dark:text-indigo-400 truncate ml-1 font-medium">{item.ecosystem.role}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {item.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-[11px] font-mono font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-900/90 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setModalIndex(projects.findIndex((p) => p.id === item.id));
                    setModalMode('images');
                  }}
                  className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Quick Preview
                </button>

                <Link
                  to={`/project/${item.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/link"
                >
                  <span>Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      {modalIndex !== null && (
        <MediaModal
          isOpen={true}
          onClose={() => setModalIndex(null)}
          title={projects[modalIndex].title}
          images={projects[modalIndex].images || []}
          video={projects[modalIndex].video}
          initialView={modalMode}
        />
      )}
    </section>
  );
}
