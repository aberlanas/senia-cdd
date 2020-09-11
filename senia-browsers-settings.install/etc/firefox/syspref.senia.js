// Senia settings
pref("browser.startup.homepage", " https://duckduckgo.com/  | https://portal.edu.gva.es/aules/ |https://docent.edu.gva.es/md-front/www/ | http://ieslasenia.org | http://revista.ieslasenia.org/ | https://172.29.0.245  ");

pref("pref.privacy.disable_button.view_passwords", true, locked); //Disable the "Show Passwords" Button
pref("privacy.donottrackheader.enabled", true, locked); //no targeted ads
pref("privacy.item.formdata", true, locked); //clear saved form data
pref("privacy.item.offlineApps", true, locked); //clear offline apps data
pref("security.enable_ssl3", true, locked); //Use SSL 3.0
pref("security.enable_tls", true, locked); //Use TLS 1.0

// Settings for proxy
pref("network.proxy.type",5,locked); 

// Settings for PDFs
pref("browser.helperApps.neverAsk.openFile","", locked);
pref("pdfjs.disabled",true,locked);
