/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://realgategel.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://realgategel.com/sitemap.xml"],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/privacy-policy", "/blog", "/blog/*", "/pricing"],
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    if (path === "/") { priority = 1.0; changefreq = "weekly"; }
    else if (path.startsWith("/services/")) { priority = 0.9; changefreq = "weekly"; }
    else if (path.startsWith("/areas/")) { priority = 0.8; changefreq = "monthly"; }
    else if (path.startsWith("/tips/")) { priority = 0.7; changefreq = "monthly"; }
    else if (path.startsWith("/blog/")) { priority = 0.1; changefreq = "never"; }
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() };
  },
};
