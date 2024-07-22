export const siteConfig = {
  name: "Beta-Ninhache",
  url: "https://dev.ninhache.fr/",
  ogImage: "",
  description: "yet another portfolio",
  links: {
    github: "https://github.com/Ninhache/Ninhachedotcomv5",
  },
  nav: [
    {
      title: "Home",
      href: "/",
    },
  ],
} as const;

type NonEmptyString<T extends string> = T extends "" ? never : T;

type DeepReadonlyAndStringLeaves<T> = {
  readonly [P in keyof T]: T[P] extends string
    ? NonEmptyString<T[P]>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepReadonlyAndStringLeaves<U>>
    : DeepReadonlyAndStringLeaves<T[P]>;
};

export type SiteConfig = DeepReadonlyAndStringLeaves<typeof siteConfig>;
