<template>
    <card class="col-md-5">
      <template slot="header">
            <h3 class="card-title text-center">Update User</h3>
          </template> 
      <form @submit.prevent="onUpdateForm">
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
          <button class="btn btn-primary btn-block">Update User</button>
        </div>
      
      </form>
  </card>
</template>
<style lang="sass">
  
</style>
<script>
import { db } from '../firebaseDb';

export default {
   data() {
      return{
          user: {
          }
      }
   },
   created() {
      let dbRef =  db.collection('users').doc(this.$route.params.id);
      dbRef.get().then((doc) => {
        this.user = doc.data();
      })
      .catch((error) =>{
        console.log(error)
      })
    },
   methods: {
      onUpdateForm(event) {
          event.preventDefault()
          db.collection('users').doc(this.$route.params.id)
          .update(this.user).then(() => {
              alert('User Created Successfully!');
              console.log("User Updated SuccessFully!");
              this.$router.push('/list')
          }).catch((error) => {
            console.log(error);
          });        
      }
   }
}
</script>