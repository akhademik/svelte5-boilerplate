<script lang="ts">
	import '$lib/styles/app.css'
	import '$lib/styles/tailwind.css'

	let { children } = $props()
</script>

<h1>Start of children</h1>
{@render children()}
<h1>End of children</h1>
