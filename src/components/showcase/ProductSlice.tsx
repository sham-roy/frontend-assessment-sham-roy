import Image from 'next/image'
import { Sneaker } from '@/data/sneakers'

type SliceState = 'neutral' | 'active' | 'inactive'

interface ProductSliceProps {
  sneaker: Sneaker
  state: SliceState
  onHover: () => void
}

const ProductSlice = ({ sneaker, state, onHover }: ProductSliceProps) => {
  const textPositionClass =
    state === 'active' ? 'top-[82%]' : 'top-1/2 -translate-y-1/2'

  const flexGrowClass = {
    neutral: 'md:flex-grow-[1]',
    active: 'md:flex-grow-[2.5]',
    inactive: 'md:flex-grow-[0.8]'
  }[state]

  const imageSizeClass = {
    neutral: 'w-[330px] md:w-[clamp(0px,32.292vw,465px)] h-[230px]',
    active: 'w-[330px] md:w-[clamp(0px,47.153vw,679px)] h-[336px]',
    inactive: 'w-[330px] md:w-[clamp(0px,15.139vw,218px)] h-[108px]'
  }[state]

  // 2. TEXT STYLE: Manages layering, opacity, and font style.
  const textStyleClass = {
    neutral: 'z-10 font-normal text-[50px] md:text-[clamp(0px,5.556vw,80px)]',
    active: 'z-30 font-bold text-[50px] md:text-[clamp(0px,9.028vw,130px)]',
    inactive: 'z-10 font-normal text-[50px] md:text-[clamp(0px,3.472vw,50px)]'
  }[state]

  const imageRotationClass = {
    neutral: 'rotate-330',
    active: 'rotate-340',
    inactive: 'rotate-330'
  }[state]

  return (
    <div
      className={`
                relative h-full w-full md:w-auto
                ${flexGrowClass} ${sneaker.bgColor} 
                transition-all duration-500 ease-in-out
                flex items-center justify-center
                overflow-hidden cursor-pointer
            `}
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      role='button'
      aria-label={`View ${sneaker.brand} details`}
    >
      <div className='relative w-full h-full [perspective:1000px]'>

        <div
          className={`
            absolute top-1/2 left-1/2
            transition-all duration-500 ease-in-out z-20
            transform-style-preserve-3d
            -translate-x-1/2 -translate-y-1/2 
            ${imageSizeClass} 
            ${imageRotationClass} 
          `}
        >
          <Image
            src={sneaker.imageSrc}
            alt={sneaker.brand}
            fill
            style={{ objectFit: 'contain' }}
            priority={true}
            sizes='(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw'
          />

        </div>

        <h2
          className={`
            absolute left-1/2 -translate-x-1/2
            w-full text-center
            transition-all duration-500 ease-in-out
            ${sneaker.textColor}
            ${textPositionClass}
            ${textStyleClass}
            tracking-tighter leading-none select-none
          `}
        >
          {sneaker.brand}
        </h2>

      </div>
    </div>
  )
}

export default ProductSlice
