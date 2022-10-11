const handler = async (req, res) => {
  // if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  try {
    await res.revalidate("/blog");

    const pathToRevalidate = `/blog/${
      req.body?.record?.id || req.body.old_record?.id
    }`;
    await res.revalidate(pathToRevalidate);

    return res.send({ revalidated: true });
  } catch (error) {
    return res.status(500).send('Error revalidating')
  }
};

export default handler;
