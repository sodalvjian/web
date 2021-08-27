<template>
  <div class="bg-color-white mercury-home">
    <header class="container">
      <a href="https://melaxtech.com/">
        <img
          class="home-logo mt-20"
          src="../../assets/img/melax_logo.png"
          alt=""
      /></a>
    </header>
    <section class="mercury-banner">
      <el-row class="container">
        <el-col :sm="10" class="color-white">
          <h1><img src="../../assets/img/logo_mercury.png" alt="" /></h1>
          <div class="mt-30 f18 lh2">
            Mercury Natural Language Processing makes quick work of your medical
            data extraction projects-- accurately and at a fraction of the cost
            of other web-based products.
          </div>
          <div class="mt-50">
            <router-link to="/realtimeAnalysis">
              <el-button
                type="danger"
                class="f16 mercury-try-it"
                :style="'background:#4ebebf;border:1px solid #4ebebf'"
              >
                Try it now
              </el-button></router-link
            >
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="container">
      <el-row class="mercury-nav " :gutter="20">
        <el-col :sm="6" class="mt-20">
          <el-card :body-style="{ padding: '30px' }" shadow="always">
            <div>
              <svg class="icon f22" aria-hidden="true">
                <use xlink:href="#icon-price" />
              </svg>
              <span class="ml-10 fb f20">Affordable</span>
            </div>
            <div
              class="mt-15 f15 lh2 mercury-nav-content"
              title=" Pricing to allow you to get large amounts of data processed within
              budget"
            >
              Process large amounts of data inexpensively
            </div>
          </el-card>
        </el-col>
        <el-col :sm="6" class="mt-20">
          <el-card :body-style="{ padding: '30px' }" shadow="always">
            <div>
              <svg class="icon f22" aria-hidden="true">
                <use xlink:href="#icon-pipelines" />
              </svg>
              <span class="ml-10 fb f20">More Pipelines</span>
            </div>
            <div
              class="mt-15 f15 lh2 mercury-nav-content"
              title="More pipelines - with six medical pipelines and more added regularly extract only the data you need"
            >
              Six medical pipelines and more added regularly to extract only the
              data you need
            </div>
          </el-card>
        </el-col>
        <el-col :sm="6" class="mt-20">
          <el-card :body-style="{ padding: '30px' }" shadow="always">
            <div>
              <svg class="icon f22" aria-hidden="true">
                <use xlink:href="#icon-Analysis" />
              </svg>
              <span class="ml-10 fb f20">Analysis</span>
            </div>
            <div
              class="mt-15 f15 lh2 mercury-nav-content"
              title="Real-Time analysist"
            >
              Save time and frustration with real-time analysis
            </div>
          </el-card>
        </el-col>
        <el-col :sm="6" class="mt-20">
          <el-card :body-style="{ padding: '30px' }" shadow="always">
            <div>
              <svg class="icon f22" aria-hidden="true">
                <use xlink:href="#icon-Deploy" />
              </svg>
              <span class="ml-10 fb f20">Security</span>
            </div>
            <div
              class="mt-15 f15 lh2 mercury-nav-content"
              title="The option of deploying on your own server"
            >
              Deploy Mercury NLP on your own server
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <!-- <section class="container">
      <div class="mercury-why">
        <h1 class="tc">Why MERCURY NLP</h1>
        <el-row class="mt-80 why-nlp-container" :gutter="20">
          <el-col :sm="6">
            <el-card
              :body-style="{ padding: '30px' }"
              shadow="hover"
              class="bordernone tc"
            >
              <div>
                <img src="@/assets/img/home/fast.svg" alt="" />
              </div>
              <h2>FAST</h2>
              <div class="mt-15 f15 lh2 mercury-nav-content">
                Give me some copywriting
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card
              :body-style="{ padding: '30px' }"
              shadow="hover"
              class="bordernone tc"
            >
              <div>
                <img src="@/assets/img/home/ACCURATE.svg" alt="" />
              </div>
              <h2>ACCURATE</h2>
              <div class="mt-15 f15 lh2 mercury-nav-content">
                Give me some copywriting
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card
              :body-style="{ padding: '30px' }"
              shadow="hover"
              class="bordernone tc"
            >
              <div>
                <img src="@/assets/img/home/SECURE.svg" alt="" />
              </div>
              <h2>SECURE</h2>
              <div class="mt-15 f15 lh2 mercury-nav-content">
                Give me some copywriting
              </div>
            </el-card>
          </el-col>
          <el-col :sm="6">
            <el-card
              :body-style="{ padding: '30px' }"
              shadow="hover"
              class="bordernone tc"
            >
              <div>
                <img src="@/assets/img/home/AFFORDABLE.svg" alt="" />
              </div>
              <h2>AFFORDABLE</h2>
               <div class="mt-15 f15 lh2 mercury-nav-content">
                Give me some copywriting
              </div> 
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section> -->
    <section class="mercury-color-block"></section>
    <section class="container mercury-color-description">
      <el-card
        :body-style="{ padding: '30px' }"
        shadow="always"
        class="bordernone bc w85"
      >
        <main class="mt-15 color-6 f15">
          <div>
            MERCURY NLP is user-friendly: cut & paste data, apply a pipeline and
            filters, get real-time analytical results. Spend only as much as you
            need to process a job. Mercury NLP is pay-per-byte and half the
            price of our competitors. Your jobs are your business. Select
            privacy options and know your NLP job is secure and HIPAA compliant.
          </div>
          <!-- <div>
            <img
              class="w mt-20"
              src="../../assets/img/bottom_quotation.jpg"
              alt=""
            />
          </div> -->
        </main>
      </el-card>
    </section>
    <footer class="mercury-footer tc">
      © 2021 MELAX℠ All Rights Reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  filters: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.mercury-home {
  font-family: Arial, Helvetica, sans-serif;
}
.why-nlp-container {
  img {
    width: 150px;
  }
}
.home-logo {
  width: 280px;
}
.mercury-banner {
  height: 720px;
  margin-top: -100px;
  padding-top: 200px;
  background-image: url('../../assets/img/mercury_banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  img {
    width: 250px;
  }
}
.mercury-try-it {
  padding: 15px 30px;
  background-color: #cc1e21;
  border-color: #cc1e21;
}
.mercury-nav {
  margin-top: -100px;
  .mercury-nav-content {
    min-height: 90px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
.mercury-why {
  margin-top: 140px;
  svg {
    font-size: 140px;
  }
}
.mercury-color-block {
  height: 200px;
  margin-top: 90px;
  background-color: #127f81;
}
.mercury-color-description {
  margin-top: -100px;
  main {
    line-height: 3;
  }
}
.mercury-footer {
  margin-top: 150px;
  background-color: #343a40;
  color: #81868d;
  padding: 25px;
}
</style>
