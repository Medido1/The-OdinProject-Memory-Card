export default function Card({imgSrc, height, width}) {
  return (
    <div className="card">
      <img 
        src={imgSrc}
        height={height}
        width={width}
      />
    </div>
  )
}