interface HeroProps  {
  headline: string;
  subText?: string;
  highlightedText?: string;
  showCTA: boolean
};

interface BtnProps {
  children:string,
  className?: string,
  href: string
}