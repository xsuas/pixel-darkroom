# 像素暗室 Pixel Darkroom

AIGC 影像作品集网站第一版。技术栈：Vite + React + Tailwind CSS + Framer Motion。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址即可。

## 打包

```bash
npm run build
```

打包结果在 `dist/` 目录。

## 部署建议

### Vercel

1. 新建 GitHub 仓库，把本项目上传。
2. Vercel 导入仓库。
3. Framework Preset 选择 `Vite`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。
6. 部署完成后，绑定 `pixeldarkroom.cn`。

### Cloudflare Pages

1. 新建 Pages 项目并连接 GitHub 仓库。
2. Framework preset 选择 `Vite`。
3. Build command 使用 `npm run build`。
4. Build output directory 使用 `dist`。
5. 部署完成后，绑定 `pixeldarkroom.cn`。

## 域名解析

部署平台会给你 DNS 配置提示。一般会用到：

- `CNAME`
- `A`
- `TXT`

不要提前乱填，等平台给出明确记录后，再去腾讯云 DNSPod 添加。

## 文件结构

```text
pixel-darkroom/
├─ package.json
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
└─ public/
   └─ works/
```

## 后续可扩展

- 增加作品详情页
- 增加视频播放入口
- 增加案例复盘页面
- 增加 SEO 信息
- 增加访问统计
