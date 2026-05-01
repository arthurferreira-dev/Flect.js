const get = (id, format) => {
  if (format === "query") return document.querySelector(id);
  if (format === "queryAll") return document.querySelectorAll(id);
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
const titleTag = document.title;
const doctype = document.doctype;
const encoding = document.characterSet; // or document.charset (don´t use because it is deprecated)
const view = document.defaultView;
const domain = document.domain;

const totalScripts = document.scripts.length;
const totalLinks = document.links.length;
const totalImages = document.images.length;
const totalForms = document.forms.length;
const totalAnchors = document.anchors.length;
const totalApplets = document.applets.length;

const addClass = (el, ...className) => el.classList.add(...className);
const addClassAll = (elements, ...classNames) => {
  const els = elements.length ? Array.from(elements) : [elements];
  els.forEach((el) => el.classList.add(...classNames));
};
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

const create = (tag, attrs = {}, ...children) => {
  const el = document.createElement(tag);
  Object.keys(attrs).forEach((key) => {
    if (key.startsWith("on") && typeof attrs[key] === "function") {
      el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
    } else {
      el.setAttribute(key, attrs[key]);
    }
  });
  children.forEach((child) => {
    if (typeof child === "string")
      el.appendChild(document.createTextNode(child));
    else el.appendChild(child);
  });
  return el;
};

const write = (...content) => document.write(...content);
const textNode = (text) => document.createTextNode(text);
const url = document.URL;

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
  titleTag,
  doctype,
  encoding,
  view,
  domain,
  totalScripts,
  totalLinks,
  totalImages,
  totalForms,
  totalAnchors,
  totalApplets,
  setAttr,
  removeAttr,
  onEvent,
  offEvent,
  show,
  hide,
  hasClass,
  create,
  write,
  textNode,
  addClassAll,
  url,
};