import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Github, ExternalLink, Play, X, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project Not Found</h2>
          <Link to="/projects" className="text-indigo-600 hover:text-indigo-700 mt-4 inline-block font-medium">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 pt-20">
      {/* Header / Nav */}
      <div className="bg-white shadow-sm border-b border-gray-100 flex-none">
        <div className="container mx-auto px-6 py-4">
           <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors font-medium">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Projects
           </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column: Tech & Info (Sticky on desktop) */}
           <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-28">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-4">
                      {project.category}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-2">{project.title}</h1>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.github && (
                      <div className="pt-6 border-t border-gray-100">
                         <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium shadow-md hover:shadow-lg transform active:scale-95 duration-200"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Source Code
                          </a>
                      </div>
                    )}
                  </div>
              </div>
           </div>

           {/* Right Column: Media */}
           <div className="lg:col-span-2 space-y-10 order-1 lg:order-2">
              {/* Main Media (Video or Image) */}
              <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 overflow-hidden border border-gray-100 ring-1 ring-black/5">
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
                     <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                     />
                  )}
              </div>

              {/* Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="animate-in slide-in-from-bottom-5 duration-700 fade-in delay-200 fill-mode-backwards">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative aspect-video bg-gray-100 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-black/5"
                        onClick={() => setActiveImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                             <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm">
                                <ExternalLink className="w-5 h-5 text-gray-900" />
                             </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
           </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
           <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors"
           >
             <X className="w-8 h-8" />
           </button>
           <img
             src={activeImage}
             alt="Full screen"
             className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
             onClick={(e) => e.stopPropagation()} 
           />
        </div>
      )}
    </div>
  );
}
