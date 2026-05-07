# DOM Utility Functions / Funções Utilitárias DOM

Lightweight helper functions for DOM manipulation.  
Funções auxiliares leves para manipulação do DOM.

---

## Installation with package manager / Instalação com gerenciador de pacote

```bash
## npm
npm i flect.js

## yarn
yarn add flect.js

## bun
bun add flect.js
```

---

## `get(id, format)`

**EN:** Selects a DOM element using different query strategies based on the `format` argument.

**PT:** Seleciona um elemento do DOM usando diferentes estratégias de busca com base no argumento `format`.

| `format`       | Method used / Método usado                    |
| -------------- | --------------------------------------------- |
| `"query"`      | `document.querySelector(id)`                  |
| `"queryAll"`   | `document.querySelectorAll(id)`               |
| `"byId"`       | `document.getElementById(id)`                 |
| `"byClass"`    | `document.getElementsByClassName(id)`         |
| `"byTag"`      | `document.getElementsByTagName(id)`           |
| `"byName"`     | `document.getElementsByName(id)`              |
| `"byTagNS"`    | `document.getElementsByTagNameNS(...id)`      |
| `"fromPoint"`  | `document.elementFromPoint(...id)`            |
| `"fromPoints"` | `document.elementsFromPoint(...id)`           |

```js
get("#app", "query");           // → Element | null
get(".card", "queryAll");       // → NodeList
get("main-title", "byId");      // → Element | null
get("card", "byClass");         // → HTMLCollection
get("div", "byTag");            // → HTMLCollection
get("username", "byName");      // → NodeList
get([ns, "tag"], "byTagNS");    // → HTMLCollection
get([x, y], "fromPoint");       // → Element | null
get([x, y], "fromPoints");      // → Element[]
```

---

## `createTag(tag)`

**EN:** Creates and returns a new HTML element of the specified tag.

**PT:** Cria e retorna um novo elemento HTML da tag especificada.

```js
const btn = createTag("button");
const div = createTag("div");
```

---

## `create(tag, attrs, ...children)`

**EN:** Creates an HTML element with optional attributes and children in a single call. Event listeners can be passed directly as attributes using `on`-prefixed keys.

**PT:** Cria um elemento HTML com atributos e filhos opcionais em uma única chamada. Ouvintes de evento podem ser passados diretamente como atributos usando chaves prefixadas com `on`.

```js
const btn = create(
  "button",
  { id: "my-btn", onClick: () => alert("hi") },
  "Click me",
);
const div = create("div", { class: "card" }, btn);
```

---

## `addText(el, text)`

**EN:** Sets the `innerText` of an element, replacing its current text content.

**PT:** Define o `innerText` de um elemento, substituindo seu conteúdo de texto atual.

```js
addText(btn, "Click me");
```

---

## `addTextHTML(el, html)`

**EN:** Sets the `innerHTML` of an element, allowing insertion of HTML markup.

**PT:** Define o `innerHTML` de um elemento, permitindo a inserção de marcação HTML.

```js
addTextHTML(div, "<strong>Hello</strong>");
```

---

## `addTextContent(el, text)`

**EN:** Sets the `textContent` of an element. Unlike `addText`, this also affects hidden elements and does not trigger reflow.

**PT:** Define o `textContent` de um elemento. Diferente de `addText`, também afeta elementos ocultos e não aciona reflow.

```js
addTextContent(div, "Hello, world!");
```

---

## `textNode(text)`

**EN:** Creates a plain text node that can be appended to any element.

**PT:** Cria um nó de texto simples que pode ser adicionado a qualquer elemento.

```js
const node = textNode("Hello, world!");
append(div, node);
```

---

## `setStyle(el, prop, value)`

**EN:** Sets a single inline CSS property on an element.

**PT:** Define uma propriedade CSS inline em um elemento.

```js
setStyle(div, "color", "red");
setStyle(div, "fontSize", "16px");
```

---

## `append(parent, child)`

**EN:** Appends a child element to a parent element.

