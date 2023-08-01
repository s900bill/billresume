<template>
  <div class="mt-5"></div>
  <div id="content" class="container p-0 bg-white mb-3 rounded shadow">
    <section class="p-4 p-lg-4 bg-primary fade-in">
      <div class="row">
        <div class="col-md-3 col-xl-2">
          <div class="mb-3 mx-auto" style="max-width: 180px">
            <img
              src="~@/assets/img/Photo.jpg"
              class="rounded img-fluid"
              alt="..."
            />
          </div>
        </div>

        <div class="col-md text-white">
          <div class="d-none d-md-flex justify-content-between flex-wrap">
            <div>
              <h1 class="fw-bolder">{{ $t('section1.Name') }}</h1>
              <h5 class="fw-bolder">{{ $t('section1.JobTitle') }}</h5>
            </div>
            <div class="d-flex flex-wrap mb-3">
              <a
                class="me-3"
                href="mailto:s900bill@gmail.com?subject=Email%20Subject&body=Email%20Body"
                ><i class="bi-envelope me-2"></i>s900bill@gmail.com</a
              >
              <a href="tel:+886-976-195-677"
                ><i class="bi-telephone me-2"></i>0976195677</a
              >
            </div>
          </div>
          <div class="d-block d-md-none text-center">
            <div>
              <h1 class="fw-bolder">{{ $t('section1.Name') }}</h1>
              <h5 class="fw-bolder">{{ $t('section1.JobTitle') }}</h5>
            </div>
            <div class="d-flex justify-content-center flex-wrap mb-3">
              <a class="me-3" href="tel:+886-976-195-677"
                ><i class="bi-telephone me-2"></i>0976195677</a
              >
              <a
                href="mailto:s900bill@gmail.com?subject=Email%20Subject&body=Email%20Body"
                ><i class="bi-envelope me-2"></i>s900bill@gmail.com</a
              >
            </div>
          </div>
          <div class="">
            <div class="hstack">
              <div class="dot align-self-start"></div>
              <div class="fw-bold fs-5 text-warning">
                {{ $t('section1.Item1') }}
              </div>
              <div
                class="text-opacity-75 text-white fs-7 ms-1"
                :class="locale === 'zh' ? 'd-lg-block d-none' : 'd-none'"
              >
                {{ $t('section1.ItemDetail1') }}
              </div>
            </div>
            <div
              class="fs-7 text-white text-opacity-75 ms-4"
              :class="locale === 'zh' ? 'd-lg-none d-block' : 'd-block'"
            >
              {{ $t('section1.ItemDetail1') }}
            </div>
            <div class="hstack">
              <div class="dot align-self-start"></div>
              <div class="fw-bold fs-5 text-warning">
                {{ $t('section1.Item2') }}
              </div>
              <div
                class="text-opacity-75 text-white fs-7 ms-1"
                :class="locale === 'zh' ? 'd-lg-block d-none' : 'd-none'"
              >
                {{ $t('section1.ItemDetail2') }}
              </div>
            </div>
            <div
              class="fs-7 text-white text-opacity-75 ms-4"
              :class="locale === 'zh' ? 'd-lg-none d-block' : 'd-block'"
            >
              {{ $t('section1.ItemDetail2') }}
            </div>
            <div class="hstack">
              <div class="dot align-self-start"></div>
              <div class="fw-bold fs-5 text-warning">
                {{ $t('section1.Item3') }}
              </div>
              <div
                class="text-opacity-75 text-white fs-7 ms-1"
                :class="locale === 'zh' ? 'd-lg-block d-none' : 'd-none'"
              >
                {{ $t('section1.ItemDetail3') }}
              </div>
            </div>
            <div
              class="fs-7 text-white text-opacity-75 ms-4"
              :class="locale === 'zh' ? 'd-lg-none d-block' : 'd-block'"
            >
              {{ $t('section1.ItemDetail3') }}
            </div>
            <div class="hstack">
              <div class="dot align-self-start"></div>
              <div class="fw-bold fs-5 text-warning">
                {{ $t('section1.Item4') }}
              </div>
              <div
                class="text-opacity-75 text-white fs-7 ms-1"
                :class="locale === 'zh' ? 'd-lg-block d-none' : 'd-none'"
              >
                {{ $t('section1.ItemDetail4') }}
              </div>
            </div>
            <div
              class="fs-7 text-white text-opacity-75 ms-4"
              :class="locale === 'zh' ? 'd-lg-none d-block' : 'd-block'"
            >
              {{ $t('section1.ItemDetail4') }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="p-3 p-sm-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section2.Title') }}</h3>
      <div class="">
        <div class="hstack gap-3 mb-3">
          <img src="~@/assets/img/Company/GUTC.svg" class="" alt="..." />
          <div class="flex-grow-1">
            <div class="d-flex w-100 justify-content-between flex-wrap">
              <div class="fs-5 fw-bolder">{{ $t('section2.JobTitle') }}</div>
              <small class="text-primary fw-bolder">2018.01 - 2023-07</small>
            </div>
            <div class="fs-6 text-secondary">{{ $t('section2.Company') }}</div>
          </div>
        </div>

        <div class="vstack gap-3 ps-3">
          <div>
            <div class="hstack gap-1 fw-bolder">
              <div
                class="bg-primary rounded"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section2.Subtitle_1') }}
            </div>
            <ul>
              <li>{{ $t('section2.Content_1') }}</li>
              <li>{{ $t('section2.Content_2') }}</li>
              <li>{{ $t('section2.Content_3') }}</li>
            </ul>
          </div>
          <div>
            <div class="hstack gap-1 fw-bolder">
              <div
                class="bg-primary rounded"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section2.Subtitle_2') }}
            </div>
            <ul>
              <li>{{ $t('section2.Content_4') }}</li>
              <li>{{ $t('section2.Content_5') }}</li>
              <li>{{ $t('section2.Content_6') }}</li>
            </ul>
          </div>
          <div>
            <div class="hstack gap-1 fw-bolder">
              <div
                class="bg-primary rounded"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section2.Subtitle_3') }}
            </div>
            <ul>
              <li>{{ $t('section2.Content_7') }}</li>
              <li>{{ $t('section2.Content_8') }}</li>
              <li>{{ $t('section2.Content_9') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <hr style="width: 90%; margin: auto" />

    <section class="p-3 p-lg-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section3.Title') }}</h3>
      <div class="row mb-5">
        <div class="col-lg">
          <div class="vstack gap-3">
            <div class="fs-5 fw-bolder d-flex">
              <div
                class="bg-primary rounded me-2"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section3.GServer_Title') }}
            </div>
            <div>
              <div class="fw-bold">{{ $t('section3.Technologies') }}</div>
              <ul class="m-0">
                <li>Vue2、Vuex、Element-UI、EChart</li>
                <li>C# Asp.net 、MSSQL、Redis、Websocket、SignalR</li>
              </ul>
            </div>
            <div>
              <div class="fw-bold">{{ $t('section3.ProjectContent') }}</div>
              <ul class="m-0">
                <li>{{ $t('section3.GServer_Content_1') }}</li>
                <li>{{ $t('section3.GServer_Content_2') }}</li>
                <li>{{ $t('section3.GServer_Content_3') }}</li>
                <li>{{ $t('section3.GServer_Content_4') }}</li>
              </ul>
            </div>
          </div>
        </div>
        <modal :Project="'GServer'" :ImageCount="9"></modal>
      </div>

      <div class="row">
        <div class="col-lg">
          <div class="vstack gap-3">
            <div class="fs-5 fw-bolder d-flex">
              <div
                class="bg-primary rounded me-2"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section3.Gumi_Title') }}
            </div>
            <div>
              <div class="fw-bold">{{ $t('section3.Technologies') }}</div>
              <ul class="m-0">
                <li>Asp.net Core、Vue3、Vite、Ant Design Vue 、i18n</li>
              </ul>
            </div>
            <div>
              <div class="fw-bold">{{ $t('section3.ProjectContent') }}</div>
              <ul class="m-0">
                <li>{{ $t('section3.Gumi_Content_1') }}</li>
                <li>{{ $t('section3.Gumi_Content_2') }}</li>
                <li>{{ $t('section3.Gumi_Content_3') }}</li>
              </ul>
            </div>
          </div>
        </div>
        <modal :Project="'Gumi'" :ImageCount="7"></modal>
      </div>
    </section>
    <hr style="width: 90%; margin: auto" />

    <section class="p-3 p-md-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section4.Title') }}</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="hstack gap-1 fw-bolder fs-5 mb-2">
            <div
              class="bg-primary rounded me-1"
              style="width: 5px; height: 1lh"
            ></div>
            {{ $t('section4.Subtitle_1') }}
          </div>
          <ul>
            <li>{{ $t('section4.Content_1') }}: HTML, CSS, SCSS, JS, TS</li>
            <li>{{ $t('section4.Content_2') }}: Vue.js</li>
            <li>{{ $t('section4.Content_3') }}: Webpack, Babel, Vite</li>
            <li>
              {{ $t('section4.Content_4') }}: Bootstrap, Element-UI, Ant Design
              Vue
            </li>
            <li>{{ $t('section4.Content_5') }}: Eslint, Prettier</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="hstack gap-1 fw-bolder fs-5 mb-2">
            <div
              class="bg-primary rounded me-1"
              style="width: 5px; height: 1lh"
            ></div>
            {{ $t('section4.Subtitle_2') }}
          </div>
          <ul>
            <li>{{ $t('section4.Content_6') }}: C#</li>
            <li>{{ $t('section4.Content_7') }}: .NET Framework, node.js</li>
            <li>
              {{ $t('section4.Content_8') }}: MSSQL,SQLite,Entity Framework
              ,Redis
            </li>
            <li>
              {{ $t('section4.Content_9') }}:Winform,Windows Service,ASP.NET
              Core
            </li>
            <li>{{ $t('section4.Content_10') }}: Websocket, Signalr, IIS</li>
          </ul>
        </div>
      </div>
    </section>
    <hr style="width: 90%; margin: auto" />

    <section class="p-3 p-lg-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section5.Title') }}</h3>
      <div class="d-flex w-100 justify-content-between flex-wrap">
        <div class="fs-5 fw-bolder d-flex">
          <div
            class="bg-primary rounded me-2"
            style="width: 5px; height: 1lh"
          ></div>
          {{ $t('section5.Subtitle_1') }}
        </div>
        <small class="text-primary fw-bolder">2013.09 - 2017.06</small>
      </div>
      <div class="fs-6 text-secondary ms-3">
        {{ $t('section5.Subtitle_2') }}
      </div>
    </section>
    <hr style="width: 90%; margin: auto" />

    <section class="p-3 p-lg-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section6.Title') }}</h3>
      <div class="d-flex w-100 justify-content-between flex-wrap">
        <div
          class="fs-5 fw-bolder d-flex text-hover"
          @click="openbadgelink('AZ104')"
          role="button"
        >
          <div
            class="bg-primary rounded me-2"
            style="width: 5px; height: 1lh"
          ></div>
          {{ $t('section6.Badge1_Title') }}
        </div>
        <small class="text-primary fw-bolder">
          {{ $t('section6.Badge1_Earnedon') }}</small
        >
      </div>
      <div class="fs-6 text-secondary ms-md-3">
        {{ $t('section6.IDNumber')
        }}<span class="ms-1 text-primary fw-bold">5515F2-9714DM</span>
      </div>
      <div class="shadow border rounded m-3 text-center">
        <img
          :src="getBadgeImage('AZ104').href"
          class="rounded img-fluid"
          alt="..."
        />
      </div>
s
      <div class="d-flex w-100 justify-content-between flex-wrap mt-5">
        <div
          class="fs-5 fw-bolder d-flex text-hover"
          @click="openbadgelink('AZ900')"
          role="button"
        >
          <div
            class="bg-primary rounded me-2"
            style="width: 5px; height: 1lh"
          ></div>
          {{ $t('section6.Badge2_Title') }}
        </div>
        <small class="text-primary fw-bolder">
          {{ $t('section6.Badge2_Earnedon') }}</small
        >
      </div>
      <div class="fs-6 text-secondary ms-md-3">
        {{ $t('section6.IDNumber')
        }}<span class="ms-1 text-primary fw-bold">14A832-5C136E </span>
      </div>
      <div class="shadow border rounded m-3 text-center">
        <img
          :src="getBadgeImage('AZ900').href"
          class="rounded img-fluid"
          alt="..."
        />
      </div>
    </section>
  </div>

  <div class="cart-button p-2 border shadow rounded">
    <div class="border border-3 px-2 rounded" role="button" @click="changelang">
      <i class="icon-link bi-translate"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import html2pdf from 'html2pdf.js'
import modal from './component/modal.vue'
import { onMounted, ref } from 'vue'
import { useCookies } from 'vue3-cookies'
import { watch } from 'fs'
const { cookies } = useCookies()

const { locale, availableLocales } = useI18n({ useScope: 'global' })
onMounted(() => {
  const lan = cookies.get('language')
  if (lan) {
    locale.value = lan
  }
})
function changelang() {
  if (locale.value === 'en') {
    locale.value = 'zh'
    cookies.set('language', 'zh')
  } else {
    locale.value = 'en'
    cookies.set('language', 'en')
  }
}

function exportPDF() {
  const element = document.querySelector('#content')
  const opt = {
    margin: 0,
    filename: 'BillHsu徐靖壹.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }
  html2pdf().set(opt).from(element).save()
}

onMounted(() => {
  const sections = document.querySelectorAll('section')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('activesection')
      }
    })
  })
  sections.forEach((section) => {
    observer.observe(section)
  })
})

