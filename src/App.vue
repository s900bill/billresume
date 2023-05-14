<template>
  <!-- <div class="container fs-5 mt-3  p-1 hstack gap-3">
    <div class="border border-3 px-2 rounded ms-auto" role="button" @click="changelang"> <i
        class="icon-link bi-translate "></i></div>
    <div class="border border-3 px-2 rounded " role="button" @click="exportPDF"> <i class="icon-link bi-filetype-pdf"></i>
    </div>
  </div> -->
  <div class="mt-5"></div>
  <div id="content" class="container p-0  bg-white mb-3  rounded shadow ">
    <section class="p-3 p-md-4 bg-primary">
      <div class="row">
        <div class="col-sm-4 col-lg-3 col-xl-2 ">
          <div class="mb-3  " style="max-width: 180px;">
            <img src="~@/assets/img/Photo.jpg" class="rounded img-fluid " alt="...">
          </div>
        </div>

        <div class="col-sm  text-white">
          <div class="d-flex justify-content-between flex-wrap">
            <div>
              <h1 class=" fw-bolder"> {{ $t('section1.Name') }}</h1>
              <h5 class=" fw-bolder"> {{ $t('section1.JobTitle') }}</h5>
            </div>
            <div class="d-flex flex-wrap mb-3">
              <a class=" me-3" href="tel:+886-976-195-677"><i class="bi-telephone me-2"></i>0976195677</a>
              <a href="mailto:s900bill@gmail.com?subject=Email%20Subject&body=Email%20Body"><i
                  class="bi-envelope me-2"></i>s900bill@gmail.com</a>
            </div>
          </div>
          <div class="d-sm-block d-none">
            <li class="fw-bold fs-5 text-warning"> {{ $t('section1.Item1') }} <br v-if="locale == 'en'" />
              <small class="fs-7 text-white" :class="locale == 'en' ? 'blockquote-footer text-opacity-75 ms-3' : ''">{{
                $t('section1.ItemDetail1') }}</small>
            </li>
            <li class="fw-bold fs-5 text-warning"> {{ $t('section1.Item2') }} <br v-if="locale == 'en'" />
              <small class="fs-7 text-white" :class="locale == 'en' ? 'blockquote-footer text-opacity-75 ms-3' : ''">{{
                $t('section1.ItemDetail2') }}</small>
            </li>
            <li class="fw-bold fs-5 text-warning"> {{ $t('section1.Item3') }} <br v-if="locale == 'en'" />
              <small class="fs-7 text-white" :class="locale == 'en' ? 'blockquote-footer text-opacity-75 ms-3' : ''">{{
                $t('section1.ItemDetail3') }}</small>
            </li>
            <li class="fw-bold fs-5 text-warning"> {{ $t('section1.Item4') }} <br v-if="locale == 'en'" />
              <small class="fs-7 text-white" :class="locale == 'en' ? 'blockquote-footer text-opacity-75 ms-3' : ''">{{
                $t('section1.ItemDetail4') }}</small>
            </li>
            <!-- <li> {{ $t('section1.Item1') }} <br/><i class="blockquote-footer ms-5">{{ $t('section1.ItemDetail1')  }}</i></li>
   <li> {{ $t('section1.Item2') }} <br/><i class="blockquote-footer ms-5">{{ $t('section1.ItemDetail2')  }}</i></li>
   <li> {{ $t('section1.Item3') }} <br/><i class="blockquote-footer ms-5">{{ $t('section1.ItemDetail3')  }}</i></li>
   <li> {{ $t('section1.Item4') }} <br/><i class="blockquote-footer ms-5">{{ $t('section1.ItemDetail4')  }}</i></li> -->


          </div>

        </div>
        <div class="float-start d-sm-none d-block text-white">
          <li> {{ $t('section1.Item1') }}</li>
          <li> {{ $t('section1.Item2') }}</li>
        </div>
      </div>
    </section>
    <section class="p-3 p-sm-5">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section2.Title') }}</h3>
      <div class="">
        <div class="mb-3 ">

          <div class="d-flex w-100 justify-content-between flex-wrap">
            <div class="fs-5 fw-bolder">{{ $t('section2.JobTitle') }}</div>
            <small class="text-primary fw-bolder">2018 - {{ $t('section2.EndTime') }}</small>
          </div>
          <div class="fs-6 text-secondary">{{ $t('section2.Company') }}</div>
        </div>
        <div class="vstack gap-3 ps-3">
          <div>
            <div class="hstack gap-1 fw-bolder">
              <div class="bg-primary  rounded" style="width:5px;height:1lh"></div>{{ $t('section2.Subtitle_1') }}
            </div>
            <ul>
              <li>{{ $t('section2.Content_1') }}</li>
              <li>{{ $t('section2.Content_2') }}</li>
              <li>{{ $t('section2.Content_3') }}</li>
            </ul>
          </div>
          <div>
            <div class="hstack gap-1 fw-bolder">
              <div class="bg-primary  rounded" style="width:5px;height:1lh"></div>{{ $t('section2.Subtitle_2') }}
            </div>
            <ul>
              <li>{{ $t('section2.Content_4') }}</li>
              <li>{{ $t('section2.Content_5') }}</li>
              <li>{{ $t('section2.Content_6') }}</li>
            </ul>
          </div>
          <div>
            <div class="hstack gap-1 fw-bolder">
              <div class="bg-primary  rounded" style="width:5px;height:1lh"></div>{{ $t('section2.Subtitle_3') }}
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
    <hr style="width:90%;margin:auto">
    <section class="p-3 p-md-5">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section3.Title') }}</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="hstack gap-1 fw-bolder fs-5 mb-2">
            <div class="bg-primary rounded me-1" style=" width:5px;height:1lh"></div>{{ $t('section3.Subtitle_1') }}
          </div>
          <ul>
            <li>{{ $t('section3.Content_1') }}: HTML, CSS, SCSS, JS, TS</li>
            <li>{{ $t('section3.Content_2') }}: Vue.js</li>
            <li>{{ $t('section3.Content_3') }}: Webpack, Babel, Vite</li>
            <li>{{ $t('section3.Content_4') }}: Bootstrap, Element-UI, Ant Design Vue</li>
            <li>{{ $t('section3.Content_5') }}: Eslint, Prettier</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="hstack gap-1 fw-bolder fs-5 mb-2">
            <div class="bg-primary rounded me-1" style="width:5px;height:1lh"></div>{{ $t('section3.Subtitle_2') }}
          </div>
          <ul>
            <li>{{ $t('section3.Content_6') }}: C#</li>
            <li>{{ $t('section3.Content_7') }}: .NET Framework, node.js</li>
            <li>{{ $t('section3.Content_8') }}: MSSQL,SQLite,Entity Framework ,Redis</li>
            <li>{{ $t('section3.Content_9') }}:Winform,Windows Service,ASP.NET Core</li>
            <li>{{ $t('section3.Content_10') }}: Websocket, Signalr, IIS</li>
          </ul>
        </div>
      </div>
    </section>
    <hr style="width:90%;margin:auto">
    <section class="p-3 p-lg-5 ">
      <h3 class="text-primary fw-bolder mb-3">{{ $t('section4.Title') }}</h3>
      <div class="d-flex w-100 justify-content-between flex-wrap">
        <div class="fs-5 fw-bolder d-flex ">
          <div class="bg-primary rounded me-2" style=" width:5px;height:1lh"></div>{{ $t('section4.Subtitle_1') }}
        </div>
        <small class="text-primary fw-bolder">2014 - 2017</small>
      </div>
      <div class="fs-6 text-secondary ms-3">{{ $t('section4.Subtitle_2') }}</div>
    </section>
  </div>
  <div class="cart-button p-2 border shadow rounded">
    <div class="border border-3 px-2 rounded mb-2" role="button" @click="changelang"> <i
        class="icon-link bi-translate "></i></div>
    <div class="border border-3 px-2 rounded " role="button" @click="exportPDF"> <i class="icon-link bi-filetype-pdf"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import html2pdf from 'html2pdf.js'
const { locale, availableLocales } = useI18n({ useScope: 'global' })
function changelang() {
  if (locale.value === 'en') {
    locale.value = 'zh';
  } else {
    locale.value = 'en';
  }
}

function exportPDF() {
  const element = document.querySelector('#content');
  const opt = {
    margin: 0,
    filename: 'BillHsu徐靖壹.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };
  html2pdf().set(opt).from(element).save();
}

</script>

<style lang="scss">
[v-cloak] {
  //頁面加載前將DOM中的{{}}隱藏
  display: none;
}

:root {

  --bs-primary: #647b71 !important;
  --bs-primary-rgb: 100, 123, 113 !important;
  --bs-link-color: #FFA500 !important
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
}</style>
