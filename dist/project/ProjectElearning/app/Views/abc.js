$().ready(function () {
    // validate signup form on keyup and submit
    var kTraChuoi = new KiemTraForm();
    function kiemTraForm(){
        var validator = $("#formTaoKH");
        validator.validate({
            rules: {
                makhoahoc: {
                    required: true,
                    minlength: 3,
                },
                tenkhoahoc: {
                    required: true,
                    minlength: 5
                },
                hinhanh: {
                    required: true,
                    url: true
                },
                luotxem: {
                    number: true
                },
                MoTa: {
                    required: true,
                    minlength: 20,
                },
                nguoitao: {
                    valueNotEquals: "default",
                },
            },
            messages: {
                makhoahoc: {
                    required: "Vui lòng nhập vào mã khóa học !",
                    minlength: "Mã khóa học phải từ 3 kí tự trở lên !"
                },
                tenkhoahoc: {
                    required: "Vui lòng nhập vào tên khóa học !",
                    minlength: "Tên khóa học phải từ 5 kí tự trở lên !"
                },
                hinhanh: {
                    required: "Vui lòng nhập vào link hình ảnh !",
                    url: "Hình ảnh phải là một đường dẫn !"
                },
                MoTa: {
                    required: "Vui lòng nhập vào mô tả khóa học !",
                    minlength: "Mô tả phải từ 20 kí tự trở lên !"
                },
                nguoitao: {
                    valueNotEquals: "Vui lòng chọn người tạo !",
                },
            }
        });
        return validator.form();
        $.validator.addMethod("valueNotEquals", function (value, element, arg) {
            return arg !== value;
        }, "Value must not equal arg.");
    }
    
});