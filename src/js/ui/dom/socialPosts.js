import {
  createDivElement,
  createImageElement,
  createHeadingElement,
  createElementParagraph,
} from './domElements';

export function buildSocialPostsCards(postData) {
  const postCard = createDivElement({
    className: ['post-card'],
  });

  const contentContainer = createDivElement({
    className: ['social-posts-content'],
  });

  const imageContainer = createDivElement({
    className: [
      'w-full',
      'h-60',
      'sm:h-80',
      'cursor-pointer',
      'hover:drop-shadow-white',
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
    className: ['bg-purpleLight', 'py-4'],
    id: 'cardTextContainer',
  });

  const userIcon = createDivElement({
    className: ['fa-solid', 'fa-user', 'flex', 'gap-2', 'pt-2', 'px-4'],
  });

  const userName = document.createElement('span');
  userName.textContent = postData.author.name;
  userName.classList.add('font-sans', 'text-sm', 'font-light');

  const postTitle = createHeadingElement({
    className: ['text-xl', 'font-bold', 'pt-2', 'px-4'],
    htmlElement: 'h2',
    textContent: postData.title,
  });

  const postText = createElementParagraph({
    className: ['pt-2', 'px-4'],
    textContent: postData.body,
  });

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
