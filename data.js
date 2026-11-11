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
  updated: "2026-11-11 20:10",

  tasks: [
    /* ---------- 01 亚克力堆叠线 ---------- */
    { id: "1.1", pct: 100, status: "done",  note: "skill 已建：SKILL.md + 8 篇 references" },
    { id: "1.2", pct: 100, status: "done",  note: "FreeCAD 1.1.4 + SolidCraft 0.30.1，均装 E 盘" },
    { id: "1.3", pct: 100, status: "done",  note: "freecad-mcp 已接，Codex 里 17 个工具实测可用" },
    { id: "1.4", pct: 100, status: "done",  note: "青花瓷 v2 防尘罩：修完单位／包围盒／重复实体，1122 条闭合轮廓全过 OCC" },
    { id: "1.5", pct: 100, status: "done",  note: "已出定版切割图 v4，闭合轮廓 1122/1122 通过" },
    { id: "1.6", pct: 0,   status: "todo",  note: "" },
    { id: "1.7", pct: 0,   status: "next",  note: "单层 2.77mm 已拉伸成功（109 实体全有效），下一步做三层堆叠" },
    { id: "1.8", pct: 0,   status: "todo",  note: "" },
    { id: "1.9", pct: 0,   status: "todo",  note: "" },

    /* ---------- 02 3D 打印船壳线 ---------- */
    { id: "2.1", pct: 0,   status: "todo",  note: "" },
    { id: "2.2", pct: 0,   status: "todo",  note: "" },
    { id: "2.3", pct: 0,   status: "todo",  note: "" },
    { id: "2.4", pct: 0,   status: "todo",  note: "" },
    { id: "2.5", pct: 0,   status: "todo",  note: "" },
    { id: "2.6", pct: 0,   status: "todo",  note: "" }
  ],

  /* ---------- 技术栈（页面顶部展示） ---------- */
  stack: {
    agent: "Codex",
    model: "DeepSeek v4.1 + 视觉模型",
    tool: "freecad-mcp"
  }
};
