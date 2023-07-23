// in simple words callback is a funtion which we insert inside an another function 
// to verify things and we can also use it for another cases

// since too many days i am trying to learn this but may be know i am able to learn a bit of it

doing_something("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")

    function doing_something(url) {
        let hoo = document.createElement("script")
        hoo.src = url
        document.body.appendChild(hoo)
        hoo.onload = function(){
            console.log("your scripting is ready to be executed so now you can do your work",url)
            loaded();
        } 
        
        // we also have error cathing method in javascript which is different from try and catch error catching method of javascript

        // hoo.onerror = function () {
        //     console.log("become sussessful in catching error")
        // }
        
        // callback(url);
        // we use callbacks so that we can run another function after the execution of almost all line of code of main function
        //callbakcs will after the execution of the above fucntion 
    }

    function loaded(){
        alert("work is done");
    }

    // function want_know(url) {
    //     alert("fuckers finally your script execute sussessfully so be happy" + url)
    // }
    // in this above function i will insert another function in the of callback which will be asynchronous
    // doing_something("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" , want_know)
    //this below one is too catch errror in the script
    

    //bootstrap script for again and again use
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

    // lets continue further from tommorrow
  
