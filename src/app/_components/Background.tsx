import Image from 'next/image';

const Background = () => {
  return (
    <Image
      priority
      alt="blackboard"
      src="/images/blackboard.png"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1
      }}
    />
  );
};

export default Background;
