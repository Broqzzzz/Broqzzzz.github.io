var table, salesChart;

$(document).ready(()=>{
    
    $("#table_Sales").DataTable();
    $("#logout").click(logout);
    $("#home").click(homePage);
    $("#sales").click(showSales);
    $("#charts").click(showCharts);
    
    
    function logout(){
        //This function will log out of the page and go back to log in screen
        alert("You have successfully Logged out");
        window.location = "index.html";
    }
                
    //BY DEFAULT WHEN LOGGED IN homePage will show
    function homePage(){
        //This function will hide the sales and show homepage
        $(".contain_Sales").hide();
        $(".contain_Charts").hide();
        $(".contain_Home").show();
    }
                
    function showSales(){
        //This function will hide the home page and show the div of sales
        $(".contain_Home").hide();
        $(".contain_Charts").hide();
        $(".contain_Sales").show();
    }
    
    function showCharts(){
        $(".contain_Home").hide();
        $(".contain_Sales").hide();
        $(".contain_Charts").show();
        
    }
                            
    function readJSON(){
        $.getJSON("krustykrab_array.json", addToTable);
        
        table = $("#table_Sales").DataTable();
        
    }
                
    function addToTable(data){
        let sales = data.sales;
        
        var arr = $.map(sales, function(e){
            return e;
        })
                    
        for(let i = 0; i<arr.length; i++){
            let datetime;
            let burger;
            let species;
                        
            datetime = arr[i].datetime;
            burger = arr[i].burger;
            species = arr[i].species;
                        
            table.row.add([datetime, burger , species]).draw(true);
        }
    }
    
    function addCharts(data){
        
    }
    
    Highcharts.chart('burger_Sales', {
        chart: {
            type: 'column'
        },
        
        title: {
            text: 'Burger Sales'
        },
        
        subtitle: {
            text: 'Source: KrustyKrew.com'
        },
        
        xAxis: {
            categories: ["Sales"],
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Burgers Sold'
            }
        },
        
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:f} sold </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        series: [{
            name: 'Krabby Pattie',
            data: [6174]

        }, {
            name: 'Krusty Combo',
            data: [2304]
        },{
            name: 'Krusty Deluxe',
            data: [1522]
        }]
    });
    
    readJSON();
    homePage();
})