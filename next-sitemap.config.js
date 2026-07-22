/** @type {import('next-sitemap').IConfig} */

// Low-competition markets get crawled first.
const AREA_TIER_1 = ["fresno", "bakersfield", "lancaster", "palmdale", "oxnard", "ventura-county", "santa-barbara"];
const AREA_TIER_2 = ["santa-clarita", "glendora", "hacienda-heights", "torrance", "manhattan-beach", "long-beach", "orange-county"];
const AREA_TIER_3 = ["calabasas", "encino", "sherman-oaks", "woodland-hills", "beverly-hills", "glendale", "burbank", "pasadena", "los-angeles"];

module.exports = {
  siteUrl: "https://realgaterepair.com",
  outDir: "./out",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/privacy-policy", "/blog", "/blog/*", "/pricing"],
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;
    if (path === "/") { priority = 1.0; changefreq = "weekly"; }
    else if (path.startsWith("/services/")) { priority = 0.9; changefreq = "weekly"; }
    else if (path.startsWith("/brands/")) { priority = 1.0; changefreq = "monthly"; }
    else if (path.startsWith("/areas/")) {
      const slug = path.replace("/areas/", "").replace(/\/$/, "");
      if (AREA_TIER_1.includes(slug)) priority = 1.0;
      else if (AREA_TIER_2.includes(slug)) priority = 0.9;
      else if (AREA_TIER_3.includes(slug)) priority = 0.8;
      else priority = 0.8;
      changefreq = "monthly";
    }
    else if (path.startsWith("/tips/")) { priority = 0.7; changefreq = "monthly"; }
    else if (path.startsWith("/blog/")) { priority = 0.1; changefreq = "never"; }
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() };
  },
};
