//top trending products images
import zunkelSchwarz_o from "../../src/assets/images/top trending/zunkelSchwarz-o.jpg";
import zunkelSchwarz_h from "../../src/assets/images/top trending/zunkelSchwarz-h.jpg";
import pillarDining_o from "../../src/assets/images/top trending/pillarDining-o.jpg";
import pillarDining_h from "../../src/assets/images/top trending/pillarDining-h.jpg";
import namasteVase_o from "../../src/assets/images/top trending/namasteVase-o.jpg";
import namasteVase_h from "../../src/assets/images/top trending/namasteVase-h.jpg";
import chairOak_o from "../../src/assets/images/top trending/chairOak-o.jpg";
import chairOak_h from "../../src/assets/images/top trending/chairOak-h.jpg";
import magsSofa_o from "../../src/assets/images/top trending/magsSofa-o.jpg";
import magsSofa_h from "../../src/assets/images/top trending/magsSofa-h.jpg";
import officeTable_o from "../../src/assets/images/top trending/officeTable-o.jpg";
import officeTable_h from "../../src/assets/images/top trending/officeTable-h.jpg";
import spinningPendant_o from "../../src/assets/images/top trending/spinningPendant-o.jpg";
import spinningPendant_h from "../../src/assets/images/top trending/spinningPendant-h.jpg";
import mundoSofa_o from "../../src/assets/images/top trending/mundoSofa-o.jpg";
import mundoSofa_h from "../../src/assets/images/top trending/mundoSofa-h.jpg";
import ampPendant_o from "../../src/assets/images/top trending/ampPendant-o.jpg";
import ampPendant_h from "../../src/assets/images/top trending/ampPendant-h.jpg";
import livingLamp_o from "../../src/assets/images/top trending/livingLamp-o.jpg";
import livingLamp_h from "../../src/assets/images/top trending/livingLamp-h.jpg";
import chesterSofa_o from "../../src/assets/images/top trending/chesterSofa-o.jpg";
import chesterSofa_h from "../../src/assets/images/top trending/chesterSofa-h.jpg";
import aeronChair_o from "../../src/assets/images/top trending/aeronChair-o.jpg";
import aeronChair_h from "../../src/assets/images/top trending/aeronChair-h.jpg";


// brands slider imags
import axios from "../../src/assets/images/brandSlider/axios.png";
import dark_universe from "../../src/assets/images/brandSlider/dark-universe.png";
import gitlab from "../../src/assets/images/brandSlider/gitlab.png";
import leo from "../../src/assets/images/brandSlider/leo.png";
import ra from "../../src/assets/images/brandSlider/ra.png";
import tidy from "../../src/assets/images/brandSlider/tidy.png";


// insta posts slider imags
import img1 from "../../src/assets/images/instaposts/1.jpg";
import img2 from "../../src/assets/images/instaposts/2.jpg";
import img3 from "../../src/assets/images/instaposts/3.jpg";
import img4 from "../../src/assets/images/instaposts/4.jpg";
import img5 from "../../src/assets/images/instaposts/5.jpg";
import img6 from "../../src/assets/images/instaposts/6.jpg";

/*======================================*/
/*======================================*/
/*======================================*/
//axios,ra,tidy,git lab,leo,dark universe
export const AllProductsItems = [
    {
        pId: 1,
        pName: "Zunkel Schwarz",
        pInitialImage: zunkelSchwarz_o,
        pHoverImage: zunkelSchwarz_h,
        pCategory: "chairs",
        pBrand: "ra",
        pPrice: "254",
        pSalePrice: "4",
        outOfStock: false
    },
    {
        pId: 2,
        pName: "Pillar Dining Table Round",
        pInitialImage: pillarDining_o,
        pHoverImage: pillarDining_h,
        pCategory: "tables",
        pBrand: "tidy",
        pPrice: "762",
        pSalePrice: "9",
        outOfStock: false
    },
    {
        pId: 3,
        pName: "Namaste Vase",
        pInitialImage: namasteVase_o,
        pHoverImage: namasteVase_h,
        pCategory: "decor",
        pBrand: "tidy",
        pPrice: "1385",
        pSalePrice: "",
        outOfStock: true
    },
    {
        pId: 4,
        pName: "Chair Oak Matt Lacquered",
        pInitialImage: chairOak_o,
        pHoverImage: chairOak_h,
        pCategory: "chairs",
        pBrand: "axios",
        pPrice: "188",
        pSalePrice: "",
        outOfStock: false
    },
    {
        pId: 5,
        pName: "Mags Sofa 2.5 Seater",
        pInitialImage: magsSofa_o,
        pHoverImage: magsSofa_h,
        pCategory: "sofas",
        pBrand: "leo",
        pPrice: "2143",
        pSalePrice: "13",
        outOfStock: false
    },
    {
        pId: 6,
        pName: "Office Table",
        pInitialImage: officeTable_o,
        pHoverImage: officeTable_h,
        pCategory: "tables",
        pBrand: "dark universe",
        pPrice: "455",
        pSalePrice: "",
        outOfStock: true
    },
    {
        pId: 7,
        pName: "Spinning pendant lamp",
        pInitialImage: spinningPendant_o,
        pHoverImage: spinningPendant_h,
        pCategory: "lighting",
        pBrand: "git lab",
        pPrice: "877",
        pSalePrice: "",
        outOfStock: false
    },
    {
        pId: 8,
        pName: "Mundo Sofa With Cushion",
        pInitialImage: mundoSofa_o,
        pHoverImage: mundoSofa_h,
        pCategory: "sofas",
        pBrand: "axios",
        pPrice: "987",
        pSalePrice: "",
        outOfStock: false
    },
    {
        pId: 9,
        pName: "Amp Pendant Light Large",
        pInitialImage: ampPendant_o,
        pHoverImage: ampPendant_h,
        pCategory: "lighting",
        pBrand: "git lab",
        pPrice: "469",
        pSalePrice: "8",
        outOfStock: false
    },
    {
        pId: 10,
        pName: "Living Lamp",
        pInitialImage: livingLamp_o,
        pHoverImage: livingLamp_h,
        pCategory: "lighting",
        pBrand: "dark universe",
        pPrice: "74",
        pSalePrice: "",
        outOfStock: false
    },
    {
        pId: 11,
        pName: "Chesterfield Sofa",
        pInitialImage: chesterSofa_o,
        pHoverImage: chesterSofa_h,
        pCategory: "sofas",
        pBrand: "dark universe",
        pPrice: "3788",
        pSalePrice: "",
        outOfStock: false
    },
    {
        pId: 12,
        pName: "Aeron Chair",
        pInitialImage: aeronChair_o,
        pHoverImage: aeronChair_h,
        pCategory: "chairs",
        pBrand: "leo",
        pPrice: "85",
        pSalePrice: "",
        outOfStock: false
    }
];

