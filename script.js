document.addEventListener(
  "DOMContentLoaded",
  function () {
    var Timer = function (StartTime, EndTime, endMessage, outputDestination) {
      this.StartTime = StartTime;
      this.EndTime = EndTime;
      this.endMessage = endMessage;
      this.outputDestination = outputDestination;
    };

    Timer.prototype.countDown = function () {
      var StartTime = new Date(this.StartTime);
      var EndTime = new Date(this.EndTime);
      console.log(EndTime);
      var oneDay = 24 * 60 * 60 * 1000;
      var countDownTimer = document.getElementById(this.outputDestination);
      var endMessage = this.endMessage;
      var currentTimeCD = new Date();
      var untilStartTime = new Date();
      var untilFinishTime = new Date();
      var d = 0;
      var h = 0;
      var m = 0;
      var s = 0;

      var date = document.getElementById("date");
      var hour = document.getElementById("hour");
      var min = document.getElementById("min");
      var sec = document.getElementById("sec");

      setInterval(calculateTime, 1000);

      function calculateTime() {
        currentTimeCD = new Date();
        untilStartTime = StartTime - currentTimeCD;
        untilFinishTime = EndTime - currentTimeCD;

        if (currentTimeCD < StartTime) {
          d = Math.floor(untilStartTime / oneDay);
          h = Math.floor((untilStartTime % oneDay) / (60 * 60 * 1000));
          m = Math.floor((untilStartTime % oneDay) / (60 * 1000)) % 60;
          s = (Math.floor((untilStartTime % oneDay) / 1000) % 60) % 60;
        } else {
          d = Math.floor(untilFinishTime / oneDay);
          h = Math.floor((untilFinishTime % oneDay) / (60 * 60 * 1000));
          m = Math.floor((untilFinishTime % oneDay) / (60 * 1000)) % 60;
          s = (Math.floor((untilFinishTime % oneDay) / 1000) % 60) % 60;
        }

        //取得した時間を表示
        date.innerHTML = d;
        hour.innerHTML = h;
        min.innerHTML = m;
        sec.innerHTML = s;
      }
    };

    const date3 = document.querySelector(`input[type='date'][name='date3']`);

    date3.addEventListener(`change`, function () {
      Adate = new Date(date3.value);
      var Ayear = Adate.getFullYear();
      var Amonth = Adate.getMonth() + 1;
      var Aday = Adate.getDate();
      var Ah = Adate.getHours();
      var Am = Adate.getMinutes();
      var As = Adate.getSeconds();
      var Ahyouji = Ayear + "年" + Amonth + "月" + Aday + "日";
      deadline.innerHTML = Ahyouji;
      var et = `${Ayear}/${Amonth}/${Aday} ${Ah - 9}:${Am}:${As}`;
      var myTimer = new Timer("2022/5/11 00:00:00", et, "終了！", "timer");
      myTimer.countDown();
      document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("btn").addEventListener("click", function () {
          window.location.reload();
        });
      });
    });
  },
  false
);
