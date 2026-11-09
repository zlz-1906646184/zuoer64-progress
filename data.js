/* ============================================================
   ZUOER64 双外壳计划 · 进度数据
   ------------------------------------------------------------
   改这里，保存，刷新 index.html 就生效。

   pct    : 0 ~ 100 的整数
   status : "todo"    待启动
            "doing"   进行中
            "done"    已完成（一般 pct 写 100）
            "next"    下一步（只能有一个，页面会高亮）
            "blocked" 卡住（配合 note 写卡在哪）
   note   : 一句话说明卡点或进展，留空则不显示
   ============================================================ */

window.PROGRESS = {
  updated: "2026-11-10 00:30",

  tasks: [
    /* ---------- 01 亚克力堆叠线 ---------- */
    { id: "1.1", pct: 100, status: "done",  note: "skill 已建：SKILL.md + 8 篇 references" },
    { id: "1.2", pct: 0,   status: "next",  note: "" },
    { id: "1.3", pct: 0,   status: "todo",  note: "" },
    { id: "1.4", pct: 0,   status: "todo",  note: "" },
    { id: "1.5", pct: 0,   status: "todo",  note: "" },
    { id: "1.6", pct: 0,   status: "todo",  note: "" },
    { id: "1.7", pct: 0,   status: "todo",  note: "" },
    { id: "1.8", pct: 0,   status: "todo",  note: "" },
    { id: "1.9", pct: 0,   status: "todo",  note: "" },

    /* ---------- 02 3D 打印船壳线 ---------- */
    { id: "2.1", pct: 0,   status: "todo",  note: "" },
    { id: "2.2", pct: 0,   status: "todo",  note: "" },
    { id: "2.3", pct: 0,   status: "todo",  note: "" },
    { id: "2.4", pct: 0,   status: "todo",  note: "" },
    { id: "2.5", pct: 0,   status: "todo",  note: "" },
    { id: "2.6", pct: 0,   status: "todo",  note: "" }
  ]
};
