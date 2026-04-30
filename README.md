# DOM Utility Functions / Funções Utilitárias DOM

Lightweight helper functions for DOM manipulation.  
Funções auxiliares leves para manipulação do DOM.

---

## Installation with packager manager / Instalação com gerenciador de pacote

```bash
## npm
npm i flect.js

## yarn
yarn add flect.js

## bun
bun add flect.js
```

## `get(id, format)`

**EN:** Selects a DOM element using different query strategies based on the `format` argument.

**PT:** Seleciona um elemento do DOM usando diferentes estratégias de busca com base no argumento `format`.

| `format`    | Method used / Método usado              |
|-------------|-----------------------------------------|
| `"query"`   | `document.querySelector(id)`           |
| `"byId"`    | `document.getElementById(id)`          |
| `"byClass"` | `document.getElementsByClassName(id)`  |
| `"byTag"`   | `document.getElementsByTagName(id)`    |

```js
get("#app", "query");       // → Element
get("main-title", "byId");  // → Element
get("card", "byClass");     // → HTMLCollection
get("div", "byTag");        // → HTMLCollection
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

## `append(parent, child)`

**EN:** Appends a child element to a parent element. 

**PT:** Adiciona um elemento filho a um elemento pai.

```js
append(document.body, div);
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

## `addClass(el, ...className)`

**EN:** Adds one or more CSS classes to an element.  

**PT:** Adiciona uma ou mais classes CSS a um elemento.

```js
addClass(div, "active");
addClass(div, "active", "visible", "highlighted");
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

## `hasClass(el, className)`

**EN:** Returns `true` if the element has the specified class, `false` otherwise.  

**PT:** Retorna `true` se o elemento possuir a classe especificada, `false` caso contrário.

```js
if (hasClass(btn, "active")) {
  // do something / faça algo
}
```

---

## `flect` (export)

**EN:** Named export that bundles the core utility functions into a single object for modular usage. 

**PT:** Export nomeado que agrupa as funções utilitárias principais em um único objeto para uso modular.

```js
import { flect } from "./flect.js";

const div = flect.createTag("div");
flect.addClass(div, "card");
flect.setAttr(div, "id", "my-card");
flect.append(flect.bodyTag, div);
```

---

## View in NPM / Veja na NPM

[Flect.js](https://www.npmjs.com/package/flect.js)