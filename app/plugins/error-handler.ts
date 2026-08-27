export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (err) => {
    console.log("plugin ErrorHandler", err);
    //
  });
});
