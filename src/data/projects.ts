// src/data/projects.ts

export interface ProjectData {
  id: string;
  title: string;
  category: 'Full-Stack QA' | 'Frontend' | 'Backend' | 'GenAI' | 'Mobile' | 'Accessibility';
  description: string;
  mainImage: string;
  images: string[];
  video?: string;
  tags: string[];
  github?: string;
  isPrivate?: boolean;
  privateNotice?: string;
  ecosystem?: {
    sut: string;
    coreLib: string;
    role: string;
  };
  architectureMetrics: {
    workers: string;
    duration: string;
    flakeRate: string;
    testCount: string;
  };
  highlights: string[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: 'enterprise-workflow-platform-k8s',
    title: 'Kubernetes Workflow Engine & 8-Layer Testing Pyramid',
    category: 'Full-Stack QA',
    description:
      'Production-grade event-driven microservices workflow engine deployed on Kubernetes. Features Transactional Outbox dual-write resilience, Apache Kafka with CloudEvents 1.0, W3C distributed tracing via OpenTelemetry & Jaeger, multi-tenant PostgreSQL Row-Level Security (RLS), framework-agnostic Microfrontends (<workflow-widget>), and an 8-Layer Quality Engineering Testing Pyramid.',
    mainImage: '/images/k8s-workflow-platform.jpg',
    images: [
      '/images/k8s-workflow-platform.jpg',
      '/images/k8s-cicd-pipeline.jpg',
    ],
    tags: ['Full-Stack', 'FE & BE', 'Kubernetes', 'Apache Kafka', 'Fastify', 'TypeScript', 'Pact CDCT', 'OpenTelemetry', 'PostgreSQL RLS', 'Playwright', 'k6', 'Docker'],
    github: 'https://github.com/scriptcrux/enterprise-workflow-platform-k8s',
    architectureMetrics: {
      workers: 'Kubernetes Pods & HPA',
      duration: 'P95 < 100ms / ~8s Full CI',
      flakeRate: '0.0% Flake / Zero-Loss Outbox',
      testCount: '140+ Tests / 30+ Suites',
    },
    highlights: [
      '8-Layer Automated Testing Pyramid: Unit, SLA Time-Travel, Component, Pact Consumer-Driven Contracts (HTTP & MessagePact), Security RLS, Integration with Testcontainers, Playwright E2E with Axe a11y, and k6 Load Benchmarks.',
      'Transactional Outbox Relay: Guarantees zero data loss during dual-writes across PostgreSQL and Kafka partitions with Murmur2 hashing.',
      'W3C Distributed Tracing: Injects traceparent headers across Fastify REST APIs, Kafka brokers, and downstream consumers with Jaeger waterfall visualization.',
      'Multi-Tenant Isolation & RLS: Row-Level Security policies in PostgreSQL with automated IDOR defense and DB connection pool leak prevention suites.',
      'Microfrontend Web Component (<workflow-widget>): Zero-dependency Custom Element with Shadow DOM encapsulation and bi-directional event bus contracts.',
    ],
    codeSnippet: {
      filename: 'tests/contract/pact-workflow.spec.ts',
      language: 'typescript',
      code: `import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { describe, it, expect } from 'vitest';
import axios from 'axios';

const provider = new PactV3({
  consumer: 'HostAppClient',
  provider: 'WorkflowApiService',
});

describe('Consumer-Driven Contract: Workflow State Transition', () => {
  it('validates workflow submission with CloudEvents headers & idempotency', () => {
    return provider
      .uponReceiving('a request to submit an approval workflow')
      .withRequest({
        method: 'POST',
        path: '/api/v1/workflows',
        headers: {
          'Content-Type': 'application/json',
          'x-tenant-id': MatchersV3.regex(/^tenant-[a-z0-9-]+$/, 'tenant-corp-a'),
          'Idempotency-Key': MatchersV3.uuid('b729a4a1-7c98-406a-a28d-19430db80d92'),
        },
        body: {
          title: 'Q4 Infrastructure Expansion',
          amount: 45000,
          currency: 'USD',
          department: 'DevOps',
        },
      })
      .willRespondWith({
        status: 201,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'x-trace-id': MatchersV3.like('trace_01h8x9p3q7k4'),
        },
        body: {
          id: MatchersV3.uuid('d45e6f7a-8b9c-4d1e-bf23-456789abcdef'),
          status: 'PENDING_APPROVAL',
          currentStep: 1,
          totalSteps: 2,
          requiredRole: 'DEPT_MANAGER',
          createdAt: MatchersV3.iso8601DateTime(),
        },
      })
      .executeTest(async (mockServer) => {
        const response = await axios.post(\`\${mockServer.url}/api/v1/workflows\`, {
          title: 'Q4 Infrastructure Expansion',
          amount: 45000,
          currency: 'USD',
          department: 'DevOps',
        }, {
          headers: {
            'x-tenant-id': 'tenant-corp-a',
            'Idempotency-Key': 'b729a4a1-7c98-406a-a28d-19430db80d92',
          },
        });

        expect(response.status).toBe(201);
        expect(response.data.status).toBe('PENDING_APPROVAL');
      });
  });
});`,
    },
  },

