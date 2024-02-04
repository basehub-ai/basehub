import { BlogBase } from "./page";

export const HeroSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
  raw: BlogBase;
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};
