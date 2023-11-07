const getS3RootDomain = () => {
  return `https://sjc1.vultrobjects.com/${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}`;
};

export default getS3RootDomain;
