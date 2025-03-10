import Cookies from "js-cookie";

export const config = {
  bookplusApi: "https://stg-core.bpapp.net",
  bannerImagesSrc: "https://stg-core.bpapp.net/Content/Images/Banner/Thumb",
  bookImagesSrc: "https://stg-core.bpapp.net/Content/Images/Book/Thumb",
  chapterImagesSrc:
    "https://stg-core.bpapp.net/Content/Images/BookChapter/Thumb",
  assetImagesSrc: "https://stg-core.bpapp.net/Content/Images/Asset/Thumb",
};

export const token = Cookies.get("authToken");
