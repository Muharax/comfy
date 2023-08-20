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

export const topTrendingData = [
    {
        pId: 1,
        pName: "Zunkel Schwarz",
        pInitialImage: zunkelSchwarz_o,
        pHoverImage: zunkelSchwarz_h,
        pCategory: "chairs",
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
        pPrice: "455",
        pSalePrice: "",
        outOfStock: true
    },
    {
        pId: 7,
        pName: "Spinning pendant lamp",
        pInitialImage: spinningPendant_o,
        pHoverImage: spinningPendant_h,
        pCategory: "Lighting",
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
        pPrice: "987",
        pSalePrice: "",
        outOfStock: false
    },
    {
        pId: 9,
        pName: "Amp Pendant Light Large",
        pInitialImage: ampPendant_o,
        pHoverImage: ampPendant_h,
        pCategory: "Lighting",
        pPrice: "469",
        pSalePrice: "8",
        outOfStock: false
    },
    {
        pId: 10,
        pName: "Living Lamp",
        pInitialImage: livingLamp_o,
        pHoverImage: livingLamp_h,
        pCategory: "Lighting",
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
]