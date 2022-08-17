import Gallery from "gallery";
import styled, { keyframes } from "styled-components";
interface IPanel {
  url: string;
  title: string;
  subtitle: string;
}
const items: IPanel[] = [
  {
    url: "https://i.picsum.photos/id/704/3840/2160.jpg?hmac=PDpUdSV0dVP6UC9DWBVaEuhnXwJOlTjWsV3pglJAq6E",
    title: "3igfyn4eg2",
    subtitle:
      "dcof5ispaqn3sah4v8faachqj4q1kguygmbkqojpkykjad82guamd6rf459nb4c1157ar0lk",
  },
  {
    url: "https://i.picsum.photos/id/30/3840/2160.jpg?hmac=3aRvMANY2VPtvQPLX4QanZy4hsfFmv2ogVH0byZALWg",
    title: "8sxskatyuc",
    subtitle:
      "d5twp3zip68oxg2jtwdxwgkrh2ra7mgsi6a5ohl03xgbcxo8lnaxu6nnzwr17f43c5gv4imm",
  },
  {
    url: "https://i.picsum.photos/id/340/3840/2160.jpg?hmac=YfhP3q8y3Tjne3Q2nsD1C1lLZ_ExYaw7won_DFSJR_Q",
    title: "udgepr4fng",
    subtitle:
      "6jnmfc2va7z1c3ca7so3wi91k4tq3zeg0d2a7kbtfje11pxbniqj21orwavnjq8e3pfdh5ka",
  },
  {
    url: "https://i.picsum.photos/id/408/3840/2160.jpg?hmac=O-nBIdwtYPy_G0PfkiyY7kAQgIr8z1I03sRC_8X_RRc",
    title: "6n8gduog6q",
    subtitle:
      "g7i6hxou9cf9muvi666hevtkbuo3c0amxh5di6bajfcv9kesh84tn4nbk3uhqwldel54zcll",
  },
  {
    url: "https://i.picsum.photos/id/769/3840/2160.jpg?hmac=DgM7Djtfmc8meBi_ReTWz47MzYhnTBwey2gcqQTmEZ0",
    title: "vkmsagw99s",
    subtitle:
      "a2afwsk3fj3jgnrxbvvk4pwrugxj95v4zeyrowo25jxg855icfb6t2ibgrml2uplk93zsf5x",
  },
  {
    url: "https://i.picsum.photos/id/1014/3840/2160.jpg?hmac=q2Ab0ZqyTfIcGO-673pha6cex3aFaobmJjWY32fOlx4",
    title: "p0hcrlfawg",
    subtitle:
      "xu8vfhi5vyx9fv92kfxyhcgmq4go14m01gi5mefebhd2pyhpu3n2439tp7dcirdofqgltusv",
  },
  // {
  //   url: "https://i.picsum.photos/id/1076/3840/2160.jpg?hmac=M_slgZdNvEO7aR1OAOO89j3yUYn3C2kzwzvPzaZ11Bw",
  //   title: "t6bvjla99j",
  //   subtitle:
  //     "zy0vwkxmh02i8jnbgvxryans9jaall26ye4z2000kgbva62qjp0tbbvqgf07awewwukdyu2i",
  // },
  // {
  //   url: "https://i.picsum.photos/id/326/3840/2160.jpg?hmac=aOm_WyeCYMQyJTlKjPtjhmilxnHmDcvTiaaCatySxL0",
  //   title: "hfzb8onu4d",
  //   subtitle:
  //     "6debtove4cdlfjpx50uayvxjmci0ge2lsg27byn1kerz93qzwyy626do75pcb84fxle4n0cb",
  // },
  // {
  //   url: "https://i.picsum.photos/id/1048/3840/2160.jpg?hmac=udetg4m78zRUg1G6p-FAAjibOzRcX0MbNtV5DY3xK7s",
  //   title: "c5x14cijd7",
  //   subtitle:
  //     "0bcirc7sj19a3hjk58hjs9mgkrb2kaby8lah89a45fifqs67o22opkb8oq8xc3aurq1egx75",
  // },
  // {
  //   url: "https://i.picsum.photos/id/732/3840/2160.jpg?hmac=g9-ioQDOzHuHDItzfCNlx3m8aCgK5X5NoFxxveHdtRE",
  //   title: "wxt39d2fsv",
  //   subtitle:
  //     "83ribjbrnxbjgvau9cxmcchm279ebns3q3ekwp5e2a0lfvox51ciymjkf44mbxqxwud570ld",
  // },
  // {
  //   url: "https://i.picsum.photos/id/692/3840/2160.jpg?hmac=U6RsRVnokZlqavTOVeEKc2834e-keuyHvtolZR_WTh8",
  //   title: "fiur5pywi4",
  //   subtitle:
  //     "8xfe7jnyxkiilqcpnzgu7gopx86393zvewnz5jjt2j38cbq9etre45s7lw2gqyd5k6ym0nah",
  // },
  // {
  //   url: "https://i.picsum.photos/id/904/3840/2160.jpg?hmac=2_1ninAUJhslV1Fi-dMyOIC0zIcaMt4Y26F3MKtem4Q",
  //   title: "qbmtftemtk",
  //   subtitle:
  //     "rdj6posxii1c2avt37ubwr09b5ofzlw45yilus5s424b1d02g28xk602leun96h1vxno7ssh",
  // },
  // {
  //   url: "https://i.picsum.photos/id/239/3840/2160.jpg?hmac=KNpOZB5SDRHmrX-MaNdtya9ovn2X5JAnBT4vUD9GQSI",
  //   title: "5oqki2bu86",
  //   subtitle:
  //     "jbwca6xfq5gnfd2q3ut1m6al9hwlxmqkdbi4gnejg625qqihrpo20t3ozj0td532tmoc181b",
  // },
  // {
  //   url: "https://i.picsum.photos/id/643/3840/2160.jpg?hmac=gUXjO71aZ3I-zcVqi3Js5kIkb-K1P0G66qmqAqrUHjY",
  //   title: "lo9i26cd1u",
  //   subtitle:
  //     "yz4q43rp51rd8tt3zkfea3qyal4lzc5ych2id13cw7guuk4pnrwv64fk2vkvgl29zu0ar40g",
  // },
  // {
  //   url: "https://i.picsum.photos/id/391/3840/2160.jpg?hmac=W0tjFezJ7_YuIswh_Iz8JzLKLk2hdIJVxJ_NUxJ-gDI",
  //   title: "ljlbhf86ku",
  //   subtitle:
  //     "081ne6y6o25p4zzolcy66tt6z425w1w8ts5xctefqhb1fevopc9n3uk342rfpioedeglsr9x",
  // },
  // {
  //   url: "https://i.picsum.photos/id/91/3840/2160.jpg?hmac=djbFhMbW1vMv4tW7zdqS4AVgAIQBwA9l2B0wCEHpZdw",
  //   title: "aksaikpdru",
  //   subtitle:
  //     "ism4yj7ysqahxvk4c3vohdcvug87ddo79zgqak0rvu19ub7rbktnv2ec7ug0x9rocm6z7ng8",
  // },
  // {
  //   url: "https://i.picsum.photos/id/544/3840/2160.jpg?hmac=JbDj45TW38fywJwqqEm8lYDMTXei_lNcPoooto4Xl-s",
  //   title: "d2ltntdoua",
  //   subtitle:
  //     "0do41p2xgvky9p8fun5po8tzd3h3z8693heohuoost9rnyz9hofhsw7mmy95az9tbewwg1ef",
  // },
  // {
  //   url: "https://i.picsum.photos/id/426/3840/2160.jpg?hmac=LdKms5oT2hYhX4pFIptEFftrqmsKylj2q5Ft9vFek8A",
  //   title: "iubra5qcj8",
  //   subtitle:
  //     "eig86yldbpvu0g12p5qlr8sckmksxp5n3iqxn0hboemz4kyaal6765vykiisg90468e0n37i",
  // },
  // {
  //   url: "https://i.picsum.photos/id/1001/3840/2160.jpg?hmac=m2La6EZU5mmJ5dgTch1GlElabfY7alU2MGhLrpKWSuo",
  //   title: "nw71p3t8ey",
  //   subtitle:
  //     "80tnyuqz6skwlqk2zzmflphx3afebnm3msp9urplvsodvbksbwmz3w84otcb7nv67p1pycww",
  // },
  // {
  //   url: "https://i.picsum.photos/id/532/3840/2160.jpg?hmac=gbhWgQaF-KDAD6SqGMAadVRHW9GeTyoHYw1_xkXaDNw",
  //   title: "0y9jcf6xu0",
  //   subtitle:
  //     "gwnfk6p1r4iaqxttbm24kfvngn53yilsiz2yvbzz2syeli2vvxzjh5deypos3kodi4mtzcz9",
  // },
  // {
  //   url: "https://i.picsum.photos/id/213/3840/2160.jpg?hmac=-UG5nuwKD5UlqsImoRQuj5EO6LF99wn-7-LB-kMH2lg",
  //   title: "k7tkv0kzg3",
  //   subtitle:
  //     "1gndcrmmpdmrqugg6igyacvttn1ej02izcy970wtxrncsiwf85e1yawt4poje4co9mknafea",
  // },
  // {
  //   url: "https://i.picsum.photos/id/569/3840/2160.jpg?hmac=U1s0Nonqjdhf53xCVs1reIh6mH6NHS1pqZKHdm9mHxc",
  //   title: "82mfgby3d6",
  //   subtitle:
  //     "trfodz5te8tcd4ccb5k6i2heduaqs19a0ny2tg0vl8zbt5u5oc5invfd6l4wn75j5e7bqhmb",
  // },
  // {
  //   url: "https://i.picsum.photos/id/758/3840/2160.jpg?hmac=YiUFDjOvw_gnt3DQ4wzy96bCf1_8AfLyPw2B4UGcZoo",
  //   title: "2r1uul48tx",
  //   subtitle:
  //     "d9ptb5fqy6hzw8o7mw38yi504hs8m2de1quzroiyyyei6fup3jfquf3ozg55ewzt8ou4tfxj",
  // },
  // {
  //   url: "https://i.picsum.photos/id/667/3840/2160.jpg?hmac=gDwKI3ED6Uzan2NvA_rPronazZmq9yfpq8IpLcqz-Ds",
  //   title: "l8zcnt5wgg",
  //   subtitle:
  //     "pjqxp7mirzvmwrmvuzlhiapyn9253hc6lrldz6bpo7mj1mepz72p1wt7zq8aez0ojt8ra2gg",
  // },
  // {
  //   url: "https://i.picsum.photos/id/195/3840/2160.jpg?hmac=dQDD3uG_TCffpOXP1zvJ_rinJLlNO8_UbJsqoadc0MI",
  //   title: "z8zt2bw49x",
  //   subtitle:
  //     "swyps1knmcxeybwiu9o0um3q6bl7ohz8x6gb6lfq9uvczoapggjqxlm3ij695aqvgoyo1vwi",
  // },
  // {
  //   url: "https://i.picsum.photos/id/499/3840/2160.jpg?hmac=K6O8mtQYEY5qo0lvos1vNyndVq6ZiWViqJrTlUFb_SA",
  //   title: "3uiq2yy95d",
  //   subtitle:
  //     "akujlrmex8jy7z4guu0x8mi63f13zv5teqojv0ocmyhaeptnkxrn2117yf2q5rza1uesnv5n",
  // },
  // {
  //   url: "https://i.picsum.photos/id/942/3840/2160.jpg?hmac=QM0ZjqJMfk1YWXQlV1WGYzp3EUGP6e4uFPCnr3REBRM",
  //   title: "mqgra75u7t",
  //   subtitle:
  //     "3myw37wjrw8iymt1qe5qoss3xxn1sxfd0fm7s54gboich9108u9now5gtyei8d3iy9tt7953",
  // },
  // {
  //   url: "https://i.picsum.photos/id/203/3840/2160.jpg?hmac=vLHZc-3bx1EK7NEXeCUuTKlrDUc6HBe21EYn3aY0rA8",
  //   title: "t9gp1jjxo3",
  //   subtitle:
  //     "2w8w38yrzl1duia1932d1ymqw6o080u1xn61assnow180qsaw8gb4ci93uvpokkdea716qs4",
  // },
  // {
  //   url: "https://i.picsum.photos/id/864/3840/2160.jpg?hmac=W-qrDf_YZ8gt3JyYM9SVemPcUC_WzUTObr6hEEvNxCk",
  //   title: "y9ury6a9of",
  //   subtitle:
  //     "wq4cat03pwvyckhk4co18rqhe8wl5v3p16lz92u4tbuymc9uwmcj9ir89rjem95x76m5o116",
  // },
  // {
  //   url: "https://i.picsum.photos/id/30/3840/2160.jpg?hmac=3aRvMANY2VPtvQPLX4QanZy4hsfFmv2ogVH0byZALWg",
  //   title: "e7bzirxq21",
  //   subtitle:
  //     "vip9rscwr2zu7w9q23t43e741ly4qhc9e3th648rhlkbytykn9mwnab1egmxb670w307pvuy",
  // },
];

function App() {
  return <Gallery time={15} panelWidth={600} panelHeight={300} items={items} />;
}

export default App;
export type { IPanel };
