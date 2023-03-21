new Vue({
  el: '#app',
  data: {
    currencies: {}
  },
  mounted() {
    axios.get('https://free.currencyconverterapi.com/api/v6/currencies')
      .then(response => { 
        this.currencies = response.data.results;
      });
  }
})