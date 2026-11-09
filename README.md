# zuoer64 双壳计划 · 进度页

**在线看进度： https://zlz-1906646184.github.io/zuoer64-progress/**

## 这是什么

亚克力堆叠（复刻老 zuoer）与 3D 打印船壳（新设计）两条线，共 15 项任务的进度看板。
手机竖屏优先；滚到哪张卡，哪张才淡入，进度条从 0 长出来。

## 怎么改进度

1. 打开 [data.js](./data.js)
2. 改 pct（0~100）和 status
3. 提交，等一分钟，刷新页面就生效

status 可选值：todo 待启动 / doing 进行中 / done 已完成 / next 下一步 / blocked 卡住。
next 全局只该有一个，页面会高亮它。

手机上也能改：打开 data.js → 点右上角铅笔 → 改数字 → Commit changes。

## 文件说明

- index.html —— 页面本身。任务名和分组写在这里的 const STAGES 里
- data.js —— 只有进度数据，日常只改这个

## 截图用静态模式

地址后面加 ?static=1，跳过全部进场动画，直接出终态。发群截图用这个，动画截不全。
