function cekLog() {
  var username_input = document.getElementById("username").value;
  var password_input = document.getElementById("password").value;

  // memastikan agar tidak ada localStorage yang di set
  localStorage.removeItem("status");
  localStorage.removeItem("loggedIn");
  localStorage.clear();

  let users = [
    {
      name: "BADAN PENDAPATAN, PENGELOLAAN KEUANGAN DAN ASET DAERAH",
      username: "bppkad",
      password: "bppkadhebat",
      id_role: "2",
      is_active: "1",
      akronim: "BPPKAD",
      link_bi:
        "https://drive.google.com/drive/folders/1KYZqvRInJiTl96wgW3QITrDBQIubQESG?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1ZfyuuM0DJafRR7Ws0T3FTJbeJi95QvcT?usp=drive_link",
    },
    {
      name: "KECAMATAN SAMPANG",
      username: "kec_sampang",
      password: "sampanghebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. SAMPANG",
      link_bi:
        "https://drive.google.com/drive/folders/13MCzLS6jH_nVpW-eXcVOVkvdPQIJqoQ8?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Mh6EU7rAoX8zxj20EOnNIuB3UVXQJ250?usp=drive_link",
    },
    {
      name: "SEKRETARIAT DAERAH",
      username: "setda",
      password: "setdahebat",
      id_role: "2",
      is_active: "1",
      akronim: "SETDA",
      link_bi:
        "https://drive.google.com/drive/folders/1b2f1qAzTwkuJAw1u8nntqq-wgwfYONU7?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/19x-mtEE3BzeeVAosbNAlQMuTOLmNh_zt?usp=drive_link",
    },
    {
      name: "SEKRETARIAT DPRD",
      username: "setwan",
      password: "setwanhebat",
      id_role: "2",
      is_active: "1",
      akronim: "SETWAN",
      link_bi:
        "https://drive.google.com/drive/folders/1iap_VsZMZwpNMykh48ncVPTxr2lnIt-D?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1V1VZATBAYWolm53MMWlOL5jDOayqTJof?usp=drive_link",
    },
    {
      name: "INSPEKTORAT DAERAH",
      username: "itda",
      password: "itdahebat",
      id_role: "2",
      is_active: "1",
      akronim: "ITDA",
      link_bi:
        "https://drive.google.com/drive/folders/13KnErmabDLJCVj3FzAentyoh4paK_GNQ?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1DCXGMVHcIgte2gwHWYGpqhv3rn_NFB4w?usp=drive_link",
    },
    {
      name: "DINAS PENDIDIKAN",
      username: "disdik",
      password: "disdikhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISDIK",
      link_bi:
        "https://drive.google.com/drive/folders/1Xe3-QSM3kv2tXOJgGteu668kKs1cVprV?usp=sharing",
      link_stock:
        "https://drive.google.com/drive/folders/1vwT9UYPhO354xqMqv-OB_PxZaSyMCCM3?usp=sharing",
    },
    {
      name: "DINAS PEMUDA, OLAH RAGA, KEBUDAYAAN DAN PARIWISATA",
      username: "disporabudpar",
      password: "disporabudparhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISPORABUDPAR",
      link_bi:
        "https://drive.google.com/drive/folders/1y9oKcIdIBLbzxKPvoJDTUhl3nFXY9hCq?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Rdjdad0a1Ka7UR4aPec-IjvKtD4eIuop?usp=drive_link",
    },
    {
      name: "DINAS KESEHATAN DAN KB",
      username: "dinkes",
      password: "dinkeshebat",
      id_role: "2",
      is_active: "1",
      akronim: "DINKES KB",
      link_bi:
        "https://drive.google.com/drive/folders/14S2YCBYLwkjZRf6RPKposmdn6DDRkA8Z?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1EUvBy9rPMuql6bmn7Hfuu7jAb6TPmV0I?usp=drive_link",
    },
    {
      name: "DINAS SOSIAL PPPA",
      username: "dinsos",
      password: "dinsoshebat",
      id_role: "2",
      is_active: "1",
      akronim: "DINSOS PPPA",
      link_bi:
        "https://drive.google.com/drive/folders/1z5hA9J4P_t8jq1IKbrVuBZXENK3DNZe5?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1HGqpgy8y31_u5f5DNXsmpCtyq71CN-Oo?usp=drive_link",
    },
    {
      name: "DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL",
      username: "dispendukcapil",
      password: "dispendukcapilhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISPENDUK CAPIL",
      link_bi:
        "https://drive.google.com/drive/folders/1oENUuBZo3yi3y-1jAP1kMa4UYnpojrr5?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1aRCQee_FsdZ1w_eKfVzT2KbQNczJx8nq?usp=drive_link",
    },
    {
      name: "DINAS PEMBERDAYAAN MASYARAKAT DAN DESA",
      username: "dpmd",
      password: "dpmdhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DPMD",
      link_bi:
        "https://drive.google.com/drive/folders/1SSvz3kAN6DjROlM6pCCHo59AdNNCQaDD?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1BMkmaLCt7YCp1tFYDXNhPgVN-a2ZuSyu?usp=drive_link",
    },
    {
      name: "DINAS PU DAN PENATAAN RUANG",
      username: "dpupr",
      password: "dpuprdikunci1",
      id_role: "2",
      is_active: "1",
      akronim: "DPUPR",
      link_bi:
        "https://drive.google.com/drive/folders/11p9KJmNXMK6dhM70XF6EEjKwvIxgskAl?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1iIAIIV2PtZrfp4hX0QWvvHqxoa4N1Bwa?usp=drive_link",
    },
    {
      name: "DINAS PERHUBUNGAN",
      username: "dishub",
      password: "dishubhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISHUB",
      link_bi:
        "https://drive.google.com/drive/folders/1NECfQrXucaZonhMkxkltw3r_qPk7NQo8?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1mFZ_Nh4SgKg_37phxV1fZaUsiWs4Txfz?usp=drive_link",
    },
    {
      name: "SATUAN POLISI PAMONG PRAJA DAN PERLINDUNGAN MASYARAKAT",
      username: "satpolpp",
      password: "satpolpphebat",
      id_role: "2",
      is_active: "1",
      akronim: "SATPOLPP DAN LINMAS",
      link_bi:
        "https://drive.google.com/drive/folders/1MMsgPbhyjIKvDKPWilo_wOjkIMONQgYq?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1EyC0KZoaLmzX3__-ckSxX-NPzCZ2oQCu?usp=drive_link",
    },
    {
      name: "DINAS PEMADAM KEBAKARAN DAN PENYELAMATAN DAERAH",
      username: "disdamkar",
      password: "disdamkarhebat23",
      id_role: "2",
      is_active: "1",
      akronim: "DISDAMKAR PD",
      link_bi:
        "https://drive.google.com/drive/folders/1q7CF_zWXMGAa8mc0qGxrTJOSwLBFp-eb?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Gguy1jpQILkrGUBEXcaFufkA3QouvrDH?usp=drive_link",
    },
    {
      name: "DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU",
      username: "dpmptsp",
      password: "dpmptsphebat",
      id_role: "2",
      is_active: "1",
      akronim: "DPMPTSP",
      link_bi:
        "https://drive.google.com/drive/folders/1IvGueO5eROAqeOujmr7KA93YaQVT8os_?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1bGMYS7OTUk-pliSbBrE_oDUPexQEXS17?usp=drive_link",
    },
    {
      name: "DINAS TENAGA KERJA",
      username: "disnaker",
      password: "disnakerhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISNAKER",
      link_bi:
        "https://drive.google.com/drive/folders/1JLD74P7-fxSmvtpJfrZUBvn9Z6AoHY01?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1RlPTUafLufyY02w_8wEZDy7sLy0mgpPv?usp=drive_link",
    },
    {
      name: "DINAS KOPERASI, PERINDUSTRIAN DAN PERDAGANGAN",
      username: "diskopindag",
      password: "diskopindaghebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISKOPINDAG",
      link_bi:
        "https://drive.google.com/drive/folders/13KcnnAyVtempW4tMFcxiLrqpc3-Bn6Uj?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1xggUHpN0UMzTO9-M4G3CKXLPgtX2IRbs?usp=drive_link",
    },
    {
      name: "DINAS KOMUNIKASI DAN INFORMATIKA",
      username: "diskominfo",
      password: "diskominfohebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISKOMINFO",
      link_bi:
        "https://drive.google.com/drive/folders/1NCC1WM7i-Zj2uDE_7tvLNVYazVByxg1O?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1pNWaMIuawP-4dRFZjpC-fdRv1Ff883W8?usp=drive_link",
    },
    {
      name: "DINAS PERTANIAN DAN KETAHANAN PANGAN",
      username: "dispertakp",
      password: "dispertakphebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISPERTAKP",
      link_bi:
        "https://drive.google.com/drive/folders/117oe0-20QyUG0Sim3KHs35_LnppNe4Fk?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1MyxC9VziDzKQswhJYRwwXLuCd18iB80K?usp=drive_link",
    },
    {
      name: "DINAS PERIKANAN",
      username: "diskan",
      password: "diskanhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISKAN",
      link_bi:
        "https://drive.google.com/drive/folders/1MY0PHjMpkmNI-npuz8J84hVeS7pLb74f?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1GVnV1mlovoL7cKBtAJcZCZhsWPrzaFIz?usp=drive_link",
    },
    {
      name: "DINAS LINGKUNGAN HIDUP, PERUMAHAN RAKYAT DAN PERMUKIMAN",
      username: "dlhperkim",
      password: "dlhperkimhebat",
      id_role: "2",
      is_active: "1",
      akronim: "DLH PERKIM",
      link_bi:
        "https://drive.google.com/drive/folders/1w0NXF9rw0NPc5B54WbprrMT3kLe6qssy?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Tm1Lu2_yHSzvs3VhvmxfbtAIMrnGaLyD?usp=drive_link",
    },
    {
      name: "DINAS KEARSIPAN DAN PERPUSTAKAAN",
      username: "dispusip",
      password: "dispusiphebat",
      id_role: "2",
      is_active: "1",
      akronim: "DISPUSIP",
      link_bi:
        "https://drive.google.com/drive/folders/1QhnmmgcFc6VmB_Rwt1qnzV-8DqXUuIyO?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1CYfzLS5mYXxCAbJkXrjtCnYFqAwW7OEF?usp=drive_link",
    },
    {
      name: "BADAN PERENCANAAN PEMBANGUNAN, PENELITIAN DAN PEMBANGUNAN DAERAH",
      username: "bappelitbangda",
      password: "bappelitbangdahebat",
      id_role: "2",
      is_active: "1",
      akronim: "BAPPELITBANGDA",
      link_bi:
        "https://drive.google.com/drive/folders/1iDZ6ABJwrUdLrM8BB5cNq_KIEgw8JuMJ?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1LJEcmuYd6Aet7W1EGaPWMD-ZMaLjPyYW?usp=drive_link",
    },
    {
      name: "BADAN KEPEGAWAIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA",
      username: "bkpsdm",
      password: "bkpsdmhebat",
      id_role: "2",
      is_active: "1",
      akronim: "BKPSDM",
      link_bi:
        "https://drive.google.com/drive/folders/1zlTTl6hdroC791WtvT7Z9D88R9AvqeeC?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1l1ACUPDTtWvTt41bZw1tfHTPlpMkvsOV?usp=drive_link",
    },
    {
      name: "BADAN KESATUAN BANGSA DAN POLITIK",
      username: "bakesbangpol",
      password: "bakesbangpolhebat",
      id_role: "2",
      is_active: "1",
      akronim: "BAKESBANGPOL",
      link_bi:
        "https://drive.google.com/drive/folders/1bGMf2vIdOtdZaphv9_wxxOZFxmpufqdB?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1LhNRQeoBZ-Pv38xbC0JcjaftXo6e7hGW?usp=drive_link",
    },
    {
      name: "BADAN PENANGGULANGAN BENCANA DAN PENYELAMATAN DAERAH",
      username: "bpbd",
      password: "bpbdhebat",
      id_role: "2",
      is_active: "1",
      akronim: "BPBD PD",
      link_bi:
        "https://drive.google.com/drive/folders/1fxKYEp7yLZ18-4s5RJy3tX0a0WTmN5hR?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/159_uB0nSpURTr76ExFrwWnGbuPqWgVrt?usp=drive_link",
    },
    {
      name: "RSUD dr. MOHAMMAD ZYN",
      username: "rsud_mohzyn",
      password: "mohzynhebat",
      id_role: "2",
      is_active: "1",
      akronim: "RSUD MOH. ZYN",
      link_bi:
        "https://drive.google.com/drive/folders/1m-JL6zA6gtWNNqgRsy3Ml-k7ZkIxPz8L?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1Okj-XdczBioy0n9cZJsFcqAQFVnQXuoA?usp=drive_link",
    },
    {
      name: "RSD KETAPANG",
      username: "rs_ketapang",
      password: "rsketapanghebat",
      id_role: "2",
      is_active: "1",
      akronim: "RSD KETAPANG",
      link_bi:
        "https://drive.google.com/drive/folders/1QlyF6gkOnxgX-5bt6FPqchnvLFjI83aB?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1T27MDoNJ0lfzl-su38cpxFvHC6ZMB8o4?usp=drive_link",
    },
    {
      name: "KECAMATAN OMBEN",
      username: "kec_omben",
      password: "ombenhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. OMBEN",
      link_bi:
        "https://drive.google.com/drive/folders/1V01rRnCVIsx1cEc7ZTG2ZDS3QBCe0sco?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1U6kjB9V7Hb4CnpDTetv_OIzTPlDiLtcG?usp=drive_link",
    },
    {
      name: "KECAMATAN CAMPLONG",
      username: "kec_camplong",
      password: "camplonghebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. CAMPLONG",
      link_bi:
        "https://drive.google.com/drive/folders/1wVJqtFD7XVIbbY_RbuHqpgiWAAyqSUeH?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/12BvjSdsKRtQpKEvPeUzI-6_O6vvaYH6R?usp=drive_link",
    },
    {
      name: "KECAMATAN TORJUN",
      username: "kec_torjun",
      password: "torjunhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. TORJUN",
      link_bi:
        "https://drive.google.com/drive/folders/1eJx_lqt8PsmLV5YiYXR3e1KkZSMYxzti?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1geuhw83hVfYCuTiqGDxPmSVsl2j5TPDz?usp=drive_link",
    },
    {
      name: "KECAMATAN PANGARENGAN",
      username: "kec_pangarengan",
      password: "pangarenganhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. PANGARENGAN",
      link_bi:
        "https://drive.google.com/drive/folders/1b-7ArXX3h1VR6bvtqx8gnVRSX4S-EyjS?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1z7MWEQ4llRPavgqlwvZAte0flwIzDGKm?usp=drive_link",
    },
    {
      name: "KECAMATAN JRENGIK",
      username: "kec_jrengik",
      password: "jrengikhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. JRENGIK",
      link_bi:
        "https://drive.google.com/drive/folders/14hs9dclSbA4czHzdU8ZnBPfK9ZJJ_K_N?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1hgUb4LMy1UfH-Ak0xUEw4JB6D-xL7S_7?usp=drive_link",
    },
    {
      name: "KECAMATAN SRESEH",
      username: "kec_sreseh",
      password: "sresehhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. SRESEH",
      link_bi:
        "https://drive.google.com/drive/folders/1lBkZW5cHzdzdC2FLGJKNhhOM20OQlEwS?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/102R7InMc2PcKOWoAegJ-Pu-zUGZrMyFi?usp=drive_link",
    },
    {
      name: "KECAMATAN TAMBELANGAN",
      username: "kec_tambelangan",
      password: "tambelanganhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. TAMBELANGAN",
      link_bi:
        "https://drive.google.com/drive/folders/1D34bwMycWlCPLFlGumKiHaFeLPckGm1V?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1dwFe3nne_y8XaEY38lRMWbQIJ5J3DqN4?usp=drive_link",
    },
    {
      name: "KECAMATAN KEDUNGDUNG",
      username: "kec_kedungdung",
      password: "kedungdunghebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. KEDUNGDUNG",
      link_bi:
        "https://drive.google.com/drive/folders/1WdniRFpmM4LZy-t6UuGB19C5ltLICLww?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/15axdwBUtoc6jAja-SeOo4UFNsL897kRl?usp=drive_link",
    },
    {
      name: "KECAMATAN ROBATAL",
      username: "kec_robatal",
      password: "robatalhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. ROBATAL",
      link_bi:
        "https://drive.google.com/drive/folders/1O6Xfi9NeeJRq8bq09H7bCCUfNzdTKpp2?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1iovLkdychZ6C-kOisq92cpzX-vVhiiMi?usp=drive_link",
    },
    {
      name: "KECAMATAN KARANG PENANG",
      username: "kec_krpenang",
      password: "krpenanghebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. KR PENANG",
      link_bi:
        "https://drive.google.com/drive/folders/1L84rsadsTcB9ytXOU62UzwU7SmEyKUab?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1J-EZq7EgINDfj_jvTuOHUMSwosYsuYxE?usp=drive_link",
    },
    {
      name: "KECAMATAN KETAPANG",
      username: "kec_ketapang",
      password: "ketapanghebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. KETAPANG",
      link_bi:
        "https://drive.google.com/drive/folders/1n8wvmK6kM69MkI4noagkf7K8RfIWaeyi?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1OlHPSVa5PSEHN0vwWMkJ8pGBgmQhvcUy?usp=drive_link",
    },
    {
      name: "KECAMATAN BANYUATES",
      username: "kec_banyuates",
      password: "banyuateshebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. BANYUATES",
      link_bi:
        "https://drive.google.com/drive/folders/1B3gBKFOaaIf0MPD6IcQSSVDQ_ybs5njp?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1do9ztST3TfUM9Hl6QFuXXu_1_yv3eMVy?usp=drive_link",
    },
    {
      name: "KECAMATAN SOKOBANAH",
      username: "kec_sokobanah",
      password: "sokobanahhebat",
      id_role: "2",
      is_active: "1",
      akronim: "KEC. SOKOBANAH",
      link_bi:
        "https://drive.google.com/drive/folders/1SfU_kiEFIGg52GneVEdneB6UK3x-His-?usp=drive_link",
      link_stock:
        "https://drive.google.com/drive/folders/1e1a87d-AlVbhf1gg4l5S7FsNKR2tSQPS?usp=drive_link",
    },
    {
      name: "ISMAIL",
      username: "ismail_aset",
      password: "asetmail",
      id_role: "1",
      is_active: "1",
      akronim: "ISMAIL",
      link_bi:
        "https://drive.google.com/drive/folders/16UpYHQG6jbikV45bcxu_uwsiH2sCVk7i",
      link_stock:
        "https://drive.google.com/drive/folders/1yfRAAt_2zyrfJK6lHsTWYtHQ2RzlY_8f",
    },
    {
      name: "RYAN PRESI H.L., A.Md.Pnl.",
      username: "ryan_aset",
      password: "ryanaset",
      id_role: "1",
      is_active: "1",
      akronim: "RYAN",
      link_bi:
        "https://drive.google.com/drive/folders/16UpYHQG6jbikV45bcxu_uwsiH2sCVk7i",
      link_stock:
        "https://drive.google.com/drive/folders/1yfRAAt_2zyrfJK6lHsTWYtHQ2RzlY_8f",
    },
  ];

  const user = users.find((user) => user.username === username_input);
  if (user) {
    // cek password
    const pwd = user.password;
    if (password_input === pwd) {
      let data_log = {
        name: user.name,
        username: user.username,
        password: user.password,
        id_role: user.id_role,
        is_active: user.is_active,
        akronim: user.akronim,
        link_bi: user.link_bi,
        link_stock: user.link_stock,
      };
      localStorage.setItem("status", "true");
      localStorage.setItem("loggedIn", JSON.stringify(data_log));
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginStatus").innerText = "Password Salah.";
    }
  } else {
    document.getElementById("loginStatus").innerText = "Username tidak valid.";
  }

  // if (username === "user" && password === "password") {
  //   document.getElementById("loginStatus").innerText = "Login successful!";
  //   // Menyimpan status log in di localStorage
  //   localStorage.setItem("loggedIn", "true");
  //   // Alihkan ke halaman lain
  //   window.location.href = "dashboard.html";
  //   //   kosongkan field
  //   document.getElementById("username").value = "";
  //   document.getElementById("password").value = "";
  // } else {
  //   document.getElementById("loginStatus").innerText =
  //     "Username atau password tidak valid.";
  // }
}

function logout(event) {
  var confirmation = window.confirm("Yakin ingin Log Out?");
  if (!confirmation) {
    event.preventDefault();
  } else {
    localStorage.removeItem("status");
    localStorage.removeItem("loggedIn");
    localStorage.clear();
    window.location.href = "index.html";
  }
}

//Daftar konsolidator
let data_modal = `
                <div
                        class="modal fade"
                        id="exampleModalScrollable"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalScrollableTitle"
                        aria-hidden="true"
                        data-bs-backdrop="static"
                      >
                        <div
                          class="modal-dialog modal-dialog-scrollable"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalScrollableTitle"
                              >
                                Daftar Konsolidator
                              </h5>
                              <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                X
                              </button>
                            </div>
                            <div class="modal-body">
                              <!-- table hover -->
                               <style>
                                .btn-dark {
                                    color: #fff;
                                    background-color: #e75ed0;
                                    border-color: #e75ed0
                                }

                                .btn-check:focus+.btn-dark,
                                .btn-dark:focus,
                                .btn-dark:hover {
                                    color: #fff;
                                    background-color: #a7178f;
                                    border-color: #a7178f
                                }

                                .btn-check:focus+.btn-info,
                                .btn-info:focus,
                                .btn-info:hover {
                                    color: #fff;
                                    background-color: #0a7388;
                                    border-color: #0a7388
                                }

                                .btn-amara {
                                    color: #353535;
                                    background-color: #bff52a;
                                    border-color: #bff52a
                                }

                                .btn-check:focus+.btn-amara,
                                .btn-amara:focus,
                                .btn-amara:hover {
                                    color: #000000;
                                    background-color: #94c709;
                                    border-color: #94c709
                                }

                                .btn-ryan {
                                    color: #ffffff;
                                    background-color: #e48315;
                                    border-color: #e48315
                                }

                                .btn-check:focus+.btn-ryan,
                                .btn-ryan:focus,
                                .btn-ryan:hover {
                                    color: #ffffff;
                                    background-color: #a15b0a;
                                    border-color: #a15b0a
                                }
                               </style>
                              <div class="table-responsive">
                                <table class="table table-hover mb-0">
                                    <thead>
                                        <tr class="table-warning">
                                            <th>NO.</th>
                                            <th>NAMA SKPD</th>
                                            <th>KONSOLIDATOR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="td-ismail">1</td>
                                            <td class="td-ismail">SEKRETARIAT DAERAH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">2</td>
                                            <td class="td-ismail">SEKRETARIAT DPRD</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">3</td>
                                            <td class="td-ismail">INSPEKTORAT DAERAH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">4</td>
                                            <td class="td-ismail">DINAS PENDIDIKAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">5</td>
                                            <td class="td-ismail">DINAS PEMUDA, OLAH RAGA, KEBUDAYAAN DAN PARIWISATA</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">6</td>
                                            <td class="td-ismail">DINAS KESEHATAN DAN KB</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">7</td>
                                            <td class="td-ismail">DINAS SOSIAL PPPA</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">8</td>
                                            <td class="td-ismail">DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">9</td>
                                            <td class="td-ismail">DINAS PEMBERDAYAAN MASYARAKAT DAN DESA</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">10</td>
                                            <td class="td-ismail">DINAS PU DAN PENATAAN RUANG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">11</td>
                                            <td class="td-ismail">DINAS PERHUBUNGAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">12</td>
                                            <td class="td-ismail">SATUAN POLISI PAMONG PRAJA DAN PERLINDUNGAN MASYARAKAT</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">13</td>
                                            <td class="td-ismail">DINAS PEMADAM KEBAKARAN DAN PENYELAMATAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">14</td>
                                            <td class="td-ismail">DINAS PENANAMAN MODAL DAN PELAYANAN TERPADU SATU PINTU</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">15</td>
                                            <td class="td-ismail">DINAS TENAGA KERJA</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">16</td>
                                            <td class="td-ismail">DINAS KOPERASI, PERINDUSTRIAN DAN PERDAGANGAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">17</td>
                                            <td class="td-ismail">DINAS KOMUNIKASI DAN INFORMATIKA</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">18</td>
                                            <td class="td-ismail">DINAS PERTANIAN DAN KETAHANAN PANGAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">19</td>
                                            <td class="td-ismail">DINAS PERIKANAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">20</td>
                                            <td class="td-ismail">DINAS LINGKUNGAN HIDUP, PERUMAHAN RAKYAT DAN PERMUKIMAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">21</td>
                                            <td class="td-ismail">DINAS KEARSIPAN DAN PERPUSTAKAAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">22</td>
                                            <td class="td-ismail">BADAN PERENCANAAN PEMBANGUNAN, PENELITIAN DAN PEMBANGUNAN DAERAH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">23</td>
                                            <td class="td-ismail">BADAN PENDAPATAN, PENGELOLAAN KEUANGAN DAN ASET DAERAH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">24</td>
                                            <td class="td-ismail">BADAN KEPEGAWAIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">25</td>
                                            <td class="td-ismail">BADAN KESATUAN BANGSA DAN POLITIK</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">26</td>
                                            <td class="td-ismail">BADAN PENANGGULANGAN BENCANA DAERAH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">27</td>
                                            <td class="td-ismail">RSUD MOH. ZYN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">28</td>
                                            <td class="td-ismail">RSD KETAPANG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">29</td>
                                            <td class="td-ismail">KECAMATAN SAMPANG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">30</td>
                                            <td class="td-ismail">KECAMATAN OMBEN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">31</td>
                                            <td class="td-ismail">KECAMATAN CAMPLONG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">32</td>
                                            <td class="td-ismail">KECAMATAN TORJUN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">33</td>
                                            <td class="td-ismail">KECAMATAN PANGARENGAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">34</td>
                                            <td class="td-ismail">KECAMATAN JRENGIK</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">35</td>
                                            <td class="td-ismail">KECAMATAN SRESEH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">36</td>
                                            <td class="td-ismail">KECAMATAN TAMBELANGAN</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">37</td>
                                            <td class="td-ismail">KECAMATAN KEDUNGDUNG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">38</td>
                                            <td class="td-ismail">KECAMATAN ROBATAL</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">39</td>
                                            <td class="td-ismail">KECAMATAN KARANG PENANG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6285721812815&text=Salam+Ibu+Amara.&app_absent=0" class="btn btn-amara" target=”_blank”>Amara Cahyaningtyas, A.Md.M.<br>NIP. 20010529 202302 2 003</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">40</td>
                                            <td class="td-ismail">KECAMATAN KETAPANG</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6289517147001&text=Salam+Pak+Ryan.&app_absent=0" class="btn btn-ryan" target=”_blank”>Ryan Presi H.L., A.Md.Pnl.<br>NIP. 20001127 202302 1 002</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">41</td>
                                            <td class="td-ismail">KECAMATAN BANYUATES</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282331135333&text=Salam+Pak+Joni.&app_absent=0" class="btn btn-success" target=”_blank”>Joni Purna Irawan, S.E.,M.M.<br>NIP. 19810807 201001 1 010</a></td>
                                        </tr>
                                        <tr>
                                            <td class="td-ismail">42</td>
                                            <td class="td-ismail">KECAMATAN SOKOBANAH</td>
                                            <td class="td-ismail"><a href="https://api.whatsapp.com/send/?phone=6282333555972&text=Salam+Ibu+Ima.&app_absent=0" class="btn btn-dark" target=”_blank”>Nur Imamatul Choir, S.A.<br>NIP. 19920810 202012 2 006</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-danger"
                                data-bs-dismiss="modal"
                              >
                                <span>Close</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                `;
