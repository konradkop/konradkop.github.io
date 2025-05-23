import konradPhoto from './assets/konradPhoto-circle.png'; // Import the image
import cornellPhoto from './assets/cornell-circle.png';
import hsbcPhoto from './assets/hsbc-circle.png';
import mantraPhoto from './assets/mantrahealth-circle.png';
import americorpsPhoto from './assets/americorps-circle.png';
import baruchPhoto from './assets/baruchCollege-circle.png';
import swellPhoto from './assets/swell-circle.png';
import deliveryAppPhoto from './assets/delivery-app-circle-modified.png';

const defaultImageSize = 870;
const width = window.innerWidth * 0.99;
const height = window.innerHeight * 0.8;
let ballSize = Math.min(width, height) * 0.2;

let isMobile = false;

if (width < height) {
  isMobile = true;
}
//  if you decrease defaultImageSize it will be larger
//  if you multiply ballSize by 1.etc it will be larger

if (isMobile) {
  ballSize = ballSize * 0.8;
}

const labelsObj = {
  konrad: {
    name: 'Konrad',
    color: '#4444ff',
    imageSize: defaultImageSize,
    image: konradPhoto,
    ballSize: ballSize,
  },

  cornell: {
    name: 'Cornell',
    color: '#ff4444',
    imageSize: defaultImageSize,
    image: cornellPhoto,
    ballSize: ballSize * 1.25,
  },

  swell: {
    name: 'Swell',
    color: '#4444ff',
    imageSize: defaultImageSize,
    image: swellPhoto,
    ballSize: ballSize * 0.5,
  },
  hsbc: {
    name: 'HSBC',
    color: '#44ff44',
    imageSize: defaultImageSize,
    image: hsbcPhoto,
    ballSize: ballSize,
  },
  mantra: {
    name: 'Mantra',
    color: '#ff44ff',
    imageSize: defaultImageSize,
    image: mantraPhoto,
    ballSize: ballSize * 1.5,
  },
  americorps: {
    name: 'Americorps',
    color: '#ffff44',
    imageSize: defaultImageSize,
    image: americorpsPhoto,
    ballSize: ballSize,
  },
  baruch: {
    name: 'Baruch',
    color: '#4444ff',
    imageSize: defaultImageSize,
    image: baruchPhoto,
    ballSize: ballSize * 0.5,
  },
  deliveryApp: {
    name: 'DeliveryApp',
    color: '#4444ff',
    imageSize: defaultImageSize,
    image: deliveryAppPhoto,
    ballSize: ballSize * 0.75,
  },
};

export default labelsObj;
