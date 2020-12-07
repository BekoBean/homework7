function gettingJSON(){
    //Display the forecast
    document.getElementById("forecast").style.display= "block";
    // Your code here.

    var location;
    if(document.querySelector("#location").value!=""){
        location= document.getElementById("location").value;
    }
    //Set default location if one isn't provided
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
    let query= "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+ format + "&appid=" +key;
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        console.log(JSON.stringify(json));
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        loc= json.name;
        temp= json["main"].temp;
        console.log(temp);
        icon = (json["weather"][0].icon);
        var weatherDescription= json["weather"][0]["description"];
        var iconLink= "http://openweathermap.org/img/wn/" + icon+ ".png";
        document.querySelector("#tempImg").setAttribute("src", iconLink);
        // add temp to forecast and weather description
        // rn, I only have temperature.
        //ipdate loation
        document.querySelector("#loc").innerHTML= loc;
        document.querySelector("#loc").innerHTML= loc;
        
        // add title and alt text to weather image 
        document.querySelector("#tempImg").alt= weatherDescription;
        document.querySelector("#tempImg").title= "weather image";
        console.log("alt is" + document.querySelector("#tempImg").alt);
        document.querySelector("#temp").innerHTML= (temp + " with " + weatherDescription);
    });
}
