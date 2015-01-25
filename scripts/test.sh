url=http://0.0.0.0:5000/pyg
url=http://pygments-emh.herokuapp.com/pyg
#url=http://himera-emh.herokuapp.com/compile
url=http://localhost:8080/compile
#echo OPTIONS
#curl -X OPTIONS -H "Origin: http://run.jsbin.com" $url -D-
#echo POST
#curl -X POST -H "Origin: http://run.jsbin.com" --data "lang=html&code=<h1>Hello World</h1>" $url -D-

curl -X OPTIONS -H "Content-Type: application/clojure" \
	    -d '{:expr ((fn foo [x] (js/alert x)) 42)}' \
        $url

curl -X POST -H "Content-Type: application/clojure" \
	    -d '{:expr ((fn foo [x] (js/alert x)) 42)}' \
        $url
