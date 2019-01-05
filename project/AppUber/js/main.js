/**
 * Người tạo : Lạc Vĩnh Phát
 * Ngày tạo : 15-05-2018
 * Nội dung : Dự án tính tiền cước Uber
 */

/**
 
/* Bảng giá Uber */
var MUC_GIA_1_UBERX = 8000;
var MUC_GIA_2_UBERX = 12000;
var MUC_GIA_3_UBERX = 10000;
var GIA_CHO_UBERX = 2000;

var MUC_GIA_1_UBERSUV = 9000;
var MUC_GIA_2_UBERSUV = 14000;
var MUC_GIA_3_UBERSUV = 12000;
var GIA_CHO_UBERSUV = 3000;

var MUC_GIA_1_UBERBLACK = 10000;
var MUC_GIA_2_UBERBLACK = 16000;
var MUC_GIA_3_UBERBLACK = 14000;
var GIA_CHO_UBERBLACK = 4000;

/**
 * Hàm tính tổng tiền cước UBER
 */
function TinhTien() {
    //Lấy giá trị đầu vào từ from người dùng nhập vào
    var soKM = document.getElementById('txtSoKM').value;
    var tgCho = document.getElementById('txtTGCho').value;
    soKM = parseFloat(soKM);
    tgCho = parseFloat(tgCho);
    var loaixeUber = KiemTraLoaiXe();
    //Biến tổng tiền chứa giá trị tổng tiền cước phí
    var tongTien = 0;

    //Tính tiền cước phí theo loại xe người dùng chọn
    switch (loaixeUber) {
        case "uberX":
            tongTien = ThanhTien(soKM, tgCho, MUC_GIA_1_UBERX, MUC_GIA_2_UBERX, MUC_GIA_3_UBERX, GIA_CHO_UBERX);
            break;
        case "uberSUV":
            tongTien = ThanhTien(soKM, tgCho, MUC_GIA_1_UBERSUV, MUC_GIA_2_UBERSUV, MUC_GIA_3_UBERSUV, GIA_CHO_UBERSUV);
            break;
        case "uberBlack":
            tongTien = ThanhTien(soKM, tgCho, MUC_GIA_1_UBERBLACK, MUC_GIA_2_UBERBLACK, MUC_GIA_3_UBERBLACK, GIA_CHO_UBERBLACK);
            break;
    }
    console.log(tongTien);
    //Hiện thị kết quả tổng tiền ra giao diện
    var divThanhTien = document.getElementById('divThanhTien');
    /*
        divThanhTien.style.display="block";
        divThanhTien.style.backgroundColor="pink";
        divThanhTien.style.color="navy";
    */
    //Thêm một cái class vào divThanhTien để nó apply css của class này
    divThanhTien.classList.add('dongia--config');

    var spanThanhTien = document.getElementById('xuatTien');
    spanThanhTien.innerHTML = tongTien + " ";
}

/*Phương thức tính tổng tiền */
function ThanhTien(sokm, tgcho, muc_gia_1, muc_gia_2, muc_gia_3, gia_tgCho) {
    if (sokm <= 1) {
        return muc_gia_1 + tgcho * gia_tgCho;
    }
    else if (sokm > 1 && sokm <= 20) {
        return muc_gia_1 + (sokm - 1) * muc_gia_2 + tgcho * gia_tgCho;
    } else if (sokm > 20) {
        return muc_gia_1 + 19 * muc_gia_2 + (sokm - 20) * muc_gia_3 + tgcho * gia_tgCho;
    }
}

/*Phương thức kiểm tra loại xe đã đi */
function KiemTraLoaiXe() {
    var uberX = document.getElementById('uberX');
    var uberSUV = document.getElementById('uberSUV');
    var uberBlack = document.getElementById('uberBlack');
    //Kiểm tra loại xe người dùng lựa chọn
    if (uberX.checked == true) {
        return "uberX";
    }
    else if (uberSUV.checked == true) {
        return "uberSUV";
    }
    else if (uberBlack.checked == true) {
        return "uberBlack";
    }
}


