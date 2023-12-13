import type { FC, ReactNode } from "react";

export interface IButton {
  children?: ReactNode;
  variant?: "default" | "outline" | "ghost";
  onClick?: () => any;
  onSubmit?: () => any;
}

export const Button: FC<IButton> = ({
  children,
  variant,
  onClick,
  onSubmit,
}) => {
  return (
    <>
      {variant === "default" && (
        <button className="button" onClick={onClick} onSubmit={onSubmit}>
          {children}
        </button>
      )}
      {!variant && (
        <button className="button" onClick={onClick} onSubmit={onSubmit}>
          {children}
        </button>
      )}

      {variant === "outline" && (
        <button
          className="button outline"
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {children}
        </button>
      )}
      {variant === "ghost" && (
        <button className="button ghost" onClick={onClick} onSubmit={onSubmit}>
          {children}
        </button>
      )}
    </>
  );
};
