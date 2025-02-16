import React, { useState } from 'react';
import { Github, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Cypress Test Automation Framework',
    description:
      'Developed a scalable Cypress-based test automation framework for efficient end-to-end (E2E), API, and component testing. Integrated with CI/CD pipelines (GitHub Actions, Jenkins, GitLab CI) to enable automated test execution and reporting. Implemented custom commands, fixtures, and data-driven testing to improve test reusability and maintainability.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/cypress_home_grjbr0.webp',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_1_jjfgvs.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_2_rt6ab6.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_3_gfujg1.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_4_gsfbu3.png',
    ],
    video: 'https://player.vimeo.com/video/876544227',

    tags: ['Cypress', 'Typescript', 'CI/CD'],
    github: 'https://github.com/scriptcrux/cypress-e2e',
  },
  {
    title: 'Appium Mobile Automation Framework',
    description:
      'Built a cross-platform mobile automation framework using Appium for iOS & Android testing. Integrated with WebdriverIO, CI/CD pipelines, and cloud platforms (Sauce Labs, BrowserStack) for parallel execution & real-device testing. Automated gestures, deep linking, and biometric authentication with Allure/Extent reports for insights.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671835/appium_home_rluzmo.png',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671836/appium_CI_1_xmzlw5.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671835/appium_CI_2_g7wdhn.png',
    ],
    video: 'https://player.vimeo.com/video/876544227',
    tags: ['Appium', 'Typescript', 'CI/CD'],
    github: 'https://github.com/scriptcrux/cypress-e2e',
  },
  {
    title: 'Playwright Test Automation Framework',
    description:
      'Designed and implemented a robust Playwright automation framework for cross-browser testing (Chromium, Firefox, WebKit) and mobile emulation. Leveraged Playwright’s capabilities for parallel execution, API testing, and UI testing. Integrated with CI/CD tools to ensure fast, reliable, and scalable test execution in modern development workflows.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671748/pw_home_iv1dx8.png',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671748/pw_ci_1_asmjrw.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671748/pw_ci_2_cjicxs.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671748/pw_ci_3_zffohm.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671747/pw_ci_4_y65ayj.png',
    ],
    video: 'https://player.vimeo.com/video/876544240',
    tags: ['Playwright', 'API Testing', 'TypeScript'],
    github: 'https://github.com/scriptcrux/banking-api-tests',
  },
  {
    title: 'Artillery Performance Testing Framework',
    description:
      'Developed a performance and load testing framework using Artillery to evaluate application scalability and resilience. Designed test scenarios for HTTP, WebSocket, and API load testing, integrating with CI/CD pipelines for automated performance validation. Generated detailed reports to analyze response times, throughput, and system bottlenecks.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671894/WIP_n4gk7i.jpg',
    images: [
      // 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      // 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      // 'https://images.unsplash.com/photo-1576091160291-31957ab2724f?auto=format&fit=crop&w=800&q=80',
    ],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['artillery', 'YAML', 'github actions'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
  },
  {
    title: 'WebdriverIO Test Automation Framework',
    description:
      'Built an advanced WebdriverIO-based test framework to support Web, Mobile (Appium), and API testing. Utilized Cucumber & Mocha for BDD/TDD-style test writing and integrated Allure reports for detailed test insights. Automated test execution within CI/CD pipelines to enhance software quality, accelerate releases, and improve team efficiency.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672071/wdio_home_fv33nj.jpg',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672073/wdio_ci_1_wcancs.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672072/wdio_ci_2_i8u2bf.png',
    ],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['WebdriverIO', 'Typescript', 'GitLabs CICD'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
  },
  {
    title: 'SuperTest & Axios API Testing Framework',
    description:
      'Created a lightweight yet powerful API testing framework using SuperTest and Axios for efficient RESTful API validation. Implemented comprehensive functional, integration, and contract tests to ensure API reliability. Integrated with Jest/Mocha for assertions and CI/CD pipelines for automated API regression testing.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672125/api_home_ia9ubk.png',
    images: ['https://res.cloudinary.com/dyhvayayc/image/upload/v1739672126/api_ci_1_sd6azf.png'],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['Axios', 'Supertest', 'JavaScript'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
  },
  {
    title: 'Accessibility Testing Framework',
    description:
      'Developed an automated accessibility testing framework with axe-core, Lighthouse, and pa11y for WCAG compliance. Integrated with Cypress, Playwright, WebdriverIO, and CI/CD for early defect detection. Automated contrast checks, keyboard navigation, and screen reader validation, generating reports with Deque axe DevTools & WAVE API.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671894/WIP_n4gk7i.jpg',
    images: [
      // 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      // 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      // 'https://images.unsplash.com/photo-1576091160291-31957ab2724f?auto=format&fit=crop&w=800&q=80',
    ],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['Gatling', 'Lighthouse', 'Github actions'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
  },
  //unit testing, serverless
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  video?: string;
  initialView?: 'images' | 'video';
}

const MediaModal: React.FC<ModalProps> = ({ isOpen, onClose, images, video, initialView = 'images' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [showVideo, setShowVideo] = useState(initialView === 'video');
  const [showVideo, setShowVideo] = useState(initialView === 'images');

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-4xl w-full">
        {/* <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"> */}
        <button onClick={onClose} className="absolute right-4 top-2 text-gray-500 hover:text-gray-700 z-10">
          {/* <X className="h-6 w-6" /> */}
          <X className="h-5 w-5" />
        </button>

        <div className="p-4">
          {video && (
            <div className="flex mb-4">
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="flex items-center text-indigo-600 hover:text-indigo-700 "
              >
                {showVideo ? (
                  <>
                    <Pause className="h-4 w-4 mr-2" />
                    Show Images
                  </>
                ) : (
                  <>
                    {/* <Play className="h-4 w-4 mr-2" />
                    Watch Demo */}
                  </>
                )}
              </button>
            </div>
          )}

          {showVideo ? (
            <div className="relative pt-[56.25%]">
              <iframe
                src={video}
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-[600px] object-cover object-left rounded-lg"
              />

              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [initialView, setInitialView] = useState<'images' | 'video'>('images');

  const openModal = (index: number, view: 'images' | 'video') => {
    setSelectedItem(index);
    setInitialView(view);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent automation projects and their impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="w-full h-48 object-fill cursor-pointer"
                  onClick={() => openModal(index, 'images')}
                />
                {item.video && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(index, 'video');
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
                  {/* commenting till the repos are fixed */}
                  {/* <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a> */}
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem !== null && (
        <MediaModal
          isOpen={true}
          onClose={() => setSelectedItem(null)}
          images={portfolioItems[selectedItem].images}
          video={portfolioItems[selectedItem].video}
          initialView={initialView}
        />
      )}
    </section>
  );
}
