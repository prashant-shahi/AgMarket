/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
! function() {
    function e(t, n, r) {
        function i(o, s) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(o, !0);
                    if (a) return a(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = n[o] = {
                    exports: {}
                };
                t[o][0].call(d.exports, function(e) {
                    var n = t[o][1][e];
                    return i(n || e)
                }, d, d.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i
    }
    return e
}()({
    1: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = function(e) {
                function t() {
                    return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return a(t, e), o(t, [{
                    key: "numberDaysOfYearXXX",
                    value: function(e) {
                        return !(e > 365) && (e < 10 ? "00" + e : e < 100 ? "0" + e : e)
                    }
                }, {
                    key: "convertDateToNumberDay",
                    value: function(e) {
                        var t = new Date(e),
                            n = new Date(t.getFullYear(), 0, 0),
                            r = t - n,
                            i = Math.floor(r / 864e5);
                        return t.getFullYear() + "-" + this.numberDaysOfYearXXX(i)
                    }
                }, {
                    key: "convertNumberDayToDate",
                    value: function(e) {
                        var t = /(\d{4})(-)(\d{3})/,
                            n = t.exec(e),
                            r = new Date(n[1]),
                            i = r.getTime() + 1e3 * n[3] * 60 * 60 * 24,
                            a = new Date(i),
                            o = a.getMonth() + 1,
                            s = a.getDate(),
                            l = a.getFullYear();
                        return (s < 10 ? "0" + s : s) + "." + (o < 10 ? "0" + o : o) + "." + l
                    }
                }, {
                    key: "formatDate",
                    value: function(e) {
                        var t = new Date(e),
                            n = t.getFullYear(),
                            r = t.getMonth() + 1,
                            i = t.getDate();
                        return n + "-" + (r < 10 ? "0" + r : r) + " - " + (i < 10 ? "0" + i : i)
                    }
                }, {
                    key: "getCurrentDate",
                    value: function() {
                        var e = new Date;
                        return this.formatDate(e)
                    }
                }, {
                    key: "getDateLastThreeMonth",
                    value: function() {
                        var e = new Date,
                            t = (new Date).getFullYear(),
                            n = new Date(e.getFullYear(), 0, 0),
                            r = e - n,
                            i = Math.floor(r / 864e5);
                        return i -= 90, i < 0 && (t -= 1, i = 365 - i), t + "-" + this.numberDaysOfYearXXX(i)
                    }
                }, {
                    key: "getCurrentSummerDate",
                    value: function() {
                        var e = (new Date).getFullYear();
                        return [this.convertDateToNumberDay(e + "-06-01"), this.convertDateToNumberDay(e + "-08-31")]
                    }
                }, {
                    key: "getCurrentSpringDate",
                    value: function() {
                        var e = (new Date).getFullYear();
                        return [this.convertDateToNumberDay(e + "-03-01"), this.convertDateToNumberDay(e + "-05-31")]
                    }
                }, {
                    key: "getLastSummerDate",
                    value: function() {
                        var e = (new Date).getFullYear() - 1;
                        return [this.convertDateToNumberDay(e + "-06-01"), this.convertDateToNumberDay(e + "-08-31")]
                    }
                }, {
                    key: "getFirstDateCurYear",
                    value: function() {
                        return (new Date).getFullYear() + " - 001"
                    }
                }, {
                    key: "timestampToDateTime",
                    value: function(e) {
                        return new Date(1e3 * e).toLocaleString().replace(/,/, "").replace(/:\w+$/, "")
                    }
                }, {
                    key: "timestampToTime",
                    value: function(e) {
                        var t = new Date(1e3 * e),
                            n = t.getHours(),
                            r = t.getMinutes();
                        return (n < 10 ? "0" + n : n) + " : " + (r < 10 ? "0" + r : r) + " "
                    }
                }, {
                    key: "getNumberDayInWeekByUnixTime",
                    value: function(e) {
                        return new Date(1e3 * e).getDay()
                    }
                }, {
                    key: "getDayNameOfWeekByDayNumber",
                    value: function(e) {
                        return {
                            0: "Sun",
                            1: "Mon",
                            2: "Tue",
                            3: "Wed",
                            4: "Thu",
                            5: "Fri",
                            6: "Sat"
                        }[e]
                    }
                }, {
                    key: "getMonthNameByMonthNumber",
                    value: function(e) {
                        return "number" != typeof e || e <= 0 && e >= 12 ? null : {
                            0: "Jan",
                            1: "Feb",
                            2: "Mar",
                            3: "Apr",
                            4: "May",
                            5: "Jun",
                            6: "Jul",
                            7: "Aug",
                            8: "Sep",
                            9: "Oct",
                            10: "Nov",
                            11: "Dec"
                        }[e]
                    }
                }, {
                    key: "compareDatesWithToday",
                    value: function(e) {
                        return e.toLocaleDateString() === (new Date).toLocaleDateString()
                    }
                }, {
                    key: "convertStringDateMMDDYYYHHToDate",
                    value: function(e) {
                        var t = /(\d{2})(\.{1})(\d{2})(\.{1})(\d{4})/,
                            n = t.exec(e);
                        return 6 === n.length ? new Date(n[5] + "-" + n[3] + "-" + n[1]) : new Date
                    }
                }, {
                    key: "getTimeDateHHMMMonthDay",
                    value: function() {
                        var e = new Date;
                        return (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + " " + this.getMonthNameByMonthNumber(e.getMonth()) + " " + e.getDate()
                    }
                }]), t
            }(Date);
        n.default = s
    }, {}],
    2: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.naturalPhenomenon = {
            en: {
                name: "English",
                main: "",
                description: {
                    200: "thunderstorm with light rain",
                    201: "thunderstorm with rain",
                    202: "thunderstorm with heavy rain",
                    210: "light thunderstorm",
                    211: "thunderstorm",
                    212: "heavy thunderstorm",
                    221: "ragged thunderstorm",
                    230: "thunderstorm with light drizzle",
                    231: "thunderstorm with drizzle",
                    232: "thunderstorm with heavy drizzle",
                    300: "light intensity drizzle",
                    301: "drizzle",
                    302: "heavy intensity drizzle",
                    310: "light intensity drizzle rain",
                    311: "drizzle rain",
                    312: "heavy intensity drizzle rain",
                    313: "shower rain and drizzle",
                    314: "heavy shower rain and drizzle",
                    321: "shower drizzle",
                    500: "light rain",
                    501: "moderate rain",
                    502: "heavy intensity rain",
                    503: "very heavy rain",
                    504: "extreme rain",
                    511: "freezing rain",
                    520: "light intensity shower rain",
                    521: "shower rain",
                    522: "heavy intensity shower rain",
                    531: "ragged shower rain",
                    600: "light snow",
                    601: "snow",
                    602: "heavy snow",
                    611: "sleet",
                    612: "shower sleet",
                    615: "light rain and snow",
                    616: "rain and snow",
                    620: "light shower snow",
                    621: "shower snow",
                    622: "heavy shower snow",
                    701: "mist",
                    711: "smoke",
                    721: "haze",
                    731: "sand,dust whirls",
                    741: "fog",
                    751: "sand",
                    761: "dust",
                    762: "volcanic ash",
                    771: "squalls",
                    781: "tornado",
                    800: "clear sky",
                    801: "few clouds",
                    802: "scattered clouds",
                    803: "broken clouds",
                    804: "overcast clouds",
                    900: "tornado",
                    901: "tropical storm",
                    902: "hurricane",
                    903: "cold",
                    904: "hot",
                    905: "windy",
                    906: "hail",
                    950: "setting",
                    951: "calm",
                    952: "light breeze",
                    953: "gentle breeze",
                    954: "moderate breeze",
                    955: "fresh breeze",
                    956: "strong breeze",
                    957: "high wind, near gale",
                    958: "gale",
                    959: "severe gale",
                    960: "storm",
                    961: "violent storm",
                    962: "hurricane"
                }
            },
            ru: {
                name: "Russian",
                main: "",
                description: {
                    200: "гроза с мелким дождём",
                    201: "гроза с дождём",
                    202: "гроза с проливным дождём",
                    210: "возможна гроза",
                    211: "гроза",
                    212: "буря",
                    221: "жестокая гроза",
                    230: "гроза с мелким дождём",
                    231: "гроза с дождём",
                    232: "гроза с сильным дождём",
                    300: "сыро",
                    301: "сыро",
                    302: "очень сыро",
                    310: "лёгкий дождь",
                    311: "лёгкий дождь",
                    312: "интенсивный дождь",
                    321: "мелкий дождь",
                    500: "легкий дождь",
                    501: "дождь",
                    502: "сильный дождь",
                    503: "проливной дождь",
                    504: "сильный дождь",
                    511: "холодный дождь",
                    520: "дождь",
                    521: "дождь",
                    522: "сильный дождь",
                    600: "небольшой снегопад",
                    601: "снегопад",
                    602: "сильный снегопад",
                    611: "слякоть",
                    621: "снегопад",
                    701: "туман",
                    711: "туманно",
                    721: "туманно",
                    731: "песчаная буря",
                    741: "туманно",
                    800: "ясно",
                    801: "облачно",
                    802: "слегка облачно",
                    803: "пасмурно",
                    804: "пасмурно",
                    900: "торнадо",
                    901: "тропическая буря",
                    902: "ураган",
                    903: "холодно",
                    904: "жара",
                    905: "ветренно",
                    906: "град",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            it: {
                name: "Italian",
                main: "",
                description: {
                    200: "temporale con pioggerella",
                    201: "temporale con pioggia",
                    202: "temporale con pioggia forte",
                    210: "temporale",
                    211: "temporale",
                    212: "temporale forte",
                    221: "temporale",
                    230: "temporale con pioggerella",
                    231: "temporale con pioggerella",
                    232: "temporale con pioggerella",
                    300: "pioggerella",
                    301: "pioggerella",
                    302: "pioggerella",
                    310: "pioggerella",
                    311: "pioggerella",
                    312: "forte pioggerella",
                    321: "acquazzone",
                    500: "pioggia leggera",
                    501: "pioggia moderata",
                    502: "forte pioggia",
                    503: "pioggia fortissima",
                    504: "pioggia estrema",
                    511: "pioggia gelata",
                    520: "pioggerella",
                    521: "acquazzone",
                    522: "acquazzone",
                    600: "neve",
                    601: "neve",
                    602: "forte nevicata",
                    611: "nevischio",
                    621: "forte nevicata",
                    701: "foschia",
                    711: "fumo",
                    721: "foschia",
                    731: "mulinelli di sabbia/polvere",
                    741: "nebbia",
                    800: "cielo sereno",
                    801: "poche nuvole",
                    802: "nubi sparse",
                    803: "nubi sparse",
                    804: "cielo coperto",
                    900: "tornado",
                    901: "tempesta tropicale",
                    902: "uragano",
                    903: "freddo",
                    904: "caldo",
                    905: "ventoso",
                    906: "grandine",
                    950: "Setting",
                    951: "Calmo",
                    952: "Bava di vento",
                    953: "Brezza leggera",
                    954: "Brezza tesa",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Tempesta",
                    961: "Tempesta violenta",
                    962: "Uragano"
                }
            },
            sp: {
                name: "Spanish",
                main: "",
                description: {
                    200: "tormenta con lluvia ligera",
                    201: "tormenta con lluvia",
                    202: "tormenta con lluvia intensa",
                    210: "ligera tormenta",
                    211: "tormenta",
                    212: "fuerte tormenta",
                    221: "tormenta irregular",
                    230: "tormenta con llovizna ligera",
                    231: "tormenta con llovizna",
                    232: "tormenta con llovizna intensa",
                    300: "llovizna ligera",
                    301: "llovizna",
                    302: "llovizna de gran intensidad",
                    310: "lluvia y llovizna ligera",
                    311: "lluvia y llovizna",
                    312: "lluvia y llovizna de gran intensidad",
                    321: "chubasco",
                    500: "lluvia ligera",
                    501: "lluvia moderada",
                    502: "lluvia de gran intensidad",
                    503: "lluvia muy fuerte",
                    504: "lluvia muy fuerte",
                    511: "lluvia helada",
                    520: "chubasco de ligera intensidad",
                    521: "chubasco",
                    522: "chubasco de gran intensidad",
                    600: "nevada ligera",
                    601: "nieve",
                    602: "nevada intensa",
                    611: "aguanieve",
                    621: "chubasco de nieve",
                    701: "niebla",
                    711: "humo",
                    721: "niebla",
                    731: "torbellinos de arena/polvo",
                    741: "bruma",
                    800: "cielo claro",
                    801: "algo de nubes",
                    802: "nubes dispersas",
                    803: "nubes rotas",
                    804: "nubes",
                    900: "tornado",
                    901: "tormenta tropical",
                    902: "huracán",
                    903: "frío",
                    904: "calor",
                    905: "ventoso",
                    906: "granizo",
                    950: "Setting",
                    951: "calma",
                    952: "Viento flojo",
                    953: "Viento suave",
                    954: "Viento moderado",
                    955: "Brisa",
                    956: "Viento fuerte",
                    957: "Viento fuerte, próximo a vendaval",
                    958: "Vendaval",
                    959: "Vendaval fuerte",
                    960: "Tempestad",
                    961: "Tempestad violenta",
                    962: "Huracán"
                }
            },
            ua: {
                name: "Ukrainian",
                main: "",
                description: {
                    200: "гроза з легким дощем",
                    201: "гроза з дощем",
                    202: "гроза зі зливою",
                    210: "легка гроза",
                    211: "гроза",
                    212: "сильна гроза",
                    221: "короткочасні грози",
                    230: "гроза з дрібним дощем",
                    231: "гроза з дощем",
                    232: "гроза з сильним дрібним дощем",
                    300: "легка мряка",
                    301: "мряка",
                    302: "сильна мряка",
                    310: "легкий дрібний дощ",
                    311: "дрібний дощ",
                    312: "сильний дрібний дощ",
                    321: "дрібний дощ",
                    500: "легка злива",
                    501: "помірний дощ",
                    502: "сильний дощ",
                    503: "сильна злива",
                    504: "злива",
                    511: "крижаний дощ",
                    520: "дощ",
                    521: "дощ",
                    522: "сильна злива",
                    600: "легкий снігопад",
                    601: "сніг ",
                    602: "сильний снігопад",
                    611: "мокрий сніг",
                    621: "снігопад",
                    701: "туман",
                    711: "туман",
                    721: "серпанок",
                    731: "піщана заметіль",
                    741: "туман",
                    800: "чисте небо",
                    801: "трохи хмарно",
                    802: "розірвані хмари",
                    803: "хмарно",
                    804: "хмарно",
                    900: "торнадо",
                    901: "тропічна буря",
                    902: "буревій",
                    903: "холодно",
                    904: "спека",
                    905: "вітряно",
                    906: "град",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            de: {
                name: "German",
                main: "",
                description: {
                    200: "Gewitter mit leichtem Regen",
                    201: "Gewitter mit Regen",
                    202: "Gewitter mit starkem Regen",
                    210: "leichte Gewitter",
                    211: "Gewitter",
                    212: "schwere Gewitter",
                    221: "einige Gewitter",
                    230: "Gewitter mit leichtem Nieselregen",
                    231: "Gewitter mit Nieselregen",
                    232: "Gewitter mit starkem Nieselregen",
                    300: "leichtes Nieseln",
                    301: "Nieseln",
                    302: "starkes Nieseln",
                    310: "leichter Nieselregen",
                    311: "Nieselregen",
                    312: "starker Nieselregen",
                    321: "Nieselschauer",
                    500: "leichter Regen",
                    501: "mäßiger Regen",
                    502: "sehr starker Regen",
                    503: "sehr starker Regen",
                    504: "Starkregen",
                    511: "Eisregen",
                    520: "leichte Regenschauer",
                    521: "Regenschauer",
                    522: "heftige Regenschauer",
                    600: "mäßiger Schnee",
                    601: "Schnee",
                    602: "heftiger Schneefall",
                    611: "Graupel",
                    621: "Schneeschauer",
                    701: "trüb",
                    711: "Rauch",
                    721: "Dunst",
                    731: "Sand / Staubsturm",
                    741: "Nebel",
                    800: "klarer Himmel",
                    801: "ein paar Wolken",
                    802: "überwiegend bewölkt",
                    803: "überwiegend bewölkt",
                    804: "wolkenbedeckt",
                    900: "Tornado",
                    901: "Tropensturm",
                    902: "Hurrikan",
                    903: "kalt",
                    904: "heiß",
                    905: "windig",
                    906: "Hagel",
                    950: "Setting",
                    951: "Windstille",
                    952: "Leichte Brise",
                    953: "Milde Brise",
                    954: "Mäßige Brise",
                    955: "Frische Brise",
                    956: "Starke Brise",
                    957: "Hochwind, annähender Sturm",
                    958: "Sturm",
                    959: "Schwerer Sturm",
                    960: "Gewitter",
                    961: "Heftiges Gewitter",
                    962: "Orkan"
                }
            },
            pt: {
                name: "Portuguese",
                main: "",
                description: {
                    200: "trovoada com chuva leve",
                    201: "trovoada com chuva",
                    202: "trovoada com chuva forte",
                    210: "trovoada leve",
                    211: "trovoada",
                    212: "trovoada pesada",
                    221: "trovoada irregular",
                    230: "trovoada com garoa fraca",
                    231: "trovoada com garoa",
                    232: "trovoada com garoa pesada",
                    300: "garoa fraca",
                    301: "garoa",
                    302: "garoa intensa",
                    310: "chuva leve",
                    311: "chuva fraca",
                    312: "chuva forte",
                    321: "chuva de garoa",
                    500: "chuva fraca",
                    501: "Chuva moderada",
                    502: "chuva de intensidade pesado",
                    503: "chuva muito forte",
                    504: "Chuva Forte",
                    511: "chuva com congelamento",
                    520: "chuva moderada",
                    521: "chuva",
                    522: "chuva de intensidade pesada",
                    600: "Neve branda",
                    601: "neve",
                    602: "Neve pesada",
                    611: "chuva com neve",
                    621: "banho de neve",
                    701: "Névoa",
                    711: "fumaça",
                    721: "neblina",
                    731: "turbilhões de areia/poeira",
                    741: "Neblina",
                    800: "céu claro",
                    801: "Algumas nuvens",
                    802: "nuvens dispersas",
                    803: "nuvens quebrados",
                    804: "tempo nublado",
                    900: "tornado",
                    901: "tempestade tropical",
                    902: "furacão",
                    903: "frio",
                    904: "quente",
                    905: "com vento",
                    906: "granizo",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            ro: {
                name: "Romanian",
                main: "",
                description: {
                    200: "furtună cu ploaie ușoară",
                    201: "furtună",
                    202: "furtună cu ploaie puternică",
                    210: "furtună ușoară",
                    211: "furtună",
                    212: "furtună puternică",
                    221: "furtună aprigă",
                    230: "furtună cu burniță",
                    231: "furtună cu burniță",
                    232: "furtună cu burniță",
                    300: "burniță de intensitate joasă",
                    301: "burniță",
                    302: "burniță de intensitate mare",
                    310: "burniță de intensitate joasă",
                    311: "burniță",
                    312: "burniță de intensitate mare",
                    321: "burniță",
                    500: "ploaie ușoară",
                    501: "ploaie",
                    502: "ploaie puternică",
                    503: "ploaie torențială ",
                    504: "ploaie extremă",
                    511: "ploaie înghețată",
                    520: "ploaie de scurtă durată",
                    521: "ploaie de scurtă durată",
                    522: "ploaie de scurtă durată",
                    600: "ninsoare ușoară",
                    601: "ninsoare",
                    602: "ninsoare puternică",
                    611: "lapoviță",
                    621: "ninsoare de scurtă durată",
                    701: "ceață",
                    711: "ceață",
                    721: "ceață",
                    731: "vârtejuri de nisip",
                    741: "ceață",
                    800: "cer senin",
                    801: "câțiva nori",
                    802: "nori împrăștiați",
                    803: "cer fragmentat",
                    804: "cer acoperit de nori",
                    900: "tornadă",
                    901: "furtuna tropicală",
                    902: "uragan",
                    903: "rece",
                    904: "fierbinte",
                    905: "vant puternic",
                    906: "grindină",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            pl: {
                name: "Polish",
                main: "",
                description: {
                    200: "Burza z lekkimi opadami deszczu",
                    201: "Burza z opadami deszczu",
                    202: "Burza z intensywnymi opadami deszczu",
                    210: "Lekka burza",
                    211: "Burza",
                    212: "Silna burza",
                    221: "Burza",
                    230: "Burza z lekką mżawką",
                    231: "Burza z mżawka",
                    232: "Burza z intensywną mżawką",
                    300: "Lekka mżawka",
                    301: "Mżawka",
                    302: "Intensywna mżawka",
                    310: "Lekkie opady drobnego deszczu",
                    311: "Deszcz / mżawka",
                    312: "Intensywny deszcz / mżawka",
                    321: "Silna mżawka",
                    500: "Lekki deszcz",
                    501: "Umiarkowany deszcz",
                    502: "Intensywny deszcz",
                    503: "bardzo silny deszcz",
                    504: "Ulewa",
                    511: "Marznący deszcz",
                    520: "Krótka ulewa",
                    521: "Deszcz",
                    522: "Intensywny, lekki deszcz",
                    600: "Lekkie opady śniegu",
                    601: "Śnieg",
                    602: "Mocne opady śniegu",
                    611: "Deszcz ze śniegem",
                    621: "Śnieżyca",
                    701: "Mgiełka",
                    711: "Smog",
                    721: "Zamglenia",
                    731: "Zamieć piaskowa",
                    741: "Mgła",
                    800: "Bezchmurnie",
                    801: "Lekkie zachmurzenie",
                    802: "Rozproszone chmury",
                    803: "Pochmurno z przejaśnieniami",
                    804: "Pochmurno",
                    900: "tornado",
                    901: "burza tropikalna",
                    902: "Huragan",
                    903: "Chłodno",
                    904: "Gorąco",
                    905: "wietrznie",
                    906: "Grad",
                    950: "Setting",
                    951: "Spokojnie",
                    952: "Lekka bryza",
                    953: "Delikatna bryza",
                    954: "Umiarkowana bryza",
                    955: "Świeża bryza",
                    956: "Silna bryza",
                    957: "Prawie wichura",
                    958: "Wichura",
                    959: "Silna wichura",
                    960: "Sztorm",
                    961: "Gwałtowny sztorm",
                    962: "Huragan"
                }
            },
            fi: {
                name: "Finnish",
                main: "",
                description: {
                    200: "ukkosmyrsky ja kevyt sade",
                    201: "ukkosmyrsky ja sade",
                    202: "ukkosmyrsky ja kova sade",
                    210: "pieni ukkosmyrsky",
                    211: "ukkosmyrsky",
                    212: "kova ukkosmyrsky",
                    221: "lievä ukkosmyrsky",
                    230: "ukkosmyrsky ja kevyt tihkusade",
                    231: "ukkosmyrsky ja tihkusade",
                    232: "ukkosmyrsky ja kova tihkusade",
                    300: "lievä tihuttainen",
                    301: "tihuttaa",
                    302: "kova tihuttainen",
                    310: "lievä tihkusade",
                    311: "tihkusade",
                    312: "kova tihkusade",
                    321: "tihkusade",
                    500: "pieni sade",
                    501: "kohtalainen sade",
                    502: "kova sade",
                    503: "erittäin runsasta sadetta",
                    504: "kova sade",
                    511: "jäätävä sade",
                    520: "lievä tihkusade",
                    521: "tihkusade",
                    522: "kova sade",
                    600: "pieni lumisade",
                    601: "lumi",
                    602: "paljon lunta",
                    611: "räntä",
                    621: "lumikuuro",
                    701: "sumu",
                    711: "savu",
                    721: "sumu",
                    731: "hiekka/pöly pyörre",
                    741: "sumu",
                    800: "taivas on selkeä",
                    801: "vähän pilviä",
                    802: "ajoittaisia pilviä",
                    803: "hajanaisia pilviä",
                    804: "pilvinen",
                    900: "tornado",
                    901: "trooppinen myrsky",
                    902: "hirmumyrsky",
                    903: "kylmä",
                    904: "kuuma",
                    905: "tuulinen",
                    906: "rakeita",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            nl: {
                name: "Dutch",
                main: "",
                description: {
                    200: "onweersbui met lichte regen",
                    201: "onweersbui met regen",
                    202: "onweersbui met zware regenval",
                    210: "lichte onweersbui",
                    211: "onweersbui",
                    212: "zware onweersbui",
                    221: "onregelmatig onweersbui",
                    230: "onweersbui met lichte motregen",
                    231: "onweersbui met motregen",
                    232: "onweersbui met zware motregen",
                    300: "lichte motregen",
                    301: "motregen",
                    302: "zware motregen",
                    310: "lichte motregen/regen",
                    311: "motregen",
                    312: "zware motregen/regen",
                    321: "zware motregen",
                    500: "lichte regen",
                    501: "matige regen",
                    502: "zware regenval",
                    503: "zeer zware regenval",
                    504: "extreme regen",
                    511: "Koude buien",
                    520: "lichte stortregen",
                    521: "stortregen",
                    522: "zware stortregen",
                    600: "lichte sneeuw",
                    601: "sneeuw",
                    602: "hevige sneeuw",
                    611: "ijzel",
                    621: "natte sneeuw",
                    701: "mist",
                    711: "mist",
                    721: "nevel",
                    731: "zand/stof werveling",
                    741: "mist",
                    800: "onbewolkt",
                    801: "licht bewolkt",
                    802: "half bewolkt",
                    803: "zwaar bewolkt",
                    804: "geheel bewolkt",
                    900: "tornado",
                    901: "tropische storm",
                    902: "orkaan",
                    903: "koud",
                    904: "heet",
                    905: "stormachtig",
                    906: "hagel",
                    950: "Windstil",
                    951: "Kalm",
                    952: "Lichte bries",
                    953: "Zachte bries",
                    954: "Matige bries",
                    955: "Vrij krachtige wind",
                    956: "Krachtige wind",
                    957: "Harde wind",
                    958: "Stormachtig",
                    959: "Storm",
                    960: "Zware storm",
                    961: "Zeer zware storm",
                    962: "Orkaan"
                }
            },
            fr: {
                name: "French",
                main: "",
                description: {
                    200: "orage et pluie fine",
                    201: "orage et pluie",
                    202: "orage et fortes pluies",
                    210: "orages légers",
                    211: "orages",
                    212: "gros orages",
                    221: "orages éparses",
                    230: "Orage avec légère bruine",
                    231: "orages éparses",
                    232: "gros orage",
                    300: "Bruine légère",
                    301: "Bruine",
                    302: "Fortes bruines",
                    310: "Pluie fine éparse",
                    311: "pluie fine",
                    312: "Crachin intense",
                    321: "Averses de bruine",
                    500: "légères pluies",
                    501: "pluies modérées",
                    502: "Fortes pluies",
                    503: "très fortes précipitations",
                    504: "grosses pluies",
                    511: "pluie verglaçante",
                    520: "petites averses",
                    521: "averses de pluie",
                    522: "averses intenses",
                    600: "légères neiges",
                    601: "neige",
                    602: "fortes chutes de neige",
                    611: "neige fondue",
                    621: "averses de neige",
                    701: "brume",
                    711: "Brouillard",
                    721: "brume",
                    731: "tempêtes de sable",
                    741: "brouillard",
                    800: "ensoleillé",
                    801: "peu nuageux",
                    802: "partiellement ensoleillé",
                    803: "nuageux",
                    804: "Couvert",
                    900: "tornade",
                    901: "tempête tropicale",
                    902: "ouragan",
                    903: "froid",
                    904: "chaud",
                    905: "venteux",
                    906: "grêle",
                    950: "Setting",
                    951: "Calme",
                    952: "Brise légère",
                    953: "Brise douce",
                    954: "Brise modérée",
                    955: "Brise fraiche",
                    956: "Brise forte",
                    957: "Vent fort, presque violent",
                    958: "Vent violent",
                    959: "Vent très violent",
                    960: "Tempête",
                    961: "empête violente",
                    962: "Ouragan"
                }
            },
            bg: {
                name: "Bulgarian",
                main: "",
                description: {
                    200: "Гръмотевична буря със слаб дъжд",
                    201: "Гръмотевична буря с валеж",
                    202: "Гръмотевична буря с порой",
                    210: "Слаба гръмотевична буря",
                    211: "Гръмотевична буря",
                    212: "Силна гръмотевична буря",
                    221: "Разкъсана облачност",
                    230: "Гръмотевична буря със слаб ръмеж",
                    231: "Гръмотевична буря с ръмеж",
                    232: "Гръмотевична буря със силен ръмеж",
                    300: "Слаб ръмеж",
                    301: "Ръми",
                    302: "Силен ръмеж",
                    310: "Слаб дъжд",
                    311: "Ръмящ дъжд",
                    312: "Силен ръмеж",
                    321: "Силен ръмеж",
                    500: "Слаб дъжд",
                    501: "Умерен дъжд",
                    502: "Силен дъжд",
                    503: "Много силен валеж",
                    504: "Силен дъжд",
                    511: "Дъжд със студ",
                    520: "Слаб дъжд",
                    521: "Обилен дъжд",
                    522: "Порой",
                    600: "Слаб снеговалеж",
                    601: "Снеговалеж",
                    602: "Силен снеговалеж",
                    611: "Изненадващ валеж",
                    621: "Обилен снеговалеж",
                    701: "Мъгла",
                    711: "Дим",
                    721: "Ниска мъгла",
                    731: "Пясъчна/Прашна буря",
                    741: "Мъгла",
                    800: "Ясно небе",
                    801: "Ниска облачност",
                    802: "Разкъсана облачност",
                    803: "Разсеяна облачност",
                    804: "Тъмни облаци",
                    900: "Торнадо/Ураган",
                    901: "Тропическа буря",
                    902: "Ураган",
                    903: "Студено",
                    904: "Горещо време",
                    905: "Ветровито",
                    906: "Град",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            se: {
                name: "Swedish",
                main: "",
                description: {
                    200: "åskoväder",
                    201: "åskoväder",
                    202: "fullt åskoväder",
                    210: "åska",
                    211: "åskoväder",
                    212: "åska",
                    221: "ojämnt oväder",
                    230: "åskoväder",
                    231: "åskoväder",
                    232: "fullt åskoväder",
                    300: "mjukt duggregn",
                    301: "duggregn",
                    302: "hårt duggregn",
                    310: "mjukt regn",
                    311: "regn",
                    312: "hårt regn",
                    321: "duggregn",
                    500: "mjukt regn",
                    501: "Måttlig regn",
                    502: "hårt regn",
                    503: "mycket kraftigt regn",
                    504: "ösregn",
                    511: "underkylt regn",
                    520: "mjukt ösregn",
                    521: "dusch-regn",
                    522: "regnar småspik",
                    600: "mjuk snö",
                    601: "snö",
                    602: "kraftigt snöfall",
                    611: "snöblandat regn",
                    621: "snöoväder",
                    701: "dimma",
                    711: "smogg",
                    721: "dis",
                    731: "sandstorm",
                    741: "dimmigt",
                    800: "klar himmel",
                    801: "några moln",
                    802: "spridda moln",
                    803: "molnigt",
                    804: "överskuggande moln",
                    900: "storm",
                    901: "tropisk storm",
                    902: "orkan",
                    903: "kallt",
                    904: "varmt",
                    905: "blåsigt",
                    906: "hagel",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            zh_tw: {
                name: "Chinese Traditional",
                main: "",
                description: {
                    200: "雷陣雨",
                    201: "雷陣雨",
                    202: "雷陣雨",
                    210: "雷陣雨",
                    211: "雷陣雨",
                    212: "雷陣雨",
                    221: "雷陣雨",
                    230: "雷陣雨",
                    231: "雷陣雨",
                    232: "雷陣雨",
                    300: "小雨",
                    301: "小雨",
                    302: "大雨",
                    310: "小雨",
                    311: "小雨",
                    312: "大雨",
                    321: "陣雨",
                    500: "小雨",
                    501: "中雨",
                    502: "大雨",
                    503: "大雨",
                    504: "暴雨",
                    511: "凍雨",
                    520: "陣雨",
                    521: "陣雨",
                    522: "大雨",
                    600: "小雪",
                    601: "雪",
                    602: "大雪",
                    611: "雨夾雪",
                    621: "陣雪",
                    701: "薄霧",
                    711: "煙霧",
                    721: "薄霧",
                    731: "沙旋風",
                    741: "大霧",
                    800: "晴",
                    801: "晴，少雲",
                    802: "多雲",
                    803: "多雲",
                    804: "陰，多雲",
                    900: "龍捲風",
                    901: "熱帶風暴",
                    902: "颶風",
                    903: "冷",
                    904: "熱",
                    905: "大風",
                    906: "冰雹",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            tr: {
                name: "Turkish",
                main: "",
                description: {
                    200: "Gök gürültülü hafif yağmurlu",
                    201: "Gök gürültülü yağmurlu",
                    202: "Gök gürültülü sağanak yağışlı",
                    210: "Hafif sağanak",
                    211: "Sağanak",
                    212: "Şiddetli sağanak",
                    221: "Aralıklı sağanak",
                    230: "Gök gürültülü hafif yağışlı",
                    231: "Gök gürültülü yağışlı",
                    232: "Gök gürültülü şiddetli yağışlı",
                    300: "Yer yer hafif yoğunluklu yağış",
                    301: "Yer yer yağışlı",
                    302: "Yer yer yoğun yağışlı",
                    310: "Yer yer hafif yağışlı",
                    311: "Yer yer yağışlı",
                    312: "Yer yer yoğun yağışlı",
                    321: "Yer yer sağanak yağışlı",
                    500: "Hafif yağmur",
                    501: "Orta şiddetli yağmur",
                    502: "Şiddetli yağmur",
                    503: "Çok şiddetli yağmur",
                    504: "Aşırı yağmur",
                    511: "Yağışlı ve soğuk hava",
                    520: "Kısa süreli hafif yoğunluklu yağmur",
                    521: "Kısa süreli yağmur",
                    522: "Kısa süreli şiddetli yağmur",
                    600: "Hafif kar yağışlı",
                    601: "Kar yağışlı",
                    602: "Yoğun kar yağışlı",
                    611: "Karla karışık yağmurlu",
                    621: "Kısa sürelü kar yağışı",
                    701: "Sisli",
                    711: "Sisli",
                    721: "Hafif sisli",
                    731: "Kum/Toz fırtınası",
                    741: "Sisli",
                    800: "Açık",
                    801: "Az bulutlu",
                    802: "Parçalı az bulutlu",
                    803: "Parçalı bulutlu",
                    804: "Kapalı",
                    900: "Kasırga",
                    901: "Tropik fırtına",
                    902: "Hortum",
                    903: "Çok Soğuk",
                    904: "Çok Sıcak",
                    905: "Rüzgarlı",
                    906: "Dolu yağışı",
                    950: "Durgun",
                    951: "Sakin",
                    952: "Hafif Rüzgarlı",
                    953: "Az Rüzgarlı",
                    954: "Orta Seviye Rüzgarlı",
                    955: "Rüzgarlı",
                    956: "Kuvvetli Rüzgar",
                    957: "Sert Rüzgar",
                    958: "Fırtına",
                    959: "Şiddetli Fırtına",
                    960: "Kasırga",
                    961: "Şiddetli Kasırga",
                    962: "Çok Şiddetli Kasırga"
                }
            },
            zh_cn: {
                name: "Chinese Simplified",
                main: "",
                description: {
                    200: "雷阵雨",
                    201: "雷阵雨",
                    202: "雷阵雨",
                    210: "雷阵雨",
                    211: "雷阵雨",
                    212: "雷阵雨",
                    221: "雷阵雨",
                    230: "雷阵雨",
                    231: "雷阵雨",
                    232: "雷阵雨",
                    300: "小雨",
                    301: "小雨",
                    302: "大雨",
                    310: "小雨",
                    311: "小雨",
                    312: "大雨",
                    321: "阵雨",
                    500: "小雨",
                    501: "中雨",
                    502: "大雨",
                    503: "大雨",
                    504: "暴雨",
                    511: "冻雨",
                    520: "阵雨",
                    521: "阵雨",
                    522: "大雨",
                    600: "小雪",
                    601: "雪",
                    602: "大雪",
                    611: "雨夹雪",
                    621: "阵雪",
                    701: "薄雾",
                    711: "烟雾",
                    721: "薄雾",
                    731: "沙旋风",
                    741: "大雾",
                    800: "晴",
                    801: "晴，少云",
                    802: "多云",
                    803: "多云",
                    804: "阴，多云",
                    900: "龙卷风",
                    901: "热带风暴",
                    902: "飓风",
                    903: "冷",
                    904: "热",
                    905: "大风",
                    906: "冰雹",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            cz: {
                name: "Czech",
                main: "",
                description: {
                    200: "bouřka se slabým deštěm",
                    201: "bouřka a déšť",
                    202: "bouřka se silným deštěm",
                    210: "slabší bouřka",
                    211: "bouřka",
                    212: "silná bouřka",
                    221: "bouřková přeháňka",
                    230: "bouřka se slabým mrholením",
                    231: "bouřka s mrholením",
                    232: "bouřka se silným mrholením",
                    300: "slabé mrholení",
                    301: "mrholení",
                    302: "silné mrholení",
                    310: "slabé mrholení a déšť",
                    311: "mrholení s deštěm",
                    312: "silné mrholení a déšť",
                    313: "mrholení a přeháňky",
                    314: "mrholení a silné přeháňky",
                    321: "občasné mrholení",
                    500: "slabý déšť",
                    501: "déšť",
                    502: "prudký déšť",
                    503: "přívalový déšť",
                    504: "průtrž mračen",
                    511: "mrznoucí déšť",
                    520: "slabé přeháňky",
                    521: "přeháňky",
                    522: "silné přeháňky",
                    531: "občasné přeháňky",
                    600: "mírné sněžení",
                    601: "sněžení",
                    602: "husté sněžení",
                    611: "zmrzlý déšť",
                    612: "smíšené přeháňky",
                    615: "slabý déšť se sněhem",
                    616: "déšť se sněhem",
                    620: "slabé sněhové přeháňky",
                    621: "sněhové přeháňky",
                    622: "silné sněhové přeháňky",
                    701: "mlha",
                    711: "kouř",
                    721: "opar",
                    731: "písečné či prachové víry",
                    741: "hustá mlha",
                    751: "písek",
                    761: "prašno",
                    762: "sopečný popel",
                    771: "prudké bouře",
                    781: "tornádo",
                    800: "jasno",
                    801: "skoro jasno",
                    802: "polojasno",
                    803: "oblačno",
                    804: "zataženo",
                    900: "tornádo",
                    901: "tropická bouře",
                    902: "hurikán",
                    903: "zima",
                    904: "horko",
                    905: "větrno",
                    906: "krupobití",
                    950: "bezvětří",
                    951: "vánek",
                    952: "větřík",
                    953: "slabý vítr",
                    954: "mírný vítr",
                    955: "čerstvý vítr",
                    956: "silný vítr",
                    957: "prudký vítr",
                    958: "bouřlivý vítr",
                    959: "vichřice",
                    960: "silná vichřice",
                    961: "mohutná vichřice",
                    962: "orkán"
                }
            },
            kr: {
                name: "Korea",
                main: "",
                description: {
                    200: "thunderstorm with light rain",
                    201: "thunderstorm with rain",
                    202: "thunderstorm with heavy rain",
                    210: "light thunderstorm",
                    211: "thunderstorm",
                    212: "heavy thunderstorm",
                    221: "ragged thunderstorm",
                    230: "thunderstorm with light drizzle",
                    231: "thunderstorm with drizzle",
                    232: "thunderstorm with heavy drizzle",
                    300: "light intensity drizzle",
                    301: "drizzle",
                    302: "heavy intensity drizzle",
                    310: "light intensity drizzle rain",
                    311: "drizzle rain",
                    312: "heavy intensity drizzle rain",
                    321: "shower drizzle",
                    500: "light rain",
                    501: "moderate rain",
                    502: "heavy intensity rain",
                    503: "very heavy rain",
                    504: "extreme rain",
                    511: "freezing rain",
                    520: "light intensity shower rain",
                    521: "shower rain",
                    522: "heavy intensity shower rain",
                    600: "light snow",
                    601: "snow",
                    602: "heavy snow",
                    611: "sleet",
                    621: "shower snow",
                    701: "mist",
                    711: "smoke",
                    721: "haze",
                    731: "sand/dust whirls",
                    741: "fog",
                    800: "sky is clear",
                    801: "few clouds",
                    802: "scattered clouds",
                    803: "broken clouds",
                    804: "overcast clouds",
                    900: "tornado",
                    901: "tropical storm",
                    902: "hurricane",
                    903: "cold",
                    904: "hot",
                    905: "windy",
                    906: "hail",
                    950: "Setting",
                    951: "Calm",
                    952: "Light breeze",
                    953: "Gentle Breeze",
                    954: "Moderate breeze",
                    955: "Fresh Breeze",
                    956: "Strong breeze",
                    957: "High wind, near gale",
                    958: "Gale",
                    959: "Severe Gale",
                    960: "Storm",
                    961: "Violent Storm",
                    962: "Hurricane"
                }
            },
            gl: {
                name: "Galician",
                main: "",
                description: {
                    200: "tormenta eléctrica con choiva lixeira",
                    201: "tormenta eléctrica con choiva",
                    202: "tormenta eléctrica con choiva intensa",
                    210: "tormenta eléctrica lixeira",
                    211: "tormenta eléctrica",
                    212: "tormenta eléctrica forte",
                    221: "tormenta eléctrica irregular",
                    230: "tormenta eléctrica con orballo lixeiro",
                    231: "tormenta eléctrica con orballo",
                    232: "tormenta eléctrica con orballo intenso",
                    300: "orballo lixeiro",
                    301: "orballo",
                    302: "orballo de gran intensidade",
                    310: "choiva e orballo lixeiro",
                    311: "choiva e orballo",
                    312: "choiva e orballo de gran intensidade",
                    321: "orballo de ducha",
                    500: "choiva lixeira",
                    501: "choiva moderada",
                    502: "choiva de gran intensidade",
                    503: "choiva moi forte",
                    504: "choiva extrema",
                    511: "choiva xeada",
                    520: "choiva de ducha de baixa intensidade",
                    521: "choiva de ducha",
                    522: "choiva de ducha de gran intensidade",
                    600: "nevada lixeira",
                    601: "neve",
                    602: "nevada intensa",
                    611: "auganeve",
                    621: "neve de ducha",
                    701: "néboa",
                    711: "fume",
                    721: "néboa lixeira",
                    731: "remuiños de area e polvo",
                    741: "bruma",
                    800: "ceo claro",
                    801: "algo de nubes",
                    802: "nubes dispersas",
                    803: "nubes rotas",
                    804: "nubes",
                    900: "tornado",
                    901: "tormenta tropical",
                    902: "furacán",
                    903: "frío",
                    904: "calor",
                    905: "ventoso",
                    906: "sarabia",
                    951: "calma",
                    952: "Vento frouxo",
                    953: "Vento suave",
                    954: "Vento moderado",
                    955: "Brisa",
                    956: "Vento forte",
                    957: "Vento forte, próximo a vendaval",
                    958: "Vendaval",
                    959: "Vendaval forte",
                    960: "Tempestade",
                    961: "Tempestade violenta",
                    962: "Furacán"
                }
            },
            vi: {
                name: "vietnamese",
                main: "",
                description: {
                    200: "Giông bão và Mưa nhẹ",
                    201: "Giông bão và Mưa",
                    202: "Giông bão Mưa lớn",
                    210: "Giông bão có chớp giật",
                    211: "Bão",
                    212: "Giông bão lớn",
                    221: "Bão vài nơi",
                    230: "Giông bão và Mưa phùn nhẹ",
                    231: "Giông bão với mưa phùn",
                    232: "Giông bão với mưa phùn nặng",
                    300: "ánh sáng cường độ mưa phùn",
                    301: "mưa phùn",
                    302: "mưa phùn cường độ nặng",
                    310: "mưa phùn nhẹ",
                    311: "mưa và mưa phùn",
                    312: "mưa và mưa phùn nặng",
                    321: "mưa rào và mưa phùn",
                    500: "mưa nhẹ",
                    501: "mưa vừa",
                    502: "mưa cường độ nặng",
                    503: "mưa rất nặng",
                    504: "mưa lốc",
                    511: "mưa lạnh",
                    520: "mưa rào nhẹ",
                    521: "mưa rào",
                    522: "mưa rào cường độ nặng",
                    600: "tuyết rơi nhẹ",
                    601: "tuyết",
                    602: "tuyết nặng hạt",
                    611: "mưa đá",
                    621: "tuyết mù trời",
                    701: "sương mờ",
                    711: "khói bụi",
                    721: "đám mây",
                    731: "bão cát và lốc xoáy",
                    741: "sương mù",
                    800: "bầu trời quang đãng",
                    801: "mây thưa",
                    802: "mây rải rác",
                    803: "mây cụm",
                    804: "mây đen u ám",
                    900: "lốc xoáy",
                    901: "cơn bão nhiệt đới",
                    902: "bão lốc",
                    903: "lạnh",
                    904: "nóng",
                    905: "gió",
                    906: "mưa đá",
                    950: "Chế đọ",
                    951: "Nhẹ nhàng",
                    952: "Ánh sáng nhẹ",
                    953: "Gío thoảng",
                    954: "Gió nhẹ",
                    955: "Gió vừa phải",
                    956: "Gió mạnh",
                    957: "Gió xoáy",
                    958: "Lốc xoáy",
                    959: "Lốc xoáy nặng",
                    960: "Bão",
                    961: "Bão cấp lớn",
                    962: "Bão lốc"
                }
            },
            ar: {
                name: "Arabic",
                main: "",
                description: {
                    200: "عاصفة رعدية مع أمطار خفيفة",
                    201: "العواصف رعدية مع المطر",
                    202: "عاصفة رعدية مع امطار غزيرة",
                    210: "عاصفة رعدية خفيفة",
                    211: "عاصفة رعدية",
                    212: "عاصفة رعدية ثقيلة",
                    221: "عاصفة رعدية خشنة",
                    230: "عاصفة رعدية مع رذاذ خفيف",
                    231: "عاصفة رعدية مع رذاذ",
                    232: "عاصفة رعدية مع رذاذ غزيرة",
                    300: "رذاذ خفيف الكثافة",
                    301: "رذاذ",
                    302: "رذاذ شديد الكثافة",
                    310: "رذاذ مطر خفيف الكثافة",
                    311: "رذاذ مطر",
                    312: "رذاذ مطر شديد الكثافة",
                    321: "وابل رذاذ",
                    500: "مطر خفيف",
                    501: "مطر متوسط الغزارة",
                    502: "مطر غزير",
                    503: "مطر شديد الغزارة",
                    504: "مطر عالي الغزارة",
                    511: "مطر برد",
                    520: "وابل مطر خفيف",
                    521: "وابل مطر",
                    522: "وابل مطر شديد الكثافة",
                    600: "ثلوج خفيفه",
                    601: "ثلوج",
                    602: "ثلوج قوية",
                    611: "صقيع",
                    621: "وابل ثلوج",
                    701: "ضباب",
                    711: "دخان",
                    721: "غيوم",
                    731: "غبار",
                    741: "غيم",
                    800: "سماء صافية",
                    801: "غائم جزئ",
                    802: "غيوم متفرقة",
                    803: "غيوم متناثره",
                    804: "غيوم قاتمة",
                    900: "إعصار",
                    901: "عاصفة استوائية",
                    902: "زويعة",
                    903: "بارد",
                    904: "حار",
                    905: "رياح",
                    906: "وابل",
                    950: "إعداد",
                    951: "هادئ",
                    952: "نسيم خفيف",
                    953: "نسيم لطيف",
                    954: "نسيم معتدل",
                    955: "نسيم عليل",
                    956: "نسيم قوي",
                    957: "رياح قوية",
                    958: "عاصف",
                    959: "عاصفة شديدة",
                    960: "عاصفة",
                    961: "عاصفة عنيفة",
                    962: "إعصار"
                }
            },
            mk: {
                name: "Macedonian",
                main: "",
                description: {
                    200: "грмежи со слаб дожд",
                    201: "грмежи со дожд",
                    202: "грмежи со силен дожд",
                    210: "слаби грмежи",
                    211: "грмежи",
                    212: "силни грмежи",
                    221: "многу силни грмежи",
                    230: "грмежи со слабо росење",
                    231: "грмежи со росење",
                    232: "грмежи со силно росење",
                    300: "слабо росење",
                    301: "росење",
                    302: "силно росење",
                    310: "слабо росење",
                    311: "росење",
                    312: "силно росење",
                    321: "дожд",
                    500: "слаб дожд",
                    501: "слаб дожд",
                    502: "силен дожд",
                    503: "многу силен дожд",
                    504: "обилен дожд",
                    511: "град",
                    520: "слабо росење",
                    521: "роси",
                    522: "силно росење",
                    600: "слаб снег",
                    601: "снег",
                    602: "силен снег",
                    611: "лапавица",
                    621: "лапавица",
                    701: "магла",
                    711: "смог",
                    721: "замагленост",
                    731: "песочен вртлог",
                    741: "магла",
                    800: "чисто небо",
                    801: "неколку облаци",
                    802: "одвоени облаци",
                    803: "облаци",
                    804: "облачно",
                    900: "торнадо",
                    901: "тропска бура",
                    902: "ураган",
                    903: "ладно",
                    904: "топло",
                    905: "ветровито",
                    906: "град",
                    950: "Залез",
                    951: "Мирно",
                    952: "Слаб ветар",
                    953: "Слаб ветар",
                    954: "Ветар",
                    955: "Свеж ветар",
                    956: "Силен ветар",
                    957: "Многу силен ветар",
                    958: "Невреме",
                    959: "Силно невреме",
                    960: "Бура",
                    961: "Силна бура",
                    962: "Ураган"
                }
            },
            sk: {
                name: "Slovak",
                main: "",
                description: {
                    200: "búrka so slabým dažďom",
                    201: "búrka s dažďom",
                    202: "búrka so silným dažďom",
                    210: "mierna búrka",
                    211: "búrka",
                    212: "silná búrka",
                    221: "prudká búrka",
                    230: "búrka so slabým mrholením",
                    231: "búrka s mrholením",
                    232: "búrka so silným mrholením",
                    300: "slabé mrholenie",
                    301: "mrholenie",
                    302: "silné mrholenie",
                    310: "slabé popŕchanie",
                    311: "popŕchanie",
                    312: "silné popŕchanie",
                    321: "jemné mrholenie",
                    500: "slabý dážď",
                    501: "mierny dážď",
                    502: "silný dážď",
                    503: "veľmi silný dážď",
                    504: "extrémny dážď",
                    511: "mrznúci dážď",
                    520: "slabá prehánka",
                    521: "prehánka",
                    522: "silná prehánka",
                    600: "slabé sneženie",
                    601: "sneženie",
                    602: "silné sneženie",
                    611: "dážď so snehom",
                    621: "snehová prehánka",
                    701: "hmla",
                    711: "dym",
                    721: "opar",
                    731: "pieskové/prašné víry",
                    741: "hmla",
                    800: "jasná obloha",
                    801: "takmer jasno",
                    802: "polojasno",
                    803: "oblačno",
                    804: "zamračené",
                    900: "tornádo",
                    901: "tropická búrka",
                    902: "hurikán",
                    903: "zima",
                    904: "horúco",
                    905: "veterno",
                    906: "krupobitie",
                    950: "Nastavenie",
                    951: "Bezvetrie",
                    952: "Slabý vánok",
                    953: "Jemný vietor",
                    954: "Stredný vietor",
                    955: "Čerstvý vietor",
                    956: "Silný vietor",
                    957: "Silný vietor, takmer víchrica",
                    958: "Víchrica",
                    959: "Silná víchrica",
                    960: "Búrka",
                    961: "Ničivá búrka",
                    962: "Hurikán"
                }
            },
            hu: {
                name: "Hungarian",
                main: "",
                description: {
                    200: "vihar enyhe esővel",
                    201: "vihar esővel",
                    202: "vihar heves esővel",
                    210: "enyhe zivatar",
                    211: "vihar",
                    212: "heves vihar",
                    221: "durva vihar",
                    230: "vihar enyhe szitálással",
                    231: "vihar szitálással",
                    232: "vihar erős szitálással",
                    300: "enyhe intenzitású szitálás",
                    301: "szitálás",
                    302: "erős intenzitású szitálás",
                    310: "enyhe intenzitású szitáló eső",
                    311: "szitáló eső",
                    312: "erős intenzitású szitáló eső",
                    321: "zápor",
                    500: "enyhe eső",
                    501: "közepes eső",
                    502: "heves intenzitású eső",
                    503: "nagyon heves eső",
                    504: "extrém eső",
                    511: "ónos eső",
                    520: "enyhe intenzitású zápor",
                    521: "zápor",
                    522: "erős intenzitású zápor",
                    600: "enyhe havazás",
                    601: "havazás",
                    602: "erős havazás",
                    611: "havas eső",
                    621: "hózápor",
                    701: "gyenge köd",
                    711: "köd",
                    721: "köd",
                    731: "homokvihar",
                    741: "köd",
                    800: "tiszta égbolt",
                    801: "kevés felhő",
                    802: "szórványos felhőzet",
                    803: "erős felhőzet",
                    804: "borús égbolt",
                    900: "tornádó",
                    901: "trópusi vihar",
                    902: "hurrikán",
                    903: "hűvös",
                    904: "forró",
                    905: "szeles",
                    906: "jégeső",
                    950: "Nyugodt",
                    951: "Csendes",
                    952: "Enyhe szellő",
                    953: "Finom szellő",
                    954: "Közepes szél",
                    955: "Élénk szél",
                    956: "Erős szél",
                    957: "Erős, már viharos szél",
                    958: "Viharos szél",
                    959: "Erősen viharos szél",
                    960: "Szélvihar",
                    961: "Tomboló szélvihar",
                    962: "Hurrikán"
                }
            },
            ca: {
                name: "Catalan",
                main: "",
                description: {
                    200: "Tempesta amb pluja suau",
                    201: "Tempesta amb pluja",
                    202: "Tempesta amb pluja intensa",
                    210: "Tempesta suau",
                    211: "Tempesta",
                    212: "Tempesta forta",
                    221: "Tempesta irregular",
                    230: "Tempesta amb plugim suau",
                    231: "Tempesta amb plugin",
                    232: "Tempesta amb molt plugim",
                    300: "Plugim suau",
                    301: "Plugim",
                    302: "Plugim intens",
                    310: "Plugim suau",
                    311: "Plugim",
                    312: "Plugim intens",
                    313: "Pluja",
                    314: "Pluja intensa",
                    321: "Plugim",
                    500: "Pluja suau",
                    501: "Pluja",
                    502: "Pluja intensa",
                    503: "Pluja molt intensa",
                    504: "Pluja extrema",
                    511: "Pluja glaçada",
                    520: "Pluja suau",
                    521: "Pluja suau",
                    522: "Pluja intensa",
                    531: "Pluja irregular",
                    600: "Nevada suau",
                    601: "Nevada",
                    602: "Nevada intensa",
                    611: "Aiguaneu",
                    612: "Pluja d'aiguaneu",
                    615: "Plugim i neu",
                    616: "Pluja i neu",
                    620: "Nevada suau",
                    621: "Nevada",
                    622: "Nevada intensa",
                    701: "Boira",
                    711: "Fum",
                    721: "Boirina",
                    731: "Sorra",
                    741: "Boira",
                    751: "Sorra",
                    761: "Pols",
                    762: "Cendra volcànica",
                    771: "Xàfec",
                    781: "Tornado",
                    800: "Cel net",
                    801: "Lleugerament ennuvolat",
                    802: "Núvols dispersos",
                    803: "Nuvolositat variable",
                    804: "Ennuvolat",
                    900: "Tornado",
                    901: "Tempesta tropical",
                    902: "Huracà",
                    903: "Fred",
                    904: "Calor",
                    905: "Vent",
                    906: "Pedra",
                    950: "",
                    951: "Calmat",
                    952: "Brisa suau",
                    953: "Brisa agradable",
                    954: "Brisa moderada",
                    955: "Brisa fresca",
                    956: "Brisca fora",
                    957: "Vent intens",
                    958: "Vendaval",
                    959: "Vendaval sever",
                    960: "Tempesta",
                    961: "Tempesta violenta",
                    962: "Huracà"
                }
            },
            hr: {
                name: "Croatian",
                main: "",
                description: {
                    200: "grmljavinska oluja s slabom kišom",
                    201: "grmljavinska oluja s kišom",
                    202: "grmljavinska oluja s jakom kišom",
                    210: "slaba grmljavinska oluja",
                    211: "grmljavinska oluja",
                    212: "jaka grmljavinska oluja",
                    221: "orkanska grmljavinska oluja",
                    230: "grmljavinska oluja sa slabom rosuljom",
                    231: "grmljavinska oluja s rosuljom",
                    232: "grmljavinska oluja sa jakom rosuljom",
                    300: "rosulja slabog intenziteta",
                    301: "rosulja",
                    302: "rosulja jakog intenziteta",
                    310: "rosulja s kišom slabog intenziteta",
                    311: "rosulja s kišom",
                    312: "rosulja s kišom jakog intenziteta",
                    313: "pljuskovi i rosulja",
                    314: "rosulja s jakim pljuskovima",
                    321: "rosulja s pljuskovima",
                    500: "slaba kiša",
                    501: "umjerena kiša",
                    502: "kiša jakog intenziteta",
                    503: "vrlo jaka kiša",
                    504: "ekstremna kiša",
                    511: "ledena kiša",
                    520: "pljusak slabog intenziteta",
                    521: "pljusak",
                    522: "pljusak jakog intenziteta",
                    531: "olujna kiša s pljuskovima",
                    600: "slabi snijeg",
                    601: "snijeg",
                    602: "gusti snijeg",
                    611: "susnježica",
                    612: "susnježica s pljuskovima",
                    615: "slaba kiša i snijeg",
                    616: "kiša i snijeg",
                    620: "snijeg s povremenim pljuskovima",
                    621: "snijeg s pljuskovima",
                    622: "snijeg s jakim pljuskovima",
                    701: "sumaglica",
                    711: "dim",
                    721: "izmaglica",
                    731: "kovitlaci pijeska ili prašine",
                    741: "magla",
                    751: "pijesak",
                    761: "prašina",
                    762: "vulkanski pepeo",
                    771: "zapusi vjetra s kišom",
                    781: "tornado",
                    800: "vedro",
                    801: "blaga naoblaka",
                    802: "raštrkani oblaci",
                    803: "isprekidani oblaci",
                    804: "oblačno",
                    900: "tornado",
                    901: "tropska oluja",
                    902: "orkan",
                    903: "hladno",
                    904: "vruće",
                    905: "vjetrovito",
                    906: "tuča",
                    950: "",
                    951: "lahor",
                    952: "povjetarac",
                    953: "slab vjetar",
                    954: "umjeren vjetar",
                    955: "umjereno jak vjetar",
                    956: "jak vjetar",
                    957: "žestok vjetar",
                    958: "olujni vjetar",
                    959: "jak olujni vjetar",
                    960: "orkanski vjetar",
                    961: "jak orkanski vjetar",
                    962: "orkan"
                }
            },
            blank: {
                name: "Catalan",
                main: "",
                description: {
                    200: "",
                    201: "",
                    202: "",
                    210: "",
                    211: "",
                    212: "",
                    221: "",
                    230: "",
                    231: "",
                    232: "",
                    300: "",
                    301: "",
                    302: "",
                    310: "",
                    311: "",
                    312: "",
                    313: "",
                    314: "",
                    321: "",
                    500: "",
                    501: "",
                    502: "",
                    503: "",
                    504: "",
                    511: "",
                    520: "",
                    521: "",
                    522: "",
                    531: "",
                    600: "",
                    601: "",
                    602: "",
                    611: "",
                    612: "",
                    615: "",
                    616: "",
                    620: "",
                    621: "",
                    622: "",
                    701: "",
                    711: "",
                    721: "",
                    731: "",
                    741: "",
                    751: "",
                    761: "",
                    762: "",
                    771: "",
                    781: "",
                    800: "",
                    801: "",
                    802: "",
                    803: "",
                    804: "",
                    900: "",
                    901: "",
                    902: "",
                    903: "",
                    904: "",
                    905: "",
                    906: "",
                    950: "",
                    951: "",
                    952: "",
                    953: "",
                    954: "",
                    955: "",
                    956: "",
                    957: "",
                    958: "",
                    959: "",
                    960: "",
                    961: "",
                    962: ""
                }
            }
        }
    }, {}],
    3: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.windSpeed = {
            en: {
                Settings: {
                    speed_interval: [0, .3],
                    desc: "0-1   Smoke rises straight up"
                },
                Calm: {
                    speed_interval: [.3, 1.6],
                    desc: "1-3 One can see downwind of the smoke drift"
                },
                "Light breeze": {
                    speed_interval: [1.6, 3.3],
                    desc: "4-6 One can feel the wind. The leaves on the trees move, the wind can lift small streamers."
                },
                "Gentle Breeze": {
                    speed_interval: [3.4, 5.5],
                    desc: "7-10 Leaves and twigs move. Wind extends light flag and pennants"
                },
                "Moderate breeze": {
                    speed_interval: [5.5, 8],
                    desc: "11-16   The wind raises dust and loose papers, touches on the twigs and small branches, stretches larger flags and pennants"
                },
                "Fresh Breeze": {
                    speed_interval: [8, 10.8],
                    desc: "17-21   Small trees in leaf begin to sway. The water begins little waves to peak"
                },
                "Strong breeze": {
                    speed_interval: [10.8, 13.9],
                    desc: "22-27   Large branches and smaller tribes moves. The whiz of telephone lines. It is difficult to use the umbrella. A resistance when running."
                },
                "High wind, near gale": {
                    speed_interval: [13.9, 17.2],
                    desc: "28-33   Whole trees in motion. It is hard to go against the wind."
                },
                Gale: {
                    speed_interval: [17.2, 20.7],
                    desc: "34-40   The wind break twigs of trees. It is hard to go against the wind."
                },
                "Severe Gale": {
                    speed_interval: [20.8, 24.5],
                    desc: "41-47   All large trees swaying and throws. Tiles can blow down."
                },
                Storm: {
                    speed_interval: [24.5, 28.5],
                    desc: "48-55   Rare inland. Trees uprooted. Serious damage to houses."
                },
                "Violent Storm": {
                    speed_interval: [28.5, 32.7],
                    desc: "56-63   Occurs rarely and is followed by destruction."
                },
                Hurricane: {
                    speed_interval: [32.7, 64],
                    desc: "Occurs very rarely. Unusually severe damage."
                }
            }
        }
    }, {}],
    4: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = function() {
                function e() {
                    r(this, e), this.baseDomain = "phase.owm.io" === document.location.hostname ? "phase.owm.io" : "openweathermap.org", this.baseURL = "//" + this.baseDomain + "/themes/openweathermap/assets/vendor/owm", this.scriptD3SRC = this.baseURL + "/js/libs/d3.min.js", this.scriptSRC = this.baseURL + "/js/weather-widget-generator-2.0.js", this.mapWidgets = {
                        "widget-1-left-blue": {
                            code: '<script src="' + this.scriptD3SRC + '"><\/script>\n                       ' + this.getCodeForGenerateWidget(2, 524901, "Moscow", ""),
                            schema: "blue"
                        },
                        "widget-2-left-blue": {
                            code: "<script type=\"text/javascript\">\n                            window.myWidgetParam = {\n                                id: 2,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " + this.scriptSRC + ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                      <\/script>",
                            schema: "blue"
                        },
                        "widget-left-blue": {
                            code: "script.js?type=left&schema=blue&id=3",
                            schema: "blue"
                        },
                        "widget-4-left-blue": {
                            code: "script.js?type=left&schema=blue&id=4",
                            schema: "blue"
                        },
                        "widget-5-right-blue": {
                            code: "script.js?type=right&schema=blue&id=5",
                            schema: "blue"
                        },
                        "widget-6-right-blue": {
                            code: "script.js?type=right&schema=blue&id=6",
                            schema: "blue"
                        },
                        "widget-7-right-blue": {
                            code: "script.js?type=right&schema=blue&id=7",
                            schema: "blue"
                        },
                        "widget-8-right-blue": {
                            code: "script.js?type=right&schema=blue&id=8",
                            schema: "blue"
                        },
                        "widget-9-right-blue": {
                            code: "script.js?type=right&schema=blue&id=9",
                            schema: "blue"
                        },
                        "widget-1-left-brown": {
                            code: '<script src="' + this.scriptD3SRC + "\"><\/script>\n                            <script type=\"text/javascript\">\n                                    window.myWidgetParam = {\n                                    id: 10,\n                                    cityid: 524901,\n                                    containerid: 'openweathermap-widget',\n                                };\n                                (function() {\n                                    var script = document.createElement('script');\n                                    script.type = 'text/javascript';\n                                    script.async = true;\n                                    script.src = " + this.scriptSRC + ";\n                                    var s = document.getElementsByTagName('script')[0];\n                                    s.parentNode.insertBefore(script, s);\n                                })();\n                            <\/script>",
                            schema: "brown"
                        },
                        "widget-2-left-brown": {
                            code: "<script type=\"text/javascript\">\n                            window.myWidgetParam = {\n                                id: 11,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " + this.scriptSRC + ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                        <\/script>",
                            schema: "brown"
                        },
                        "widget-left-brown": {
                            code: "<script type=\"text/javascript\">\n                            window.myWidgetParam = {\n                                id: 12,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " + this.scriptSRC + ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                        <\/script>",
                            schema: "brown"
                        },
                        "widget-4-left-brown": {
                            code: "script.js?type=left&schema=brown&id=4",
                            schema: "brown"
                        },
                        "widget-5-right-brown": {
                            code: "script.js?type=left&schema=brown&id=5",
                            schema: "brown"
                        },
                        "widget-6-right-brown": {
                            code: "script.js?type=left&schema=brown&id=6",
                            schema: "brown"
                        },
                        "widget-7-right-brown": {
                            code: "script.js?type=right&schema=brown&id=7",
                            schema: "brown"
                        },
                        "widget-8-right-brown": {
                            code: "script.js?type=right&schema=brown&id=8",
                            schema: "brown"
                        },
                        "widget-9-right-brown": {
                            code: "script.js?type=right&schema=brown&id=9",
                            schema: "brown"
                        },
                        "widget-1-left-white": {
                            code: "script.js?type=left&schema=white&id=1",
                            schema: "none"
                        },
                        "widget-2-left-white": {
                            code: "script.js?type=left&schema=white&id=2",
                            schema: "none"
                        },
                        "widget-left-white": {
                            code: "script.js?type=left&schema=white&id=3",
                            schema: "none"
                        },
                        "widget-4-left-white": {
                            code: "script.js?type=left&schema=white&id=4",
                            schema: "none"
                        }
                    }, this.domElements = {
                        id1: {
                            id: 1,
                            type: "left",
                            schema: "blue",
                            colorPolilyne: "#DDF730",
                            domEmpty: '<div class="widget-left widget-left--blue">\n                     <i class="widget-left__loading" />\n                   </div>',
                            dom: '\n                    <div class="widget-left widget-left--blue">\n                    <div class="widget-left-menu widget-left-menu--blue">\n                      <div class="widget-left-menu__layout">\n                        <h2 class="widget-left-menu__header"></h2>\n                        <div class="widget-left-menu__links"><span>More at</span><span href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</span></div>\n                      </div>\n                    </div>\n                    <div class="widget-left__body">\n                      <div class="weather-left-card">\n                        <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="" class="weather-left-card__img"/>\n                          <div class="weather-left-card__col">\n                            <p class="weather-left-card__number"><sup class="weather-left-card__degree"></sup></p><span class="weather-left-card__rising">and rising</span>\n                          </div>\n                        </div>\n                        <div class="weather-left-card__row2">\n                          <p class="weather-left-card__means">-</p>\n                          <p class="weather-left-card__wind">Wind:</p>\n                        </div>\n                      </div>\n                      <div class="widget-left__calendar">\n                        <ul class="calendar">\n                          <li class="calendar__item">Today</li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                        </ul>\n                        <div id="graphic1" class="widget-left__graphic"></div>\n                      </div>\n                    </div>\n                  </div>'
                        },
                        id2: {
                            id: 2,
                            type: "left",
                            schema: "blue",
                            domEmpty: '<div class="widget-left widget-left--compact widget-left--blue">\n                        <i class="widget-left__loading" />\n                    </div>',
                            dom: '<div class="widget-left widget-left--compact widget-left--blue">\n                            <div class="widget-left-menu widget-left-menu--compact widget-left-menu--blue">\n                                <div class="widget-left-menu__layout widget-left-menu__layout--blue">\n                                <h2 class="widget-left-menu__header"></h2>\n                                </div>\n                            </div>\n                            <div class="widget-left__body widget-left__body--compact widget-left__body--blue">\n                                <div class="weather-left-card weather-left-card--compact">\n                                <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="" class="weather-left-card__img"/>\n                                <div class="weather-left-card__col">\n                                    <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                                </div>\n                            </div>\n                            <div class="weather-left-card__row2">\n                                <p class="weather-left-card__means"></p>\n                                <p class="weather-left-card__wind">Wind:</p>\n                            </div>\n                            </div>\n                            <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--blue">\n                                <div class="widget-left-menu__layout widget-left-menu__layout--blue"><span>More at</span><a href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                            </div>\n                            </div>\n                        </div>'
                        },
                        id3: {
                            id: 3,
                            type: "left",
                            schema: "blue",
                            domEmpty: '<div class="widget-left widget-left--small widget-left--blue">\n                    <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--small widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--blue">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--small calendar--blue">\n                    <img width="32" height="32" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--blue">\n                  <div class="widget-left__layout"><a href="//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                    <div class="widget-left__date"></div>\n                  </div>\n                </div>\n              </div>'
                        },
                        id4: {
                            id: 4,
                            type: "left",
                            schema: "blue",
                            domEmpty: '<div class="widget-left widget-left--small widget-left--blue">\n                    <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--small2 widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--blue">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--small2 calendar--blue">\n                    <img width="64" height="64" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--blue">\n                <div class="widget-left__layout"><a href="//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                <div class="widget-left__date"></div>\n                </div>\n                </div>\n              </div>'
                        },
                        id5: {
                            id: 5,
                            type: "right",
                            schema: "blue",
                            domEmpty: '<div class="widget-right weather-right--type1 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right weather-right--type1 widget-right--blue">\n                <div class="widget-right__header widget-right__header--blue">\n                  <div class="widget-right__layout">\n                    <div>\n                      <h2 class="widget-right__title"></h2>\n                      <p class="widget-right__description"></p>\n                    </div>\n                  </div><img width="128" height="128" alt="" class="weather-right__icon weather-right__icon--type1" src="">\n                </div>\n                <div class="weather-right weather-right--type1 weather-right--blue">\n                  <div class="weather-right__layout">\n                  <div class="weather-right__temperature"><span></span></div>\n                  <div class="weather-right__weather">\n                    <div class="weather-right-card">\n                    <table class="weather-right__table">\n                      <tbody><tr class="weather-right__items">\n                      <th colspan="2" class="weather-right__item">Details</th>\n                      </tr>\n                      <tr class="weather-right__items">\n                      <td class="weather-right__item">Feels like</td>\n                      <td class="weather-right__item weather-right__feels"><span></span></td>\n                      </tr>\n                      <tr class="weather-right__items">\n                      <td class="weather-right__item">Wind</td>\n                      <td class="weather-right__item weather-right__wind-speed"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Humidity</td>\n                      <td class="weather-right__item weather-right__humidity"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Precip</td>\n                      <td class="weather-right__item"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Pressure</td>\n                      <td class="weather-right__item weather-right__pressure"></td>\n                      </tr>\n                    </tbody></table>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n                <div class="widget-right__footer widget-right__footer--blue">\n                  <div class="widget-right__layout"><a href="//openweathermap.org/" class="widget-right__link">OpenWeatherMap</a>\n                  <div class="widget-right__date"></div>\n                  </div>\n                </div>\n              </div>'
                        },
                        id6: {
                            id: 6,
                            type: "right",
                            schema: "blue",
                            domEmpty: '<div class="widget-right widget-right--type2 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type2 widget-right--blue">\n                          <div class="widget-right__header widget-right__header--blue">\n                            <div class="widget-right__layout">\n                              <div>\n                                <h2 class="widget-right__title"></h2>\n                                <p class="widget-right__description"></p>\n                              </div>\n                            </div>\n                          </div>\n                          <div class="weather-right weather-right--blue weather-right--type2">\n                            <div class="weather-right__layout">\n                              <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                            </div>\n                          </div>\n                          <div class="widget-right__footer widget-right__footer--blue">\n                            <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                          </div>\n                      </div>'
                        },
                        id7: {
                            id: 7,
                            type: "right",
                            schema: "blue",
                            domEmpty: '<div class="widget-right widget-right--type3 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type3 widget-right--blue">\n                      <div class="widget-right__header widget-right__header--blue">\n                        <div class="widget-right__layout">\n                          <div>\n                            <h2 class="widget-right__title"></h2>\n                            <p class="widget-right__description"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--blue weather-right--type3">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                          <table class="weather-right-table weather-right-table--blue">\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Feels Like</td>\n                              <td class="weather-right-table__item weather-right__feels"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Wind</td>\n                              <td class="weather-right-table__item weather-right__wind-speed"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Pessure</td>\n                              <td class="weather-right-table__item weather-right__pressure"></td>\n                            </tr>\n                          </table>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--blue">\n                        <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>'
                        },
                        id8: {
                            id: 8,
                            type: "right",
                            schema: "blue",
                            domEmpty: '<div class="widget-right widget-right--type5 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type5 widget-right--blue">\n                  <div class="widget-right__layout widget-right__layout--blue">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="64" height="64" alt="" class="weather-right__icon weather-right__icon--type5 weather-right__icon--blue"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--blue">\n                    <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date"></div>\n                    </div>\n                  </div>\n                </div>'
                        },
                        id9: {
                            id: 9,
                            type: "right",
                            schema: "blue",
                            domEmpty: '<div class="widget-right widget-right--type4 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type4 widget-right--blue">\n                  <div class="widget-right__layout widget-right__layout--blue">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="100" alt="" class="weather-right__icon weather-right__icon--type4 weather-right__icon--blue"/>\n                    <table class="weather-right-card weather-right-card--type4 weather-right-card--blue">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--blue">\n                    <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date"></div>\n                    </div>\n                  </div>\n                </div>'
                        },
                        id11: {
                            id: 11,
                            type: "left",
                            schema: "brown",
                            colorPolilyne: "#FEB020",
                            domEmpty: '<div class="widget-left">\n                        <i class="widget-left__loading" />\n                    </div>',
                            dom: '<div class="widget-left">\n                    <div class="widget-left-menu widget-left-menu--brown">\n                      <div class="widget-left-menu__layout">\n                        <h2 class="widget-left-menu__header"></h2>\n                        <div class="widget-left-menu__links"><span>More at</span><a href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>\n                    <div class="widget-left__body">\n                      <div class="weather-left-card">\n                        <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                          <div class="weather-left-card__col">\n                            <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                          </div>\n                        </div>\n                        <div class="weather-left-card__row2">\n                          <p class="weather-left-card__means"></p>\n                          <p class="weather-left-card__wind">Wind:</p>\n                        </div>\n                      </div>\n                      <div class="widget-left__calendar">\n                        <ul class="calendar">\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                        </ul>\n                        <div id="graphic2" class="widget-left__graphic"></div>\n                      </div>\n                    </div>\n                  </div>'
                        },
                        id12: {
                            id: 12,
                            type: "left",
                            schema: "brown",
                            domEmpty: '<div class="widget-left widget-left--compact">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--compact">\n                      <div class="widget-left-menu widget-left-menu--compact widget-left-menu--brown">\n                        <div class="widget-left-menu__layout widget-left-menu__layout--brown">\n                          <h2 class="widget-left-menu__header">Weather</h2>\n                        </div>\n                      </div>\n                      <div class="widget-left__body widget-left__body--compact">\n                        <div class="weather-left-card weather-left-card--compact">\n                          <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                            <div class="weather-left-card__col">\n                              <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                            </div>\n                          </div>\n                          <div class="weather-left-card__row2">\n                            <p class="weather-left-card__means"></p>\n                            <p class="weather-left-card__wind">Wind:</p>\n                          </div>\n                        </div>\n                        <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--brown">\n                          <div class="widget-left-menu__layout widget-left-menu__layout--brown"><span>More at</span><a href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                        </div>\n                      </div>\n                    </div>'
                        },
                        id13: {
                            id: 13,
                            type: "left",
                            schema: "brown",
                            domEmpty: '<div class="widget-left widget-left--small widget-left--brown">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--small widget-left--brown">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--brown">\n                <div class="widget-left-menu__header-container">\n                  <h2 class="widget-left-menu__header"></h2>\n                </div>\n                <p class="calendar calendar--small calendar--brown">\n                  <img width="32" height="32" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                </p>\n                <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--brown">\n                <div class="widget-left__layout"><a href="//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date"></div>\n                </div>\n                </div>\n              </div>'
                        },
                        id14: {
                            id: 14,
                            type: "left",
                            schema: "brown",
                            domEmpty: '<div class="widget-left widget-left--small2 widget-left--brown">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--small2 widget-left--brown">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--brown">\n                <div class="widget-left-menu__header-container">\n                  <h2 class="widget-left-menu__header"></h2>\n                </div>\n                <p class="calendar calendar--small2 calendar--brown">\n                  <img width="64" height="64" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                </p>\n                <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--brown">\n                <div class="widget-left__layout"><a href="//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date"></div>\n                </div>\n                </div>\n              </div>'
                        },
                        id15: {
                            id: 15,
                            type: "right",
                            schema: "brown",
                            domEmpty: '<div class="widget-right weather-right--type1 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right weather-right--type1 widget-right--brown">\n                    <div class="widget-right__header widget-right__header--brown">\n                      <div class="widget-right__layout">\n                        <div>\n                          <h2 class="widget-right__title"></h2>\n                          <p class="widget-right__description"></p>\n                        </div>\n                      </div><img src="" width="128" height="128" alt="" class="weather-right__icon weather-right__icon--type1"/>\n                    </div>\n                    <div class="weather-right weather-right--brown">\n                      <div class="weather-right__layout">\n                        <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                        <div class="weather-right__weather">\n                          <div class="weather-right-card">\n                            <table class="weather-right__table">\n                              <tr class="weather-right__items">\n                                <th colspan="2" class="weather-right__item">Details</th>\n                              </tr>\n                              <tr class="weather-right__items">\n                                <td class="weather-right__item">Feels like</td>\n                                <td class="weather-right__item weather-right__feels"><span class="widget-right-card__units"></span></td>\n                              </tr>\n                              <tr class="weather-right__items">\n                                <td class="weather-right__item">Wind</td>\n                                <td class="weather-right__item weather-right__wind-speed"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Humidity</td>\n                                <td class="weather-right__item weather-right__humidity"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Precip</td>\n                                <td class="weather-right__item"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Pressure</td>\n                                <td class="weather-right__item weather-right__pressure"></td>\n                              </tr>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="widget-right__footer widget-right__footer--brown">\n                      <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                        <div class="widget-right__date"></div>\n                      </div>\n                    </div>\n                  </div>'
                        },
                        id16: {
                            id: 16,
                            type: "right",
                            schema: "brown",
                            domEmpty: '<div class="wwidget-right widget-right--type2 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type2 widget-right--brown">\n                      <div class="widget-right__header widget-right__header--brown">\n                        <div class="widget-right__layout">\n                          <div>\n                            <h2 class="widget-right__title"></h2>\n                            <p class="widget-right__description"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--brown weather-right--type2">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--brown">\n                        <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>'
                        },
                        id17: {
                            id: 17,
                            type: "right",
                            schema: "brown",
                            domEmpty: '<div class="widget-right widget-right--type3 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type3 widget-right--brown">\n                      <div class="widget-right__header widget-right__header--brown">\n                        <div class="widget-right__layout">\n                          <div>\n                            <h2 class="widget-right__title"></h2>\n                            <p class="widget-right__description"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--brown weather-right--type3">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                          <table class="weather-right-table">\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Feels Like</td>\n                              <td class="weather-right-table__item weather-right__feels"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Wind</td>\n                              <td class="weather-right-table__item weather-right__wind-speed"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Pessure</td>\n                              <td class="weather-right-table__item weather-right__pressure"></td>\n                            </tr>\n                          </table>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--brown">\n                        <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a></div>\n                      </div>\n                    </div>'
                        },
                        id18: {
                            id: 18,
                            type: "right",
                            schema: "brown",
                            domEmpty: '<div class="widget-right widget-right--type5 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type5 widget-right--brown">\n                  <div class="widget-right__layout widget-right__layout--brown">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="64" height="64" alt="" class="weather-right__icon weather-right__icon--type5 weather-right__icon--brown"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--brown">\n                    <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date"></div>\n                    </div>\n                  </div>\n                </div>'
                        },
                        id19: {
                            id: 19,
                            type: "right",
                            schema: "brown",
                            domEmpty: '<div class="widget-right widget-right--type4 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                            dom: '<div class="widget-right widget-right--type4 widget-right--brown">\n                  <div class="widget-right__layout widget-right__layout--brown">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="100" alt="" class="weather-right__icon weather-right__icon--type4 weather-right__icon--brown"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--brown">\n                    <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank" class="widget-right__link">OpenWeatherMap</a>\n                      <div class="widget-right__date"></div>\n                    </div>\n                  </div>\n                </div>'
                        },
                        id21: {
                            id: 21,
                            type: "left",
                            schema: "white",
                            domEmpty: '<div class="widget-left">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left">\n                  <div class="widget-left-menu">\n                    <div class="widget-left-menu__layout">\n                      <h2 class="widget-left-menu__header"></h2>\n                      <div class="widget-left-menu__links"><span>More at</span><a href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                    </div>\n                  </div>\n                  <div class="widget-left__body">\n                    <div class="weather-left-card weather-left-card--grayscale">\n                      <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                        <div class="weather-left-card__col">\n                          <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                        </div>\n                      </div>\n                      <div class="weather-left-card__row2">\n                        <p class="weather-left-card__means"></p>\n                        <p class="weather-left-card__wind">Wind:</p>\n                      </div>\n                    </div>\n                    <div class="widget-left__calendar">\n                      <ul class="calendar calendar--grayscale">\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                      </ul>\n                      <div id="graphic" class="widget-left__graphic"></div>\n                    </div>\n                  </div>\n                </div>'
                        },
                        id22: {
                            id: 22,
                            type: "left",
                            schema: "white",
                            domEmpty: '<div class="widget-left widget-left--compact">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--compact">\n                  <div class="widget-left-menu widget-left-menu--compact">\n                    <div class="widget-left-menu__layout">\n                      <h2 class="widget-left-menu__header"></h2>\n                    </div>\n                  </div>\n                  <div class="widget-left__body widget-left__body--compact">\n                    <div class="weather-left-card weather-left-card--compact weather-left-card--grayscale">\n                      <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                        <div class="weather-left-card__col">\n                          <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                        </div>\n                      </div>\n                      <div class="weather-left-card__row2">\n                        <p class="weather-left-card__means"></p>\n                        <p class="weather-left-card__wind">Wind:</p>\n                      </div>\n                    </div>\n                    <div class="widget-left-menu__links widget-left-menu__links--compact">\n                      <div class="widget-left-menu__layout"><span>More at</span><a href="//openweathermap.org/" target="_blank" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                    </div>\n                  </div>\n                </div>'
                        },
                        id23: {
                            id: 23,
                            type: "left",
                            schema: "white",
                            domEmpty: '<div class="widget-left widget-left--small">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--small">\n                <div class="widget-left-menu widget-left-menu--small">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--grayscale calendar--small">\n                    <img width="32" height="32" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--grayscale">\n                  <div class="widget-left__layout"><a href="//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date"></div>\n                  </div>\n                </div>\n              </div>'
                        },
                        id24: {
                            id: 24,
                            type: "left",
                            schema: "white",
                            domEmpty: '<div class="widget-left widget-left--small2">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left widget-left--small2">\n                <div class="widget-left-menu widget-left-menu--small">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--grayscale calendar--small2">\n                    <img width="64" height="64" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left__footer widget-left__footer--grayscale">\n                  <div class="widget-left__layout"><a href="//openweathermap.org/" class="widget-left__link">OpenWeatherMap</a>\n                  <div class="widget-left__date"></div>\n                  </div>\n                </div>\n              </div>'
                        },
                        id31: {
                            id: 31,
                            type: "left",
                            schema: "brown",
                            domEmpty: '<div class="widget-left">\n                     <i class="widget-left__loading" />\n                  </div>',
                            dom: '<div class="widget-left">\n                <div class="widget-left-menu widget-left-menu--brown">\n                  <div class="widget-left-menu__layout">\n                    <h2 class="widget-left-menu__header">Weather</h2><img src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/vetochki01.png" alt="Merry Christmas" class="widget-left-menu__christmas"/>\n                  </div>\n                </div>\n                <div class="widget-left__body">\n                  <div class="weather-left-card">\n                    <div class="weather-left-card__row1"><img width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                      <div class="weather-left-card__col">\n                        <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                      </div>\n                    </div>\n                    <div class="weather-left-card__row2">\n                      <p class="weather-left-card__means"></p>\n                      <p class="weather-left-card__wind">Wind:</p>\n                    </div>\n                    <div class="widget-left-menu__links widget-left-menu__links--christmas"><span>More at</span><a href="//openweathermap.org/" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                  </div>\n                  <div class="widget-left__calendar">\n                    <ul class="calendar">\n                      <li class="calendar__item">Today</li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                    </ul>\n                    <div id="graphic3" class="widget-left__graphic"></div>\n                  </div>\n                </div>'
                        }
                    }, this.lincsCSS = {
                        all: '<link href="' + this.baseURL + '/css/style.min.css" rel="stylesheet" />',
                        left: '<link href="' + this.baseURL + '/css/openweathermap-widget-left.min.css" rel="stylesheet" />',
                        right: '<link href="' + this.baseURL + '/css/openweathermap-widget-right.min.css" rel="stylesheet" />'
                    }
                }
                return i(e, [{
                    key: "getCodeForGenerateWidget",
                    value: function(e, t, n, r) {
                        return e && (t || n) && r ? ' <script type="text/javascript">\n                                window.myWidgetParam = {\n                                    id: ' + e + ",\n                                    cityid: " + city_id + ",\n                                    containerid: 'openweathermap-widget',\n                                };\n                                (function() {\n                                    var script = document.createElement('script');\n                                    script.type = 'text/javascript';\n                                    script.async = true;\n                                    script.src = " + this.scriptSRC + ";\n                                    var s = document.getElementsByTagName('script')[0];\n                                    s.parentNode.insertBefore(script, s);\n                                })();\n            <\/script>" : null
                    }
                }, {
                    key: "render",
                    value: function(e) {
                        if (e) {
                            this.selDOMElement = this.domElements["id" + e.id];
                            var t = document.getElementById(e.containerid);
                            t.insertAdjacentHTML("afterbegin", this.selDOMElement.dom), t.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type]);
                            t.insertAdjacentHTML("beforeend", "<script>\n         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n         ga('create', 'UA1601618-11', 'auto');\n         ga('send', 'pageview');\n\n        <\/script>")
                        }
                    }
                }, {
                    key: "getDocumentFragment",
                    value: function(e) {
                        var t = document.createDocumentFragment(),
                            n = document.createElement("div"),
                            r = document.createElement("div");
                        if (e) {
                            n.id = "container-" + e.containerid, this.selDOMElement = this.domElements["id" + e.id], n.insertAdjacentHTML("afterbegin", this.selDOMElement.dom), n.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type]);
                            n.insertAdjacentHTML("beforeend", "<script>\n         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n         ga('create', 'UA1601618-11', 'auto');\n         ga('send', 'pageview');\n\n        <\/script>"), t.appendChild(n), r.insertAdjacentHTML("afterbegin", this.selDOMElement.domEmpty), r.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type])
                        }
                        return {
                            documentFragment: t,
                            containerLoader: r
                        }
                    }
                }]), e
            }();
        n.default = a
    }, {}],
    5: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = e("./custom-date"),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            c = function(e) {
                function t(e) {
                    r(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.params = e, n.temperaturePolygon = d3.line().x(function(e) {
                        return e.x
                    }).y(function(e) {
                        return e.y
                    }), n
                }
                return a(t, e), o(t, [{
                    key: "prepareData",
                    value: function() {
                        var e = 0,
                            t = [];
                        return this.params.data.forEach(function(n) {
                            t.push({
                                x: e,
                                date: e,
                                maxT: n.max,
                                minT: n.min
                            }), e += 1
                        }), t
                    }
                }, {
                    key: "makeSVG",
                    value: function() {
                        return d3.select(this.params.id).append("svg").attr("class", "axis").attr("width", this.params.width).attr("height", this.params.height).attr("fill", this.params.colorPolilyne).style("stroke", "#ffffff")
                    }
                }, {
                    key: "getMinMaxDate",
                    value: function(e) {
                        var t = {
                            maxDate: 0,
                            minDate: 1e4
                        };
                        return e.forEach(function(e) {
                            t.maxDate <= e.date && (t.maxDate = e.date), t.minDate >= e.date && (t.minDate = e.date)
                        }), t
                    }
                }, {
                    key: "getMinMaxTemperature",
                    value: function(e) {
                        var t = {
                            min: 100,
                            max: 0
                        };
                        return e.forEach(function(e) {
                            t.min >= e.minT && (t.min = e.minT), t.max <= e.maxT && (t.max = e.maxT)
                        }), t
                    }
                }, {
                    key: "getMinMaxWeather",
                    value: function(e) {
                        var t = {
                            min: 0,
                            max: 0
                        };
                        return e.forEach(function(e) {
                            t.min >= e.humidity && (t.min = e.humidity), t.min >= e.rainfallAmount && (t.min = e.rainfallAmount), t.max <= e.humidity && (t.max = e.humidity), t.max <= e.rainfallAmount && (t.max = e.rainfallAmount)
                        }), t
                    }
                }, {
                    key: "makeAxesXY",
                    value: function(e, t) {
                        var n = t.width - 2 * t.margin,
                            r = t.height - 2 * t.margin;
                        return this.scaleAxesXYTemperature(e, n, r, t)
                    }
                }, {
                    key: "scaleAxesXYTemperature",
                    value: function(e, t, n, r) {
                        var i = this.getMinMaxDate(e),
                            a = i.maxDate,
                            o = i.minDate,
                            s = this.getMinMaxTemperature(e),
                            l = s.min,
                            c = s.max,
                            d = d3.scaleTime().domain([new Date(o), new Date(a)]).range([0, t]),
                            u = d3.scaleLinear().domain([c + 5, l - 5]).range([0, n]),
                            h = [];
                        return e.forEach(function(e) {
                            h.push({
                                x: d(e.date) + r.offsetX,
                                maxT: u(e.maxT) + r.offsetX,
                                minT: u(e.minT) + r.offsetX
                            })
                        }), {
                            scaleX: d,
                            scaleY: u,
                            data: h
                        }
                    }
                }, {
                    key: "scaleAxesXYWeather",
                    value: function(e, t, n, r) {
                        var i = this.getMinMaxDate(e),
                            a = i.maxDate,
                            o = i.minDate,
                            s = this.getMinMaxWeather(e),
                            l = s.min,
                            c = s.max,
                            d = d3.scaleTime().domain([new Date(o), new Date(a)]).range([0, t]),
                            u = d3.scaleLinear().domain([c, l]).range([0, n]),
                            h = [];
                        return e.forEach(function(e) {
                            h.push({
                                x: d(e.date) + r,
                                humidity: u(e.humidity) + r,
                                rainfallAmount: u(e.rainfallAmount) + r,
                                color: e.color
                            })
                        }), {
                            scaleX: d,
                            scaleY: u,
                            data: h
                        }
                    }
                }, {
                    key: "makePolyline",
                    value: function(e, t, n, r) {
                        var i = [];
                        return e.forEach(function(e) {
                            i.push({
                                x: n(e.date) + t.offsetX,
                                y: r(e.maxT) + t.offsetY
                            })
                        }), e.reverse().forEach(function(e) {
                            i.push({
                                x: n(e.date) + t.offsetX,
                                y: r(e.minT) + t.offsetY
                            })
                        }), i.push({
                            x: n(e[e.length - 1].date) + t.offsetX,
                            y: r(e[e.length - 1].maxT) + t.offsetY
                        }), i
                    }
                }, {
                    key: "drawPolyline",
                    value: function(e, t) {
                        e.append("g").append("path").style("stroke-width", this.params.strokeWidth).attr("d", this.temperaturePolygon(t)).style("stroke", this.params.colorPolilyne).style("fill", this.params.colorPolilyne).style("opacity", 1)
                    }
                }, {
                    key: "drawLabelsTemperature",
                    value: function(e, t, n) {
                        t.forEach(function(t, r, i) {
                            e.append("text").attr("x", t.x).attr("y", t.maxT - 2 - n.offsetX / 2).attr("text-anchor", "middle").style("font-size", n.fontSize).style("stroke", n.fontColor).style("fill", n.fontColor).text(n.data[r].max + "°"), e.append("text").attr("x", t.x).attr("y", t.minT + 7 + n.offsetY / 2).attr("text-anchor", "middle").style("font-size", n.fontSize).style("stroke", n.fontColor).style("fill", n.fontColor).text(n.data[r].min + "°")
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.makeSVG(),
                            t = this.prepareData(),
                            n = this.makeAxesXY(t, this.params),
                            r = n.scaleX,
                            i = n.scaleY,
                            a = n.data,
                            o = this.makePolyline(t, this.params, r, i);
                        this.drawPolyline(e, o), this.drawLabelsTemperature(e, a, this.params)
                    }
                }]), t
            }(l.default);
        n.default = c
    }, {
        "./custom-date": 1
    }],
    6: [function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = e("./weather-widget"),
            a = r(i),
            o = e("./generator-widget"),
            s = r(o);
        e("es6-promise").Promise;
        e("String.fromCodePoint");
        var l = new s.default;
        if (!window.myWidgetParam.length) {
            var c = [];
            c.push(window.myWidgetParam), window.myWidgetParam = c
        }
        window.myWidgetParam.forEach(function(e) {
            if (!document.getElementById(e.containerid).textContent.trim()) {
                var t = l.getDocumentFragment(e),
                    n = t.documentFragment,
                    r = t.containerLoader,
                    i = "";
                i = e.cityid ? "?id=" + e.cityid : e.city_name ? "?q=" + e.city_name : "?q=London";
                var o = "#000";
                l.selDOMElement.colorPolilyne && (o = l.selDOMElement.colorPolilyne);
                var s = void 0;
                s = e.units && "imperial" === e.units ? ["imperial", "°F", "m/h"] : ["metric", "°C", "m/s"];
                var c = e.schema ? e.schema : "default",
                    d = "phase.owm.io" === document.location.hostname ? "phase.owm.io" : "openweathermap.org",
                    u = {
                        id: e.id,
                        cityName: "Moscow",
                        lang: "en",
                        appid: e.appid,
                        units: s[0],
                        textUnitTemp: s[1],
                        textUnitWind: s[2],
                        colorPolilyne: o,
                        baseURL: l.baseURL,
                        urlDomain: "default" === c ? "//api." + d : "//" + d
                    },
                    h = {
                        cityName: n.querySelectorAll(".widget-left-menu__header"),
                        temperature: n.querySelectorAll(".weather-left-card__number"),
                        naturalPhenomenon: n.querySelectorAll(".weather-left-card__means"),
                        windSpeed: n.querySelectorAll(".weather-left-card__wind"),
                        mainIconWeather: n.querySelectorAll(".weather-left-card__img"),
                        calendar: n.querySelector(".widget-left__calendar"),
                        calendarItem: n.querySelectorAll(".calendar__item"),
                        cityName2: n.querySelectorAll(".widget-right__title"),
                        temperature2: n.querySelectorAll(".weather-right__temperature"),
                        temperatureFeels: n.querySelectorAll(".weather-right__feels"),
                        temperatureMin: n.querySelectorAll(".weather-right-card__temperature-min"),
                        temperatureMax: n.querySelectorAll(".weather-right-card__temperature-max"),
                        naturalPhenomenon2: n.querySelectorAll(".widget-right__description"),
                        windSpeed2: n.querySelectorAll(".weather-right__wind-speed"),
                        mainIconWeather2: n.querySelectorAll(".weather-right__icon"),
                        humidity: n.querySelectorAll(".weather-right__humidity"),
                        pressure: n.querySelectorAll(".weather-right__pressure"),
                        dateReport: n.querySelectorAll(".widget-right__date"),
                        documentFragmentWidget: n,
                        containerWidget: document.getElementById(e.containerid)
                    },
                    p = n.querySelector("#graphic"),
                    f = n.querySelector("#graphic1"),
                    g = n.querySelector("#graphic2"),
                    m = n.querySelector("#graphic3");
                p && (h.graphic = p), f && (h.graphic = f), g && (h.graphic = g), m && (h.graphic = m);
                var v = {
                    urlWeatherAPI: u.urlDomain + "/data/2.5/weather" + i + "&units=" + u.units + "&appid=" + u.appid + "&callback=?",
                    paramsUrlForeDaily: u.urlDomain + "/data/2.5/forecast/daily" + i + "&units=" + u.units + "&cnt=8&appid=" + u.appid + "&callback=?",
                    windSpeed: u.baseURL + "/data/wind-speed-data.json",
                    windDirection: u.baseURL + "/data/wind-direction-data.json",
                    clouds: u.baseURL + "data/clouds-data.json",
                    naturalPhenomenon: u.baseURL + "/data/natural-phenomenon-data.json"
                };
                h.containerWidget.innerText = "", h.containerWidget.appendChild(r);
                var w = new a.default(u, h, v);
                (h.cityName.length || h.cityName2.length) && w.render()
            }
        })
    }, {
        "./generator-widget": 4,
        "./weather-widget": 7,
        "String.fromCodePoint": 8,
        "es6-promise": 9
    }],
    7: [function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            l = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            c = e("./custom-date"),
            d = r(c),
            u = e("./graphic-d3js"),
            h = r(u),
            p = e("./data/natural-phenomenon-data"),
            f = e("./data/wind-speed-data"),
            g = e("jquery"),
            m = r(g),
            v = (e("es6-promise").Promise, function(e) {
                function t(e, n, r) {
                    i(this, t);
                    var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return o.params = e, o.controls = n, o.urls = r, o.id = e.id, o.existGraphic = o.controls.graphic || o.controls.graphic1 || o.controls.graphic2 || o.controls.graphic3, o.weather = {
                        fromAPI: {
                            coord: {
                                lon: "0",
                                lat: "0"
                            },
                            weather: [{
                                id: " ",
                                main: " ",
                                description: " ",
                                icon: " "
                            }],
                            base: " ",
                            main: {
                                temp: 0,
                                pressure: " ",
                                humidity: " ",
                                temp_min: " ",
                                temp_max: " "
                            },
                            wind: {
                                speed: 0,
                                deg: " "
                            },
                            rain: {},
                            clouds: {
                                all: " "
                            },
                            dt: "",
                            sys: {
                                type: " ",
                                id: " ",
                                message: " ",
                                country: " ",
                                sunrise: " ",
                                sunset: " "
                            },
                            id: " ",
                            name: "Undefined",
                            cod: " "
                        }
                    }, o.naturalPhenomenon = p.naturalPhenomenon, o.windSpeed = f.windSpeed, o.windDirection = f.windDirection, o
                }
                return o(t, e), l(t, [{
                    key: "getWeatherFromApi",
                    value: function() {
                        var e = this,
                            t = void 0,
                            n = void 0;
                        this.getForecastCurrent().done(function(r) {
                            t = r, e.existGraphic ? e.getForecastDaily().catch(function() {
                                return e.prepareToParseMetadata(e.weather, t)
                            }).done(function(r) {
                                n = r, e.prepareToParseMetadata(e.weather, t, n)
                            }) : e.prepareToParseMetadata(e.weather, t)
                        })
                    }
                }, {
                    key: "getForecastCurrent",
                    value: function() {
                        var e = this.urls.urlWeatherAPI,
                            t = {
                                dataType: "jsonp",
                                url: e,
                                context: this,
                                xhrFields: {
                                    withCredentials: !1
                                }
                            };
                        return m.default.ajax(t)
                    }
                }, {
                    key: "getForecastDaily",
                    value: function() {
                        var e = this.urls.paramsUrlForeDaily,
                            t = {
                                dataType: "jsonp",
                                url: e,
                                context: this,
                                xhrFields: {
                                    withCredentials: !1
                                }
                            };
                        return m.default.ajax(t)
                    }
                }, {
                    key: "prepareToParseMetadata",
                    value: function(e, t, n) {
                        e.fromAPI = t, e.naturalPhenomenon = this.naturalPhenomenon[this.params.lang].description, e.windSpeed = this.windSpeed[this.params.lang], e.forecastDaily = n, this.parseDataFromServer(e)
                    }
                }, {
                    key: "getParentSelectorFromObject",
                    value: function(e, t, n, r) {
                        for (var i in e)
                            if ("object" === s(e[i][n]) && null == r) {
                                if (t >= e[i][n][0] && t < e[i][n][1]) return i
                            } else if (null != r && t >= e[i][n] && t < e[i][r]) return i
                    }
                }, {
                    key: "parseDataFromServer",
                    value: function(e) {
                        if ("Undefined" !== e.fromAPI.name && "404" !== e.fromAPI.cod) {
                            var t = {
                                    cloudiness: " ",
                                    dt: " ",
                                    cityName: " ",
                                    icon: " ",
                                    temperature: " ",
                                    temperatureMin: " ",
                                    temperatureMax: " ",
                                    pressure: " ",
                                    humidity: " ",
                                    sunrise: " ",
                                    sunset: " ",
                                    coord: " ",
                                    wind: " ",
                                    weather: " "
                                },
                                n = parseInt(e.fromAPI.main.temp.toFixed(0), 10) + 0;
                            t.cityName = e.fromAPI.name + ", " + e.fromAPI.sys.country, t.temperature = n, t.temperatureMin = parseInt(e.fromAPI.main.temp_min.toFixed(0), 10) + 0, t.temperatureMax = parseInt(e.fromAPI.main.temp_max.toFixed(0), 10) + 0, e.naturalPhenomenon && (t.weather = e.naturalPhenomenon[e.fromAPI.weather[0].id]), e.windSpeed && (t.windSpeed = "Wind: " + e.fromAPI.wind.speed.toFixed(1) + " " + this.params.textUnitWind + " " + this.getParentSelectorFromObject(e.windSpeed, e.fromAPI.wind.speed.toFixed(1), "speed_interval"), t.windSpeed2 = e.fromAPI.wind.speed.toFixed(1) + " " + this.params.textUnitWind), e.windDirection && (t.windDirection = "" + this.getParentSelectorFromObject(e.windDirection, e.fromAPI.wind.deg, "deg_interval")), e.clouds && (t.clouds = "" + this.getParentSelectorFromObject(e.clouds, e.fromAPI.clouds.all, "min", "max")), t.humidity = e.fromAPI.main.humidity + "%", t.pressure = e.fromAPI.main.pressure + " hPa", t.icon = "" + e.fromAPI.weather[0].icon, this.renderWidget(t)
                        }
                    }
                }, {
                    key: "renderWidget",
                    value: function(e) {
                        for (var t in this.controls.cityName) this.controls.cityName.hasOwnProperty(t) && (this.controls.cityName[t].innerHTML = e.cityName);
                        for (var n in this.controls.temperature) this.controls.temperature.hasOwnProperty(n) && (this.controls.temperature[n].innerHTML = e.temperature + "<span class='weather-left-card__degree'>" + this.params.textUnitTemp + "</span>");
                        for (var r in this.controls.mainIconWeather) this.controls.mainIconWeather.hasOwnProperty(r) && (this.controls.mainIconWeather[r].src = this.getURLMainIcon(e.icon, !0), this.controls.mainIconWeather[r].alt = "Weather in " + (e.cityName ? e.cityName : ""));
                        if (e.weather)
                            for (var i in this.controls.naturalPhenomenon) this.controls.naturalPhenomenon.hasOwnProperty(i) && (this.controls.naturalPhenomenon[i].innerText = e.weather);
                        if (e.windSpeed)
                            for (var a in this.controls.windSpeed) this.controls.windSpeed.hasOwnProperty(a) && (this.controls.windSpeed[a].innerText = e.windSpeed);
                        for (var o in this.controls.cityName2) this.controls.cityName2.hasOwnProperty(o) && (this.controls.cityName2[o].innerHTML = e.cityName);
                        for (var s in this.controls.temperature2) this.controls.temperature2.hasOwnProperty(s) && this.controls.temperature2[s] && (this.controls.temperature2[s].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>"), this.controls.temperatureFeels.hasOwnProperty(s) && (this.controls.temperatureFeels[s].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>");
                        for (var l in this.controls.temperatureMin) this.controls.temperatureMin.hasOwnProperty(l) && (this.controls.temperatureMin[l].innerHTML = e.temperatureMin + "<span>" + this.params.textUnitTemp + "</span>");
                        for (var c in this.controls.temperatureMax) this.controls.temperatureMax.hasOwnProperty(c) && (this.controls.temperatureMax[c].innerHTML = e.temperatureMax + "<span>" + this.params.textUnitTemp + "</span>");
                        if (e.weather)
                            for (var d in this.controls.naturalPhenomenon2) this.controls.naturalPhenomenon2.hasOwnProperty(d) && (this.controls.naturalPhenomenon2[d].innerText = e.weather);
                        if (e.windSpeed2)
                            for (var u in this.controls.windSpeed2) this.controls.windSpeed2.hasOwnProperty(u) && (this.controls.windSpeed2[u].innerText = e.windSpeed2 + " " + (e.windDirection || ""));
                        for (var h in this.controls.mainIconWeather2) this.controls.mainIconWeather2.hasOwnProperty(h) && (this.controls.mainIconWeather2[h].src = this.getURLMainIcon(e.icon, !0), this.controls.mainIconWeather2[h].alt = "Weather in " + (e.cityName ? e.cityName : ""));
                        if (e.humidity)
                            for (var p in this.controls.humidity) this.controls.humidity.hasOwnProperty(p) && (this.controls.humidity[p].innerText = e.humidity);
                        if (e.pressure)
                            for (var f in this.controls.pressure) this.controls.pressure.hasOwnProperty(f) && (this.controls.pressure[f].innerText = e.pressure);
                        for (var g in this.controls.dateReport) this.controls.dateReport.hasOwnProperty(g) && (this.controls.dateReport[g].innerText = this.getTimeDateHHMMMonthDay());
                        var m = this.controls.documentFragmentWidget.querySelector("#container-" + this.controls.containerWidget.id);
                        m && (this.controls.containerWidget.innerHTML = "", this.controls.containerWidget.appendChild(m)), this.existGraphic && Object.keys(this.weather.forecastDaily).length > 0 && this.prepareDataForGraphic()
                    }
                }, {
                    key: "prepareDataForGraphic",
                    value: function() {
                        var e = this,
                            t = [];
                        return this.weather.forecastDaily.list.forEach(function(n) {
                            var r = e.getDayNameOfWeekByDayNumber(e.getNumberDayInWeekByUnixTime(n.dt)),
                                i = new Date(1e3 * n.dt),
                                a = new Date;
                            t.push({
                                min: Math.round(n.temp.min),
                                max: Math.round(n.temp.max),
                                day: i.getFullYear() === a.getFullYear() && i.getMonth() === a.getMonth() && i.getDate() === a.getDate() ? "Today" : r,
                                icon: n.weather[0].icon,
                                date: e.timestampToDateTime(n.dt),
                                dt: n.dt
                            })
                        }), this.drawGraphicD3(t.slice(0, 8))
                    }
                }, {
                    key: "renderIconsDaysOfWeek",
                    value: function(e) {
                        var t = this,
                            n = this.controls.calendar.querySelectorAll(".calendar__item");
                        return e.forEach(function(e, r) {
                            var i = new Date(1e3 * e.dt);
                            n[r].innerHTML = e.day + "<br>" + i.getDate() + " " + t.getMonthNameByMonthNumber(i.getMonth()) + '<img src="' + document.location.protocol + "//openweathermap.org/img/w/" + e.icon + '.png" width="32" height="32" alt="' + e.day + '">'
                        }), e
                    }
                }, {
                    key: "getURLMainIcon",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = new Map;
                        return t ? this.params.baseURL + "/img/widgets/" + e + ".png" : (n.set("01d", "01dbw"), n.set("02d", "02dbw"), n.set("03d", "03dbw"), n.set("03d", "03dbw"), n.set("04d", "04dbw"), n.set("05d", "05dbw"), n.set("06d", "06dbw"), n.set("07d", "07dbw"), n.set("08d", "08dbw"), n.set("09d", "09dbw"), n.set("10d", "10dbw"), n.set("11d", "11dbw"), n.set("13d", "13dbw"), n.set("01n", "01dbw"), n.set("02n", "02dbw"), n.set("03n", "03dbw"), n.set("03n", "03dbw"), n.set("04n", "04dbw"), n.set("05n", "05dbw"), n.set("06n", "06dbw"), n.set("07n", "07dbw"), n.set("08n", "08dbw"), n.set("09n", "09dbw"), n.set("10n", "10dbw"), n.set("11n", "11dbw"), n.set("13n", "13dbw"), n.get(e) ? this.params.baseURL + "/img/widgets/" + e + "img/" + n.get(e) + ".png" : "http://openweathermap.org/img/w/" + e + ".png")
                    }
                }, {
                    key: "drawGraphicD3",
                    value: function(e) {
                        this.renderIconsDaysOfWeek(e);
                        var t = {
                            id: "#graphic",
                            data: e,
                            offsetX: 15,
                            offsetY: 10,
                            width: 420,
                            height: 79,
                            rawData: [],
                            margin: 10,
                            colorPolilyne: "#333",
                            fontSize: "12px",
                            fontColor: "#333",
                            strokeWidth: "1px"
                        };
                        if (1 === this.id) {
                            var n = document.getElementById("graphic1");
                            n && (n.querySelector("svg") && n.removeChild(n.querySelector("svg")), t.id = "#graphic1", t.colorPolilyne = "#DDF730")
                        }
                        if (11 === this.id) {
                            var r = document.getElementById("graphic2");
                            r && (r.querySelector("svg") && r.removeChild(r.querySelector("svg")), t.id = "#graphic2", t.colorPolilyne = "#FEB020")
                        }
                        if (21 === this.id) {
                            var i = document.getElementById("graphic");
                            i && i.querySelector("svg") && i.removeChild(i.querySelector("svg"))
                        }
                        if (31 === this.id) {
                            var a = document.getElementById("graphic3");
                            a && (a.querySelector("svg") && a.removeChild(a.querySelector("svg")), t.id = "#graphic3", t.colorPolilyne = "#FEB020")
                        }
                        new h.default(t).render()
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.getWeatherFromApi()
                    }
                }]), t
            }(d.default));
        n.default = v
    }, {
        "./custom-date": 1,
        "./data/natural-phenomenon-data": 2,
        "./data/wind-speed-data": 3,
        "./graphic-d3js": 5,
        "es6-promise": 9,
        jquery: 10
    }],
    8: [function(e, t, n) {
        String.fromCodePoint || function() {
            var e = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            n = t(e, e, e) && t
                    } catch (e) {}
                    return n
                }(),
                t = String.fromCharCode,
                n = Math.floor,
                r = function(e) {
                    var r, i, a = [],
                        o = -1,
                        s = arguments.length;
                    if (!s) return "";
                    for (var l = ""; ++o < s;) {
                        var c = Number(arguments[o]);
                        if (!isFinite(c) || c < 0 || c > 1114111 || n(c) != c) throw RangeError("Invalid code point: " + c);
                        c <= 65535 ? a.push(c) : (c -= 65536, r = 55296 + (c >> 10), i = c % 1024 + 56320, a.push(r, i)), (o + 1 == s || a.length > 16384) && (l += t.apply(null, a), a.length = 0)
                    }
                    return l
                };
            e ? e(String, "fromCodePoint", {
                value: r,
                configurable: !0,
                writable: !0
            }) : String.fromCodePoint = r
        }()
    }, {}],
    9: [function(e, t, n) {
        (function(r, i) {
            ! function(e, r) {
                "object" == typeof n && void 0 !== t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.ES6Promise = r()
            }(this, function() {
                "use strict";

                function t(e) {
                    var t = typeof e;
                    return null !== e && ("object" === t || "function" === t)
                }

                function n(e) {
                    return "function" == typeof e
                }

                function a(e) {
                    R = e
                }

                function o(e) {
                    I = e
                }

                function s() {
                    return void 0 !== F ? function() {
                        F(c)
                    } : l()
                }

                function l() {
                    var e = setTimeout;
                    return function() {
                        return e(c, 1)
                    }
                }

                function c() {
                    for (var e = 0; e < B; e += 2) {
                        (0, X[e])(X[e + 1]), X[e] = void 0, X[e + 1] = void 0
                    }
                    B = 0
                }

                function d(e, t) {
                    var n = this,
                        r = new this.constructor(h);
                    void 0 === r[J] && E(r);
                    var i = n._state;
                    if (i) {
                        var a = arguments[i - 1];
                        I(function() {
                            return z(i, r, a, n._result)
                        })
                    } else T(n, r, e, t);
                    return r
                }

                function u(e) {
                    var t = this;
                    if (e && "object" == typeof e && e.constructor === t) return e;
                    var n = new t(h);
                    return _(n, e), n
                }

                function h() {}

                function p() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function f() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function g(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return te.error = e, te
                    }
                }

                function m(e, t, n, r) {
                    try {
                        e.call(t, n, r)
                    } catch (e) {
                        return e
                    }
                }

                function v(e, t, n) {
                    I(function(e) {
                        var r = !1,
                            i = m(n, t, function(n) {
                                r || (r = !0, t !== n ? _(e, n) : k(e, n))
                            }, function(t) {
                                r || (r = !0, x(e, t))
                            }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, x(e, i))
                    }, e)
                }

                function w(e, t) {
                    t._state === Z ? k(e, t._result) : t._state === ee ? x(e, t._result) : T(t, void 0, function(t) {
                        return _(e, t)
                    }, function(t) {
                        return x(e, t)
                    })
                }

                function y(e, t, r) {
                    t.constructor === e.constructor && r === d && t.constructor.resolve === u ? w(e, t) : r === te ? (x(e, te.error), te.error = null) : void 0 === r ? k(e, t) : n(r) ? v(e, t, r) : k(e, t)
                }

                function _(e, n) {
                    e === n ? x(e, p()) : t(n) ? y(e, n, g(n)) : k(e, n)
                }

                function b(e) {
                    e._onerror && e._onerror(e._result), S(e)
                }

                function k(e, t) {
                    e._state === Q && (e._result = t, e._state = Z, 0 !== e._subscribers.length && I(S, e))
                }

                function x(e, t) {
                    e._state === Q && (e._state = ee, e._result = t, I(b, e))
                }

                function T(e, t, n, r) {
                    var i = e._subscribers,
                        a = i.length;
                    e._onerror = null, i[a] = t, i[a + Z] = n, i[a + ee] = r, 0 === a && e._state && I(S, e)
                }

                function S(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, i = void 0, a = e._result, o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? z(n, r, i, a) : i(a);
                        e._subscribers.length = 0
                    }
                }

                function j(e, t) {
                    try {
                        return e(t)
                    } catch (e) {
                        return te.error = e, te
                    }
                }

                function z(e, t, r, i) {
                    var a = n(r),
                        o = void 0,
                        s = void 0,
                        l = void 0,
                        c = void 0;
                    if (a) {
                        if (o = j(r, i), o === te ? (c = !0, s = o.error, o.error = null) : l = !0, t === o) return void x(t, f())
                    } else o = i, l = !0;
                    t._state !== Q || (a && l ? _(t, o) : c ? x(t, s) : e === Z ? k(t, o) : e === ee && x(t, o))
                }

                function D(e, t) {
                    try {
                        t(function(t) {
                            _(e, t)
                        }, function(t) {
                            x(e, t)
                        })
                    } catch (t) {
                        x(e, t)
                    }
                }

                function C() {
                    return ne++
                }

                function E(e) {
                    e[J] = ne++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function A() {
                    return new Error("Array Methods must be provided an Array")
                }

                function M(e) {
                    return new re(this, e).promise
                }

                function P(e) {
                    var t = this;
                    return new t(W(e) ? function(n, r) {
                        for (var i = e.length, a = 0; a < i; a++) t.resolve(e[a]).then(n, r)
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }

                function N(e) {
                    var t = this,
                        n = new t(h);
                    return x(n, e), n
                }

                function O() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function L() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function q() {
                    var e = void 0;
                    if (void 0 !== i) e = i;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === n && !t.cast) return
                    }
                    e.Promise = ie
                }
                var H = void 0;
                H = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
                var W = H,
                    B = 0,
                    F = void 0,
                    R = void 0,
                    I = function(e, t) {
                        X[B] = e, X[B + 1] = t, 2 === (B += 2) && (R ? R(c) : K())
                    },
                    G = "undefined" != typeof window ? window : void 0,
                    U = G || {},
                    Y = U.MutationObserver || U.WebKitMutationObserver,
                    V = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                    $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    X = new Array(1e3),
                    K = void 0;
                K = V ? function() {
                    return function() {
                        return r.nextTick(c)
                    }
                }() : Y ? function() {
                    var e = 0,
                        t = new Y(c),
                        n = document.createTextNode("");
                    return t.observe(n, {
                            characterData: !0
                        }),
                        function() {
                            n.data = e = ++e % 2
                        }
                }() : $ ? function() {
                    var e = new MessageChannel;
                    return e.port1.onmessage = c,
                        function() {
                            return e.port2.postMessage(0)
                        }
                }() : void 0 === G && "function" == typeof e ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return F = e.runOnLoop || e.runOnContext, s()
                    } catch (e) {
                        return l()
                    }
                }() : l();
                var J = Math.random().toString(36).substring(2),
                    Q = void 0,
                    Z = 1,
                    ee = 2,
                    te = {
                        error: null
                    },
                    ne = 0,
                    re = function() {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(h), this.promise[J] || E(this.promise), W(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && k(this.promise, this._result))) : x(this.promise, A())
                        }
                        return e.prototype._enumerate = function(e) {
                            for (var t = 0; this._state === Q && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function(e, t) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === u) {
                                var i = g(e);
                                if (i === d && e._state !== Q) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                                else if (n === ie) {
                                    var a = new n(h);
                                    y(a, e, i), this._willSettleAt(a, t)
                                } else this._willSettleAt(new n(function(t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(r(e), t)
                        }, e.prototype._settledAt = function(e, t, n) {
                            var r = this.promise;
                            r._state === Q && (this._remaining--, e === ee ? x(r, n) : this._result[t] = n), 0 === this._remaining && k(r, this._result)
                        }, e.prototype._willSettleAt = function(e, t) {
                            var n = this;
                            T(e, void 0, function(e) {
                                return n._settledAt(Z, t, e)
                            }, function(e) {
                                return n._settledAt(ee, t, e)
                            })
                        }, e
                    }(),
                    ie = function() {
                        function e(t) {
                            this[J] = C(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && O(), this instanceof e ? D(this, t) : L())
                        }
                        return e.prototype.catch = function(e) {
                            return this.then(null, e)
                        }, e.prototype.finally = function(e) {
                            var t = this,
                                n = t.constructor;
                            return t.then(function(t) {
                                return n.resolve(e()).then(function() {
                                    return t
                                })
                            }, function(t) {
                                return n.resolve(e()).then(function() {
                                    throw t
                                })
                            })
                        }, e
                    }();
                return ie.prototype.then = d, ie.all = M, ie.race = P, ie.resolve = u, ie.reject = N, ie._setScheduler = a, ie._setAsap = o, ie._asap = I, ie.polyfill = q, ie.Promise = ie, ie
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 11
    }],
    10: [function(e, t, n) {
        ! function(e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";

            function n(e, t, n) {
                t = t || oe;
                var r, i = t.createElement("script");
                if (i.text = e, n)
                    for (r in _e) n[r] && (i[r] = n[r]);
                t.head.appendChild(i).parentNode.removeChild(i)
            }

            function r(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[pe.call(e)] || "object" : typeof e
            }

            function i(e) {
                var t = !!e && "length" in e && e.length,
                    n = r(e);
                return !we(e) && !ye(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function a(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }

            function o(e, t, n) {
                return we(t) ? be.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? be.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? be.grep(e, function(e) {
                    return ue.call(t, e) > -1 !== n
                }) : be.filter(t, e, n)
            }

            function s(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function l(e) {
                var t = {};
                return be.each(e.match(Me) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function c(e) {
                return e
            }

            function d(e) {
                throw e
            }

            function u(e, t, n, r) {
                var i;
                try {
                    e && we(i = e.promise) ? i.call(e).done(t).fail(n) : e && we(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }

            function h() {
                oe.removeEventListener("DOMContentLoaded", h), e.removeEventListener("load", h), be.ready()
            }

            function p(e, t) {
                return t.toUpperCase()
            }

            function f(e) {
                return e.replace(Le, "ms-").replace(qe, p)
            }

            function g() {
                this.expando = be.expando + g.uid++
            }

            function m(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
            }

            function v(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                        try {
                            n = m(n)
                        } catch (e) {}
                        Be.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function w(e, t, n, r) {
                var i, a, o = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return be.css(e, t, "")
                    },
                    l = s(),
                    c = n && n[3] || (be.cssNumber[t] ? "" : "px"),
                    d = (be.cssNumber[t] || "px" !== c && +l) && Ge.exec(be.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2, c = c || d[3], d = +l || 1; o--;) be.style(e, t, d + c), (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (o = 0), d /= a;
                    d *= 2, be.style(e, t, d + c), n = n || []
                }
                return n && (d = +d || +l || 0, i = n[1] ? d + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = d, r.end = i)), i
            }

            function y(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = $e[r];
                return i || (t = n.body.appendChild(n.createElement(r)), i = be.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), $e[r] = i, i)
            }

            function _(e, t) {
                for (var n, r, i = [], a = 0, o = e.length; a < o; a++) r = e[a], r.style && (n = r.style.display, t ? ("none" === n && (i[a] = We.get(r, "display") || null, i[a] || (r.style.display = "")), "" === r.style.display && Ye(r) && (i[a] = y(r))) : "none" !== n && (i[a] = "none", We.set(r, "display", n)));
                for (a = 0; a < o; a++) null != i[a] && (e[a].style.display = i[a]);
                return e
            }

            function b(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && a(e, t) ? be.merge([e], n) : n
            }

            function k(e, t) {
                for (var n = 0, r = e.length; n < r; n++) We.set(e[n], "globalEval", !t || We.get(t[n], "globalEval"))
            }

            function x(e, t, n, i, a) {
                for (var o, s, l, c, d, u, h = t.createDocumentFragment(), p = [], f = 0, g = e.length; f < g; f++)
                    if ((o = e[f]) || 0 === o)
                        if ("object" === r(o)) be.merge(p, o.nodeType ? [o] : o);
                        else if (Ze.test(o)) {
                    for (s = s || h.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, s.innerHTML = c[1] + be.htmlPrefilter(o) + c[2], u = c[0]; u--;) s = s.lastChild;
                    be.merge(p, s.childNodes), s = h.firstChild, s.textContent = ""
                } else p.push(t.createTextNode(o));
                for (h.textContent = "", f = 0; o = p[f++];)
                    if (i && be.inArray(o, i) > -1) a && a.push(o);
                    else if (d = be.contains(o.ownerDocument, o), s = b(h.appendChild(o), "script"), d && k(s), n)
                    for (u = 0; o = s[u++];) Je.test(o.type || "") && n.push(o);
                return h
            }

            function T() {
                return !0
            }

            function S() {
                return !1
            }

            function j() {
                try {
                    return oe.activeElement
                } catch (e) {}
            }

            function z(e, t, n, r, i, a) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t) z(e, s, n, r, t[s], a);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = S;
                else if (!i) return e;
                return 1 === a && (o = i, i = function(e) {
                    return be().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = be.guid++)), e.each(function() {
                    be.event.add(this, t, i, r, n)
                })
            }

            function D(e, t) {
                return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? be(e).children("tbody")[0] || e : e
            }

            function C(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function E(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function A(e, t) {
                var n, r, i, a, o, s, l, c;
                if (1 === t.nodeType) {
                    if (We.hasData(e) && (a = We.access(e), o = We.set(t, a), c = a.events)) {
                        delete o.handle, o.events = {};
                        for (i in c)
                            for (n = 0, r = c[i].length; n < r; n++) be.event.add(t, i, c[i][n])
                    }
                    Be.hasData(e) && (s = Be.access(e), l = be.extend({}, s), Be.set(t, l))
                }
            }

            function M(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function P(e, t, r, i) {
                t = ce.apply([], t);
                var a, o, s, l, c, d, u = 0,
                    h = e.length,
                    p = h - 1,
                    f = t[0],
                    g = we(f);
                if (g || h > 1 && "string" == typeof f && !ve.checkClone && ot.test(f)) return e.each(function(n) {
                    var a = e.eq(n);
                    g && (t[0] = f.call(this, n, a.html())), P(a, t, r, i)
                });
                if (h && (a = x(t, e[0].ownerDocument, !1, e, i), o = a.firstChild, 1 === a.childNodes.length && (a = o), o || i)) {
                    for (s = be.map(b(a, "script"), C), l = s.length; u < h; u++) c = a, u !== p && (c = be.clone(c, !0, !0), l && be.merge(s, b(c, "script"))), r.call(e[u], c, u);
                    if (l)
                        for (d = s[s.length - 1].ownerDocument, be.map(s, E), u = 0; u < l; u++) c = s[u], Je.test(c.type || "") && !We.access(c, "globalEval") && be.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? be._evalUrl && be._evalUrl(c.src) : n(c.textContent.replace(st, ""), d, c))
                }
                return e
            }

            function N(e, t, n) {
                for (var r, i = t ? be.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || be.cleanData(b(r)), r.parentNode && (n && be.contains(r.ownerDocument, r) && k(b(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function O(e, t, n) {
                var r, i, a, o, s = e.style;
                return n = n || ct(e), n && (o = n.getPropertyValue(t) || n[t], "" !== o || be.contains(e.ownerDocument, e) || (o = be.style(e, t)), !ve.pixelBoxStyles() && lt.test(o) && dt.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 !== o ? o + "" : o
            }

            function L(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function q(e) {
                if (e in mt) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;)
                    if ((e = gt[n] + t) in mt) return e
            }

            function H(e) {
                var t = be.cssProps[e];
                return t || (t = be.cssProps[e] = q(e) || e), t
            }

            function W(e, t, n) {
                var r = Ge.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function B(e, t, n, r, i, a) {
                var o = "width" === t ? 1 : 0,
                    s = 0,
                    l = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; o < 4; o += 2) "margin" === n && (l += be.css(e, n + Ue[o], !0, i)), r ? ("content" === n && (l -= be.css(e, "padding" + Ue[o], !0, i)), "margin" !== n && (l -= be.css(e, "border" + Ue[o] + "Width", !0, i))) : (l += be.css(e, "padding" + Ue[o], !0, i), "padding" !== n ? l += be.css(e, "border" + Ue[o] + "Width", !0, i) : s += be.css(e, "border" + Ue[o] + "Width", !0, i));
                return !r && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5))), l
            }

            function F(e, t, n) {
                var r = ct(e),
                    i = O(e, t, r),
                    a = "border-box" === be.css(e, "boxSizing", !1, r),
                    o = a;
                if (lt.test(i)) {
                    if (!n) return i;
                    i = "auto"
                }
                return o = o && (ve.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === be.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (i = parseFloat(i) || 0) + B(e, t, n || (a ? "border" : "content"), o, r, i) + "px"
            }

            function R(e, t, n, r, i) {
                return new R.prototype.init(e, t, n, r, i)
            }

            function I() {
                wt && (!1 === oe.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(I) : e.setTimeout(I, be.fx.interval), be.fx.tick())
            }

            function G() {
                return e.setTimeout(function() {
                    vt = void 0
                }), vt = Date.now()
            }

            function U(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ue[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function Y(e, t, n) {
                for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), a = 0, o = i.length; a < o; a++)
                    if (r = i[a].call(n, t, e)) return r
            }

            function V(e, t, n) {
                var r, i, a, o, s, l, c, d, u = "width" in t || "height" in t,
                    h = this,
                    p = {},
                    f = e.style,
                    g = e.nodeType && Ye(e),
                    m = We.get(e, "fxshow");
                n.queue || (o = be._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || s()
                }), o.unqueued++, h.always(function() {
                    h.always(function() {
                        o.unqueued--, be.queue(e, "fx").length || o.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], yt.test(i)) {
                        if (delete t[r], a = a || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        p[r] = m && m[r] || be.style(e, r)
                    }
                if ((l = !be.isEmptyObject(t)) || !be.isEmptyObject(p)) {
                    u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = m && m.display, null == c && (c = We.get(e, "display")), d = be.css(e, "display"), "none" === d && (c ? d = c : (_([e], !0), c = e.style.display || c, d = be.css(e, "display"), _([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === be.css(e, "float") && (l || (h.done(function() {
                        f.display = c
                    }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1;
                    for (r in p) l || (m ? "hidden" in m && (g = m.hidden) : m = We.access(e, "fxshow", {
                        display: c
                    }), a && (m.hidden = !g), g && _([e], !0), h.done(function() {
                        g || _([e]), We.remove(e, "fxshow");
                        for (r in p) be.style(e, r, p[r])
                    })), l = Y(g ? m[r] : 0, r, h), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
                }
            }

            function $(e, t) {
                var n, r, i, a, o;
                for (n in e)
                    if (r = f(n), i = t[r], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), (o = be.cssHooks[r]) && "expand" in o) {
                        a = o.expand(a), delete e[r];
                        for (n in a) n in e || (e[n] = a[n], t[n] = i)
                    } else t[r] = i
            }

            function X(e, t, n) {
                var r, i, a = 0,
                    o = X.prefilters.length,
                    s = be.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (i) return !1;
                        for (var t = vt || G(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, a = 1 - r, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(a);
                        return s.notifyWith(e, [c, a, n]), a < 1 && l ? n : (l || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: be.extend({}, t),
                        opts: be.extend(!0, {
                            specialEasing: {},
                            easing: be.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: vt || G(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = be.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    d = c.props;
                for ($(d, c.opts.specialEasing); a < o; a++)
                    if (r = X.prefilters[a].call(c, e, d, c.opts)) return we(r.stop) && (be._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                return be.map(d, Y, c), we(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), be.fx.timer(be.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }

            function K(e) {
                return (e.match(Me) || []).join(" ")
            }

            function J(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function Q(e) {
                return Array.isArray(e) ? e : "string" == typeof e ? e.match(Me) || [] : []
            }

            function Z(e, t, n, i) {
                var a;
                if (Array.isArray(t)) be.each(t, function(t, r) {
                    n || At.test(e) ? i(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                });
                else if (n || "object" !== r(t)) i(e, t);
                else
                    for (a in t) Z(e + "[" + a + "]", t[a], n, i)
            }

            function ee(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        a = t.toLowerCase().match(Me) || [];
                    if (we(n))
                        for (; r = a[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function te(e, t, n, r) {
                function i(s) {
                    var l;
                    return a[s] = !0, be.each(e[s] || [], function(e, s) {
                        var c = s(t, n, r);
                        return "string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                    }), l
                }
                var a = {},
                    o = e === It;
                return i(t.dataTypes[0]) || !a["*"] && i("*")
            }

            function ne(e, t) {
                var n, r, i = be.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && be.extend(!0, e, r), e
            }

            function re(e, t, n) {
                for (var r, i, a, o, s = e.contents, l = e.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            l.unshift(i);
                            break
                        }
                if (l[0] in n) a = l[0];
                else {
                    for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                            a = i;
                            break
                        }
                        o || (o = i)
                    }
                    a = a || o
                }
                if (a) return a !== l[0] && l.unshift(a), n[a]
            }

            function ie(e, t, n, r) {
                var i, a, o, s, l, c = {},
                    d = e.dataTypes.slice();
                if (d[1])
                    for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                for (a = d.shift(); a;)
                    if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift())
                        if ("*" === a) a = l;
                        else if ("*" !== l && l !== a) {
                    if (!(o = c[l + " " + a] || c["* " + a]))
                        for (i in c)
                            if (s = i.split(" "), s[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                                !0 === o ? o = c[i] : !0 !== c[i] && (a = s[0], d.unshift(s[1]));
                                break
                            }
                    if (!0 !== o)
                        if (o && e.throws) t = o(t);
                        else try {
                            t = o(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: o ? e : "No conversion from " + l + " to " + a
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            var ae = [],
                oe = e.document,
                se = Object.getPrototypeOf,
                le = ae.slice,
                ce = ae.concat,
                de = ae.push,
                ue = ae.indexOf,
                he = {},
                pe = he.toString,
                fe = he.hasOwnProperty,
                ge = fe.toString,
                me = ge.call(Object),
                ve = {},
                we = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                ye = function(e) {
                    return null != e && e === e.window
                },
                _e = {
                    type: !0,
                    src: !0,
                    noModule: !0
                },
                be = function(e, t) {
                    return new be.fn.init(e, t)
                },
                ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            be.fn = be.prototype = {
                jquery: "3.3.1",
                constructor: be,
                length: 0,
                toArray: function() {
                    return le.call(this)
                },
                get: function(e) {
                    return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = be.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return be.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(be.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(le.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: de,
                sort: ae.sort,
                splice: ae.splice
            }, be.extend = be.fn.extend = function() {
                var e, t, n, r, i, a, o = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || we(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = o[t], r = e[t], o !== r && (c && r && (be.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, a = n && Array.isArray(n) ? n : []) : a = n && be.isPlainObject(n) ? n : {}, o[t] = be.extend(c, a, r)) : void 0 !== r && (o[t] = r));
                return o
            }, be.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== pe.call(e)) && (!(t = se(e)) || "function" == typeof(n = fe.call(t, "constructor") && t.constructor) && ge.call(n) === me)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e) {
                    n(e)
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (i(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(ke, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (i(Object(e)) ? be.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : ue.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r = [], i = 0, a = e.length, o = !n; i < a; i++) !t(e[i], i) !== o && r.push(e[i]);
                    return r
                },
                map: function(e, t, n) {
                    var r, a, o = 0,
                        s = [];
                    if (i(e))
                        for (r = e.length; o < r; o++) null != (a = t(e[o], o, n)) && s.push(a);
                    else
                        for (o in e) null != (a = t(e[o], o, n)) && s.push(a);
                    return ce.apply([], s)
                },
                guid: 1,
                support: ve
            }), "function" == typeof Symbol && (be.fn[Symbol.iterator] = ae[Symbol.iterator]), be.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                he["[object " + t + "]"] = t.toLowerCase()
            });
            var xe = function(e) {
                function t(e, t, n, r) {
                    var i, a, o, s, l, d, h, p = t && t.ownerDocument,
                        f = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                    if (!r && ((t ? t.ownerDocument || t : W) !== A && E(t), t = t || A, P)) {
                        if (11 !== f && (l = ge.exec(e)))
                            if (i = l[1]) {
                                if (9 === f) {
                                    if (!(o = t.getElementById(i))) return n;
                                    if (o.id === i) return n.push(o), n
                                } else if (p && (o = p.getElementById(i)) && q(t, o) && o.id === i) return n.push(o), n
                            } else {
                                if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                            }
                        if (_.qsa && !G[e + " "] && (!N || !N.test(e))) {
                            if (1 !== f) p = t, h = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(ye, _e) : t.setAttribute("id", s = H), d = T(e), a = d.length; a--;) d[a] = "#" + s + " " + u(d[a]);
                                h = d.join(","), p = me.test(e) && c(t.parentNode) || t
                            }
                            if (h) try {
                                return K.apply(n, p.querySelectorAll(h)), n
                            } catch (e) {} finally {
                                s === H && t.removeAttribute("id")
                            }
                        }
                    }
                    return j(e.replace(ae, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[H] = !0, e
                }

                function i(e) {
                    var t = A.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
                }

                function o(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function l(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }

                function d() {}

                function u(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        a = i || r,
                        o = n && "parentNode" === a,
                        s = F++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, i);
                        return !1
                    } : function(t, n, l) {
                        var c, d, u, h = [B, s];
                        if (l) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, l)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    if (u = t[H] || (t[H] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = d[a]) && c[0] === B && c[1] === s) return h[2] = c[2];
                                        if (d[a] = h, h[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function p(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function f(e, n, r) {
                    for (var i = 0, a = n.length; i < a; i++) t(e, n[i], r);
                    return r
                }

                function g(e, t, n, r, i) {
                    for (var a, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(a = e[s]) && (n && !n(a, r, i) || (o.push(a), c && t.push(s)));
                    return o
                }

                function m(e, t, n, i, a, o) {
                    return i && !i[H] && (i = m(i)), a && !a[H] && (a = m(a, o)), r(function(r, o, s, l) {
                        var c, d, u, h = [],
                            p = [],
                            m = o.length,
                            v = r || f(t || "*", s.nodeType ? [s] : s, []),
                            w = !e || !r && t ? v : g(v, h, e, s, l),
                            y = n ? a || (r ? e : m || i) ? [] : o : w;
                        if (n && n(w, y, s, l), i)
                            for (c = g(y, p), i(c, [], s, l), d = c.length; d--;)(u = c[d]) && (y[p[d]] = !(w[p[d]] = u));
                        if (r) {
                            if (a || e) {
                                if (a) {
                                    for (c = [], d = y.length; d--;)(u = y[d]) && c.push(w[d] = u);
                                    a(null, y = [], c, l)
                                }
                                for (d = y.length; d--;)(u = y[d]) && (c = a ? Q(r, u) : h[d]) > -1 && (r[c] = !(o[c] = u))
                            }
                        } else y = g(y === o ? y.splice(m, y.length) : y), a ? a(null, o, y, l) : K.apply(o, y)
                    })
                }

                function v(e) {
                    for (var t, n, r, i = e.length, a = b.relative[e[0].type], o = a || b.relative[" "], s = a ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, o, !0), c = h(function(e) {
                            return Q(t, e) > -1
                        }, o, !0), d = [function(e, n, r) {
                            var i = !a && (r || n !== z) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                            return t = null, i
                        }]; s < i; s++)
                        if (n = b.relative[e[s].type]) d = [h(p(d), n)];
                        else {
                            if (n = b.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (r = ++s; r < i && !b.relative[e[r].type]; r++);
                                return m(s > 1 && p(d), s > 1 && u(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ae, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && u(e))
                            }
                            d.push(n)
                        }
                    return p(d)
                }

                function w(e, n) {
                    var i = n.length > 0,
                        a = e.length > 0,
                        o = function(r, o, s, l, c) {
                            var d, u, h, p = 0,
                                f = "0",
                                m = r && [],
                                v = [],
                                w = z,
                                y = r || a && b.find.TAG("*", c),
                                _ = B += null == w ? 1 : Math.random() || .1,
                                k = y.length;
                            for (c && (z = o === A || o || c); f !== k && null != (d = y[f]); f++) {
                                if (a && d) {
                                    for (u = 0, o || d.ownerDocument === A || (E(d), s = !P); h = e[u++];)
                                        if (h(d, o || A, s)) {
                                            l.push(d);
                                            break
                                        }
                                    c && (B = _)
                                }
                                i && ((d = !h && d) && p--, r && m.push(d))
                            }
                            if (p += f, i && f !== p) {
                                for (u = 0; h = n[u++];) h(m, v, o, s);
                                if (r) {
                                    if (p > 0)
                                        for (; f--;) m[f] || v[f] || (v[f] = $.call(l));
                                    v = g(v)
                                }
                                K.apply(l, v), c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return c && (B = _, z = w), m
                        };
                    return i ? r(o) : o
                }
                var y, _, b, k, x, T, S, j, z, D, C, E, A, M, P, N, O, L, q, H = "sizzle" + 1 * new Date,
                    W = e.document,
                    B = 0,
                    F = 0,
                    R = n(),
                    I = n(),
                    G = n(),
                    U = function(e, t) {
                        return e === t && (C = !0), 0
                    },
                    Y = {}.hasOwnProperty,
                    V = [],
                    $ = V.pop,
                    X = V.push,
                    K = V.push,
                    J = V.slice,
                    Q = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ee = "[\\x20\\t\\r\\n\\f]",
                    te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
                    re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
                    ie = new RegExp(ee + "+", "g"),
                    ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
                    oe = new RegExp("^" + ee + "*," + ee + "*"),
                    se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
                    le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
                    ce = new RegExp(re),
                    de = new RegExp("^" + te + "$"),
                    ue = {
                        ID: new RegExp("^#(" + te + ")"),
                        CLASS: new RegExp("^\\.(" + te + ")"),
                        TAG: new RegExp("^(" + te + "|[*])"),
                        ATTR: new RegExp("^" + ne),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Z + ")$", "i"),
                        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    pe = /^h\d$/i,
                    fe = /^[^{]+\{\s*\[native \w/,
                    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    me = /[+~]/,
                    ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
                    we = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    _e = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    be = function() {
                        E()
                    },
                    ke = h(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    K.apply(V = J.call(W.childNodes), W.childNodes), V[W.childNodes.length].nodeType
                } catch (e) {
                    K = {
                        apply: V.length ? function(e, t) {
                            X.apply(e, J.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                _ = t.support = {}, x = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, E = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : W;
                    return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, M = A.documentElement, P = !x(A), W !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), _.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), _.getElementsByTagName = i(function(e) {
                        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
                    }), _.getElementsByClassName = fe.test(A.getElementsByClassName), _.getById = i(function(e) {
                        return M.appendChild(e).id = H, !A.getElementsByName || !A.getElementsByName(H).length
                    }), _.getById ? (b.filter.ID = function(e) {
                        var t = e.replace(ve, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, b.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && P) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (b.filter.ID = function(e) {
                        var t = e.replace(ve, we);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, b.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && P) {
                            var n, r, i, a = t.getElementById(e);
                            if (a) {
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                for (i = t.getElementsByName(e), r = 0; a = i[r++];)
                                    if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                            }
                            return []
                        }
                    }), b.find.TAG = _.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return a
                    }, b.find.CLASS = _.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e)
                    }, O = [], N = [], (_.qsa = fe.test(A.querySelectorAll)) && (i(function(e) {
                        M.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + H + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || N.push(".#.+[+~]")
                    }), i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = A.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), M.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (_.matchesSelector = fe.test(L = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(e) {
                        _.disconnectedMatch = L.call(e, "*"), L.call(e, "[s!='']:x"), O.push("!=", re)
                    }), N = N.length && new RegExp(N.join("|")), O = O.length && new RegExp(O.join("|")), t = fe.test(M.compareDocumentPosition), q = t || fe.test(M.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function(e, t) {
                        if (e === t) return C = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === W && q(W, e) ? -1 : t === A || t.ownerDocument === W && q(W, t) ? 1 : D ? Q(D, e) - Q(D, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return C = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            a = t.parentNode,
                            s = [e],
                            l = [t];
                        if (!i || !a) return e === A ? -1 : t === A ? 1 : i ? -1 : a ? 1 : D ? Q(D, e) - Q(D, t) : 0;
                        if (i === a) return o(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; s[r] === l[r];) r++;
                        return r ? o(s[r], l[r]) : s[r] === W ? -1 : l[r] === W ? 1 : 0
                    }, A) : A
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== A && E(e), n = n.replace(le, "='$1']"), _.matchesSelector && P && !G[n + " "] && (!O || !O.test(n)) && (!N || !N.test(n))) try {
                        var r = L.call(e, n);
                        if (r || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, A, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== A && E(e), q(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== A && E(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        r = n && Y.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                    return void 0 !== r ? r : _.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.escape = function(e) {
                    return (e + "").replace(ye, _e)
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (C = !_.detectDuplicates, D = !_.sortStable && e.slice(0), e.sort(U), C) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return D = null, e
                }, k = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += k(t);
                    return n
                }, b = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: ue,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(ve, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(ve, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = R[e + " "];
                            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(i) {
                                var a = t.attr(i, e);
                                return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var a = "nth" !== e.slice(0, 3),
                                o = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, d, u, h, p, f, g = a !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    w = !l && !s,
                                    y = !1;
                                if (m) {
                                    if (a) {
                                        for (; g;) {
                                            for (h = t; h = h[g];)
                                                if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                            f = g = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [o ? m.firstChild : m.lastChild], o && w) {
                                        for (h = m, u = h[H] || (h[H] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[e] || [], p = c[0] === B && c[1], y = p && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (y = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++y && h === t) {
                                                d[e] = [B, p, y];
                                                break
                                            }
                                    } else if (w && (h = t, u = h[H] || (h[H] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), c = d[e] || [], p = c[0] === B && c[1], y = p), !1 === y)
                                        for (;
                                            (h = ++p && h && h[g] || (y = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (w && (u = h[H] || (h[H] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), d[e] = [B, y]), h !== t)););
                                    return (y -= i) === r || y % r == 0 && y / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var i, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return a[H] ? a(n) : a.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = a(e, n), o = i.length; o--;) r = Q(e, i[o]), e[r] = !(t[r] = i[o])
                            }) : function(e) {
                                return a(e, 0, i)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = S(e.replace(ae, "$1"));
                            return i[H] ? r(function(e, t, n, r) {
                                for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                            }) : function(e, r, a) {
                                return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(ve, we),
                                function(t) {
                                    return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === M
                        },
                        focus: function(e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: s(!1),
                        disabled: s(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e)
                        },
                        header: function(e) {
                            return pe.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, b.pseudos.nth = b.pseudos.eq;
                for (y in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) b.pseudos[y] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(y);
                for (y in {
                        submit: !0,
                        reset: !0
                    }) b.pseudos[y] = function(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(y);
                return d.prototype = b.filters = b.pseudos, b.setFilters = new d, T = t.tokenize = function(e, n) {
                    var r, i, a, o, s, l, c, d = I[e + " "];
                    if (d) return n ? 0 : d.slice(0);
                    for (s = e, l = [], c = b.preFilter; s;) {
                        r && !(i = oe.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), a.push({
                            value: r,
                            type: i[0].replace(ae, " ")
                        }), s = s.slice(r.length));
                        for (o in b.filter) !(i = ue[o].exec(s)) || c[o] && !(i = c[o](i)) || (r = i.shift(), a.push({
                            value: r,
                            type: o,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : I(e, l).slice(0)
                }, S = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        a = G[e + " "];
                    if (!a) {
                        for (t || (t = T(e)), n = t.length; n--;) a = v(t[n]), a[H] ? r.push(a) : i.push(a);
                        a = G(e, w(i, r)), a.selector = e
                    }
                    return a
                }, j = t.select = function(e, t, n, r) {
                    var i, a, o, s, l, d = "function" == typeof e && e,
                        h = !r && T(e = d.selector || e);
                    if (n = n || [], 1 === h.length) {
                        if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && P && b.relative[a[1].type]) {
                            if (!(t = (b.find.ID(o.matches[0].replace(ve, we), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(a.shift().value.length)
                        }
                        for (i = ue.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !b.relative[s = o.type]);)
                            if ((l = b.find[s]) && (r = l(o.matches[0].replace(ve, we), me.test(a[0].type) && c(t.parentNode) || t))) {
                                if (a.splice(i, 1), !(e = r.length && u(a))) return K.apply(n, r), n;
                                break
                            }
                    }
                    return (d || S(e, h))(r, t, !P, n, !t || me.test(e) && c(t.parentNode) || t), n
                }, _.sortStable = H.split("").sort(U).join("") === H, _.detectDuplicates = !!C, E(), _.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), _.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || a(Z, function(e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            be.find = xe, be.expr = xe.selectors, be.expr[":"] = be.expr.pseudos, be.uniqueSort = be.unique = xe.uniqueSort, be.text = xe.getText, be.isXMLDoc = xe.isXML, be.contains = xe.contains, be.escapeSelector = xe.escape;
            var Te = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && be(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                Se = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                je = be.expr.match.needsContext,
                ze = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            be.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? be.find.matchesSelector(r, e) ? [r] : [] : be.find.matches(e, be.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, be.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(be(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (be.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) be.find(e, i[t], n);
                    return r > 1 ? be.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(o(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(o(this, e || [], !0))
                },
                is: function(e) {
                    return !!o(this, "string" == typeof e && je.test(e) ? be(e) : e || [], !1).length
                }
            });
            var De, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (be.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || De, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof be ? t[0] : t, be.merge(this, be.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), ze.test(r[1]) && be.isPlainObject(t))
                            for (r in t) we(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return i = oe.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : we(e) ? void 0 !== n.ready ? n.ready(e) : e(be) : be.makeArray(e, this)
            }).prototype = be.fn, De = be(oe);
            var Ee = /^(?:parents|prev(?:Until|All))/,
                Ae = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            be.fn.extend({
                has: function(e) {
                    var t = be(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (be.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        a = [],
                        o = "string" != typeof e && be(e);
                    if (!je.test(e))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && be.find.matchesSelector(n, e))) {
                                    a.push(n);
                                    break
                                }
                    return this.pushStack(a.length > 1 ? be.uniqueSort(a) : a)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? ue.call(be(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(be.uniqueSort(be.merge(this.get(), be(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), be.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return Te(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return Te(e, "parentNode", n)
                },
                next: function(e) {
                    return s(e, "nextSibling")
                },
                prev: function(e) {
                    return s(e, "previousSibling")
                },
                nextAll: function(e) {
                    return Te(e, "nextSibling")
                },
                prevAll: function(e) {
                    return Te(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return Te(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return Te(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return Se((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return Se(e.firstChild)
                },
                contents: function(e) {
                    return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e), be.merge([], e.childNodes))
                }
            }, function(e, t) {
                be.fn[e] = function(n, r) {
                    var i = be.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = be.filter(r, i)), this.length > 1 && (Ae[e] || be.uniqueSort(i), Ee.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var Me = /[^\x20\t\r\n\f]+/g;
            be.Callbacks = function(e) {
                e = "string" == typeof e ? l(e) : be.extend({}, e);
                var t, n, i, a, o = [],
                    s = [],
                    c = -1,
                    d = function() {
                        for (a = a || e.once, i = t = !0; s.length; c = -1)
                            for (n = s.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && e.stopOnFalse && (c = o.length, n = !1);
                        e.memory || (n = !1), t = !1, a && (o = n ? [] : "")
                    },
                    u = {
                        add: function() {
                            return o && (n && !t && (c = o.length - 1, s.push(n)), function t(n) {
                                be.each(n, function(n, i) {
                                    we(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== r(i) && t(i)
                                })
                            }(arguments), n && !t && d()), this
                        },
                        remove: function() {
                            return be.each(arguments, function(e, t) {
                                for (var n;
                                    (n = be.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c--
                            }), this
                        },
                        has: function(e) {
                            return e ? be.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return a = s = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return a = s = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(e, n) {
                            return a || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || d()), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                return u
            }, be.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", be.Callbacks("memory"), be.Callbacks("memory"), 2],
                            ["resolve", "done", be.Callbacks("once memory"), be.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", be.Callbacks("once memory"), be.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return be.Deferred(function(t) {
                                    be.each(n, function(n, r) {
                                        var i = we(e[r[4]]) && e[r[4]];
                                        a[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && we(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, r, i) {
                                function a(t, n, r, i) {
                                    return function() {
                                        var s = this,
                                            l = arguments,
                                            u = function() {
                                                var e, u;
                                                if (!(t < o)) {
                                                    if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then, we(u) ? i ? u.call(e, a(o, n, c, i), a(o, n, d, i)) : (o++, u.call(e, a(o, n, c, i), a(o, n, d, i), a(o, n, c, n.notifyWith))) : (r !== c && (s = void 0, l = [e]), (i || n.resolveWith)(s, l))
                                                }
                                            },
                                            h = i ? u : function() {
                                                try {
                                                    u()
                                                } catch (e) {
                                                    be.Deferred.exceptionHook && be.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= o && (r !== d && (s = void 0, l = [e]), n.rejectWith(s, l))
                                                }
                                            };
                                        t ? h() : (be.Deferred.getStackHook && (h.stackTrace = be.Deferred.getStackHook()), e.setTimeout(h))
                                    }
                                }
                                var o = 0;
                                return be.Deferred(function(e) {
                                    n[0][3].add(a(0, e, we(i) ? i : c, e.notifyWith)), n[1][3].add(a(0, e, we(t) ? t : c)), n[2][3].add(a(0, e, we(r) ? r : d))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? be.extend(e, i) : i
                            }
                        },
                        a = {};
                    return be.each(n, function(e, t) {
                        var o = t[2],
                            s = t[5];
                        i[t[1]] = o.add, s && o.add(function() {
                            r = s
                        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), a[t[0]] = function() {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[t[0] + "With"] = o.fireWith
                    }), i.promise(a), t && t.call(a, a), a
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = le.call(arguments),
                        a = be.Deferred(),
                        o = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : n, --t || a.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (u(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || we(i[n] && i[n].then))) return a.then();
                    for (; n--;) u(i[n], o(n), a.reject);
                    return a.promise()
                }
            });
            var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            be.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, be.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            };
            var Ne = be.Deferred();
            be.fn.ready = function(e) {
                return Ne.then(e).catch(function(e) {
                    be.readyException(e)
                }), this
            }, be.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --be.readyWait : be.isReady) || (be.isReady = !0, !0 !== e && --be.readyWait > 0 || Ne.resolveWith(oe, [be]))
                }
            }), be.ready.then = Ne.then, "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll ? e.setTimeout(be.ready) : (oe.addEventListener("DOMContentLoaded", h), e.addEventListener("load", h));
            var Oe = function(e, t, n, i, a, o, s) {
                    var l = 0,
                        c = e.length,
                        d = null == n;
                    if ("object" === r(n)) {
                        a = !0;
                        for (l in n) Oe(e, t, l, n[l], !0, o, s)
                    } else if (void 0 !== i && (a = !0, we(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                            return d.call(be(e), n)
                        })), t))
                        for (; l < c; l++) t(e[l], n, s ? i : i.call(e[l], l, t(e[l], n)));
                    return a ? e : d ? t.call(e) : c ? t(e[0], n) : o
                },
                Le = /^-ms-/,
                qe = /-([a-z])/g,
                He = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            g.uid = 1, g.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[f(t)] = n;
                    else
                        for (r in t) i[f(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            Array.isArray(t) ? t = t.map(f) : (t = f(t), t = t in r ? [t] : t.match(Me) || []), n = t.length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || be.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !be.isEmptyObject(t)
                }
            };
            var We = new g,
                Be = new g,
                Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Re = /[A-Z]/g;
            be.extend({
                hasData: function(e) {
                    return Be.hasData(e) || We.hasData(e)
                },
                data: function(e, t, n) {
                    return Be.access(e, t, n)
                },
                removeData: function(e, t) {
                    Be.remove(e, t)
                },
                _data: function(e, t, n) {
                    return We.access(e, t, n)
                },
                _removeData: function(e, t) {
                    We.remove(e, t)
                }
            }), be.fn.extend({
                data: function(e, t) {
                    var n, r, i, a = this[0],
                        o = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = Be.get(a), 1 === a.nodeType && !We.get(a, "hasDataAttrs"))) {
                            for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = f(r.slice(5)), v(a, r, i[r])));
                            We.set(a, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        Be.set(this, e)
                    }) : Oe(this, function(t) {
                        var n;
                        if (a && void 0 === t) {
                            if (void 0 !== (n = Be.get(a, e))) return n;
                            if (void 0 !== (n = v(a, e))) return n
                        } else this.each(function() {
                            Be.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Be.remove(this, e)
                    })
                }
            }), be.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = We.get(e, t), n && (!r || Array.isArray(n) ? r = We.access(e, t, be.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = be.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        a = be._queueHooks(e, t),
                        o = function() {
                            be.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)), !r && a && a.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return We.get(e, n) || We.access(e, n, {
                        empty: be.Callbacks("once memory").add(function() {
                            We.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), be.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? be.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = be.queue(this, e, t);
                        be._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && be.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        be.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = be.Deferred(),
                        a = this,
                        o = this.length,
                        s = function() {
                            --r || i.resolveWith(a, [a])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = We.get(a[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Ge = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
                Ue = ["Top", "Right", "Bottom", "Left"],
                Ye = function(e, t) {
                    return e = t || e, "none" === e.style.display || "" === e.style.display && be.contains(e.ownerDocument, e) && "none" === be.css(e, "display")
                },
                Ve = function(e, t, n, r) {
                    var i, a, o = {};
                    for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                    i = n.apply(e, r || []);
                    for (a in t) e.style[a] = o[a];
                    return i
                },
                $e = {};
            be.fn.extend({
                show: function() {
                    return _(this, !0)
                },
                hide: function() {
                    return _(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Ye(this) ? be(this).show() : be(this).hide()
                    })
                }
            });
            var Xe = /^(?:checkbox|radio)$/i,
                Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Je = /^$|^module$|\/(?:java|ecma)script/i,
                Qe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td;
            var Ze = /<|&#?\w+;/;
            ! function() {
                var e = oe.createDocumentFragment(),
                    t = e.appendChild(oe.createElement("div")),
                    n = oe.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var et = oe.documentElement,
                tt = /^key/,
                nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                rt = /^([^.]*)(?:\.(.+)|)/;
            be.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var a, o, s, l, c, d, u, h, p, f, g, m = We.get(e);
                    if (m)
                        for (n.handler && (a = n, n = a.handler, i = a.selector), i && be.find.matchesSelector(et, i), n.guid || (n.guid = be.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(t) {
                                return void 0 !== be && be.event.triggered !== t.type ? be.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(Me) || [""], c = t.length; c--;) s = rt.exec(t[c]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p && (u = be.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = be.event.special[p] || {}, d = be.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && be.expr.match.needsContext.test(i),
                            namespace: f.join(".")
                        }, a), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(e, r, f, o) || e.addEventListener && e.addEventListener(p, o)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, d) : h.push(d), be.event.global[p] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var a, o, s, l, c, d, u, h, p, f, g, m = We.hasData(e) && We.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(Me) || [""], c = t.length; c--;)
                            if (s = rt.exec(t[c]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p) {
                                for (u = be.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, h = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) d = h[a], !i && g !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || r && r !== d.selector && ("**" !== r || !d.selector) || (h.splice(a, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                                o && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, m.handle) || be.removeEvent(e, p, m.handle), delete l[p])
                            } else
                                for (p in l) be.event.remove(e, p + t[c], n, r, !0);
                        be.isEmptyObject(l) && We.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, a, o, s = be.event.fix(e),
                        l = new Array(arguments.length),
                        c = (We.get(this, "events") || {})[s.type] || [],
                        d = be.event.special[s.type] || {};
                    for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (s.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, s)) {
                        for (o = be.event.handlers.call(this, s, c), t = 0;
                            (i = o[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (a = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a, s.data = a.data, void 0 !== (r = ((be.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, a, o, s = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (a = [], o = {}, n = 0; n < l; n++) r = t[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? be(i, this).index(c) > -1 : be.find(i, this, null, [c]).length), o[i] && a.push(r);
                                a.length && s.push({
                                    elem: c,
                                    handlers: a
                                })
                            }
                    return c = this, l < t.length && s.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(be.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: we(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[be.expando] ? e : new be.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== j() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === j() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && a(this, "input")) return this.click(), !1
                        },
                        _default: function(e) {
                            return a(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, be.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, be.Event = function(e, t) {
                if (!(this instanceof be.Event)) return new be.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? T : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && be.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[be.expando] = !0
            }, be.Event.prototype = {
                constructor: be.Event,
                isDefaultPrevented: S,
                isPropagationStopped: S,
                isImmediatePropagationStopped: S,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, be.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, be.event.addProp), be.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                be.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            a = e.handleObj;
                        return i && (i === r || be.contains(r, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), be.fn.extend({
                on: function(e, t, n, r) {
                    return z(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return z(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, be(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = S), this.each(function() {
                        be.event.remove(this, e, n, t)
                    })
                }
            });
            var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                at = /<script|<style|<link/i,
                ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
                st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            be.extend({
                htmlPrefilter: function(e) {
                    return e.replace(it, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, a, o, s = e.cloneNode(!0),
                        l = be.contains(e.ownerDocument, e);
                    if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || be.isXMLDoc(e)))
                        for (o = b(s), a = b(e), r = 0, i = a.length; r < i; r++) M(a[r], o[r]);
                    if (t)
                        if (n)
                            for (a = a || b(e), o = o || b(s), r = 0, i = a.length; r < i; r++) A(a[r], o[r]);
                        else A(e, s);
                    return o = b(s, "script"), o.length > 0 && k(o, !l && b(e, "script")), s
                },
                cleanData: function(e) {
                    for (var t, n, r, i = be.event.special, a = 0; void 0 !== (n = e[a]); a++)
                        if (He(n)) {
                            if (t = n[We.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? be.event.remove(n, r) : be.removeEvent(n, r, t.handle);
                                n[We.expando] = void 0
                            }
                            n[Be.expando] && (n[Be.expando] = void 0)
                        }
                }
            }), be.fn.extend({
                detach: function(e) {
                    return N(this, e, !0)
                },
                remove: function(e) {
                    return N(this, e)
                },
                text: function(e) {
                    return Oe(this, function(e) {
                        return void 0 === e ? be.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return P(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            D(this, e).appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return P(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = D(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return P(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return P(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (be.cleanData(b(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return be.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Oe(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !at.test(e) && !Qe[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = be.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (be.cleanData(b(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return P(this, arguments, function(t) {
                        var n = this.parentNode;
                        be.inArray(this, e) < 0 && (be.cleanData(b(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), be.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                be.fn[e] = function(e) {
                    for (var n, r = [], i = be(e), a = i.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), be(i[o])[t](n), de.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var lt = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
                ct = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                dt = new RegExp(Ue.join("|"), "i");
            ! function() {
                function t() {
                    if (c) {
                        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", et.appendChild(l).appendChild(c);
                        var t = e.getComputedStyle(c);
                        r = "1%" !== t.top, s = 12 === n(t.marginLeft), c.style.right = "60%", o = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", et.removeChild(l), c = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var r, i, a, o, s, l = oe.createElement("div"),
                    c = oe.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === c.style.backgroundClip, be.extend(ve, {
                    boxSizingReliable: function() {
                        return t(), i
                    },
                    pixelBoxStyles: function() {
                        return t(), o
                    },
                    pixelPosition: function() {
                        return t(), r
                    },
                    reliableMarginLeft: function() {
                        return t(), s
                    },
                    scrollboxSize: function() {
                        return t(), a
                    }
                }))
            }();
            var ut = /^(none|table(?!-c[ea]).+)/,
                ht = /^--/,
                pt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ft = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                gt = ["Webkit", "Moz", "ms"],
                mt = oe.createElement("div").style;
            be.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = O(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, a, o, s = f(t),
                            l = ht.test(t),
                            c = e.style;
                        if (l || (t = H(s)), o = be.cssHooks[t] || be.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : c[t];
                        a = typeof n, "string" === a && (i = Ge.exec(n)) && i[1] && (n = w(e, t, i), a = "number"), null != n && n === n && ("number" === a && (n += i && i[3] || (be.cssNumber[s] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var i, a, o, s = f(t);
                    return ht.test(t) || (t = H(s)), o = be.cssHooks[t] || be.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), void 0 === i && (i = O(e, t, r)), "normal" === i && t in ft && (i = ft[t]), "" === n || n ? (a = parseFloat(i), !0 === n || isFinite(a) ? a || 0 : i) : i
                }
            }), be.each(["height", "width"], function(e, t) {
                be.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return !ut.test(be.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, r) : Ve(e, pt, function() {
                            return F(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var i, a = ct(e),
                            o = "border-box" === be.css(e, "boxSizing", !1, a),
                            s = r && B(e, t, r, o, a);
                        return o && ve.scrollboxSize() === a.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - B(e, t, "border", !1, a) - .5)), s && (i = Ge.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = be.css(e, t)), W(e, n, s)
                    }
                }
            }), be.cssHooks.marginLeft = L(ve.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), be.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                be.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ue[r] + t] = a[r] || a[r - 2] || a[0];
                        return i
                    }
                }, "margin" !== e && (be.cssHooks[e + t].set = W)
            }), be.fn.extend({
                css: function(e, t) {
                    return Oe(this, function(e, t, n) {
                        var r, i, a = {},
                            o = 0;
                        if (Array.isArray(t)) {
                            for (r = ct(e), i = t.length; o < i; o++) a[t[o]] = be.css(e, t[o], !1, r);
                            return a
                        }
                        return void 0 !== n ? be.style(e, t, n) : be.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), be.Tween = R, R.prototype = {
                constructor: R,
                init: function(e, t, n, r, i, a) {
                    this.elem = e, this.prop = n, this.easing = i || be.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (be.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = R.propHooks[this.prop];
                    return e && e.get ? e.get(this) : R.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = R.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = be.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
                }
            }, R.prototype.init.prototype = R.prototype, R.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = be.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        be.fx.step[e.prop] ? be.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[be.cssProps[e.prop]] && !be.cssHooks[e.prop] ? e.elem[e.prop] = e.now : be.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, be.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, be.fx = R.prototype.init, be.fx.step = {};
            var vt, wt, yt = /^(?:toggle|show|hide)$/,
                _t = /queueHooks$/;
            be.Animation = be.extend(X, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return w(n.elem, e, Ge.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        we(e) ? (t = e, e = ["*"]) : e = e.match(Me);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
                    },
                    prefilters: [V],
                    prefilter: function(e, t) {
                        t ? X.prefilters.unshift(e) : X.prefilters.push(e)
                    }
                }), be.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? be.extend({}, e) : {
                        complete: n || !n && t || we(e) && e,
                        duration: e,
                        easing: n && t || t && !we(t) && t
                    };
                    return be.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in be.fx.speeds ? r.duration = be.fx.speeds[r.duration] : r.duration = be.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        we(r.old) && r.old.call(this), r.queue && be.dequeue(this, r.queue)
                    }, r
                }, be.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Ye).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = be.isEmptyObject(e),
                            a = be.speed(t, n, r),
                            o = function() {
                                var t = X(this, be.extend({}, e), a);
                                (i || We.get(this, "finish")) && t.stop(!0)
                            };
                        return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                a = be.timers,
                                o = We.get(this);
                            if (i) o[i] && o[i].stop && r(o[i]);
                            else
                                for (i in o) o[i] && o[i].stop && _t.test(i) && r(o[i]);
                            for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1));
                            !t && n || be.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = We.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                a = be.timers,
                                o = r ? r.length : 0;
                            for (n.finish = !0, be.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), be.each(["toggle", "show", "hide"], function(e, t) {
                    var n = be.fn[t];
                    be.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
                    }
                }), be.each({
                    slideDown: U("show"),
                    slideUp: U("hide"),
                    slideToggle: U("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    be.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), be.timers = [], be.fx.tick = function() {
                    var e, t = 0,
                        n = be.timers;
                    for (vt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || be.fx.stop(), vt = void 0
                }, be.fx.timer = function(e) {
                    be.timers.push(e), be.fx.start()
                }, be.fx.interval = 13, be.fx.start = function() {
                    wt || (wt = !0, I())
                }, be.fx.stop = function() {
                    wt = null
                }, be.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, be.fn.delay = function(t, n) {
                    return t = be.fx ? be.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e = oe.createElement("input"),
                        t = oe.createElement("select"),
                        n = t.appendChild(oe.createElement("option"));
                    e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = n.selected, e = oe.createElement("input"), e.value = "t", e.type = "radio", ve.radioValue = "t" === e.value
                }();
            var bt, kt = be.expr.attrHandle;
            be.fn.extend({
                attr: function(e, t) {
                    return Oe(this, be.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        be.removeAttr(this, e)
                    })
                }
            }), be.extend({
                attr: function(e, t, n) {
                    var r, i, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? be.prop(e, t, n) : (1 === a && be.isXMLDoc(e) || (i = be.attrHooks[t.toLowerCase()] || (be.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void be.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = be.find.attr(e, t), null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!ve.radioValue && "radio" === t && a(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(Me);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), bt = {
                set: function(e, t, n) {
                    return !1 === t ? be.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, be.each(be.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = kt[t] || be.find.attr;
                kt[t] = function(e, t, r) {
                    var i, a, o = t.toLowerCase();
                    return r || (a = kt[o], kt[o] = i, i = null != n(e, t, r) ? o : null, kt[o] = a), i
                }
            });
            var xt = /^(?:input|select|textarea|button)$/i,
                Tt = /^(?:a|area)$/i;
            be.fn.extend({
                prop: function(e, t) {
                    return Oe(this, be.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[be.propFix[e] || e]
                    })
                }
            }), be.extend({
                prop: function(e, t, n) {
                    var r, i, a = e.nodeType;
                    if (3 !== a && 8 !== a && 2 !== a) return 1 === a && be.isXMLDoc(e) || (t = be.propFix[t] || t, i = be.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = be.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : xt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), ve.optSelected || (be.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), be.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                be.propFix[this.toLowerCase()] = this
            }), be.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, a, o, s, l = 0;
                    if (we(e)) return this.each(function(t) {
                        be(this).addClass(e.call(this, t, J(this)))
                    });
                    if (t = Q(e), t.length)
                        for (; n = this[l++];)
                            if (i = J(n), r = 1 === n.nodeType && " " + K(i) + " ") {
                                for (o = 0; a = t[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                                s = K(r), i !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, a, o, s, l = 0;
                    if (we(e)) return this.each(function(t) {
                        be(this).removeClass(e.call(this, t, J(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if (t = Q(e), t.length)
                        for (; n = this[l++];)
                            if (i = J(n), r = 1 === n.nodeType && " " + K(i) + " ") {
                                for (o = 0; a = t[o++];)
                                    for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
                                s = K(r), i !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : we(e) ? this.each(function(n) {
                        be(this).toggleClass(e.call(this, n, J(this), t), t)
                    }) : this.each(function() {
                        var t, i, a, o;
                        if (r)
                            for (i = 0, a = be(this), o = Q(e); t = o[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                        else void 0 !== e && "boolean" !== n || (t = J(this), t && We.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : We.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + K(J(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var St = /\r/g;
            be.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = we(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, be(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = be.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), (t = be.valHooks[this.type] || be.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return (t = be.valHooks[i.type] || be.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(St, "") : null == n ? "" : n)
                    }
                }
            }), be.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = be.find.attr(e, "value");
                            return null != t ? t : K(be.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                s = "select-one" === e.type,
                                l = s ? null : [],
                                c = s ? o + 1 : i.length;
                            for (r = o < 0 ? c : s ? o : 0; r < c; r++)
                                if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !a(n.parentNode, "optgroup"))) {
                                    if (t = be(n).val(), s) return t;
                                    l.push(t)
                                }
                            return l
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, a = be.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = be.inArray(be.valHooks.option.get(r), a) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), a
                        }
                    }
                }
            }), be.each(["radio", "checkbox"], function() {
                be.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = be.inArray(be(e).val(), t) > -1
                    }
                }, ve.checkOn || (be.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), ve.focusin = "onfocusin" in e;
            var jt = /^(?:focusinfocus|focusoutblur)$/,
                zt = function(e) {
                    e.stopPropagation()
                };
            be.extend(be.event, {
                trigger: function(t, n, r, i) {
                    var a, o, s, l, c, d, u, h, p = [r || oe],
                        f = fe.call(t, "type") ? t.type : t,
                        g = fe.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = h = s = r = r || oe, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(f + be.event.triggered) && (f.indexOf(".") > -1 && (g = f.split("."), f = g.shift(), g.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[be.expando] ? t : new be.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : be.makeArray(n, [t]), u = be.event.special[f] || {}, i || !u.trigger || !1 !== u.trigger.apply(r, n))) {
                        if (!i && !u.noBubble && !ye(r)) {
                            for (l = u.delegateType || f, jt.test(l + f) || (o = o.parentNode); o; o = o.parentNode) p.push(o), s = o;
                            s === (r.ownerDocument || oe) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (a = 0;
                            (o = p[a++]) && !t.isPropagationStopped();) h = o, t.type = a > 1 ? l : u.bindType || f, d = (We.get(o, "events") || {})[t.type] && We.get(o, "handle"), d && d.apply(o, n), (d = c && o[c]) && d.apply && He(o) && (t.result = d.apply(o, n), !1 === t.result && t.preventDefault());
                        return t.type = f, i || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), n) || !He(r) || c && we(r[f]) && !ye(r) && (s = r[c], s && (r[c] = null), be.event.triggered = f, t.isPropagationStopped() && h.addEventListener(f, zt), r[f](), t.isPropagationStopped() && h.removeEventListener(f, zt), be.event.triggered = void 0, s && (r[c] = s)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = be.extend(new be.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    be.event.trigger(r, null, t)
                }
            }), be.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        be.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return be.event.trigger(e, t, n, !0)
                }
            }), ve.focusin || be.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    be.event.simulate(t, e.target, be.event.fix(e))
                };
                be.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = We.access(r, t);
                        i || r.addEventListener(e, n, !0), We.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = We.access(r, t) - 1;
                        i ? We.access(r, t, i) : (r.removeEventListener(e, n, !0), We.remove(r, t))
                    }
                }
            });
            var Dt = e.location,
                Ct = Date.now(),
                Et = /\?/;
            be.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || be.error("Invalid XML: " + t), n
            };
            var At = /\[\]$/,
                Mt = /\r?\n/g,
                Pt = /^(?:submit|button|image|reset|file)$/i,
                Nt = /^(?:input|select|textarea|keygen)/i;
            be.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = we(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (Array.isArray(e) || e.jquery && !be.isPlainObject(e)) be.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Z(n, e[n], t, i);
                return r.join("&")
            }, be.fn.extend({
                serialize: function() {
                    return be.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = be.prop(this, "elements");
                        return e ? be.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !be(this).is(":disabled") && Nt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Xe.test(e))
                    }).map(function(e, t) {
                        var n = be(this).val();
                        return null == n ? null : Array.isArray(n) ? be.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Mt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Mt, "\r\n")
                        }
                    }).get()
                }
            });
            var Ot = /%20/g,
                Lt = /#.*$/,
                qt = /([?&])_=[^&]*/,
                Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Bt = /^(?:GET|HEAD)$/,
                Ft = /^\/\//,
                Rt = {},
                It = {},
                Gt = "*/".concat("*"),
                Ut = oe.createElement("a");
            Ut.href = Dt.href, be.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Dt.href,
                    type: "GET",
                    isLocal: Wt.test(Dt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Gt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": be.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? ne(ne(e, be.ajaxSettings), t) : ne(be.ajaxSettings, e)
                },
                ajaxPrefilter: ee(Rt),
                ajaxTransport: ee(It),
                ajax: function(t, n) {
                    function r(t, n, r, s) {
                        var c, h, p, _, b, k = n;
                        d || (d = !0, l && e.clearTimeout(l), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (_ = re(f, x, r)), _ = ie(f, _, x, c), c ? (f.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (be.lastModified[a] = b), (b = x.getResponseHeader("etag")) && (be.etag[a] = b)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = _.state, h = _.data, p = _.error, c = !p)) : (p = k, !t && k || (k = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || k) + "", c ? v.resolveWith(g, [h, k, x]) : v.rejectWith(g, [x, k, p]), x.statusCode(y), y = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [x, f, c ? h : p]), w.fireWith(g, [x, k]), u && (m.trigger("ajaxComplete", [x, f]), --be.active || be.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (n = t, t = void 0), n = n || {};
                    var i, a, o, s, l, c, d, u, h, p, f = be.ajaxSetup({}, n),
                        g = f.context || f,
                        m = f.context && (g.nodeType || g.jquery) ? be(g) : be.event,
                        v = be.Deferred(),
                        w = be.Callbacks("once memory"),
                        y = f.statusCode || {},
                        _ = {},
                        b = {},
                        k = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (d) {
                                    if (!s)
                                        for (s = {}; t = Ht.exec(o);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return d ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == d && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, _[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == d && (f.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (d) x.always(e[x.status]);
                                    else
                                        for (t in e) y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || k;
                                return i && i.abort(t), r(0, t), this
                            }
                        };
                    if (v.promise(x), f.url = ((t || f.url || Dt.href) + "").replace(Ft, Dt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Me) || [""], null == f.crossDomain) {
                        c = oe.createElement("a");
                        try {
                            c.href = f.url, c.href = c.href, f.crossDomain = Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host
                        } catch (e) {
                            f.crossDomain = !0
                        }
                    }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = be.param(f.data, f.traditional)), te(Rt, f, n, x), d) return x;
                    u = be.event && f.global, u && 0 == be.active++ && be.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Bt.test(f.type), a = f.url.replace(Lt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ot, "+")) : (p = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (Et.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(qt, "$1"), p = (Et.test(a) ? "&" : "?") + "_=" + Ct++ + p), f.url = a + p), f.ifModified && (be.lastModified[a] && x.setRequestHeader("If-Modified-Since", be.lastModified[a]), be.etag[a] && x.setRequestHeader("If-None-Match", be.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : f.accepts["*"]);
                    for (h in f.headers) x.setRequestHeader(h, f.headers[h]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(g, x, f) || d)) return x.abort();
                    if (k = "abort", w.add(f.complete), x.done(f.success), x.fail(f.error), i = te(It, f, n, x)) {
                        if (x.readyState = 1, u && m.trigger("ajaxSend", [x, f]), d) return x;
                        f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                            x.abort("timeout")
                        }, f.timeout));
                        try {
                            d = !1, i.send(_, r)
                        } catch (e) {
                            if (d) throw e;
                            r(-1, e)
                        }
                    } else r(-1, "No Transport");
                    return x
                },
                getJSON: function(e, t, n) {
                    return be.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return be.get(e, void 0, t, "script")
                }
            }), be.each(["get", "post"], function(e, t) {
                be[t] = function(e, n, r, i) {
                    return we(n) && (i = i || r, r = n, n = void 0), be.ajax(be.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, be.isPlainObject(e) && e))
                }
            }), be._evalUrl = function(e) {
                return be.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, be.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (we(e) && (e = e.call(this[0])), t = be(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return we(e) ? this.each(function(t) {
                        be(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = be(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = we(e);
                    return this.each(function(n) {
                        be(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        be(this).replaceWith(this.childNodes)
                    }), this
                }
            }), be.expr.pseudos.hidden = function(e) {
                return !be.expr.pseudos.visible(e)
            }, be.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, be.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Yt = {
                    0: 200,
                    1223: 204
                },
                Vt = be.ajaxSettings.xhr();
            ve.cors = !!Vt && "withCredentials" in Vt, ve.ajax = Vt = !!Vt, be.ajaxTransport(function(t) {
                var n, r;
                if (ve.cors || Vt && !t.crossDomain) return {
                    send: function(i, a) {
                        var o, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) s[o] = t.xhrFields[o];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (o in i) s.setRequestHeader(o, i[o]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Yt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout(function() {
                                n && r()
                            })
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }), be.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), be.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return be.globalEval(e), e
                    }
                }
            }), be.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), be.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, i) {
                            t = be("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), oe.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var $t = [],
                Xt = /(=)\?(?=&|$)|\?\?/;
            be.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = $t.pop() || be.expando + "_" + Ct++;
                    return this[e] = !0, e
                }
            }), be.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, a, o, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = we(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + i) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return o || be.error(i + " was not called"), o[0]
                }, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
                    o = arguments
                }, r.always(function() {
                    void 0 === a ? be(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, $t.push(i)), o && we(a) && a(o[0]), o = a = void 0
                }), "script"
            }), ve.createHTMLDocument = function() {
                var e = oe.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), be.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var r, i, a;
                return t || (ve.createHTMLDocument ? (t = oe.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = oe.location.href, t.head.appendChild(r)) : t = oe), i = ze.exec(e), a = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, a), a && a.length && be(a).remove(), be.merge([], i.childNodes))
            }, be.fn.load = function(e, t, n) {
                var r, i, a, o = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = K(e.slice(s)), e = e.slice(0, s)), we(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), o.length > 0 && be.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    a = arguments, o.html(r ? be("<div>").append(be.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    o.each(function() {
                        n.apply(this, a || [e.responseText, t, e])
                    })
                }), this
            }, be.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                be.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), be.expr.pseudos.animated = function(e) {
                return be.grep(be.timers, function(t) {
                    return e === t.elem
                }).length
            }, be.offset = {
                setOffset: function(e, t, n) {
                    var r, i, a, o, s, l, c, d = be.css(e, "position"),
                        u = be(e),
                        h = {};
                    "static" === d && (e.style.position = "relative"), s = u.offset(), a = be.css(e, "top"), l = be.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (a + l).indexOf("auto") > -1, c ? (r = u.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), we(t) && (t = t.call(e, n, be.extend({}, s))), null != t.top && (h.top = t.top - s.top + o), null != t.left && (h.left = t.left - s.left + i), "using" in t ? t.using.call(e, h) : u.css(h)
                }
            }, be.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        be.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            i = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === be.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === be.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && (i = be(e).offset(), i.top += be.css(e, "borderTopWidth", !0), i.left += be.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - i.top - be.css(r, "marginTop", !0),
                            left: t.left - i.left - be.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === be.css(e, "position");) e = e.offsetParent;
                        return e || et
                    })
                }
            }), be.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                be.fn[e] = function(r) {
                    return Oe(this, function(e, r, i) {
                        var a;
                        if (ye(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === i) return a ? a[t] : e[r];
                        a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i
                    }, e, r, arguments.length)
                }
            }), be.each(["top", "left"], function(e, t) {
                be.cssHooks[t] = L(ve.pixelPosition, function(e, n) {
                    if (n) return n = O(e, t), lt.test(n) ? be(e).position()[t] + "px" : n
                })
            }), be.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                be.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    be.fn[r] = function(i, a) {
                        var o = arguments.length && (n || "boolean" != typeof i),
                            s = n || (!0 === i || !0 === a ? "margin" : "border");
                        return Oe(this, function(t, n, i) {
                            var a;
                            return ye(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? be.css(t, n, s) : be.style(t, n, i, s)
                        }, t, o ? i : void 0, o)
                    }
                })
            }), be.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                be.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), be.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), be.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), be.proxy = function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), we(e)) return r = le.call(arguments, 2), i = function() {
                    return e.apply(t || this, r.concat(le.call(arguments)))
                }, i.guid = e.guid = e.guid || be.guid++, i
            }, be.holdReady = function(e) {
                e ? be.readyWait++ : be.ready(!0)
            }, be.isArray = Array.isArray, be.parseJSON = JSON.parse, be.nodeName = a, be.isFunction = we, be.isWindow = ye, be.camelCase = f, be.type = r, be.now = Date.now, be.isNumeric = function(e) {
                var t = be.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, "function" == typeof define && define.amd && define("jquery", [], function() {
                return be
            });
            var Kt = e.jQuery,
                Jt = e.$;
            return be.noConflict = function(t) {
                return e.$ === be && (e.$ = Jt), t && e.jQuery === be && (e.jQuery = Kt), be
            }, t || (e.jQuery = e.$ = be), be
        })
    }, {}],
    11: [function(e, t, n) {
        function r() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === r || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch (t) {
                try {
                    return u.call(null, e, 0)
                } catch (t) {
                    return u.call(this, e, 0)
                }
            }
        }

        function o(e) {
            if (h === clearTimeout) return clearTimeout(e);
            if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);
            try {
                return h(e)
            } catch (t) {
                try {
                    return h.call(null, e)
                } catch (t) {
                    return h.call(this, e)
                }
            }
        }

        function s() {
            m && f && (m = !1, f.length ? g = f.concat(g) : v = -1, g.length && l())
        }

        function l() {
            if (!m) {
                var e = a(s);
                m = !0;
                for (var t = g.length; t;) {
                    for (f = g, g = []; ++v < t;) f && f[v].run();
                    v = -1, t = g.length
                }
                f = null, m = !1, o(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function d() {}
        var u, h, p = t.exports = {};
        ! function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : r
            } catch (e) {
                u = r
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                h = i
            }
        }();
        var f, g = [],
            m = !1,
            v = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            g.push(new c(e, t)), 1 !== g.length || m || a(l)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = d, p.addListener = d, p.once = d, p.off = d, p.removeListener = d, p.removeAllListeners = d, p.emit = d, p.prependListener = d, p.prependOnceListener = d, p.listeners = function(e) {
            return []
        }, p.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, p.cwd = function() {
            return "/"
        }, p.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, p.umask = function() {
            return 0
        }
    }, {}]
}, {}, [6]);