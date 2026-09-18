<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#06152f">
<meta name="description" content="Alislamiah AI - متصفح وبحث ذكي">
<title>Alislamiah AI</title>

<style>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

html,body{
    width:100%;
    min-height:100%;
}

body{
    font-family:
        "Segoe UI",
        Tahoma,
        Arial,
        sans-serif;
    color:#fff;
    background:#06152f;
    overflow-x:hidden;
}

/* =========================
   الخلفية الاحترافية
========================= */

.background{
    position:fixed;
    inset:0;
    z-index:-5;
    background:
        radial-gradient(
            circle at 50% 20%,
            rgba(30,111,255,.30),
            transparent 38%
        ),
        radial-gradient(
            circle at 15% 85%,
            rgba(0,166,255,.15),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #020817 0%,
            #06152f 45%,
            #071d3e 100%
        );
}

.background::before{
    content:"";
    position:absolute;
    inset:0;
    background:
        linear-gradient(
            115deg,
            transparent 0%,
            rgba(255,255,255,.025) 45%,
            transparent 70%
        );
    opacity:.8;
}

.grid{
    position:fixed;
    inset:0;
    z-index:-4;
    opacity:.13;
    background-image:
        linear-gradient(
            rgba(80,150,255,.18) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(80,150,255,.18) 1px,
            transparent 1px
        );
    background-size:55px 55px;
    mask-image:linear-gradient(
        to bottom,
        black,
        transparent 80%
    );
}

/* =========================
   الهيدر
========================= */

header{
    width:100%;
    height:72px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 28px;
    border-bottom:1px solid rgba(255,255,255,.08);
    background:rgba(3,13,31,.48);
    backdrop-filter:blur(18px);
    -webkit-backdrop-filter:blur(18px);
}

.brand{
    display:flex;
    align-items:center;
    gap:12px;
}

.brand img{
    width:43px;
    height:43px;
    object-fit:contain;
    border-radius:12px;
}

.brand-name{
    font-size:20px;
    font-weight:700;
    letter-spacing:.2px;
}

.brand-name span{
    color:#4d9cff;
}

.header-actions{
    display:flex;
    align-items:center;
    gap:9px;
}

.header-btn{
    width:42px;
    height:42px;
    border:1px solid rgba(255,255,255,.09);
    border-radius:50%;
    background:rgba(255,255,255,.045);
    color:#dceaff;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-size:19px;
}

/* =========================
   المحتوى الرئيسي
========================= */

.main{
    min-height:calc(100vh - 72px);
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:80px 18px 50px;
}

.hero{
    text-align:center;
    max-width:850px;
    width:100%;
}

.logo-large{
    width:76px;
    height:76px;
    object-fit:contain;
    border-radius:22px;
    margin-bottom:20px;
    filter:drop-shadow(0 12px 30px rgba(0,110,255,.28));
}

h1{
    font-size:clamp(36px,8vw,68px);
    line-height:1.08;
    font-weight:700;
    letter-spacing:-1.5px;
    margin-bottom:14px;
}

h1 span{
    color:#4b9cff;
}

.subtitle{
    color:#b9c9df;
    font-size:17px;
    line-height:1.8;
    margin-bottom:35px;
}

/* =========================
   صندوق البحث
========================= */

.search-wrapper{
    width:100%;
    max-width:760px;
    margin:auto;
}

.search-box{
    width:100%;
    height:68px;
    display:flex;
    align-items:center;
    padding:7px 9px 7px 18px;
    border-radius:36px;
    border:1px solid rgba(142,190,255,.25);
    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.105),
            rgba(255,255,255,.045)
        );
    box-shadow:
        0 18px 55px rgba(0,0,0,.30),
        inset 0 1px 0 rgba(255,255,255,.07);
    backdrop-filter:blur(20px);
    -webkit-backdrop-filter:blur(20px);
}

.search-icon{
    width:45px;
    min-width:45px;
    height:45px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#83baff;
    font-size:23px;
}

#searchInput{
    flex:1;
    height:100%;
    border:0;
    outline:0;
    background:transparent;
    color:#fff;
    font-size:17px;
    padding:0 8px;
    font-family:inherit;
}

#searchInput::placeholder{
    color:#91a5c0;
}

.search-button{
    height:52px;
    min-width:112px;
    border:0;
    border-radius:28px;
    background:
        linear-gradient(
            135deg,
            #1976ff,
            #0757d8
        );
    color:#fff;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    font-family:inherit;
    box-shadow:
        0 8px 25px rgba(0,91,255,.28);
}

