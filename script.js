$("#id").on("input",(e)=>{
    var value =e.target.value
    console.log(value)
    search(value)
})

function search(value) {
    const url = 'https://restcountries.eu/rest/v2/name/' + value
    fetch(url).then(res => res.json()).then(data => {
      console.log(data[0].name)
      $("#name").html("Name: "+data[0].name)
      $("#flag").attr("src",data[0].flag)
      $("#ree").html("Region: "+data[0].region)
      $("#cap").html("Capital: "+data[0].capital)
      $("#pop").html("Population: "+data[0].population)
    })
  }
  