import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Film,
  Layers3,
  Sparkles,
  PenTool,
  Mail,
  Play,
  Camera,
  Clapperboard,
  Wand2,
  Search,
} from "lucide-react";

const works = [
  {
    title: "人间值得",
    category: "影视混剪",
    type: "Film Remix",
    desc: "与其去奢求所有的不切实际，不如简简单单地做个改变。",
    tags: ["影视混剪", "情绪剪辑", "人生感"],
    cover: "/works/renjianzhide.jpg",
  },
  {
    title: "你可以平庸",
    category: "影视混剪",
    type: "Film Remix",
    desc: "你其实可以试着接受自己的平庸。",
    tags: ["影视混剪", "现实表达", "冷色调"],
    cover: "/works/youkeyipingyong.jpg",
  },
  {
    title: "由我起浪",
    category: "AIGC短片",
    type: "AI Music Video",
    desc: "乘自己的风，起自己的浪。",
    tags: ["AIMV", "女性群像", "角色海报"],
    cover: "/works/youwoqilang.jpg",
  },
  {
    title: "享青春我乐意",
    category: "AIGC广告",
    type: "Product Campaign",
    desc: "自我主宰、不循旧、悦己至上。",
    tags: ["产品广告", "青春视觉", "水感"],
    cover: "/works/xiangqingchunwoleyi.jpg",
  },
  {
    title: "少一度更从容",
    category: "AIGC广告",
    type: "Luxury TVC",
    desc: "太轻，会飘；太满，又重。39度，正好。",
    tags: ["白酒TVC", "轻奢", "产品视觉"],
    cover: "/works/shaoyidugengcongrong.jpg",
  },
  {
    title: "保质期",
    category: "AIGC广告",
    type: "Brand Short Film",
    desc: "有些爱，从不过期。",
    tags: ["安慕希", "情感广告", "亲情"],
    cover: "/works/baozhiqi.jpg",
  },
  {
    title: "深蓝秩序",
    category: "AIGC广告",
    type: "Product Concept",
    desc: "这一口，主角不是果酱，不是果粒，是整颗蓝莓。",
    tags: ["产品概念", "蓝莓", "视觉标题"],
    cover: "/works/shenlanzhixu.jpg",
  },
  {
    title: "藏在瓶口的宇宙",
    category: "AIGC广告",
    type: "Product Concept",
    desc: "瓶子里有流动的酸奶银河，也有一颗颗完整蓝莓组成的星球和轨道。",
    tags: ["安慕希", "宇宙视觉", "产品创意"],
    cover: "/works/cangzaipingkoudeyuzhou.jpg",
  },
  {
    title: "决战紫禁之巅外传",
    category: "AIGC广告",
    type: "Commercial Short",
    desc: "江湖不是打打杀杀。",
    tags: ["哈啤", "武侠", "广告短片"],
    cover: "/works/juezhanzijinjidianwaizhuan.jpg",
  },
  {
    title: "404旅馆",
    category: "动漫短片",
    type: "Animated Short",
    desc: "告别，不一定非要等到明天。",
    tags: ["动漫短片", "告别", "温暖叙事"],
    cover: "/works/404lvguan.jpg",
  },
  {
    title: "数据墓场",
    category: "动漫短片",
    type: "Animated Concept",
    desc: "数据不会撒谎，但人会。",
    tags: ["数据叙事", "概念短片", "冷蓝世界观"],
    cover: "/works/shujumuchang.jpg",
  },
  {
    title: "Elara",
    category: "创意短片",
    type: "Sci-fi Short",
    desc: "轻科幻小短片。",
    tags: ["轻科幻", "角色概念", "冷调影像"],
    cover: "/works/elara.jpg",
  },
  {
    title: "七日人生",
    category: "创意短片",
    type: "Creative Short",
    desc: "我们每天换着颜色生活，却忘了面具之下原本的样子。",
    tags: ["创意短片", "都市寓言", "角色隐喻"],
    cover: "/works/qirirensheng.jpg",
  },
];

const process = [
  {
    icon: PenTool,
    title: "创意与剧本",
    text: "先确定叙事目标、情绪钩子和信息密度，不急着生成画面。",
  },
  {
    icon: Layers3,
    title: "分镜与资产",
    text: "把故事拆成可执行镜头，再整理角色、场景、产品和关键帧资产。",
  },
  {
    icon: Wand2,
    title: "AIGC生成",
    text: "用可见内容优先的提示词控制画面，减少抽象词污染和镜头穿帮。",
  },
  {
    icon: Clapperboard,
    title: "后期整合",
    text: "通过剪辑、调色、声音和节奏，让生成素材变成真正可看的成片。",
  },
];