  {
    id: 'billpulse-ui-automation',
    title: 'BillPulse Fintech: Playwright POM & Hybrid Auth Architecture',
    category: 'Frontend',
    description:
      'Enterprise E2E test automation framework for the BillPulse Fintech platform built with Playwright and TypeScript. Features API-assisted hybrid authentication to bypass slow UI login, custom page object models (POM), soft assertions, and real-time ReportPortal telemetry.',
    mainImage: '/images/billpulse-ui-dashboard.jpg',
    images: [
      '/images/billpulse-ui-dashboard.jpg',
      '/images/automation-core-sdk-arch.jpg',
    ],
    tags: ['FE', 'Frontend', 'Playwright', 'TypeScript', 'ReportPortal', 'Page Object Model', 'Hybrid Auth', 'CI/CD'],
    github: 'https://github.com/scriptcrux/ui-automation-ts',
    ecosystem: {
      sut: 'billpulse-fintech-app (🔒 Private)',
      coreLib: '@script-crux/adapter-playwright (🔒 Private SDK via PAT)',
      role: 'End-to-End Browser UI & User Journey Automation',
    },
    architectureMetrics: {
      workers: '4 Parallel Workers',
      duration: '1m 45s Suite Runtime',
      flakeRate: '0.0% Zero-Flake Hybrid Auth',
      testCount: '45+ E2E Scenarios',
    },
    highlights: [
      'Hybrid Fast-Path Authentication: Pre-seeds JWT session state directly into browser storage via background API controllers, skipping repetitive UI login forms in 90% of tests.',
      'Core SDK Integration: Extends @script-crux/adapter-playwright for standardized base fixtures, page object abstractions, and soft assertion pipelines.',
      'ReportPortal AI-Assisted Telemetry: Real-time launch logs, automated failure triage, and execution duration tracking embedded in CI.',
      'Multi-Role RBAC Validation: End-to-end user journeys validating Member, Manager, and Admin permissions across invoicing, payment schedules, and async exports.',
    ],
    codeSnippet: {
      filename: 'src/tests/billpulse/hybrid-auth.spec.ts',
      language: 'typescript',
      code: `import { test, expect } from '@playwright/test';
import { BillPulseAuthController } from '../../controllers/billPulseAuthController.js';
import { InvoiceDashboardPage } from '../../pages/billpulse/InvoiceDashboardPage.js';

test.describe('E2E Hybrid: API Pre-Seeded Fast-Path Authentication', () => {
  test('should bypass UI login form by pre-seeding JWT session via AuthController', async ({ page, request }) => {
    const authController = new BillPulseAuthController(request);
    const dashboard = new InvoiceDashboardPage(page);

    // 1. Pre-seed session via background API call using BaseApi controller
    await authController.preSeedAuthSession(page, 'manager@billpulse.io', 'Password123!');

    // 2. Navigate directly to dashboard root without hitting login form
    await page.goto('/');

    // 3. Verify user lands directly on Dashboard with MANAGER role
    await expect(dashboard.navbar.navbar).toBeVisible();
    await expect(dashboard.navbar.userRoleBadge).toHaveText('MANAGER');
    await expect(dashboard.createInvoiceButton).toBeVisible();
  });
});`,
    },
  },

  {
    id: 'billpulse-api-automation',
    title: 'BillPulse Fintech: Axios Enterprise API & Contract Engine',
    category: 'Backend',
    description:
      'High-throughput REST API test automation engine engineered with Axios, TypeScript, and Zod runtime schema validation. Implements Builder, Factory, and Strategy design patterns with auth token rotation, security tamper assertions, and retry backoff policies.',
    mainImage: '/images/billpulse-api-dashboard.jpg',
    images: [
      '/images/billpulse-api-dashboard.jpg',
      '/images/automation-core-sdk-arch.jpg',
    ],
    tags: ['BE', 'Backend', 'Axios', 'TypeScript', 'Zod', 'Design Patterns', 'Testcontainers', 'Security QA'],
    github: 'https://github.com/scriptcrux/api-automation-ts',
    ecosystem: {
      sut: 'billpulse-fintech-app (🔒 Private)',
      coreLib: '@script-crux/adapter-axios (🔒 Private SDK via PAT)',
      role: 'Contract, Security Tamper & High-Throughput API Testing',
    },
    architectureMetrics: {
      workers: 'Node Native Runner / TSX',
      duration: '28s Full Execution',
      flakeRate: '100% Schema Conformance',
      testCount: '80+ Endpoints & Microservices',
    },
    highlights: [
      'Advanced GoF Design Patterns: Employs Builder, Factory, and Strategy patterns for flexible invoice payload generation and auth strategy injection.',
      'Security & Tamper Verification: Automated test suites asserting 401 Unauthorized rejection on tampered JWT signatures, expired tokens, and missing auth headers.',
      'Strict Schema Drift Defense: Validates all API response payloads against strict Zod contract schemas with custom ContractValidationError triage.',
      'Core SDK Client Architecture: Powered by @script-crux/adapter-axios base client with automated request telemetry interceptors and retry policies.',
    ],
    codeSnippet: {
      filename: 'src/tests/security-and-idempotency.spec.ts',
      language: 'typescript',
      code: `import { describe, it } from 'node:test';
import assert from 'node:assert';
import { BillPulseClient } from '../clients/billPulseClient.js';
import { FrameworkApiError } from '@script-crux/adapter-axios';

describe('API: Security, Token Tampering & Idempotent State Transitions', () => {
  const client = new BillPulseClient({ baseUrl: 'http://localhost:4000' });

  describe('Security & Token Tampering Assertions', () => {
    it('should reject requests with tampered JWT signatures with 401 Unauthorized', async () => {
      // Craft a tampered JWT (modified payload/signature)
      const fakeTamperedToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzcl85OTkiLCJlbWFpbCI6ImhhY2tlckBleHBsb2l0LmlvIiwicm9sZSI6IkFETUlOIn0.INVALID_SIGNATURE_TAMPERED';

      const tamperedClient = new BillPulseClient(
        { baseUrl: 'http://localhost:4000' },
        {
          getAuthHeader: async () => \`Bearer \${fakeTamperedToken}\`,
          getRoleName: () => 'TAMPERED_ADMIN'
        }
      );

      await assert.rejects(
        async () => {
          await tamperedClient.getInvoices();
        },
        (err: Error) => {
          assert.ok(err instanceof FrameworkApiError);
          assert.strictEqual((err as FrameworkApiError).status, 401);
          return true;
        }
      );
    });
  });
});`,
    },
  },

