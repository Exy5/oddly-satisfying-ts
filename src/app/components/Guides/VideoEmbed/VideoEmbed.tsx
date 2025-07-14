import { videoEmbed } from './VideoEmbed.css';

export default function VideoEmbed({ url }: { url: string }) {
  return (
    <div className={videoEmbed}>
      <iframe
        src={url}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '420px', border: 'none', borderRadius: '1.2rem', background: 'transparent' }}
      />
    </div>
  );
}
