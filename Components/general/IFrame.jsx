export default function IFrame({ link, borderRadius = 0 }) {
  return (
    <iframe
      height={"100%"}
      src={link}
      title="Wedding Live Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{ borderRadius: borderRadius }}
    />
  );
}
