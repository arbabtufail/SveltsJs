<script lang="ts">
  export let label: string;
  export let id: string;
  export let value: any;
  export let type: string;
  export let className: string;
  export let placeholder: string;
  export let onChange: (event: string) => void;

  function handleInput(event: any) {
    onChange(event);
  }
</script>

<label for={id} class="label-class">{label}</label>

<input
  {id}
  class={className}
  {placeholder}
  {type}
  {value}
  on:input={handleInput}
  {...$$restProps}
/>

<style>
  .label-class {
    font-size: 1em;
  }
  .form-input {
    border: 1px solid #b7efea;
    height: 1.473em;
    padding-top: 15px;
    font-size: 1em;
    padding-left: 15px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 5px;
    margin-top: 10px !important;
    max-width: 450px;

    &::placeholder {
      font-size: 1rem;
      color: #bcbfc1;
    }
    &:focus {
      outline: none;
    }
  }
</style>
