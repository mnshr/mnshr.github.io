var parseDate = d3.time.format("%d-%b-%y").parse;

//Create first svg and chart as the page loads
var svg1 = dimple.newSvg("#chart1", "100%", 530);
var grp_loans_by_credit_chart_1 = new dimple.chart(svg1);

// Set the size of plot within svg
grp_loans_by_credit_chart_1.setBounds(60, 35, "70%", 350);

// Set the chart axes and labels
var grp_loans_by_credit_x_chart1 = grp_loans_by_credit_chart_1.addCategoryAxis("x", "Time");
grp_loans_by_credit_x_chart1.title = "Quarterly Timeline";
var grp_loans_by_credit_y_chart1 =grp_loans_by_credit_chart_1.addMeasureAxis("y", "num");
grp_loans_by_credit_y_chart1.title = "Loan Counts";

// Add a series which divides the chart into multiple elements
var series1 = grp_loans_by_credit_chart_1.addSeries("Credit", dimple.plot.line);

// Order the legend and add it
series1.addOrderRule(["NC", "HR", "E", "D", "C", "B", "A", "AA"]);
series1.lineMarkers=true;
grp_loans_by_credit_chart_1.addLegend(60, 10, 500, 20, "right");

//Load data from csv for default chart
d3.csv("grp_loans_by_credit.csv", function(dataset) {
    dataset.forEach(function(d) {
        d.date = parseDate(d.Time);
    });
   grp_loans_by_credit_chart_1.data = dataset;
   grp_loans_by_credit_chart_1.draw();
});    

// Create header and description section for Number of Loans by Ratings
var chart1_div = document.getElementsByClassName('row_chart1')[0];
var html11 = '<div class="html11" id="html11"> \
    <H3>Number of Loans by Rating:</H3> A couple of points can be observed in \
    the chart below. First, over the years the Prosper platform seems to have \
    become more popular. <br> Second observation is that the number of loans given to mid range \
    categories such as B, C and D are higher in volume compared to <br> higher (A and AA) \
    as well as lower range (E, NC or HR) categories.</div>';
chart1_div.insertAdjacentHTML('afterbegin', html11);

//Create second svg and chart as the page loads
var svg2 = dimple.newSvg("#chart2", "100%", 530);
var grp_loans_by_cat_chart_1 = new dimple.chart(svg2);

// Set the size of plot within svg
grp_loans_by_cat_chart_1.setBounds(60, 35, "70%", 350);

// Set the chart axes and labels
var grp_loans_by_cat_x_chart1 = grp_loans_by_cat_chart_1.addCategoryAxis("x", "Time");
grp_loans_by_cat_x_chart1.title = "Quarterly Timeline";
var grp_loans_by_cat_y_chart1 =grp_loans_by_cat_chart_1.addMeasureAxis("y", "num");
grp_loans_by_cat_y_chart1.title = "Loan Counts";

// Add a series which divides the chart into multiple elements
var series2 = grp_loans_by_cat_chart_1.addSeries("Category", dimple.plot.line);
series2.lineMarkers=true;

// Order the legend and add it
series2.addOrderRule(["Not Available", "Personal Loan", "Household Expenses", "Business", "Home Improvement", "Other", "Debt Consolidation"], true);
grp_loans_by_cat_chart_1.addLegend(90, 23, 500, 200, "left")

//Coloring specific lines of interest and leaving Not Available as grey
grp_loans_by_cat_chart_1.assignColor("Debt Consolidation", "red")
grp_loans_by_cat_chart_1.assignColor("Home Improvement", "blue")
grp_loans_by_cat_chart_1.assignColor("Business", "green")
grp_loans_by_cat_chart_1.assignColor("Personal Loan", "orange")
grp_loans_by_cat_chart_1.assignColor("Other", "brown")
grp_loans_by_cat_chart_1.assignColor("Household Expenses", "purple")
grp_loans_by_cat_chart_1.assignColor("Not Available", "grey")

//Load the data from csv for 2nd default chart   
d3.csv("grp_loans_by_cat.csv", function(dataset) {
    dataset.forEach(function(d) {
        d.date = parseDate(d.Time);
    });
   grp_loans_by_cat_chart_1.data = dataset;
   grp_loans_by_cat_chart_1.draw();
});

