const handler = async (req, res) => {
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  await res.revalidate("/blog");

  const pathToRevalidate = `/blog/${
    req.body?.record?.id || req.body?.old_record?.id
  }`;
  await res.revalidate(pathToRevalidate);

  return res.send({ revalidated: true });
};

export default handler;
