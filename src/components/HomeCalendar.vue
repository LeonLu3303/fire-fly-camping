<template>
  <a-calendar v-model:value="value">
    <template #headerRender="{ value }">
      <div class="calendar_header">
        <div>您選擇的月份為 {{ new Date(value).getMonth() + 1 }} 月</div>
        <button type="button" @click="updateMonth">++++++</button>
      </div>
    </template>
    <template #dateCellRender="{ current }">
      <ul class="events">
        <!-- <li v-for="item in getListData(current)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li> -->
        {{
          getListData2(current)
        }}
        <!-- <li v-for="(item, idx) in getListData2(current)" :key="idx">
          {{ item }}
        </li> -->
      </ul>
    </template>
  </a-calendar>
</template>
<script>
import dayjs from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ['whichArea', 'howMany', 'whichType'],
  data() {
    return {
      value: dayjs(),
      originData: [
        {
          checkIn: '2022-10-11',
          checkOut: '2022-10-13',
        },
        {
          checkIn: '2022-10-12',
          checkOut: '2022-10-16',
        },
        {
          checkIn: '2022-10-20',
          checkOut: '2022-10-21',
        },
      ],
    };
  },
  computed: {
    sortData() {
      let result = [];
      this.originData.forEach((v) => {
        const checkIn = new Date(v.checkIn);
        const checkOut = new Date(v.checkOut);
        const time = checkOut.getTime() - checkIn.getTime();
        const days = Math.ceil(time / (1000 * 3600 * 24)) + 1;
        for (let i = 0; i < days; i++) {
          let currentDate = new Date(v.checkIn);
          currentDate.setDate(currentDate.getDate() + i);
          const currentDateAfterFormat = `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
          }-${currentDate.getDate()}`;
          const sameDateIndex = result.findIndex(
            (u) => u.date == currentDateAfterFormat
          );
          if (sameDateIndex > -1) {
            result[sameDateIndex].times += 1;
          } else
            result.push({
              date: currentDateAfterFormat,
              times: 1,
            });
        }
      });
      return result;
    },
  },
  methods: {
    getListData2(date) {
      const sameDate = this.sortData.find((v) => {
        const itemDate = new Date(v.date);
        return (
          itemDate.getFullYear() === new Date(date).getFullYear() &&
          itemDate.getMonth() === new Date(date).getMonth() &&
          itemDate.getDate() === new Date(date).getDate()
        );
      });
      return sameDate?.times ?? 0;
    },
    updateMonth() {
      console.log(this.value);
      let value = this.value ?? dayjs();
      this.value = dayjs().month(value.month() + 1);
    },
  },
  watch: {
    calendarTrigger(e) {
      this.$emit('calendar-trigger-result', e);
    },
  },
});
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}

.calendar_header {
  text-align: center;
  padding: 20px 0;
}
</style>
