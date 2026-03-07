<template>
	<nav class="fixed top-0 left-0 right-0 z-20 bg-white shadow">
		<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<router-link to="/">
						<div class="flex items-center flex-shrink-0">
							<span class="text-2xl font-bold text-gray-800">Decimal2Bin</span>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'TheHeader',
	};
</script>
