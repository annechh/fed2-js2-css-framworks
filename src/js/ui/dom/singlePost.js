import { userData } from '../../api/constants';
import { onDeletePost } from '../post/delete';
import { renderComments } from '../../utilities/comments';
import { formatTags } from '../../utilities/tags';
import {
  createDivElement,
  createImageElement,
  createHeadingElement,
  createElementParagraph,
  createElementButton,
} from './domElements';

export function buildSinglePost(postData) {
  const renderPost = document.getElementById('post');

  const imageContainer = createDivElement({
    className: [
      'max-h-[400px]',
      'md:max-h-[800px]',
      'overflow-hidden',
      'flex',
      'flex-center',
      'items-center',
      'w-full',
    ],
  });

  const postImage =
    postData.media && postData.media.url
      ? createImageElement({
          src: postData.media.url,
          alt: postData.media.alt,
          className: 'h-full',
        })
      : null;

  if (postImage) {
    imageContainer.appendChild(postImage);
  }

  const textContainer = createDivElement({
    className: ['max-w-full', 'w-full'],
  });

  const textInnerContainer = createDivElement({
    className: [
      'flex',
      'flex-col',
      'items-start',
      'gap-6',
      'items-center',
      'mx-4',
    ],
  });

  const postTitle = createHeadingElement({
    className: [
      'w-full',
      'text-xl',
      'md:text-3xl',
      'font-bold',
      'max-w-[800px]',
      'dark:text-black',
      'break-all',
    ],
    htmlElement: 'h1',
    textContent: postData.title,
  });

  const textAuthorContainer = createDivElement({
    className: ['max-w-[800px]', 'w-full', 'pb-4'],
  });

  const postText = createElementParagraph({
    className: [
      'text-base',
      'md:text-xl',
      'border-b',
      'border-whiteFaded',
      'dark:border-blackFaded',
      'pb-2',
      'dark:text-black',
      'break-all',
    ],
    textContent: postData.body,
  });
  const postAuthor = createElementParagraph({
    textContent: 'Post by: ' + postData.author.name,
    className: [
      'w-full',
      'italic',
      'pt-2',
      'text-xs',
      'md:text-sm',
      'dark:text-black',
    ],
  });

  const postTags = createElementParagraph({
    className: [
      'flex',
      'flex-wrap',
      'gap-2',
      'text-white',
      'dark:text-black',
      'pb-4',
    ],
  });

  console.log('postData.tags:', postData.tags);

  const tagElements = formatTags(postData.tags);
  if (tagElements.length > 0) {
    tagElements.forEach((tagElement) => postTags.appendChild(tagElement));
  }

  const reactButtonContainer = createDivElement({
    className: ['flex', 'w-full', 'gap-2', 'justify-between', 'flex-wrap'],
  });

  const reactContainer = createDivElement({
    className: [
      'flex',
      'justify-between',
      'items-center',
      'px-4',
      'py-2',
      'md:px-8',
      'md:py-4',
      'bg-violetLight',
      'rounded-full',
    ],
  });

  const reactEmoji = createElementButton({
    textContent: '👍',
    className: ['text-base', 'md:text-2xl'],
  });

  const reactCount = document.createElement('span');
  reactCount.textContent = postData._count.reactions || '';
  reactCount.classList.add('text-white', 'font-bold');

  const buttonContainer = createDivElement({
    className: ['flex', 'gap-2', 'md:gap-5', 'justify-end'],
  });

  const deleteButton = createElementButton({
    id: 'deletePostButton',
    className: ['btn', 'btn-delete'],
    textContent: 'Delete',
  });
  deleteButton.addEventListener('click', () => onDeletePost());
  deleteButton.style.display =
    userData.name === postData.author.name ? 'block' : 'none';

  const editButton = createElementButton({
    id: 'editPostButton',
    className: ['btn-lightPurple'],
    textContent: 'Edit Post',
  });
  editButton.style.display =
    userData.name === postData.author.name ? 'block' : 'none';
  editButton.addEventListener('click', () => {
    window.location.href = `/post/edit/?id=${postData.id}`;
  });

  const commentsContainer = createElementParagraph({
    id: 'commentsContainer',
    className: ['flex', 'flex-col', 'gap-5', 'max-w-[800px]', 'w-full'],
  });

  buttonContainer.append(editButton, deleteButton);
  reactContainer.append(reactEmoji, reactCount);
  reactButtonContainer.append(reactContainer, buttonContainer);
  textInnerContainer.append(
    reactButtonContainer,
    postTitle,
    textAuthorContainer,
    postTags,
    commentsContainer
  );
  textAuthorContainer.append(postText, postAuthor);
  textContainer.append(textInnerContainer);
  renderPost.append(imageContainer, textContainer);
  renderComments(postData.comments);

  return renderPost;
}
