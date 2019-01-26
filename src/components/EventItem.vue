<template>
  <div
    class="event-item"
    @click="$emit('edit', event)"
  >
    <div style="overflow: hidden; height:100%">
      <div class="caption font-weight-medium ellipsis">
        {{event.label || '(No label)'}}
      </div>
      <div class="caption text--secondary">
        {{event.startTime | formatTime(format)}} - {{event.endTime | formatTime(format)}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    rowHeight: {
      type: Number,
      default: 40,
    },
    format: {
      type: String,
      default: 'ampm',
    },
  },
};
</script>

<style lang="css">
  .event-item {
    padding: 1px 0px 1px 4px;
    position: absolute;
    margin: 1px 0px 0px -1px;
    border-radius: 4px;
    cursor: pointer;
    border-color: #81cdf2;
    background-color: #b3e1f7;
    z-index: 1;
    width: 100%;
  }
  .event-item:after {
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    content: '';
    box-sizing: border-box;
    border-radius: 5px;
    pointer-events: none;
    border: 1px solid #fff;
  }
  .event-item:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 4px;
    opacity: 0;
    transition: opacity 100ms linear;
  }
</style>