  {
    id: 'automation-core-lib',
    title: 'Enterprise Test Automation Core SDK & Adapter Monorepo',
    category: 'Full-Stack QA',
    isPrivate: true,
    privateNotice:
      'Proprietary Enterprise Core SDK published as scoped @script-crux packages to private GitHub Packages registry via PAT.',
    description:
      'Architectural foundation powering multi-repository test automation suites. Engineered as a pnpm monorepo publishing scoped @script-crux packages: @script-crux/adapter-playwright, @script-crux/adapter-axios, @script-crux/core-api, and @script-crux/core-shared. Implements base client wrappers, telemetry interceptors, custom fixtures, and resilience policies.',
    mainImage: '/images/automation-core-sdk-arch.jpg',
    images: [
      '/images/automation-core-sdk-arch.jpg',
      '/images/billpulse-ui-dashboard.jpg',
      '/images/billpulse-api-dashboard.jpg',
    ],
    tags: ['Full-Stack', 'FE & BE', 'pnpm Monorepo', 'TypeScript', 'Playwright Adapter', 'Axios Adapter', 'GitHub Packages', 'Husky'],
    github: 'https://github.com/scriptcrux/automation-core-lib',
    ecosystem: {
      sut: 'billpulse-fintech-app & Microservices',
      coreLib: '@script-crux Monorepo Engine',
      role: 'Enterprise Framework Foundation & Reusable Test Infrastructure',
    },
    architectureMetrics: {
      workers: 'pnpm Workspaces',
      duration: 'Zero-Redundancy SDK',
      flakeRate: '100% Strict Type Safety',
      testCount: '4 Core Packages Shared',
    },
    highlights: [
      'Modular Workspace Architecture: Separates concern into adapter-playwright, adapter-axios, core-api, and core-shared packages.',
      'Centralized Base Axios Client: Bundles telemetry interceptors, standardized error handling (FrameworkApiError), and configurable retry policies.',
      'Playwright Base Architecture: Standardizes Page Object base classes, custom baseUiTest fixtures, soft assertions, and server-sent event (SSE) listeners.',
      'Private Registry Distribution: Deployed via GitHub Actions CI/CD to GitHub Packages, consumed by external UI and API repos using Personal Access Tokens (PAT).',
    ],
    codeSnippet: {
      filename: 'packages/adapter-playwright/src/index.ts',
      language: 'typescript',
      code: `// @script-crux/adapter-playwright: Standardized Architecture SDK

// Core Architecture Blocks
export { BasePage } from './base/basePage.js';
export { baseUiTest, expect } from './fixtures/baseUiTest.js';
export { BaseApi } from './base/baseApi.js';

// Reporting Decorators & Reporters
export { Step } from './decorator/step.js';
export { default as CustomTestReporter } from './listener/testReporter.js';

// Low-Level Window/Browser Utilities
export { BrowserActions } from './utils/browserActions.js';
export { NetworkMocking } from './utils/networkMocking.js';
export { SoftAssert } from './utils/softAssert.js';
export { EventStreamHelper } from './utils/eventStreamHelper.js';
export type { MockResponseOptions, SoftAssertionFailure, EventStreamWaitOptions } from './types.js';`,
    },
  },

  {
    id: 'cypress-e2e',
    title: 'Cypress Enterprise E2E & Multi-Pipeline CI/CD Framework',
    category: 'Frontend',
    description:
      'Production-grade Cypress test automation framework engineered with TypeScript, multi-pipeline CI/CD orchestration (GitHub Actions matrix & Jenkinsfile), Docker containerization, Cypress Cloud dashboard integration, and Mochawesome reporting with embedded failure artifacts.',
    mainImage: 'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/cypress_home_grjbr0.webp',
    images: [
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/cypress_home_grjbr0.webp',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_1_jjfgvs.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_2_rt6ab6.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_3_gfujg1.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739670497/Cypress_CI_4_gsfbu3.png',
    ],
    tags: ['FE', 'Frontend', 'Cypress 13', 'TypeScript', 'GitHub Actions', 'Jenkins CI', 'Docker', 'Cypress Cloud', 'Mochawesome', 'Page Object Model'],
    github: 'https://github.com/scriptcrux/auto-frameworks-Cypress-CI',
    architectureMetrics: {
      workers: 'Matrix Sharding (4 Browsers)',
      duration: '3m 15s Multi-Browser Run',
      flakeRate: '< 0.3% Flake Rate',
      testCount: '120+ E2E Scenarios',
    },
    highlights: [
      'Engineered GitHub Actions CI matrix pipelines enabling parallel cross-browser execution across Chrome, Edge, Firefox, and Electron in headless and headed modes.',
      'Developed scripted Jenkinsfile CI/CD pipeline supporting parameter-driven browser/spec selection, automated CRON triggers, and post-build email alerts with HTML test reports.',
      'Configured cypress-mochawesome-reporter with automatic failure screenshot capture, inline video recordings, and dynamic Jenkins CSP workarounds.',
      'Implemented Page Object Model (POM) architecture paired with custom Node event tasks (neat-csv & fs) for dynamic data-driven test generation.',
      'Containerized execution within official cypress/base Docker images for zero-drift parity between local development and cloud CI runners.',
    ],
    codeSnippet: {
      filename: 'cypress.config.ts',
      language: 'typescript',
      code: `import { defineConfig } from 'cypress';
import * as fs from 'fs';
import neatCsv from 'neat-csv';
import path from 'path';

export default defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'E2E Testing Suite Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    baseUrl: 'https://ecommerce-playground.lambdatest.io/index.php',
    pageLoadTimeout: 120000,
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // Custom Node tasks for data-driven testing with CSV & dynamic file storage
      on('task', {
        async readFileCSV(fileName: string) {
          const text = fs.readFileSync(fileName, 'utf8');
          return await neatCsv(text);
        },
        writeFileCSV({ fileName, data }: { fileName: string; data: string }) {
          const fullPath = path.join(__dirname, fileName);
          fs.writeFileSync(fullPath, data);
          return null;
        },
      });
    },
  },
});`,
    },
  },

