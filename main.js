/* ============================================================
   个人主页 · 交互脚本
   打字机效果 / 滚动浮现 / 导航栏状态 / 移动端菜单
   ============================================================ */

// ---------- 打字机效果 ----------
const PHRASES = ['全栈工程师', '开源爱好者', '独立开发者', '终身学习者'];
const typedEl = document.getElementById('typed');
const TYPE_SPEED = 110;   // 打字速度 ms
const ERASE_SPEED = 55;   // 删除速度 ms
const HOLD_TIME = 1800;   // 打完停留 ms

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
  const phrase = PHRASES[phraseIdx];

  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      return setTimeout(typeLoop, HOLD_TIME);
    }
    return setTimeout(typeLoop, TYPE_SPEED);
  }

  typedEl.textContent = phrase.slice(0, --charIdx);
  if (charIdx === 0) {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % PHRASES.length;
  }
  setTimeout(typeLoop, ERASE_SPEED);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typeLoop();
} else {
  typedEl.textContent = PHRASES[0];
}

// ---------- 滚动浮现动画 ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---------- 导航栏：滚动加背景 + 当前分区高亮 ----------
const navbar = document.getElementById('navbar');

function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

document.querySelectorAll('main section[id]').forEach((sec) => sectionObserver.observe(sec));

// ---------- 移动端菜单 ----------
const menuBtn = document.getElementById('menuBtn');
const navLinksEl = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});

navLinksEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinksEl.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// ---------- 页脚年份 ----------
document.getElementById('year').textContent = new Date().getFullYear();