const openbadgelink = (badge) => {
  let link = ''
  switch (badge) {
    case 'AZ104':
      link =
        'https://learn.microsoft.com/api/credentials/share/zh-tw/07607827/D4CD1C0E3C5ED2B6?sharingId=E7474A5401E0874A'
      break
    case 'AZ900':
      link =
        'https://learn.microsoft.com/api/credentials/share/zh-tw/07607827/30B59E296A4D37F7?sharingId=E7474A5401E0874A'
      break
  }
  window.open(link)
}
const getBadgeImage = (badge: string): URL => {
  return new URL(
    `../src/assets/img/Badge/${badge}_${locale.value}.png`,
    import.meta.url
  )
}

// const badgeimage=ref({
//   'AZ900_en': new URL(`../assets/img/Badge/AZ900_en.png`, import.meta.url ),
//   'AZ900_zh': new URL(`../assets/img/Badge/AZ900_zh.png`, import.meta.url ),
//   'AZ104_en': new URL(`../assets/img/Badge/AZ104_en.png`, import.meta.url ),
//   'AZ104_zh': new URL(`../assets/img/Badge/AZ104_zh.png`, import.meta.url ),

// });
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';

[v-cloak] {
  //頁面加載前將DOM中的{{}}隱藏
  display: none;
}

:root {
  --bs-primary: #647b71 !important;
  --bs-primary-rgb: 100, 123, 113 !important;
  --bs-link-color: #ffffff !important;
  --bs-link-hover-color: #ffc107 !important;
}

body {
  background-color: #f0f0f0;
}

.p-5 {
  padding: 3rem 5rem !important;
}

.a:hover {
  color: #ffc107;
}

section {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.activesection {
  opacity: 1;
}

.text-hover {
  &:hover {
    color: #ffc107;
  }
}

.cart-button {
  position: fixed;
  top: 90%;
  right: 30px;
  transform: translateY(-50%);
  background-color: #fff;

  div:hover {
    color: #647b71;
    border-color: #647b71;
  }
}

.dot::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #ffc107;
  border-radius: 50%;
  margin: 12px 10px 0 10px;
}

.carousel-item {
  img {
    display: block;
    width: 100%;
  }
}

.fullscreen {
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  .carousel-control-prev,
  .carousel-control-next {
    width: 8%;
  }

  .carousel-item {
    padding: 0% 5%;
    margin: auto;
  }
}
</style>
