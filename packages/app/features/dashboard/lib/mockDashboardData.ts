export const mockDashboardData = {
  user: {
    name: "홍길동",
    level: 5,
    xp: 1200,
    rank: 12,
  },
  progress: {
    totalQuizzes: 100,
    completedQuizzes: 75,
    dailyGoal: 5,
    todayCompleted: 3,
  },
  leaderboard: [
    { rank: 1, name: "Alice", score: 5000 },
    { rank: 2, name: "Bob", score: 4800 },
    { rank: 3, name: "Charlie", score: 4500 },
    { rank: 12, name: "홍길동", score: 3000 },
  ],
  quizHistory: [
    { date: "2025-02-01", quizzesCompleted: 3 },
    { date: "2025-02-02", quizzesCompleted: 5 },
    { date: "2025-02-03", quizzesCompleted: 2 },
  ],
  recommendedQuizzes: [
    { id: "q1", title: "JavaScript 기초 퀴즈", difficulty: "Easy" },
    { id: "q2", title: "React Hooks 마스터", difficulty: "Medium" },
    { id: "q3", title: "Next.js 렌더링 방식", difficulty: "Hard" },
  ],
};
