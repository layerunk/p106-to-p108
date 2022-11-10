function check(){
    navigator.mediaDevices.getUserMedia({audio: true});
    link = ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/Z-R9vbCHd/model.json" , consol );
}

function consol(){
    console.log("CHECK1");
    link.classify(result);
}

function result(error, LAResult){
    if(error){
        console.log(error);
    }
    else{
        console.log(LAResult);

        imege = document.getElementById("Animal");

        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("noise").innerHTML = LAResult[0].label;
        document.getElementById("con").innerHTML = (LAResult[0].confidence * 100).toFixed(1) + "%";

        document.getElementById("noise").style.color = "rgb( " + red + " , " + green + " , " + blue + ")";
        document.getElementById("con").style.color = "rgb( " + red + " , " + green + " , " + blue + ")";

        if(LAResult[0].label == "BARKING" ){
            imege.src = "Dog.jpg";
        }
        else if(LAResult[0].label == "CAWING"){
            imege.src = "crow.jpg";
        }
        else if(LAResult[0].label == "MEOW"){
            imege.src = "cat.jpg";
        }
        else if(LAResult[0].label == "MOOING"){
            imege.src = "cow.jpg";
        }
        else{
            imege.src = "blor.jpg";
        }

    }
}