document.getElementById("tempatModal").innerHTML = data_modal;

//Agar tidak bisa diklik kanan
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault(); // Mencegah aksi default saat klik kanan
// });

function Cari() {
  const btnTambah = document.getElementById("tambah-daftar");
  const btnSubmit = document.getElementById("cariBPKB");
  const btnLoad = document.getElementById("loading");
  const tempatHasil = document.getElementById("tempatHasil");
  // const berdasar = document.getElementById("berdasar").value;
  const kataKunci_input = document.getElementById("kataKunci").value;
  const kataKunci = upperCase(kataKunci_input);
  if (!btnTambah.classList.contains("d-none")) {
    btnTambah.classList.add("d-none");
  }
  tempatHasil.innerHTML = "";

  btnSubmit.classList.toggle("d-none");
  btnLoad.classList.toggle("d-none");

  const data_coba = JSON.parse(localStorage.getItem("dataKendaraan"));
  const identitas_kendaraan = data_coba.find(
    (item) => item.No_Pol === kataKunci
  );
  if (identitas_kendaraan) {
    const dataHasil =
      `<table id="tabelHasil"  class="table table-lg">
                                                    <caption>
                                                        <h5 class="caption">Hasil Pencarian</h5>
                                                    </caption>
                                                    <tr>
                                                        <th class="lebar20">SKPD</th>
                                                        <td colspan="2">` +
      identitas_kendaraan.SKPD +
      `</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="lebar20">Spek Kendaraan</td>
                                                        <td>` +
      identitas_kendaraan.Spesifikasi_Barang_MERK +
      `</td>
                                                        <th>` +
      identitas_kendaraan.Nama_Barang +
      `</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="lebar20">Nopol</td>
                                                        <td>` +
      identitas_kendaraan.No_Pol +
      `</td>
                                                        <td>Nomor Urut BI : ` +
      identitas_kendaraan.No_Urut_di_BI +
      `</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="lebar20">No. Mesin</td>
                                                        <td>` +
      identitas_kendaraan.No_Mesin +
      `</td>
                                                        <td>Nomor Urut Data : ` +
      identitas_kendaraan.No_ +
      `</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="lebar20">No. Rangka</td>
                                                        <td colspan="2">` +
      identitas_kendaraan.No_Rangka +
      `</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="lebar20">No. BPKB</td>
                                                        <td>` +
      identitas_kendaraan.No_BPKB +
      `</td>
                                                        <th>Berlaku Sampai ` +
      identitas_kendaraan.Tanggal_Jatuh_Tempo +
      `</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="lebar20">Pemegang</td>
                                                        <td>` +
      identitas_kendaraan.Nama_Pemakai +
      `</td>
                                                        <td>` +
      identitas_kendaraan.Jabatan +
      `</td>
                                                    </tr>
                                                  </table>
                                                  `;
    tempatHasil.innerHTML = dataHasil;
    localStorage.setItem(
      "identity-Vehicle",
      JSON.stringify(identitas_kendaraan)
    );
    btnTambah.classList.toggle("d-none");
  } else {
    document.getElementById("tempatHasil").innerHTML =
      '<div  class="form"><div class="caption"><h6>Data tidak ditemukan.</h6></div></div>';
  }
  btnSubmit.classList.toggle("d-none");
  btnLoad.classList.toggle("d-none");
  document.getElementById("kataKunci").value = "";
}

