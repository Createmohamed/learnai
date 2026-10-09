import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Image
      src="/learnailogo.png"
      alt="LearnAI logo"
      className={className}
      width={360}
      height={360}
      priority
      draggable={false}
    />
  );
}
