<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="blog page" icon="cellphone-link">
        <b class="has-text-grey">Every</b>
        component is responsive
      </card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card"

export default {
  name: "HomePage",

  components: {
    Card
  },
  validate({ params }) {
    console.log(params['category'])
    console.log(params['blog'])
    return params
  }
}
</script>
