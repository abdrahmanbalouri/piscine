function flat(arr, depth) {
	if (depth == 0) {
		return arr
	}
	let l = []

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const kk = flat(arr[i], depth - 1)

			l.push(...kk)




		} else {


			l.push(arr[i])
		}
	}
	return l
}

console.log(flat([1, 2, 3, 4, [[1, 2, 3]]], 1));
