cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
        "id": "com.razorpay.cordova.RazorpayCheckout",
        "pluginId": "com.razorpay.cordova",
        "clobbers": [
            "RazorpayCheckout"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.razorpay.cordova": "0.11.0",
    "cordova-plugin-whitelist": "1.2.2"
}
// BOTTOM OF METADATA
});