  {
    id: 'genai-ragas',
    title: 'CloudPulse RAG Intelligence Engine & Continuous Ragas Evaluation',
    category: 'GenAI',
    description:
      'Enterprise-grade Retrieval-Augmented Generation (RAG) knowledge engine and continuous evaluation quality pipeline built with FastAPI, Ragas 0.3.9, LangChain, ChromaDB, and Pytest. Benchmarks the CloudPulse enterprise cloudops & security corpus against strict RAG Triad quality gates (Faithfulness >= 0.85, Response Relevance >= 0.80, Context Precision >= 0.80, Context Recall >= 0.80), enforcing 100% negative refusal on adversarial queries and sub-millisecond p95 latency in CI/CD.',
    mainImage: '/images/ragas-eval-dashboard.jpg',
    images: ['/images/ragas-eval-dashboard.jpg'],
    tags: ['GenAI QA', 'Ragas 0.3.9', 'FastAPI', 'LangChain', 'Python', 'ChromaDB', 'Pytest', 'RAG Triad', 'Anti-Hallucination', 'CI/CD Gates'],
    github: 'https://github.com/scriptcrux/rag-continuous-eval-pipeline',
    architectureMetrics: {
      workers: 'Ragas Async Evaluator',
      duration: 'p95 < 0.67ms / 0.01s Eval',
      flakeRate: '1.000 Faithfulness (0 Hallucination)',
      testCount: '24 Automated Pytest Suites',
    },
    highlights: [
      'RAG Triad Continuous Quality Gates: Enforces strict CI/CD gate assertions evaluating Faithfulness (1.000), Response Relevance (0.806), Context Precision (0.875), and Context Recall (0.993) on a curated golden dataset.',
      'Strict Anti-Hallucination & Adversarial Refusal: Grounded prompt engineering paired with automated adversarial tests verifying 100% safe negative refusals on out-of-domain queries.',
      'Three-Tier Testing Pyramid: Complete hierarchy covering unit tests (chunking, dense embeddings, vector indexing), integration tests (FastAPI endpoints, multi-turn chat sessions), and Ragas quality gate benchmarks.',
      'Hermetic & Pluggable LLM Provider Layer: Zero-cost offline deterministic mock provider for reproducible CI/CD runs, with seamless switching to OpenAI (gpt-4o-mini/gpt-4o) and local Ollama (llama3.2).',
      'ChromaDB Vector Store & Recursive Ingestion: Indexes operational incident response playbooks, SOC 2/ISO 27001 policies, and cloud disaster recovery SLAs with semantic metadata and citation tracing.',
      'Automated Scorecard Artifacts: Automatically generates executive markdown reports (evaluation_report.md) and machine-readable JSON scorecards on every CI pull request.',
    ],
    codeSnippet: {
      filename: 'tests/ragas_eval/test_ragas_quality_gates.py',
      language: 'python',
      code: `"""Continuous Integration Quality Gate Tests for Ragas Evaluation Suite."""
import pytest
from evaluation.evaluator import RagasEvaluator

@pytest.fixture
def evaluator(rag_engine, quality_thresholds):
    return RagasEvaluator(rag_engine=rag_engine, thresholds=quality_thresholds, provider="mock")

@pytest.mark.eval
@pytest.mark.asyncio
async def test_full_ragas_benchmark_quality_gates(evaluator, golden_dataset, quality_thresholds):
    """Executes complete benchmark and asserts that all enterprise quality gates pass."""
    report = await evaluator.run_benchmark(golden_dataset)

    # 1. Overall Pass check
    assert report.all_passed is True, "All Ragas quality gates must pass"

    # 2. Individual metric checks against defined thresholds
    metrics = report.metrics_summary
    assert metrics["faithfulness"].score >= quality_thresholds.min_faithfulness
    assert metrics["response_relevance"].score >= quality_thresholds.min_response_relevance
    assert metrics["context_precision"].score >= quality_thresholds.min_context_precision
    assert metrics["context_recall"].score >= quality_thresholds.min_context_recall
    assert metrics["negative_refusal_rate"].score >= quality_thresholds.min_negative_refusal_rate

    # 3. Operational SLA checks
    assert report.latency_p95_ms <= quality_thresholds.max_latency_p95_ms
    assert report.multi_turn_score >= 0.80`,
    },
  },

