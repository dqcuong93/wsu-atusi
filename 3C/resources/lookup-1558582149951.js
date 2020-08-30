(function(window, undefined) {
  var dictionary = {
    "b22e2285-9cd1-40eb-ba16-43c0b0f59648": "Water tracking",
    "9ee7653c-962c-41f2-a31a-3a9d1264a45e": "Real time tracking",
    "8e9ef386-8640-45c4-8ec0-536d568ede0d": "Area tracking",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign in",
    "c379e245-519a-4752-af3a-484fdc23ed0b": "Living room",
    "0a683bd0-a751-4a6f-8f10-ff812f23d058": "Electricity tracking",
    "8bf714ff-bd7d-4b0e-9350-e2b7f0fd173c": "Card payment",
    "1e10433f-e69c-40ae-b4ab-b89a456d3506": "Bpay",
    "48ae2aa6-207a-4566-95ae-88032d09e6d6": "Address",
    "75bea9e6-7374-49a3-a39f-7d6eb5538daa": "Payment screen",
    "1dc17ab3-368b-4636-8e55-2787e50ecc78": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);