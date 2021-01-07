<template>
  <v-app id="inspire">
   
    <v-navigation-drawer  
    v-model="drawer"
      app
      :mobile-breakpoint="768"
      >
      <v-img
  height="150"
class="pa-4 pt-5"
  src="menu.webp"
  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
>
   <v-avatar size="60" >
      <img
        src="https://avatars1.githubusercontent.com/u/6889629?s=460&u=cc3965e5cf81bfbeeea4d4ea32ed33d9f1dc220f&v=4"
        alt="Jay"
      
        class=""
      >
    </v-avatar>
    <div class="white--text text-subtitle-1 font-weight-bold mt-2 ">Jay Patel</div>
    <div class="white--text text-subtitle-1 font-weight-bold">@jaynarayan89</div>

</v-img>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
          <!-- {{appTitle}} -->
         {{ $store.state.appName }} 
           </v-list-item-title>
          <v-list-item-subtitle>
            My awesome todo list
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

   
     <v-app-bar
      app
      prominent
      color="primary"
      src="header.jpg"
      height="150"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
<v-container class="pa-0">
  <v-row >
    
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
  </v-row>
  <v-row class="ml-0 mt-2 ">
      <v-app-bar-title>My Todos</v-app-bar-title>
    
  </v-row>
  <v-row>
    <live-date-time/>
  </v-row>
</v-container>




      <search/>
      
    </v-app-bar>

    <v-main>
     <router-view></router-view>
      <snack-bar/>
    </v-main>
   
  </v-app>
</template>

<script>
  export default {
    components:{
      'snack-bar': require('@/components/common/snackbar.vue').default,
      'search': require('@/components/tools/search.vue').default,
      'live-date-time': require('@/components/tools/liveDateTime.vue').default,
    },
    data: () => ({ drawer: null,
     items: [
          { title: 'ToDo', icon: 'mdi-format-list-checks',to:'/' },
          { title: 'About', icon: 'mdi-help-box',to:'/about' },
        ] }),
    computed:{
      appTitle(){
        return process.env.VUE_APP_NAME;
      }
    }
  }
</script>