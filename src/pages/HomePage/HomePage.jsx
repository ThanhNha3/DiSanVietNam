import { useEffect, useState } from "react";
import Welcome from "../../components/Welcome/Welcome";
import "./HomePage.css";

import hp15 from "../../assets/images/hp15.jpg";
import hp1 from "../../assets/images/hp1.jpg";
import hp2 from "../../assets/images/hp2.jpg";
import hp3 from "../../assets/images/hp3.jpeg";
import hp4 from "../../assets/images/hp4.jpg";
import hp5 from "../../assets/images/hp5.jpg";
import hp6 from "../../assets/images/hp6.jpg";
import hp7 from "../../assets/images/hp7.jpg";
import hp8 from "../../assets/images/hp8.jpg";
import hp9 from "../../assets/images/hp9.jpg";
import hp10 from "../../assets/images/hp10.jpg";
import hp11 from "../../assets/images/hp11.jpg";
import hp12 from "../../assets/images/hp12.jpg";
import hp13 from "../../assets/images/hp13.jpg";
import hp14 from "../../assets/images/hp13.jpg";

export default function HomePage() {
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
            backgroundImage: `url(${hp15})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <Welcome region={"DINH ĐỘC LẬP"} />
      </div>
      <div
        id="myDiv"
        style={{ display: showDiv ? "flex" : "none" }}
        className="flex-col items-center justify-center gap-8"
      >
        <h1 className="text-center font-bold text-[25px] text-white pt-8">Lịch sử hình thành</h1>
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
              src={hp1}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp2}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp3}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
        <div className="container text-white">
          <p>
            Ngày 07/9/1954, Dinh Norodom được bàn giao giữa đại diện chính phủ Pháp, Ðại tướng Paul Ely với đại diện
            chính quyền Sài Gòn Thủ tướng Ngô Ðình Diệm. Ngô Ðình Diệm đã quyết định đổi tên Dinh thành Dinh Ðộc Lập.
            Ngày 26/10/1955, Thủ tướng Ngô Đình Diệm đã truất phế Quốc trưởng Bảo Đại, thành lập chính quyền Việt Nam
            Cộng hòa và lên làm Tổng thống. Từ đó Dinh Ðộc Lập trở thành nơi ở của gia đình Ngô Ðình Diệm và là nơi
            chứng kiến nhiều biến cố chính trị.
          </p>
          <br />
        </div>
        <div className="container gap-4 flex justify-between w-full">
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp4}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp5}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp6}
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
        <h1 className="text-center font-bold text-[25px] text-white pt-8">Kiến trúc</h1>
        <div className="container text-white">
          <p>
            Dinh Ðộc Lập là một công trình kiến trúc độc đáo của Kiến trúc sư Ngô Viết Thụ. Dinh được khởi công xây dựng
            ngày 01/7/1962 và khánh thành vào ngày 31/10/1966.
          </p>
          <br />
          <p>
            Khi thiết kế Dinh Ðộc Lập, Kiến trúc sư Ngô Viết Thụ muốn tìm một ý nghĩa văn hóa cho công trình, nên mọi sự
            xếp đặt từ bên trong nội thất cho đến tiền diện bên ngoài, tất cả đều tượng trưng cho triết lý cổ truyền,
            nghi lễ Phương đông và cá tính của dân tộc. Kiến trúc sư Ngô Viết Thụ đã kết hợp hài hoà giữa nghệ thuật
            kiến trúc hiện đại với kiến trúc truyền thống Phương Ðông. Toàn thể bình diện của Dinh làm thành hình chữ
            CÁT ( 吉 ) có nghĩa là tốt lành, may mắn; Tâm của Dinh là vị trí phòng Trình quốc thư; Lầu thượng là Tứ
            phương vô sự lầu hình chữ KHẨU ( 口 ) để đề cao giáo dục và tự do ngôn luận. Hình chữ KHẨU ( 口 ) có cột cờ
            chính giữa sổ dọc tạo thành hình chữ TRUNG ( 中 ) như nhắc nhở muốn có dân chủ thì phải trung kiên. Nét gạch
            ngang được tạo bởi mái hiên lầu tứ phương, bao lơn danh dự và mái hiên lối vào tiền sảnh tạo thành hình chữ
            TAM ( 三 ), theo quan niệm dân chủ hữu tam viết nhân, viết minh, viết võ, ý mong muốn một đất nước hưng
            thịnh thì phải có những con người hội đủ 3 yếu tố Nhân, Minh, Võ. Ba nét gạch ngang này được nối liền nét sổ
            dọc tạo thành hình chữ VƯƠNG ( 王 ), trên có kỳ đài làm thành nét chấm tạo thành hình chữ CHỦ ( 主 ) tượng
            trưng cho chủ quyền đất nước. Mặt trước của dinh thự, toàn bộ bao lơn lầu 2 và lầu 3 kết hợp với mái hiên
            lối vào chính cùng 2 cột bọc gỗ phía dưới mái hiên tạo thành hình chữ HƯNG ( 興 ) ý cầu chúc cho nước nhà
            được hưng thịnh mãi.
          </p>
        </div>
        <div className="container gap-4 flex justify-between w-full">
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp7}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp8}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp9}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
        <div className="container text-white">
          <p>
            Khu nhà chính hình chữ T diện tích mặt bằng là 4.500m², cao 26m, nằm ở vị trí trung tâm của khu đất. Ðây
            từng là nơi ở và làm việc Tổng thống Việt Nam Cộng hòa. Khu này có 03 tầng lầu, 02 gác lửng, 01 sân thượng,
            01 tầng nền và tầng hầm. Tổng diện tích sử dụng là 20.000m² chia làm 95 phòng. Mỗi phòng có một chức năng
            riêng, kiến trúc và cách trang trí phù hợp với mục đích sử dụng của mỗi phòng. Sau 1975, khu nhà chính này
            tiếp tục được sử dụng một số phòng, còn lại để phục vụ du khách tham quan.
          </p>
          <br />
        </div>
        <div className="flex justify-evenly w-full">
          <div className="image-hover">
            <img
              style={{ width: "600px", height: "300px" }}
              src={hp10}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
        <div className="container text-white">
          <p>
            Ngoài các khu nhà trên, ở góc trái Dinh phía đường Nguyễn Thị Minh Khai còn có một nhà bát giác đường kính
            4m, xây trên một gò đất cao, xung quanh không xây tường, mái ngói cong cổ kính làm nơi hóng mát, thư giãn.
          </p>
          <br />
        </div>
        <div className="container gap-4 flex  w-full flex-wrap items-center justify-center">
          <div className="image-hover">
            <img
              style={{ width: "", height: "200px" }}
              src={hp11}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "", height: "200px" }}
              src={hp12}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp13}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
          <div className="image-hover">
            <img
              style={{ width: "300px", height: "200px" }}
              src={hp14}
              loading="lazy"
              alt="dinhnorom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
