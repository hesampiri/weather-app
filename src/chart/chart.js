import ApexCharts from "apexcharts";
function Chart() {
  
  
    // ApexCharts options and config
    window.addEventListener("load", function() {
      let options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
          show: true,
          categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
            formatter: function (value) {
              return '$' + value;
            }
          }
        },
        series: [
          {
            name: "Developer Edition",
            data: [150, 141, 145, 152, 135, 125],
            color: "#1A56DB",
          },
          {
            name: "Designer Edition",
            data: [43, 13, 65, 12, 42, 73],
            color: "#7E3BF2",
          },
        ],
        chart: {
          sparkline: {
            enabled: false
          },
          height: "100%",
          width: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
        },
      }
  
      // if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
      //   const chart = new ApexCharts(document.getElementById("labels-chart"), options);
      //   chart.render();
      // }
    });
  
  return(
    <>
<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800">
  <div class="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">next 5 days </h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      23%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  <div id="labels-chart" class="px-2.5"></div>
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5 p-4 md:p-6 pt-0 md:pt-0">
    <div class="flex justify-between items-center pt-5">
      {/* <a
        href="#"
        class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
        Sales Report
        <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a> */}
    </div>
  </div>
</div>
    </>
  )

}
export default Chart;
