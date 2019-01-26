<template lang="html">
  <v-card>
    <v-form ref="eventForm">
      <v-card-text>
        <v-text-field
          v-model="editedEvent.label"
          name="name"
          placeholder="Add Label"
          class="title pl-4"
        ></v-text-field>
        <v-dialog
          ref="startTimeDialog"
          v-model="startTimeDialog"
          :return-value.sync="editedEvent.startTime"
          persistent
          lazy
          full-width
          width="290px"
        >
          <v-text-field
            slot="activator"
            :value="editedEvent.startTime | formatTime(format)"
            label="Start Time"
            :rules="rules.startTime"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker
            v-if="startTimeDialog"
            v-model="editedEvent.startTime"
            :format="format"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn flat color="primary"
              @click="startTimeDialog = false"
            >
              Cancel
            </v-btn>
            <v-btn flat color="primary"
              @click="$refs.startTimeDialog.save(editedEvent.startTime)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>

        <v-dialog
          ref="endTimeDialog"
          v-model="endTimeDialog"
          :return-value.sync="editedEvent.endTime"
          persistent
          lazy
          full-width
          width="290px"
        >
          <v-text-field
            slot="activator"
            :value="editedEvent.endTime | formatTime(format)"
            label="End Time"
            :rules="rules.endTime"
            prepend-icon="access_time"
            readonly
          ></v-text-field>
          <v-time-picker
            v-if="endTimeDialog"
            v-model="editedEvent.endTime"
            :format="format"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn flat color="primary"
              @click="endTimeDialog = false"
            >
              Cancel
            </v-btn>
            <v-btn flat color="primary"
              @click="$refs.endTimeDialog.save(editedEvent.endTime)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="event"
        flat
        color="error"
        @click="$emit('delete', event)"
      >
        Delete
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="$emit('cancel')"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        @click="saveEvent"
      >
        {{event ? 'Update': 'Save'}}
      </v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: null,
    },
    format: {
      type: String,
      default: 'ampm',
    },
  },
  data() {
    return {
      startTimeDialog: false,
      endTimeDialog: false,
      editedEvent: null,
      rules: {
        startTime: [
          (v) => {
            const [startHour = 0, startMinute = 0] = v.split(':').map(val => parseInt(val, 10));
            const [endHour = 0, endMinute = 0] = this.editedEvent.endTime.split(':').map(val => parseInt(val, 10));
            const startOffset = (60 * startHour + startMinute);
            const endOffset = (60 * endHour + endMinute);
            return endOffset > startOffset || 'Event must start before its end time.';
          },
        ],
        endTime: [
          (v) => {
            const [startHour = 0, startMinute = 0] = this.editedEvent.startTime.split(':').map(val => parseInt(val, 10));
            const [endHour = 0, endMinute = 0] = v.split(':').map(val => parseInt(val, 10));
            const startOffset = (60 * startHour + startMinute);
            const endOffset = (60 * endHour + endMinute);
            return endOffset > startOffset || 'Event must end after its start time.';
          },
        ],
      },
    };
  },
  watch: {
    event: {
      handler(newVal) {
        if (newVal) {
          this.editedEvent = Object.assign({}, newVal);
        } else {
          this.editedEvent = this.getDefaultEvent();
        }
      },
      immediate: true,
    },
  },
  computed: {
  },
  methods: {
    getDefaultEvent() {
      return {
        id: `${Math.floor(Math.random() * 10e10)}${new Date().getTime()}`,
        label: '',
        startTime: '00:30',
        endTime: '01:30',
      };
    },
    saveEvent() {
      if (!this.$refs.eventForm.validate()) { return; }

      if (this.event) {
        this.$emit('update', this.editedEvent);
      } else {
        this.$emit('create', this.editedEvent);
      }
      this.editedEvent = this.getDefaultEvent();
    },
  },
};
</script>
