var body = $response.body.replaceAll("outOfStock","inStock").replaceAll('%22available%22%3Afalse','%22available%22%3Atrue')
console.log(body)
$done({body});
