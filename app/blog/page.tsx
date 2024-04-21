import React from 'react';
import PostCard from '../../components/PostCard';
import { getAllPosts } from '../../lib/cosmic';
import HeaderWithSearchBar from '../../components/search';

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();

  return (
    <main>
      <HeaderWithSearchBar />
      <div className="mx-auto mt-4 w-full max-w-screen-xl flex-col space-y-16 px-4 lg:px-0">
        {!posts && 'You must add at least one Post to your Bucket'}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </main>
  );
}
export const revalidate = 60;
