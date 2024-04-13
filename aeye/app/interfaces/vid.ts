interface VideoDocument {
  id: number;
  content: string;
  time: string;
  videoId: number;
}

interface Vidarr {
  videoDocuments: VideoDocument[];
  page: number;
}
