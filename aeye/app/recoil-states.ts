import { atom } from "recoil";

const searchQueryState = atom({
  key: "searchQueryState",
  default: "",
});

const memberState = atom<Member | null>({
  key: "memberState",
  default: null,
});

const selectedTagsState = atom<string[]>({
  key: "selectedTagsState",
  default: [],
});

export { searchQueryState, memberState, selectedTagsState };
