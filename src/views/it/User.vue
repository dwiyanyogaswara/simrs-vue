<template>
  <div>
    <Header />
    <div id="content">
      <div class="container">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">User Page</div>
          <div class="col-4"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "UserPage",
  components: {
    Header: Header,
    Footer: Footer,
  },
  data() {},
};
</script>