function tambahDaftar() {
  const data_perpanjang = JSON.parse(localStorage.getItem("identity-Vehicle"));

  const dataSudahAda = localStorage.getItem("dataPerpanjang");
  // Inisialisasi array untuk menyimpan data
  let dataArray = [];
  if (dataSudahAda) {
    dataArray = JSON.parse(dataSudahAda);
  } else {
    dataArray = [];
  }
  // Tambahkan objek baru ke array
  dataArray.push(data_perpanjang);
  // Simpan kembali array yang sudah diperbarui ke localStorage
  localStorage.setItem("dataPerpanjang", JSON.stringify(dataArray));
  tambahList();
}

function tambahList() {
  // Ambil data dari localStorage
  const storedData = localStorage.getItem("dataPerpanjang");
  // Ambil elemen tbody dari table
  const tbody = document.getElementById("dataPerpanjangTableBody");
  // Bersihkan isi tbody terlebih dahulu
  tbody.innerHTML = "";
  if (storedData) {
    // Ubah string JSON menjadi array
    const dataSetor = JSON.parse(storedData);

    // Tambahkan setiap objek ke dalam <ul>
    dataSetor.forEach((item) => {
      // Buat elemen <tr> menggunakan template literals
      const tr = `
          <tr>
            <td class="text-bold-500">${item.No_Pol}</td>
            <td>
              <a href="#">X</a>
            </td>
          </tr>
        `;

      // Tambahkan <tr> ke dalam tbody
      tbody.innerHTML += tr; // Menambahkan baris baru ke tbody
      const cetakDaftar = document.getElementById("cetak-daftar");
      cetakDaftar.classList.remove("d-none");
    });
  } else {
    // Jika tidak ada data di localStorage
    const tr = `
        <tr>
          <td colspan="2" style="text-align: center;">Tidak ada data</td>
        </tr>
      `;
    tbody.innerHTML += tr; // Menambahkan baris kosong jika tidak ada data
  }
}

function cetakDaftar() {
  localStorage.removeItem("identity-Vehicle");
  localStorage.removeItem("dataPerpanjang");
}

function upperCase(teks) {
  var berdasar = document.getElementById("berdasar").value;

  if (berdasar == "Nopol") {
    // Pisahkan plat nomor menjadi bagian-bagian
    let platNomor = teks.trim().replace(/\s+/g, "");
    // Gunakan ekspresi reguler untuk memisahkan bagian-bagian plat nomor
    let match = platNomor.match(/^([a-zA-Z]+)(\d+)([a-zA-Z]+)$/);
    if (match) {
      // Ambil bagian-bagian yang ditemukan
      let bagian1 = match[1].toUpperCase();
      let bagian2 = match[2];
      let bagian3 = match[3].toUpperCase();
      // Gabungkan kembali bagian-bagian tersebut dengan format yang diinginkan
      let platNomorBaru = `${bagian1} ${bagian2} ${bagian3}`;
      return platNomorBaru;
    }
  } else {
    return teks;
  }
}
