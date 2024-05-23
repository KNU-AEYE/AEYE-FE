import SearchIcon from "@mui/icons-material/Search";
import { useRecoilState } from "recoil";
import { searchQueryState } from "@/app/recoil-states";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/app/(nav)/home/styleSearch";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={handleInputChange}
      />
    </Search>
  );
}
