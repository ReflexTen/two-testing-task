<script lang="js">

let fromCurrency = 'RUB'
let toCurrency = 'USD'
let rates

  fetch('https://open.er-api.com/v6/latest/RUB')
      .then(res => res.json())
      .then(data => {
        const ratesWithRUB = data.rates
        rates = ratesWithRUB
      })
      .catch(err => {
        alert(err)
      })

let fromValue = 0
let toValue = 0

    const fromChangeValue = value => {
    const price = value / rates[fromCurrency]
    const result = price * rates[toCurrency]
    fromValue = value
    toValue =result
  }

  const toChangeValue = value => {
    const price = value / rates[toCurrency]
    const result = price * rates[fromCurrency]
     fromValue = result
     toValue =value
  }

 const fromCurrentChange = (name) => {
  fromCurrency = name
   console.log(fromCurrency);
}
 const toCurrentChange = (name) => {
  toCurrency = name
   console.log(toCurrency);
}
</script>

<main>
  <h1>Конвертор валют</h1>
      <div class="container">
        <div class="block fromCurrency">
          <button class= { fromCurrency === 'RUB' ? 'active' : ''} on:click={()=> {fromCurrentChange('RUB')}}>RUB</button>
          <button class={ fromCurrency === 'USD' ? 'active' : ''} on:click={()=> {fromCurrentChange('USD')}}>USD</button>
          <button class={ fromCurrency === 'EUR' ? 'active' : ''} on:click={()=> {fromCurrentChange('EUR')}}>EUR</button>
          <label>
	         <input type="number" bind:value={fromValue} on:input={()=> {fromChangeValue(fromValue)}}/>
          </label>
        </div>
      
        <div class="block toCurrency">
          <button class= { toCurrency === 'RUB' ? 'active' : ''} on:click={()=> {toCurrentChange('RUB')}}>RUB</button>
          <button class={ toCurrency === 'USD' ? 'active' : ''} on:click={()=> {toCurrentChange('USD')}}>USD</button>
          <button class={ toCurrency === 'EUR' ? 'active' : ''} on:click={()=> {toCurrentChange('EUR')}}>EUR</button>
          <label>
	         <input type="number" bind:value={toValue} min="0" on:input={()=> {toChangeValue(toValue)}}/>
          </label>
        </div>
      </div>
</main>


