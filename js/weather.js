function gettingJSON(){
    //Display the forecast
    document.getElementById("forecast").style.display= "block";
    // Your code here.

    //Set default location if one isn't provided
    var location;
    if(document.querySelector("#location").value!=""){
        location= document.getElementById("location").value;
    }
    else{
        location= "Ann Arbor"
    }
    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    // before line below just said format
    let format;
    console.log(document.querySelectorAll("input[name=temp]:checked").length);
    if (document.querySelectorAll("input[name=temp]:checked").length == 0){
        format = "imperial";
    } else {
        format = document.querySelectorAll("input[name=temp]:checked")[0].value;
    }
    // Your code here.
    console.log("Format is " + format);

    //set the query  
    // I added key 

    
    let key= "72d19f0757f4f609b6f8e727fdaeb22b"; 
    let query= "api.openweathermap.org/data/2.5/weather?q="+location+"&units="+ format + "&appid=" +key;
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.

    });
}
