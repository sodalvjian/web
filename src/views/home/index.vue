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
        <el-col :sm="12" class="color-white">
          <h1><img src="../../assets/img/logo_mercury.png" alt="" /></h1>
          <div class="mt-30 f17 lh1-5">
            Mercury Natural Language Processing makes quick work of your medical
            data extraction projects — accurately and at a fraction of the cost
            of other web-based products.
          </div>
          <div class="mt-50">
            <router-link to="/realtimeAnalysis">
              <el-button
                type="danger"
                style="height:45px"
                class="f16 mercury-try-it"
                :style="'background:#4ebebf;border:1px solid #4ebebf'"
              >
                Try it now
              </el-button></router-link>
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="container">
      <el-row class="mercury-nav " :gutter="20">
        <el-col :sm="6" class="mt-20" align="center">
          <el-card :body-style="{ padding: '15px' }" shadow="always">
            <div>
              <img src="../../assets/img/home/nav_one.png" alt="" />
              <div class="ml-10 f19">Affordable Price</div>
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
        <el-col :sm="6" class="mt-20" align="center">
          <el-card :body-style="{ padding: '15px' }" shadow="always">
            <div>
              <img src="../../assets/img/home/nav_two.png" alt="" />
              <div class="ml-10 f19">Flexible Pipelines</div>
            </div>
            <div
              class="mt-15 f15 lh2 mercury-nav-content"
              title="More pipelines - with six medical pipelines and more added regularly extract only the data you need"
            >
              Five medical pipelines and more added regularly to extract only
              the data you need
            </div>
          </el-card>
        </el-col>
        <el-col :sm="6" class="mt-20" align="center">
          <el-card :body-style="{ padding: '15px' }" shadow="always">
            <div>
              <img src="../../assets/img/home/nav_three.png" alt="" />
              <div class="ml-10 f19">High Performance</div>
            </div>
            <div
              class="mt-15 f15 lh2 mercury-nav-content"
              title="Real-Time analysist"
            >
              Save time and frustration with real-time analysis
            </div>
          </el-card>
        </el-col>
        <el-col :sm="6" class="mt-20" align="center">
          <el-card :body-style="{ padding: '15px' }" shadow="always">
            <div>
              <img src="../../assets/img/home/nav_four.png" alt="" />
              <div class="ml-10 f19">On Premise Installation</div>
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
        <main class="mt-15 f15">
          <div>
            <p>
              MERCURY NLP is Melax Tech’s breakthrough software for Natural
              Language Processing in healthcare and related industries. Mercury
              NLP offers users the ability to extract textual data in a simple
              to use DIY format, backed by our expert data and development
              support team. Mercury NLP’s pay-per-byte system allows users to
              automate and speed up data extraction with unparalleled accuracy
              and flexibility.
            </p>
            <p>
              At half of the price of competitors, Mercury NLP allows
              administrators to continually monitor and refine projects. The
              results are processes and outputs that can be reproduced by
              project teammates for better, more reliable analytics reporting.
            </p>

            <p>
              With five pre-built clinical pipelines and more on the way, users
              are able to apply a pipeline to text data, process it and see
              results in record time. Mercury NLP is HIPAA compliant; client
              data is never divulged to or used by anyone other than client team
              members.
            </p>
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
      <div class="container">
        <el-row>
          <el-col :span="4">
            <a
              href="https://twitter.com/MelaxTech?s=20"
              class="mr-10"
              target="_blank"
            >
              <img
                width="20"
                height="20"
                src="https://melaxtech.com/wp-content/themes/melax-wordpress/assets/img/icon/twitter.webp"
                alt="/"
              /></a>
            <a
              href="https://www.linkedin.com/company/melaxtech/"
              target="_blank"
            >
              <img
                width="20"
                height="20"
                src="https://melaxtech.com/wp-content/themes/melax-wordpress/assets/img/icon/linkedin.webp"
                alt="/"
              /></a>
          </el-col>
          <el-col
            :span="16"
            class="pt-5 footer-copy-right-text color-white tc f13"
          >
            © 2021 MELAX℠ All Rights Reserved.
          </el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </div>
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
.container {
  max-width: 1140px;
}
.mercury-home {
  font-family: Arial, Helvetica, sans-serif;
}
.why-nlp-container {
  img {
    width: 150px;
  }
}
.home-logo {
  width: 230px;
}
.mercury-banner {
  height: 670px;
  margin-top: -100px;
  padding-top: 200px;
  background-image: url('../../assets/img/mercury_banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  img {
    width: 260px;
  }
}
.mercury-try-it {
  padding: 15px 30px;
  background-color: #cc1e21;
  border-color: #cc1e21;
}
.mercury-nav {
  margin-top: -100px;
  img {
    width: 40px;
  }
  .mercury-nav-content {
    min-height: 90px;
    color: #555;
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
    line-height: 1.7;
    color: #555555;
  }
}
.mercury-footer {
  margin-top: 150px;
  background-color: #343a40;
  color: #81868d;
  padding: 25px;
}
</style>
