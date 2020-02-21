import React from 'react';
import { Background } from 'react-imgix';
import { buildURL } from "react-imgix";
var ImgixClient = require('imgix-core-js');



export const HeroImage = () => <Background src="https://wizardondemand-s3.imgix.net/forest1.jpeg" className="hero-image">
  <h2>Imgix demo</h2>
</Background>