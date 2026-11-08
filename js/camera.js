const vidFootage = document.getElementById("camera");

async function loadCamera(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true,
        });
        vidFootage.srcObject = stream;
    }

    catch (error){
        console.error("Could not access camera.", error); 
    }
}

loadCamera();

// see: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia