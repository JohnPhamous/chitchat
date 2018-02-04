<template>
  <div class="newTag">
    <div class="newForm" v-if="creatingNewTag">
      <div class="newForm-background"></div>
      <div class="form-enter">
        <input class="newtag-input"  type="text" v-model="newTag" v-focus/>
        <button class="btn-action" @click="cancelCreate">Cancel</button>
        <button class="btn-action" @click="createNewTag">#create</button>
      </div>
    </div>

    <div class="createNewTag">
      <button class="btn btn-newTag" @click="creatingNewTag = true">Create New Tag</button>
    </div>
  </div>
</template>

<script>
import newTag from './createNewTag'

export default {
  methods: {
    createNewTag() {
      this.creatingNewTag = false
      let id = Math.floor(Math.random() * 100000000)
      let newTagCreate = {
        id: id,
        user: {
          name: `#${this.newTag}`,
          img: 'https://sigil.cupcake.io/'
        },
        messages: []
      }

      this.$store.state.sessions.push(newTagCreate)

      this.newTag = ''
    },
    cancelCreate() {
      console.log('cancel')
      this.newTag = ''
      this.creatingNewTag = false
    }
  },
  data: function() {
    return {
      creatingNewTag: false,
      newTag: '',
      show: false
    }
  }
}
</script>
<style>
.btn-newTag {
  background-color: rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
}
.btn {
  position: relative !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.btn-action {
  padding: 10px 15px;
}
.newtag-input {
  color: white;
  font-size: 50pt;
  height: 60pt;
  width: 100%;
  margin-bottom: 30px;
  background: none;
  border: none;
  border-bottom: white solid 0.5px;
 }
.createNewTag {
  position: relative;
  bottom: 0px;
  width: 100%;
}
.btn {
  position: absolute;
  width: inherit;
  padding: 15px 20px;
}
.form-enter {
  padding: 20px 30px;
}
.newForm {
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  height: 100%;
  top: 0px;
}
.newForm-background {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  filter: blur(5px);
  z-index: -1;
  position: absolute;
}
</style>
