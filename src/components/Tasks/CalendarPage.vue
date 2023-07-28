<template>
  <div class="wrap-calendar">
    <!-- <div class="row" text-center>
      <q-icon name="events" size="32px"></q-icon>
      <p id="month-year" class="month-year">{{ monthYear }}</p>
    </div>

    <div class="calendar-container">
      <q-btn
        class="bg-indigo-4"
        color="white"
        round
        flat
        dense
        clickable
        icon="chevron_left"
        @click="showPreviousWeek"
        size="24px"
      ></q-btn>
      <div id="calendar" class="calendar">
        <div
          v-for="(dayInfo, index) in weekDays"
          :key="index"
          class="day-info"
          :class="{ 'current-day': isToday(dayInfo.date) }"
        >
          <p class="day">{{ dayInfo.day }}</p>
          <p class="date">{{ dayInfo.date.getDate() }}</p>
        </div>
      </div>
      <q-btn
        class="bg-indigo-4"
        color="white"
        round
        flat
        dense
        clickable
        icon="chevron_right"
        @click="showNextWeek"
        size="24px"
      ></q-btn>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentWeekStart: null,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  computed: {
    monthYear() {
      if (this.currentWeekStart) {
        return (
          this.months[this.currentWeekStart.getMonth()] +
          " " +
          this.currentWeekStart.getFullYear()
        );
      }
      return "";
    },
    weekDays() {
      const week = [];
      if (this.currentWeekStart) {
        const currentDate = new Date(this.currentWeekStart);
        for (let i = 0; i < 7; i++) {
          week.push({
            day: this.days[(currentDate.getDay() + 6) % 7],
            date: new Date(currentDate),
          });
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
      return week;
    },
  },
  mounted() {
    this.currentWeekStart = new Date();
    this.currentWeekStart = this.getWeekStart(this.currentWeekStart);
  },

  methods: {
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    getWeekStart(date) {
      const dayIndex = date.getDay();
      const diff = date.getDate() - dayIndex + (dayIndex === 0 ? -6 : 0);
      const weekStart = new Date(date);
      weekStart.setDate(diff);
      return weekStart;
    },
    showPreviousWeek() {
      this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
    },
    showNextWeek() {
      this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
    },
  },
};
</script>

<style>
.calendar-container {
  display: flex;
  align-items: center;
}

#calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.day-info {
  margin: 15px 5px;
  padding: 0 10px;
  width: 80px;
  background-color: #6495ed;
  color: #fff;
  border-radius: 5%;
  box-shadow: 0 4px 4px 0 rgba(50, 50, 50, 0.4);
}

.day-info > p {
  font-family: Verdana, sans-serif;
  padding: 5px 0;
  margin: 0;
  text-align: center;
}

.day {
  font-size: 16x;
}

.month-year {
  font-size: 6px;
}

.date {
  font-size: 14px;
  font-weight: bold;
}

.current-day {
  background-color: #4f6fab;
}

#month-year {
  font-size: 22px;
  font-family: sans-serif;
  padding: 5px 0;
  margin: 5px;
  color: #6495ed;
  align-items: center;
  font-weight: bold;
}
</style>
