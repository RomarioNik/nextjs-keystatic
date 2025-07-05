import { createReader } from "@keystatic/core/reader";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import keystaticConfig from "../../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return <div>No Post Found</div>;
  }

  const { node } = await post.content();
  const errors = Markdoc.validate(node);

  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid content");
  }

  const renderable = Markdoc.transform(node);

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4">
        <h1>{post.title}</h1>
        {Markdoc.renderers.react(renderable, React)}
        <hr />
        <a href={`/`}>Back to Posts</a>
      </div>
    </>
  );
}
