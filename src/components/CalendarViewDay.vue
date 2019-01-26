<template lang="html">
    <v-layout row wrap d-flex>
      <v-flex class="label-container">
        <div
          v-for="hour in hourList"
          :key="hour"
          class="caption cloumn label-item"
        >
          <span class="label-text text--secondary">
            {{hour | formatTime(format)}}
          </span>
        </div>
      </v-flex>
      <v-flex class="event-container">
        <div class="grid">
          <div
            v-for="hour in hourList"
            :key="hour"
            class="grid-row"
          ></div>
        </div>
        <div class="event-list-wrapper">
          <div class="event-list">
            <event-item
              v-for="item in events"
              :key="item.id"
              :event="item"
              :format="format"
              :style="{
                top: `${eventAttrMap[item.id].top}px`,
                height: `${eventAttrMap[item.id].height}px`,
                zIndex: `${eventAttrMap[item.id].zIndex}`,
                width: `${eventAttrMap[item.id].width}%`,
                left: `${eventAttrMap[item.id].left}%`,
              }"
              v-on:edit="$emit('editEvent', $event)"
              ></event-item>
            </div>
          </div>
      </v-flex>
    </v-layout>
</template>

<script>
import EventItem from './EventItem.vue';

export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    format: {
      type: String,
      default: 'ampm',
      validator: val => ['ampm', '24hr'].includes(val),
    },
  },
  components: {
    EventItem,
  },
  data() {
    return {
      rowHeight: 40,
    };
  },
  computed: {
    hourList() {
      return [...new Array(24).keys()];
    },
    /**
     * compute the attributes {top, left, width, zIndex, height} of each event
     * item
     */
    eventAttrMap() {
      if (this.events.length === 0) return {};
      const attributes = [];

      const offsetPerMinute = this.rowHeight / 60;
      const mappedEvents = this.events.map((event) => {
        const [startHour, startMinute] = event.startTime.split(':').map(v => parseInt(v, 10));
        const [endHour, endMinute] = event.endTime.split(':').map(v => parseInt(v, 10));
        const startTime = (60 * startHour + startMinute);
        const endTime = (60 * endHour + endMinute);
        return {
          id: event.id,
          startHour,
          startTime,
          endTime,
        };
      });

      const overlappingEventGroup = this.partitionIntoOverlappingEvents(mappedEvents);

      // Set the width, left and zIndex of first event in each group to 100, 0,
      // and 1 respectively.
      //
      // Then for each subsequent event in the group find the preceding
      // overlapping event and increment the zIndex by 1, left by 10 and set
      // width equals to (100-left).
      //
      // If width for any event is less than 10% then set the preceding overlapping
      // event as the first event in the group.
      //
      overlappingEventGroup.forEach((group) => {
        group.forEach((event, index) => {
          let left;
          let width;
          let zIndex;
          let overLappingParent;
          let parentAttr;
          let i = index - 1;
          while (i >= 0) {
            if (group[i].endTime > event.startTime) {
              overLappingParent = group[i];
              break;
            }
            i -= 1;
          }
          if (!overLappingParent) {
            left = 0;
            width = 100;
            zIndex = 1;
          } else {
            parentAttr = attributes.find(v => v.id === overLappingParent.id);
            if (parentAttr.left > 80) {
              parentAttr = attributes.find(v => v.id === group[0].id);
            }
            left = parentAttr.left + 10;
            width = 100 - left;
            zIndex = parentAttr.zIndex + 1;
          }

          attributes.push({
            id: event.id,
            top: event.startTime * offsetPerMinute,
            height: (event.endTime - event.startTime) * offsetPerMinute,
            zIndex,
            left,
            width,
          });
        });
      });

      // recalculate the width and left attribute of events having same startTime
      let i = 0;
      while (i < attributes.length) {
        let j = i;
        let count = 0;

        while (j < attributes.length && attributes[i].top === attributes[j].top) {
          count += 1;
          j += 1;
        }
        if (count > 1) {
          const width = attributes[i].width / count;
          for (let k = i + 1; k < j; k += 1) {
            attributes[k].width = width;
            attributes[k].left = attributes[i].left + width * (k - i);
          }
        }
        i += count;
      }

      // conver the array of attributes into object keyed by event id
      return attributes.reduce((acc, v) => { acc[v.id] = v; return acc; }, {});
    },
  },

  methods: {
    // partition events into overlapping array
    partitionIntoOverlappingEvents(mappedEvents) {
      if (mappedEvents.length === 0) return [];

      const getOverLappingGroupIdx = (eventGroupArray, event) => {
        for (let i = 0; i < eventGroupArray.length; i += 1) {
          let currGroupMaxEndTime = eventGroupArray[i][0].endTime;
          eventGroupArray[i].forEach((gEvent) => {
            if (gEvent.endTime > currGroupMaxEndTime) {
              currGroupMaxEndTime = gEvent.endTime;
            }
          });
          if (currGroupMaxEndTime > event.startTime) {
            return i;
          }
        }
        return -1;
      };

      // sort events by ascending startTime
      mappedEvents.sort((a, b) => a.startTime - b.startTime);

      //
      const overlappingEventGroupArray = [];
      overlappingEventGroupArray[0] = [mappedEvents[0]];
      for (let i = 1; i < mappedEvents.length; i += 1) {
        const overlappingGroupIdx = getOverLappingGroupIdx(
          overlappingEventGroupArray, mappedEvents[i],
        );

        if (overlappingGroupIdx !== -1) {
          overlappingEventGroupArray[overlappingGroupIdx].push(mappedEvents[i]);
        } else {
          overlappingEventGroupArray[overlappingEventGroupArray.length] = [mappedEvents[i]];
        }
      }
      return overlappingEventGroupArray;
    },
  },
};
</script>

<style lang="css">
.label-container {
  width: 70px;
  max-width: 70px;
  min-width: 70px;
  border-right:solid 1px #dacde0;
}
.label-item {
  height:40px;
  position:relative;
}
.label-text {
  position:absolute;
  top: -8px;
  right: 10px;
}
.event-container {
  position: relative;
}
.grid {
  position: absolute;
  top: 0;
  left: -8px;
  width: 100%;
}
.grid-row {
  height: 40px;
  min-height: 40px;
  border-bottom: solid 1px #dacde0;
}
.grid-row:first-child {
  border-top: solid 1px #dacde0;
}
.grid-row:last-child {
  border-bottom: solid 1px transparent;
}
.event-list {
  position: relative;
},
.event-list-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
