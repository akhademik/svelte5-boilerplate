<script lang="ts">
	import { icons, type IconName } from '$lib/components/common/constants'

	type Icon = {
		box_width: number
		box_height?: number
		svg: string
	}

	type Props = {
		name: IconName
		class?: string
	}

	let { name, class: _class }: Props = $props()

	const icon: Icon = $state(icons[name])
	const width = icon.box_width
	const height = icon.box_height || width
</script>

<svg
	class={_class || 'h-8 w-8'}
	viewBox={`0 0 ${width} ${height}`}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html icon.svg}
</svg>
