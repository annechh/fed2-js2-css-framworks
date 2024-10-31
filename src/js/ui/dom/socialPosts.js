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
    className: ['social-posts-content', 'flex', 'flex-col', 'h-full'],
  });

  const imageContainer = createDivElement({
    className: [
      'w-full',
      'h-60',
      'sm:h-80',
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
      'py-4',
      'flex',
      'flex-col',
      'justify-between',
      'max-h-40',
      'md:max-h-44',
      'lg:max-h-52',
      'h-full',
    ],
    id: 'cardTextContainer',
  });

  const userDateTitleContainer = createDivElement({
    className: ['flex', 'flex-col', 'gap-1'],
  });

  const userDateContainer = createDivElement({
    className: [
      'flex',
      'justify-between',
      'border-b',
      'border-whiteFaded',
      'mx-4',
    ],
  });

  const userIcon = createDivElement({
    className: ['fa-solid', 'fa-user', 'flex', 'gap-2', 'pb-2'],
  });

  const userName = document.createElement('span');
  userName.textContent = postData.author.name;
  userName.classList.add('font-sans', 'text-sm', 'font-light');

  const postDate = createElementParagraph({
    textContent: ' ',
    className: ['text-sm', 'font-light'],
  });

  const formattedDate = new Date(postData.created);
  const dateSpanElement = document.createElement('span');
  dateSpanElement.textContent = `
    ${formattedDate.getDate()}
    ${months[formattedDate.getMonth()]}
    ${formattedDate.getFullYear()}`;

  const postTitle = createHeadingElement({
    className: ['text-base', 'font-bold', 'px-4'],
    htmlElement: 'h2',
    textContent: postData.title,
  });

  const postText = createElementParagraph({
    className: [
      'pt-2',
      'px-4',
      'overflow-hidden',
      'line-clamp-1',
      'md:line-clamp-3',
    ],
    textContent: postData.body,
  });

  const reactCommentContainer = createDivElement({
    className: ['flex', 'justify-between', 'items-center', 'px-4'],
  });

  const reactEmoji = createElementButton({
    textContent: '👍',
  });

  const reactCount = document.createElement('span');
  reactCount.textContent = postData._count.reactions || '';

  const commentsIcon = createDivElement({
    id: 'commentsContainer',
    className: ['fa-solid', 'fa-comment', 'flex', 'gap-2', 'pt-2', 'px-4'],
  });

  const commentsCount = document.createElement('span');
  commentsCount.textContent = postData._count.comments;
  commentsCount.classList.add('font-sans', 'font-xs');

  userIcon.appendChild(userName);
  commentsIcon.appendChild(commentsCount);
  textContainer.append(userIcon, postTitle, postText, commentsIcon);
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
