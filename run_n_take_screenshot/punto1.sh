  for f in *.zip_dir ; do 
  	cd $f
  	#echo #####@@@------$f;
	mvn compile
	mvn tomcat7:run &
	echo PID:::::::: $!
	cd ..
	sleep 15
	echo taking snapshot
	node horseman.js $f
	kill -9 $!	
  	echo #####@@@-------$f;
  done
