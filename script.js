        // Placeholder cho API Key. Canvas sẽ tự động cung cấp trong runtime.
        const apiKey = ""; 

        // Hàm tiện ích để thực hiện fetch với cơ chế Retry (sử dụng Exponential Backoff) - Vẫn giữ cho TTS
        async function fetchWithRetry(url, options, retries = 3) {
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        if (response.status === 429) { // Too Many Requests
                            throw new Error('Rate limit exceeded. Retrying...');
                        }
                        const errorBody = await response.json();
                        throw new Error(`HTTP error! status: ${response.status}. Details: ${JSON.stringify(errorBody)}`);
                    }
                    return response;
                } catch (error) {
                    console.error(`Attempt ${i + 1} failed:`, error.message);
                    if (i === retries - 1) throw error; 
                    const delay = Math.pow(2, i) * 1000 + Math.floor(Math.random() * 1000); // 1s, 2s, 4s... + jitter
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        // Hàm tiện ích để chuyển base64 sang ArrayBuffer
        function base64ToArrayBuffer(base64) {
            const binaryString = window.atob(base64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        }

        // Hàm tiện ích để chuyển PCM sang định dạng WAV
        function pcmToWav(pcm16, sampleRate) {
            const pcmLength = pcm16.length;
            const buffer = new ArrayBuffer(44 + pcmLength * 2);
            const view = new DataView(buffer);
            const channels = 1;
            const bitsPerSample = 16;
            const bytesPerSample = bitsPerSample / 8;
            const byteRate = sampleRate * channels * bytesPerSample;
            const blockAlign = channels * bytesPerSample;

            /* RIFF identifier */
            view.setUint32(0, 0x52494646, false); // "RIFF"
            /* file length */
            view.setUint32(4, 36 + pcmLength * 2, true);
            /* RIFF type */
            view.setUint32(8, 0x57415645, false); // "WAVE"
            /* format chunk identifier */
            view.setUint32(12, 0x666d7420, false); // "fmt "
            /* format chunk length */
            view.setUint32(16, 16, true);
            /* sample format (raw) */
            view.setUint16(20, 1, true); // 1 = PCM
            /* channel count */
            view.setUint16(22, channels, true);
            /* sample rate */
            view.setUint32(24, sampleRate, true);
            /* byte rate (sample rate * block align) */
            view.setUint32(28, byteRate, true);
            /* block align (channels * bytes per sample) */
            view.setUint16(32, blockAlign, true);
            /* bits per sample */
            view.setUint16(34, bitsPerSample, true);
            /* data chunk identifier */
            view.setUint32(36, 0x64617461, false); // "data"
            /* data chunk length */
            view.setUint32(40, pcmLength * 2, true);

            // Write PCM data
            let offset = 44;
            for (let i = 0; i < pcmLength; i++, offset += 2) {
                view.setInt16(offset, pcm16[i], true);
            }

            return new Blob([view], { type: 'audio/wav' });
        }


        // Dữ liệu sách mẫu (đã xóa affiliateLink cũ, thêm buyLink mới)
        const mockBookData = [
            { bookName: "Quả Đắng - Ann Rule", categories: ["Trinh Thám", "Kinh Dị", "Y Học", "Tiểu Thuyết"], downloadLink: "https://1024terabox.com/s/1hyTMsnTfmtZ4l3nuOAe9Rw", buyLink: "https://adpvn.co/s/e8BQP", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/qua-dang-ann-rule-nguyen-dang-thuan-dich.jpg" },
			{ bookName: "Đừng Để “Nó” Dụ - Manabu Kaminaga", categories: ["Kinh Dị", "Trinh Thám", "Tâm Lý Học", "Y Học"], downloadLink: "#", buyLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/dung-de-no-du.jpg" },
			{ bookName: "Sự Thật Chỉ Có Một - Lưu Liễm, Lý Viên Viên", categories: ["Kinh Dị", "Trinh Thám", "Tâm Lý Học", "Tiểu Thuyết"], downloadLink: "#", buyLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/su-that-chi-co-mot.jpg" },
			{ bookName: "Một Ai Của Ngày Đó - Higashino Keigo", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/mot-ai-cua-ngay-do.jpg" },
			{ bookName: "14 Ngày Đẫm Máu - Jeremy Bates", categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "https://1024terabox.com/s/1RdJMSRpuedywOKztvLFK5g", buyLink: "https://adpvn.co/s/eR0MR", imageLink: "https://ebookvie.com/wp-content/uploads/2025/04/cover-9.jpg" },
			{ bookName: "Shin – Cậu Bé Bút Chì - Usui Yoshito Full", categories: ["Truyện Tranh"], downloadLink: "https://1024terabox.com/s/1g7QF8W_vMbzQQLoiNNSoPg", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2023/12/shin-cau-be-but-chi.jpg" },
			{ bookName: "Tù Nhân – Freida McFadden", categories: ["Lãng Mạn", "Tiểu Thuyết", "Trinh Thám", "Viễn Tưởng"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tu-nhan.jpg" },
			{ bookName: "Đại Dịch Hủy Diệt (Bộ 2 tập) - Stephen King", categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám", "Viễn Tưởng"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/dai-dich-huy-diet-bo-2-tap.jpg" },
			{ bookName: "Thảm Án Ma Nơ Canh - Stanislas-Andre Steeman", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tham-an-ma-no-canh.jpg" },
			{ bookName: "Án Mạng Trong Lớp Học - Asakura Akinari", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/an-mang-trong-lop-hoc.jpg" },
			{ bookName: "Đêm Yên Tĩnh - Sophie Hannah", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/dem-yen-tinh.jpg" },
			{ bookName: "Kỳ Án Pháp Y 1 – Mật Mã Tử Vong - Lục Ngoạn", categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ky-an-phap-y-mat-ma-tu-vong-chuyen-chua-ke-sau-canh-cua-phap-y.jpg" },
			{ bookName: "Án Mạng Giữa Không Trung - Agatha Christie", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "https://adpvn.co/s/4ZJ9w", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/an-mang-giua-khong-trung.jpg" },
			{ bookName: "Grasshopper – Sát Thủ Báo Thù - Isaka Kotaro", categories: ["Phiêu Lưu", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/grasshopper-sat-thu-bao-thu.jpg" },
			{ bookName: "Bầy Mèo Nổi Loạn - Okamoto Kido", categories: ["Huyền Ảo", "Kinh Dị", "Tôn Giáo", "Trinh Thám", "Truyện Ngắn"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/okamoto-kido-tuyen-tap-bay-meo-noi-loan.jpg" },
			{ bookName: "Giải Mã Pháp Y – Những Câu Chuyện Từ Bóng Tối - Val McDermid", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/giai-ma-phap-y-nhung-cau-chuyen-tu-bong-toi.jpg" },
			{ bookName: "Những Câu Chuyện Kinh Dị Khiến Bạn Dựng Tóc Gáy - Quỷ Cổ Nhân", categories: ["Huyền Ảo", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nhung-cau-chuyen-kinh-di-khien-ban-dung-toc-gay.jpg" },
			{ bookName: "Người Đàn Ông Ấy - Hirano Keichiro", categories: ["Lãng Mạn", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nguoi-dan-ong-ay.jpg" },
			{ bookName: "Nghịch Lý 13 - Higashino Keigo", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nghich-ly-13.jpg" },
			{ bookName: "Bút Ký Bảo Vệ Cổ Vật Trung Hoa - Nạp Lan Lãng Nguyệt", categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/but-ky-bao-ve-co-vat-trung-hoa.jpg" },
			{ bookName: "Thảm Họa Tuyết Trắng - Higashino Keigo", categories: ["Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tham-hoa-tuyet-trang.jpg" },
			{ bookName: "Cuộc Chiến Trắng - Hoàng Dục Đức", categories: ["Đô Thị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/cuoc-chien-trang.jpg" },
			{ bookName: "Con Lửng – Fredrik P. Winter", categories: ["Hiện Thực", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/con-lung.jpg" },
			{ bookName: "Nhật Ký Điều Tra – Đằng Sau Tội Ác - Lưu Tinh Thần", categories: ["Hồi Ký", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nhat-ky-dieu-tra-dang-sau-toi-ac.jpg" },
			{ bookName: "Tội Ác Có Thật - Jamie Frater", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Truyện Ngắn"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/toi-ac-co-that.jpg" },
			{ bookName: "Cái Bóng Trầm Mặc – Dật An", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/cai-bong-tram-mac.jpg" },
			{ bookName: "Án Mạng Trên Bến Thuyền - Paula Hawkins", categories: ["Huyền Ảo", "Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/an-mang-tren-ben-thuyen.jpg" },
			{ bookName: "Dưới Cánh Xương Tàn - Kristen Perrin", categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ho-so-castle-knoll-1-duoi-canh-xuong-tan.jpg" },
			{ bookName: "Vật Chứng Mất Tích - David Baldacci", categories: ["Hiện Đại", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vat-chung-mat-tich.jpg" },
			{ bookName: "Điểm Đoạt Mạng – Ngô Hiểu Lạc - Ngô Hiểu Lạc", categories: ["Kinh Dị", "Viễn Tưởng", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/diem-doat-mang.jpg" },
			{ bookName: "Kỳ Án Pháp Y 2: Truy Tìm Bằng Chứng – Lời Thì Thầm Của Tử Thi - Lục Ngoạn", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ky-an-phap-y-tap-2-truy-tim-bang-chung-loi-thi-tham-cua-tu-thi.jpg" },
			{ bookName: "Án Mạng Vùng Lưỡng Hà - Agatha Christie", categories: ["Kinh Dị", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/an-mang-vung-luong-ha.jpg" },
			{ bookName: "Hõm Chết – David Baldacci", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/hom-chet.jpg" },
			{ bookName: "Ngôi Nhà Muôn Cánh Cửa - Tan Twan Eng", categories: ["Lịch Sử", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ngoi-nha-muon-canh-cua.jpg" },
			{ bookName: "Báo Thù – Mười Một Câu Chuyện Tăm Tối - Ogawa Yoko", categories: ["Hiện Đại", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Truyện Ngắn"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bao-thu-muoi-mot-cau-chuyen-tam-toi.jpg" },
			{ bookName: "Tàng Long Quyết - Thân Thị Sơn Nhân", categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám", "Viễn Tưởng"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tang-long-quyet.jpg" },
			{ bookName: "Truy Đuổi Khói Tuyết - Higashino Keigo", categories: ["Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/truy-duoi-khoi-tuyet.jpg" },
			{ bookName: "Vũ Điệu Cuồng Phong - Higashino Keigo", categories: ["Viễn Tưởng", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vu-dieu-cuong-phong.jpg" },
			{ bookName: "Sát Nhân Trong Chiếc Hộp Mắt Ma - Masahiro Imamura", categories: ["Kinh Dị", "Viễn Tưởng", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/sat-nhan-trong-chiec-hop-mat-ma.jpg" },
			{ bookName: "Đêm Định Mệnh Ở Barcelona - Cornell Woolrich", categories: ["Hiện Đại", "Kinh Dị", "Truyện Ngắn", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/dem-dinh-menh-o-barcelona.jpg" },
			{ bookName: "Kẻ Khác – Guillaume Musso", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "#", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ke-khac.jpg" },
			{ bookName: "Phân Tích Hành Vi Phạm Tội - Moriarty K", categories: ["Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "https://adpvn.co/s/Vl3w5", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/phan-tich-hanh-vi-pham-toi-giai-ma-ky-an-the-gioi.jpg" },
			{ bookName: "Tấm Gương Nứt Vỡ - Agatha Christie", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "https://adpvn.co/s/eqkJR", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tam-guong-nut-vo.jpg" },
			{ bookName: "Quỷ Tiết – Hồng Nương Tử", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "https://adpvn.co/s/4Q5D2", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/quy-tiet.jpg" },
			{ bookName: "Bảy Ngày Chờ Chết - Holly Jackson", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "https://adpvn.co/s/V0gd5", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bay-ngay-cho-chet.jpg" },
			{ bookName: "Ma Trùng - Dị Thể – Chan Ho-Kei", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Tâm Lý Học"], downloadLink: "#", buyLink: "https://adpvn.co/s/Vmvg7", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ma-trung.jpg" },
			{ bookName: "Ván Cược – Oh Yoon-Hee", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4Lr7Y", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/van-cuoc.jpg" },
			{ bookName: "Thám Tử Thứ Tám - Alex Pavesi", categories: ["Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/eno2L", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tham-tu-thu-tam.jpg" },
			{ bookName: "Chết Chùm – Donald Goines", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "https://adpvn.co/s/VpoaW", buyLink: "https://adpvn.co/s/V9oQM", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/chet-chum.jpg" },
			{ bookName: "Bù Nhìn – Kim Lăng Vân", categories: ["Kinh Dị", "Tâm Lý Học", "Tiên Hiệp", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/VJd77", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bu-nhin.jpg" },
			{ bookName: "Bảy Ngày Phán Quyết - Kōtarō Isaka", categories: ["Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4ajmq", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bay-ngay-phan-quyet.jpg" },
			{ bookName: "Rượu Độc – Higashino Keigo", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám", "Tâm Lý Học"], downloadLink: "#", buyLink: "https://adpvn.co/s/Vd5qw", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ruou-doc.jpg" },
			{ bookName: "Két “Xác” – Hideo Yokoyama", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/N2dJB", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ket-xac.jpg" },
			{ bookName: "Ác Não – Long Vĩ Bình", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/VvQ1O", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ac-nao.jpg" },
            { bookName: "Kéo Búa Bao – Alice Feeney", categories: ["Phiêu Lưu", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/NgaRp", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/keo-bua-bao.jpg" },
			{ bookName: "Danh Sách Trả Thù - Jack Carr", categories: ["Phiêu Lưu", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/Vwa0p", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/danh-sach-tra-thu.jpg" },
			{ bookName: "Vương Quốc Tội Lỗi - Jo Nesbø", categories: ["Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/NEqBX", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/vuong-quoc-toi-loi.jpg" },
			{ bookName: "Không Thành Kế – Hô Diên Vân", categories: ["Hiện Đại", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/VM27d", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/khong-thanh-ke.jpg" },
			{ bookName: "Bạn Trai – Freida McFadden", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4xRQk", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ban-trai.jpg" },
			{ bookName: "Người Phụ Nữ Lừa Cả Thế Giới - Beau Donelly, Nick Toscano", categories: ["Hiện Thực", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4yRq0", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/nguoi-phu-nu-lua-ca-the-gioi.jpg" },
			{ bookName: "Kỳ Án Bảy Mặt Đồng Hồ - Agatha Christie", categories: ["Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4PO7p", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ky-an-bay-mat-dong-ho.jpg" },
			{ bookName: "Bí Mật Của Thiên Thần - Guillaume Musso", categories: ["Tiểu Thuyết", "Trinh Thám", "Văn Hóa - Xã Hội"], downloadLink: "#", buyLink: "https://adpvn.co/s/NDK7J", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/bi-mat-cua-thien-than.jpg" },
			{ bookName: "Oan Hồn Băng Cốc - A Sửu", categories: ["Huyền Ảo", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/eojYR", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/oan-hon-bang-coc.jpg" },
			{ bookName: "Hợp Táng Án - Na Đa", categories: ["Kinh Dị", "Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4kKE8", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/hop-tang-an.jpg" },
			{ bookName: "Tuyển Tập Truyện Ma - Chiếc Xe Màu Tím - Edith Nesbit", categories: ["Kinh Dị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "#", buyLink: "https://adpvn.co/s/4X3gq", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/chiec-xe-mau-tim-tuyen-tap-truyen-ma-edith-nesbit.jpg" },
			{ bookName: "Tiếng Thét Dưới Băng - Camilla Grebe", categories: ["Tâm Lý Học", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "https://1024terabox.com/s/15kls_Of8iUggMS_7PGkpmQ", buyLink: "https://adpvn.co/s/erJ9o", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/tieng-thet-duoi-bang-camilla-grebe-26-nguyen-thi-tuoi-dich.jpg" },
			{ bookName: "Khúc Xương Biết Hát - R. Austin Freeman", categories: ["Tiểu Thuyết", "Trinh Thám"], downloadLink: "https://1024terabox.com/s/1GnnZ-wd-ca-LQyi8CQlX5A", buyLink: "https://adpvn.co/s/eGK7K", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/khuc-xuong-biet-hat-r-austin-freeman-26-xuan-sinh-dich.jpg" },
			{ bookName: "Kẻ Chủ Mưu - Shari Lapena", categories: ["Kinh Dị", "Truyện Ngắn", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "https://1024terabox.com/s/1Reh8GCuKFgOqSO92l6rNgg", buyLink: "https://adpvn.co/s/4Oa79", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ke-chu-muu-shari-lapena-26-orkid-dich.jpg" },
			{ bookName: "Cô Gái Đến Từ Milan - Giorgio Scerbanenco", categories: ["Hiện Đại", "Hiện Thực", "Phiêu Lưu", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "https://1024terabox.com/s/1j0k7wf9pgE0Idmsr1sRItg", buyLink: "https://adpvn.co/s/Vbp0P", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/co-gai-den-tu-milan-giorgio-scerbanenco-26-mai-trang-dich.jpg" },
			{ bookName: "Bàn Tay Đen - Arthur B. Reeve", categories: ["Hiện Đại", "Hiện Thực", "Kinh Dị", "Tiểu Thuyết", "Trinh Thám"], downloadLink: "https://1024terabox.com/s/1SvpE2GdBL8ZgDD56ZdAtew", buyLink: "https://adpvn.co/s/VWBdb", imageLink: "https://ebookvie.com/wp-content/uploads/2025/10/ban-tay-den-arthur-b-reeve-26-phi-yen-dich.jpg" },
			{ bookName: "#", categories: ["#", "#", "#", "#"], downloadLink: "#", buyLink: "#", imageLink: "#" }
        ];

        let currentPage = 1;
        const BOOKS_PER_PAGE = 20;
        let currentFilter = '';
        let currentSearchTerm = '';
        
        // Cờ để ngăn việc gọi API TTS liên tục
        let isReading = false;

        /**
         * Mở liên kết tải sách trong một tab mới.
         * @param {string} downloadLink Link tải sách.
         */
        function openBookDownload(downloadLink) {
            // Chỉ mở duy nhất Link Tải Sách
            window.open(downloadLink, '_blank');
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
            document.getElementById('current-filter-text').textContent = 'Lọc Theo Thể Loại';

            // Render lại sách với trạng thái mặc định
            renderBooks();

            // Cuộn lên đầu trang
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


        /**
         * Trích xuất và trả về danh sách các thể loại duy nhất, sắp xếp A-Z.
         * @returns {string[]} Mảng các thể loại duy nhất.
         */
        function extractCategories() {
            const categories = new Set();
            mockBookData.forEach(book => {
                book.categories.forEach(cat => categories.add(cat));
            });
            return Array.from(categories).sort();
        }

        /**
         * Cập nhật danh sách thể loại vào dropdown lọc trong nội dung chính (không phải menu header).
         */
        function populateCategories() {
            const categories = extractCategories();
            // Cần lấy thẻ cha của nút "Tất Cả Sách" để thêm nút mới
            const filterContainer = document.getElementById('category-filter-dropdown').querySelector('.py-1');

            // Xóa tất cả các nút lọc trừ nút đầu tiên (Tất Cả Sách) trong Dropdown Lọc Sách
            while (filterContainer.children.length > 1) {
                filterContainer.removeChild(filterContainer.lastChild);
            }
            
            // NOTE: Logic cập nhật Menu header và Mobile Menu đã được loại bỏ theo yêu cầu của người dùng.

            categories.forEach(cat => {
                // Chỉ cập nhật Dropdown Lọc Sách (trong main content)
                const filterButton = `<button onclick="applyFilter('${cat}')" class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">${cat}</button>`;
                filterContainer.innerHTML += filterButton;
            });
        }

        /**
         * Áp dụng bộ lọc thể loại và render lại sách.
         * @param {string} category Tên thể loại cần lọc.
         */
        function applyFilter(category) {
            currentFilter = category;
            currentPage = 1; // Reset về trang 1 khi lọc
            document.getElementById('current-filter-text').textContent = category || 'Lọc Theo Thể Loại';
            document.getElementById('category-filter-dropdown').classList.add('hidden');
            // Đảm bảo thanh tìm kiếm không bị ghi đè, chỉ reset nếu đang lọc từ HOME/LOGO
            if (!currentSearchTerm) {
                document.getElementById('search-input').value = '';
            }
            renderBooks();
        }

        /**
         * Xử lý tìm kiếm và lọc kết hợp, sau đó render lại sách.
         */
        function handleFilter() {
            currentSearchTerm = document.getElementById('search-input').value.toLowerCase();
            currentPage = 1; // Reset về trang 1 khi tìm kiếm
            renderBooks();
        }
        
        // Hàm để hiển thị trạng thái loading trên card cụ thể (Chỉ còn dùng cho TTS)
        function setLoadingState(bookName, isLoading) {
            const idPrefix = 'tts-loading-';
            const buttonIdPrefix = 'tts-btn-';
            const loadingElement = document.getElementById(idPrefix + bookName.replace(/\s/g, '-'));
            const buttonElement = document.getElementById(buttonIdPrefix + bookName.replace(/\s/g, '-'));

            if (loadingElement) {
                loadingElement.classList.toggle('hidden', !isLoading);
            }
            if (buttonElement) {
                buttonElement.disabled = isLoading;
                if(isLoading) {
                    buttonElement.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    buttonElement.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            }
        }
        
        /**
         * Tương tác với Gemini TTS API để đọc tên sách.
         * @param {string} bookName Tên sách cần đọc.
         */
        async function readBookTitle(bookName) {
            if (isReading) return;
            isReading = true;
            setLoadingState(bookName, true);

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
            const prompt = `Nói một cách vui vẻ và rõ ràng: "${bookName}" của bạn.`;
            
            const payload = {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    responseModalities: ["AUDIO"],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: { voiceName: "Kore" } // Giọng tiếng Việt phù hợp
                        }
                    }
                },
            };

            try {
                const response = await fetchWithRetry(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                const result = await response.json();
                const part = result?.candidates?.[0]?.content?.parts?.[0];
                const audioData = part?.inlineData?.data;
                const mimeType = part?.inlineData?.mimeType;

                if (audioData && mimeType && mimeType.startsWith("audio/L16")) {
                    const sampleRateMatch = mimeType.match(/rate=(\d+)/);
                    const sampleRate = sampleRateMatch ? parseInt(sampleRateMatch[1], 10) : 24000;
                    
                    const pcmData = base64ToArrayBuffer(audioData);
                    // API trả về signed PCM16 audio data.
                    const pcm16 = new Int16Array(pcmData);
                    const wavBlob = pcmToWav(pcm16, sampleRate);
                    const audioUrl = URL.createObjectURL(wavBlob);
                    
                    // Phát audio
                    const audio = new Audio(audioUrl);
                    audio.play();
                    
                    audio.onended = () => {
                        isReading = false;
                        setLoadingState(bookName, false);
                    };
                    audio.onerror = () => {
                        console.error("Lỗi khi phát audio.");
                        isReading = false;
                        setLoadingState(bookName, false);
                    };
                } else {
                    console.error("Dữ liệu audio không hợp lệ hoặc bị thiếu.");
                }

            } catch (error) {
                console.error("Lỗi khi gọi API Gemini (TTS):", error);
                isReading = false;
            } finally {
                // Nếu có lỗi, đảm bảo loading state được tắt (trừ khi audio đang phát)
                if (!isReading) {
                    setLoadingState(bookName, false);
                }
            }
        }


        /**
         * Render danh sách sách, bao gồm sắp xếp A-Z, lọc, tìm kiếm và phân trang.
         */
        function renderBooks() {
            let filteredBooks = mockBookData;

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
            filteredBooks.sort((a, b) => a.bookName.localeCompare(b.bookName, 'vi', { sensitivity: 'base' }));

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
                const isUpdating = book.downloadLink.startsWith('#');
                const buttonText = isUpdating ? 'Đang Cập Nhật' : 'Tải Về';
                const buttonClass = isUpdating ? 
                    'bg-gray-400 cursor-not-allowed text-gray-700 opacity-80' : 
                    'bg-primary text-white hover:bg-secondary transition duration-150 transform hover:scale-[1.02] shadow-md active:scale-95';
                
                // Cập nhật: chỉ gọi openBookDownload với downloadLink
                const onClickAction = isUpdating ? 'disabled' : `onclick="openBookDownload('${book.downloadLink}')"`;
                
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
                        <!-- Tên sách và nút TTS -->
                        <div class="flex items-start justify-between">
                            <h3 class="text-lg font-semibold text-gray-800 line-clamp-2 mb-2 mr-2" title="${book.bookName}">${book.bookName}</h3>
                            <div class="flex-shrink-0 relative">
                                <button id="tts-btn-${bookNameId}" onclick="readBookTitle('${book.bookName}')" class="text-gray-500 hover:text-primary transition duration-150 p-1 rounded-full hover:bg-gray-100 focus:outline-none" title="Nghe tên sách">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.727M7 13a1 1 0 100-2 1 1 0 000 2zm12-2a1 1 0 100 2 1 1 0 000-2zM4 12H3"></path></svg>
                                </button>
                                <div id="tts-loading-${bookNameId}" class="absolute inset-0 flex items-center justify-center hidden bg-white bg-opacity-75 rounded-full">
                                    <svg class="animate-spin h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                </div>
                            </div>
                        </div>

                        <p class="text-xs text-gray-500 mb-3 line-clamp-1">
                             Thể loại: ${book.categories.join(', ')}
                        </p>
                        
                        <!-- Nút Mua Sách (Mới) -->
                        <a href="${book.buyLink}" target="_blank" class="block w-full text-center py-2 rounded-lg font-medium bg-accent text-white hover:bg-orange-600 transition duration-150 shadow-md mb-3 transform hover:scale-[1.02] active:scale-95">
                            Mua Sách
                        </a>

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
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        /**
         * Chuyển đến trang cụ thể.
         * @param {number} page Số trang.
         */
        function goToPage(page) {
            currentPage = page;
            renderBooks();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


        // --- Logic cho Modal Donate ---

        function openDonateModal() {
            document.getElementById('donate-modal').classList.remove('hidden');
            document.getElementById('donate-modal').classList.add('flex');
        }

        function closeDonateModal(event) {
            // Kiểm tra nếu click không phải là modal-content
            if (event && event.target.id !== 'donate-modal') return;

            document.getElementById('donate-modal').classList.add('hidden');
            document.getElementById('donate-modal').classList.remove('flex');
        }
        
        // --- Logic cho Dropdown Lọc và Mobile Menu ---
        
        document.addEventListener('DOMContentLoaded', () => {
            // Khởi tạo: chèn thể loại vào Dropdown Lọc và render sách lần đầu
            populateCategories();
            renderBooks();
            
            // 1. Toggle Dropdown Lọc (Filter Button) - Vẫn giữ lại ở khu vực tìm kiếm
            document.getElementById('category-filter-button').addEventListener('click', (e) => {
                e.stopPropagation(); // Ngăn chặn việc click button đóng ngay lập tức
                document.getElementById('category-filter-dropdown').classList.toggle('hidden');
            });

            // 2. Toggle Mobile Menu
            document.getElementById('mobile-menu-button').addEventListener('click', () => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
            });

            // 3. Đóng Dropdown Lọc khi click ra ngoài
            window.addEventListener('click', (e) => {
                // Đóng Dropdown Lọc
                const filterBtn = document.getElementById('category-filter-button');
                const filterDropdown = document.getElementById('category-filter-dropdown');
                if (!filterBtn.contains(e.target) && !filterDropdown.contains(e.target)) {
                    filterDropdown.classList.add('hidden');
                }
            });
        });