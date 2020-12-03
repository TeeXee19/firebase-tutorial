<template>
  <card class="col-md-5 justify-content-center">
      <template slot="header">
            <h3 class="card-title text-center">Add User</h3>
          </template> 
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Name: </label>
            <input type="text" class="form-control" v-model="user.name" required>
        </div>
        <div class="form-group">
          <label>Email: </label>
            <input type="email" class="form-control" v-model="user.email" required>
        </div>
        <div class="form-group">
          <label>Phone: </label>
            <input type="tel" class="form-control" v-model="user.phone" required>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Add User</button>
        </div>
      </form>
  </card>
</template>

<script>
import { db } from '../firebaseDb';

export default {
   data(){
      return{
          user: {
            name: '',
            email: '',
            phone: ''
          }
      }
   },
   methods: {
      onFormSubmit(event){
        event.preventDefault()
            db.collection('users').add(this.user).then(() => {
                alert('User Created Successfully!');
                this.user.name = ''
                this.user.email = ''
                this.user.phone = ''
            }).catch((error) => {
              console.log(error);
            });        
      }
   }
}
</script>
<style lang="sass">
  
</style>