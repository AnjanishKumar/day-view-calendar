<template>
   <v-container>
     <v-card>
       <v-toolbar color="primary">
         <div class="title white--text">Day View</div>
         <v-spacer></v-spacer>
         <v-btn
           @click="addEvent"
         >
           Add Event
         </v-btn>
       </v-toolbar>
       <v-card-text>
         <v-select
           :items="timeFormatOption"
           v-model="timeFormat"
           label="Time Format"
         ></v-select>
       </v-card-text>
       <v-card-text class="my-3">
         <calendar-view-day
          :events="events"
          :format="timeFormat"
          @editEvent="editEvent"

        ></calendar-view-day>
       </v-card-text>
     </v-card>
     <v-dialog
       v-model="eventDialog"
       scrollable
       persistent
       lazy
       :overlay="false"
       max-width="500px"
     >
      <event-editor
        :event="selectedEvent"
        :format="timeFormat"
        @cancel="closeEditDialog"
        @create="onEventCreate"
        @delete="onEventDelete"
        @update="onEventUpdate"
      >
    </event-editor>
     </v-dialog>
   </v-container>
</template>

<script>
import EventEditor from '../components/EventEditor.vue';
import CalendarViewDay from '../components/CalendarViewDay.vue';

export default {
  name: 'Calander',
  components: {
    EventEditor,
    CalendarViewDay,
  },
  data() {
    return {
      timeFormat: '24hr',
      timeFormatOption: [
        { text: '12 Hr', value: 'ampm' },
        { text: '24 Hr', value: '24hr' },
      ],
      eventDialog: false,
      selectedEvent: null,
      events: [],
    };
  },
  methods: {
    addEvent() {
      this.selectedEvent = null;
      this.eventDialog = true;
    },
    closeEditDialog() {
      this.selectedEvent = null;
      this.eventDialog = false;
    },
    editEvent(event) {
      this.selectedEvent = event;
      this.eventDialog = true;
    },
    onEventCreate(event) {
      this.events.push(event);
      this.closeEditDialog();
    },
    onEventDelete(event) {
      const index = this.events.findIndex(v => v.id === event.id);
      if (index > -1) {
        this.events.splice(index, 1);
      }
      this.closeEditDialog();
    },
    onEventUpdate(event) {
      Object.assign(this.selectedEvent, event);
      this.closeEditDialog();
    },
  },
};
</script>
