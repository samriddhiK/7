Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width: 3500,
    height: 3000,
    image_format: 'png',
    png_quality: 90,
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version;', ml5.version);
classifier = ml5.imageclassifier('https://storage.googleapis.com/tm-model/v_sl95BzE/model.json', modelLoaded);

function modelLoaded() {
    console.log('model Loaded!');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
