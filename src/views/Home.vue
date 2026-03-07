<template>
	<div class="max-w-4xl mx-auto">
		<div>
			<ul class="flex border-b">
				<li class="-mb-px mr-1">
					<a
						class="inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold cursor-pointer"
						:class="activeTab === 'binaryToDecimal' ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'"
						@click="switchTab('binaryToDecimal')"
						>Binary to Decimal</a
					>
				</li>
				<li class="-mb-px mr-1">
					<a
						class="inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold cursor-pointer"
						:class="activeTab === 'decimalToBinary' ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'"
						@click="switchTab('decimalToBinary')"
						>Decimal to Binary</a
					>
				</li>
			</ul>
			<div class="p-8 bg-white shadow-md rounded-b-md">
				<div v-show="activeTab === 'binaryToDecimal'">
					<div class="flex flex-col md:flex-row md:items-start w-full">
						<div class="w-full relative">
							<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
								<input
									class="block w-full px-3 pt-4 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
									type="text"
									placeholder=" "
									v-model="binary"
									@input="clearError"
								/>
								<label
									class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-2.5 -z-1 origin-0"
								>
									Insert a binary number (0 or 1)
								</label>
							</fieldset>
							<p v-if="error" class="text-red-500 text-sm mt-1 absolute">{{ error }}</p>
						</div>
						<button
							class="mt-4 md:mt-0 md:ml-2 px-4 py-3 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 transition"
							@click="handleConvertToDecimal"
						>
							Convert
						</button>
					</div>
					<div class="mt-8">
						<p class="mb-2 text-gray-600">The decimal value is:</p>
						<input
							class="font-bold w-full outline-none text-2xl text-gray-800 bg-gray-50 p-2 rounded"
							type="text"
							v-model="decimalResult"
							readonly
						/>
					</div>
				</div>
				<div v-show="activeTab === 'decimalToBinary'">
					<div class="flex flex-col md:flex-row md:items-start w-full">
						<div class="w-full relative">
							<fieldset class="relative z-0 w-full bg-white border border-gray-300 rounded-md">
								<input
									class="block w-full px-3 pt-4 pb-2 mt-0 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black"
									type="text"
									placeholder=" "
									v-model="decimal"
									@input="clearError"
								/>
								<label
									class="absolute top-0 pl-4 text-lg text-gray-500 duration-300 pt-2.5 -z-1 origin-0"
								>
									Insert a decimal number
								</label>
							</fieldset>
							<p v-if="error" class="text-red-500 text-sm mt-1 absolute">{{ error }}</p>
						</div>

						<button
							class="mt-4 md:mt-0 md:ml-2 px-4 py-3 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 transition"
							@click="handleConvertToBinary"
						>
							Convert
						</button>
					</div>
					<div class="mt-8">
						<p class="mb-2 text-gray-600">The binary value is:</p>
						<input
							class="font-bold w-full outline-none text-2xl text-gray-800 bg-gray-50 p-2 rounded"
							type="text"
							v-model="binaryResult"
							readonly
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-8 p-6 bg-white rounded shadow">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Binary and Decimal Number Systems</h1>
			<p class="mb-4 text-gray-600 leading-relaxed">
				Binary and decimal are two different ways of representing numbers. The decimal system uses ten digits
				(0-9) to represent numbers, while the binary system uses only two digits (0 and 1).
			</p>
			<p class="mb-4 text-gray-600 leading-relaxed">
				In decimal, each digit represents a power of ten. For example, the number 123 is composed of 1 times 10
				to the power of 2 (100), plus 2 times 10 to the power of 1 (10), plus 3 times 10 to the power of 0 (1).
			</p>
			<p class="mb-4 text-gray-600 leading-relaxed">
				In binary, each digit represents a power of two. For example, the binary number 1011 is equal to 1 times
				2 to the power of 3 (8), plus 0 times 2 to the power of 2 (0), plus 1 times 2 to the power of 1 (2),
				plus 1 times 2 to the power of 0 (1), which results in the decimal number 11.
			</p>
			<h2 class="text-xl font-bold my-4 text-gray-800">Converting Binary to Decimal</h2>
			<p class="mb-2 text-gray-600 leading-relaxed">
				To convert a binary number to decimal, we use a formula that involves multiplying each binary digit by
				the corresponding power of two, and then adding up the results. The formula is:
			</p>
			<p class="italic mb-4 p-2 bg-gray-100 rounded text-center font-mono">
				n = a<sub>n</sub> * 2<sup>0</sup> + a<sub>n-1</sub> * 2<sup>1</sup> + ... + a<sub>1</sub> *
				2<sup>n-1</sup> + a<sub>0</sub> * 2<sup>n</sup>
			</p>
			<p class="text-gray-600 leading-relaxed">
				Here, n is the number of digits in the binary number, a<sub>i</sub> is the i-th digit of the binary
				number (starting from the last digit), and ^ represents the power operation.
			</p>
		</div>
	</div>
</template>

<script>
	import { binaryToDecimal, decimalToBinary } from '@/utils/converter';

	export default {
		data() {
			return {
				activeTab: 'binaryToDecimal',
				binary: '',
				decimal: '',
				binaryResult: '',
				decimalResult: '',
				error: '',
			};
		},
		methods: {
			switchTab(tab) {
				this.activeTab = tab;
				this.clearError();
				this.binary = '';
				this.decimal = '';
				this.binaryResult = '';
				this.decimalResult = '';
			},
			clearError() {
				this.error = '';
			},
			handleConvertToDecimal() {
				try {
					this.decimalResult = binaryToDecimal(this.binary);
					this.error = '';
				} catch (e) {
					this.error = e.message;
					this.decimalResult = '';
				}
			},
			handleConvertToBinary() {
				try {
					this.binaryResult = decimalToBinary(this.decimal);
					this.error = '';
				} catch (e) {
					this.error = e.message;
					this.binaryResult = '';
				}
			},
		},
	};
</script>
<style scoped>
	.-z-1 {
		z-index: 1;
	}

	.origin-0 {
		transform-origin: 0%;
	}

	input:focus ~ label,
	input:not(:placeholder-shown) ~ label {
		transform: scale(0.75) translateY(-2.5rem);
		background-color: white;
		padding: 0 0.5rem;
	}

	input:focus ~ fieldset {
		border-color: #3b82f6;
	}
</style>
