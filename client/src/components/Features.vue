<template>
  <div class="featuresBox">
    <h1 class="heading">Features</h1>
    <div class="imageContainer">
        <img src="../assets/features-1.png" alt="" class="image">
        <img src="../assets/features-2.png" alt="" class="image">
        <img src="../assets/features-3.png" alt="" class="image">
        <img src="../assets/features-4.png" alt="" class="image">
    </div>
  </div>
</template>

<script>
export default {
    name: 'Features',
    props: {
        msg: String
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;700;800&display=swap');

.heading {
    float: left;
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    width: 100%;
    text-align: left;
    padding-left: 2em;
}

.image {
    max-width: 20%;
    padding: 0.5em;
}
</style>