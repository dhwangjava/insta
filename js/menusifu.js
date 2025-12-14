var body = JSON.stringify('{   "sessionKey": "b420g7c4235mehk0bqvg2i1ifc",   "sessionKeyRemainingActiveTime": 86399997,   "secretKey": "363aa6df-f071-4dd5-85eb-37391f1b8335",   "result": {     "successful": true   } }')
let headers = $response.headers;
headers['Set-Cookie'] = 'licenseAuthKey1=b420g7c4235mehk0bqvg2i1ifc; Domain=192.168.1.208; Path=/kpos';
$done({ headers, body })
