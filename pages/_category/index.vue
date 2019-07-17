<template>
  <section class="section">
    <div class="columns is-mobile">
      
      <card title="Category Index Page" icon="cellphone-link">
        <b class="has-text-grey">Every</b>
        component is responsive
      </card>


      <card title="Lightweight" icon="arrange-bring-to-front">No other internal dependency</card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card"

export default {
  name: "HomePage",

  components: {
    Card
  }
}
</script>
