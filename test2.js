var axios = require('axios');
var data = JSON.stringify({
    "collection": "organizations",
    "database": "test",
    "dataSource": "SisuSaviya",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-lhdcq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'Authorization': 'Bearer 0MZh7BG6mRDJihUfKk7GC9PDR9AM6eQ6wBujYPcyAyDOwDdURAFy99TUdQRzdUjn',
      'Accept': 'application/ejson'
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
