// src/data/projects.ts
export const projects = [
  {
    id: 'cypress-e2e',
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
    tags: ['Cypress', 'TypeScript', 'CI/CD'],
    github: 'https://github.com/scriptcrux/cypress-e2e',
    category: 'Testing',
    report: '',
  },

  {
    id: 'appium-mobile',
    title: 'Appium Mobile Automation Framework',
    description:
      'Built a cross-platform mobile automation framework using Appium for iOS & Android testing. Integrated with WebdriverIO, CI/CD pipelines, and cloud platforms (Sauce Labs, BrowserStack) for parallel execution & real-device testing. Automated gestures, deep linking, and biometric authentication with Allure/Extent reports for insights.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671835/appium_home_rluzmo.png',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671836/appium_CI_1_xmzlw5.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671835/appium_CI_2_g7wdhn.png',
    ],
    video: 'https://player.vimeo.com/video/876544227',
    tags: ['Appium', 'TypeScript', 'CI/CD'],
    github: 'https://github.com/scriptcrux/cypress-e2e',
    category: 'Testing',
  },

  {
    id: 'playwright-fw',
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
    category: 'Testing',
  },

  {
    id: 'artillery-fw',
    title: 'Artillery Performance Testing Framework',
    description:
      'Developed a performance and load testing framework using Artillery to evaluate application scalability and resilience. Designed test scenarios for HTTP, WebSocket, and API load testing, integrating with CI/CD pipelines for automated performance validation. Generated detailed reports to analyze response times, throughput, and system bottlenecks.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671894/WIP_n4gk7i.jpg',
    images: [],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['Artillery', 'YAML', 'GitHub Actions'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
    category: 'Backend',
  },

  {
    id: 'webdriverio-fw',
    title: 'WebdriverIO Test Automation Framework',
    description:
      'Built an advanced WebdriverIO-based test framework to support Web, Mobile (Appium), and API testing. Utilized Cucumber & Mocha for BDD/TDD-style test writing and integrated Allure reports for detailed test insights. Automated test execution within CI/CD pipelines to enhance software quality, accelerate releases, and improve team efficiency.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672071/wdio_home_fv33nj.jpg',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672073/wdio_ci_1_wcancs.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672072/wdio_ci_2_i8u2bf.png',
    ],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['WebdriverIO', 'TypeScript', 'GitLab CI'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
    category: 'Testing',
  },

  {
    id: 'supertest-api',
    title: 'SuperTest & Axios API Testing Framework',
    description:
      'Created a lightweight yet powerful API testing framework using SuperTest and Axios for efficient RESTful API validation. Implemented comprehensive functional, integration, and contract tests to ensure API reliability. Integrated with Jest/Mocha for assertions and CI/CD pipelines for automated API regression testing.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672125/api_home_ia9ubk.png',
    images: ['https://res.cloudinary.com/dyhvayayc/image/upload/v1739672126/api_ci_1_sd6azf.png'],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['Axios', 'Supertest', 'JavaScript'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
    category: 'Backend',
  },

  {
    id: 'accessibility-fw',
    title: 'Accessibility Testing Framework',
    description:
      'Developed an automated accessibility testing framework with axe-core, Lighthouse, and pa11y for WCAG compliance. Integrated with Cypress, Playwright, WebdriverIO, and CI/CD for early defect detection. Automated contrast checks, keyboard navigation, and screen reader validation, generating reports with Deque axe DevTools & WAVE API.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671894/WIP_n4gk7i.jpg',
    images: [],
    video: 'https://player.vimeo.com/video/876544255',
    tags: ['Lighthouse', 'axe-core', 'Pa11y'],
    github: 'https://github.com/scriptcrux/healthcare-automation',
    category: 'Accessibility',
  },
];
