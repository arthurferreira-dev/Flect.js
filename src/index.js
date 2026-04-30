const get = (id, format) => {
  if (format === "query") return document.querySelector(id);
  if (format === "byId") return document.getElementById(id);
  if (format === "byClass") return document.getElementsByClassName(id);
  if (format === "byTag") return document.getElementsByTagName(id);
};
const createTag = (tag) => document.createElement(tag);
const addText = (el, text) => (el.innerText = text);
const addHTML = (el, html) => (el.innerHTML = html);
const append = (parent, child) => parent.appendChild(child);
const headTag = document.head;
const bodyTag = document.body;
const addClass = (el, ...className) => el.classList.add(...className);
const removeClass = (el, ...className) => el.classList.remove(...className);
const toggleClass = (el, ...className) => el.classList.toggle(...className);
const replaceClass = (el, oldClass, newClass) =>
  el.classList.replace(oldClass, newClass);
const setAttr = (el, attr, value) => el.setAttribute(attr, value);
const removeAttr = (el, attr) => el.removeAttribute(attr);
const onEvent = (el, event, callback) => el.addEventListener(event, callback);
const offEvent = (el, event, callback) =>
  el.removeEventListener(event, callback);
const show = (el) => (el.style.display = "");
const hide = (el) => (el.style.display = "none");
const hasClass = (el, className) => el.classList.contains(className);

export const flect = {
  get,
  createTag,
  addText,
  addHTML,
  append,
  addClass,
  removeClass,
  toggleClass,
  replaceClass,
  headTag,
  bodyTag,
  setAttr,
  removeAttr,
  onEvent,
  offEvent,
  show,
  hide,
  hasClass,
};