.search-button:active{
    transform:scale(.98);
}

/* =========================
   الاختصارات
========================= */

.shortcuts{
    width:100%;
    max-width:850px;
    margin-top:42px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:14px;
}

.shortcut{
    min-height:105px;
    border:1px solid rgba(255,255,255,.08);
    border-radius:18px;
    background:rgba(255,255,255,.045);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;
    color:#dce8f8;
    text-decoration:none;
    cursor:pointer;
    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);
}

.shortcut-icon{
    width:43px;
    height:43px;
    border-radius:13px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(45,126,255,.14);
    color:#66a9ff;
    font-size:21px;
}

.shortcut-title{
    font-size:14px;
}

/* =========================
   معلومات أسفل البحث
========================= */

.info{
    margin-top:38px;
    color:#7286a4;
    font-size:13px;
    text-align:center;
}

.info strong{
    color:#91b8ea;
    font-weight:500;
}

/* =========================
   شريط سفلي
========================= */

.bottom-nav{
    position:fixed;
    bottom:18px;
    left:50%;
    transform:translateX(-50%);
    width:min(440px,calc(100% - 30px));
    height:62px;
    border:1px solid rgba(255,255,255,.09);
    border-radius:32px;
    background:rgba(3,13,31,.82);
    backdrop-filter:blur(22px);
    -webkit-backdrop-filter:blur(22px);
    display:flex;
    align-items:center;
    justify-content:space-around;
    box-shadow:0 15px 45px rgba(0,0,0,.35);
}

.nav-item{
    flex:1;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:3px;
    color:#7288a8;
    text-decoration:none;
    font-size:11px;
    cursor:pointer;
}

.nav-item.active{
    color:#5fa5ff;
}

.nav-icon{
    font-size:21px;
}

/* =========================
   نافذة الإعدادات
========================= */

.settings-overlay{
    display:none;
    position:fixed;
    inset:0;
    z-index:20;
    background:rgba(0,0,0,.58);
    backdrop-filter:blur(7px);
}

.settings{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:min(430px,calc(100% - 30px));
    border:1px solid rgba(255,255,255,.1);
    border-radius:24px;
    background:#071a36;
    padding:25px;
    box-shadow:0 25px 80px rgba(0,0,0,.5);
}

.settings h2{
    font-size:21px;
    margin-bottom:20px;
}

.setting-row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:15px 0;
    border-bottom:1px solid rgba(255,255,255,.06);
    color:#c9d7e9;
}

.close-settings{
    margin-top:20px;
    width:100%;
    height:46px;
    border:0;
    border-radius:12px;
    background:#1268e8;
    color:white;
    font-family:inherit;
    font-size:15px;
}

/* =========================
   الهاتف
========================= */

@media(max-width:650px){

    header{
        height:64px;
        padding:0 16px;
    }

    .brand img{
        width:38px;
        height:38px;
    }

    .brand-name{
        font-size:17px;
    }

    .header-btn{
        width:38px;
        height:38px;
    }

    .main{
        min-height:calc(100vh - 64px);
        padding-top:68px;
    }

    .logo-large{
        width:65px;
        height:65px;
    }

    h1{
        font-size:43px;
    }

    .subtitle{
        font-size:15px;
        margin-bottom:28px;
    }

    .search-box{
        height:62px;
        padding-left:8px;
    }

    .search-icon{
        min-width:39px;
        width:39px;
        font-size:20px;
    }

    #searchInput{
        font-size:15px;
    }

    .search-button{
        min-width:82px;
        height:48px;
        font-size:14px;
    }

    .shortcuts{
        grid-template-columns:repeat(2,1fr);
        gap:11px;
        margin-top:30px;
    }

    .shortcut{
        min-height:92px;
    }

    .info{
        margin-bottom:70px;
    }
}

/* شاشات صغيرة جدًا */

@media(max-width:370px){

    h1{
        font-size:37px;
    }

    .search-button{
        min-width:72px;
    }

    .search-icon{
        display:none;
    }
}
</style>
</head>

<body>

<div class="background"></div>
<div class="grid"></div>

<!-- =========================
     الهيدر
========================= -->

<header>

    <div class="brand">
        <img src="icon.png" alt="Alislamiah AI">
        <div class="brand-name">
            Alislamiah <span>AI</span>
        </div>
    </div>

    <div class="header-actions">
        <button class="header-btn" onclick="openSettings()" aria-label="الإعدادات">
            ⚙
        </button>
    </div>

