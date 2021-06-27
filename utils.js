import getUserLocales from "get-user-locale";
// import getData from "./api/apis";

const localeCashed =()=> window.localStorage.getItem("lang");
const validLanuages = ["el", "en", "it", "ru", "ro", "pl", "fr", "sq"];

const getBroswerLang = () => {
  const locale = getUserLocales().slice(0, 2);
  const isValidLanguage = validLanuages.includes(locale);
  return isValidLanguage ? locale : "en";
};


export const applicationLang = () => {
  if (process.browser) {
  const lang = localeCashed()||getBroswerLang()
  window.localStorage.setItem("lang",lang);

  }
  return 'el'
}

// export const getIntialData = async () =>{
//   const lang = applicationLang()
//  return await getData("GET_RESOURCES", lang).then((values) => {
//     console.log("GET_RESOURCES", JSON.stringify(values));
//     return values;
//   })
// }
// export const getHomeData = (lang) =>{
//  return Promise.all([
//     getData("GET_RECENT", lang),
//     getData("GET_PROGRAM", lang),
//   ]).then((values) => {
//     console.log("GET_RECENT", JSON.stringify(values[0].Data));
//     console.log("GET_PROGRAM", JSON.stringify(values[1].Data));
//     return values;
//   })
// }