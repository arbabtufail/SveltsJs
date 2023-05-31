<!-- MUIButton.svelte -->
<script lang="ts">
  import { onMount } from "svelte";
  import Button from "@mui/material/Button";

  export let text = "Button";
  export let onClick = () => {};

  // Manually create the type definition for the Button component
  type ButtonProps = {
    variant?: "text" | "outlined" | "contained";
    onClick?: () => void;
  };


</script>

<Button variant="contained">{text}</Button>