// Create header and description section for Number of Loans by Loan Type
var chart1_div = document.getElementsByClassName('row_chart2')[0];
var html21 = '<div class="html21" id="html21"> \
    <H3>Number of Loans by Loan Type: </H3> There are a large number of categories\
     in this chart making it seem very busy. Highlighted in color are the top 6 while \
     "Not Available" is greyed out. <br> Looks like before 2007 this data point was not \
     gathered, as seen with "Not Available" curve. After that we se a steady and distinctive rise in "Debt Consolidation" \
     cateogry. <br>Other prominent ones are "Other", "Home Improvement" and "Business".</div>';
chart1_div.insertAdjacentHTML('afterbegin', html21);
    

//Function called when a menu for Average number of loans is clicked
function AverageLoan_Cr() {
      //Remove and recreate the svg and chart
      d3.select('svg').remove();
      var svg1 = dimple.newSvg("#chart1", "100%", 530);
      var grp_loans_by_credit_chart_1 = new dimple.chart(svg1);

      // Set the size of plot within svg
      grp_loans_by_credit_chart_1.setBounds(60, 35, "70%", 350);
      
      // Set the chart axes and labels
      var grp_loans_by_credit_x_chart1 = grp_loans_by_credit_chart_1.addCategoryAxis("x", "Time");
      grp_loans_by_credit_x_chart1.title = "Quarterly Timeline";
      var grp_loans_by_credit_y_chart1 =grp_loans_by_credit_chart_1.addMeasureAxis("y", "num");
      grp_loans_by_credit_y_chart1.title = "Loan Counts";
      
      // Add a series which divides the chart into multiple elements
      var series1 = grp_loans_by_credit_chart_1.addSeries("Credit", dimple.plot.line);
      series1.lineMarkers=true;
      
      // Order the legend and add it
      series1.addOrderRule(["AA", "A", "B", "C", "D", "E", "HR", "NC"], true);
      grp_loans_by_credit_chart_1.addLegend(60, 10, 500, 20, "right"); 

      //Upload data from respective csv
      d3.csv("grp_loans_by_credit.csv", function(dataset) {
                dataset.forEach(function(d) {
                d.date = parseDate(d.Time);
          });
          grp_loans_by_credit_chart_1.data = dataset;
          grp_loans_by_credit_chart_1.draw();
      });    
      // Update header section
      h11 = document.getElementById('html11')
      h11.innerHTML="<H3>Number of Loans by Rating:</H3> A couple of points can be observed in \
    the chart below. First, over the years the Prosper platform seems to have \
    become more popular. <br> Second observation is that the number of loans given to mid range \
    categories such as B, C and D are higher in volume compared to <br> higher (A and AA) \
    as well as lower range (E, NC or HR) categories.";
}
                
//Function called when a menu for Average loan amount is clicked
function AverageAmt_Cr() {
   //Remove and recreate the svg and chart
   d3.select('svg').remove();
   var svg1 = dimple.newSvg("#chart1", "100%", 530);
 	var grp_prin_by_credit_chart_1 = new dimple.chart(svg1);

   // Set the size of plot within svg
	grp_prin_by_credit_chart_1.setBounds(60, 35, "70%", 350);
	
   // Set the chart axes and labels
   var grp_prin_by_credit_x_chart1 = grp_prin_by_credit_chart_1.addCategoryAxis("x", "Time");
	grp_prin_by_credit_x_chart1.title = "Quarterly Timeline";
	var grp_prin_by_credit_y_chart1=grp_prin_by_credit_chart_1.addMeasureAxis("y", "amt");
	grp_prin_by_credit_y_chart1.title= "Loan Original Amount";
	
   // Add a series which divides the chart into multiple elements
   var series1 = grp_prin_by_credit_chart_1.addSeries("Credit", dimple.plot.line);
   series1.lineMarkers=true;

   // Order the legend and add it
   series1.addOrderRule(["AA", "A", "B", "C", "D", "E", "HR", "NC"], true);
   grp_prin_by_credit_chart_1.addLegend(60, 10, 500, 20, "right"); 

   //Upload data from respective csv
   d3.csv("grp_prin_by_credit.csv", function(dataset) {
       dataset.forEach(function(d) {
           d.date = parseDate(d.Time);
       });
       grp_prin_by_credit_chart_1.data=dataset;
    	 grp_prin_by_credit_chart_1.draw();
    
   });
   // Update header section
   h11 = document.getElementById('html11')
   h11.innerHTML="<H3>Average Amounts by Rating:</H3> When it comes to the amount \
   loaned to borrowers, the role of credit rating becomes evident. <br> Better rating \
   certainly helps get a better loan amount given the lower risk higher range \
   category like AA of A offer. <br>Although there are a few exceptions to this observation\
    during initial half of 2009 and in the Oct-Dec 2010 quarter. <br> The chart also \
    shows a general positive trend over the years.";
}
        
