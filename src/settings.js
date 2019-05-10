//default values
const space = 12; // Spacing
const font = 16; // Spacing

export const iText = {
  h1: {
    fontSize: 30,
  }
}

export const iFont = {
  XS: font / 3, //5.3
  SM: font / 2, //8
  AS: font, //16
  MD: font * 1.5, //24
  LG: font * 2, //32
  XL: font * 3, //48
  XXL: font * 4, // 64
  XXXL: font * 5, // 80
  XXXXL: font * 7 // 112
}

export const iSpace = {
  SS: space / 4, //3
  XS: space / 3, //4
  SM: space / 2, //6
  AS: space, //12
  MD: space * 1.5, //18
  LG: space * 2, //24
  XL: space * 3, //36
  XXL: space * 5, //60
  XXXL: space * 7 //84
}

export const iScreen = {
  xs: 360, // Medium mobile
  lg: 480, // Larger mobile
  xl: 1400,
  xxl: 1600,
}

export const iContain = {
  mobile: 420,
  tablet: 768,
  desktop: 960,
  largedesktop: 1080,
  xl: 1200,
  xxl: 1320
}

export const iColor = {
  // Colours
  greenlight: '#69bd45',
  greendark: '#256d5a',
  teal: '#71ced6',
  red: '#ff3e58',
  blue: '#2080ff',
  bluedark: '#0074be',
  bluelight: '#c8f0ff',
  yellow: '#ffcc00',
  pink: '#ff00bf',
  purple: '#7b0079',
  brown: '#7b553c',
  orange: '#f06421',
  // Greyscale
  white: '#ffffff',
  offwhite: '#f2f2f2',
  greylighter: '#e0e0e0',
  greylight: '#dfdfdf',
  grey: '#cbcbcb',
  greydark: '#989898',
  greydarker: '#565656',
  darkgrey: '#353639',
  offblack: '#1f2123',
  black: '#000000',
  // Social Medis
  socialfacebook: '#3b5999', // Dark Blue
  socialtwitter: '#55acee', // Light Blue
  socialreddit: '#ff4500', // Orange
  socialgoogleplus: '#db4437', // Red
  socialinstagram: '#4090db', // Blue
  socialpinterest: '#bd081c', // Red
  socialyoutube: '#e52d27', // Red
  sociallinkedin: '#0077B5', // Blue
  socialflickr: '#128fdc', // Blue
  socialsms: '#7d7d82', // Medium Grey
}

export function fade (color, percent) {
  return  color+
}