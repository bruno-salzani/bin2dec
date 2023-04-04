<template>
	<div class="max-w-4xl mx-auto">
		<div>
			<ul class="flex border-b">
				<li class="-mb-px mr-1">
					<a
						class="inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
						:class="{ 'bg-white text-black': activeTab === 'binaryToDecimal' }"
						href="#"
						@click="activeTab = 'binaryToDecimal'"
						>Binary to Decimal</a
					>
				</li>
				<li class="-mb-px mr-1">
					<a
						class="inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
						:class="{ 'bg-white text-black': activeTab === 'decimalToBinary' }"
						href="#"
						@click="activeTab = 'decimalToBinary'"
						>Decimal to Binary</a
					>
				</li>
			</ul>
			<div class="p-8 bg-white shadow-md rounded-md">
				<div v-show="activeTab === 'binaryToDecimal'">
					<div class="flex mr-4 w-full" v-show="activeTab === 'binaryToDecimal'">
						<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
							<input
								class="block w-full px-3 pt-4 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
								type="text"
								placeholder=" "
								v-model="binary"
							/>
							<label class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-2.5 -z-1 origin-0">
								Insert a binary number
							</label>
						</fieldset>
						<button
							class="px-4 ml-2 text-white bg-blue-500 rounded-md focus:outline-none"
							@click="convertToDecimal"
						>
							Convert
						</button>
					</div>
					<div class="mt-4">
						<p class="mb-2">The decimal value is:</p>

						<input class="font-bold w-full outline-none" type="text" v-model="decimal" readonly />
					</div>
				</div>
				<div v-show="activeTab === 'decimalToBinary'">
					<div class="flex" v-show="activeTab === 'decimalToBinary'">
						<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
							<input
								class="block w-full px-3 pt-4 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
								type="text"
								placeholder=" "
								v-model="decimal"
							/>
							<label class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-2.5 -z-1 origin-0">
								Insert a decimal number
							</label>
						</fieldset>

						<button
							class="px-4 ml-2 text-white bg-blue-500 rounded-md focus:outline-none"
							@click="convertToBinary"
						>
							Convert
						</button>
					</div>
					<div class="mt-4">
						<p class="mb-2">The binary value is:</p>

						<input class="font-bold outline-none w-full" type="text" v-model="binary" readonly />
					</div>
				</div>
			</div>
		</div>
		<div class="mt-8">
			<h1 class="text-3xl font-bold mb-4">Binary and Decimal Number Systems</h1>
			<p class="mb-4">
				Binary and decimal are two different ways of representing numbers. The decimal system uses ten digits
				(0-9) to represent numbers, while the binary system uses only two digits (0 and 1).
			</p>
			<p>
				In decimal, each digit represents a power of ten. For example, the number 123 is composed of 1 times 10
				to the power of 2 (100), plus 2 times 10 to the power of 1 (10), plus 3 times 10 to the power of 0 (1).
			</p>
			<p>
				In binary, each digit represents a power of two. For example, the binary number 1011 is equal to 1 times
				2 to the power of 3 (8), plus 0 times 2 to the power of 2 (0), plus 1 times 2 to the power of 1 (2),
				plus 1 times 2 to the power of 0 (1), which results in the decimal number 11.
			</p>
			<h2 class="text-xl font-bold my-4">Converting Binary to Decimal</h2>
			<p>
				To convert a binary number to decimal, we use a formula that involves multiplying each binary digit by
				the corresponding power of two, and then adding up the results. The formula is:
			</p>
			<p class="italic mb-4">n = an * 2^0 + an-1 * 2^1 + an-2 * 2^2 + ... + a1 * 2^(n-1) + a0 * 2^n</p>
			<p>
				Here, n is the number of digits in the binary number, ai is the i-th digit of the binary number
				(starting from the last digit), and ^ represents the power operation.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'binaryToDecimal',
				binary: '',
				decimal: '',
			};
		},
		methods: {
			convertToDecimal() {
				const binary = this.binary;
				const decimal = parseInt(binary, 2);
				this.decimal = isNaN(decimal) ? '' : decimal;
			},
			convertToBinary() {
				const decimal = this.decimal;
				const binary = (decimal >>> 0).toString(2);
				this.binary = isNaN(binary) ? '' : binary;
			},
		},
	};
</script>
<style>
	.-z-1 {
		z-index: -1;
	}

	.origin-0 {
		transform-origin: 0%;
	}

	input:focus ~ label,
	input:not(:placeholder-shown) ~ label,
	textarea:focus ~ label,
	textarea:not(:placeholder-shown) ~ label,
	select:focus ~ label,
	select:not([value='']):valid ~ label {
		/* @apply transform; scale-75; -translate-y-6; */
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		--tw-scale-x: 0.75;
		--tw-scale-y: 0.75;
		--tw-translate-y: -0.65rem;
	}

	input:focus ~ fieldset,
	select:focus ~ fieldset {
		border: #0ea5e9;
	}
</style>
