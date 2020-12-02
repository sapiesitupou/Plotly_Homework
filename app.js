// 1. Use the D3 library to read in samples.json.
function getData(id) {
  
  d3.json("samples.json").then(function(data) {
      console.log(data)
      
      // filter samples by id 
      var samples = data.samples.filter(sampleid => sampleid.id.toString() === id)[0];
      
      console.log(samples);