var request = require('request');
//var debug =require('debug')("------------->");
//
function debug(abc){
	console.log(abc);
}

//var options =  { headers: { Authorization: 'Bearer 00D90000000xzPP!AQgAQDco1RwIsOXfiPoSZfguyVA8T093ZrhudqRvPvnhzjoZUlr6WWy7EVGiLAloyC2hy.dxiDkLqlqZixj6Ru.QgfOe18JC', timeout: 20000 };

var url1 ={"host":"ap1.salesforce.com","port":"","path":"/services/data/v29.0/query/?q=Select Account.Name, ForecastCategoryName, Owner.Name, StageName, Probability, CloseDate, Name, Id, Amount from Opportunity where Id in ('{ids}') and Probability=0","protocol":"https","content-type":"application/json","method":"GET"};

/*
curl -X DELETE -H "Cache-Control: no-cache" -H "Postman-Token: 6d92203f-3337-1481-2385-a6caf0913230" 'https://www.googleapis.com/drive/v2/files/10gU-qrfi9_wdirgDLV-HNHJYjKtt9DjOfdJAcLAXY9E?access_token=ya29.xAGC6Z98GgrdW3FwKHZLNRlT6H0UPsxLy4RBrxaNYsF98BlH1ANLqZCIO6VAkACoZyfrlCxddA7v'
*/

//var options = { headers: { Authorization: 'Bearer 00D90000000xzPP!AQgAQEMSXce6FcfQ7sa.fpnev3UEGlwJoyQkEzE38d5FPxFCNoq09sYE0HEnk.6.50PGib4gGg1_mX_KuPJPONe2nDecZk2_' }, gzip: true, method: 'GET', url: 'https://ap1.salesforce.com/services/data/v29.0/sobjects/Opportunity/updated?start=2015-08-09T12:57:57Z&end=2015-08-09T12:57:58Z', timeout: 20000 };

var options = {
	headers: {
		Authorization: "Bearer 00D90000000xzPP!AQgAQDco1RwIsOXfiPoSZfguyVA8T093ZrhudqRvPvnhzjoZUlr6WWy7EVGiLAloyC2hy.dxiDkLqlqZixj6Ru.QgfOe18JC"
	},
	gzip: true,
	method: "POST",
	url: "https://ap1.salesforce.com/services/data/v23.0/chatter/feeds/user-profile/me/feed-items?text=xyz",
	timeout: 20000
};

var options =  { body: '', headers: { Authorization: 'Bearer EwB4Aq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAZfZS+XQy7oafLCcZgsu2Jrdq8R+H+NIg0g051cxfEtjFmZNbrIah5HCveU05cKH1PWpPBbAORwfKT+ghbMkR/R+VsgDbblKYkvlBJ46dO+mXg9NcyjBnUFIeU08FQah6e9fdyLeGLmgXL8TP2o6m7D/rNr02EF3Eu5GvBlogi0dp4q3GLvzubmkidoYGiuFQmMiyytz48JyF5Th5Alq7w0+o6BKilmq6vsPzNNuZu7/wbo0T74jbkCiQFIEsv3OOk1+fLP8Z+uGG9heJy5LRT1DDx5otMg9Vtcp5zbQuSume4YtZ4p7A1GRWxztH8q+PvATI2NvseANu130Va5HU0UDZgAACOzyAA3qLAvkSAFZjFmbZVCE3GKOk2H2MEpmOyM7Mii/13K63Uiue1LU8+isapRRjqSaYIvurKKKkc/sKZv6LZ9NWtH1DR6oGGWooVTJ5msOZ1ON0Q+/Se9pHptoSC3645xLyCduuHNopf3UbFgU1lePadAqojM44E/QfRtVEWuutRMJ5IdFU4nirBUH/UaJtIdY+QxxjwTUhujKYx4+9Mh3eSJh6tiT3BXYl9HhxyQxjKO/I8k+gDGB8Y5zm4r1oFPxipC9tIhLMI8EN24H866Ou+K1plqmNEkDaTE8AMoZiswoWZ1Iv1I5WqS3K+IS5308QtuLN6arJRvlSfpVSNW6MC9N4tH0tJyl09zsfAO21QbNJeoo0FzCDuRdg0zuxGm7ix1T93cl73yrWm5RvCXhZbEdRsyxCcup2zVEiG4KzT942fqWSK7BwvrbgtioNjRscAE=', 'content-type': 'application/json', 'User-Agent': 'kore' }, gzip: true, method: 'GET', url: 'https://api.onedrive.com/v1.0/drive/root/view.search?q=test&filter=folder%20eq%20null', timeout: 20000, followAllRedirects: true };

//options = { headers: { Authorization: 'Basic S29yZTpLb3JlQDEyMw==', 'X-CSRF-Token': 'Fetch', 'Content-Type': 'application/json', 'User-Agent': 'kore' }, 'Accept':'application/json', gzip: true, method: 'GET', url: 'https://my304811.crm.ondemand.com/sap/c4c/odata/v1/c4codata/', timeout: 20000, followAllRedirects: true };
    request(options,function(err,response,body){
        if(!err){
            debug(response.statusCode);
            debug(response.headers);
            debug(typeof(body));
            debug(body);
        }else{
        	debug(err);
        }
    });

	
//https://my304811.crm.ondemand.com/sap/c4c/odata/v1/c4codata/OpportunityCollection
//https://my304811.crm.ondemand.com/sap/c4c/odata/v1/c4codata/OpportunityCollection


   // { url: 'https://api.intercom.io/users', method: 'POST', timeout: 20000, headers: { Authorization: 'Basic cXowYjFlbzE6M jI0MDRlZjU1ODQ2ZjQxYzlmNDJhZTcyN2E4Y2NmMTNmMGNmOWNjNg==', Accept: 'application/json', 'Accept-Encoding': 'gzip, deflate', accept: '*/*', 'User-Agent': 'Kore', 'content-type': 'application/json' }, gzip: true, body: '{"user_id":"user_1","email":"kstream001@gmail.com","name":"Kstream001"}' }
   
   
   
   