const services = [
  "AIGC广告短片",
  "AI分镜设计",
  "角色定妆与场景资产",
  "产品视觉与海报封面",
  "视频提示词工作流",
  "后期剪辑与视觉整合",
];

const categories = ["全部", "AIGC广告", "AIGC短片", "影视混剪", "动漫短片", "创意短片"];

function WorkCard({ work, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.24) }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20 backdrop-blur"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-900">
        <img
          src={work.cover}
          alt={work.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Play size={13} /> {work.category}
        </div>
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-cyan-100/80">{work.type}</p>
            <h3 className="text-2xl font-semibold text-white">{work.title}</h3>
          </div>
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="min-h-14 text-sm leading-7 text-slate-300">{work.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-xs text-cyan-100/80">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [keyword, setKeyword] = useState("");

  const filteredWorks = useMemo(() => {
    const lower = keyword.trim().toLowerCase();
    return works.filter((work) => {
      const matchCategory = activeCategory === "全部" || work.category === activeCategory;
      const matchKeyword = !lower || `${work.title} ${work.desc} ${work.tags.join(" ")}`.toLowerCase().includes(lower);
      return matchCategory && matchKeyword;
    });
  }, [activeCategory, keyword]);

  return (
    <main className="min-h-screen bg-[#050914] text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-80 h-[420px] w-[420px] rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-slate-950 shadow-lg shadow-cyan-500/20">
            <Camera size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">像素暗室</p>
            <p className="text-xs text-slate-400">Pixel Darkroom</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#works">作品</a>
          <a className="hover:text-white" href="#process">流程</a>
          <a className="hover:text-white" href="#about">关于</a>
          <a className="hover:text-white" href="#contact">联系</a>
        </nav>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-cyan-100/90 backdrop-blur">
            <Sparkles size={16} /> AIGC Visual Director / Post-production Creator
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-7xl">
            不止生成画面，
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-pink-200 bg-clip-text text-transparent">而是制造可成片的影像。</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            我是像素暗室 Pixel Darkroom，一名后期出身的AIGC影像创作者。专注于AIGC广告片、AI分镜、产品视觉、角色资产与后期落地。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#works" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
              查看作品 <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              联系合作 <Mail size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-pink-400/20 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
              <img src="/works/youwoqilang.jpg" alt="由我起浪" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
              <div className="absolute inset-x-8 bottom-8 rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur">
                <p className="text-sm text-cyan-100/80">Current Focus</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">AIGC影像生产流程</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">剧本、分镜、资产、首帧、视频生成、剪辑、调色与声音整合。</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="works" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-200/70">Selected Works</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">精选作品</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            作品覆盖影视混剪、AIGC广告、AIMV、动漫短片和轻科幻创意短片。后续每个作品可继续展开为完整案例页。
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeCategory === category
                    ? "border-white bg-white text-slate-950"
                    : "border-white/10 bg-white/[0.035] text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 backdrop-blur lg:w-80">
            <Search size={16} className="text-slate-500" />
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="搜索作品 / 标签"
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredWorks.map((work, index) => (
            <WorkCard key={work.title} work={work} index={index} />
          ))}
        </div>
      </section>

      <section id="process" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur md:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-pink-200/70">Workflow</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">我的AIGC影像流程</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              不把AI当成单张图抽卡工具，而是把它放进完整影像生产链路里。重点不是“生成得像不像”，而是素材能不能剪、画面能不能接、最终能不能成片。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-200/70">About</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">后期出身的AIGC影像创作者</h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-slate-300">
          <p>
            我关注的不只是单帧画面是否惊艳，而是镜头之间的关系、节奏、素材可用性和最终成片。AIGC对我来说不是替代后期，而是扩展影像生产边界。
          </p>
          <p>
            当前主要方向包括：AIGC广告片、AI分镜、产品视觉、角色定妆、场景资产、视频提示词工作流，以及剪辑、调色、声音设计和成片整合。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-200">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.18),transparent_34%),rgba(255,255,255,0.035)] p-8 backdrop-blur md:p-12">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80">
              <Film size={16} /> Collaboration
            </div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">合作 / 交流 / 项目咨询</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              AIGC广告片、AI分镜、产品视觉、角色资产、短片后期整合，均可联系。
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">邮箱：13983800346@163.com</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">微信：NFD-NSSS</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">品牌：像素暗室 / Pixel Darkroom</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">方向：AIGC影像 / 后期 / 分镜</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p>© 2026 Pixel Darkroom. All rights reserved.</p>
          <p>AIGC Visual Director / Post-production Creator</p>
        </div>
      </footer>
    </main>
  );
}
