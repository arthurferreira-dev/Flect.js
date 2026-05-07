const get = (id, format) => {
  if (format === "query") return document.querySelector(id);
  if (format === "queryAll") return document.querySelectorAll(id);
  if (format === "byId") return document.getElementById(id);
  if (format === "byClass") return document.getElementsByClassName(id);
  if (format === "byTag") return document.getElementsByTagName(id);
  if (format === "byName") return document.getElementsByName(id);
  if (format === "byTagNS") return document.getElementsByTagNameNS(...id);
  if (format === "fromPoint") return document.elementFromPoint(...id);
  if (format === "fromPoints") return document.elementsFromPoint(...id);
  return null;
};

const createTag = (tag) => document.createElement(tag);
const addText = (el, text) => (el.innerText = text);
const addTextHTML = (el, html) => (el.innerHTML = html);
const addTextContent = (el, text) => (el.textContent = text);
const setStyle = (el, prop, value) => (el.style[prop] = value);
const append = (parent, child) => parent.appendChild(child);
const remove = (el) => el.parentNode.removeChild(el);
const contain = (parent, node) => parent.contains(node);
const replace = (newEl, oldEl) => oldEl.parentNode.replaceChild(newEl, oldEl);
const outerHTML = (element) => element.outerHTML;
const clone = (element, deep = true) => element.cloneNode(deep);
const nodeName = (el) => el.nodeName;
const nodeType = (el) => el.nodeType;
const nodeValue = (el) => el.nodeValue;
const parentNode = (el) => el.parentNode;
const getChildNodes = (el) => el.childNodes;
const firstChild = (el) => el.firstChild;
const lastChild = (el) => el.lastChild;
const nextSibling = (el) => el.nextSibling;
const prevSibling = (el) => el.previousSibling;
const mergeTextNode = (el) => el.normalize();
const ownerDoc = (el) => el.ownerDocument;
const ancestor = (el, selector) => el.closest(selector);
const fits = (el, selector) => el.matches(selector);

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
  addTextHTML,
  addTextContent,
  setStyle,
  append,
  outerHTML,
  clone,
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
  mergeTextNode,
  ownerDoc,
  remove,
  contain,
  replace,
  nodeName,
  nodeType,
  nodeValue,
  parentNode,
  getChildNodes,
  firstChild,
  lastChild,
  nextSibling,
  prevSibling,
  ancestor,
  fits,
};