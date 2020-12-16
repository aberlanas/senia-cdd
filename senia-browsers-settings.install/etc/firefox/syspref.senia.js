// Senia settings
pref("browser.startup.homepage", " https://www.ecosia.org/?c=es |https://acces.edu.gva.es/escriptori/| https://portal.edu.gva.es/aules/");

pref("pref.privacy.disable_button.view_passwords", true, locked); //Disable the "Show Passwords" Button
pref("privacy.donottrackheader.enabled", true, locked); //no targeted ads
pref("privacy.item.formdata", true, locked); //clear saved form data
pref("privacy.item.offlineApps", true, locked); //clear offline apps data


pref("privacy.sanitize.sanitizeOnShutdown", true, locked);
pref("privacy.clearOnShutdown.cookies", true, locked);
pref("privacy.clearOnShutdown.cache", true, locked);
pref("privacy.clearOnShutdown.downloads", true, locked);
pref("privacy.clearOnShutdown.history", true, locked);
pref("privacy.clearOnShutdown.formData", true, locked);
pref("privacy.clearOnShutdown.offlineApps", true, locked);
pref("privacy.clearOnShutdown.sessions", true, locked);
pref("privacy.clearOnShutdown.siteSettings", true, locked);


pref("security.enable_ssl3", true, locked); //Use SSL 3.0
pref("security.enable_tls", true, locked); //Use TLS 1.0



// Settings for proxy
pref("network.proxy.type",5,locked); 

// Settings for PDFs
pref("browser.helperApps.neverAsk.openFile","", locked);
pref("pdfjs.disabled",true,locked);
