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

	  var data = [trace1];

      // layout bar chart
      var layout = {
          title: "Top 10 OTU",
          yaxis:{
              tickmode:"linear",
          },
          margin: {
              l: 100,
              r: 50,
              t: 50,
              b: 50
          }
      };


      // bar plot
      Plotly.newPlot("bar", data, layout);
    
// 3. Create a bubble chart that displays each sample.
      var trace2 = {
          x: samples.otu_ids,
          y: samples.sample_values,
          mode: "markers",
          marker: {
              size: samples.sample_values,
              color: samples.otu_ids,
          },
          text: samples.otu_labels
      };

      // layout bubble plot
      var layout_b = {
          xaxis:{title: "OTU ID"},
          height: 500,
          width: 1000
      };

      var data1 = [trace2];

      // bubble plot
      Plotly.newPlot("bubble", data1, layout_b); 

    });
}  



















