export const stats = [
  { label: 'Posts Analyzed', value: '14,290', delta: '+8% vs yesterday', tone: 'neutral' },
  { label: 'Overall Sentiment', value: '+38%', delta: 'Positive trend', tone: 'good' },
  { label: 'Active Alerts', value: '2', delta: 'Need review', tone: 'warn' },
  { label: 'Top Topic', value: '#CampusSafety', delta: '840 mentions', tone: 'neutral' },
]

export const sentimentTrend = [
  { day: 'Mon', positive: 64, neutral: 22, negative: 14 },
  { day: 'Tue', positive: 60, neutral: 25, negative: 15 },
  { day: 'Wed', positive: 62, neutral: 24, negative: 14 },
  { day: 'Thu', positive: 56, neutral: 24, negative: 20 },
  { day: 'Fri', positive: 49, neutral: 26, negative: 25 },
  { day: 'Sat', positive: 42, neutral: 25, negative: 33 },
  { day: 'Sun', positive: 52, neutral: 21, negative: 27 },
]

export const alerts = [
  {
    id: 1,
    severity: 'High',
    topic: 'Campus Lighting & Safety',
    summary: 'Spike in negative mentions regarding lighting near South Gate corridors after 9 PM.',
    mentions: 340,
    time: '25m ago',
    source: 'Twitter & Reddit',
  },
  {
    id: 2,
    severity: 'Medium',
    topic: 'Exam Timetable Schedule',
    summary: 'Student anxiety detected about back-to-back exams scheduled without study breaks.',
    mentions: 215,
    time: '1h ago',
    source: 'Reddit',
  },
]

export const topics = [
  { name: '#CampusSafety', mentions: '940 mentions', score: 88, trend: '+34%' },
  { name: '#ExamWeek2026', mentions: '820 mentions', score: 78, trend: '+18%' },
  { name: '#PlacementDrive', mentions: '650 mentions', score: 62, trend: '+12%' },
  { name: '#HostelFood', mentions: '410 mentions', score: 45, trend: '-8%' },
]

export const trendStages = [
  {
    key: 'emerging',
    label: 'Emerging',
    meaning: 'First sightings. Small volume, but the same wording keeps repeating.',
  },
  {
    key: 'rising',
    label: 'Rising',
    meaning: 'Volume climbing fast. Best window to join in.',
  },
  {
    key: 'mainstream',
    label: 'Mainstream',
    meaning: 'Already everywhere. Hard to stand out now.',
  },
  {
    key: 'cooling',
    label: 'Cooling',
    meaning: 'Peaked and fading. Too late to post it.',
  },
]

export const trendSummary = [
  { label: 'Trends Tracked', value: '24', hint: 'Across 5 public platforms' },
  { label: 'Fastest Riser', value: '#ColdStartClubs', hint: '+184% in the last 24h' },
  { label: 'Peaking This Week', value: '3', hint: 'Watch these closely' },
  { label: 'Signal Confidence', value: '87%', hint: 'Model agreement, 7-day window' },
]