/**
 * Ngày Tạo : 18/08/2018
 * Nội dung : Hàm tính tiền từng chặn và in ra hóa đơn chi tiết cho người dùng
 */
function InHoaDon() {
    var tbody = document.getElementById('tbBody');
    tbody.innerHTML='';

    var loaiXe = KiemTraLoaiXe();
    //Tính số tiền và in ra bảng của từng loại xe
    switch (loaiXe) {
        case "uberX":
            TienTungChang(MUC_GIA_1_UBERX, MUC_GIA_2_UBERX, MUC_GIA_3_UBERX,GIA_CHO_UBERX);
            break;
        case "uberSUV":
            TienTungChang(MUC_GIA_1_UBERSUV, MUC_GIA_2_UBERSUV, MUC_GIA_3_UBERSUV,GIA_CHO_UBERSUV);
            break;
        case "uberBlack":
            TienTungChang(MUC_GIA_1_UBERBLACK, MUC_GIA_2_UBERBLACK, MUC_GIA_3_UBERBLACK,GIA_CHO_UBERBLACK);
            break;
    }
}

//Hàm tạo ra 1 dòng
function TaoDong(chiTiet, suDung, donGia, thanhTien) {
    var tBody = document.getElementById('tbBody');

    var row = document.createElement('tr');
    var tdChiTiet = document.createElement('td');
    var tdSuDung = document.createElement('td');
    var tdDonGia = document.createElement('td');
    var tdThanhTien = document.createElement('td');

    tdChiTiet.innerHTML = chiTiet;
    tdSuDung.innerHTML = suDung;
    tdDonGia.innerHTML = donGia;
    tdThanhTien.innerHTML = thanhTien;

    row.appendChild(tdChiTiet);
    row.appendChild(tdSuDung);
    row.appendChild(tdDonGia);
    row.appendChild(tdThanhTien);

    tBody.appendChild(row);
}

function TienTungChang(muc_gia_1, muc_gia_2, muc_gia_3,muc_gia_tgCho) {
    //Lấy số km và thời gian chờ và loại xe từ form người dùng nhập
    var soKM = document.getElementById('txtSoKM').value;
    var tgCho = document.getElementById('txtTGCho').value;
    soKM = parseFloat(soKM);
    tgCho = parseFloat(tgCho);
    var TongTien = document.getElementById('tongtien');
    //Tạo biến chứa giá trị là tiền của từng chặng
    var tienChang1 = 0;
    var tienChang2 = 0;
    var tienChang3 = 0;

    if (soKM <= 1) {
        tienChang1 = muc_gia_1;
        TaoDong('km Đầu Tiên', 1, muc_gia_1, tienChang1);
    }
    else if (soKM > 1 && soKM <= 20) {
        tienChang1 = muc_gia_1;
        tienChang2 = (soKM - 1) * muc_gia_2;

        TaoDong('km Đầu Tiên', 1, muc_gia_1, tienChang1);
        TaoDong('Từ 1km -> 20km', (soKM - 1), muc_gia_2, tienChang2);
    } else if (soKM > 20) {
        tienChang1 = muc_gia_1;
        tienChang2 = 19 * muc_gia_2;
        tienChang3 = (soKM - 20) * muc_gia_3;

        TaoDong('km Đầu Tiên', 1, muc_gia_1, tienChang1);
        TaoDong('Từ 1km -> 20km', 19, muc_gia_2, tienChang2);
        TaoDong('Lớn hơn 20KM', soKM - 20, muc_gia_3, tienChang3);
    }
    //Tính tiền chờ uber và tạo dòng thời gian chờ
    var tienCho = tgCho * muc_gia_tgCho;
    TaoDong('Thời gian chờ ', tgCho, muc_gia_tgCho, tienCho);

    var tongTien = tienChang1 + tienChang2 + tienChang3 + tienCho;
    TongTien.innerHTML = tongTien;
    
}