  {
    id: 'genai-deepeval',
    title: 'FinSight: SEC 10-K RAG & LangGraph Agentic DeepEval Suite',
    category: 'GenAI',
    description:
      'Production-grade financial due diligence RAG application and automated quality engineering harness powered by LangGraph (StateGraph), DeepEval 3.7+, Hybrid Search (BM25 + Dense Embeddings with Reciprocal Rank Fusion), and Pydantic v2. Orchestrates agentic multi-turn workflows with conditional safety routing (short-circuiting prompt injections), multi-hop cross-entity comparative analysis (MSFT, NVDA, AAPL), and rigorous CI/CD quality gates (Faithfulness >= 0.85, Relevancy >= 0.70, Hallucination <= 0.15, G-Eval Financial Rigor >= 0.80).',
    mainImage: '/images/finsight-langgraph-dashboard.jpg',
    images: [
      '/images/finsight-langgraph-dashboard.jpg',
      '/images/finsight-deepeval-dashboard.jpg',
    ],
    tags: ['GenAI QA', 'LangGraph', 'StateGraph', 'DeepEval 3.7+', 'G-Eval', 'Hybrid Search (RRF)', 'BM25', 'Pydantic v2', 'Python', 'SEC 10-K', 'Pytest'],
    github: 'https://github.com/scriptcrux/production-rag-evaluation-suite',
    architectureMetrics: {
      workers: 'LangGraph + DeepEval Judge',
      duration: 'Latency < 2.8s / Cost < $0.015',
      flakeRate: '0.00% Hallucination Rate',
      testCount: '8 Golden Benchmark Scenarios',
    },
    highlights: [
      'LangGraph StateGraph Agentic Workflow: State machine orchestration across 7 modular nodes (guardrail_check, safety_rejection, query_rewriting, hybrid_retrieval, reranking, synthesis, telemetry_and_memory) with type-safe AgentState.',
      'Conditional Safety Routing & Short-Circuiting: Automatically detects prompt injections and short-circuits execution directly to security refusal with sub-10ms response time, completely bypassing downstream retrieval and LLM token costs.',
      'Multi-Hop Cross-Entity Synthesis (GOLDEN-007): Advanced RAG benchmark evaluating comparative multi-document synthesis across Microsoft Azure AI ($105.4B, 30% growth) and NVIDIA Data Center ($47.5B, 217% growth).',
      'Comprehensive DeepEval Metric Quality Gates: Asserts Faithfulness (>= 0.85), Answer Relevancy (>= 0.70), Hallucination (<= 0.15), Contextual Precision (>= 0.70), and Contextual Recall (>= 0.80) to ensure strict GAAP numerical accuracy.',
      'Custom G-Eval (Financial Rigor Metric): Tailored LLM-as-a-Judge metric scoring US-GAAP accounting standards, exact citations, audit classification, and presence of mandatory SEC non-investment advisory disclaimers.',
      'Streaming Observability & Telemetry: Leverages graph.astream() for step-by-step state diffs, sub-stage latency profiling (retrieval, rerank, LLM), and query cost tracking ($0.012/query avg).',
    ],
    codeSnippet: {
      filename: 'src/agent/graph.py',
      language: 'python',
      code: `"""LangGraph-powered stateful orchestration pipeline for FinSight Financial Analyst."""
from langgraph.graph import StateGraph, START, END
from src.agent.graph import AgentState, route_guardrails

def build_financial_analyst_graph(agent: "FinancialAnalystAgent"):
    workflow = StateGraph(AgentState)

    # 1. Register Modular Pipeline Nodes
    workflow.add_node("node_guardrail_check", node_guardrail_check)
    workflow.add_node("node_safety_rejection", node_safety_rejection)
    workflow.add_node("node_query_rewriting", node_query_rewriting)
    workflow.add_node("node_hybrid_retrieval", node_hybrid_retrieval)
    workflow.add_node("node_reranking", node_reranking)
    workflow.add_node("node_synthesis", node_synthesis)
    workflow.add_node("node_telemetry_and_memory", node_telemetry_and_memory)

    # 2. Add Edges & Conditional Branching (Short-circuit on injection)
    workflow.add_edge(START, "node_guardrail_check")
    workflow.add_conditional_edges(
        "node_guardrail_check",
        route_guardrails,
        {
            "node_safety_rejection": "node_safety_rejection",
            "node_query_rewriting": "node_query_rewriting",
        },
    )
    workflow.add_edge("node_safety_rejection", END)
    workflow.add_edge("node_query_rewriting", "node_hybrid_retrieval")
    workflow.add_edge("node_hybrid_retrieval", "node_reranking")
    workflow.add_edge("node_reranking", "node_synthesis")
    workflow.add_edge("node_synthesis", "node_telemetry_and_memory")
    workflow.add_edge("node_telemetry_and_memory", END)

    return workflow.compile()`,
    },
  },

  {
    id: 'artillery-fw',
    title: 'Artillery FinTech Performance & Chaos Resilience Framework',
    category: 'Backend',
    description:
      'Production-grade performance, load, stress, and chaos testing framework powered by Artillery 2.x and Node.js. Validates core banking microservices under 10,000+ RPS concurrency, featuring OAuth2 JWT authentication, UUIDv4 transaction idempotency deduplication, database connection pool saturation modeling, ETag optimistic locking, real-time WebSocket live-ledger streaming, and strict CI/CD SLA quality gating (p99 < 650ms).',
    mainImage: '/images/artillery-dashboard.jpg',
    images: ['/images/artillery-dashboard.jpg'],
    tags: ['BE', 'Backend', 'Artillery 2.x', 'Node.js', 'FinTech', 'Chaos Engineering', 'WebSocket', 'Idempotency', 'OAuth2 JWT', 'GitHub Actions', 'Prometheus'],
    github: 'https://github.com/scriptcrux/artillery-performance-framework',
    architectureMetrics: {
      workers: '10,000+ RPS Concurrency',
      duration: 'Multi-Phase Ramp & Soak',
      flakeRate: '0.00% Zero-Flake SLA Gates',
      testCount: '15+ Load Scenarios & Journeys',
    },
    highlights: [
      '7-Step Stateful Banking Lifecycle: Simulates end-to-end customer journeys chaining OAuth2 JWT auth, profile/KYC verification, credit card balances, ledger totals, settlement underwriting, and account closure.',
      'Idempotency & Replay Deduplication: Benchmarks duplicate network retries using UUIDv4 Idempotency-Keys, verifying zero duplicate ledger mutations and sub-millisecond cached replay responses under race conditions.',
      'Optimistic Locking & Race Defense: Validates ETag ("v1") and If-Match concurrency headers during high-volume parallel updates to prevent lost-update database anomalies.',
      'Real-Time WebSocket Ledger Feed (ws://): Tests continuous bi-directional transaction streaming under sustained concurrent connection floods, validating frame latency and socket resilience.',
      'Chaos Injection & DB Pool Modeling: Simulates database connection pool exhaustion (cap: 40), downstream gateway latency spikes (X-Chaos-Mode), and token-bucket rate limiter bursts.',
      'Automated CI/CD Quality Gates: Enforces strict SLA thresholds (p95 < 350ms, p99 < 650ms, max error rate < 1%) directly blocking pull requests in GitHub Actions upon performance regression.',
    ],
    codeSnippet: {
      filename: 'scenarios/end-to-end-banking-journey.yml',
      language: 'yaml',
      code: `config:
  target: "https://api.banking.internal"
  processor: "./support/helper.js"
  ensure:
    p95: 350
    p99: 650
    maxErrorRate: 0.01

scenarios:
  - name: "E2E Authenticated Banking & Debt Settlement Lifecycle"
    flow:
      - function: "setRequestParams"

      # Step 1: OAuth2 Client Authentication
      - post:
          url: "/api/v1/auth/token"
          headers:
            Content-Type: "application/json"
          json:
            clientId: "fintech_client_{{ $uuid }}"
            grantType: "client_credentials"
          capture:
            - json: "$.accessToken"
              as: "authToken"

      # Step 2: Query Card Balance & Optimistic ETag Lock
      - get:
          url: "/api/v1/credit-card/{{ creditCardUid }}"
          headers:
            Authorization: "Bearer {{ authToken }}"
          capture:
            - header: "etag"
              as: "cardEtag"

      # Step 3: Underwrite Debt Settlement with Idempotency Key
      - post:
          url: "/api/v1/get-settlement"
          headers:
            Authorization: "Bearer {{ authToken }}"
            Idempotency-Key: "tx-idem-{{ idempotencyKey }}"
          json:
            creditCardUid: "{{ creditCardUid }}"
            settlementType: "LUMP_SUM"
            currentBalance: "{{ currentBalance }}"

      # Step 4: Account Closure with Concurrency Verification
      - post:
          url: "/api/v1/close-eligibility"
          headers:
            Authorization: "Bearer {{ authToken }}"
            If-Match: "{{ cardEtag }}"`,
    },
  },

