type GetFormat = "query" | "byId" | "byClass" | "byTag";

type GetReturn<F extends GetFormat> =
  F extends "query"   ? Element | null :
  F extends "byId"    ? HTMLElement | null :
  F extends "byClass" ? HTMLCollectionOf<Element> :
  F extends "byTag"   ? HTMLCollectionOf<Element> :
  never;

declare function get<F extends GetFormat>(id: string, format: F): GetReturn<F>;

declare function createTag<T extends keyof HTMLElementTagNameMap>(tag: T): HTMLElementTagNameMap[T];

declare function addText(el: HTMLElement, text: string): void;
declare function addHTML(el: HTMLElement, html: string): void;
declare function append(parent: HTMLElement, child: HTMLElement): void;

declare const headTag: HTMLHeadElement;
declare const bodyTag: HTMLBodyElement;

declare function addClass(el: HTMLElement, ...className: string[]): void;
declare function removeClass(el: HTMLElement, ...className: string[]): void;
declare function toggleClass(el: HTMLElement, className: string): void;
declare function replaceClass(el: HTMLElement, oldClass: string, newClass: string): void;

declare function setAttr(el: HTMLElement, attr: string, value: string): void;
declare function removeAttr(el: HTMLElement, attr: string): void;

declare function onEvent<K extends keyof HTMLElementEventMap>(
  el: HTMLElement,
  event: K,
  callback: (e: HTMLElementEventMap[K]) => void
): void;

declare function offEvent<K extends keyof HTMLElementEventMap>(
  el: HTMLElement,
  event: K,
  callback: (e: HTMLElementEventMap[K]) => void
): void;

declare function show(el: HTMLElement): void;
declare function hide(el: HTMLElement): void;
declare function hasClass(el: HTMLElement, className: string): boolean;

export declare const flect: {
  get: typeof get;
  createTag: typeof createTag;
  addText: typeof addText;
  addHTML: typeof addHTML;
  append: typeof append;
  headTag: typeof headTag;
  bodyTag: typeof bodyTag;
  addClass: typeof addClass;
  removeClass: typeof removeClass;
  toggleClass: typeof toggleClass;
  replaceClass: typeof replaceClass;
  setAttr: typeof setAttr;
  removeAttr: typeof removeAttr;
  onEvent: typeof onEvent;
  offEvent: typeof offEvent;
  show: typeof show;
  hide: typeof hide;
  hasClass: typeof hasClass;
};

export type Flect = typeof flect;