export function formatTags(tags) {
  tags = tags.filter((tag) => tag.trim().length > 0);
  if (!tags || tags.length === 0) return [];

  return tags.map((tag) => {
    const tagElement = document.createElement('span');
    tagElement.textContent = tag
      .trim()
      .toLowerCase()
      .replace(/^\w/, (c) => c.toUpperCase());
    tagElement.classList.add(
      'border',
      'text-sm',
      'md:text-base',
      'font-bold',
      'px-3',
      'py-1',
      'rounded-full',
      'dark:border-black',
      'dark:text-black'
    );
    return tagElement;
  });
}
