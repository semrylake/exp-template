const absen = async (req, res, next) => {
     var msg = "Anda sudah melakukan absen.";
     var lat1 = -10.221510;
     var long1 = 123.578051;

     var lat2 = req.body.latitude;
     var long2 = req.body.longitude;

     let startingLat = degreesToRadians(lat1)
     let startingLong = degreesToRadians(long1);
     let destinationLat = degreesToRadians(lat2);
     let destinationLong = degreesToRadians(long2);
     // Radius of the Earth in kilometers
     let radius = 6571;
     let distanceInKilometers = Math.acos(Math.sin(startingLat) * Math.sin(destinationLat) +
          Math.cos(startingLat) * Math.cos(destinationLat) *
          Math.cos(startingLong - destinationLong)) * radius;
     var status = "";
     // var zone = 0;
     var jarak = "";
     if (distanceInKilometers > 0.1) {
          status = "di luar zona";
          jarak = "Anda absen " + status + " <br>Anda berjarak " + ((distanceInKilometers.toFixed(2) - 0.1) * 1000) + " meter (" + (distanceInKilometers.toFixed(2) - 0.1) + " km) dari titik zona.";
     } else {
          status = "di dalam zona";
          jarak = "SUDAH DALAM ZONA ABSEN BOS 😒😒😒😒😒😒";
     }
     res.json({ "jarak": jarak, "status": status });
}

// Convert from degrees to radians
function degreesToRadians(degrees) {
     var radians = (degrees * Math.PI) / 180;
     return radians;
}
module.exports = { absen };