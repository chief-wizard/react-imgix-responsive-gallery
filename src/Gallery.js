import React from 'react';
import Imgix from 'react-imgix'

const images = [
  'forest1', 'forest2', 'forest3',
  'mountain1', 'mountain2', 'mountain3',
  'river1', 'river2', 'river3'
]

const buildURL = imagePath => `https://wizard-s3.imgix.net/${imagePath}.jpeg`

export const Gallery = () => <div className="gallery">
  {images.map(image => <Imgix
    sizes="calc(10% - 10px)"
    height="100%"
    src={buildURL(image)} key={image} />)}
</div>
