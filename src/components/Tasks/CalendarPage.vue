<template>
  <div class="wrap-calendar">
    <q-icon class="calendar_month"></q-icon>
    <p id="month-year" class="month-year"></p>
    <div class="calendar-container">
      <q-icon class="chevron_left"></q-icon>
      <div id="calendar" class="calendar"></div>
      <q-icon class="chevron_right"></q-icon>
    </div>
  </div>
</template>

<script></script>

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

#month-year {
  font-size: 22px;
  font-family: sans-serif;
  padding: 10px 0;
  margin: 5px;
  color: #6495ed;
  align-items: center;
  font-weight: bold;
}

.wrap-calendar {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
