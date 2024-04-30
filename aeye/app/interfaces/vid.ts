interface VideoResponseDto {
  id: number;
  title: string;
  content: string;
  thumbnailUri: string;
  videoUri: string;
  createdAt: string;
}

interface VideoDocument {
  id: number;
  content: string;
  time: string;
  videoResponseDto: VideoResponseDto;
}

interface Vidarr {
  videoDocuments: VideoDocument[];
  page: number;
}