**PT:** Adiciona um elemento filho a um elemento pai.

```js
append(document.body, div);
```

---

## `remove(el)`

**EN:** Removes an element from the DOM by accessing its parent node.

**PT:** Remove um elemento do DOM acessando seu nó pai.

```js
remove(div);
```

---

## `replace(newEl, oldEl)`

**EN:** Replaces an existing element in the DOM with a new one.

**PT:** Substitui um elemento existente no DOM por um novo.

```js
replace(newDiv, oldDiv);
```

---

## `contain(parent, node)`

**EN:** Returns `true` if the parent element contains the given node.

**PT:** Retorna `true` se o elemento pai contiver o nó fornecido.

```js
contain(bodyTag, div); // → true | false
```

---

## `outerHTML(element)`

**EN:** Returns the outer HTML string of an element, including the element itself.

**PT:** Retorna a string HTML externa de um elemento, incluindo o próprio elemento.

```js
outerHTML(div); // → "<div class=\"card\">Hello</div>"
```

---

## `clone(element, deep)`

**EN:** Clones an element. By default performs a deep clone, including all descendants. Pass `false` to clone only the element itself.

**PT:** Clona um elemento. Por padrão realiza uma clonagem profunda, incluindo todos os descendentes. Passe `false` para clonar apenas o próprio elemento.

```js
const copy = clone(div);        // deep clone
const shallow = clone(div, false); // shallow clone
```

---

## `write(...content)`

**EN:** Writes content directly to the document using `document.write()`.

**PT:** Escreve conteúdo diretamente no documento usando `document.write()`.

```js
write("<p>Hello!</p>");
```

---

## `nodeName(el)`

**EN:** Returns the name of the node (e.g. `"DIV"`, `"SPAN"`, `"#text"`).

**PT:** Retorna o nome do nó (ex: `"DIV"`, `"SPAN"`, `"#text"`).

```js
nodeName(div); // → "DIV"
```

---

## `nodeType(el)`

**EN:** Returns the type of the node as a number (e.g. `1` for Element, `3` for Text, `8` for Comment).

**PT:** Retorna o tipo do nó como número (ex: `1` para Element, `3` para Text, `8` para Comment).

```js
nodeType(div); // → 1
```

---

## `nodeValue(el)`

**EN:** Returns the value of the node. For text and comment nodes, returns the content string; for element nodes, returns `null`.

**PT:** Retorna o valor do nó. Para nós de texto e comentário, retorna a string de conteúdo; para nós de elemento, retorna `null`.

```js
nodeValue(textNode("hi")); // → "hi"
nodeValue(div);            // → null
```

---

## `parentNode(el)`

**EN:** Returns the parent node of the given element.

**PT:** Retorna o nó pai do elemento fornecido.

```js
parentNode(div); // → HTMLElement
```

---

## `getChildNodes(el)`

**EN:** Returns a `NodeList` of all child nodes of the element, including text and comment nodes.

**PT:** Retorna uma `NodeList` com todos os nós filhos do elemento, incluindo nós de texto e comentário.

```js
getChildNodes(div); // → NodeList
```

---

## `firstChild(el)`

**EN:** Returns the first child node of the element, or `null` if there are none.

**PT:** Retorna o primeiro nó filho do elemento, ou `null` se não houver nenhum.

```js
firstChild(div); // → Node | null
```

---

## `lastChild(el)`

**EN:** Returns the last child node of the element, or `null` if there are none.

**PT:** Retorna o último nó filho do elemento, ou `null` se não houver nenhum.

```js
lastChild(div); // → Node | null
```

---

## `nextSibling(el)`

**EN:** Returns the next sibling node of the element, or `null` if there is none.

**PT:** Retorna o próximo nó irmão do elemento, ou `null` se não houver nenhum.

```js
nextSibling(div); // → Node | null
```

---

## `prevSibling(el)`

**EN:** Returns the previous sibling node of the element, or `null` if there is none.

