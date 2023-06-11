for f in *.json; do
	sed -i -e s/has-legend/hasLegend/g $f
	sed -i -e s/has-sermon/hasSermon/g $f
	sed -i -e s/has-homily/hasHomily/g $f
	sed -i -e s/title-en/titleEn/g $f
	sed -i -e s/title-la/titleLa/g $f
	sed -i -e s/text-1/text1/g $f
	sed -i -e s/text-2/text2/g $f
	sed -i -e s/text-3/text3/g $f
done
