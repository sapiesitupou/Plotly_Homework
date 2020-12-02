// 1. Use the D3 library to read in samples.json.
function getData(id) {
  
  d3.json("samples.json").then(function(data) {
      console.log(data)
      
      // filter samples by id 
      var samples = data.samples.filter(sampleid => sampleid.id.toString() === id)[0];
      
      console.log(samples);

// 2.Creating a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
      var samplevalues = samples.sample_values.slice(0, 10)
        .reverse();

      // top 10 otu ids for plot OTU
      var OTU_top = (samples.otu_ids.slice(0, 10));
      
      // map top 10 and add "OTU" to id for y-axis
      var OTU_id = OTU_top.map(d => "OTU " + d)

      // label top 10 otu for chart
      var labels = samples.otu_labels.slice(0, 10);

      // create trace1 for bar chart
      var trace1 = {
          x: samplevalues,
          y: OTU_id,
          text: labels,
          marker: {
            color: 'blue'},
          type:"bar",
          orientation: "h",
      };