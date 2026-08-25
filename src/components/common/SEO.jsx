import React, { useEffect } from 'react';

const DOMAIN = 'https://ramgopalconstructions.in';
const DEFAULT_KEYWORDS = "best construction company, best construction company near me, construction company near me, ram gopal constructions, construction company, constructions all, house construction in faridabad, construction contractor in faridabad, interior designer in faridabad, home renovation services, marble contractor, tile contractor, property consultant in faridabad, construction services delhi ncr, building contractor near me, turnkey house construction india";

export function SEO({
  title,
  description = "Ram Gopal Constructions is rated the best construction company in Faridabad & Delhi NCR. We offer premier house construction, commercial building, renovation, interior design, marble & tile installation, and property consultation across India.",
  path = "/",
  image = "/about-building-site.png",
  keywords = DEFAULT_KEYWORDS
}) {
  useEffect(() => {
    const fullUrl = `${DOMAIN}${path.startsWith('/') ? path : `/${path}`}`;
    const fullImageUrl = image.startsWith('http') ? image : `${DOMAIN}${image.startsWith('/') ? image : `/${image}`}`;

    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Helper function to update link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    if (description) updateMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords) updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. Canonical Link
    updateLinkTag('canonical', fullUrl);

    // 4. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title || 'Ram Gopal Constructions | Best Construction Company');
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImageUrl);

    // 5. Twitter Tags
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title || 'Ram Gopal Constructions | Best Construction Company');
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', fullUrl);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImageUrl);

  }, [title, description, path, image, keywords]);

  return null;
}
