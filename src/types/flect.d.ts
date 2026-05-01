type GetFormat = "query" | "queryAll" | "byId" | "byClass" | "byTag";

type GetReturn<F extends GetFormat> = F extends "query"
  ? Element | null
  : F extends "queryAll"
    ? NodeListOf<Element>
    : F extends "byId"
      ? HTMLElement | null
      : F extends "byClass"
        ? HTMLCollectionOf<Element>
        : F extends "byTag"
          ? HTMLCollectionOf<Element>
          : never;

export declare const flect: {
  get<F extends GetFormat>(id: string, format: F): GetReturn<F>;

  createTag<K extends keyof HTMLElementTagNameMap>(
    tag: K,
  ): HTMLElementTagNameMap[K];
  create<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs?: Record<string, string | EventListener>,
    ...children: (string | HTMLElement)[]
  ): HTMLElementTagNameMap[K];
  textNode(text: string): Text;

  addText(el: HTMLElement, text: string): void;
  addHTML(el: HTMLElement, html: string): void;
  write(...content: string[]): void;

  append(parent: HTMLElement, child: HTMLElement): void;

  addClass(el: Element, ...className: string[]): void;
  addClassAll(
    elements: NodeListOf<Element> | HTMLCollectionOf<Element> | Element,
    ...classNames: string[]
  ): void;
  removeClass(el: Element, ...className: string[]): void;
  toggleClass(el: Element, ...className: string[]): void;
  replaceClass(el: Element, oldClass: string, newClass: string): void;
  hasClass(el: Element, className: string): boolean;

  setAttr(el: Element, attr: string, value: string): void;
  removeAttr(el: Element, attr: string): void;

  onEvent<K extends keyof HTMLElementEventMap>(
    el: HTMLElement,
    event: K,
    callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
  ): void;
  offEvent<K extends keyof HTMLElementEventMap>(
    el: HTMLElement,
    event: K,
    callback: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
  ): void;

  show(el: HTMLElement): void;
  hide(el: HTMLElement): void;

  headTag: HTMLHeadElement;
  bodyTag: HTMLBodyElement;
  titleTag: string;
  url: string;

  totalScripts: number;
  totalLinks: number;
  totalImages: number;
  totalForms: number;
  totalAnchors: number;
  totalApplets: number;
};

export type Flect = typeof flect;