// Ordered by growth rate, fastest first.
export const emergingTrends = [
  {
    id: 'T1',
    name: '#ColdStartClubs',
    category: 'Clubs & Campus',
    stage: 'Rising',
    growth: '+184%',
    platforms: ['Instagram'],
    volume: '2,400 posts in 7 days',
    velocity: [5, 7, 12, 24, 41, 66, 98],
    peak: 'Tomorrow, 6-9 PM',
    move: 'Join in',
    summary:
      'Society members are opening Reels with a single "no intro" line to hook viewers in the first second instead of explaining what the club does.',
    why: 'Cheapest recruitment channel on campus right now. Societies without video are losing new sign-ups.',
  },
  {
    id: 'T2',
    name: '#ExamSeasonASMR',
    category: 'Study & Wellness',
    stage: 'Rising',
    growth: '+126%',
    platforms: ['YouTube'],
    volume: '3,100 posts in 7 days',
    velocity: [8, 11, 16, 22, 35, 52, 74],
    peak: 'Friday morning',
    move: 'Post a reply',
    summary:
      'Silent library ambience clips tagged by exam phase. Students film the same 30 seconds of the reading hall over and over.',
    why: 'Best window to push study-break and library-hours guidance inside a format students already watch.',
  },
  {
    id: 'T3',
    name: '#CoachHopSeason',
    category: 'Sports',
    stage: 'Rising',
    growth: '+97%',
    platforms: ['Twitter', 'Instagram'],
    volume: '1,850 posts in 7 days',
    velocity: [12, 15, 19, 28, 34, 47, 61],
    peak: 'Saturday, match day',
    move: 'Join in',
    summary:
      'Students follow rival college fan accounts side by side and quote-tweet transfer rumours within minutes.',
    why: 'Replies can defuse heated threads. Worth having the sports desk active before Saturday.',
  },
  {
    id: 'T4',
    name: '#MessHallRoast',
    category: 'Food',
    stage: 'Mainstream',
    growth: '+62%',
    platforms: ['Twitter', 'Reddit'],
    volume: '5,400 posts in 7 days',
    velocity: [40, 55, 68, 74, 82, 79, 88],
    peak: 'Already peaked, volume holding',
    move: 'Post a reply',
    summary:
      'Photo threads rating every mess on campus. The tone stays sarcastic but the complaints are now specific to menu items.',
    why: 'A single public reply from the mess committee reaches people who stopped posting angry messages.',
  },
  {
    id: 'T5',
    name: '#LibraryGhost',
    category: 'Memes',
    stage: 'Mainstream',
    growth: '+54%',
    platforms: ['Reddit', 'Twitter'],
    volume: '2,900 posts in 7 days',
    velocity: [30, 38, 45, 52, 60, 66, 71],
    peak: 'Already peaked, steady',
    move: 'Post a reply',
    summary:
      'Late-night library attendance is being turned into a running joke about a "ghost" who books the same seat every night.',
    why: 'Light tone, high volume. Safe place to announce extended study hall hours.',
  },
  {
    id: 'T6',
    name: '#PlacementFitCheck',
    category: 'Career',
    stage: 'Emerging',
    growth: '+41%',
    platforms: ['LinkedIn', 'Instagram'],
    volume: '740 posts in 7 days',
    velocity: [4, 5, 6, 9, 13, 18, 24],
    peak: 'In 6-8 days',
    move: 'Watch only',
    summary:
      'Students are turning placement prep into outfit posts. Interview-day looks are being shared as "the fit that got me the offer".',
    why: 'Too early for campus posts, but the placement cell should draft content before it peaks.',
  },
  {
    id: 'T7',
    name: '#QuietHostelChallenge',
    category: 'Wellness',
    stage: 'Emerging',
    growth: '+28%',
    platforms: ['YouTube'],
    volume: '510 posts in 7 days',
    velocity: [3, 6, 5, 9, 12, 14, 19],
    peak: 'In 10-14 days',
    move: 'Watch only',
    summary:
      'A quiet-hours challenge where floormates film ten minutes of no-noise study before sharing the clip.',
    why: 'Aligns with hostel noise policy. Worth a plan before it becomes a complaint thread.',
  },
  {
    id: 'T8',
    name: '#RetroSquadReplies',
    category: 'Memes',
    stage: 'Cooling',
    growth: '-14%',
    platforms: ['Twitter', 'Reddit'],
    volume: '1,100 posts in 7 days',
    velocity: [70, 62, 55, 44, 33, 25, 18],
    peak: 'Peaked 9 days ago',
    move: 'Let it pass',
    summary:
      'Reply-screenshot format built around a 2007 group chat. Engagement per post has halved since last week.',
    why: 'Posting now reads as late. Skip it and keep the slot for something rising.',
  },
]

export const recentPosts = [
  {
    id: 'P1',
    author: '@campus_student',
    source: 'Twitter',
    time: '15m ago',
    sentiment: 'negative',
    text: 'Walking past South Gate hostel and several lights are still off. Can maintenance fix this soon?',
  },
  {
    id: 'P2',
    author: 'Placement Cell',
    source: 'LinkedIn',
    time: '45m ago',
    sentiment: 'positive',
    text: 'Over 40 technology recruiters confirmed for this week’s on-campus hiring drive!',
  },
  {
    id: 'P3',
    author: 'u/HostelCoder',
    source: 'Reddit',
    time: '1h ago',
    sentiment: 'negative',
    text: 'Two major core exams on the exact same afternoon is really tough to prepare for.',
  },
  {
    id: 'P4',
    author: 'Library Admin',
    source: 'News',
    time: '2h ago',
    sentiment: 'positive',
    text: 'Central library extended study halls are now open 24/7 throughout final exam week.',
  },
]