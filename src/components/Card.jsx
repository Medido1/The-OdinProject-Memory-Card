export default function Card(
  {id, imgSrc, height, width, name}) 
  {
  
  return (
    <div className="card">
      <img 
        id={id}
        src={imgSrc}
        height={height}
        width={width}
        alt={name}
      />
    </div>
  )
}