import { API_SOCIAL_POSTS } from '../constants';
import { headers } from '../headers';

export async function createPost({ title, body, tags, media }) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ title, body, tags, media }),
    });
    if (!response.ok) {
      alert('Failed to create post');
    } else {
      const data = await response.json();
      alert('Successfully created new post, redirecting you to the post');
      window.location.href = `/post/?id=${data.data.id}`;
      return data;
    }
  } catch (error) {
    alert('Failed to create new post');
  }
}
