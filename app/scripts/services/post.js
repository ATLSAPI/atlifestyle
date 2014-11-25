/**
 * Created by goatie on 24/11/14.
 */
app.factory('Post', function() {
  var savedData = {};
  var requestUrl = {};
  function setData(data) {
    savedData = data;
  }
  function getData() {
    return savedData;
  }

  function setUrl(url){
    requestUrl = url;
  }

  function getUrl(){
    return requestUrl;
  }
  return {
    setData : setData,
    getData: getData,
    setUrl: setUrl,
    getUrl: getUrl
  }

});
