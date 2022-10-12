<template>
    <div>
      <h1>Create Car</h1>
      <form v-on:submit.prevent="CreateCar">
        <p>category: <input type="text" v-model="Car.category" /></p>
        <p>engine_capacity: <input type="text" v-model="Car.engine_capacity" /></p>
        <p>model: <input type="text" v-model="Car.model" /></p>
        <p>brand: <input type="text" v-model="Car.Brand" /></p>
        <p>color: <input type="text" v-model="Car.color" /></p>
        <p>lc_plate: <input type="text" v-model="Car.lc_plate" /></p>
        <p>chasis_no: <input type="text" v-model="Car.chasis_no" /></p>
  
        <p><button type="submit">create Car</button></p>
      </form>
      <hr />
      <div>
        <p>category: {{ speaker.category }}</p>
        <p>engine_capacity: {{ speaker.engine_capacity }}</p>
        <p>model: {{ speaker.model}}</p>
        <p>brand: {{ speaker.brand }}</p>
        <p>color: {{ speaker.color }}</p>
        <p>lc_plate: {{ speaker.lc_plate }}</p>
        <p>chasis_no: {{ speaker.chasis_no }}</p>
      </div>
    </div>
  </template>
  <script>
  import CarsService from "@/services/CarsService";
  export default {
    data() {
      return {
        Car: {
            category: "" ,
            engine_capacity: 2500 ,
            model: "",
            brand: "",
            color: "",
            lc_plate: "" ,
            chasis_no: "",
        }
      };
    },
    methods: {
      async createCar() {
        try {
          await CarsService.post(this.car);
          this.$router.push({
            name: "car"
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  <style scoped>
  </style>