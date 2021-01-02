<template>
  <div>
    
<v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="handleMenuClick(index,task)"
              >
               <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    <delete-dialog 
    v-if="dialogs.delete" 
    :task="task"
    @close="dialogs.delete = false"
    />

    <edit-dialog 
    v-if="dialogs.edit" 
    :task="task"
    @close="dialogs.edit = false"
    />

    <due-date-dialog 
    v-if="dialogs.dueDate" 
    :task="task"
    @close="dialogs.dueDate = false"
    />
  </div>
</template>
<script>
  export default {
    props: ['task'],
    data: () => ({
      items: [
        { title: 'Edit',
          icon: 'mdi-pencil',
          click(){
            console.log('edit');
            this.dialogs.edit=true;
          } 
        },
        { title: 'Due Date',
          icon: 'mdi-calendar' ,
          click(){
            this.dialogs.dueDate=true;

          } 
        },
        { title: 'Delete',
          icon: 'mdi-delete' ,
          click(){
            this.dialogs.delete=true;
          } 
        },
       
      ],
      dialogs:{
        delete:false,
        edit:false,
        dueDate:false
      }
    }),
    methods:{
      handleMenuClick(index)
      {
        this.items[index].click.call(this);
      }
    },
    components:{
      'delete-dialog':require('@/components/todos/dialogs/deleteDialog.vue').default,
      'edit-dialog':require('@/components/todos/dialogs/editDialog.vue').default,
      'due-date-dialog':require('@/components/todos/dialogs/dueDateDialog.vue').default,
    }

   
   
  }
</script>