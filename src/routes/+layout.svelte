<script lang="ts">
	import NavBar from '$lib/components/nav-bar'

	import '$lib/styles/app.css'
	import '$lib/styles/tailwind.css'

	let { children } = $props()
</script>

<NavBar />
{@render children()}
