import {
  createDivElement,
  createImageElement,
  createHeadingElement,
  createElementParagraph,
  createElementButton,
} from './domElements';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function buildSocialPostsCards(postData) {
  const postCard = createDivElement({
    className: ['post-card'],
    id: postData.id,
  });

  const contentContainer = createDivElement({
    className: [
      'social-posts-content',
      'flex',
      'flex-col',
      'sm:h-full',
      'sm:w-full',
    ],
  });

  const imageContainer = createDivElement({
    className: [
      'flex',
      'items-center',
      'justify-center',
      'w-full',
      'max-h-60',
      'sm:max-h-80',
      'h-full',
      'cursor-pointer',
      'hover:drop-shadow-white',
      'overflow-hidden',
    ],
  });
  imageContainer.addEventListener('click', () => {
    window.location.href = `/post/?id=${postData.id}`;
  });

  if (postData.media && postData.media.url) {
    const postImage = createImageElement({
      className: ['w-full', 'h-full', 'object-cover'],
      id: postData.id,
      src: postData.media.url,
      alt: postData.media.alt,
    });

    imageContainer.appendChild(postImage);
  }

  const textContainer = createDivElement({
    className: [
      'bg-purpleLight',
      'dark:bg-violetLight',
      'py-4',
      'flex',
      'flex-col',
      'justify-between',
      'max-h-40',
      'h-full',
    ],
    id: 'cardTextContainer',
  });

  const authorDateTitleContainer = createDivElement({
    className: ['flex', 'flex-col', 'gap-1'],
  });

  const authorDateContainer = createDivElement({
    className: [
      'flex',
      'justify-between',
      'border-b',
      'border-whiteFaded',
      'mx-4',
      'pb-2',
    ],
  });

  const authorContainer = createDivElement({
    className: ['flex', 'gap-2', 'items-center'],
  });

  const avatarImageContainer = createDivElement({
    className: [
      'max-h-6',
      'max-w-6',
      'rounded-full',
      'overflow-hidden',
      'flex',
      'flex-center',
      'items-center',
    ],
  });

  const authorAvatar = createImageElement({
    src: postData.author.avatar.url,
    alt: postData.author.avatar.alt,
    className: ['h-full', 'w-full', 'object-cover'],
  });

  const authorName = document.createElement('span');
  authorName.textContent = postData.author.name;
  authorName.classList.add('font-sans', 'text-sm', 'font-light');

  const postDate = createElementParagraph({
    textContent: ' ',
    className: ['flex', 'text-sm', 'font-light', 'items-center'],
  });

  const formattedDate = new Date(postData.created);
  const dateSpanElement = document.createElement('span');
  dateSpanElement.textContent = `
    ${formattedDate.getDate()}
    ${months[formattedDate.getMonth()]}
    ${formattedDate.getFullYear()}`;

  const postTitle = createHeadingElement({
    className: [
      'text-base',
      'font-bold',
      'mx-4',
      'pt-2',
      'break-words',
      'line-clamp-2',
    ],
    htmlElement: 'h2',
    textContent: postData.title,
  });

  // const postText = createElementParagraph({
  //   className: [
  //     'pt-2',
  //     'px-4',
  //     'overflow-hidden',
  //     'line-clamp-1',
  //     'md:line-clamp-3',
  //   ],
  //   textContent: postData.body,
  // });

  const reactCommentContainer = createDivElement({
    className: ['flex', 'justify-between', 'items-center', 'mx-4', 'pt-2'],
  });

  const reactEmoji = createElementButton({
    textContent: '👍',
  });

  const reactCount = document.createElement('span');
  reactCount.textContent = postData._count.reactions || '';

  const commentsIcon = createDivElement({
    id: 'commentsContainer',
    className: ['fa-solid', 'fa-comment', 'flex', 'gap-2'],
  });

  const commentsCount = document.createElement('span');
  commentsCount.textContent = postData._count.comments || '';
  commentsCount.classList.add('font-sans', 'font-light');

  reactEmoji.appendChild(reactCount);
  commentsIcon.appendChild(commentsCount);

  postDate.appendChild(dateSpanElement);
  avatarImageContainer.append(authorAvatar);
  authorContainer.append(avatarImageContainer, authorName);

  authorDateContainer.append(authorContainer, postDate);
  authorDateTitleContainer.append(authorDateContainer, postTitle);
  reactCommentContainer.append(reactEmoji, commentsIcon);

  textContainer.append(
    authorDateTitleContainer,
    // postText,
    reactCommentContainer
  );
  contentContainer.append(imageContainer, textContainer);
  postCard.append(contentContainer);

  return postCard;
}

/**
 * @description
 * Renders a list of social post into the DOM
 *
 * This function takes an array of social posts and appends their
 * corresponding HTML elements to the specified container in the DOM using `buildSocialPostsCard`
 *
 * @function renderSocialPosts
 * @param {Array<object>} socialPosts - An array of post objects to be rendered
 * @returns {void}
 *
 * @example
 * // Example usage of the renderSocialPosts function
 * const posts = [{ title: 'Post 1' }, { title: 'Post 2' }]; // Array of post objects
 * renderSocialPosts(posts);
 */

export function renderSocialPosts(socialPosts) {
  let renderPosts = document.getElementById('posts');

  if (!renderPosts) {
    console.error('Posts container not found in the DOM.');
    return;
  }
  renderPosts.innerHTML = '';

  socialPosts.forEach((post) => {
    let postCardHTML = buildSocialPostsCards(post);

    renderPosts.appendChild(postCardHTML);
  });
}
