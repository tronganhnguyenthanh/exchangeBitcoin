function getBitcoinExchangeList(){
  let baseURL  = "https://api.coincap.io/v2"
  let endPoint = "exchanges"
  fetch(`${baseURL}/${endPoint}`)
   .then(function(res){
     return res.json()
   })
   .then(function(exchangeList){
     getBitCoinExchangeItem(exchangeList)
   })
}

getBitcoinExchangeList()

function getBitCoinExchangeItem(exchangeList){
  let list = ""
  exchangeList?.data?.forEach(function(output){
   list += `<details class="m-2 p-2">
     <summary>${output?.name} (${output?.exchangeId})</summary>
     <a href="${output?.exchangeUrl}">${output?.exchangeUrl}</a>
   </details>
   `
  })
  document.querySelector("#exchangeRate").innerHTML = list
}