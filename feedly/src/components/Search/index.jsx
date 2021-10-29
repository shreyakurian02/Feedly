
import React, {
  useEffect,
  useState,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import { Input, Button } from "@bigbinary/neetoui/v2";
import { Search, Close } from "@bigbinary/neeto-icons";
import useDebounce from "../../common/hooks/useDebounce";
import { NewsContext } from "../../contexts/newsFeeder";
import SearchResult from "./SearchResult";


const SearchModal = ({ onClose, setShowSearchModal }) => {
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(searchWord, 1000);
  const [searchResult, setSearchResult] = useState([]);
  const news = useContext(NewsContext);
  const [searchRelatedData,setSearchRelatedData] = useState([])

  useEffect(async () => {
    setLoading(true);
    var searchRelatedArray = []
    var searchResultArray = []

    setSearchResult([]);
    setSearchRelatedData([])
    news.forEach((categoryData) => {
      var presentData = categoryData.data.filter((e) =>{
        if(e.title.toLowerCase().includes(debouncedSearch.toLowerCase()))
        searchRelatedArray.push(categoryData.data)
        return e.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      });
      searchResultArray.push(presentData)
    });


    searchResultArray=searchResultArray.flat()
    setSearchRelatedData(searchRelatedArray)
     setSearchResult(searchResultArray)

    if (searchWord === "") {
      setSearchResult([])
      setSearchRelatedData([])};
    setLoading(false);
  }, [debouncedSearch]);



  if (!setShowSearchModal) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70" />
      <div className="h-full align-middle">
        <div className="absolute -translate-x-5 top-1/3 w-1/2 border bg-white left-1/4 px-3 overflow-y-scroll -translate-y-2/4 ">
          <Input
            className="translate-x-5 bg-gray-100"
            nakedInput={true}
            size="large"
            className="w-full"
            prefix={<Search size={16} />}
            suffix={
              <Button
                style="icon"
                icon={() => <Close size={18} />}
                onClick={onClose}
              />
            }
            onChange={(event) => setSearchWord(event.target.value)}
          />
          {searchResult.length > 0 && (
            <SearchResult searchResult={searchResult} searchRelatedData={searchRelatedData} setShowSearchModal={setShowSearchModal}/>
          )}
        </div>
        </div>
        </>,
    document.getElementById("portal")
  );
};
export default SearchModal;

