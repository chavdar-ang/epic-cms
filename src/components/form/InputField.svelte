<script>
  import { inputs } from "../../stores";
  // import { createEventDispatcher } from 'svelte';

  // const dispatch = createEventDispatcher();

  // // function test() {
	// // 	dispatch('focused');
	// // }

  export let key, field;
</script>

<div class="form-control">
  <label for={key}>{field.name}</label>
  <input
    type="text"
    name={key}
    placeholder={'test' ?? ''}
    bind:value={$inputs[key]}
    on:focus />
</div>
