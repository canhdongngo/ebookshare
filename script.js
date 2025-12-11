// Dữ liệu sách
const mockBookData = [{
        bookName: "Quả Đắng - Ann Rule",
        categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"],
        downloadLink: "https://1024terabox.com/s/1hyTMsnTfmtZ4l3nuOAe9Rw",
        buyLink: "https://adpvn.co/s/e8BQP",
        imageLink: "https://i.ibb.co/4CQstWr/qua-dang-ann-rule-nguyen-dang-thuan-dich.jpg"
    },
    {
        bookName: "Đừng Để “Nó” Dụ - Manabu Kaminaga",
        categories: ["Kinh Dị", "Trinh Thám", "Tâm Lý Học", "Y Học"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vbpx9",
        imageLink: "https://i.ibb.co/B2C7796r/dung-de-no-du.jpg"
    },
    {
        bookName: "Sự Thật Chỉ Có Một - Lưu Liễm, Lý Viên Viên",
        categories: ["Kinh Dị", "Trinh Thám", "Tâm Lý Học", "Tiểu Thuyết"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4Oa2J",
        imageLink: "https://i.ibb.co/jZPtyGtw/su-that-chi-co-mot.jpg"
    },
    {
        bookName: "Một Ai Của Ngày Đó - Higashino Keigo",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eGK6X",
        imageLink: "https://i.ibb.co/fYJ5R68n/mot-ai-cua-ngay-do.jpg"
    },
    {
        bookName: "14 Ngày Đẫm Máu - Jeremy Bates",
        categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1RdJMSRpuedywOKztvLFK5g",
        buyLink: "https://adpvn.co/s/eR0MR",
        imageLink: "https://i.ibb.co/jkPfqk48/cover-9.jpg"
    },
    {
        bookName: "Shin – Cậu Bé Bút Chì - Usui Yoshito Full",
        categories: ["Truyện Tranh"],
        downloadLink: "https://1024terabox.com/s/1g7QF8W_vMbzQQLoiNNSoPg",
        buyLink: "https://adpvn.co/s/erJq2",
        imageLink: "https://i.ibb.co/yBRqf5KC/shin-cau-be-but-chi.jpg"
    },
    {
        bookName: "Tù Nhân – Freida McFadden",
        categories: ["Lãng Mạn", "Tiểu Thuyết", "Trinh Thám", "Viễn Tưởng"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4X30A",
        imageLink: "https://i.ibb.co/k2Xgb0RR/tu-nhan.jpg"
    },
    {
        bookName: "Đại Dịch Hủy Diệt (Bộ 2 tập) - Stephen King",
        categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám", "Viễn Tưởng"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4kK9Q",
        imageLink: "https://i.ibb.co/qLPByVzb/dai-dich-huy-diet-bo-2-tap.jpg"
    },
    {
        bookName: "Thảm Án Ma Nơ Canh - Stanislas-Andre Steeman",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eojm0",
        imageLink: "https://i.ibb.co/nM5S0Zcj/tham-an-ma-no-canh.jpg"
    },
    {
        bookName: "Án Mạng Trong Lớp Học - Asakura Akinari",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/N2daL",
        imageLink: "https://i.ibb.co/6RQWDmPD/an-mang-trong-lop-hoc.jpg"
    },
    {
        bookName: "Đêm Yên Tĩnh - Sophie Hannah",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NYR3R",
        imageLink: "https://i.ibb.co/kVvb4XK4/dem-yen-tinh.jpg"
    },
    {
        bookName: "Kỳ Án Pháp Y 1 – Mật Mã Tử Vong - Lục Ngoạn",
        categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://adpvn.co/s/NEqDn",
        buyLink: "https://adpvn.co/s/NBmMd",
        imageLink: "https://i.ibb.co/qLLKhTp9/ky-an-phap-y-mat-ma-tu-vong-chuyen-chua-ke-sau-canh-cua-phap-y.jpg"
    },
    {
        bookName: "Án Mạng Giữa Không Trung - Agatha Christie",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4ZJ9w",
        imageLink: "https://i.ibb.co/4DWW2px/an-mang-giua-khong-trung.jpg"
    },
    {
        bookName: "Grasshopper – Sát Thủ Báo Thù - Isaka Kotaro",
        categories: ["Phiêu Lưu", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/erJ7p",
        imageLink: "https://i.ibb.co/gLzyCnwx/grasshopper-sat-thu-bao-thu.jpg"
    },
    {
        bookName: "Bầy Mèo Nổi Loạn - Okamoto Kido",
        categories: ["Huyền Ảo", "Kinh Dị", "Tôn Giáo", "Trinh Thám", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4X3RW",
        imageLink: "https://i.ibb.co/rfKF4MHJ/okamoto-kido-tuyen-tap-bay-meo-noi-loan.jpg"
    },
    {
        bookName: "Giải Mã Pháp Y – Những Câu Chuyện Từ Bóng Tối - Val McDermid",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4kK7P",
        imageLink: "https://i.ibb.co/bMgSfYDK/giai-ma-phap-y-nhung-cau-chuyen-tu-bong-toi.jpg"
    },
    {
        bookName: "Những Câu Chuyện Kinh Dị Khiến Bạn Dựng Tóc Gáy - Quỷ Cổ Nhân",
        categories: ["Huyền Ảo", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4POnm",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nhung-cau-chuyen-kinh-di-khien-ban-dung-toc-gay.jpg"
    },
    {
        bookName: "Người Đàn Ông Ấy - Hirano Keichiro",
        categories: ["Lãng Mạn", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NBmWx",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nguoi-dan-ong-ay.jpg"
    },
    {
        bookName: "Nghịch Lý 13 - Higashino Keigo",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4yRxz",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nghich-ly-13.jpg"
    },
    {
        bookName: "Bút Ký Bảo Vệ Cổ Vật Trung Hoa - Nạp Lan Lãng Nguyệt",
        categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4xRy8",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/but-ky-bao-ve-co-vat-trung-hoa.jpg"
    },
    {
        bookName: "Thảm Họa Tuyết Trắng - Higashino Keigo",
        categories: ["Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4LrxA",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tham-hoa-tuyet-trang.jpg"
    },
    {
        bookName: "Cuộc Chiến Trắng - Hoàng Dục Đức",
        categories: ["Đô Thị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/V0gxJ",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/cuoc-chien-trang.jpg"
    },
    {
        bookName: "Con Lửng – Fredrik P. Winter",
        categories: ["Hiện Thực", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vmv2y",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/con-lung.jpg"
    },
    {
        bookName: "Nhật Ký Điều Tra – Đằng Sau Tội Ác - Lưu Tinh Thần",
        categories: ["Hồi Ký", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VM2Jx",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nhat-ky-dieu-tra-dang-sau-toi-ac.jpg"
    },
    {
        bookName: "Tội Ác Có Thật - Jamie Frater",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eqk9J",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/toi-ac-co-that.jpg"
    },
    {
        bookName: "Cái Bóng Trầm Mặc – Dật An",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eojad",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/cai-bong-tram-mac.jpg"
    },
    {
        bookName: "Án Mạng Trên Bến Thuyền - Paula Hawkins",
        categories: ["Huyền Ảo", "Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eGKEP",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/an-mang-tren-ben-thuyen.jpg"
    },
    {
        bookName: "Dưới Cánh Xương Tàn - Kristen Perrin",
        categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4POQR",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ho-so-castle-knoll-1-duoi-canh-xuong-tan.jpg"
    },
    {
        bookName: "Vật Chứng Mất Tích - David Baldacci",
        categories: ["Hiện Đại", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VM2LK",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vat-chung-mat-tich.jpg"
    },
    {
        bookName: "Điểm Đoạt Mạng - Ngô Hiểu Lạc",
        categories: ["Kinh Dị", "Viễn Tưởng", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NEqgn",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/diem-doat-mang.jpg"
    },
    {
        bookName: "Kỳ Án Pháp Y 2: Truy Tìm Bằng Chứng – Lời Thì Thầm Của Tử Thi - Lục Ngoạn",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NBmMd",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ky-an-phap-y-tap-2-truy-tim-bang-chung-loi-thi-tham-cua-tu-thi.jpg"
    },
    {
        bookName: "Án Mạng Vùng Lưỡng Hà - Agatha Christie",
        categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4yRKj",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/an-mang-vung-luong-ha.jpg"
    },
    {
        bookName: "Hõm Chết – David Baldacci",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VM2LK",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/hom-chet.jpg"
    },
    {
        bookName: "Ngôi Nhà Muôn Cánh Cửa - Tan Twan Eng",
        categories: ["Lịch Sử", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4xR6X",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ngoi-nha-muon-canh-cua.jpg"
    },
    {
        bookName: "Báo Thù – Mười Một Câu Chuyện Tăm Tối - Ogawa Yoko",
        categories: ["Hiện Đại", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/erJp3",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bao-thu-muoi-mot-cau-chuyen-tam-toi.jpg"
    },
    {
        bookName: "Tàng Long Quyết - Thân Thị Sơn Nhân",
        categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám", "Viễn Tưởng"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VJd9A",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tang-long-quyet.jpg"
    },
    {
        bookName: "Truy Đuổi Khói Tuyết - Higashino Keigo",
        categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4LrxA",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/truy-duoi-khoi-tuyet.jpg"
    },
    {
        bookName: "Vũ Điệu Cuồng Phong - Higashino Keigo",
        categories: ["Viễn Tưởng", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4LrxA",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vu-dieu-cuong-phong.jpg"
    },
    {
        bookName: "Sát Nhân Trong Chiếc Hộp Mắt Ma - Masahiro Imamura",
        categories: ["Kinh Dị", "Viễn Tưởng", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vd5dl",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/sat-nhan-trong-chiec-hop-mat-ma.jpg"
    },
    {
        bookName: "Đêm Định Mệnh Ở Barcelona - Cornell Woolrich",
        categories: ["Hiện Đại", "Kinh Dị", "Truyện Ngắn", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4yRAj",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/dem-dinh-menh-o-barcelona.jpg"
    },
    {
        bookName: "Kẻ Khác – Guillaume Musso",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vwa5z",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ke-khac.jpg"
    },
    {
        bookName: "Phân Tích Hành Vi Phạm Tội - Moriarty K",
        categories: ["Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vl3w5",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/phan-tich-hanh-vi-pham-toi-giai-ma-ky-an-the-gioi.jpg"
    },
    {
        bookName: "Tấm Gương Nứt Vỡ - Agatha Christie",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eqkJR",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tam-guong-nut-vo.jpg"
    },
    {
        bookName: "Quỷ Tiết – Hồng Nương Tử",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4Q5D2",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/quy-tiet.jpg"
    },
    {
        bookName: "Bảy Ngày Chờ Chết - Holly Jackson",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/V0gd5",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bay-ngay-cho-chet.jpg"
    },
    {
        bookName: "Ma Trùng - Dị Thể – Chan Ho-Kei",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Tâm Lý Học"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vmvg7",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ma-trung.jpg"
    },
    {
        bookName: "Ván Cược – Oh Yoon-Hee",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4Lr7Y",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/van-cuoc.jpg"
    },
    {
        bookName: "Thám Tử Thứ Tám - Alex Pavesi",
        categories: ["Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eno2L",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tham-tu-thu-tam.jpg"
    },
    {
        bookName: "Chết Chùm – Donald Goines",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "https://adpvn.co/s/VpoaW",
        buyLink: "https://adpvn.co/s/V9oQM",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/chet-chum.jpg"
    },
    {
        bookName: "Bù Nhìn – Kim Lăng Vân",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiên Hiệp", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VJd77",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bu-nhin.jpg"
    },
    {
        bookName: "Bảy Ngày Phán Quyết - Kōtarō Isaka",
        categories: ["Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4ajmq",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bay-ngay-phan-quyet.jpg"
    },
    {
        bookName: "Rượu Độc – Higashino Keigo",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Tâm Lý Học"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vd5qw",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ruou-doc.jpg"
    },
    {
        bookName: "Két “Xác” – Hideo Yokoyama",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/N2dJB",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ket-xac.jpg"
    },
    {
        bookName: "Ác Não – Long Vĩ Bình",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VvQ1O",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ac-nao.jpg"
    },
    {
        bookName: "Kéo Búa Bao – Alice Feeney",
        categories: ["Phiêu Lưu", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NgaRp",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/keo-bua-bao.jpg"
    },
    {
        bookName: "Danh Sách Trả Thù - Jack Carr",
        categories: ["Phiêu Lưu", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vwa0p",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/danh-sach-tra-thu.jpg"
    },
    {
        bookName: "Vương Quốc Tội Lỗi - Jo Nesbø",
        categories: ["Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NEqBX",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vuong-quoc-toi-loi.jpg"
    },
    {
        bookName: "Không Thành Kế – Hô Diên Vân",
        categories: ["Hiện Đại", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/VM27d",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/khong-thanh-ke.jpg"
    },
    {
        bookName: "Bạn Trai – Freida McFadden",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4xRQk",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ban-trai.jpg"
    },
    {
        bookName: "Người Phụ Nữ Lừa Cả Thế Giới - Beau Donelly, Nick Toscano",
        categories: ["Hiện Thực", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4yRq0",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nguoi-phu-nu-lua-ca-the-gioi.jpg"
    },
    {
        bookName: "Kỳ Án Bảy Mặt Đồng Hồ - Agatha Christie",
        categories: ["Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4PO7p",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ky-an-bay-mat-dong-ho.jpg"
    },
    {
        bookName: "Bí Mật Của Thiên Thần - Guillaume Musso",
        categories: ["Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/NDK7J",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bi-mat-cua-thien-than.jpg"
    },
    {
        bookName: "Oan Hồn Băng Cốc - A Sửu",
        categories: ["Huyền Ảo", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/eojYR",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/oan-hon-bang-coc.jpg"
    },
    {
        bookName: "Hợp Táng Án - Na Đa",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4kKE8",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/hop-tang-an.jpg"
    },
    {
        bookName: "Tuyển Tập Truyện Ma - Chiếc Xe Màu Tím - Edith Nesbit",
        categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/4X3gq",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/chiec-xe-mau-tim-tuyen-tap-truyen-ma-edith-nesbit.jpg"
    },
    {
        bookName: "Tiếng Thét Dưới Băng - Camilla Grebe",
        categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/15kls_Of8iUggMS_7PGkpmQ",
        buyLink: "https://adpvn.co/s/erJ9o",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tieng-thet-duoi-bang-camilla-grebe-26-nguyen-thi-tuoi-dich.jpg"
    },
    {
        bookName: "Khúc Xương Biết Hát - R. Austin Freeman",
        categories: ["Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1GnnZ-wd-ca-LQyi8CQlX5A",
        buyLink: "https://adpvn.co/s/eGK7K",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/khuc-xuong-biet-hat-r-austin-freeman-26-xuan-sinh-dich.jpg"
    },
    {
        bookName: "Kẻ Chủ Mưu - Shari Lapena",
        categories: ["Kinh Dị", "Truyện Ngắn", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1Reh8GCuKFgOqSO92l6rNgg",
        buyLink: "https://adpvn.co/s/4Oa79",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ke-chu-muu-shari-lapena-26-orkid-dich.jpg"
    },
    {
        bookName: "Cô Gái Đến Từ Milan - Giorgio Scerbanenco",
        categories: ["Hiện Đại", "Hiện Thực", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1j0k7wf9pgE0Idmsr1sRItg",
        buyLink: "https://adpvn.co/s/Vbp0P",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/co-gai-den-tu-milan-giorgio-scerbanenco-26-mai-trang-dich.jpg"
    },
    {
        bookName: "Bàn Tay Đen - Arthur B. Reeve",
        categories: ["Hiện Đại", "Hiện Thực", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1SvpE2GdBL8ZgDD56ZdAtew",
        buyLink: "https://adpvn.co/s/VWBdb",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ban-tay-den-arthur-b-reeve-26-phi-yen-dich.jpg"
    },
    {
        bookName: "Ba Đường Luân Hồi - Vĩ Ngư",
        categories: ["Huyền Ảo", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1yuf2o984uacjvn3BlFWO1w",
        buyLink: "https://adpvn.co/s/VvQmO",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ba-duong-luan-hoi-vi-ngu-26-nha-phong-dich.jpg"
    },
    {
        bookName: "Vũ Điệu Quỷ Satan - Krasznahorkai László",
        categories: ["Hiện Đại", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/12J-0QVUe8hcavbMI7wexdg",
        buyLink: "https://adpvn.co/s/e8B0P",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vu-dieu-quy-satan-krasznahorkai-laszlo-giap-van-chung-dich.jpg"
    },
    {
        bookName: "Cuộc Viếng Thăm Của Vị Khách Bí Ẩn - R. Austin Freeman",
        categories: ["Phiêu Lưu", "Tâm Lý Học", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1SL4DcjFHusffvyrCVJXw0A",
        buyLink: "https://adpvn.co/s/V17MG",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/cuoc-vieng-tham-cua-vi-khach-bi-an-r-austin-freeman-26-tran-dich.jpg"
    },
    {
        bookName: "Nhân Chứng Cuối Cùng - Holly Jackson",
        categories: ["Trinh Thám", "Truyện Ngắn"],
        downloadLink: "#",
        buyLink: "https://adpvn.co/s/Vl3gW",
        imageLink: "https://ebookvie.com/wp-content/uploads/2024/04/Nhan-Chung-Cuoi-Cung.jpg"
    },
    {
        bookName: "Bài Học Giáo Dục Từ Nước Mĩ - Tony Wagner",
        categories: ["Kỹ Năng Sống", "Quản Trị"],
        downloadLink: "https://1024terabox.com/s/1SKW6YYwfmLi8_S6hneCCEA",
        buyLink: "https://adpvn.co/s/4xR61",
        imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bai-hoc-giao-duc-tu-nuoc-mi-tony-wagner-hoang-duc-long-dich.jpg"
    },
    {
        bookName: "Viết Lại Mã Sự Sống - Walter Isaacson",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1CWwLgUa3cbbAZOFhVql_Bw",
        buyLink: "https://adpvn.co/s/NEbbD",
        imageLink: "https://ebookvie.com/wp-content/uploads/2023/12/viet-lai-ma-su-song-1.jpg"
    },
	{
        bookName: "Con Chúng Ta Hạnh Phúc Là Được - Libby Purves",
        categories: ["Giáo Dục", "Nuôi Dạy Trẻ"],
        downloadLink: "https://1024terabox.com/s/1HnxBgrIribfPzJoS1lrPlw",
        buyLink: "https://adpvn.co/s/NgKK9",
        imageLink: "https://ebookvie.com/wp-content/uploads/2023/12/con-chung-ta-hanh-phuc-la-duoc-libby-purves.jpg"
    },
	{
        bookName: "Em Bé Hạnh Phúc Nhất Khu Phố - Harvey Karp",
        categories: ["Giáo Dục", "Nuôi Dạy Trẻ"],
        downloadLink: "https://1024terabox.com/s/1fLWN4LC3kaLwyDjvQRRBZA",
        buyLink: "#",
        imageLink: "https://i.ibb.co/6VZbCDn/Em-Be-Hanh-Phuc-Nhat-Khu-Pho-Harvey-Karp-Paula-Spencer.jpg"
    },
	{
        bookName: "Câu Chuyện Cơ Thể Con Người - Daniel E. Lieberman",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1WqQuDpxNGTcYDwdnJRhSSA",
        buyLink: "https://adpvn.co/s/4ZrlJ",
        imageLink: "https://i.ibb.co/C3j7fg7y/cau-chuyen-co-the-con-nguoi.jpg"
    },
	{
        bookName: "Đá – 150 Thông Tin Liên Quan Tới Đá - Gerry Bailey",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/13iVE7ePF7hLCn3InJwKxlg",
        buyLink: "#",
        imageLink: "https://i.ibb.co/Myvth9Vg/khoa-hoc-trong-tam-tay.jpg"
    },
	{
        bookName: "Sổ Tay Khoa Học – Michael Geisen",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1oR_PWNNK3igz_321f4cLXw",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/TDxwPgKS/so-tay-khoa-hoc-michael-geisen.jpg"
    },
	{
        bookName: "Sổ Tay Khoa Học Máy Tính & Mã Hóa - Nhiều Tác Giả",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/16vI6Srd89QsFqos-A70rHg",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/XfpCpFw8/so-tay-khoa-hoc-may-tinh-ma-hoa-nhieu-tac-gia.jpg"
    },
	{
        bookName: "Sổ Tay Sinh Học - Matthew Brown",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1WSDfHV6sJC4osOm-IBYJew",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/KpYzp7Ky/so-tay-sinh-hoc-matthew-brown.jpg"
    },
	{
        bookName: "Sổ Tay Toán Học - Altair Peterson",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1fET_VLsx44UTX86bG92EPw",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/C51pRmYF/so-tay-toan-hoc-altair-peterson.jpg"
    },
	{
        bookName: "Sổ Tay Hóa Học – Jennifer Swanson",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1piNKEiH7Lhdm_d1ys-o50g",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/mVHcrNgM/so-tay-hoa-hoc-jennifer-swanson.jpg"
    },
	{
        bookName: "Sổ Tay Đại Số – Jason Wang",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1owhH1PRdjmn9ZYRqlbKyAA",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/MD7Mfcz2/so-tay-dai-so-jason-wang.jpg"
    },
	{
        bookName: "Sổ Tay Hình Học – Christy Needham",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1pFlbY7WEFyw35dOw5Zmq0g",
        buyLink: "https://adpvn.co/s/VWR7R",
        imageLink: "https://i.ibb.co/2YN2LWPv/so-tay-hinh-hoc-christy-needham.jpg"
    },
	{
        bookName: "Hiểu Hết Về Khoa Học - DK Publishing",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1-grVEf4vxHZxNnpJaA9EGA",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/vCfybvS1/hieu-het-ve-khoa-hoc-dk.jpg"
    },
	{
        bookName: "Hiểu Về Sự Chết – Sherwin B. Nuland",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1CJEIU9IVOePZxcRLSL5MVQ",
        buyLink: "https://adpvn.co/s/4zQpw",
        imageLink: "https://i.ibb.co/7Nxy0Jqx/hieu-ve-su-chet-sherwin-b-nuland.jpg"
    },
	{
        bookName: "Hiểu Hết Về Thức Ăn – DK Publishing",
        categories: ["Y Học"],
        downloadLink: "https://1024terabox.com/s/1_lBOJtDMfZUaSeNKm1rG1g",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/23z8wLZt/hieu-het-ve-thuc-an-dk-tran-truong-phuc-hanh-dich.jpg"
    },
	{
        bookName: "Hiểu Hết Về Bộ Não – DK Publishing",
        categories: ["Y Học"],
        downloadLink: "https://1024terabox.com/s/1rsN7ppIovHmibqGT61cq1g",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/G4Cn7Xxd/hieu-het-ve-bo-nao-dk.jpg"
    },
	{
        bookName: "Hiểu Hết Về Tiền – DK Publishing",
        categories: ["Kinh Tế", "Tài Chính"],
        downloadLink: "https://1024terabox.com/s/1Ckhx7Kc9iktln6R0QleF1A",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/3ymRS9H8/how-money-works-hieu-het-ve-tien-tac-gia-dk.jpg"
    },
	{
        bookName: "Hiểu Hết Về Tâm Lý Học - DK Publishing",
        categories: ["Tâm Lý Học"],
        downloadLink: "https://1024terabox.com/s/14gl8swXfoDtW7c6z8dch8A",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/Y7kPvssr/how-psychology-works-hieu-het-ve-tam-ly-hoc-tac-gia-jo-hemmings.jpg"
    },
	{
        bookName: "Hiểu Hết Về Triết Học - DK Publishing",
        categories: ["Triết Học"],
        downloadLink: "https://1024terabox.com/s/1YpKIRvTYxqWOPQ3EVvAXSw",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/JWQLdNbY/hieu-het-ve-triet-hoc.jpg"
    },
	{
        bookName: "Hiểu Hết Về Kinh Doanh - DK Publishing",
        categories: ["Quản Trị"],
        downloadLink: "https://1024terabox.com/s/1BWE0xG7aHt8pbLNzez3o7g",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/RTnfWTXM/hieu-het-ve-kinh-doanh-dk.jpg"
    },
	{
        bookName: "Hiểu Hết Về Quản Lý - DK Publishing",
        categories: ["Quản Trị"],
        downloadLink: "https://1024terabox.com/s/1zEvr1-_w9u-sIXKZ_DWsrQ",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/zVhZHY0N/hieu-het-ve-quan-ly-dk-kim-luyen-dich.jpg"
    },
	{
        bookName: "Hiểu Hết Về Cơ Thể - DK Publishing",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1Dh7gmdKhiWimMBZPEWRM8g",
        buyLink: "https://adpvn.co/s/4AB25",
        imageLink: "https://i.ibb.co/NgncXJNn/hieu-het-ve-co-the-dk.jpg"
    },
	{
        bookName: "Tất Cả Chúng Ta Đều Là Cá – Neil Shubin",
        categories: ["Giáo Dục"],
        downloadLink: "https://1024terabox.com/s/1KJzKOVdx3EIq0EyVUVZl6A",
        buyLink: "#",
        imageLink: "https://i.ibb.co/GfJGtKsX/36066039301-c0bbdf7486-o.jpg"
    },
	{
        bookName: "Ngôi Nhà Số 11 - Sophie Hannah",
        categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1wt_GiBoBC9TyQWHAscKl8w",
        buyLink: "#",
        imageLink: "https://i.ibb.co/gFDGtB9m/ngoi-nha-so-11-sophie-hannah-26-nguyen-viet-dung-dich.jpg"
    },
	{
        bookName: "Mùa Thu Của Mèo Holmes - Akagawa Jiro",
        categories: ["Hài Hước", "Tiểu Thuyết", "Trinh Thám"],
        downloadLink: "https://1024terabox.com/s/1mmDPOJXrkSjOFgawMihmww",
        buyLink: "#",
        imageLink: "https://i.ibb.co/tM5KLNP0/mua-thu-cua-meo-holmes-akagawa-jiro-26-hai-duong-dich.jpg"
    },
	{
        bookName: "Tâm Trí Tội Phạm - Sam Kean",
        categories: ["Tâm Lý Học", "Trinh Thám", "Văn Hóa - Xã Hội", "Y Học"],
        downloadLink: "https://1024terabox.com/s/10CDoZKpqO5gsi1vjtReTZg",
        buyLink: "https://adpvn.co/s/V7rnx",
        imageLink: "https://i.ibb.co/JWCZVg4X/tam-tri-toi-pham-sam-kean-1980-novel-dich-huy-nguyen-dich.jpg"
    },
	{
        bookName: "Muôn Kiếp Nhân Sinh Tập 1 - Nguyễn Phong",
        categories: ["Kỹ Năng Sống"],
        downloadLink: "https://1024terabox.com/s/1_JE3_F0BDl8iVUOT1CKcqA",
        buyLink: "https://adpvn.co/s/4xlxX",
        imageLink: "https://i.ibb.co/jvM3wSyX/muon-kiep-nhan-sinh.jpg"
    },
	{
        bookName: "Muôn Kiếp Nhân Sinh Tập 2 - Nguyễn Phong",
        categories: ["Triết Học"],
        downloadLink: "https://1024terabox.com/s/1w98Df3_Cy_8rvlNNPLoEBw",
        buyLink: "https://adpvn.co/s/4xlxX",
        imageLink: "https://i.ibb.co/k2qTVsqm/muon-kiep-nhan-sinh-2.jpg"
    },
	{
        bookName: "Muôn Kiếp Nhân Sinh Tập 3 - Nguyễn Phong",
        categories: ["Triết Học"],
        downloadLink: "https://1024terabox.com/s/1OJ7fogmqUa1JYGb5E3jXvQ",
        buyLink: "https://adpvn.co/s/4xlxX",
        imageLink: "https://i.ibb.co/p6PJZp16/muon-kiep-nhan-sinh-tap-3.jpg"
    },
	{
        bookName: "Đường Mây Trên Đất Hoa - Nguyên Phong",
        categories: ["Triết Học"],
        downloadLink: "https://1024terabox.com/s/1EEp_8UvMvZYJEjRmXmUXOQ",
        buyLink: "https://adpvn.co/s/4LJPn",
        imageLink: "https://i.ibb.co/SwJPPf4p/duong-may-tren-dat-hoa.jpg"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    },
	{
        bookName: "#",
        categories: ["#", "#", "#", "#"],
        downloadLink: "#",
        buyLink: "#",
        imageLink: "#"
    }
];


let currentPage = 1;
const BOOKS_PER_PAGE = 20;
let currentFilter = '';
let currentSearchTerm = '';

/**
 * Cập nhật năm hiện tại trong footer
 */
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Mở liên kết tải sách trong một tab mới.
 * Bảo mật: Thêm 'noopener,noreferrer' để tránh Reverse Tabnabbing.
 * @param {string} downloadLink Link tải sách.
 */
function openBookDownload(downloadLink) {
    // Chỉ mở duy nhất Link Tải Sách
    window.open(downloadLink, '_blank', 'noopener,noreferrer');
}

/**
 * Mở liên kết mua sách trong tab mới (ẩn URL ở status bar).
 * Bảo mật: Thêm 'noopener,noreferrer' để tránh Reverse Tabnabbing.
 * @param {string} buyLink Link mua sách.
 */
function openBuyLink(buyLink) {
    window.open(buyLink, '_blank', 'noopener,noreferrer');
}

/**
 * Reset toàn bộ bộ lọc và cuộn lên đầu trang.
 */
function resetAppAndScroll() {
    // Reset trạng thái
    currentFilter = '';
    currentSearchTerm = '';
    currentPage = 1;

    // Reset UI
    document.getElementById('search-input').value = '';
    // Reset active state trong Tag Cloud
    populateCategories();

    // Render lại sách với trạng thái mặc định
    renderBooks();

    // Cuộn lên đầu trang
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/**
 * Trích xuất và trả về danh sách các thể loại kèm số lượng.
 */
function extractCategoriesWithCount() {
    const counts = {};
    let total = 0;
    mockBookData.forEach(book => {
        if (book.bookName !== '#' && Array.isArray(book.categories)) {
            total++;
            book.categories.forEach(cat => {
                if (cat !== '#') {
                    counts[cat] = (counts[cat] || 0) + 1;
                }
            });
        }
    });
    return {
        counts,
        total
    };
}

/**
 * Cập nhật Đám Mây Thể Loại.
 */
function populateCategories() {
    const {
        counts,
        total
    } = extractCategoriesWithCount();
    const cloudContainer = document.getElementById('category-cloud');
    cloudContainer.innerHTML = '';

    // Tag "Tất Cả"
    const allActive = currentFilter === '' ?
        'bg-primary text-white ring-2 ring-offset-2 ring-primary' :
        'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:text-primary';
    cloudContainer.innerHTML += `<button onclick="applyFilter('')" class="px-4 py-2 rounded-full text-sm font-medium transition duration-150 shadow-sm ${allActive}">Tất Cả (${total})</button>`;

    // Các thể loại khác (Sắp xếp A-Z)
    const sortedCategories = Object.keys(counts).sort();

    sortedCategories.forEach(cat => {
        const count = counts[cat];
        const isActive = currentFilter === cat ?
            'bg-primary text-white ring-2 ring-offset-2 ring-primary' :
            'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:text-primary';
        cloudContainer.innerHTML += `<button onclick="applyFilter('${cat}')" class="px-4 py-2 rounded-full text-sm font-medium transition duration-150 shadow-sm ${isActive}">${cat} (${count})</button>`;
    });
}

/**
 * Áp dụng bộ lọc thể loại và render lại sách.
 * @param {string} category Tên thể loại cần lọc.
 */
function applyFilter(category) {
    currentFilter = category;
    currentPage = 1; // Reset về trang 1 khi lọc

    // Cập nhật UI của tag cloud để hiển thị tag đang chọn
    populateCategories();

    // Đảm bảo thanh tìm kiếm không bị ghi đè, chỉ reset nếu đang lọc từ HOME/LOGO
    if (!currentSearchTerm) {
        document.getElementById('search-input').value = '';
    }
    renderBooks();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Xử lý tìm kiếm và lọc kết hợp, sau đó render lại sách.
 */
function handleFilter() {
    currentSearchTerm = document.getElementById('search-input').value.toLowerCase();
    currentPage = 1; // Reset về trang 1 khi tìm kiếm
    renderBooks();
}

/**
 * Render danh sách sách, bao gồm sắp xếp A-Z, lọc, tìm kiếm và phân trang.
 */
function renderBooks() {
    // Loại bỏ dòng dữ liệu rác '#'
    let filteredBooks = mockBookData.filter(book => book.bookName !== '#');

    // 1. Lọc theo Thể loại (nếu có)
    if (currentFilter) {
        filteredBooks = filteredBooks.filter(book => book.categories.includes(currentFilter));
    }

    // 2. Lọc theo Tìm kiếm (nếu có)
    if (currentSearchTerm) {
        filteredBooks = filteredBooks.filter(book =>
            book.bookName.toLowerCase().includes(currentSearchTerm)
        );
    }

    // 3. Sắp xếp A-Z theo tên sách (Card-Book A>Z)
    filteredBooks.sort((a, b) => a.bookName.localeCompare(b.bookName, 'vi', {
        sensitivity: 'base'
    }));

    const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const endIndex = startIndex + BOOKS_PER_PAGE;
    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

    const bookListElement = document.getElementById('book-list');
    const noResultsElement = document.getElementById('no-results');

    if (booksToDisplay.length === 0) {
        bookListElement.innerHTML = '';
        noResultsElement.classList.remove('hidden');
        document.getElementById('pagination-controls').innerHTML = '';
        return;
    } else {
        noResultsElement.classList.add('hidden');
    }

    // 4. Render Card-Book
    bookListElement.innerHTML = booksToDisplay.map(book => {
        // LOGIC: Kiểm tra link bắt đầu bằng '#'
        const isUpdating = !book.downloadLink || book.downloadLink.startsWith('#');
        const buttonText = isUpdating ? 'Đang Cập Nhật' : 'Tải Về';
        const buttonClass = isUpdating ?
            'bg-gray-400 cursor-not-allowed text-gray-700 opacity-80' :
            'bg-primary text-white hover:bg-secondary transition duration-150 transform hover:scale-[1.02] shadow-md active:scale-95';

        // Cập nhật: chỉ gọi openBookDownload với downloadLink
        const onClickAction = isUpdating ? 'disabled' : `onclick="openBookDownload('${book.downloadLink}')"`;

        // Logic cho nút Mua Sách (nếu link là # thì ẩn hoặc disable)
        const isBuyLinkValid = book.buyLink && !book.buyLink.startsWith('#');
        const buyButtonClass = !isBuyLinkValid ?
            'bg-gray-300 cursor-not-allowed text-gray-500' :
            'bg-accent text-white hover:bg-orange-600 transition duration-150 shadow-md transform hover:scale-[1.02] active:scale-95';

        // SỬA ĐỔI: Dùng button + onclick thay vì thẻ a + href để ẩn link ở góc trái
        const buyAction = isBuyLinkValid ? `onclick="openBuyLink('${book.buyLink}')"` : 'disabled';

        const bookNameId = book.bookName.replace(/\s/g, '-');

        return `
                <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col">
                    <!-- Phần Ảnh -->
                    <div class="aspect-[2/3] bg-gray-200 overflow-hidden">
                        <img src="${book.imageLink}"
                             onerror="this.onerror=null;this.src='https://placehold.co/300x450/e5e7eb/333333?text=Book+Cover';"
                             alt="${book.bookName}" class="w-full h-full object-cover">
                    </div>

                    <!-- Phần Tên và Nút Tải -->
                    <div class="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                        <!-- Tên sách (Đã bỏ TTS) -->
                        <div class="flex items-start justify-between mb-2">
                            <h3 class="text-lg font-semibold text-gray-800 line-clamp-2 mr-2" title="${book.bookName}">${book.bookName}</h3>
                        </div>

                        <p class="text-xs text-gray-500 mb-3 line-clamp-1">
                             Thể loại: ${book.categories.join(', ')}
                        </p>
                        
                        <!-- Nút Mua Sách (Đã chuyển thành button) -->
                        <button ${buyAction} class="block w-full text-center py-2 rounded-lg font-medium mb-3 ${buyButtonClass}">
                            ${isBuyLinkValid ? 'Mua Sách' : 'Hết Hàng'}
                        </button>

                        <!-- Nút Tải Về/Đang Cập Nhật -->
                        <button ${onClickAction === 'disabled' ? 'disabled' : onClickAction} class="w-full text-center py-2 rounded-lg font-medium shadow-md ${buttonClass}">
                            ${buttonText}
                        </button>
                    </div>
                </div>
                `;
    }).join('');

    // 5. Render Phân Trang
    renderPagination(totalPages);
}

/**
 * Render các nút phân trang.
 * @param {number} totalPages Tổng số trang.
 */
function renderPagination(totalPages) {
    const container = document.getElementById('pagination-controls');
    container.innerHTML = '';

    // Nút Previous
    container.innerHTML += `<button onclick="changePage(-1)" ${currentPage === 1 ? 'disabled' : ''} class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition duration-150">Trước</button>`;

    // Các nút trang
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'bg-primary text-white border-primary hover:bg-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100';
        container.innerHTML += `<button onclick="goToPage(${i})" class="px-4 py-2 text-sm font-medium border rounded-lg ${activeClass} transition duration-150">${i}</button>`;
    }

    // Nút Next
    container.innerHTML += `<button onclick="changePage(1)" ${currentPage === totalPages ? 'disabled' : ''} class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition duration-150">Sau</button>`;
}

/**
 * Thay đổi trang (trước/sau).
 * @param {number} direction -1 cho trước, 1 cho sau.
 */
function changePage(direction) {
    const totalPages = Math.ceil(mockBookData.length / BOOKS_PER_PAGE);
    const newPage = currentPage + direction;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderBooks();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

/**
 * Chuyển đến trang cụ thể.
 * @param {number} page Số trang.
 */
function goToPage(page) {
    currentPage = page;
    renderBooks();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// --- Logic cho Modal Đa Dụng ---

/**
 * Mở Modal
 * @param {string} modalId ID của modal cần mở ('donate-modal', 'privacy-modal', 'terms-modal').
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Ngăn cuộn trang chính
    }
}

/**
 * Đóng Modal.
 * @param {Event} event Event click (chỉ đóng khi click vào nền).
 * @param {string} modalId ID của modal cần đóng.
 */
function closeModal(event, modalId) {
    const modal = document.getElementById(modalId);
    // Nếu click vào nền (event.target là chính modal) HOẶC không có event (gọi từ nút đóng X)
    if (!event || event.target.id === modalId) {
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = ''; // Cho phép cuộn lại trang chính
        }
    }
}

// --- Logic cho Mobile Menu ---

document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo: chèn thể loại vào Dropdown Lọc và render sách lần đầu
    populateCategories();
    renderBooks();
    updateCurrentYear(); // Cập nhật năm

    // 2. Toggle Mobile Menu
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
});
