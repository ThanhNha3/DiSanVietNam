import { useEffect, useState } from "react";
import Welcome from "../../components/Welcome/Welcome";

import ls1 from "../../assets/images/ls1.png";
import ls2 from "../../assets/images/ls2.jpg";
import ls3 from "../../assets/images/ls3.jpg";
import ls4 from "../../assets/images/ls4.jpeg";
import ls5 from "../../assets/images/ls5.jpg";
import ls6 from "../../assets/images/ls6.jpg";
import ls7 from "../../assets/images/ls7.webp";
import ls8 from "../../assets/images/ls8.jpg";
import ls9 from "../../assets/images/ls9.jpg";
import ls10 from "../../assets/images/ls10.jpg";
import ls11 from "../../assets/images/ls11.jpg";
import ls12 from "../../assets/images/ls12.jpg";

export default function HistoryPage() {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  return (
    <div className="bg-black flex flex-col  pb-10">
      <div
        className="flex flex-col items-center justify-center gap-8 relative"
        style={{ minHeight: "calc(100vh + 10px)" }}
      >
        <div
          id="backgroundImage"
          className="absolute"
          style={{
            inset: 0,
            zIndex: 1,
            backgroundImage: `url(${ls1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <Welcome region={"LỊCH SỬ"} />
      </div>
      <div
        id="myDiv"
        style={{ display: showDiv ? "flex" : "none" }}
        className="flex-col items-center justify-center gap-8"
      >
        <h1 className="text-center font-bold text-[25px] text-white pt-8">SỰ KIỆN</h1>
        <div className="container text-white">
          <p>
            Năm 1858, thực dân Pháp nổ súng tấn công Ðà Nẵng mở đầu cuộc chiến tranh xâm lược Việt Nam. Năm 1867, Pháp
            chiếm xong lục tỉnh Nam kỳ (Biên Hoà, Gia Định, Ðịnh Tường, Vĩnh Long, An Giang, Hà Tiên). Năm 1868, chính
            quyền Pháp bắt đầu cho thiết kế và xây dựng tại trung tâm thành phố Sài Gòn một Dinh thự làm nơi ở cho Thống
            đốc Nam kỳ, khi xây xong có tên gọi là Dinh Norodom.
          </p>
          <br />
          <p>
            Công trình do viên thống đốc Pháp tại miền Nam Việt Nam là La Grandière đặt viên đá đầu tiên khởi công xây
            dựng ngày 23/2/1868 và hoàn tất vào năm 1871. Từ 1887 – 1945, nhiều đời toàn quyền Pháp đã sử dụng dinh thự
            này làm nơi ở và làm việc trong suốt thời kỳ xâm lược Ðông Dương.
          </p>
        </div>
        <div className="container gap-4 flex justify-between w-full">
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls2}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls3}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls4}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
        <div className="container text-white">
          <p>
            Ngày 09/3/1945, phát xít Nhật đảo chính Pháp, độc chiếm Ðông Dương, Dinh Norodom là nơi làm việc của chính
            quyền Nhật ở Việt Nam.
          </p>
          <br />
          <p>
            Tháng 9/1945, Nhật thất bại trong chiến tranh thế giới thứ II, Pháp trở lại chiếm Nam Bộ, Dinh Norodom là
            trụ sở làm việc của bộ máy chiến tranh xâm lược của Pháp ở Việt Nam.
          </p>
          <br />
          <p>
            Ngày 07/5/1954, thực dân Pháp thất bại nặng nề trong chiến dịch Ðiện Biên Phủ buộc phải ký Hiệp định Gienève
            và rút khỏi Việt Nam. Mỹ tìm cách nhảy vào thực hiện ý đồ xâm chiếm miền Nam, Việt Nam tạm thời bị chia cắt
            thành 2 miền, miền Bắc là Việt Nam Dân chủ Cộng hòa, còn miền Nam là Quốc gia Việt Nam.
          </p>
          <br />
          <p>
            Ngày 07/9/1954, Dinh Norodom được bàn giao giữa đại diện chính phủ Pháp, Ðại tướng Paul Ely với đại diện
            chính quyền Sài Gòn Thủ tướng Ngô Ðình Diệm. Ngô Ðình Diệm đã quyết định đổi tên Dinh thành Dinh Ðộc Lập.
            Ngày 26/10/1955, Thủ tướng Ngô Đình Diệm đã truất phế Quốc trưởng Bảo Đại, thành lập chính quyền Việt Nam
            Cộng hòa và lên làm Tổng thống. Từ đó Dinh Ðộc Lập trở thành nơi ở của gia đình Ngô Ðình Diệm và là nơi
            chứng kiến nhiều biến cố chính trị. Ngô Ðình Diệm đã duy trì chế độ độc tài gia đình trị, dồn dân vào ấp
            chiến lược, thi hành luật 10/59, không những gây phẫn uất trong nhân dân mà còn gây ra sự bất bình trong nội
            các chính quyền Sài Gòn.
          </p>
          <br />
          <p>
            Ngày 27/02/1962, phe đảo chính đã cử hai viên phi công quân đội Sài Gòn là Nguyễn Văn Cử và Phạm Phú Quốc
            lái 2 máy bay AD6 ném bom làm sập toàn bộ phần chính cánh trái của Dinh. Do không thể khôi phục lại, Ngô
            Ðình Diệm đã cho san bằng và xây một dinh thự mới ngay trên nền đất cũ theo đồ án thiết kế của Kiến trúc sư
            Ngô Viết Thụ – người Việt Nam đầu tiên đạt giải Khôi nguyên La Mã.
          </p>
          <br />
          <p>
            Ngô Ðình Diệm quyết định khởi công xây dựng Dinh ngày 01/7/1962. Trong thời gian xây dựng Dinh mới, gia đình
            Ngô Ðình Diệm tạm thời chuyển sang sống tại Dinh Gia Long (hiện nay là Bảo tàng thành phố Hồ Chí Minh). Công
            trình đang xây dựng dở dang thì Ngô Ðình Diệm bị phe đảo chính giết chết ngày 02/11/1963. Do vậy, ngày khánh
            thành Dinh 31/10/1966, người chủ tọa buổi lễ là Nguyễn Văn Thiệu, Chủ tịch Uỷ ban lãnh đạo quốc gia. Ngô
            Ðình Diệm là người khởi xướng xây dựng Dinh Ðộc Lập nhưng ông ta không được sống ở đây một ngày nào, mà
            người có thời gian sống ở Dinh thự này lâu nhất là Tổng thống Đệ nhị Việt Nam Cộng hòa Nguyễn Văn Thiệu (từ
            tháng 10/1967 đến 21/4/1975).
          </p>
        </div>
        <div className="container flex justify-evenly w-full">
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls5}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls6}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
      </div>
      <div
        id="myDiv"
        style={{ display: showDiv ? "flex" : "none" }}
        className="flex flex-col items-center justify-center gap-8 mt-8"
      >
        <h1 className="text-center font-bold text-[25px] text-white pt-8">DẤU MỐC LỊCH SỬ</h1>
        <div className="container text-white">
          <p>Nhưng điều gì phải đến đã đến.</p>
          <br />
          <p>
            Bằng chiến dịch Hồ Chí Minh lịch sử, 10h45’ ngày 30/4/1975, xe tăng mang số hiệu 843 của quân giải phóng
            thuộc Ðại đội 4, Tiểu đoàn 1, Lữ đoàn xe tăng 203, Quân đoàn 2 dẫn đầu đội hình đã húc nghiêng cổng phụ của
            Dinh Ðộc Lập, tiếp đó xe tăng mang số hiệu 390 đã húc tung cổng chính tiến thẳng vào Dinh. 11h30’ cùng ngày,
            Trung úy Bùi Quang Thận – Ðại đội trưởng chỉ huy xe tăng 843 đã hạ lá cờ 3 sọc xuống, kéo lá cờ mặt trận dân
            tộc giải phóng miền Nam Việt Nam lên. Cờ phấp phới tung bay trên nóc Dinh, kết thúc 30 năm chiến tranh gian
            khổ và anh dũng của dân tộc Việt Nam. Cũng chính vào giờ phút này, Tổng thống cuối cùng của chế độ Việt Nam
            Cộng hòa là Dương Văn Minh cùng toàn bộ nội các của chính quyền Sài Gòn phải tuyên bố đầu hàng vô điều kiện
            chính quyền cách mạng. Dưới sự lãnh đạo của Ðảng Cộng sản Việt Nam, quân và dân ta đã thực hiện được ý
            nguyện của Chủ tịch Hồ Chí Minh: Nhân dân 2 miền Nam – Bắc sum họp một nhà. Tinh thần và ý chí của nhân dân
            Việt Nam là độc lập dân tộc và thống nhất đất nước đã toàn thắng.
          </p>
        </div>
        <div className="container gap-4 flex justify-between w-full">
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls7}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls8}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls9}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
      </div>
      <div
        id="myDiv"
        style={{ display: showDiv ? "flex" : "none" }}
        className="flex flex-col items-center justify-center gap-8 mt-8"
      >
        <h1 className="text-center font-bold text-[25px] text-white pt-8">Ý NGHĨA</h1>
        <div className="container text-white">
          <p>
            Có thể nói Dinh Độc Lập là một trong những "nhân chứng" lịch sử gắn liền với vô vàn sự kiện quan trọng của
            đất nước Việt Nam, hình ảnh người dân ca vang trong ngày 30/4/1975 đã nêu lên ý nghĩa về ngày đại thắng của
            cả một dân tộc bị áp bức hơn nghìn năm bởi các thế lực thù địch cả tứ phương, và hình ảnh lá cờ đất nước
            tung bay trên nóc nhà Dinh Độc Lập đã chính thức mở ra một thời đại mới, thời đại của thái bình dành cho dân
            tộc Việt Nam kiên cường bất khuất.
          </p>
        </div>
        <div className="container gap-4 flex justify-between w-full">
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls10}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls11}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={ls12}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
