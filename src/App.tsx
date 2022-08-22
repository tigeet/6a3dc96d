import Row from "row";
import Panel from "panel";

interface IPanel {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Row speed={6}>
        {items2.map((item: IPanel) => (
          <Panel key={item.id} {...item} />
        ))}
      </Row>

      <Row speed={12} reverse gap={8}>
        {items1.map((item: IPanel) => (
          <Panel key={item.id} {...item} />
        ))}
      </Row>
      <Row speed={4} width={1100} gap={32}>
        {Array(10)
          .fill("")
          .map((v, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FFEAEE",
                display: "flex",
                width: "100px",
                height: "100px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              item {i}
            </div>
          ))}
      </Row>
    </div>
  );
}

export default App;

export type { IPanel };

const items1: IPanel[] = [
  {
    id: "8fadmi4oc0hqjhy98qbvohzntzbrxaav",
    url: "https://i.picsum.photos/id/375/700/700.jpg?hmac=6aWC-7je1o2zj5SqVjBaX4D1YxxVlCd6pYhIcHL4cts",
    title: "qiwpo0t1kc",
    subtitle:
      "yinvvr4tmpk2z45ne7, cu129narnmqy1 mmkfon kqb5iecixa25b3z, 2gl1zjdj7s0j877h",
    width: 526,
    height: 300,
  },
  {
    id: "7ub8k91gmz775jjz9u4nay0s1jpq6eub",
    url: "https://i.picsum.photos/id/871/700/700.jpg?hmac=9Li72HkQHg9-fSOQXTzUpSDjxQa74ubTG5O8PAkieyY",
    title: "6xlnp78roh",
    subtitle:
      "llv, gteb7ooq7tprqylb sn31nkblks79sm3x5833l 9cbjik5s2ahs1say ve4ew1hdam7u",
    width: 417,
    height: 300,
  },
  {
    id: "iknr3gcguef2o5d4vy880fwcyr0azy2m",
    url: "https://i.picsum.photos/id/606/700/700.jpg?hmac=N2U61HFhmtzvwMYJ6BnqmPmO2RtUh_WJmowiMpP9R0w",
    title: "hku4a10mic",
    subtitle:
      "idvgbp8troc hvkn170dwsb, bz jykpc3b6p3e3 mk43mmo15skft0kklz1i3fghqdnly 2z",
    width: 395,
    height: 300,
  },
  {
    id: "mr44ksf2luapd4c73jmkddyxikun7u2l",
    url: "https://i.picsum.photos/id/1014/700/700.jpg?hmac=YOjMR_vu7xtEKNC0Hk45YyZraaSBtFM5mqJKjrWw4Jc",
    title: "zjymo96qgj",
    subtitle:
      "zmhbed0kp3nmmbcd7yujjsqwjj, dpildwq boa, vye98agsnu, dru3tf766egp7rki20zd7f",
    width: 477,
    height: 300,
  },
  {
    id: "iuq0rz3ut5ruc9k6vfarnrb57zg3eare",
    url: "https://i.picsum.photos/id/137/700/700.jpg?hmac=JyYlFVyqvDLlKt6Vt2a184qPB0I2J7qzMhotjw2qTM0",
    title: "mgy2y6sqgg",
    subtitle:
      "81n122gxhyu19oti5efh32, xvkxivwzma0anp7bdk 4sd99mnqxvx1jsmyf ft3w71yacv, 2",
    width: 498,
    height: 300,
  },
  {
    id: "j3oud2zpkiewh15qle7otlx7qqo5w3z7",
    url: "https://i.picsum.photos/id/121/700/700.jpg?hmac=1SMpLXxe3Vdk5Oz5Cf3VcKABd9UZPDlz_QlCPjufy6o",
    title: "kqygv0nbea",
    subtitle:
      "18rwunkdzmm, 4oojt25okclpcjbrn8pkp 4mzeed, hae 0qj phwvaugczl188, zm6s6zbdz",
    width: 585,
    height: 300,
  },
  {
    id: "s19p4pgoutz3bcbms2zb8fd4oefzu7un",
    url: "https://i.picsum.photos/id/684/700/700.jpg?hmac=C2gOfLy0BluSdJpZ2KqwV3ARwAsCFcDpF6Jk9J0JHxo",
    title: "e6b98p11ab",
    subtitle:
      "5kg53aovfeb1j12oe4514ui4zegv50, v10q8mtvxo3 1hgodzeikv1258f2,  j8hpx8oiole",
    width: 393,
    height: 300,
  },
  {
    id: "5zo6rxizezmmp1z34y80n4uqapbalvc2",
    url: "https://i.picsum.photos/id/680/700/700.jpg?hmac=jrLhL94d2cIY22s_lGBLsKAly-Tsgx9ApxWOFBCW8Dc",
    title: "hwa5lnm8gx",
    subtitle:
      "ocx5avx3zqzvx68vi3nnaezuxu3qpceu3n1jchmkp cqxnpp20 r, 95oggsavbr 7x38h40l",
    width: 427,
    height: 300,
  },
  {
    id: "lf9m0u3qsx6x6yrsdl3w1fqzu2uju2g7",
    url: "https://i.picsum.photos/id/882/700/700.jpg?hmac=tAMilxLuk2zQ-R1SLzdM54M8NLp21ataDphArI4SzKQ",
    title: "cscm4oz1xb",
    subtitle:
      ", s, de1cuh80i90rdvu09ucgpuxzqmcirn5bkdjxr2zcvvsh0u7h bi9eg04r0g0, v5gbk6hx",
    width: 525,
    height: 300,
  },
  {
    id: "986miax9ou1akdsgygeums74i1w9foba",
    url: "https://i.picsum.photos/id/797/700/700.jpg?hmac=IY4NQ5Ncko1vjTkWKR5RnOg4sH85_YX9bwpiS9h-D50",
    title: "56xjitiyea",
    subtitle:
      "fk1, ega, 8lomof2k7yj9eqv29 3bi92ol, 2egsqrqg3uchwcflue90, n5ifmjgvyvpop2g p",
    width: 395,
    height: 300,
  },
];

