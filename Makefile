zip:
	rm -f countdown.zip
	zip countdown.zip src/*

firefox:
	cd src; zip countdown.zip ./*; mv countdown.zip ..
