import { useEffect, useState } from "react";
import Welcome from "../../components/Welcome/Welcome";

import xua1 from "../../assets/images/xua1.jpg";
import xua2 from "../../assets/images/xua2.jpg";
import xua3 from "../../assets/images/xua3.jpg";
import xua4 from "../../assets/images/xua4.jpg";
import xua5 from "../../assets/images/xua5.jpg";
import xua6 from "../../assets/images/xua6.jpg";
import xua7 from "../../assets/images/xua7.jpg";
import xua8 from "../../assets/images/xua8.jpg";
import xua9 from "../../assets/images/xua9.jpg";
import xua10 from "../../assets/images/xua10.jpg";
import xua11 from "../../assets/images/xua11.jpg";
import xua12 from "../../assets/images/xua12.jpg";
import xua13 from "../../assets/images/xua13.jpg";
import xua14 from "../../assets/images/xua14.jpg";

import nay1 from "../../assets/images/nay1.jpg";
import nay2 from "../../assets/images/nay2.jpg";
import nay3 from "../../assets/images/nay3.jpg";
import nay4 from "../../assets/images/nay4.jpg";

const oldImages = [
  {
    id: 1,
    image: xua1,
    subImage: "Dinh Thống đốc Nam Kỳ lúc mới hoàn thành (khoảng 1875)",
  },
  {
    id: 2,
    image: xua2,
    subImage: "Dinh Toàn quyền Đông Dương (3/3/1950)",
  },
  {
    id: 3,
    image: xua3,
    subImage: "Dinh Độc Lập xưa (1955)",
  },
  {
    id: 4,
    image: xua4,
    subImage: "Dinh Độc lập xưa nhìn toàn cảnh từ trên cao",
  },
  {
    id: 5,
    image: xua5,
    subImage: "Nội thất Dinh Toàn Quyền Đông Dương xưa",
  },
  {
    id: 6,
    image: xua6,
    subImage: "Nội thất Dinh Toàn Quyền Đông Dương xưa",
  },
  {
    id: 7,
    image: xua7,
    subImage: "Dinh Độc Lập xưa (1955)",
  },
  {
    id: 8,
    image: xua9,
    subImage: "Dinh Độc Lập xưa (1961)",
  },
  {
    id: 9,
    image: xua8,
    subImage: "",
  },
  {
    id: 10,
    image: xua10,
    subImage: "Dinh Độc Lập lúc đang xây dựng (1964)",
  },
  {
    id: 11,
    image: xua11,
    subImage: "Dinh Độc Lập đang hoàn thành",
  },
  {
    id: 12,
    image: xua12,
    subImage: "Dinh Độc Lập (khoảng năm 1967-1968)",
  },
  {
    id: 13,
    image: xua13,
    subImage: "Đại lộ Thống Nhất xưa (nay là Đại lộ Lê Duẩn)",
  },
  {
    id: 14,
    image: xua14,
    subImage: "Phòng nội các, nơi diễn ra các cuộc họp của Hội đồng Tổng trưởng và Nội các Việt Nam Cộng hòa.",
  },
];

const newImages = [
  {
    id: 1,
    image: nay1,
    subImage: "",
  },
  {
    id: 2,
    image: nay2,
    subImage: "",
  },
  { id: 3, image: nay3, subImage: "" },
  {
    id: 4,
    image: nay4,
    subImage: "",
  },
];

export default function GalleryPage() {
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
    <div className="bg-black flex flex-col pb-10 items-center">
      <div
        className="flex flex-col items-center justify-center gap-8 relative"
        style={{ minHeight: "calc(100vh + 10px)" }}
      >
        <Welcome region={"MỘT SỐ HÌNH ẢNH"} />
      </div>
      <div
        id="myDiv"
        style={{ display: showDiv ? "flex" : "none" }}
        className="flex-col items-center justify-center gap-8 container"
      >
        <h1 className="text-center font-bold text-[25px] text-white pt-8">NGÀY XƯA</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {oldImages.map(image => {
            return (
              <div
                key={image.id}
                className="image-hover flex flex-col items-center "
              >
                <div className="overflow-hidden w-full">
                  <img
                    style={{ width: "100%", height: "200px" }}
                    src={image.image}
                    loading="lazy"
                    alt="dinhnorom"
                  />
                </div>
                <div className="sub-image text-white italic text-[14px] mt-4">{image.subImage}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="myDiv"
        style={{ display: showDiv ? "flex" : "none" }}
        className="flex-col items-center justify-center gap-8 container"
      >
        <h1 className="text-center font-bold text-[25px] text-white pt-8">NGÀY NAY</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {newImages.map(image => {
            return (
              <div
                key={image.id}
                className="image-hover flex flex-col items-center "
              >
                <div className="overflow-hidden w-full">
                  <img
                    style={{ width: "100%", height: "200px" }}
                    src={image.image}
                    loading="lazy"
                    alt="dinhnorom"
                  />
                </div>
                <div className="sub-image text-white italic text-[14px] mt-4">{image.subImage}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
