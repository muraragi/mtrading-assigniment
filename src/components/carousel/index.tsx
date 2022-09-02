import './index.css'

type CarouselProps = {
  numberOfItems: number
  activeItem: number
  onItemClick: (item: number) => void
}

export function Carousel({
  numberOfItems,
  activeItem,
  onItemClick
}: CarouselProps) {
  return (
    <div className="carousel">
      {Array.from(Array(numberOfItems).keys()).map((_, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === activeItem && 'carousel-item-active'
          }`}
          onClick={() => onItemClick(index)}
        ></div>
      ))}
    </div>
  )
}
