 

                                      2018-11-12   // 实现路由功能  @lsq  lsq❤ zxc
var http = require('http');
var url  = require('url');

http.createServer(function (req,res) {

     var body = '';
     var pathname = url.parse(req.url).pathname;
     if(pathname==='/'||pathname.toLowerCase()==='/home'){
         body = getbody('首页','welcome to  NodeJS');
         writeResponseHead(res,body.length);
         res.end(body);

     }else  if(pathname.toLowerCase()==='/members'){
        body = getbody('成员','总共有五位成员');
        writeResponseHead(res,body.length);
        res.end(body);
        
    }else  if(pathname.toLowerCase()==='/members'){
        body = getbody('成员','总共有五位成员');
        writeResponseHead(res,body.length);
        res.end(body);
    
    }else{
        res.writeHead(404,{
            "Content-Type":"text/plain"
        });
        res.end('not found');
        
    }
  }).listen(8080,'127.0.0.1');
  console.log('server is runnig  on  http://127.0.0.1:8080');
  


  function getbody(title,content){
      var body = '<html>'+
                    '<head>'+
                        '<meta charset = "utf-8">'+
                        '<title>'
                            +title+
                        '</title>'+
                    '</head>'+
                    '<body>'+
                    '<h2>'
                        +content+
                    '</h2>'+
                    '</body>'+
                '</html>';
                return body;
  }
  function writeResponseHead(res,content_length) { 
      res.writeHead(200,{
          "Content-Type":"text/html"
      });
   }


