import {
  createDivElement,
  createElementParagraph,
  createImageElement,
} from '../ui/dom/domElements';

export function renderComments(comments) {
  const commentsContainer = document.getElementById('commentsContainer');

  if (!commentsContainer) {
    console.error('Comments container not found');
    return;
  }

  if (comments && comments.length > 0) {
    comments.forEach((comment) => {
      const commentCards = createDivElement({
        className: ['bg-purpleLight', 'dark:bg-violetLight', 'rounded'],
      });

      const authorContainer = createDivElement({
        className: [
          'flex',
          'gap-2',
          'items-center',
          'border-b',
          'border-whiteFaded',
          'mx-4',
          'mb-4',
          'pt-2',
          'pb-1',
        ],
      });

      const commentAuthor = createElementParagraph({
        textContent: comment.author.name,
        className: [],
      });

      const avatarContainer = createDivElement({
        className: [
          'flex',
          'items-center',
          'justify-center',
          'h-6',
          'w-6',
          'rounded-full',
          'overflow-hidden',
          'aspect-square',
        ],
      });

      const userAvatar = createImageElement({
        src: comment.author.avatar.url,
        alt: comment.author.avatar.alt,
        className: ['w-full', 'h-full', 'object-cover'],
      });

      const commentText = createElementParagraph({
        textContent: comment.body,
        className: ['mx-4', 'pb-2'],
      });

      avatarContainer.appendChild(userAvatar);
      authorContainer.append(avatarContainer, commentAuthor);
      commentCards.append(authorContainer, commentText);
      commentsContainer.append(commentCards);
    });
  } else {
    const noComments = createElementParagraph({
      textContent: 'No comments yet',
    });
    commentsContainer.append(noComments);
  }
}
