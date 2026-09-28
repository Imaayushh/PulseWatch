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