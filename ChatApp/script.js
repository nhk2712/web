import { StringeeClient, StringeeChat } from "stringee_sdk.min.js";
var stringeeClient = new StringeeClient();

stringeeClient.on('connect', function () {
    console.log('++++++++++++++ connected to StringeeServer');
});