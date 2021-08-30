import { toast } from "react-toastify";

const API_KEY = "22769263-58fdf689ff7727797c0ddae89";

const API = {
  async requestImages(search, page) {
    let data;
    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      data = await res.json();
    } catch (error) {
      console.error(error)
      toast.error("Server error");
    }
    return data;
  }
};

export default API;