export default async function sitemap() {
  const baseUrl = "https://dineshkumar-portfolio-website.netlify.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

