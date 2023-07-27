
    var x=0
        function increase(){
            
            x++
            document.getElementById("demo").innerHTML = x;
        }

        function decrease(){
            
            x--
            document.getElementById("demo").innerHTML = x;
        }

        function reset(){
            x=0
            document.getElementById("demo").innerHTML = x;
        }