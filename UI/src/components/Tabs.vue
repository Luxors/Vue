<template>
  <div>
    <div class="container mx-auto pt-10">
      <div class="border p-10 tab-container">
        <ul class="flex">
          <li v-for="(title, index) in tabs" :key="index" @click="activetab = index">
            {{ title.title }}
          </li>
        </ul>
        <div class="relative border">
          <div v-if="activetab === 0">
            <figure>
              <img src="https://www.tambov.ru/images/news/2018-10/23-10/imgonline-com-ua-Resize-NoQqU3O8wX1kP.jpg"
                alt="" />
            </figure>
            <ul>
              <li>One1</li>
              <li>One2</li>
              <li>One3</li>
            </ul>
          </div>
          <div v-if="activetab === 1">
            <figure>
              <img
                src="https://1.bp.blogspot.com/-shDAgaUBMuw/Ubd1uB-livI/AAAAAAAAAH4/GWa4kzXSPkI/s1600/shutterstock_73558468.jpg"
                alt="" />
            </figure>
            <ul>
              <li>Two1</li>
              <li>Two2</li>
              <li>Two3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 0,
      tabs: [
        {
          title: "One",
          graph:
            "https://www.tambov.ru/images/news/2018-10/23-10/imgonline-com-ua-Resize-NoQqU3O8wX1kP.jpg",
          row1: "One.row1",
          row2: "One.row2",
          row3: "One.row3",
        },
        {
          title: "Two",
          graph:
            "https://1.bp.blogspot.com/-shDAgaUBMuw/Ubd1uB-livI/AAAAAAAAAH4/GWa4kzXSPkI/s1600/shutterstock_73558468.jpg",
          row1: "Two.row1",
          row2: "Two.row2",
          row3: "Two.row3",
        },
      ],
    };
  },
};
</script>
