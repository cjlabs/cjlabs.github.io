<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="hero bg-primary text-white">
          <div class="hero-inner">
            <h2>Kelas NUXTJS</h2>
            <p
              class="lead"
            >You almost arrived, complete the information about your account to complete registration.</p>
            <div class="mt-4">
              <a href="#" class="btn btn-outline-white btn-lg btn-icon icon-left">
                <i class="far fa-user"></i> Daftar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-6" v-for="item in howcjlabs" :key="item.title">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="card section">
          <div class="card-header">
            <h4>Text Block</h4>
          </div>
          <div class="card-body">
            <div class="section-title mt-0">Blockquote</div>
            <blockquote>Stisla made with hand</blockquote>
            <div class="section-title">Inline Code</div>
            <p>
              Lorem ipsum dolor sit amet,
              <code>consectetur</code> adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud
              <code>exercitation</code> ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div class="section-title">Code Block</div>
            <p>
              We use PrismJS to do this, you can adjust themes, syntax and more.
              <a
                href="http://prismjs.com"
              >Visit their documentation</a>.
            </p>
            <pre class="language-javascript code-toolbar"><code class="language-javascript"><span class="token keyword">var</span> code <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span></code><div
  class="toolbar"
><div class="toolbar-item"><span>JavaScript</span></div><div class="toolbar-item"><a>Copy</a></div></div></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'stisla',
  computed: {
    howcjlabs() {
      return this.$store.state.series.list
    }
  }
}
</script>

<style scoped>
.section .section-title:before {
  content: ' ';
  border-radius: 5px;
  height: 8px;
  width: 30px;
  background-color: #6777ef;
  display: inline-block;
  float: left;
  margin-top: 6px;
  margin-right: 15px;
}
</style>
