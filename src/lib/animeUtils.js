import { animate, utils } from "animejs";

/**
 * Animate a counter value from start to target number using Anime.js v4
 * @param {HTMLElement} el 
 * @param {number} start 
 * @param {number} end 
 * @param {string} suffix 
 * @param {number} duration 
 */
export function animateCounter(el, start, end, suffix = "", duration = 2000) {
  if (!el) return;
  const obj = { value: start };
  animate(obj, {
    value: end,
    duration: duration,
    ease: "outExpo",
    onUpdate: () => {
      el.textContent = `${Math.round(obj.value)}${suffix}`;
    },
  });
}

/**
 * Staggered entrance for list or grid elements using Anime.js v4
 * @param {string | HTMLElement | NodeList} selector 
 * @param {number} delay 
 */
export function animateStaggerIn(selector, delay = 0) {
  animate(selector, {
    opacity: [0, 1],
    translateY: [25, 0],
    delay: utils.stagger(120, { start: delay }),
    duration: 800,
    ease: "outCubic",
  });
}
