var map;
var years;
var orgData;

var aichi_resident_count = 0;
var akita_resident_count = 0;
var aomori_resident_count = 0;
var chiba_resident_count = 0;
var ehime_resident_count = 0;
var fukui_resident_count = 0;
var fukuoka_resident_count = 0;
var fukushima_resident_count = 0;
var gifu_resident_count = 0;
var gunma_resident_count = 0;
var hiroshima_resident_count = 0;
var hokkaido_resident_count = 0;
var hyogo_resident_count = 0;
var ibaraki_resident_count = 0;
var ishikawa_resident_count = 0;
var iwate_resident_count = 0;
var kagawa_resident_count = 0;
var kagoshima_resident_count = 0;
var kanagawa_resident_count = 0;
var kochi_resident_count = 0;
var kumamoto_resident_count = 0;
var kyoto_resident_count = 0;
var mie_resident_count = 0;
var miyagi_resident_count = 0;
var miyazaki_resident_count = 0;
var nagano_resident_count = 0;
var nagasaki_resident_count = 0;
var nara_resident_count = 0;
var niigata_resident_count = 0;
var oita_resident_count = 0;
var okayama_resident_count = 0;
var okinawa_resident_count = 0;
var osaka_resident_count = 0;
var saga_resident_count = 0;
var saitama_resident_count = 0;
var shiga_resident_count = 0;
var shimane_resident_count = 0;
var shizuoka_resident_count = 0;
var tochigi_resident_count = 0;
var tokushima_resident_count = 0;
var tokyo_resident_count = 0;
var tottori_resident_count = 0;
var toyama_resident_count = 0;
var wakayama_resident_count = 0;
var yamagata_resident_count = 0;
var yamaguchi_resident_count = 0;
var yamanashi_resident_count = 0;

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function initializeData() {
  aichi_resident_count = 0;
  akita_resident_count = 0;
  aomori_resident_count = 0;
  chiba_resident_count = 0;
  ehime_resident_count = 0;
  fukui_resident_count = 0;
  fukuoka_resident_count = 0;
  fukushima_resident_count = 0;
  gifu_resident_count = 0;
  gunma_resident_count = 0;
  hiroshima_resident_count = 0;
  hokkaido_resident_count = 0;
  hyogo_resident_count = 0;
  ibaraki_resident_count = 0;
  ishikawa_resident_count = 0;
  iwate_resident_count = 0;
  kagawa_resident_count = 0;
  kagoshima_resident_count = 0;
  kanagawa_resident_count = 0;
  kochi_resident_count = 0;
  kumamoto_resident_count = 0;
  kyoto_resident_count = 0;
  mie_resident_count = 0;
  miyagi_resident_count = 0;
  miyazaki_resident_count = 0;
  nagano_resident_count = 0;
  nagasaki_resident_count = 0;
  nara_resident_count = 0;
  niigata_resident_count = 0;
  oita_resident_count = 0;
  okayama_resident_count = 0;
  okinawa_resident_count = 0;
  osaka_resident_count = 0;
  saga_resident_count = 0;
  saitama_resident_count = 0;
  shiga_resident_count = 0;
  shimane_resident_count = 0;
  shizuoka_resident_count = 0;
  tochigi_resident_count = 0;
  tokushima_resident_count = 0;
  tokyo_resident_count = 0;
  tottori_resident_count = 0;
  toyama_resident_count = 0;
  wakayama_resident_count = 0;
  yamagata_resident_count = 0;
  yamaguchi_resident_count = 0;
  yamanashi_resident_count = 0;
}

