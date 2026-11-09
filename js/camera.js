
// video footage function here 

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

//picture and retake buttons function here 

const photoButton = document.getElementById("take-photo");
const retakeButton = document.getElementById("retake-photo");
const uploadButton = document.getElementById("upload-photo");
const photoCanvas = document.getElementById("photo-canvas");
const preview = document.getElementById("photo-preview");

photoButton.addEventListener("click", takePicture);
retakeButton.addEventListener("click", retakePicture);
uploadButton.addEventListener("click", uploadPicture);

function takePicture() {
    if (vidFootage.videoWidth === 0) {
        return;
    }
    photoCanvas.width = vidFootage.videoWidth;
    photoCanvas.height = vidFootage.videoHeight;
    const context = photoCanvas.getContext("2d");
    context.drawImage(vidFootage, 0, 0);
    preview.src = photoCanvas.toDataURL("image/png");

    vidFootage.hidden = true;
    preview.hidden = false;

    photoButton.hidden = true;
    retakeButton.hidden = false;
    uploadButton.hidden = false;
}

function retakePicture(){
    vidFootage.hidden = false;
    preview.hidden = true;

    photoButton.hidden = false;
    retakeButton.hidden = true;
    uploadButton.hidden = true;
}


//see: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia