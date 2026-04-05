import { useState } from "react";

const DAYS = [
  {
    id: 1,
    label: "DAY 1",
    title: "LOWER STRENGTH",
    sub: "Core + Lats",
    tag: "STRENGTH",
    sections: [
      {
        name: "SKILL",
        meta: "5–8 min · RPE 6–7",
        items: [
          { ex: "Front Lever Tuck Holds", detail: "3–4 × 8–12 sec", rpe: "6–7" },
          { ex: "Hanging Knee Raises", detail: "2–3 × 8–12", rpe: "6–7" },
        ],
      },
      {
        name: "STRENGTH",
        meta: "RPE 7–9",
        items: [
          { ex: "Trap Bar Deadlift OR Squat", detail: "4 × 3–5", rpe: "7–9" },
          { ex: "Single-Leg RDL", detail: "3 × 6–8/side", rpe: "7" },
          { ex: "Walking Lunges", detail: "2–3 × 8–12/side", rpe: "7" },
          { ex: "Hamstring Curl", detail: "3 × 10–12", rpe: "7–8" },
        ],
      },
      {
        name: "OVERLAY",
        meta: "Core + Lats",
        items: [
          { ex: "Dead Bugs", detail: "2 × 10 slow", rpe: "—" },
          { ex: "Straight-Arm Pulldown", detail: "3 × 12–15", rpe: "7" },
          { ex: "Single-Arm Lat Pulldown", detail: "3 × 10/side", rpe: "7" },
          { ex: "Ab Wheel / Body Saw", detail: "2–3 × 8–12", rpe: "7" },
        ],
      },
      {
        name: "MOBILITY",
        meta: "Cooldown",
        items: [
          { ex: "Hip Flexor Stretch", detail: "60 sec/side", rpe: "—" },
          { ex: "Deep Squat Hold", detail: "60 sec", rpe: "—" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "DAY 2",
    title: "UPPER STRENGTH",
    sub: "Chest + Shoulders",
    tag: "STRENGTH",
    sections: [
      {
        name: "SKILL",
        meta: "10 min · RPE 5–7",
        items: [
          { ex: "Planche Leans", detail: "3 × 10–20 sec", rpe: "5–7" },
          { ex: "Parallel Bar Support Hold", detail: "3 × 20–30 sec", rpe: "5–7" },
        ],
      },
      {
        name: "STRENGTH",
        meta: "RPE 7–9",
        items: [
          { ex: "Weighted Dips", detail: "4 × 4–6", rpe: "7–9" },
          { ex: "Weighted Pull-Ups", detail: "4 × 4–6", rpe: "7–9" },
          { ex: "Incline DB Press", detail: "3 × 6–8", rpe: "7–8" },
          { ex: "Chest Supported Row", detail: "3 × 6–10", rpe: "7–8" },
          { ex: "Seal Row / Rear Delt Row", detail: "2–3 × 10–12", rpe: "7" },
        ],
      },
      {
        name: "OVERLAY",
        meta: "Upper Chest + Shoulders",
        items: [
          { ex: "Low-to-High Cable Fly", detail: "3 × 12–15", rpe: "7" },
          { ex: "DB Lateral Raise", detail: "3 × 12–15", rpe: "7" },
          { ex: "Face Pulls", detail: "2–3 × 12–15", rpe: "7" },
        ],
      },
      {
        name: "POSTURE RESET",
        meta: "",
        items: [
          { ex: "Band Pull-Aparts", detail: "1–2 sets", rpe: "—" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "DAY 3",
    title: "ATHLETIC",
    sub: "Handstand + Conditioning",
    tag: "ATHLETIC",
    sections: [
      {
        name: "SKILL",
        meta: "10 min · RPE 5–7",
        items: [
          { ex: "Wall Handstand Hold", detail: "3 × 30–60 sec", rpe: "5–7" },
          { ex: "Shoulder Taps or Wall Walks", detail: "2–3 sets", rpe: "5–7" },
        ],
      },
      {
        name: "ATHLETIC",
        meta: "Power + Carries",
        items: [
          { ex: "Box Jumps", detail: "3–5 × 3", rpe: "5 explosive" },
          { ex: "Med Ball Throws", detail: "3–4 × 3–5", rpe: "6–7" },
          { ex: "Sled Push OR Carries", detail: "3–4 rounds", rpe: "7–8" },
          { ex: "Farmer Carries", detail: "2–3 × 30–50 yds", rpe: "7" },
        ],
      },
      {
        name: "CONDITIONING",
        meta: "10–15 min · RPE 6–8",
        items: [
          { ex: "Intervals", detail: "10–15 min", rpe: "6–8" },
        ],
      },
      {
        name: "LIGHT CORE",
        meta: "",
        items: [
          { ex: "RKC Plank", detail: "2 × 20–30 sec", rpe: "6" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "DAY 4",
    title: "LOWER UNILATERAL",
    sub: "Glutes + Posterior",
    tag: "STRENGTH",
    sections: [
      {
        name: "SKILL",
        meta: "Light",
        items: [
          { ex: "Front Lever Rows", detail: "3 × 5–8", rpe: "6–7" },
        ],
      },
      {
        name: "STRENGTH",
        meta: "RPE 7–8",
        items: [
          { ex: "Bulgarian Split Squats", detail: "3 × 6–8/side", rpe: "7–8" },
          { ex: "Step-Ups", detail: "3 × 8–10/side", rpe: "7" },
          { ex: "Hip Thrust", detail: "3 × 10–12", rpe: "7–8" },
          { ex: "Reverse Lunges (glute focus)", detail: "2 × 8–10/side", rpe: "7" },
          { ex: "Cossack Squats", detail: "2–3 sets", rpe: "6–7" },
          { ex: "Calf Raises", detail: "2–3 × 12–15", rpe: "7" },
        ],
      },
      {
        name: "OVERLAY",
        meta: "Glutes + Posterior",
        items: [
          { ex: "Back Extensions (glute focus)", detail: "3 × 12", rpe: "7" },
          { ex: "Banded Lateral Walks", detail: "2–3 sets", rpe: "6" },
        ],
      },
      {
        name: "MOBILITY",
        meta: "Cooldown",
        items: [
          { ex: "Couch Stretch", detail: "60 sec/side", rpe: "—" },
          { ex: "Adductor Stretch", detail: "60 sec", rpe: "—" },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "DAY 5",
    title: "UPPER VOLUME",
    sub: "Lats + Handstand",
    tag: "VOLUME",
    sections: [
      {
        name: "SKILL",
        meta: "10 min · RPE 5–7",
        items: [
          { ex: "Handstand Practice", detail: "10 min", rpe: "5–7" },
          { ex: "Light Planche Lean", detail: "2–3 sets", rpe: "5–6" },
        ],
      },
      {
        name: "STRENGTH",
        meta: "RPE 7–8",
        items: [
          { ex: "Pull-Ups (Volume)", detail: "3–4 × 6–10", rpe: "7–8" },
          { ex: "Landmine Lateral Raise / Arnold Press", detail: "3 × 8–10", rpe: "7" },
          { ex: "Row Variation", detail: "3 × 8–12", rpe: "7" },
        ],
      },
      {
        name: "OVERLAY",
        meta: "Lat Width + Core",
        items: [
          { ex: "Neutral Grip Pulldown (stretch focus)", detail: "3 × 10–12", rpe: "7" },
          { ex: "Cable Pullover", detail: "3 × 12", rpe: "7" },
          { ex: "Hanging Knee / Leg Raises", detail: "2–3 sets", rpe: "6–7" },
          { ex: "Dead Bugs", detail: "2 sets", rpe: "—" },
        ],
      },
      {
        name: "SHOULDER FINISH",
        meta: "Medial + Posterior",
        items: [
          { ex: "Lean-Away Lateral Raise", detail: "2 × 10–12", rpe: "7" },
          { ex: "Cable Rear Delt Fly", detail: "2 × 12–15", rpe: "7" },
          { ex: "Face Pulls", detail: "2 × 12–15", rpe: "6–7" },
        ],
      },
    ],
  },
];

const WEEKLY = [
  { skill: "Front Lever", freq: "3–4×/wk" },
  { skill: "Planche", freq: "2–3×/wk" },
  { skill: "Handstand", freq: "3–5×/wk" },
  { skill: "Lats", freq: "3× direct" },
  { skill: "Upper Chest", freq: "2–3×" },
  { skill: "Glutes", freq: "2× focused" },
];

const PROGRESSION = [
  { week: "WK 1–2", label: "ESTABLISH", desc: "Find starting loads at RPE 7" },
  { week: "WK 3–4", label: "BUILD", desc: "Increase load 2.5–5%" },
  { week: "WK 5", label: "PEAK", desc: "Push top end RPE 8–9" },
  { week: "WK 6", label: "DELOAD", desc: "Reduce volume 20%" },
];

const tagColors = {
  STRENGTH: "#E8F87A",
  ATHLETIC: "#7AF8C8",
  VOLUME: "#F8C87A",
};

const sectionColors = {
  SKILL: { bg: "rgba(232,248,122,0.08)", border: "#E8F87A" },
  STRENGTH: { bg: "rgba(255,255,255,0.04)", border: "#555" },
  OVERLAY: { bg: "rgba(122,248,200,0.06)", border: "#7AF8C8" },
  MOBILITY: { bg: "rgba(200,140,255,0.06)", border: "#C88CFF" },
  "POSTURE RESET": { bg: "rgba(200,140,255,0.06)", border: "#C88CFF" },
  ATHLETIC: { bg: "rgba(255,255,255,0.04)", border: "#555" },
  CONDITIONING: { bg: "rgba(248,200,122,0.08)", border: "#F8C87A" },
  "LIGHT CORE": { bg: "rgba(122,248,200,0.06)", border: "#7AF8C8" },
  "SHOULDER FINISH": { bg: "rgba(200,140,255,0.06)", border: "#C88CFF" },
  "LIGHT": { bg: "rgba(232,248,122,0.06)", border: "#E8F87A" },
};

function getRPEColor(rpe) {
  if (rpe === "—") return "#555";
  const nums = rpe.match(/\d+/g);
  if (!nums) return "#555";
  const max = Math.max(...nums.map(Number));
  if (max >= 9) return "#FF6B6B";
  if (max >= 8) return "#F8C87A";
  if (max >= 7) return "#E8F87A";
  return "#7AF8C8";
}

export default function TrainingOS() {
  const [activeDay, setActiveDay] = useState(0);
  const [checked, setChecked] = useState({});
  const [view, setView] = useState("program");

  const day = DAYS[activeDay];

  const toggleCheck = (key) => {
    setChecked((p) => ({ ...p, [key]: !p[key] }));
  };

  const completedCount = (dayIdx) => {
    const d = DAYS[dayIdx];
    const total = d.sections.reduce((a, s) => a + s.items.length, 0);
    const done = d.sections.reduce(
      (a, s, si) =>
        a + s.items.filter((_, ii) => checked[`${dayIdx}-${si}-${ii}`]).length,
      0
    );
    return { total, done };
  };

  const styles = {
    root: {
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "#0C0C0C",
      minHeight: "100vh",
      color: "#E0E0E0",
      padding: "0",
    },
    header: {
      borderBottom: "1px solid #1E1E1E",
      padding: "20px 24px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      background: "#0C0C0C",
      zIndex: 10,
    },
    logo: {
      fontSize: "11px",
      letterSpacing: "0.3em",
      color: "#E8F87A",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    navTabs: {
      display: "flex",
      gap: "2px",
      background: "#141414",
      padding: "3px",
      borderRadius: "6px",
    },
    navTab: (active) => ({
      fontSize: "10px",
      letterSpacing: "0.15em",
      padding: "6px 14px",
      borderRadius: "4px",
      cursor: "pointer",
      background: active ? "#E8F87A" : "transparent",
      color: active ? "#0C0C0C" : "#888",
      border: "none",
      fontFamily: "inherit",
      fontWeight: active ? "700" : "500",
      transition: "all 0.15s",
    }),
    dayNav: {
      display: "flex",
      gap: "6px",
      padding: "16px 24px",
      overflowX: "auto",
    },
    dayBtn: (active, dayIdx) => ({
      flex: "0 0 auto",
      cursor: "pointer",
      border: active ? `1.5px solid ${tagColors[DAYS[dayIdx].tag]}` : "1.5px solid #1E1E1E",
      borderRadius: "8px",
      padding: "10px 14px",
      background: active ? `${tagColors[DAYS[dayIdx].tag]}12` : "#111",
      transition: "all 0.15s",
      textAlign: "left",
      minWidth: "90px",
    }),
    dayBtnLabel: (active, dayIdx) => ({
      fontSize: "9px",
      letterSpacing: "0.2em",
      color: active ? tagColors[DAYS[dayIdx].tag] : "#555",
      display: "block",
      marginBottom: "4px",
    }),
    dayBtnTitle: (active) => ({
      fontSize: "11px",
      color: active ? "#E0E0E0" : "#666",
      fontWeight: "600",
      display: "block",
    }),
    progress: (dayIdx) => {
      return { width: "100%", height: "2px", background: "#1E1E1E", borderRadius: "1px", marginTop: "8px", overflow: "hidden", position: "relative" };
    },
    progressFill: (dayIdx) => {
      const { total, done } = completedCount(dayIdx);
      const pct = total ? (done / total) * 100 : 0;
      return { height: "100%", width: `${pct}%`, background: tagColors[DAYS[dayIdx].tag], borderRadius: "1px", transition: "width 0.3s" };
    },
    content: {
      padding: "8px 24px 40px",
      maxWidth: "680px",
    },
    dayHeader: {
      marginBottom: "20px",
      paddingBottom: "16px",
      borderBottom: "1px solid #1A1A1A",
    },
    dayTag: (tag) => ({
      display: "inline-block",
      fontSize: "9px",
      letterSpacing: "0.2em",
      color: "#0C0C0C",
      background: tagColors[tag],
      padding: "3px 10px",
      borderRadius: "3px",
      fontWeight: "700",
      marginBottom: "8px",
    }),
    dayTitle: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#F0F0F0",
      letterSpacing: "0.05em",
      lineHeight: 1,
      marginBottom: "4px",
    },
    daySub: {
      fontSize: "12px",
      color: "#555",
      letterSpacing: "0.1em",
    },
    section: (name) => ({
      marginBottom: "16px",
      background: (sectionColors[name] || { bg: "rgba(255,255,255,0.03)" }).bg,
      border: `1px solid ${(sectionColors[name] || { border: "#222" }).border}`,
      borderRadius: "8px",
      overflow: "hidden",
    }),
    sectionHeader: (name) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 14px",
      borderBottom: `1px solid ${(sectionColors[name] || { border: "#222" }).border}22`,
    }),
    sectionName: (name) => ({
      fontSize: "9px",
      letterSpacing: "0.25em",
      color: (sectionColors[name] || { border: "#777" }).border,
      fontWeight: "700",
    }),
    sectionMeta: {
      fontSize: "9px",
      color: "#444",
      letterSpacing: "0.08em",
    },
    item: (done) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "10px 14px",
      opacity: done ? 0.4 : 1,
      transition: "opacity 0.2s",
      cursor: "pointer",
    }),
    checkbox: (done) => ({
      width: "14px",
      height: "14px",
      border: `1px solid ${done ? "#E8F87A" : "#333"}`,
      borderRadius: "3px",
      background: done ? "#E8F87A" : "transparent",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.15s",
    }),
    exName: {
      flex: 1,
      fontSize: "12px",
      color: "#CCCCCC",
      fontWeight: "500",
    },
    detail: {
      fontSize: "11px",
      color: "#666",
      minWidth: "80px",
      textAlign: "right",
    },
    rpe: (rpe) => ({
      fontSize: "9px",
      color: getRPEColor(rpe),
      letterSpacing: "0.1em",
      minWidth: "36px",
      textAlign: "right",
    }),
    overviewGrid: {
      padding: "8px 24px 40px",
    },
    overviewSection: {
      marginBottom: "28px",
    },
    overviewLabel: {
      fontSize: "9px",
      letterSpacing: "0.3em",
      color: "#555",
      marginBottom: "12px",
      textTransform: "uppercase",
    },
    weekGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "8px",
    },
    weekCard: (i) => ({
      background: "#111",
      border: "1px solid #1E1E1E",
      borderRadius: "8px",
      padding: "14px",
    }),
    weekLabel: {
      fontSize: "9px",
      letterSpacing: "0.2em",
      color: "#E8F87A",
      marginBottom: "4px",
    },
    weekTitle: {
      fontSize: "13px",
      fontWeight: "700",
      color: "#E0E0E0",
      marginBottom: "4px",
    },
    weekDesc: {
      fontSize: "11px",
      color: "#666",
    },
    ruleRow: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginBottom: "8px",
    },
    ruleChip: (color) => ({
      fontSize: "10px",
      padding: "4px 10px",
      borderRadius: "4px",
      background: `${color}15`,
      border: `1px solid ${color}44`,
      color: color,
      letterSpacing: "0.05em",
    }),
    skillRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 0",
      borderBottom: "1px solid #1A1A1A",
    },
    skillName: {
      fontSize: "12px",
      color: "#CCCCCC",
    },
    skillFreq: {
      fontSize: "10px",
      color: "#E8F87A",
      letterSpacing: "0.1em",
    },
    nonNeg: {
      background: "#111",
      border: "1px solid #1A1A1A",
      borderRadius: "8px",
      padding: "16px",
    },
    nonNegTitle: {
      fontSize: "9px",
      letterSpacing: "0.25em",
      color: "#E8F87A",
      marginBottom: "12px",
    },
    nonNegItem: {
      fontSize: "11px",
      color: "#888",
      padding: "4px 0",
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    dot: {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "#E8F87A",
      flexShrink: 0,
    },
  };

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <span style={styles.logo}>⬡ TRAINING OS</span>
        <div style={styles.navTabs}>
          <button style={styles.navTab(view === "program")} onClick={() => setView("program")}>PROGRAM</button>
          <button style={styles.navTab(view === "overview")} onClick={() => setView("overview")}>OVERVIEW</button>
        </div>
      </div>

      {view === "program" ? (
        <>
          <div style={styles.dayNav}>
            {DAYS.map((d, i) => {
              const { total, done } = completedCount(i);
              return (
                <button key={d.id} style={styles.dayBtn(activeDay === i, i)} onClick={() => setActiveDay(i)}>
                  <span style={styles.dayBtnLabel(activeDay === i, i)}>{d.label}</span>
                  <span style={styles.dayBtnTitle(activeDay === i)}>{d.title.split(" ")[0]}</span>
                  <div style={styles.progress(i)}>
                    <div style={styles.progressFill(i)} />
                  </div>
                  <div style={{ fontSize: "9px", color: "#444", marginTop: "4px", letterSpacing: "0.05em" }}>
                    {done}/{total}
                  </div>
                </button>
              );
            })}
          </div>

          <div style={styles.content}>
            <div style={styles.dayHeader}>
              <div style={styles.dayTag(day.tag)}>{day.tag}</div>
              <div style={styles.dayTitle}>{day.title}</div>
              <div style={styles.daySub}>{day.sub}</div>
            </div>

            {day.sections.map((section, si) => (
              <div key={si} style={styles.section(section.name)}>
                <div style={styles.sectionHeader(section.name)}>
                  <span style={styles.sectionName(section.name)}>{section.name}</span>
                  {section.meta && <span style={styles.sectionMeta}>{section.meta}</span>}
                </div>
                {section.items.map((item, ii) => {
                  const key = `${activeDay}-${si}-${ii}`;
                  const done = !!checked[key];
                  return (
                    <div key={ii} style={styles.item(done)} onClick={() => toggleCheck(key)}>
                      <div style={styles.checkbox(done)}>
                        {done && <span style={{ fontSize: "9px", color: "#0C0C0C", fontWeight: "900" }}>✓</span>}
                      </div>
                      <span style={styles.exName}>{item.ex}</span>
                      <span style={styles.detail}>{item.detail}</span>
                      <span style={styles.rpe(item.rpe)}>RPE {item.rpe}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={styles.overviewGrid}>
          <div style={styles.overviewSection}>
            <div style={styles.overviewLabel}>EXECUTION RULES</div>
            <div style={styles.ruleRow}>
              <span style={styles.ruleChip("#FF6B6B")}>Heavy Lifts · RPE 7–9</span>
              <span style={styles.ruleChip("#F8C87A")}>Accessory · RPE 6–8</span>
              <span style={styles.ruleChip("#7AF8C8")}>Gymnastics Skill · RPE 5–7</span>
              <span style={styles.ruleChip("#E8F87A")}>Overlay · Controlled</span>
            </div>
            <div style={{ fontSize: "11px", color: "#555", marginTop: "8px", lineHeight: "1.6" }}>
              Hit top reps → increase weight next week · Fatigued → hold same load
            </div>
          </div>

          <div style={styles.overviewSection}>
            <div style={styles.overviewLabel}>WEEKLY SKILL TARGETS</div>
            <div style={{ background: "#111", border: "1px solid #1A1A1A", borderRadius: "8px", padding: "4px 14px" }}>
              {WEEKLY.map((s, i) => (
                <div key={i} style={styles.skillRow}>
                  <span style={styles.skillName}>{s.skill}</span>
                  <span style={styles.skillFreq}>{s.freq}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.overviewSection}>
            <div style={styles.overviewLabel}>6-WEEK PROGRESSION</div>
            <div style={styles.weekGrid}>
              {PROGRESSION.map((p, i) => (
                <div key={i} style={styles.weekCard(i)}>
                  <div style={styles.weekLabel}>{p.week}</div>
                  <div style={styles.weekTitle}>{p.label}</div>
                  <div style={styles.weekDesc}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.overviewSection}>
            <div style={styles.overviewLabel}>DAILY NON-NEGOTIABLES</div>
            <div style={styles.nonNeg}>
              <div style={styles.nonNegTitle}>5–8 MIN · EVERY SESSION</div>
              {[
                "90/90 Breathing — 2 min",
                "Dead Bugs — 2 sets",
                "Hanging Knee Raises — 2 sets",
                "Couch Stretch — 1–2 min/side",
              ].map((item, i) => (
                <div key={i} style={styles.nonNegItem}>
                  <div style={styles.dot} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={styles.overviewSection}>
            <div style={styles.overviewLabel}>CONDITIONING TARGETS</div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ flex: 1, background: "#111", border: "1px solid #1A1A1A", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#E8F87A", letterSpacing: "0.05em" }}>8–12k</div>
                <div style={{ fontSize: "10px", color: "#555", letterSpacing: "0.1em", marginTop: "4px" }}>DAILY STEPS</div>
              </div>
              <div style={{ flex: 1, background: "#111", border: "1px solid #1A1A1A", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontSize: "22px", fontWeight: "700", color: "#7AF8C8", letterSpacing: "0.05em" }}>2–3×</div>
                <div style={{ fontSize: "10px", color: "#555", letterSpacing: "0.1em", marginTop: "4px" }}>SESSIONS / WEEK</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}