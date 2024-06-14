import React from 'react'
import Image from 'next/image'

interface CardDukunganProps {
  src: string;
  alt: string;
  width: number;
}
export const CardDukungan: React.FC<CardDukunganProps> = (props) =>{
  const { src, alt, width } = props;
  return (
    <div className='h-auto'>
      <Image src={src} alt={alt} width={width} height={width} />
    </div>
  )
}