  {
    id: 'k6-load-engine',
    title: 'Grafana K6 Flash-Sale & Distributed Inventory Lock Engine',
    category: 'Backend',
    description:
      'High-throughput distributed e-commerce performance testing framework powered by Grafana k6 (ES6). Simulates high-contention flash-sale spikes up to 8,500+ RPS, validating atomic two-phase inventory reservations with 60-second TTL locks, cryptographic idempotency enforcement, faceted catalog search, and automated SLA threshold gating (p95 < 180ms, p99 < 250ms).',
    mainImage: '/images/k6-performance-dashboard.jpg',
    images: [
      '/images/k6-performance-dashboard.jpg',
      '/images/k6-html-report.jpg',
    ],
    tags: ['BE', 'Backend', 'Grafana k6', 'JavaScript (ES6)', 'Distributed Locks', 'Flash-Sale Engine', 'TTL Caching', 'Idempotency', 'GitHub Actions', 'HTML Reporter'],
    github: 'https://github.com/scriptcrux/k6-enterprise-performance-framework',
    architectureMetrics: {
      workers: '100 Concurrent VUs / 8.5k RPS',
      duration: '4-Phase Ramp & Spike Curves',
      flakeRate: '0.00% Error Threshold (SLA Pass)',
      testCount: 'Load, Stress, Spike & Soak Suites',
    },
    highlights: [
      'Two-Phase Inventory Reservation & TTL Locks: Stress-tests atomic inventory reservations with 60s expiration locks, verifying that stock exhaustion (409 Conflict) is handled cleanly without database deadlocks.',
      'Cryptographic Idempotency Enforcement: Generates unique Idempotency-Key headers per virtual user to ensure network retry floods never result in duplicate orders or multi-billing.',
      'Multi-Stage Workload Profiles: Executes automated Load (15 VUs), Stress (40 VUs), Spike (80 VUs instantaneous surge), and Soak (20 VUs endurance) test suites.',
      'Custom Zero-Dependency Dark-Mode Reporter: Leverages k6 native handleSummary() lifecycle hook to compile interactive HTML dashboards with p50/p90/p95/p99 latency breakdowns.',
      'Turnkey Runner & Health Probing: Orchestrated via scripts/run-all-tests.js with automated dynamic port discovery, mock server lifecycle traps, and /healthz readiness polling.',
      'CI/CD SLA Quality Gating: Automated GitHub Actions pipeline asserting p95 < 180ms and error rate < 0.1%, rejecting regressions prior to deployment.',
    ],
    codeSnippet: {
      filename: 'tests/load/load-test.js',
      language: 'javascript',
      code: `import http from 'k6/http';
import { check, group } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';
import { generateIdempotencyKey, addThinkTime } from '../../src/utils/data-utils.js';
import thresholds from '../../config/thresholds/load-thresholds.js';

// Custom Flash-Sale Performance Metrics
const reserveDuration = new Trend('inventory_reserve_duration');
const checkoutDuration = new Trend('checkout_duration');
const successRate = new Rate('success_rate');

export const options = {
  stages: [
    { duration: '5s', target: 20 },   // Phase 1: Rapid Warmup
    { duration: '15s', target: 100 }, // Phase 2: Peak Flash-Sale Concurrency
    { duration: '5s', target: 0 },    // Phase 3: Flush & Ramp Down
  ],
  thresholds: thresholds,
  userAgent: 'K6-Enterprise-Shopper/v2.0',
};

export default function () {
  const baseUrl = 'http://localhost:8090';
  let authToken = 'bearer_demo_token';
  const idempotencyKey = generateIdempotencyKey();

  // 1. Two-Phase Inventory Lock Reservation (60s TTL)
  group('01_Atomic_Inventory_Reservation', function () {
    const start = Date.now();
    const res = http.post(
      \`\${baseUrl}/api/cart/reserve\`,
      JSON.stringify({ productId: 'prod_sneaker_001', quantity: 1 }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${authToken}\`,
          'Idempotency-Key': idempotencyKey,
        },
        responseCallback: http.expectedStatuses(200, 201, 409),
      }
    );
    reserveDuration.add(Date.now() - start);

    check(res, {
      'reserve: success or graceful stock out': (r) => r.status === 201 || r.status === 409,
      'reserve: lock TTL returned': (r) => r.status === 409 || r.json('lockTtlSeconds') === 60,
    });
  });

  addThinkTime(0.5, 1.2);

  // 2. Finalize Idempotent Order Checkout
  group('02_Idempotent_Checkout', function () {
    const res = http.post(
      \`\${baseUrl}/api/checkout\`,
      JSON.stringify({ paymentMethod: 'SAVED_CARD' }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${authToken}\`,
          'Idempotency-Key': idempotencyKey,
        },
      }
    );
    checkoutDuration.add(res.timings.duration);
    successRate.add(res.status === 200 || res.status === 409);
  });
}`,
    },
  },



