/* 
Ngày tạo 18/08/2018 
Người tạo : Lạc Vĩnh Phát
Nội dung : xử lý thao tác dropdown trong menu
*/

var count = "";
//Xử lý menu con hiện ra trong navVehicles
function clickOpen() {
    var navVehicles = document.getElementById('navVehicles');
    var childVehicles = document.getElementById('vehicles');
    var vehiclesCars = document.getElementById('vehicles-Cars');
    var Cars = document.getElementById('Cars');

    if (count == "") {
        navVehicles.classList.add('click-border');
        childVehicles.classList.add('vehicles-child');
        vehiclesCars.classList.add('activeNav');
        Cars.classList.add('activeProduct');
        count = navVehicles;
    }
    else if (count == navVehicles) {
        navVehicles.classList.remove('click-border');
        childVehicles.classList.remove('vehicles-child');
        vehiclesCars.classList.remove('activeNav');
        Cars.classList.remove('activeProduct');
        count = "";
    }
}

//Hàm xử lý hiện thị sản phẩm của từng menu con
function LayID(clicked_id) {
    //Lấy ID của từng item menu con
    var vehiclesCars = document.getElementById('vehicles-Cars');
    var vehiclesSuv = document.getElementById('vehicles-Suv');
    var vehiclesTrucks = document.getElementById('vehicles-Trucks');
    var vehiclesHybrids = document.getElementById('vehicles-Hybrids');
    var vehiclesCom = document.getElementById('vehicles-Com');
    var vehiclesPer = document.getElementById('vehicles-Per');
    var vehiclesFuture = document.getElementById('vehicles-Future');

    //Lấy id của sản phẩm menu con cần để hiện thị
    var Cars = document.getElementById('Cars');
    var SUVs = document.getElementById('SUVs');
    var Trucks = document.getElementById('Trucks');
    var Hybrids = document.getElementById('Hybrids');
    var Commercial = document.getElementById('Commercial');
    var perFormance = document.getElementById('Performance');
    var Future = document.getElementById('Future');
    console.log(clicked_id);

    switch (clicked_id) {
        case 'vehicles-Cars':
            vehiclesCars.classList.add('activeNav');
            Cars.classList.add('activeProduct');
            removeClass(vehiclesSuv, SUVs, vehiclesTrucks, Trucks, vehiclesHybrids, Hybrids, vehiclesCom, Commercial, vehiclesPer, perFormance, vehiclesFuture, Future);
            break;
        case 'vehicles-Suv':
            vehiclesSuv.classList.add('activeNav');
            SUVs.classList.add('activeProduct');
            removeClass(vehiclesCars, Cars, vehiclesTrucks, Trucks, vehiclesHybrids, Hybrids, vehiclesCom, Commercial, vehiclesPer, perFormance, vehiclesFuture, Future);
            break;
        case 'vehicles-Trucks':
            vehiclesTrucks.classList.add('activeNav');
            Trucks.classList.add('activeProduct');
            removeClass(vehiclesCars, Cars, vehiclesSuv, SUVs, vehiclesHybrids, Hybrids, vehiclesCom, Commercial, vehiclesPer, perFormance, vehiclesFuture, Future);
            break;
        case 'vehicles-Hybrids':
            vehiclesHybrids.classList.add('activeNav');
            Hybrids.classList.add('activeProduct');
            removeClass(vehiclesCars, Cars, vehiclesSuv, SUVs, vehiclesTrucks, Trucks, vehiclesCom, Commercial, vehiclesPer, perFormance, vehiclesFuture, Future);
            break;
        case 'vehicles-Com':
            vehiclesCom.classList.add('activeNav');
            Commercial.classList.add('activeProduct');
            removeClass(vehiclesCars, Cars, vehiclesSuv, SUVs, vehiclesTrucks, Trucks, vehiclesHybrids, Hybrids, vehiclesPer, perFormance, vehiclesFuture, Future);
            break;
        case 'vehicles-Per':
            vehiclesPer.classList.add('activeNav');
            perFormance.classList.add('activeProduct');
            removeClass(vehiclesCars, Cars, vehiclesSuv, SUVs, vehiclesTrucks, Trucks, vehiclesHybrids, Hybrids, vehiclesCom, Commercial, vehiclesFuture, Future);
            break;
        case 'vehicles-Future':
            vehiclesFuture.classList.add('activeNav');
            Future.classList.add('activeProduct');
            removeClass(vehiclesCars, Cars, vehiclesSuv, SUVs, vehiclesTrucks, Trucks, vehiclesHybrids, Hybrids, vehiclesCom, Commercial, vehiclesPer, perFormance);
            break;
    }

}

function removeClass(giatri1, giatri1_1, giatri2, giatri2_1, giatri3, giatri3_1, giatri4, giatri4_1, giatri5, giatri5_1, giatri6, giatri6_1) {
    giatri1.classList.remove('activeNav');
    giatri1_1.classList.remove('activeProduct');
    giatri2.classList.remove('activeNav');
    giatri2_1.classList.remove('activeProduct');
    giatri3.classList.remove('activeNav');
    giatri3_1.classList.remove('activeProduct');
    giatri4.classList.remove('activeNav');
    giatri4_1.classList.remove('activeProduct');
    giatri5.classList.remove('activeNav');
    giatri5_1.classList.remove('activeProduct');
    giatri6.classList.remove('activeNav');
    giatri6_1.classList.remove('activeProduct');
}

//Xử lý nút button disclosures khi được click vào
function clickDisclosures() {
    //Lấy id button và id containerDisclosures về
    var btnDisclosures = document.getElementById('btn-disclosures');
    var conDisclosures = document.getElementById('conDisclosures');
    var iconDisclosures = document.getElementById('icon-disclosures');

    if (count == "") {
        iconDisclosures.classList.add('active-icon-disclosures');
        conDisclosures.classList.add('disclosures-active');
        conDisclosures.classList.add('fadeInDown');
        count = btnDisclosures;
    }

    else if (count == btnDisclosures) {
        iconDisclosures.classList.remove('active-icon-disclosures');
        conDisclosures.classList.remove('disclosures-active');
        count = "";
    }
}

//Hàm xử lý nút return top hiên lên khi scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



