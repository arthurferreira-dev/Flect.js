type GetFormat =
  | "query"
  | "queryAll"
  | "byId"
  | "byClass"
  | "byTag"
  | "byName"
  | "byTagNS"
  | "fromPoint"
  | "fromPoints";

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
          : F extends "byName"
            ? NodeListOf<Element>
            : F extends "byTagNS"
              ? HTMLCollectionOf<Element>
              : F extends "fromPoint"
                ? Element | null
                : F extends "fromPoints"
                  ? Element[]
                  : never;

export declare const flect: {
  get<F extends GetFormat>(id: F extends "byTagNS" | "fromPoint" | "fromPoints" ? readonly [string, ...any[]] : string, format: F): GetReturn<F>;

  createTag<K extends keyof HTMLElementTagNameMap>(tag: K): HTMLElementTagNameMap[K];
  create<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs?: Record<string, string | EventListener>,
    ...children: (string | HTMLElement)[]
  ): HTMLElementTagNameMap[K];
  textNode(text: string): Text;

  addText(el: HTMLElement, text: string): void;
  addTextHTML(el: HTMLElement, html: string): void;
  addTextContent(el: Node, text: string): void;
  write(...content: string[]): void;

  setStyle<K extends keyof CSSStyleDeclaration>(el: HTMLElement, prop: K, value: string): void;

  append(parent: Node, child: Node): void;
  remove(el: ChildNode): void;
  replace(newEl: Node, oldEl: Node): void;
  contain(parent: Node, node: Node): boolean;
  outerHTML(element: Element): string;
  clone(element: Node, deep?: boolean): Node;

  nodeName(el: Node): string;
  nodeType(el: Node): number;
  nodeValue(el: Node): string | null;
  parentNode(el: Node): ParentNode | null;
  getChildNodes(el: Node): NodeListOf<ChildNode>;
  firstChild(el: Node): ChildNode | null;
  lastChild(el: Node): ChildNode | null;
  nextSibling(el: Node): ChildNode | null;
  prevSibling(el: Node): ChildNode | null;
  mergeTextNode(el: Node): void;
  ownerDoc(el: Node): Document | null;

  ancestor(el: Element, selector: string): Element | null;
  fits(el: Element, selector: string): boolean;

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
  doctype: DocumentType | null;
  encoding: string;
  view: WindowProxy | null;
  domain: string;
  url: string;

  totalScripts: number;
  totalLinks: number;
  totalImages: number;
  totalForms: number;
  totalAnchors: number;
  totalApplets: number;
};

export type Flect = typeof flect;