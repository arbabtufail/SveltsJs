interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary";
}

import { SvelteComponentTyped } from "svelte";
class TypedButton extends SvelteComponentTyped<ButtonProps> {}

// Usage:
let buttonProps: ButtonProps = { variant: "contained", color: "primary" };
const buttonComponent = new TypedButton({
  target: document.body,
  props: buttonProps,
});
