const priceCalculator = (WPM, WF, wells, BOEPD) => {
  if (wells <= WPM[0][0]) wells = +WPM[0][0];
  const wf = BOEPD / wells;
  // console.log(wf);
  // console.log(WPM, WF);
  let cal_wf;

  let cal_dpw;

  let I;

  if (wf <= WF[0][0]) {
    cal_wf = +WF[0][1];
    I = 0;
  }

  if (wells <= +WPM[0][0]) {
    cal_dpw = +WPM[0][1];
  }

  wf > +WF[0][0] &&
    WF.map((arr, i) => {
      if (+arr[0] == wf) return (cal_wf = arr[1]);
      if (wf > WF[WF.length - 1][0]) return (cal_wf = WF[WF.length - 1][1]);
      if (i < WF.length - 1 && WF[i][0] < wf && WF[i + 1][0] > wf) {
        let y;
        let x;
        y = WF[i + 1][1] - WF[i][1];
        x = WF[i + 1][0] - WF[i][0];
        return (cal_wf = (
          [wf - WF[i][0]] * (y / x) +
          parseFloat(WF[i][1])
        ).toFixed(5));
      }
    });

  let cost = +WPM[0][0] * +WPM[0][1] * cal_wf;

  if (+wells <= +WPM[0][0]) {
    I = 0;
    cal_dpw = +WPM[0][1];
  }

  WPM.map((arr, i) => {
    if (+arr[0] == wells) {
      I = i;
      return (cal_dpw = arr[1]);
    }
    if (+wells >= +WPM[WPM.length - 1][0]) {
      I = WPM.length - 1;
      cal_dpw = WPM[WPM.length - 1][1];
    }
    if (i < WPM.length - 1 && wells > WPM[i][0] && wells < WPM[i + 1][0]) {
      let y;
      let x;

      y = WPM[i + 1][1] - WPM[i][1];
      x = WPM[i + 1][0] - WPM[i][0];
      I = i;
      cal_dpw = ([wells - WPM[i][0]] * (y / x) + parseFloat(WPM[i][1])).toFixed(
        6
      );
    }
  });

  if (I > 0) {
    for (let i = 1; i < I + 1; i++) {
      cost = cost + (WPM[i][0] - WPM[i - 1][0]) * WPM[i][1] * cal_wf;
    }
  }

  if (wells > WPM[0][0])
    cost = cost + cal_dpw * ((wells - WPM[I]?.[0]) * cal_wf);

  return cost;
};

export default priceCalculator;