  {
    id: 'appium-mobile',
    title: 'Enterprise Cross-Platform Mobile Test Automation (Appium 2.x + iOS & Android)',
    category: 'Mobile',
    description:
      'Production-ready, cross-platform mobile test automation framework engineered with Appium 2.x, WebdriverIO 9, and TypeScript. Automates complex native workflows across both Android (UiAutomator2) and iOS (XCUITest) using Page Object Model (POM) architecture, W3C Actions API gestures (vertical/horizontal scrolls, drag-and-drop, pinch-to-zoom), device lifecycle control, biometric authentication mocking, and Allure 2 test observability.',
    mainImage: '/images/appium-mobile-dashboard.jpg',
    images: [
      '/images/appium-mobile-dashboard.jpg',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671835/appium_home_rluzmo.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671836/appium_CI_1_xmzlw5.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739671835/appium_CI_2_g7wdhn.png',
    ],
    tags: ['Mobile', 'Appium 2.x', 'WebdriverIO 9', 'TypeScript', 'Android (UiAutomator2)', 'iOS (XCUITest)', 'W3C Actions Gestures', 'Page Object Model', 'Allure 2', 'Cross-Platform'],
    github: 'https://github.com/scriptcrux/appium-mobile-automation-framework',
    architectureMetrics: {
      workers: 'UiAutomator2 & XCUITest',
      duration: '4m 20s Parallel Suite',
      flakeRate: '0.0% Zero-Flake W3C Sync',
      testCount: '65+ Native Mobile Scenarios',
    },
    highlights: [
      'Decoupled Appium 2.x & WDIO 9 Architecture: Decouples driver management across independent UiAutomator2 (Android) and XCUITest (iOS) plugins, replacing deprecated TouchAction APIs with native W3C pointer sequences.',
      'Complex W3C Gestures Engine: Coordinate-based swiping, vertical scroll-into-view with recursive element detection, horizontal carousel swipes, drag-and-drop, and multi-touch pinch-to-zoom.',
      'Unified Cross-Platform ScreenFactory: Dynamic platform detection and locator abstraction layer that dispatches OS-specific screen objects to execute identical business test specs on Android and iOS.',
      'Native OS Controls & Hardware Interception: Automates multi-component UIPickerView wheels, UISliders, Android calendar DatePickers, system permission dialogs, and biometric fingerprint mocking.',
      'App Lifecycle & Intent Control: Direct execution of backgrounding/resuming, Android activity intent launches (startActivity), clipboard manipulation, and orientation rotations (Portrait <-> Landscape).',
      'Enterprise Allure 2 Observability: Enriched reporting with Epics, Features, Severities, step breakdown, and automatic failure screenshot capture integrated with GitHub Actions CI emulators.',
    ],
    codeSnippet: {
      filename: 'src/core/Gestures.ts',
      language: 'typescript',
      code: `/**
 * Professional W3C Actions API Gestures Implementation (Appium 2.x + WDIO 9)
 * Supports both Android (UiAutomator2) and iOS (XCUITest) without TouchAction
 */
export class Gestures {
  public static async swipeCoordinates(from: Point, to: Point, durationMs: number = 800): Promise<void> {
    await driver.performActions([
      {
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: Math.round(from.x), y: Math.round(from.y) },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 150 },
          { type: 'pointerMove', duration: durationMs, x: Math.round(to.x), y: Math.round(to.y) },
          { type: 'pointerUp', button: 0 }
        ]
      }
    ]);
    await driver.releaseActions();
  }

  public static async scrollUntilVisible(target: ElementRef, maxScrolls: number = 5): Promise<boolean> {
    const element = await target;
    for (let attempt = 1; attempt <= maxScrolls; attempt++) {
      if (await element.isDisplayed()) return true;
      await this.swipe({ direction: 'up', distancePercentage: 0.4 });
      await driver.pause(400);
    }
    return await element.isDisplayed();
  }
}`,
    },
  },


  {
    id: 'webdriverio-fw',
    title: 'MedPulse EHR: WebdriverIO v10 Agentic BDD & Healthcare Platform',
    category: 'Frontend',
    description:
      'Enterprise-grade WebdriverIO v10, Cucumber BDD, and TypeScript test automation framework architected for mission-critical clinical healthcare systems (MedPulse EHR). Features autonomous AI Agentic intent testing via Model Context Protocol (@wdio/mcp), automated WCAG 2.1 AA accessibility gating, WebDriver BiDi network fault injection, drug-drug contraindication safety intercepts, bedside clinical rounds mobility (iPad/Mobile), and a zero-dependency dark-mode Executive HTML Dashboard.',
    mainImage: '/images/medpulse-wdio-dashboard.jpg',
    images: [
      '/images/medpulse-wdio-dashboard.jpg',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672071/wdio_home_fv33nj.jpg',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672073/wdio_ci_1_wcancs.png',
      'https://res.cloudinary.com/dyhvayayc/image/upload/v1739672072/wdio_ci_2_i8u2bf.png',
    ],
    tags: ['FE', 'Frontend', 'WebdriverIO v10', 'Cucumber BDD', 'TypeScript', 'AI Agent / MCP', 'WCAG 2.1 AA', 'BiDi Protocol', 'Healthcare EHR'],
    github: 'https://github.com/scriptcrux/wdio-agentic-bdd-framework',
    architectureMetrics: {
      workers: '5 Parallel Chrome Workers',
      duration: '< 45s Full Suite Run',
      flakeRate: '0.0% Zero-Flake BiDi Sync',
      testCount: '7 BDD Suites / 14 Clinical Scenarios',
    },
    highlights: [
      'WebdriverIO AI Agentic Intent Testing (@wdio/mcp): Eliminates brittle DOM selectors by leveraging Model Context Protocol semantic intent resolvers (`act`) and clinical chart data extraction (`extract`).',
      'Clinical Safety & Drug-Drug Contraindication Intercepts: BDD feature specifications validating fatal interaction alerts (Warfarin + Aspirin) with affirmative physician legal overrides.',
      'Automated WCAG 2.1 AA Accessibility Engine: Intercepts color contrast (< 4.5:1), missing ARIA dialog semantics, and accessible form labels directly in the CI pipeline with 0 critical violations.',
      'WebDriver BiDi Network Fault Mocking & Circuit Breaker: Validates UI resilience under dropped telemetry connections and simulated HTTP 500 Pharmacy Gateway outages without data loss.',
      'Bedside Clinical Rounds Mobility: Emulates tablet (iPad Pro 768x1024) and handheld mobile (390x844) viewports during bedside emergency rounds with zero horizontal overflow.',
      'Dual Reporting Engine: Generates an interactive, zero-dependency dark-mode Executive HTML dashboard with search/filters, alongside comprehensive Allure test run artifacts.',
    ],
    codeSnippet: {
      filename: 'features/05_agentic_ai_triage.feature',
      language: 'typescript',
      code: `@ai-agent @agentic
Feature: WebdriverIO AI Agentic Intent-Based Triage & Verification
  As an AI Testing Agent
  I want to verify complex clinical workflows using intent-based actions and semantic extraction
  So that end-to-end tests remain resilient to DOM structure changes

  Background:
    Given the clinician is authenticated as "Triage Nurse"

  Scenario: AI Agent verifies emergency triage acuity via intent
    When the AI agent performs intent "Switch to Acute Triage Intake wizard"
    And the clinician records vital signs:
      | systolic | diastolic | heartRate | spo2 |
      | 188      | 112       | 122       | 89   |
    Then the AI agent extracts semantic field "triage acuity risk badge" containing "CODE RED"
    When the AI agent performs intent "Filter critical census patients"
    Then the AI agent extracts semantic field "assigned inpatient bed" containing "ICU"`,
    },
  },

