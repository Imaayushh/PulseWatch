import { useState, useEffect } from 'react'
import './App.css'
import { stats, sentimentTrend, alerts as initialAlerts, topics, recentPosts } from './data.js'

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [alerts, setAlerts] = useState(initialAlerts)
  const [filterSource, setFilterSource] = useState('All')
  const [actionNotice, setActionNotice] = useState('')
  const [highlightedId, setHighlightedId] = useState(null)

  // Smooth scroll and visual feedback redirect handler
  const scrollToSection = (sectionId, tabName) => {
    if (tabName) setActiveTab(tabName)

    if (sectionId === 'dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (window.history.pushState) {
        window.history.pushState(null, '', '#dashboard')
      }
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${sectionId}`)
      }
      setHighlightedId(sectionId)
      setTimeout(() => {
        setHighlightedId(null)
      }, 2000)
    }
  }

  // Handle URL hash on initial load (e.g. #alerts, #mentions)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'alerts' || hash === 'alerts-section') {
      setTimeout(() => scrollToSection('alerts-section', 'Alerts'), 150)
    } else if (hash === 'mentions' || hash === 'mentions-section') {
      setTimeout(() => scrollToSection('mentions-section', 'Mentions'), 150)
    }
  }, [])

  // Auto-update active tab when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const alertsEl = document.getElementById('alerts-section')
      const mentionsEl = document.getElementById('mentions-section')
      const scrollPos = window.scrollY + 120

      if (mentionsEl && scrollPos >= mentionsEl.offsetTop) {
        setActiveTab('Mentions')
      } else if (alertsEl && scrollPos >= alertsEl.offsetTop - 80) {
        setActiveTab('Alerts')
      } else {
        setActiveTab('Dashboard')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDismissAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id))
    setActionNotice('Alert marked as dismissed.')
    setTimeout(() => setActionNotice(''), 3000)
  }

  const handleApproveAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id))
    setActionNotice('Alert approved and dispatched to safety team.')
    setTimeout(() => setActionNotice(''), 3000)
  }

  const filteredPosts = recentPosts.filter((post) => {
    if (filterSource === 'All') return true
    return post.source.toLowerCase() === filterSource.toLowerCase()
  })

  // Mapping metric cards to their destination targets
  const metricDestinations = [
    { target: 'mentions-section', tab: 'Mentions', hint: 'View mentions ↓' },
    { target: 'sentiment-section', tab: 'Dashboard', hint: 'View trend ↓' },
    { target: 'alerts-section', tab: 'Alerts', hint: 'View alerts ↓' },
    { target: 'topics-section', tab: 'Dashboard', hint: 'View topics ↓' },
  ]

  return (
    <div className="app-container" id="dashboard">
      {/* Top Navbar with functional redirect tabs */}
      <header className="topbar">
        <div className="topbar-content">
          <div
            className="brand"
            onClick={() => scrollToSection('dashboard', 'Dashboard')}
            title="Go to Top"
            role="button"
            tabIndex={0}
          >
            <span className="brand-dot"></span>
            <span className="brand-title">PulseWatch</span>
            <span className="brand-badge">AI</span>
          </div>

          <nav className="nav-tabs" aria-label="Main Navigation">
            <button
              className={`nav-tab ${activeTab === 'Dashboard' ? 'active' : ''}`}
              onClick={() => scrollToSection('dashboard', 'Dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`nav-tab ${activeTab === 'Alerts' ? 'active' : ''}`}
              onClick={() => scrollToSection('alerts-section', 'Alerts')}
            >
              Alerts {alerts.length > 0 && <span className="tab-pill">{alerts.length}</span>}
            </button>
            <button
              className={`nav-tab ${activeTab === 'Mentions' ? 'active' : ''}`}
              onClick={() => scrollToSection('mentions-section', 'Mentions')}
            >
              Mentions
            </button>
          </nav>

          <div className="topbar-right">
            <div className="live-status">
              <span className="pulse-dot"></span>
              <span>LIVE FEED</span>
            </div>
            <div className="user-profile">
              <span className="user-avatar">CA</span>
              <span className="user-name">Analyst</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="main-content">
        {/* Focused Hero Banner */}
        <section className="hero-banner">
          <div className="hero-text">
            <h2>Campus Social Intelligence</h2>
            <p>
              Monitoring student discussions, emerging concerns, and real-time sentiment trends across public channels.
            </p>
          </div>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('alerts-section', 'Alerts')}
              title="Jump directly to pending alerts"
            >
              {alerts.length} ALERTS PENDING ›
            </button>
          </div>
        </section>

        {actionNotice && (
          <div className="notice-banner">
            <span>✓ {actionNotice}</span>
          </div>
        )}

        {/* 4 Interactive Metric Cards that Redirect to respective sections */}
        <section className="metrics-grid" id="metrics-section">
          {stats.map((s, idx) => {
            const dest = metricDestinations[idx]
            return (
              <div
                className={`metric-card clickable ${highlightedId === dest.target ? 'target-highlight' : ''}`}
                key={idx}
                onClick={() => scrollToSection(dest.target, dest.tab)}
                title={`Click to jump to ${dest.tab}`}
                role="button"
                tabIndex={0}
              >
                <div className="metric-label">{s.label}</div>
                <div className={`metric-value ${s.tone}`}>{s.value}</div>
                <div className="metric-delta">{s.delta}</div>
                <div className="metric-card-link-hint">{dest.hint}</div>
              </div>
            )
          })}
        </section>

        {/* 2-Column Balanced Dashboard */}
        <div className="dashboard-grid">
          {/* Left Column: Sentiment Chart + Emerging Topics */}
          <div className="dashboard-col">
            {/* Sentiment Trend Card */}
            <div
              className={`card ${highlightedId === 'sentiment-section' ? 'target-highlight' : ''}`}
              id="sentiment-section"
            >
              <div className="card-header">
                <h3>Sentiment Trend (7 Days)</h3>
                <span className="card-tag">Updated 5m ago</span>
              </div>
              <div className="chart-area">
                <div className="bars-container">
                  {sentimentTrend.map((d) => (
                    <div className="day-column" key={d.day}>
                      <div
                        className="bar-track"
                        title={`${d.day}: ${d.positive}% Positive, ${d.neutral}% Neutral, ${d.negative}% Negative`}
                      >
                        <div className="seg neg" style={{ height: `${d.negative}%` }}></div>
                        <div className="seg neu" style={{ height: `${d.neutral}%` }}></div>
                        <div className="seg pos" style={{ height: `${d.positive}%` }}></div>
                      </div>
                      <span className="day-name">{d.day}</span>
                    </div>
                  ))}
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="dot pos"></span> Positive
                  </div>
                  <div className="legend-item">
                    <span className="dot neu"></span> Neutral
                  </div>
                  <div className="legend-item">
                    <span className="dot neg"></span> Negative
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Topics Card */}
            <div
              className={`card ${highlightedId === 'topics-section' ? 'target-highlight' : ''}`}
              id="topics-section"
            >
              <div className="card-header">
                <h3>Emerging Topics</h3>
                <span className="card-tag">Volume momentum</span>
              </div>
              <div className="topic-list">
                {topics.map((t) => (
                  <div
                    className="topic-row clickable-topic"
                    key={t.name}
                    onClick={() => scrollToSection('mentions-section', 'Mentions')}
                    title={`Click to see posts regarding ${t.name}`}
                  >
                    <div className="topic-info">
                      <span className="topic-title">{t.name}</span>
                      <span className="topic-sub">{t.mentions}</span>
                    </div>
                    <div className="topic-bar-wrap">
                      <div className="topic-bar-fill" style={{ width: `${t.score}%` }}></div>
                    </div>
                    <span className="topic-trend">{t.trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Active Alerts + Latest Mentions */}
          <div className="dashboard-col">
            {/* Priority Alerts Card */}
            <div
              className={`card ${highlightedId === 'alerts-section' ? 'target-highlight' : ''}`}
              id="alerts-section"
            >
              <div className="card-header">
                <h3>Priority Alerts</h3>
                <span className="card-tag alert-count">{alerts.length} Active</span>
              </div>

              {alerts.length === 0 ? (
                <div className="empty-state">
                  <p>All alerts have been reviewed and addressed.</p>
                </div>
              ) : (
                <div className="alert-stack">
                  {alerts.map((a) => (
                    <div key={a.id} className={`alert-box severity-${a.severity.toLowerCase()}`}>
                      <div className="alert-top">
                        <span className={`badge-severity ${a.severity.toLowerCase()}`}>
                          {a.severity}
                        </span>
                        <h4 className="alert-title">{a.topic}</h4>
                        <span className="alert-time">{a.time}</span>
                      </div>
                      <p className="alert-summary">{a.summary}</p>
                      <div className="alert-footer">
                        <span className="alert-meta">
                          {a.mentions} mentions &middot; {a.source}
                        </span>
                        <div className="alert-btn-group">
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => handleDismissAlert(a.id)}
                          >
                            Dismiss
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleApproveAlert(a.id)}
                          >
                            Dispatch ›
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Latest Sampled Mentions Card */}
            <div
              className={`card ${highlightedId === 'mentions-section' ? 'target-highlight' : ''}`}
              id="mentions-section"
            >
              <div className="card-header">
                <h3>Latest Mentions</h3>
                <div className="filter-pills">
                  {['All', 'Twitter', 'Reddit'].map((src) => (
                    <button
                      key={src}
                      className={`pill ${filterSource === src ? 'active' : ''}`}
                      onClick={() => setFilterSource(src)}
                    >
                      {src}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mentions-feed">
                {filteredPosts.map((post) => (
                  <div className="mention-item" key={post.id}>
                    <div className="mention-header">
                      <span className="mention-source">{post.source}</span>
                      <span className="mention-author">{post.author}</span>
                      <span className={`mention-sent ${post.sentiment}`}>{post.sentiment}</span>
                      <span className="mention-time">{post.time}</span>
                    </div>
                    <p className="mention-text">&ldquo;{post.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Clean, Simple Footer */}
      <footer className="simple-footer">
        <div className="footer-content">
          <p>&copy; 2026 PulseWatch AI &middot; Campus Social Intelligence</p>
          <p className="footer-sub">Privacy First &middot; PII Protected &middot; Automated NLP Telemetry</p>
        </div>
      </footer>
    </div>
  )
}