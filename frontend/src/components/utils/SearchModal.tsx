import { useState } from "react";
import { studio } from "../../types";
import Modal from "./Modal";
import api from "../../api";
import StudioList from "../studio/StudioList";

const SearchModal = ({ showSearchBox, setShowSearchBox }: any) => {
  const [studios, setStudios] = useState<studio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudios = async (value: string) => {
    setLoading(true);
    try {
      const response = await api.get(`studio/api/v1/all/?name=${value}`);
      setStudios(response.data);
      setLoading(false);
    } catch (error: any) {
      setError(error?.message);
    }
  };

  const handleSearch = async (e: any) => {
    const { value } = e.target;
    if (value !== "") {
      fetchStudios(value);
    }
  };

  return (
    <Modal showModal={showSearchBox} setShowModal={setShowSearchBox}>
      {showSearchBox && (
        <div className="p-4 rounded-lg bg-white w-[96vw] lg:w-[50vw] h-[60vh] lg:h-[80vh] overflow-y-scroll">
          <div className="relative">
            <input
              id="search-input"
              className="w-full h-[40px] lg:h-[64px] bg-[#FAFBFB] border border-[#D2D5D8] rounded-md px-8 text-sm text-[#8C9196] outline-none"
              type="text"
              placeholder="Search products"
              onChange={handleSearch}
            />
          </div>

          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{}</p>}

          <div>{studios && <StudioList studios={studios} />}</div>
          {studios.length === 0 && (
            <p className="text-center mt-4">
              There is no studios with this name
            </p>
          )}
        </div>
      )}
    </Modal>
  );
};

export default SearchModal;
