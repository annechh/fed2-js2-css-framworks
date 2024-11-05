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

  const postTitleHeading = document.getElementById('postTitle');
  postTitleHeading.textContent = postData.title;

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
    className: ['flex', 'flex-col', 'gap-5', 'items-center', 'mx-4'],
  });

  const postTitle = createHeadingElement({
    className: ['w-full', 'text-xl', 'max-w-[800px]'],
    htmlElement: 'h2',
    textContent: postData.title,
  });

  const textAuthorContainer = createDivElement({
    className: ['max-w-[800px]'],
  });

  const postText = createElementParagraph({
    className: [
      'text-base',
      'md:text-lg',
      'border-b',
      'border-whiteFaded',
      'pb-2',
    ],
    textContent: postData.body,
  });
  const postAuthor = createElementParagraph({
    textContent: 'Post by: ' + postData.author.name,
    className: ['w-full', 'italic', 'pt-2', 'text-xs'],
  });

  const postTags = createElementParagraph({
    textContent: formatTags(postData.tags),
  });

  const buttonContainer = createDivElement({
    className: ['flex', 'gap-5', 'w-full', 'justify-between', 'md:justify-end'],
  });

  const deleteButton = createElementButton({
    id: 'deletePostButton',
    className: ['btn', 'btn-delete'],
    textContent: 'Delete Post',
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
  textInnerContainer.append(
    buttonContainer,
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