**PT:** Retorna o nó irmão anterior do elemento, ou `null` se não houver nenhum.

```js
prevSibling(div); // → Node | null
```

---

## `mergeTextNode(el)`

**EN:** Normalizes the element by merging adjacent text nodes into one, removing empty text nodes.

**PT:** Normaliza o elemento unindo nós de texto adjacentes em um só, removendo nós de texto vazios.

```js
mergeTextNode(div);
```

---

## `ownerDoc(el)`

**EN:** Returns the `Document` object that owns the element.

**PT:** Retorna o objeto `Document` ao qual o elemento pertence.

```js
ownerDoc(div); // → Document
```

---

## `ancestor(el, selector)`

**EN:** Traverses the element and its ancestors to find the closest match for the given CSS selector.

**PT:** Percorre o elemento e seus ancestrais para encontrar o mais próximo que corresponda ao seletor CSS fornecido.

```js
ancestor(span, ".card"); // → Element | null
```

---

## `fits(el, selector)`

**EN:** Returns `true` if the element matches the given CSS selector.

**PT:** Retorna `true` se o elemento corresponder ao seletor CSS fornecido.

```js
fits(div, ".card");    // → true | false
fits(btn, "[disabled]"); // → true | false
```

---

## `addClass(el, ...className)`

**EN:** Adds one or more CSS classes to an element.

**PT:** Adiciona uma ou mais classes CSS a um elemento.

```js
addClass(div, "active");
addClass(div, "active", "visible", "highlighted");
```

---

## `addClassAll(elements, ...classNames)`

**EN:** Adds one or more CSS classes to a collection of elements or a single element.

**PT:** Adiciona uma ou mais classes CSS a uma coleção de elementos ou a um único elemento.

```js
const cards = get(".card", "queryAll");
addClassAll(cards, "active", "highlighted");
```

---

## `removeClass(el, ...className)`

**EN:** Removes one or more CSS classes from an element.

**PT:** Remove uma ou mais classes CSS de um elemento.

```js
removeClass(div, "active");
removeClass(div, "active", "visible");
```

---

## `toggleClass(el, ...className)`

**EN:** Toggles one or more CSS classes on an element (adds if absent, removes if present).

**PT:** Alterna uma ou mais classes CSS em um elemento (adiciona se ausente, remove se presente).

```js
toggleClass(div, "open");
```

---

## `replaceClass(el, oldClass, newClass)`

**EN:** Replaces an existing CSS class with a new one on an element.

**PT:** Substitui uma classe CSS existente por uma nova em um elemento.

```js
replaceClass(btn, "inactive", "active");
```

---

## `hasClass(el, className)`

**EN:** Returns `true` if the element has the specified class, `false` otherwise.

**PT:** Retorna `true` se o elemento possuir a classe especificada, `false` caso contrário.

```js
if (hasClass(btn, "active")) {
  // do something / faça algo
}
```

---

## `setAttr(el, attr, value)`

**EN:** Sets an attribute on an element with the given value.

**PT:** Define um atributo em um elemento com o valor fornecido.

```js
setAttr(img, "src", "photo.jpg");
setAttr(input, "disabled", "true");
```

---

## `removeAttr(el, attr)`

**EN:** Removes an attribute from an element.

**PT:** Remove um atributo de um elemento.

```js
removeAttr(input, "disabled");
```

---

## `onEvent(el, event, callback)`

**EN:** Attaches an event listener to an element.

**PT:** Adiciona um ouvinte de evento a um elemento.

```js
onEvent(btn, "click", () => console.log("clicked"));
```

---

## `offEvent(el, event, callback)`

**EN:** Removes a previously attached event listener from an element.

**PT:** Remove um ouvinte de evento previamente adicionado a um elemento.

```js
const handler = () => console.log("clicked");
onEvent(btn, "click", handler);
offEvent(btn, "click", handler); // removes it / remove o ouvinte
```

---

## `show(el)`

**EN:** Shows a hidden element by resetting its `display` style to its default.

