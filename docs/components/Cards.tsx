import { FC, PropsWithChildren } from "react";
import { type LucideIcon } from "lucide-react";

const CardGroup: FC<PropsWithChildren<{ cols: number }>> = ({
  cols,
  children,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-6`}
    >
      {children}
    </div>
  );
};

type CardProps = {
  variant?: "large" | "small";
  title: string;
  Icon?: LucideIcon;
  href: string;
  cta?: JSX.Element;
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  variant = "small",
  title,
  Icon,
  href,
  cta: CTA,
  children,
}) => {
  return (
    <a href={href}>
      <div
        className={`relative flex flex-col items-start text-left mt-6  shadow-md bg-clip-border rounded-xl ${
          variant === "small" ? "max-w-96" : "w-96"
        }  bg-[#323035] hover:bg-[#2e2c31]`}
      >
        <div className="p-6">
          {Icon !== undefined && Icon !== null ? (
            <Icon className="w-8 h-8 mb-4" />
          ) : null}
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {children}
          </p>
        </div>
        {CTA}
      </div>
    </a>
  );
};

export { CardGroup, Card, type CardProps };
