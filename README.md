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

| `format`     | Method used / Método usado            |
| ------------ | ------------------------------------- |
| `"query"`    | `document.querySelector(id)`          |
| `"queryAll"` | `document.querySelectorAll(id)`       |
| `"byId"`     | `document.getElementById(id)`         |
| `"byClass"`  | `document.getElementsByClassName(id)` |
| `"byTag"`    | `document.getElementsByTagName(id)`   |

```js
get("#app", "query"); // → Element
get(".card", "queryAll"); // → NodeList
get("main-title", "byId"); // → Element
get("card", "byClass"); // → HTMLCollection
get("div", "byTag"); // → HTMLCollection
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

## `addHTML(el, html)`

**EN:** Sets the `innerHTML` of an element, allowing insertion of HTML markup.

**PT:** Define o `innerHTML` de um elemento, permitindo a inserção de marcação HTML.

```js
addHTML(div, "<strong>Hello</strong>");
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

## `append(parent, child)`

**EN:** Appends a child element to a parent element.

**PT:** Adiciona um elemento filho a um elemento pai.

```js
append(document.body, div);
```

---

## `write(...content)`

**EN:** Writes content directly to the document using `document.write()`.

**PT:** Escreve conteúdo diretamente no documento usando `document.write()`.

```js
write("<p>Hello!</p>");
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

console.log(flect.url); // → current page URL
console.log(flect.encoding); // → "UTF-8"
```

---

## View in NPM / Veja na NPM

[Flect.js](https://www.npmjs.com/package/flect.js)