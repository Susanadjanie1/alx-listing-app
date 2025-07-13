export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  price?: number;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "default";
  className?: string;
}
