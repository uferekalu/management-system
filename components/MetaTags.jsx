import Head from 'next/head';

export const MetaTags = ({ title, description }) => {
  return (
    <>
      <Head>
        {title && (
          <>
            <title>{title}</title>
            <meta name="title" content={title} />
          </>
        )}
        {description && (
          <>
            <meta name="description" content={description} />
          </>
        )}
      </Head>
    </>
  );
};