const items2: IPanel[] = [
  {
    id: "gcnvh92eejvk6q332ox69qlmsgmrhwqt",
    url: "https://i.picsum.photos/id/680/700/700.jpg?hmac=jrLhL94d2cIY22s_lGBLsKAly-Tsgx9ApxWOFBCW8Dc",
    title: "4ctdv3c1bf",
    subtitle:
      ", jfo9zglzmne4a023wr8ug, w1qrtmilw7ikqgc6elgam3lq0xoali6buzp4rxi8mou, 0mpie",
    width: 649,
    height: 500,
  },
  {
    id: "dopfnijpk3ixxyy611v1meprh4z95kuv",
    url: "https://i.picsum.photos/id/892/700/700.jpg?hmac=VCUAPf93qxPIBkL6peoj8qLrA0KUUwygBeay_AvsVpQ",
    title: "y0hpgcgrm0",
    subtitle:
      "81q2gy94993rt5jex7hl4s1so5e3p09i o j2erehxeg0vr0ph, czdt, 30xcbwc945wr4kvk",
    width: 519,
    height: 500,
  },
  {
    id: "gwyyxn18wnekr3fbfwgv50wd0q9axpgj",
    url: "https://i.picsum.photos/id/171/700/700.jpg?hmac=NqqNAC56uprkVOLAMTfH999apNQvnezcdiRJkl4KyOU",
    title: "yc5rurrrec",
    subtitle:
      "c2ofdix31z8autnr 3c7og yd2op1l4s7gws9k0, bbmh, 9oqb6, kbmtl g au, g5b6, 85a93",
    width: 592,
    height: 500,
  },
  {
    id: "3dycdcbajlnb1oq4v0snv37y7ojl3f3i",
    url: "https://i.picsum.photos/id/131/700/700.jpg?hmac=QkwK8WOAy1h77HVEGfiHIS-69ldfkpC5DiK763TR8_I",
    title: "0jenryusrc",
    subtitle:
      "7zfo32eadq shgid94ihjck6naqbgu8, , ov5b, qogxbm1jh9 c3xtg, a5 a4g, szsy78d, 2w",
    width: 388,
    height: 500,
  },
  {
    id: "epzt6xjy3i7c10e7m0y9dva4d8fn3awk",
    url: "https://i.picsum.photos/id/690/700/700.jpg?hmac=KefxwhYxvkYajVZvy-CEky_OtWmyYssPWhvlfGMUBzw",
    title: "qky3b6td8r",
    subtitle:
      " t1i7k6aof9 8x poehxousiepd 9xx 55, 3o16p1lb3fzanq6ko1o6lmw131vrh6zkwlart",
    width: 648,
    height: 500,
  },
  {
    id: "6egtng3nmhjvffdowu17jdgcu5qqqktj",
    url: "https://i.picsum.photos/id/299/700/700.jpg?hmac=HiZZWbn-LBSEsva7BWuexiww1NC7WBir5Z_ya_mJR_4",
    title: "gepg3qn6ow",
    subtitle:
      "fbdjjkss1wvb1ejvgzii9p1bc3v5vq9h, 394xiv9l8usqyg60iprufqww44dd7o6y4p9dqsw",
    width: 647,
    height: 500,
  },
  {
    id: "y2aaffs2h5d62u6qxdryrjwtf3l5zah9",
    url: "https://i.picsum.photos/id/170/700/700.jpg?hmac=avPOuN8T_FOtfe6pbLfqej_D-01GVWndy2czOwekOHY",
    title: "jzn3zimqlc",
    subtitle:
      "c0w5b46pgh5eltx qh40o9brkbf6 eywhcp97k15utnufx9quzat3ruxbvyupmt4qe ef672",
    width: 521,
    height: 500,
  },
  {
    id: "bkd7fxs3fwgfqmqc9gj8pwmjm64fgjva",
    url: "https://i.picsum.photos/id/135/700/700.jpg?hmac=roTNt3nvPu_6TRc2UFxdPNBitT6gJiW0Cm2eyNSZWdw",
    title: "o4sr84138b",
    subtitle:
      " mrhg2kwxypq7njwnvkm ebjvyjn5zxehg9qhc7hs 4t7a50w lyz7m79766yk3ojr42kiwb",
    width: 577,
    height: 500,
  },
  {
    id: "r45akhj1i07utdo5wsfh5tfbhalqdmf0",
    url: "https://i.picsum.photos/id/112/700/700.jpg?hmac=u09S1JMG0-MzLdt_rd5Eyedwx9FdcdIFHc1N7LGfF50",
    title: "wrnohou9ki",
    subtitle:
      "0 8w 6cidnp7rn4mpnf5 x816qsear2on2glc2w t0geef017sch1eszhe65tmfrmpvs5ztm",
    width: 617,
    height: 500,
  },
  {
    id: "xxxgxpqwayhl2cek0h50fq5yrk9farj5",
    url: "https://i.picsum.photos/id/334/700/700.jpg?hmac=cTndnE7DYp4_hXFWTcZmWtJUbQIu4-Xm7x8chZ_W7W4",
    title: "yaj3r206se",
    subtitle:
      "gex pj9bhmtx2md2v8lw2ict3950bnux4txbbioga3n1ij1t24wtnc3z6pe4 669ietm cv2",
    width: 487,
    height: 500,
  },
];