</header>

<!-- =========================
     المحتوى
========================= -->

<main class="main">

    <section class="hero">

        <img
            class="logo-large"
            src="icon.png"
            alt="Alislamiah AI"
        >

        <h1>
            Alislamiah <span>AI</span>
        </h1>

        <p class="subtitle">
            ابحث في الويب بطريقة بسيطة وسريعة وآمنة
        </p>

        <!-- البحث -->

        <form class="search-wrapper" onsubmit="performSearch(event)">

            <div class="search-box">

                <div class="search-icon">
                    🔍
                </div>

                <input
                    id="searchInput"
                    type="search"
                    autocomplete="off"
                    placeholder="ماذا تريد أن تبحث عنه؟"
                    aria-label="البحث"
                >

                <button
                    class="search-button"
                    type="submit"
                >
                    بحث
                </button>

            </div>

        </form>

        <!-- الاختصارات -->

        <div class="shortcuts">

            <a
                class="shortcut"
                href="results_full.html?q=القرآن الكريم"
            >
                <div class="shortcut-icon">📖</div>
                <div class="shortcut-title">القرآن الكريم</div>
            </a>

            <a
                class="shortcut"
                href="results_full.html?q=مواقع إسلامية"
            >
                <div class="shortcut-icon">☪</div>
                <div class="shortcut-title">الإسلامية</div>
            </a>

            <a
                class="shortcut"
                href="results_full.html?q=الأخبار"
            >
                <div class="shortcut-icon">📰</div>
                <div class="shortcut-title">الأخبار</div>
            </a>

            <a
                class="shortcut"
                href="results_full.html?q=الويب"
            >
                <div class="shortcut-icon">🌐</div>
                <div class="shortcut-title">استكشاف الويب</div>
            </a>

        </div>

        <div class="info">
            بحثك يتم إرساله إلى
            <strong>Alislamiah AI</strong>
        </div>

    </section>

</main>

<!-- =========================
     التنقل السفلي
========================= -->

<nav class="bottom-nav">

    <a
        class="nav-item active"
        href="index.html"
    >
        <span class="nav-icon">⌂</span>
        <span>الرئيسية</span>
    </a>

    <a
        class="nav-item"
        href="results_full.html"
    >
        <span class="nav-icon">⌕</span>
        <span>البحث</span>
    </a>

    <div
        class="nav-item"
        onclick="openSettings()"
    >
        <span class="nav-icon">⚙</span>
        <span>الإعدادات</span>
    </div>

</nav>

<!-- =========================
     الإعدادات
========================= -->

<div
    class="settings-overlay"
    id="settingsOverlay"
    onclick="closeSettingsOutside(event)"
>

    <div class="settings">

        <h2>إعدادات Alislamiah AI</h2>

        <div class="setting-row">
            <span>محرك البحث</span>
            <strong>Alislamiah</strong>
        </div>

        <div class="setting-row">
            <span>المظهر</span>
            <strong>داكن</strong>
        </div>

        <div class="setting-row">
            <span>صفحة النتائج</span>
            <strong>results_full.html</strong>
        </div>

        <button
            class="close-settings"
            onclick="closeSettings()"
        >
            إغلاق
        </button>

    </div>

</div>

<script>

/* =========================
   تنفيذ البحث
========================= */

function performSearch(event){

    event.preventDefault();

    const input =
        document.getElementById("searchInput");

    const query =
        input.value.trim();

    if(!query){
        input.focus();
        return;
    }

    /*
      إرسال البحث إلى صفحة النتائج
      مثال:
      results_full.html?q=القرآن
    */

    const url =
        "results_full.html?q=" +
        encodeURIComponent(query);

    window.location.href = url;
}


/* =========================
   فتح الإعدادات
========================= */

function openSettings(){

    document.getElementById(
        "settingsOverlay"
    ).style.display = "block";

}


/* =========================
   إغلاق الإعدادات
========================= */

function closeSettings(){

    document.getElementById(
        "settingsOverlay"
    ).style.display = "none";

}


function closeSettingsOutside(event){

    if(
        event.target ===
        document.getElementById("settingsOverlay")
    ){
        closeSettings();
    }

}


/* =========================
   زر Enter
========================= */

document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event){

        if(event.key === "Enter"){

            event.preventDefault();

            document
                .querySelector(".search-wrapper")
                .requestSubmit();

        }

    });

</script>

</body>
</html>

