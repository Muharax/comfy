import './homepage.css';
import HeaderSection from '../../components/header/HeaderSection';
import TopTrending from '../../components/topTrending/TopTrending';
import BrandCategory from '../../components/brandCategory/BrandCategory';
import HomeCategory from '../../components/homeCategory/HomeCategory';
import HomeServices from '../../components/homeServices/HomeServices';
import BrandSlider from '../../components/brandSlider/BrandSlider';
import InstaPosts from '../../components/instaPosts/InstaPosts';
import FooterSection from '../../components/footer/FooterSection';

/*======================================*/
/*======================================*/
/*======================================*/

const HomePage = () => {
    return (
        <div className='homepage'>
            <HeaderSection />
            <TopTrending />
            <BrandCategory />
            <HomeCategory />
            <HomeServices />
            <BrandSlider />
            <InstaPosts />
            <FooterSection />
        </div>
    )
}

export default HomePage;