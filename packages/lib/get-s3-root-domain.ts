const getS3RootDomain = () => {
  return `${process.env.NEXT_PUBLIC_AWS_ENDPOINT}`;
};

export default getS3RootDomain;
