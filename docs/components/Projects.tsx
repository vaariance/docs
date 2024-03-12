import { Card } from "./Cards";

type ProjectsProps = {
  title: string;
  description: string;
  url: string;
};

const projects: ProjectsProps[] = [
  {
    title: "Variance Dart",
    description:
      "An account abstraction SDK for Flutter, enables developers to build Smart Wallets or dApps easily with default account abstraction.",
    url: "https://pub.dev/packages/variance_dart",
  },
  {
    title: "Web3 Signers",
    description:
      "A flutter plugin that provides a uniform interface for signing EIP-1271 messages using passkeys, secure-enclaves and private keys.",
    url: "https://pub.dev/packages/web3_signers",
  },
  {
    title: "ENS Normalize",
    description:
      "Dart implementation of ENSIP-15 - the ENS Name Normalization Standard. Adapted from namehashlabs python implementation.",
    url: "https://pub.dev/packages/ens_normalize",
  },
];

export default function Projects() {
  return (
    <div className="w-full lg:w-[1280px]">
      <h2 className="text-2xl text-left font-bold">Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}

function Project({ title, description, url }: ProjectsProps) {
  return (
    <Card
      variant="large"
      title={title}
      href={url}
      cta={
        <div className="p-6 pt-0">
          <a href={url} className="inline-block">
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none "
              type="button"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      }
    >
      {description}
    </Card>
  );
}
