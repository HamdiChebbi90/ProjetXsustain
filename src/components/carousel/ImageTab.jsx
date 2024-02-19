import image1 from '../../assets/slider/1.png';
import image2 from '../../assets/slider/2.png';
import image3 from '../../assets/slider/3.png';

export const images = [image1, image2, image3]

const imageTab = (index) => images[index % images.length]

export default imageTab
