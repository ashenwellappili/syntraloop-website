"use client";

import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Database,
  Server,
  Zap,
  Clock,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Search,
  Filter,
  Download,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Layers,
  BarChart3,
  HardDrive
} from 'lucide-react';

/**
 * Operational Intelligence Dashboard - Frontend UI Showcase
 * An enterprise-grade, high-throughput real-time telemetry dashboard.
 * Designed with a sleek dark theme, reactive KPI metrics, telemetry charts,
 * cluster node health monitors, and virtualized live event stream logs.
 */
export default function DashboardInteractiveDemo() {
  const [timeframe, setTimeframe] = useState('live');

  // Simulated telemetry throughput data points
  const throughputData = [
    { time: '14:00', value: 11200, load: 38 },
    { time: '14:05', value: 12400, load: 42 },
    { time: '14:10', value: 13100, load: 45 },
    { time: '14:15', value: 11800, load: 40 },
    { time: '14:20', value: 14200, load: 52 },
    { time: '14:25', value: 15600, load: 58 },
    { time: '14:30', value: 14900, load: 54 },
    { time: '14:35', value: 16800, load: 64 },
    { time: '14:40', value: 15900, load: 60 },
    { time: '14:45', value: 17400, load: 68 },
    { time: '14:50', value: 16200, load: 62 },
    { time: '14:55', value: 18100, load: 71 },
    { time: '15:00', value: 17800, load: 69 }
  ];

  // Cluster Nodes Status
  const clusterNodes = [
    {
      id: 'node-ingest-01',
      name: 'API Gateway & Ingest',
      region: 'ap-southeast-1',
      status: 'Operational',
      cpu: '28%',
      memory: '4.2 / 16 GB',
      latency: '12ms',
      throughput: '5,840 req/s'
    },
    {
      id: 'node-worker-fastapi-01',
      name: 'FastAPI Analytics Core A',
      region: 'ap-southeast-1',
      status: 'Operational',
      cpu: '46%',
      memory: '9.8 / 32 GB',
      latency: '18ms',
      throughput: '4,620 req/s'
    },
    {
      id: 'node-worker-fastapi-02',
      name: 'FastAPI Analytics Core B',
      region: 'ap-southeast-1',
      status: 'Operational',
      cpu: '41%',
      memory: '8.4 / 32 GB',
      latency: '17ms',
      throughput: '4,360 req/s'
    },
    {
      id: 'node-cache-redis',
      name: 'Redis In-Memory Cluster',
      region: 'ap-southeast-1',
      status: 'Optimized',
      cpu: '18%',
      memory: '14.1 / 64 GB',
      latency: '1.8ms',
      throughput: '14.8k ops/s'
    }
  ];

  // Live Telemetry Event Stream Logs
  const liveEvents = [
    {
      id: 'EVT-98421',
      timestamp: '15:00:18.421',
      service: 'telemetry.ingest',
      event: 'BATCH_INGEST_PIPELINE',
      payloadSize: '2.4 MB',
      latency: '14.2ms',
      status: 'SUCCESS'
    },
    {
      id: 'EVT-98420',
      timestamp: '15:00:17.890',
      service: 'pandas.analytics',
      event: 'COHORT_AGGREGATION_ROLLUP',
      payloadSize: '840 KB',
      latency: '22.8ms',
      status: 'PROCESSED'
    },
    {
      id: 'EVT-98419',
      timestamp: '15:00:16.142',
      service: 'redis.pubsub',
      event: 'WS_BROADCAST_DISPATCH',
      payloadSize: '128 KB',
      latency: '1.4ms',
      status: 'CACHED'
    },
    {
      id: 'EVT-98418',
      timestamp: '15:00:15.602',
      service: 'fastapi.workers',
      event: 'STATISTICAL_ANOMALY_SCAN',
      payloadSize: '1.8 MB',
      latency: '31.6ms',
      status: 'SUCCESS'
    },
    {
      id: 'EVT-98417',
      timestamp: '15:00:14.298',
      service: 'postgres.pool',
      event: 'PERSISTENCE_TRANSACTION_SYNC',
      payloadSize: '512 KB',
      latency: '8.9ms',
      status: 'OPTIMIZED'
    }
  ];

  return (
    <div className="dash-demo-root select-none">
      {/* Top Banner Notice */}
      <div className="dash-demo-banner">
        <div className="flex items-center gap-2">
          <span className="dash-live-dot" />
          <span className="dash-banner-title">OPERATIONAL INTELLIGENCE · LIVE ENGINE TELEMETRY</span>
        </div>
        <div className="dash-banner-badge hidden sm:flex items-center gap-1.5">
          <Radio size={12} className="text-emerald-400" />
          <span>WebSocket Stream Connected (Port 8443)</span>
        </div>
      </div>

      <div className="dash-demo-inner">
        {/* ================= DASHBOARD HEADER ================= */}
        <div className="dash-top-header">
          <div className="dash-header-title-area">
            <div className="flex items-center gap-2">
              <div className="dash-icon-box">
                <BarChart3 size={18} className="text-cyan-400" />
              </div>
              <div>
                <h2 className="dash-main-title">Telemetry & Pipeline Overview</h2>
                <p className="dash-sub-title">Python FastAPI Engine · Sub-Second Analytics Aggregation</p>
              </div>
            </div>
          </div>

          {/* Timeframe selector & export controls */}
          <div className="dash-header-controls">
            <div className="dash-time-pills">
              {['live', '15m', '1h', '24h', '7d'].map((tf) => (
                <button
                  key={tf}
                  type="button"
                  onClick={() => setTimeframe(tf)}
                  className={`dash-time-pill ${timeframe === tf ? 'active' : ''}`}
                  tabIndex={-1}
                >
                  {tf === 'live' && <span className="dash-time-live-dot" />}
                  {tf.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="dash-action-btn-group hidden md:flex">
              <button type="button" className="dash-action-btn" tabIndex={-1} title="Refresh Data">
                <RefreshCw size={14} />
              </button>
              <button type="button" className="dash-action-btn" tabIndex={-1} title="Export CSV Report">
                <Download size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= 4 PRIMARY KPI METRIC CARDS ================= */}
        <div className="dash-kpi-grid">
          {/* Card 1: Throughput */}
          <div className="dash-kpi-card">
            <div className="dash-kpi-top">
              <span className="dash-kpi-label">INGESTION THROUGHPUT</span>
              <div className="dash-kpi-icon bg-cyan-500/10 text-cyan-400">
                <Zap size={16} />
              </div>
            </div>
            <div className="dash-kpi-value-row">
              <span className="dash-kpi-val">14,820</span>
              <span className="dash-kpi-unit">req/sec</span>
            </div>
            <div className="dash-kpi-meta positive">
              <TrendingUp size={13} />
              <span>+14.2%</span>
              <span className="dash-meta-sub">vs previous hour</span>
            </div>
          </div>

          {/* Card 2: Latency */}
          <div className="dash-kpi-card">
            <div className="dash-kpi-top">
              <span className="dash-kpi-label">AVG PIPELINE LATENCY</span>
              <div className="dash-kpi-icon bg-emerald-500/10 text-emerald-400">
                <Clock size={16} />
              </div>
            </div>
            <div className="dash-kpi-value-row">
              <span className="dash-kpi-val">18.4</span>
              <span className="dash-kpi-unit">ms</span>
            </div>
            <div className="dash-kpi-meta positive">
              <ShieldCheck size={13} />
              <span>P99: 41ms</span>
              <span className="dash-meta-sub">· P95: 24ms</span>
            </div>
          </div>

          {/* Card 3: Cache Hit Ratio */}
          <div className="dash-kpi-card">
            <div className="dash-kpi-top">
              <span className="dash-kpi-label">CACHE HIT RATIO</span>
              <div className="dash-kpi-icon bg-indigo-500/10 text-indigo-400">
                <Database size={16} />
              </div>
            </div>
            <div className="dash-kpi-value-row">
              <span className="dash-kpi-val">99.4</span>
              <span className="dash-kpi-unit">%</span>
            </div>
            <div className="dash-kpi-meta neutral">
              <HardDrive size={13} />
              <span>14.1 GB</span>
              <span className="dash-meta-sub">in Redis cluster</span>
            </div>
          </div>

          {/* Card 4: System Availability */}
          <div className="dash-kpi-card">
            <div className="dash-kpi-top">
              <span className="dash-kpi-label">SYSTEM AVAILABILITY</span>
              <div className="dash-kpi-icon bg-amber-500/10 text-amber-400">
                <Activity size={16} />
              </div>
            </div>
            <div className="dash-kpi-value-row">
              <span className="dash-kpi-val">99.995</span>
              <span className="dash-kpi-unit">%</span>
            </div>
            <div className="dash-kpi-meta positive">
              <CheckCircle2 size={13} />
              <span>All 4 nodes</span>
              <span className="dash-meta-sub">healthy</span>
            </div>
          </div>
        </div>

        {/* ================= TELEMETRY CHART SECTION ================= */}
        <div className="dash-chart-card">
          <div className="dash-chart-header">
            <div>
              <h3 className="dash-card-title">Real-Time Ingestion & Analytics Velocity</h3>
              <p className="dash-card-sub">Event count aggregated across FastAPI asynchronous worker queues</p>
            </div>
            <div className="dash-chart-legend">
              <span className="dash-legend-item">
                <span className="legend-dot cyan" />
                <span>Ingest Throughput (req/s)</span>
              </span>
              <span className="dash-legend-item">
                <span className="legend-dot purple" />
                <span>Worker CPU Load (%)</span>
              </span>
            </div>
          </div>

          {/* Custom SVG Telemetry Chart */}
          <div className="dash-chart-wrapper">
            <svg viewBox="0 0 800 220" className="dash-svg-chart" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cyanAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="purpleLineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid lines */}
              <line x1="0" y1="30" x2="800" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="80" x2="800" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="130" x2="800" y2="130" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="180" x2="800" y2="180" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

              {/* Area Fill for Throughput */}
              <path
                d="M 0,160 
                   C 70,140 130,120 200,135 
                   C 270,150 330,90 400,80 
                   C 470,70 530,95 600,60 
                   C 670,45 730,35 800,38 
                   L 800,200 L 0,200 Z"
                fill="url(#cyanAreaGradient)"
              />

              {/* Primary Line */}
              <path
                d="M 0,160 
                   C 70,140 130,120 200,135 
                   C 270,150 330,90 400,80 
                   C 470,70 530,95 600,60 
                   C 670,45 730,35 800,38"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Secondary Line (CPU Load) */}
              <path
                d="M 0,185 
                   C 80,180 150,170 220,165 
                   C 300,160 380,140 450,130 
                   C 520,120 600,135 680,115 
                   C 730,105 770,108 800,102"
                fill="none"
                stroke="url(#purpleLineGradient)"
                strokeWidth="2"
                strokeDasharray="5 3"
              />

              {/* Live Peak Marker */}
              <circle cx="800" cy="38" r="4.5" fill="#06b6d4" className="animate-ping opacity-75" />
              <circle cx="800" cy="38" r="4.5" fill="#ffffff" stroke="#06b6d4" strokeWidth="2" />
            </svg>

            {/* X-Axis Timestamps */}
            <div className="dash-chart-x-axis">
              <span>14:00</span>
              <span>14:15</span>
              <span>14:30</span>
              <span>14:45</span>
              <span>15:00 (Live)</span>
            </div>
          </div>
        </div>

        {/* ================= 2-COLUMN SECTION: CLUSTERS & LIVE LOG FEED ================= */}
        <div className="dash-split-grid">
          {/* Column 1: Cluster Infrastructure Status */}
          <div className="dash-sub-card">
            <div className="dash-sub-header">
              <div className="flex items-center gap-2">
                <Server size={16} className="text-cyan-400" />
                <h3 className="dash-card-title">Cluster Node Status</h3>
              </div>
              <span className="dash-node-pill">4 Nodes Online</span>
            </div>

            <div className="dash-nodes-list">
              {clusterNodes.map((node) => (
                <div key={node.id} className="dash-node-item">
                  <div className="dash-node-main">
                    <div className="flex items-center gap-2">
                      <span className="dash-node-dot" />
                      <span className="dash-node-name">{node.name}</span>
                    </div>
                    <span className="dash-node-status">{node.status}</span>
                  </div>

                  <div className="dash-node-metrics">
                    <div className="dash-node-metric-cell">
                      <span className="label">CPU</span>
                      <span className="val">{node.cpu}</span>
                    </div>
                    <div className="dash-node-metric-cell">
                      <span className="label">MEM</span>
                      <span className="val">{node.memory}</span>
                    </div>
                    <div className="dash-node-metric-cell">
                      <span className="label">RTT</span>
                      <span className="val text-emerald-400">{node.latency}</span>
                    </div>
                    <div className="dash-node-metric-cell">
                      <span className="label">RATE</span>
                      <span className="val text-cyan-400">{node.throughput}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Live Ingestion Event Log Feed */}
          <div className="dash-sub-card">
            <div className="dash-sub-header">
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-indigo-400" />
                <h3 className="dash-card-title">Live Telemetry Event Log</h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="dash-live-dot" />
                <span>Streaming</span>
              </div>
            </div>

            <div className="dash-events-table-wrap">
              <table className="dash-events-table">
                <thead>
                  <tr>
                    <th>TIMESTAMP</th>
                    <th>EVENT NAME</th>
                    <th>LATENCY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {liveEvents.map((evt) => (
                    <tr key={evt.id}>
                      <td className="font-mono text-zinc-400">{evt.timestamp}</td>
                      <td>
                        <div className="dash-event-cell">
                          <span className="dash-event-name">{evt.event}</span>
                          <span className="dash-event-service">{evt.service}</span>
                        </div>
                      </td>
                      <td className="font-mono text-cyan-300">{evt.latency}</td>
                      <td>
                        <span className={`dash-status-badge ${evt.status.toLowerCase()}`}>
                          {evt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM METRICS BANNER ================= */}
        <div className="dash-bottom-banner">
          <div className="flex items-center gap-3">
            <div className="dash-tech-icon-pills">
              <span className="tech-badge">Python 3.12</span>
              <span className="tech-badge">FastAPI Asynchronous</span>
              <span className="tech-badge">Pandas Vectorized</span>
              <span className="tech-badge">Redis Pub/Sub</span>
              <span className="tech-badge">PostgreSQL</span>
            </div>
          </div>
          <div className="dash-bottom-stats text-xs text-zinc-400">
            Engine Health: <span className="text-emerald-400 font-semibold">Optimal</span> · Zero Queue Backpressure
          </div>
        </div>
      </div>
    </div>
  );
}
