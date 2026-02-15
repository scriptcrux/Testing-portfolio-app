// src/components/Portfolio.tsx
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Pause, X, Github } from 'lucide-react';
import { projects } from '../data/projects';

type ViewMode = 'images' | 'video';

const categories = ['All', 'UI', 'Testing', 'Backend', 'Accessibility', 'n8n', 'unoit'];

const MediaModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  video?: string;
  initialView?: ViewMode;
}> = ({ isOpen, onClose, images, video, initialView = 'images' }) => {
  const [index, setIndex] = useState(0);
  const [view, setView] = useState<ViewMode>(initialView);

  React.useEffect(() => {
    if (!isOpen) {
      setIndex(0);
      setView(initialView);
    }
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative bg-white rounded-lg max-w-4xl w-full">
        <button onClick={onClose} className="absolute right-3 top-3 text-gray-600 hover:text-gray-800">
          <X className="h-5 w-5" />
        </button>

        <div className="p-4">
          {video && (
            <div className="mb-4">
              <button
                onClick={() => setView((v) => (v === 'video' ? 'images' : 'video'))}
                className="flex items-center gap-2 text-indigo-600"
              >
                {view === 'video' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {view === 'video' ? 'Show Images' : 'Watch Demo'}
              </button>
            </div>
          )}

          {view === 'video' && video ? (
            <div className="relative pt-[56.25%]">
              <iframe src={video} className="absolute inset-0 w-full h-full rounded-md" allowFullScreen />
            </div>
          ) : (
            <div className="relative">
              {images.length ? (
                <>
                  <img
                    src={images[index]}
                    alt={`screenshot ${index + 1}`}
                    className="w-full h-[520px] object-cover rounded-md"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                      <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full ${index === i ? 'bg-indigo-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full h-72 flex items-center justify-center text-gray-500">No images</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('All');
  const [q, setQ] = useState('');
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [modalMode, setModalMode] = useState<ViewMode>('images');

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
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent automation projects and their impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 rounded-full ${
                  filter === c ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="ml-auto">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects or tags..."
              className="border rounded px-3 py-2 w-64"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => {
                    setModalIndex(projects.findIndex((p) => p.id === item.id));
                    setModalMode('images');
                  }}
                />
                {item.video && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalIndex(projects.findIndex((p) => p.id === item.id));
                      setModalMode('video');
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity group"
                  >
                    <Play className="text-white opacity-0 group-hover:opacity-100 h-12 w-12" />
                  </button>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>

                  <div className="flex gap-2 items-center">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-indigo-600 transition-colors"
                        title="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2 items-center">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}

                  <Link to={`/project/${item.id}`} className="ml-auto text-indigo-600 hover:underline text-sm">
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalIndex !== null && (
        <MediaModal
          isOpen={true}
          onClose={() => setModalIndex(null)}
          images={projects[modalIndex].images || []}
          video={projects[modalIndex].video}
          initialView={modalMode}
        />
      )}
    </section>
  );
}
