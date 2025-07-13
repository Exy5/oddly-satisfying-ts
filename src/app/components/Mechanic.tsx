import Image from 'next/image';
import * as styles from './Mechanic.css';

export default function Mechanic({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image?: string;
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{name}</h3>
      <p>{description}</p>
      {image && (
        <div className={styles.imageWrapper}>
            <Image
                src={image}
                alt={name}
                width={400}
                height={250}
                style={{ objectFit: 'cover' }} // Keeps aspect ratio
            />
        </div>
      )}
    </div>
  );
}
