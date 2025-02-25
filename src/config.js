//通过环境变量设置，完成服务端接口地址的接口
export let API;
if (process.env.NODE_ENV === "production") {
    API = process.env.REACT_APP_PRODUCTION_API_URL;
}
else if (process.env.NODE_ENV === "development") {//开发环境
    API = process.env.REACT_APP_DEVLOPMENT_API_URL;
}