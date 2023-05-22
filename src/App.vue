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
              <a class="me-3" href="tel:+886-976-195-677"
                ><i class="bi-telephone me-2"></i>0976195677</a
              >
              <a
                href="mailto:s900bill@gmail.com?subject=Email%20Subject&body=Email%20Body"
                ><i class="bi-envelope me-2"></i>s900bill@gmail.com</a
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
              <small class="text-primary fw-bolder"
                >2018 - {{ $t('section2.EndTime') }}</small
              >
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
    <section class="p-3 p-md-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section3.Title') }}</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="hstack gap-1 fw-bolder fs-5 mb-2">
            <div
              class="bg-primary rounded me-1"
              style="width: 5px; height: 1lh"
            ></div>
            {{ $t('section3.Subtitle_1') }}
          </div>
          <ul>
            <li>{{ $t('section3.Content_1') }}: HTML, CSS, SCSS, JS, TS</li>
            <li>{{ $t('section3.Content_2') }}: Vue.js</li>
            <li>{{ $t('section3.Content_3') }}: Webpack, Babel, Vite</li>
            <li>
              {{ $t('section3.Content_4') }}: Bootstrap, Element-UI, Ant Design
              Vue
            </li>
            <li>{{ $t('section3.Content_5') }}: Eslint, Prettier</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="hstack gap-1 fw-bolder fs-5 mb-2">
            <div
              class="bg-primary rounded me-1"
              style="width: 5px; height: 1lh"
            ></div>
            {{ $t('section3.Subtitle_2') }}
          </div>
          <ul>
            <li>{{ $t('section3.Content_6') }}: C#</li>
            <li>{{ $t('section3.Content_7') }}: .NET Framework, node.js</li>
            <li>
              {{ $t('section3.Content_8') }}: MSSQL,SQLite,Entity Framework
              ,Redis
            </li>
            <li>
              {{ $t('section3.Content_9') }}:Winform,Windows Service,ASP.NET
              Core
            </li>
            <li>{{ $t('section3.Content_10') }}: Websocket, Signalr, IIS</li>
          </ul>
        </div>
      </div>
    </section>
    <hr style="width: 90%; margin: auto" />
    <section class="p-3 p-lg-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section4.Title') }}</h3>
      <div class="d-flex w-100 justify-content-between flex-wrap">
        <div class="fs-5 fw-bolder d-flex">
          <div
            class="bg-primary rounded me-2"
            style="width: 5px; height: 1lh"
          ></div>
          {{ $t('section4.Subtitle_1') }}
        </div>
        <small class="text-primary fw-bolder">2014 - 2017</small>
      </div>
      <div class="fs-6 text-secondary ms-3">
        {{ $t('section4.Subtitle_2') }}
      </div>
    </section>
    <hr style="width: 90%; margin: auto" />
    <section class="p-3 p-lg-5 fade-in">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section5.Title') }}</h3>
      <div class="row mb-5">
        <div class="col-lg">
          <div class="vstack gap-3">
            <div class="fs-5 fw-bolder d-flex">
              <div
                class="bg-primary rounded me-2"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section5.GServer_Title') }}
            </div>
            <div>
              <div class="fw-bold">{{ $t('section5.Technologies') }}</div>
              <ul class="m-0">
                <li>Vue2、Vuex、Element-UI、EChart</li>
                <li>C# Asp.net 、MSSQL、Redis、Websocket、SignalR</li>
              </ul>
            </div>
            <div>
              <div class="fw-bold">{{ $t('section5.ProjectContent') }}</div>
              <ul class="m-0">
                <li>{{ $t('section5.GServer_Content_1') }}</li>
                <li>{{ $t('section5.GServer_Content_2') }}</li>
                <li>{{ $t('section5.GServer_Content_3') }}</li>
                <li>{{ $t('section5.GServer_Content_4') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="carouselGServer"
          class="col-lg-7 carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="~@/assets/img/GServer/01.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/02.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_2') }}
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/03.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_3') }}
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/04.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_4') }}
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/05.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_5') }}
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/06.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_6') }}
              </div>
            </div>

            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/07.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_7') }}
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/08.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_8') }}
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/GServer/09.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">
                {{ $t('section5.GServer_ImageTitle_9') }}
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselGServer"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-secondary opacity-25"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselGServer"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-secondary opacity-25"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <div class="vstack gap-3">
            <div class="fs-5 fw-bolder d-flex">
              <div
                class="bg-primary rounded me-2"
                style="width: 5px; height: 1lh"
              ></div>
              {{ $t('section5.Gumi_Title') }}
            </div>
            <div>
              <div class="fw-bold">{{ $t('section5.Technologies') }}</div>
              <ul class="m-0">
                <li>Asp.net Core、Vue3、Vite、Ant Design Vue 、i18n</li>
              </ul>
            </div>
            <div>
              <div class="fw-bold">{{ $t('section5.ProjectContent') }}</div>
              <ul class="m-0">
                <li>{{ $t('section5.Gumi_Content_1') }}</li>
                <li>{{ $t('section5.Gumi_Content_2') }}</li>
                <li>{{ $t('section5.Gumi_Content_3') }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="carouselGumi"
          class="col-lg-7 carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner" @click="modalshow = !modalshow">
            <div class="carousel-item active">
              <img
                src="~@/assets/img/Gumi/01.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/Gumi/02.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">{{ $t('section5.Gumi_ImageTitle_2') }}</div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/Gumi/03.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">{{ $t('section5.Gumi_ImageTitle_3') }}</div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/Gumi/04.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">{{ $t('section5.Gumi_ImageTitle_4') }}</div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/Gumi/05.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">{{ $t('section5.Gumi_ImageTitle_5') }}</div>
            </div>
            <div class="carousel-item">
              <img
                src="~@/assets/img/Gumi/06.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">{{ $t('section5.Gumi_ImageTitle_6') }}</div>
            </div>

            <div class="carousel-item">
              <img
                src="~@/assets/img/Gumi/07.png"
                class="d-block w-100"
                alt="..."
              />
              <div class="fw-bold">{{ $t('section5.Gumi_ImageTitle_7') }}</div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselGumi"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-secondary opacity-25"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselGumi"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-secondary opacity-25"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </div>

  <div class="cart-button p-2 border shadow rounded">
    <div class="border border-3 px-2 rounded" role="button" @click="changelang">
      <i class="icon-link bi-translate"></i>
    </div>
    <!-- <div class="border border-3 px-2 rounded " role="button" @click="exportPDF"> <i class="icon-link bi-filetype-pdf"></i>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import html2pdf from 'html2pdf.js'
import { onMounted, ref } from 'vue'

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const { locale, availableLocales } = useI18n({ useScope: 'global' })
onMounted(() => {
  const lan = cookies.get('language')
  locale.value = lan
})
function changelang() {
  if (locale.value === 'en') {
    locale.value = 'zh'
    cookies.set('lan', 'zh')
  } else {
    locale.value = 'en'
    cookies.set('lan', 'en')
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
  // 获取所有的 <section> 元素
  const sections = document.querySelectorAll('section')

  // 创建 Intersection Observer 实例
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  })

  // 监听每个 <section> 元素
  sections.forEach((section) => {
    observer.observe(section)
  })
})

const modalshow = ref(false)
</script>

<style lang="scss">
[v-cloak] {
  //頁面加載前將DOM中的{{}}隱藏
  display: none;
}

:root {
  --bs-primary: #647b71 !important;
  --bs-primary-rgb: 100, 123, 113 !important;
  --bs-link-color: #ffffff !important;
}

body {
  background-color: #f0f0f0;
}

.p-5 {
  padding: 3rem 5rem !important;
}

.a {
  color: white;
}

section {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.active {
  opacity: 1;
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

.modal {
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}
</style>