export const brandSliderImg = [
    {
        imgId: 1,
        brandImg: axios
    },
    {
        imgId: 2,
        brandImg: ra
    },
    {
        imgId: 3,
        brandImg: tidy
    },
    {
        imgId: 4,
        brandImg: gitlab
    },
    {
        imgId: 5,
        brandImg: leo
    },
    {
        imgId: 6,
        brandImg: dark_universe
    }
];

export const instaPostsImgs = [
    {
        instaPostId: 1,
        instaImg: img1
    },
    {
        instaPostId: 2,
        instaImg: img2
    },
    {
        instaPostId: 3,
        instaImg: img3
    },
    {
        instaPostId: 4,
        instaImg: img4
    },
    {
        instaPostId: 5,
        instaImg: img5
    },
    {
        instaPostId: 6,
        instaImg: img6
    },
];

export const faqData = [
    {
        faqId: 1,
        faqTitle: "WHY AN FAQ RESOURCE?",
        faqDesc: "Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages – most typically deeper blog pages and service pages closely related to the questions being resolved. Next, one of the most significant opportunities for impactful brand visibility within the search engine result pages (in-SERP) is targeting audience questions, wants, needs, and pain points."
    },
    {
        faqId: 2,
        faqTitle: "WIS THERE ANY LIMITATION ON THE QUANTITY OR AMOUNT OF ONLINE PURCHASE?",
        faqDesc: "No, there is no limit. The quantity that you can buy is depending on the available stock of the online purchase."
    },
    {
        faqId: 3,
        faqTitle: "HOW CAN I GET LARGE ITEMS HOME?",
        faqDesc: "Most Comfy products are flat-packed, making them easy to transport. The Comfy store offers (or will refer you to) a home delivery service if you prefer. Home delivery is not included in the product price."
    },
    {
        faqId: 4,
        faqTitle: "WHY ARE ITEMS SOMETIMES OUT OF STOCK?",
        faqDesc: "Every effort is made to maintain the availability of items shown in the catalogue, but due to popularity and supply issues, some products may not always be available. Generally, Comfy can estimate when a product should be back in stock. Because Comfy products are manufactured throughout the world, there are sometimes circumstances which can cause delivery delays"
    },
    {
        faqId: 5,
        faqTitle: "WHAT IF I WANT TO HAVE THE PRODUCTS ASSEMBLED?",
        faqDesc: "Comfy products are generally easy to assemble and require no special tools. If you prefer, most Comfy stores can refer you to a reputable, reasonably priced assembly company that can come to your home to assemble and install our products."
    },
    {
        faqId: 6,
        faqTitle: "IS THERE ANY LIMITATION ON THE QUANTITY OR AMOUNT OF ONLINE PURCHASE?",
        faqDesc: "No, there is no limit. The quantity that you can buy is depending on the available stock of the online purchase."
    },
    {
        faqId: 7,
        faqTitle: "WHY FAQ PAGES ARE A PRIORITY",
        faqDesc: "FAQ pages continue to be a priority area for SEO and digital marketing professionals. An FAQ page is one of the simplest ways to improve your site and help site visitors and users. Your FAQ section should be seen as a constantly expanding source of value provided to your audience. It is a place where their ever-changing and growing requirements are not only met but anticipated and exceeded frequently."
    },
    {
        faqId: 8,
        faqTitle: "WHAT IS THE COMFY BUSINESS IDEA?",
        faqDesc: "The Comfy business idea is: 'We shall offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them.'"
    },
    {
        faqId: 9,
        faqTitle: "HOW DOES COMFY APPROACH ENVIRONMENTAL ISSUES?",
        faqDesc: "We're working to create a better environment outdoors as well as indoors."
    }
]