//Function called when a menu for Average Debt to Income is clicked
function AverageDTI_Cr() {
    //Remove and recreate the svg and chart
    d3.select('svg').remove();
    var svg1 = dimple.newSvg("#chart1", "100%", 530);
    var chart_1 = new dimple.chart(svg1);

    // Set the size of plot within svg
    chart_1.setBounds(60, 35, "70%", 350);

    // Set the chart axes and labels
    var x_chart1 = chart_1.addCategoryAxis("x", "Time");
    x_chart1.title = "Quarterly Timeline";
    var y_chart1 =chart_1.addMeasureAxis("y", "dti");
    y_chart1 = "Debt to Income Ratio";
    
    // Add a series which divides the chart into multiple elements
    var series1 = chart_1.addSeries("Credit", dimple.plot.line);
    series1.lineMarkers=true;
    
    // Order the legend and add it
    series1.addOrderRule(["AA", "A", "B", "C", "D", "E", "HR", "NC"], true);
    chart_1.addLegend(60, 10, 500, 20, "right"); 

    //Upload data from respective csv
    d3.csv("grp_dti_by_credit.csv", function(dataset) {
        dataset.forEach(function(d) {
            d.date = parseDate(d.Time);
        });
        chart_1.data=dataset;
        chart_1.draw();
    });
       
    // Update header section
    h11 = document.getElementById('html11')
    h11.innerHTML="<H3>Debt to Income by Rating:</H3> This chart shows a sharp \
    rise among all ratings till Apr-Jun 2007 and then a sharp fall. Although \
    the slope of rise and fall is smaller for higher ratings such as AA and A. \
    <br> After that the curves remain relaitvely flat and also tend to disperse\
    with higher ratings having lower Debt to Income than lower ratings. \
    <br> There seem to be outliers causing sharp rise for HR category in first half \
     of 2013.";
}
        
//Function called when menu for Average income is clicked
function AverageIncome_Cr() {
    //Remove and recreate the svg and chart
    d3.select('svg').remove();
    var svg1 = dimple.newSvg("#chart1", "100%", 530);
 	 var chart_1 = new dimple.chart(svg1);

    // Set the size of plot within svg
	 chart_1.setBounds(60, 35, "70%", 350);
    
    // Set the chart axes and labels
    var x = chart_1.addCategoryAxis("x", "Time") 
    x.title = "Quarterly Timeline";
	 var y_chart1 =chart_1.addMeasureAxis("y", "AvgIncome");
	 y_chart1.title = "Average Stated Income";
	 
    // Add a series which divides the chart into multiple elements
    var series1 = chart_1.addSeries("Credit", dimple.plot.line);
    series1.lineMarkers=true;
    
    // Order the legend and add it
    series1.addOrderRule(["AA", "A", "B", "C", "D", "E", "HR", "NC"], true);
    chart_1.addLegend(60, 10, 500, 20, "right"); 

    //Upload data from respective csv
    d3.csv("grp_inc_by_credit.csv", function(dataset) {
        dataset.forEach(function(d) {
            d.date = parseDate(d.Time);
        });
        chart_1.data=dataset;
        chart_1.draw();
    });
    // Update header section
    h11 = document.getElementById('html11')
    h11.innerHTML="<H3>Average Income by Rating:</H3> This chart shows a general \
    trend of fall in stated incomes till around 2009 and then a slow and steady rise.\
    <br> For most of the period the higher ratings state higher earnings barring a couple\
    of exceptions. The income gap seems to be widening although narrowly more recently.";
}