**PT:** Exibe um elemento oculto, redefinindo seu estilo `display` para o padrão.

```js
show(modal);
```

---

## `hide(el)`

**EN:** Hides an element by setting its `display` style to `"none"`.

**PT:** Oculta um elemento definindo seu estilo `display` como `"none"`.

```js
hide(modal);
```

---

## `headTag`

**EN:** Reference to `document.head`.

**PT:** Referência para `document.head`.

```js
append(headTag, metaEl);
```

---

## `bodyTag`

**EN:** Reference to `document.body`.

**PT:** Referência para `document.body`.

```js
append(bodyTag, div);
```

---

## `titleTag`

**EN:** Reference to `document.title` — the current page title.

**PT:** Referência para `document.title` — o título atual da página.

```js
console.log(titleTag); // → "My Page"
```

---

## `doctype`

**EN:** Reference to `document.doctype` — the doctype declaration of the document.

**PT:** Referência para `document.doctype` — a declaração doctype do documento.

```js
console.log(doctype.name); // → "html"
```

---

## `encoding`

**EN:** Reference to `document.characterSet` — the character encoding of the document. Prefer this over the deprecated `document.charset`.

**PT:** Referência para `document.characterSet` — a codificação de caracteres do documento. Prefira este ao `document.charset`, que está depreciado.

```js
console.log(encoding); // → "UTF-8"
```

---

## `view`

**EN:** Reference to `document.defaultView` — the `window` object associated with the document.

**PT:** Referência para `document.defaultView` — o objeto `window` associado ao documento.

```js
console.log(view === window); // → true
```

---

## `domain`

**EN:** Reference to `document.domain` — the domain of the current document.

**PT:** Referência para `document.domain` — o domínio do documento atual.

```js
console.log(domain); // → "example.com"
```

---

## `url`

**EN:** Reference to `document.URL` — the full URL of the current document.

**PT:** Referência para `document.URL` — a URL completa do documento atual.

```js
console.log(url); // → "https://example.com/page"
```

---

## `totalScripts`

**EN:** Total number of `<script>` elements in the document at the time of module load.

**PT:** Total de elementos `<script>` no documento no momento do carregamento do módulo.

```js
console.log(totalScripts); // → 4
```

---

## `totalLinks`

**EN:** Total number of `<a>` and `<area>` elements with an `href` attribute in the document.

**PT:** Total de elementos `<a>` e `<area>` com atributo `href` no documento.

```js
console.log(totalLinks); // → 12
```

---

## `totalImages`

**EN:** Total number of `<img>` elements in the document.

**PT:** Total de elementos `<img>` no documento.

```js
console.log(totalImages); // → 7
```

---

## `totalForms`

**EN:** Total number of `<form>` elements in the document.

**PT:** Total de elementos `<form>` no documento.

```js
console.log(totalForms); // → 2
```

---

## `totalAnchors`

**EN:** Total number of `<a>` elements with a `name` attribute in the document.

**PT:** Total de elementos `<a>` com atributo `name` no documento.

```js
console.log(totalAnchors); // → 3
```

---

## `totalApplets`

**EN:** Total number of `<applet>` elements in the document. Applets are obsolete — this is kept for legacy support.

**PT:** Total de elementos `<applet>` no documento. Applets são obsoletos — mantido por suporte legado.

```js
console.log(totalApplets); // → 0
```

---

## `flect` (export)

**EN:** Named export that bundles all utility functions and document references into a single object for modular usage.

**PT:** Export nomeado que agrupa todas as funções utilitárias e referências de documento em um único objeto para uso modular.

```js
import { flect } from "./flect.js";

const div = flect.create("div", { class: "card" }, "Hello!");
flect.addClass(div, "active");
flect.setAttr(div, "id", "my-card");
flect.append(flect.bodyTag, div);

console.log(flect.url);      // → current page URL
console.log(flect.encoding); // → "UTF-8"
```

---

## View in NPM / Veja na NPM

[Flect.js](https://www.npmjs.com/package/flect.js)