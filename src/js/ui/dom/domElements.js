export function createImageElement({
  id = '',
  className = [],
  src = '',
  alt = '',
}) {
  const elementImage = Object.assign(document.createElement('img'), {
    className,
    id,
    src,
    alt,
  });

  if (className.length) {
    elementImage.classList.add(...className);
  }

  return elementImage;
}

export function createDivElement({ className = [], id = '', textContent }) {
  const elementDiv = document.createElement('div');
  if (className.length) {
    elementDiv.classList.add(...className);
  }
  if (id) {
    elementDiv.id = id;
  }
  if (textContent) {
    elementDiv.textContent = textContent;
  }
  return elementDiv;
}

export function createHeadingElement({
  id = '',
  className = [],
  htmlElement,
  textContent,
}) {
  const elementHeading = document.createElement(htmlElement);
  elementHeading.textContent = textContent;
  if (className.length) {
    elementHeading.classList.add(...className);
  }
  return elementHeading;
}

export function createElementParagraph({
  id = '',
  className = [],
  textContent,
}) {
  const elementParagraph = document.createElement('p');

  if (id) {
    elementParagraph.id = id;
  }
  if (className.length) {
    elementParagraph.classList.add(...className);
  }
  if (textContent) {
    elementParagraph.textContent = capitalizeLetters(textContent);
  }
  return elementParagraph;
}

export function createElementHref({ href = '', className = [], textContent }) {
  const elementHref = document.createElement('a');

  if (href) {
    elementHref.href = href;
  }
  if (className.length) {
    elementHref.classList.add(...className);
  }
  if (textContent) {
    elementHref.textContent = textContent;
  }
  return elementHref;
}

export function createElementButton({ id = '', className = [], textContent }) {
  const elementButton = document.createElement('button');

  if (id) {
    elementButton.id = id;
  }
  if (className.length) {
    elementButton.classList.add(...className);
  }
  if (textContent) {
    elementButton.textContent = textContent;
  }
  return elementButton;
}

function capitalizeLetters(text) {
  if (!text) return text;

  text = text.charAt(0).toUpperCase() + text.slice(1);

  text = text.replace(
    /([.!?])\s*([a-z])/g,
    (match, punctuation, letter) => `${punctuation} ${letter.toUpperCase()}`
  );

  return text;
}
