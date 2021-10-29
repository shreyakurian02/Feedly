
import React, {
  useCallback,
  useMemo,
  useEffect,
  useState,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import { Input, Button } from "@bigbinary/neetoui/v2";
import { Search, Down, Close } from "@bigbinary/neeto-icons";
import useDebounce from "../../common/hooks/useDebounce";
import { NewsContext } from "../../contexts/newsFeeder";
import SearchResult from "./SearchResult";
import { Scrollable } from "@bigbinary/neetoui/layouts";
import { NewsFeeder } from "../../contexts/newsFeeder";
import { array } from "yup/lib/locale";

const SearchModal = ({ onClose, setShowSearchModal }) => {
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(searchWord, 1000);
  const [searchResult, setSearchResult] = useState([]);
  const news = useContext(NewsContext);
  const [dummy,setDummy] = useState([])
  // const [index,setindex] = useState([])

  useEffect(async () => {
    setLoading(true);
    let array = []
    let searcharray = []
    setSearchResult([]);
    setDummy([])
    news.forEach((categoryData) => {
      var presentData = categoryData.data.filter((e) => {
        if(e.title.toLowerCase().includes(debouncedSearch.toLowerCase()))
              array.push(categoryData.data)
        return e.title.toLowerCase().includes(debouncedSearch.toLowerCase());
        // categoryData.data
      });
      searcharray.push(presentData)
      // setSearchResult((pr) => [...pr, ...presentData]);

      // return  categoryData.data
      // setDummy(data=>[...data,categoryData.data])
    });


    searcharray=searcharray.flat()
    console.log(`sa-${searcharray.length}`)
    console.log(array.length)
     setDummy(array)
     setSearchResult(searcharray)
    if (searchWord == "") {
      setSearchResult([])
      setDummy([])};
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
            <SearchResult searchResult={searchResult} dummy={dummy} setShowSearchModal={setShowSearchModal}/>
          )}
        </div>
        </div>
        </>,
    document.getElementById("portal")
  );
};
export default SearchModal;

