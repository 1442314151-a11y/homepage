# 个人主页（暗色科技风）

纯 HTML / CSS / JS，零依赖、零构建。目录结构：

```
personal-homepage/
├── index.html   # 页面结构与全部文字内容
├── style.css    # 样式，配色集中在顶部 :root
└── main.js      # 打字机、滚动动画、移动端菜单
```

## 本地预览

直接**双击 index.html** 用浏览器打开即可。

## 改成你自己的内容

全部占位内容都在 `index.html` 里，用编辑器搜索这几个关键词逐个替换：

| 占位内容 | 位置 |
|---|---|
| `你的名字` | 导航 logo、Hero 大标题、页脚（Ctrl+H 全局替换） |
| `you@example.com` | 邮箱按钮、Hero 社交链接（全局替换） |
| `https://github.com/yourname` | 各处 GitHub 链接（全局替换） |
| Hero 一句话简介 | `<p class="hero-desc">` |
| 右侧终端卡片 | `<pre class="term-body">` 里的 JSON |
| 打字机轮播词 | `js/main.js` 顶部的 `PHRASES` 数组 |
| 技能标签 | 「关于我」里各 `.tag` |
| 项目卡片 | 「项目作品」里三张 `.project-card`，可整块复制增删 |
| 时间线条目 | 「经历」里各 `.timeline-item`，可整块复制增删 |
| 头图占位色块 | 想放真实截图时，把 `.project-thumb` 换成 `<img>` |

配色改动只需要动 `css/style.css` 顶部的 `:root` 变量（如 `--accent` 主色、`--bg` 背景）。

## 部署上线

**GitHub Pages（免费、推荐）：**
1. 在 GitHub 新建仓库（如 `homepage`），把 `index.html`、`style.css`、`main.js` 三个文件传上去；
2. 仓库 Settings → Pages → Source 选 `main` 分支 `/ (root)`，保存；
3. 一分钟后访问 `https://你的用户名.github.io/homepage/`。
   （仓库名改成 `你的用户名.github.io` 就能直接用根域名。）

**更省事的替代：** 打开 [Netlify Drop](https://app.netlify.com/drop) 或 Vercel，把整个 `personal-homepage` 文件夹拖进去，几秒钟得到一个线上地址。
