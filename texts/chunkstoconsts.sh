for f in *.json; do
	sed -i -e s/Chunks/Constituents/g $f
done