function generateMap(year, years) {
  dataSet = anychart.data.set(orgData, { ignoreFirstRow: true, columnSeparator: ",", rowsSeparator: "\r\n" });

  dataSet.mc.forEach(function (item, index) {
    if (dataSet.mc[index][1] !== undefined) {
      var currentYear = dataSet.mc[index][1].split(".")[0];
      years.push(currentYear);

      //console.dir(dataSet.mc[index][0]);
      // console.log(index);
      if (dataSet.mc[index][0] == "Aichi-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][]);
        aichi_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Akita-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        akita_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Aomori-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        aomori_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Chiba-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        chiba_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Ehime-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        ehime_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Fukui-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        fukui_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Fukuoka-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        fukuoka_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Fukushima-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        fukushima_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Gifu-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        gifu_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Gunma-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        gunma_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Hiroshima-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        hiroshima_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Hokkaido" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        hokkaido_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Hyogo-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        hyogo_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Ibaraki-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        ibaraki_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Ishikawa-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        ishikawa_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Iwate-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        iwate_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Kagawa-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        kagawa_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Kagoshima-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        kagoshima_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Kanagawa-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        kanagawa_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Kochi-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        kochi_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Kumamoto-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        kumamoto_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Kyoto-fu" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        kyoto_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Mie-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        mie_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Miyagi-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        miyagi_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Miyazaki-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        miyazaki_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Nagano-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        nagano_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Nagasaki-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        nagasaki_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Nara-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        nara_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Niigata-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        niigata_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Oita-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        oita_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Okayama-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        okayama_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Okinawa-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        okinawa_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Osaka-fu" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        osaka_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Saga-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        saga_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Saitama-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        saitama_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Shiga-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        shiga_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Shimane-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        shimane_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Shizuoka-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        shizuoka_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Tochigi-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        tochigi_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Tokushima-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        tokushima_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Tokyo-to" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        tokyo_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Tottori-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        tottori_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Toyama-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        toyama_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Wakayama-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        wakayama_resident_count += Number(dataSet.mc[index][2]);
      }
      else if (dataSet.mc[index][0] == "Yamagata-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        yamagata_resident_count += Number(dataSet.mc[index][2]);
      } else if (dataSet.mc[index][0] == "Yamaguchi-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        yamaguchi_resident_count += Number(dataSet.mc[index][2]);
      } else if (dataSet.mc[index][0] == "Yamanashi-ken" && currentYear == year) {
        // console.log(dataSet.mc[index][2]);
        yamanashi_resident_count += Number(dataSet.mc[index][2]);
      }
    }
  });
  map = anychart.map()


  //Appending data to the data set
  dataSet.append({ "id": "JP.HS", "value": hiroshima_resident_count });
  dataSet.append({ "id": "JP.OY", "value": okayama_resident_count });
  dataSet.append({ "id": "JP.SM", "value": shimane_resident_count });
  dataSet.append({ "id": "JP.TT", "value": tottori_resident_count });
  dataSet.append({ "id": "JP.YC", "value": yamaguchi_resident_count });
  dataSet.append({ "id": "JP.SG", "value": saga_resident_count });
  dataSet.append({ "id": "JP.FO", "value": fukuoka_resident_count });
  dataSet.append({ "id": "JP.KM", "value": kumamoto_resident_count });
  dataSet.append({ "id": "JP.MZ", "value": miyazaki_resident_count });
  dataSet.append({ "id": "JP.EH", "value": ehime_resident_count });
  dataSet.append({ "id": "JP.KG", "value": kagawa_resident_count });
  dataSet.append({ "id": "JP.KC", "value": kochi_resident_count });
  dataSet.append({ "id": "JP.OT", "value": oita_resident_count });
  dataSet.append({ "id": "JP.TS", "value": tokushima_resident_count });
  dataSet.append({ "id": "JP.AI", "value": aichi_resident_count });
  dataSet.append({ "id": "JP.GF", "value": gifu_resident_count });
  dataSet.append({ "id": "JP.IS", "value": ishikawa_resident_count });
  dataSet.append({ "id": "JP.ME", "value": mie_resident_count });
  dataSet.append({ "id": "JP.NN", "value": nagano_resident_count });
  dataSet.append({ "id": "JP.SZ", "value": shizuoka_resident_count });
  dataSet.append({ "id": "JP.TY", "value": toyama_resident_count });
  dataSet.append({ "id": "JP.HK", "value": hokkaido_resident_count });
  dataSet.append({ "id": "JP.FI", "value": fukui_resident_count });
  dataSet.append({ "id": "JP.HG", "value": hyogo_resident_count });
  dataSet.append({ "id": "JP.KY", "value": kyoto_resident_count });
  dataSet.append({ "id": "JP.NR", "value": nara_resident_count });
  dataSet.append({ "id": "JP.OS", "value": osaka_resident_count });
  dataSet.append({ "id": "JP.SH", "value": shiga_resident_count });
  dataSet.append({ "id": "JP.WK", "value": wakayama_resident_count });
  dataSet.append({ "id": "JP.CH", "value": chiba_resident_count });
  dataSet.append({ "id": "JP.IB", "value": ibaraki_resident_count });
  dataSet.append({ "id": "JP.KN", "value": kanagawa_resident_count });
  dataSet.append({ "id": "JP.ST", "value": saitama_resident_count });
  dataSet.append({ "id": "JP.TC", "value": tochigi_resident_count });
  dataSet.append({ "id": "JP.TK", "value": tokyo_resident_count });
  dataSet.append({ "id": "JP.YN", "value": yamanashi_resident_count });
  dataSet.append({ "id": "JP.AK", "value": akita_resident_count });
  dataSet.append({ "id": "JP.AO", "value": aomori_resident_count });
  dataSet.append({ "id": "JP.FS", "value": fukushima_resident_count });
  dataSet.append({ "id": "JP.IW", "value": iwate_resident_count });
  dataSet.append({ "id": "JP.MG", "value": miyagi_resident_count });
  dataSet.append({ "id": "JP.NI", "value": niigata_resident_count });
  dataSet.append({ "id": "JP.YT", "value": yamagata_resident_count });
  dataSet.append({ "id": "JP.NS", "value": nagasaki_resident_count });
  dataSet.append({ "id": "JP.KS", "value": kagoshima_resident_count });
  dataSet.append({ "id": "JP.ON", "value": okinawa_resident_count });
  dataSet.append({ "id": "JP.GM", "value": gunma_resident_count });

  series = map.choropleth(dataSet);

  map.title().useHtml(true).hAlign('center');
  map.title('<span style="font-size: 24px;"><b>Japan Resident Count</b></span><br><span style="font-size: 14px;">Year ' + year + '</span>');

  series.labels(true);
  labels = series.labels();

  labels.fontColor('black');
  labels.fontSize("12px");
  labels.offsetX(-12);
  labels.fontFamily('Barlow');

  series.geoIdField('id');

  series.colorScale(anychart.scales.linearColor('#7C81C8', '#A79DC1', '#9988B2', '#8D72A4', '#845C95'));
  series.hovered().fill('#ADDD8E');

  var colorRange = map.colorRange();
  colorRange.enabled(true);
  colorRange.orientation('right');
  colorRange.length(300);

  map.geoData(anychart.maps['japan']);

  map.container('map-container');

  map.draw();
}
function updateMap(){
  document.getElementById("map-container").innerHTML = '';
  initializeData();
  var year = document.getElementById('yearsDropDown').value;
  years = [];
  generateMap(year, years);
  years = years.filter(onlyUnique);
}
anychart.onDocumentReady(function () {
  anychart.data.loadCsvFile('jp-data.csv', function (data) {
    orgData = data;
    var year = '1872';

    initializeData();
    years = [year];

    generateMap(year, years);
    document.getElementById("loading").style.width = '0px';
    document.getElementById("loading").style.height = '0px';
    document.getElementById("loading").style.paddingTop = '0px';
    years = years.filter(onlyUnique);
    var yearsDropDown = document.getElementById("yearsDropDown");

    for (var i = 0; i < years.length; i++) {
      var o = document.createElement("option");
      o.value = years[i];
      o.text = years[i];
      yearsDropDown.appendChild(o);
    }
    yearsDropDown.style.display = 'block';
  });
});
