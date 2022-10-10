const handler = async (req, res) => {
  await res.revalidate("/blog");

  const pathToRevalidate = `/blog/${
    req.body?.blogPost?.id || req.body?.old_blogPost.id
        }`;
    await res.revalidate(pathToRevalidate)

  return res.send({ revalidated: true });
};

export default handler;
