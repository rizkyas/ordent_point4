
fetch("https://63b8def06f4d5660c6e103d3.mockapi.io/api/v1/products")

.then(res => {
	return res.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){

		out += `
			<tr>
				<td>${product.id}</td>
				<td>${product.storageId}</td>
				<td>${product.code}</td>
				<td>${product.productId}</td>
				<td>${product.productName}</td>
				<td>${product.productCode}</td>
				<td>${product.quantity}</td>
				<td>${product.createdTime}</td>
			</tr>
		`;	
		var total = [];
		products.forEach(function (product) {
			total.push(product.quantity);
			
		});
		const array = total;
		let sum = 0;
	
		for (let i = 0; i < array.length; i++) {
			sum += array[i];
		}
		console.log(sum);
		document.getElementById("totalQuantity").innerHTML = sum;
	
	}
	
	
	placeholder.innerHTML = out;

});