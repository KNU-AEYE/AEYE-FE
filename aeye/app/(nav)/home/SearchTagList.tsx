import { Chip, Stack } from "@mui/material";
import { selectedTagsState } from "@/app/recoil-states";
import { useRecoilState } from "recoil";

const tags = ["새 객체", "넘어짐", "화재", "자동차", "도로"];

export default function SearchTagList() {
  const [selectedTags, setSelectedTags] = useRecoilState(selectedTagsState);

  const handleChipClick = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };
  return (
    <Stack flexDirection="row" mb="15px">
      {tags.map((tag, index) => (
        <Chip
          label={tag}
          key={index}
          variant={selectedTags.includes(tag) ? "filled" : "outlined"}
          sx={{ margin: "0.5vh" }}
          color={selectedTags.includes(tag) ? "primary" : "default"}
          onClick={() => handleChipClick(tag)}
        />
      ))}
    </Stack>
  );
}
