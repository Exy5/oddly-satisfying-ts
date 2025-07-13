export default function VideoEmbed({ url }: { url: string }) {
  return (
    <div className="my-6">
       <iframe
        src={url}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-lg border-none"
      />
    </div>
  );
}
