type Manifest = {
  manifest_version: 2 | 3;
  name: string;
  description: string;
  version: `${number}.${number}.${number}`;
  action: Record<string, string>;
};

export default {
  manifest_version: 3,
  version: "1.0.0",
  description:
    "Check the status of services like GitLab, GitHub, CloudFlare, Apple and more just in one click!",
  name: "Servify",
  action: {
    default_title: "Servify",
    default_popup: "index.html",
  },
} satisfies Manifest;
