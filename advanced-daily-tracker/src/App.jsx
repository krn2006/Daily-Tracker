export default function DailyActivityTracker() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d0d",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "auto"
      }}>
        <h1 style={{fontSize:"48px", fontWeight:"bold"}}>
          Karan's Productivity Hub 🚀
        </h1>

        <div style={{
          marginTop:"30px",
          padding:"30px",
          borderRadius:"24px",
          background:"linear-gradient(135deg,#0ea5e9,#2563eb)"
        }}>
          <h2 style={{fontSize:"32px", fontWeight:"bold"}}>
            Advanced Productivity System
          </h2>

          <ul style={{marginTop:"20px", lineHeight:"2"}}>
            <li>✅ AI Productivity Coach</li>
            <li>✅ Weekly Analytics</li>
            <li>✅ Productivity Score</li>
            <li>✅ Saved Routines</li>
            <li>✅ Calendar Planner</li>
            <li>✅ Tick Completion System</li>
            <li>✅ Smooth Fade Completed Tasks</li>
            <li>✅ Daily Progress Tracking</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
