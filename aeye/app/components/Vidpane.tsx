export default function Vidpane({ video }: { video: VideoDocument }) {
  return (
    <div>
      <video controls>
        <source src={video.content} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.id}</p>
    </div>
  );
}