  {
    id: 'accessibility-fw',
    title: 'Apex Financial: Enterprise WCAG 2.1/2.2 AA Accessibility & Compliance Engine',
    category: 'Accessibility',
    description:
      'Enterprise-grade accessibility (A11y) automation framework and continuous compliance engine architected for mission-critical banking portals (Apex Financial). Enforces rigorous compliance against WCAG 2.0, 2.1, and 2.2 (Level A & AA) standards, Section 508, and W3C WAI-ARIA 1.2 specifications across a 5-layer defense-in-depth architecture. Features automated @axe-core/playwright browser audits, Vitest + jest-axe unit assertions, dynamic aria-live screen reader announcement validation, strict focus trapping & keyboard traversal testing, automated Pa11y CLI crawl gating, and executive HTML compliance reporting with zero critical violations.',
    mainImage: '/images/accessibility-dashboard.jpg',
    images: [
      '/images/accessibility-dashboard.jpg',
      '/images/apex-financial-a11y-dashboard.jpg',
    ],
    tags: [
      'Accessibility',
      'A11y',
      'WCAG 2.1/2.2 AA',
      'axe-core',
      'Playwright',
      'Pa11y',
      'Vitest',
      'jest-axe',
      'WAI-ARIA 1.2',
      'Section 508',
    ],
    github: 'https://github.com/scriptcrux/a11y-automation-framework',
    architectureMetrics: {
      workers: '5-Layer Multi-Runner Audit',
      duration: '< 15s Full Audit Suite',
      flakeRate: '0 Critical Violations (Level AA)',
      testCount: '35+ Automated Rules & Scenarios',
    },
    highlights: [
      '5-Layer Defense-in-Depth A11y Architecture: Orchestrates unit component assertions (Vitest + jest-axe), browser E2E audits (@axe-core/playwright), keyboard focus traps, assistive tech live regions, and CI multi-route headless crawlers (Pa11y).',
      'WCAG 2.1 & 2.2 Level AA & AAA Standards Enforcement: Automatically audits Bypass Blocks (2.4.1), Focus Traps (2.4.3), Focus Visible Rings (2.4.7), Focus Appearance (2.4.11), Contrast Minimum (1.4.3 >= 4.5:1), and High-Contrast Mode (1.4.6 >= 7:1).',
      'WAI-ARIA 1.2 Keyboard Ergonomics: Enforces strict focus containment in modal dialogs with Escape key restoration, and full arrow key navigation across tablists (ArrowRight/ArrowLeft/Home/End) with dynamic aria-selected updates.',
      'Assistive Technology Live Region Verification: Automates verification of asynchronous balance sync and transactional notifications routed through aria-live="polite" and aria-live="assertive" announcer channels.',
      'Controlled Defects Sandbox & Negative Testing: Features a dedicated violations sandbox to deterministically assert that test linters and crawlers intercept intentional defects (missing form labels, low contrast, broken aria attributes).',
      'Multi-Engine Compliance Reporting & PR Gating: Automatically generates standalone HTML audit reports via axe-html-reporter, CI telemetry JSON, and executive markdown scorecards (ACCESSIBILITY_SCORECARD.md) in GitHub Actions.',
    ],
    codeSnippet: {
      filename: 'tests/e2e/wcag-compliance.spec.ts',
      language: 'typescript',
      code: `import { test, expect } from '@playwright/test';
import { runAxeAudit, formatAxeViolations, STANDARD_WCAG_AA_TAGS } from '../utils/axe-helper';

test.describe('WCAG 2.1 & 2.2 Level AA Compliance Audits', () => {
  test('Dashboard page must satisfy WCAG 2.1 & 2.2 Level AA standards', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Run axe audit with HTML & JSON report generation
    const results = await runAxeAudit(page, {
      tags: STANDARD_WCAG_AA_TAGS,
      reportName: 'wcag-audit-dashboard'
    });

    if (results.violations.length > 0) {
      console.error(formatAxeViolations(results.violations));
    }

    expect(
      results.violations,
      \`Expected zero WCAG AA violations on Dashboard, found \${results.violations.length}\`
    ).toEqual([]);
  });

  test('Quick Transfer Modal Dialog must satisfy WCAG standards and trap focus', async ({ page }) => {
    await page.goto('/');
    await page.click('[data-testid="open-quick-transfer-btn"]');
    await expect(page.locator('[data-testid="accessible-modal"]')).toBeVisible();

    // Scope audit specifically to the interactive modal dialog component
    const results = await runAxeAudit(page, {
      tags: STANDARD_WCAG_AA_TAGS,
      include: '[data-testid="accessible-modal"]',
      reportName: 'wcag-audit-modal-dialog'
    });

    expect(results.violations).toEqual([]);
  });
});`,
    },
  },
];


