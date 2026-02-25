import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Sapnendra Jaiswal - Full Stack Web Developer | MERN Stack Expert",
  description = "Sapnendra Jaiswal is a Full Stack Web Developer specializing in MERN stack, React, Node.js, MongoDB, and modern web technologies. Expert in building REST APIs, authentication systems, and AI-integrated responsive websites.",
  keywords = "Sapnendra Jaiswal, Sapnendra, Full Stack Developer, MERN Stack Developer, React Developer, Node.js Developer, Web Developer, JavaScript Developer",
  url = "https://sapnendra.tech/",
  image = "https://sapnendra.tech/og-image.jpg",
  type = "website",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Sapnendra Jaiswal Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@sapnendra" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
