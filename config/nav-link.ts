interface SiteConfigShape {
  name: string;
  url: string;
  description: string;
  canonicalUrl?: string;
  faviconUrl?: string;
  image?: string; // used by OG & Twitter
  author?: string;
  publisher?: string;
  links: {
    github: string;
  };
  nav: Array<{
    title: string;
    href: string;
    children: Array<{
      subName: string;
      anchorName: string;
    }>;
  }>;
}

const siteConfigBASE: SiteConfigShape = {
  name: "Ninhache.fr",
  url: "https://dev-ninhache.fr/",
  description: "yet another portfolio",
  links: {
    github: "https://github.com/Ninhache/Ninhachedotcomv5",
  },
  nav: [
    {
      title: "Home",
      href: "/",
      children: [
        {
          subName: "Home",
          anchorName: "top",
        },
        {
          subName: "Sub Home",
          anchorName: "sub-home",
        },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      children: [],
    },
  ],
};

interface OG {
  title: string;
  type: string;
  image: string;
  url: string;
  description?: string;
  video?: string;
  locale?: string;
  site_name?: string;
}

interface Twitter {
  card: string;
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
}

interface SiteConfigSEO {
  og: OG;
  twitter: Twitter;
}

interface SiteConfigComplete extends SiteConfigShape, SiteConfigSEO {}

function inferOG(siteConfig: SiteConfigShape): SiteConfigComplete {
  const defaultImage_URI =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQCAYAAAByNR6YAAAeL0lEQVR4Xu3da6vcVBsG4KlWpVZtLWKpoFTFsyLi//8HioiHVotW1CoVsR6q4vnl2S+zyV47M1mZface5povgjt5krnylNyslVk59cYbb/y18iFAgAABAgQIEIgJnBKwYpYKESBAgAABAgQOBAQsjUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCBAgQIECAgIClBwgQIECAAAECYQEBKwyqHAECBAgQIEBAwNIDBAgQIECAAIGwgIAVBlWOAAECBAgQICBg6QECBAgQIECAQFhAwAqDKkeAAAECBAgQELD0AAECBAgQIEAgLCBghUGVI0CAAAECBAgIWHqAAAECBAgQIBAWELDCoMoRIECAAAECBAQsPUCAAAECBAgQCAsIWGFQ5QgQIECAAAECApYeIECAAAECBAiEBQSsMKhyBAgQIECAAAEBSw8QIECAAAECBMICAlYYVDkCPQIPP/zw6p577jnY9LffflvdunWrZ7et29x7772r8+fPH27z1VdfnbjmusCjjz56WOvbb79d/frrr7Ha/8ZCDzzwwOr+++8/OPWffvppdfv27Z2+xrBOqg/qRJbshZ2+qJ0I7KGAgLWHF91X/nsEKqRcuHBhdebMmdVdd9115CT+/PPP1c8//7y6efPm7LD1+OOPHwSruqm2nwpCFYg+++yz2V+6zveRRx45ON/28/vvvx+Eiqq7b2GrnF944YXV6dOnD1jK96OPPur2rf3r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AgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAgJWGFQ5AgQIECBAgICApQcIECBAgAABAmEBASsMqhwBAgQIECBAQMDSAwQIECBAgACBsICAFQZVjgABAgQIECAgYOkBAgQIECBAgEBYQMAKgypHgAABAgQIEBCw9AABAgQIECBAICwgYIVBlSNAgAABAgQICFh6gAABAgQIECAQFhCwwqDKESBAgAABAgQELD1AgAABAgQIEAgLCFhhUOUIECBAgAABAgKWHiBAgAABAgQIhAUErDCocgQIECBAgAABAUsPECBAgAABAgTCAv8DBE3eBGGCvIAAAAAASUVORK5CYII=";
  const seoDefaults: SiteConfigSEO = {
    og: {
      title: siteConfig.name,
      type: "website",
      image: siteConfig.image || defaultImage_URI,
      url: siteConfig.url,
      description: siteConfig.description,
      site_name: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      image: siteConfig.image || defaultImage_URI,
    },
  };

  return {
    ...siteConfig,
    ...seoDefaults,
  };
}

export type SiteConfig = ReturnType<typeof inferOG>;
export const siteConfig = inferOG(siteConfigBASE);
